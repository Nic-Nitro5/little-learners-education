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
        Payment is required between the first and fifth of every month as this secures your timeslots for the month ahead.
      </p>

      <h2>Notice</h2>
      <p>
        Failure to attend a scheduled session without at least 24 hours&apos;
        notice results in a full charge, with no refund and no make-up time.
      </p>
      <p>
        Where 24 hours&apos; notice is given, or where the teacher or tutor is
        unable to attend, the time is not lost; it is carried over and
        made up across later lessons or sessions. For example, a missed one-hour lesson is
        recovered by extending the next two lessons by thirty minutes each.
        Payment already made is not refunded and is not carried forward to a
        new month.
      </p>

      <h2>Cancellations</h2>
      <p>
        We require a full calendar month (thirty days) written notice (this
        can be in email). Please note that it will normally take a
        maximum of two months to recognise substantial improvement in a
        student&apos;s grades, we prefer to have long term students for
        increased benefits and success.
      </p>
    </LegalPageLayout>
  );
}
