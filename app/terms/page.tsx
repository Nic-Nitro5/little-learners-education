import type { Metadata } from "next";
import LegalPageLayout from "../components/LegalPageLayout";
import { CONTACT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for lessons, registration, payment and cancellations at Little Learners Education.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions">
      <h2>Introduction</h2>
      <p>
        Welcome to the terms and conditions of Little Learners Education.
        Please note the terms and conditions below, if you have any
        queries please do not hesitate to contact me directly on:
      </p>
      <p>
        Email:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>

      <h2>Registration Fee</h2>
      <p>
        A once off registration fee per child is required in accordance
        with administration and preparation for the coverage of a 12
        month period. The fee amount is dependent on region.
      </p>

      <h2>Payment</h2>
      <p>
        Payment is required by the first of every month, alternatively
        before the first lesson commences as this secures your timeslots
        for the month ahead.
      </p>

      <h2>Lessons / Time Missed</h2>
      <p>
        In the event that the student or the teacher / tutor misses a
        lesson or time slot that has been scheduled, for any reason,
        please note that the time will be carried over e.g. a 1 hour
        session will become a 1.5 hour session for 2x lessons and so
        forth &mdash; recovering the time unrendered, and no moneys will
        be carried forward to a new month/s. Extra time will be added to
        a new month&apos;s invoice &mdash; not affecting the invoice
        total. If time is not recovered within the next month (paid
        invoice), that time will be forfeited. Please give 24 hours
        notice for any cancellation in order to recover the lesson.
      </p>

      <h2>Termination of Services</h2>
      <p>
        We require a full calendar month (30 days) written notice (this
        can be in email). Please note that it will normally take a
        maximum of 3 months to recognise substantial improvement in a
        student&apos;s grades, we prefer to have long term students for
        increased benefit.
      </p>
    </LegalPageLayout>
  );
}
