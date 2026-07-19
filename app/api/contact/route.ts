import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "../../lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  company?: string; // honeypot — real users never fill this in
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "INVALID_BODY" }, { status: 400 });
  }

  const { name, email, service, message, company } = body;

  // Honeypot: bots fill every field, including this hidden one. Pretend success
  // so the bot doesn't learn to avoid the field, but never actually send anything.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "MISSING_FIELDS" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "INVALID_EMAIL" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No email provider configured yet. Tell the client so it can fall back
    // to a mailto: link. Wire up RESEND_API_KEY (see README) to send for real.
    return NextResponse.json({ error: "EMAIL_NOT_CONFIGURED" }, { status: 503 });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Little Learners Education <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New enquiry: ${service || "General"} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Service: ${service || "Not specified"}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json({ error: "SEND_FAILED" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "SEND_FAILED" }, { status: 502 });
  }
}
