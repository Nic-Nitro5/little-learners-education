import type { Metadata } from "next";
import LegalPageLayout from "../components/LegalPageLayout";
import { CONTACT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Little Learners Education collects, stores, uses and protects your personal information, in line with South Africa's POPI Act and the GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p className="rounded-xl border border-brand-beige-light bg-brand-beige-light/60 p-5 text-sm not-italic text-brand-brown/90">
        We respect your privacy. Callouts like this are a summary of our
        privacy policy and contain the most important and relevant points
        for you. Please read the full privacy policy because it applies
        to you.
      </p>

      <h2>Introduction</h2>
      <p>We respect your right to privacy.</p>
      <p>
        We take the protection of personal information very seriously.
        The purpose of this policy is to describe the way that we
        collect, store, use, and protect information that can be
        associated with you or another specific natural or juristic
        person and can be used to identify you or that person (personal
        information).
      </p>
      <p>
        Where we refer to &ldquo;personal information&rdquo;, it means
        &ldquo;personal information&rdquo; as defined in the Protection of
        Personal Information Act, 4 of 2013 (&ldquo;POPI&rdquo;), and
        &ldquo;personal data&rdquo; as per the General Data Protection
        Regulation 2016/679 (&ldquo;the GDPR&rdquo;).
      </p>
      <p>
        Where applicable, this privacy policy applies in addition to any
        other agreement that you enter into with us, that makes our
        Client And/or Supplier.
      </p>
      <p>
        For any comments or queries relating to this policy, please
        contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        .
      </p>
      <p>
        The purpose of this policy is to describe the way that we handle
        your personal information.
      </p>

      <h2>Audience</h2>
      <p>This policy applies to you if you are:</p>
      <ul>
        <li>a visitor to our website; or</li>
        <li>
          a customer who has ordered or requested the goods or services
          that we provide.
        </li>
      </ul>
      <p>This policy applies to you under certain circumstances.</p>

      <h2>Personal information</h2>
      <p>Personal information includes:</p>
      <ul>
        <li>
          certain information that we collect automatically when you
          visit our website;
        </li>
        <li>certain information collected on registration (see below);</li>
        <li>certain information collected on submission; and</li>
        <li>
          optional information that you provide to us voluntarily (see
          below);
        </li>
      </ul>
      <p>but excludes:</p>
      <ul>
        <li>
          information that has been made anonymous so that it does not
          identify a specific person;
        </li>
        <li>
          permanently de-identified information that does not relate or
          cannot be traced back to you specifically;
        </li>
        <li>
          non-personal statistical information collected and compiled by
          us; and
        </li>
        <li>
          information that you have provided voluntarily in an open,
          public environment or forum including any blog, chat room,
          community, classifieds, or discussion board (because the
          information has been disclosed in a public forum, it is no
          longer confidential and does not constitute personal
          information subject to protection under this policy).
        </li>
      </ul>
      <p>
        Personal information includes information we collect (i)
        automatically when you visit our website, (ii) on registration,
        (iii) on submission, and (iv) from you voluntarily. It excludes
        (i) anonymous, (ii) de-identified, (iii) non-personal
        statistical, and (iv) public information.
      </p>
      <p>
        Common examples of the types of personal information which we may
        collect and process include your:
      </p>
      <ul>
        <li>
          identifying information &ndash; such as your name, date of
          birth, or identification number of any kind;
        </li>
        <li>
          contact information &ndash; such as your phone number or email
          address;
        </li>
        <li>
          address information &ndash; such as your physical or postal
          address; or
        </li>
        <li>
          demographic information &ndash; such as your gender or marital
          status.
        </li>
      </ul>

      <h3>Sensitive personal information</h3>
      <p>
        Depending on the goods or services that you require, we may also
        collect sensitive personal information including your:
      </p>
      <ul>
        <li>
          financial information &ndash; such as your bank account details;
        </li>
        <li>
          sensitive demographic information &ndash; such as your race or
          ethnicity;
        </li>
        <li>
          medical information &ndash; such as information about your
          physical or mental health;
        </li>
        <li>
          sexual information &ndash; such as information about your sex
          life or sexual orientation;
        </li>
        <li>
          criminal information &ndash; such as information about your
          commission or alleged commission of any offence or about any
          related legal proceedings;
        </li>
        <li>
          employment information &ndash; including your membership of a
          trade union; and
        </li>
        <li>
          beliefs &ndash; including your political or religious beliefs.
        </li>
      </ul>

      <h2>Acceptance</h2>
      <h3>Acceptance required</h3>
      <p>
        You must accept all the terms of this policy when you order our
        goods or request our services. If you do not agree with anything
        in this policy, then you may not order our goods or request our
        services. If you proceed to register and provide further personal
        information through our website, you will be accepting this
        policy set herein.
      </p>
      <p>
        You may not order our goods or request our services if you do not
        accept this policy.
      </p>

      <h3>Legal capacity</h3>
      <p>
        You may not access our website or order our goods or request our
        services if you are younger than 18 years old or do not have
        legal capacity to conclude legally binding contracts.
      </p>

      <h3>Deemed acceptance</h3>
      <p>
        By accepting this policy, you are deemed to have read, understood,
        accepted, and agreed to be bound by all of its terms.
      </p>

      <h3>Your obligations</h3>
      <p>
        You may only send us your own personal information or the
        information of another data subject where you have their
        permission to do so.
      </p>

      <h2>Changes</h2>
      <p>
        We may change the terms of this policy at any time by updating
        this web page. We will notify you of any changes by placing a
        notice in a prominent place on the website or by sending you an
        email detailing the changes that we have made and indicating the
        date that they were last updated. If you do not agree with the
        changes, then you must stop using the website and our goods or
        services. If you continue to use the website or our goods or
        services following notification of a change to the terms, the
        changed terms will apply to you and you will be deemed to have
        accepted those updated terms.
      </p>

      <h2>Collection</h2>
      <h3>On registration / Contact Form</h3>
      <p>
        Once you register on our website, you will no longer be anonymous
        to us. You will provide us with certain personal information when
        you register on our website.
      </p>
      <p>This personal information will include:</p>
      <ul>
        <li>your name and surname;</li>
        <li>your email address;</li>
        <li>your telephone number;</li>
        <li>
          your company name, company registration number, and VAT number
          (if applicable);
        </li>
        <li>your postal address or street address;</li>
        <li>your username and password.</li>
      </ul>
      <p>
        We will use this personal information to fulfil your account,
        provide additional services and information to you as we
        reasonably think appropriate, and for any other purposes set out
        in this policy.
      </p>
      <p>
        We collect certain information on registration, when you register
        on our website.
      </p>

      <h3>On order or request</h3>
      <p>
        When you order our goods or request our services from us, you
        will be asked to provide us with additional information on a
        voluntary basis (goods or services information).
      </p>
      <p>
        We collect certain information when you order our goods or
        request our services from us.
      </p>

      <h3>From browser</h3>
      <p>
        We automatically receive and record Internet usage information on
        our server logs from your browser, such as your Internet Protocol
        address (IP address), browsing habits, click patterns, version of
        software installed, system type, screen resolutions, colour
        capabilities, plug-ins, language settings, cookie preferences,
        search engine keywords, JavaScript enablement, the content and
        pages that you access on the website, and the dates and times
        that you visit the website, paths taken, and time spent on sites
        and pages within the website (usage information). Please note
        that other websites visited before entering our website might
        place personal information within your URL during a visit to it,
        and we have no control over such websites. Accordingly, a
        subsequent website that collects URL information may log some
        personal information.
      </p>
      <p>
        We collect certain information from your web browser, including
        your Internet usage information when you visit our website.
      </p>

      <h3>Cookies</h3>
      <p>
        We may place small text files called &lsquo;cookies&rsquo; on
        your device when you visit our website. These files do not
        contain personal information, but they do contain a personal
        identifier allowing us to associate your personal information
        with a certain device. These files serve a number of useful
        purposes for you, including:
      </p>
      <ul>
        <li>granting you access to age restricted content;</li>
        <li>
          tailoring our website&apos;s functionality to you personally by
          letting us remember your preferences;
        </li>
        <li>improving how our website performs;</li>
        <li>
          allowing third parties to provide services to our website; and
        </li>
        <li>
          helping us deliver targeted advertising where appropriate in
          compliance with the applicable laws.
        </li>
      </ul>
      <p>
        Your internet browser generally accepts cookies automatically,
        but you can often change this setting to stop accepting them. You
        can also delete cookies manually. However, no longer accepting
        cookies or deleting them will prevent you from accessing certain
        aspects of our website where cookies are necessary. Many websites
        use cookies and you can find out more about them at{" "}
        <a
          href="https://www.allaboutcookies.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.allaboutcookies.org
        </a>
        .
      </p>
      <p>
        We collect certain information from cookies that we may send to
        your computer to try and give you a personalised experience.
      </p>

      <h3>Third party cookies</h3>
      <p>
        Some of our business partners use their own cookies or widgets on
        our website. We have no access to or control over them.
        Information collected by any of those cookies or widgets is
        governed by the privacy policy of the company that created it,
        and not by us.
      </p>

      <h3>Web beacons</h3>
      <p>
        Our website may contain electronic image requests (called a
        single-pixel gif or web beacon request) that allow us to count
        page views and to access cookies. Any electronic image viewed as
        part of a web page (including an ad banner) can act as a web
        beacon. Our web beacons do not collect, gather, monitor or share
        any of your personal information. We merely use them to compile
        anonymous information about our website.
      </p>
      <p>
        We collect certain optional information, that you provide when
        you upload or download content from our website or when you
        enter competitions, take advantage of promotions, respond to
        surveys or register and subscribe for certain additional goods or
        services.
      </p>

      <h3>Recording calls</h3>
      <p>
        We may monitor and record any telephone calls that you make to
        us, unless you specifically request us not to.
      </p>

      <h3>Purpose for collection</h3>
      <p>
        We may use or process any goods or services information, or
        optional information that you provide to us for the purposes
        that you indicated when you agreed to provide it to us.
        Processing includes gathering your personal information,
        disclosing it, and combining it with other personal information.
        We generally collect and process your personal information for
        various purposes, including:
      </p>
      <ul>
        <li>
          goods or services purposes &ndash; such as collecting orders or
          requests for and providing our goods or services;
        </li>
        <li>
          marketing purposes &ndash; such as pursuing lawful related
          marketing activities;
        </li>
        <li>
          business purposes &ndash; such as internal audit, accounting,
          business planning, and joint ventures, disposals of business,
          or other proposed and actual transactions; and
        </li>
        <li>
          legal purposes &ndash; such as handling claims, complying with
          regulations, or pursuing good governance.
        </li>
      </ul>
      <p>
        We may use your usage information for the purposes described
        above and to:
      </p>
      <ul>
        <li>
          remember your information so that you will not have to
          re-enter it during your visit or the next time you access the
          website;
        </li>
        <li>
          monitor website usage metrics such as total number of visitors
          and pages accessed; and
        </li>
        <li>
          track your entries, submissions, and status in any promotions
          or other activities in connection with your usage of the
          website.
        </li>
      </ul>
      <p>
        We may use any of your personal information that you provide to
        us for the purposes that you indicated when you agreed to provide
        it to us.
      </p>

      <h3>Consent to collection</h3>
      <p>We will obtain your consent to collect personal information:</p>
      <ul>
        <li>in accordance with applicable law;</li>
        <li>
          when you provide us with any registration information or
          optional information.
        </li>
      </ul>
      <p>
        We will get your consent to collect your personal information in
        accordance with applicable law when you provide us with it.
      </p>

      <h2>Use</h2>
      <h3>Our obligations</h3>
      <p>
        We may use your personal information to fulfil our obligations to
        you.
      </p>

      <h3>Messages and updates</h3>
      <p>
        We may send administrative messages and email updates to you
        about the website. We may wish to provide you with information
        about new goods or services in which we think you may be
        interested. This means that in some cases, we may also send you
        primarily promotional messages.
      </p>
      <p>
        We may use your information to send you administrative messages
        and email updates to you regarding the website and for marketing
        purposes where lawful.
      </p>

      <h3>Targeted content</h3>
      <p>
        While you are logged into the website, we may display targeted
        adverts and other relevant information based on your personal
        information. In a completely automated process, computers
        process the personal information and match it to adverts or
        related information. We never share personal information with
        any advertiser, unless you specifically provide us with your
        consent to do so. Advertisers receive a record of the total
        number of impressions and clicks for each advert. They do not
        receive any personal information. If you click on an advert, we
        may send a referring URL to the advertiser&apos;s website
        identifying that a customer is visiting from the website. We do
        not send personal information to advertisers with the referring
        URL. Once you are on the advertiser&apos;s website however, the
        advertiser is able to collect your personal information.
      </p>
      <p>
        We may use your information for targeted content in certain,
        specified instances.
      </p>

      <h2>Disclosure</h2>
      <h3>Sharing</h3>
      <p>We may share your personal information with:</p>
      <ul>
        <li>
          other divisions or companies within the group of companies to
          which we belong so as to provide joint content and services
          like registration, for transactions and customer support, to
          help detect and prevent potentially illegal acts and
          violations of our policies, and to guide decisions about our
          products, services, and communications (they will only use
          this information to send you marketing communications if you
          have requested their goods or services);
        </li>
        <li>
          an affiliate, in which case we will seek to require the
          affiliates to honour this privacy policy;
        </li>
        <li>
          our goods or services providers under contract who help provide
          certain goods or services or help with parts of our business
          operations, including fraud prevention, bill collection,
          marketing, technology services (our contracts dictate that
          these goods or services providers only use your information in
          connection with the goods or services they supply or services
          they perform for us and not for their own benefit);
        </li>
        <li>
          credit bureaus to report account information, as permitted by
          law;
        </li>
        <li>
          banking partners as required by credit card association rules
          for inclusion on their list of terminated merchants (in the
          event that you utilise the services to receive payments and you
          meet their criteria); and
        </li>
        <li>
          other third parties who provide us with relevant services where
          appropriate.
        </li>
      </ul>
      <p>
        We may share your personal information with third parties for
        the purposes of fulfilling our obligations to you among other
        purposes.
      </p>

      <h3>Regulators</h3>
      <p>
        We may disclose your personal information as required by law or
        governmental audit.
      </p>

      <h3>Law enforcement</h3>
      <p>We may disclose personal information if required:</p>
      <ul>
        <li>by a subpoena or court order;</li>
        <li>to comply with any law;</li>
        <li>
          to protect the safety of any individual or the general public;
          and
        </li>
        <li>
          to prevent violation of our customer relationship terms.
        </li>
      </ul>
      <p>
        We may disclose personal information to third parties if required
        for legal reasons.
      </p>

      <h3>Marketing purposes</h3>
      <p>
        We may disclose aggregate statistics (information about the
        customer population in general terms) about the personal
        information to advertisers or business partners.
      </p>

      <h3>Employees</h3>
      <p>
        We may need to disclose personal information to our employees
        that require the personal information to do their jobs. These
        include our responsible management, human resources, accounting,
        audit, compliance, information technology, or other personnel.
      </p>

      <h3>Change of ownership</h3>
      <p>
        If we undergo a change in ownership, or a merger with, acquisition
        by, or sale of assets to, another entity, we may assign our
        rights to the personal information we process to a successor,
        purchaser, or separate entity. We will disclose the transfer on
        the website. If you are concerned about your personal information
        migrating to a new owner, you may request us to delete your
        personal information.
      </p>

      <h2>Security</h2>
      <p>
        We take the security of personal information very seriously and
        always do our best to comply with applicable data protection
        laws. Our hosting company will host our website in a secure
        server environment that uses a firewall and other advanced
        security measures to prevent interference or access from outside
        intruders. We authorize access to personal information only for
        those employees who require it to fulfil their job
        responsibilities. We implement disaster recovery procedures where
        appropriate.
      </p>
      <p>
        Our website is hosted on a secure server and uses security
        measures to prevent interference by intruders.
      </p>

      <h2>Accurate and up to date</h2>
      <p>
        We will try to keep the personal information we collect as
        accurate, complete and up to date as is necessary for the
        purposes defined in this policy. From time to time we may request
        you to update your personal information on the website. You are
        able to review or update any personal information that we hold on
        you by accessing your account online, emailing us, or phoning us.
        Please note that in order to better protect you and safeguard
        your personal information, we take steps to verify your identity
        before granting you access to your account or making any
        corrections to your personal information.
      </p>
      <p>
        Please keep your personal information accurate and up to date by
        accessing your account online, emailing us, by phoning us.
      </p>

      <h2>Retention</h2>
      <p>
        We will only retain your personal information for as long as it
        is necessary to fulfil the purposes explicitly set out in this
        policy, unless:
      </p>
      <ul>
        <li>retention of the record is required or authorised by law; or</li>
        <li>you have consented to the retention of the record.</li>
      </ul>
      <p>
        During the period of retention, we will continue to abide by our
        non-disclosure obligations and will not share or sell your
        personal information.
      </p>
      <p>
        We may retain your personal information in physical or electronic
        records at our discretion.
      </p>
      <p>
        We will only retain your personal information for as long as is
        necessary.
      </p>

      <h2>Transfer to another country</h2>
      <p>
        We may transmit or transfer personal information outside of the
        country in which it was collected to a foreign country and
        process it in that country. Personal information may be stored on
        servers located outside the country in which it was collected in
        a foreign country whose laws protecting personal information may
        not be as stringent as the laws in the country in which it was
        collected. You consent to us processing your personal information
        in a foreign country whose laws regarding processing of personal
        information may be less stringent.
      </p>
      <p>
        We may transfer your personal information outside the country in
        which it was collected to a foreign country.
      </p>

      <h2>Updating or removing</h2>
      <p>
        You may choose to correct or update the personal information you
        have submitted to us, by clicking the relevant menu in any of the
        pages on our website or contacting us by phone or email.
      </p>
      <p>
        You may choose to update or remove the personal information you
        have submitted to us.
      </p>

      <h2>Limitation</h2>
      <p>
        We are not responsible for, give no warranties, nor make any
        representations in respect of the privacy policies or practices
        of linked or any third-party websites.
      </p>

      <h2>Enquiries</h2>
      <p>
        If you have any questions or concerns arising from this privacy
        policy or the way in which we handle personal information, please
        contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        . You have the right to make a complaint at any time to the South
        African Information Regulator for data protection issues (
        <a
          href="https://www.justice.gov.za/inforeg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.justice.gov.za/inforeg/
        </a>
        ). We would, however, appreciate the chance to deal with your
        concerns before you approach the South African Information
        Regulator so please contact us in the first instance.
      </p>
    </LegalPageLayout>
  );
}
