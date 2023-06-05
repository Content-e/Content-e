import React from "react";
import "./style.css";

import HeaderDesktop from "components/authentication/components/header-desktop";
import HeaderMobile from "components/authentication/components/header-mobile";
import Footer from "components/authentication/components/footer";

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <div className="privacy-policy-wrapper">
        <div className="privacy-policy-top">
          <div className="privacy-policy-container">
            <HeaderMobile />
            <HeaderDesktop />
            <div className="privacy-policy-top-content">
              <div className="privacy-policy-top-title">PRIVACY POLICY</div>
              <div className="privacy-policy-top-subtitle">
                Welcome to the EDC Squared Privacy Policy.
              </div>
              <div className="privacy-policy-top-description">
                EDC respects your privacy and is committed to protecting your
                personal data. This privacy policy will inform you as to how we
                look after your personal data when you visit our website:
                edcsquared.io or mobile application (together, the “Website”)
                (regardless of where you visit it from) and tell you about your
                privacy rights and how the law protects you.
              </div>
            </div>
          </div>
        </div>
        <div className="privacy-policy-content">
          <div className="privacy-policy-container">
            <div className="privacy-policy-section">
              <div className="privacy-policy-title">
                1. Important information and who we are
              </div>
              <div className="privacy-policy-subtitle">
                Purpose of this privacy policy
              </div>
              <div className="privacy-policy-text">
                This privacy policy aims to give you information on how EDC
                collects and processes your personal data through your use of
                this website, including any data you may provide through this
                website. This website is not intended for children and we do not
                knowingly collect data relating to children. It is important
                that you read this privacy policy together with any other
                privacy policy or fair processing policy we may provide on
                specific occasions when we are collecting or processing personal
                data about you so that you are fully aware of how and why we are
                using your data. This privacy policy supplements other notices
                and privacy policies and is not intended to override them.
              </div>
              <div className="privacy-policy-subtitle">Controller</div>
              <div className="privacy-policy-text">
                EDC Squared DMCC is the controller and responsible for your
                personal data (collectively referred to as "EDC", "we", "us" or
                "our" in this privacy policy).
              </div>
              <div className="privacy-policy-subtitle">Contact details</div>
              <div className="privacy-policy-text">
                If you have any questions about this privacy policy or our
                privacy practices, please contact us at hello@edcsquared.io
              </div>
              <div className="privacy-policy-subtitle">Contact details</div>
              <div className="privacy-policy-text">
                <p>
                  We keep our privacy policy under regular review. This version
                  was last updated in March 2023.
                </p>
                <p>
                  It is important that the personal data we hold about you is
                  accurate and current. Please keep us informed if your personal
                  data changes during your relationship with us.
                </p>
              </div>
              <div className="privacy-policy-subtitle">Third-party links</div>
              <div className="privacy-policy-text">
                This website may include links to third-party websites, plug-ins
                and applications. Clicking on those links or enabling those
                connections may allow third parties to collect or share data
                about you. We do not control these third-party websites and are
                not responsible for their privacy statements. When you leave our
                website, we encourage you to read the privacy policy of every
                website you visit.
              </div>
            </div>
            <div className="privacy-policy-section">
              <div className="privacy-policy-title">
                2. The data we collect about you
              </div>
              <div className="privacy-policy-text">
                Personal data, or personal information, means any information
                about an individual from which that person can be identified. It
                does not include data where the identity has been removed
                (anonymous data). We may collect, use, store and transfer
                different kinds of personal data about you which we have grouped
                together as follows:
              </div>
              <ul className="list-none privacy-policy-list">
                <li>
                  <span>· Identity Data</span> includes first name, maiden name,
                  last name, username or similar identifier, marital status,
                  title, date of birth and gender.
                </li>
                <li>
                  <span>· Contact Data</span> includes addresses, email address
                  and telephone numbers.
                </li>
                <li>
                  <span>· Financial Data</span> includes bank account details.
                </li>
                <li>
                  <span>· Transaction Data</span> includes details about
                  payments to and from you and other details of products or
                  services you have purchased from or provided to us.
                </li>
                <li>
                  <span>· Transaction Data</span> includes details about
                  payments to and from you and other details of products or
                  services you have purchased from or provided to us.
                </li>
                <li>
                  <span>· Profile Data</span> includes your username and
                  password, transactions made by you, your interests,
                  preferences, feedback and survey responses.
                </li>
                <li>
                  <span>· Usage Data</span> includes information about how you
                  use our website, products and services
                </li>
                <li>
                  <span>· Marketing and Communications Data</span> includes your
                  preferences in receiving marketing from us and our third
                  parties and your communication preferences.
                </li>
              </ul>
              <div className="privacy-policy-text">
                <p>
                  We may also collect, use and share{" "}
                  <span>Aggregated Data</span> such as statistical or
                  demographic data for any purpose. Aggregated Data could be
                  derived from your personal data but is not considered personal
                  data in law as this data will not directly or indirectly
                  reveal your identity. For example, we may aggregate your Usage
                  Data to calculate the percentage of users accessing a specific
                  website feature. However, if we combine or connect Aggregated
                  Data with your personal data so that it can directly or
                  indirectly identify you, we treat the combined data as
                  personal data which will be used in accordance with this
                  privacy policy.
                </p>
                <p>
                  We do not collect any{" "}
                  <span>Special Categories of Personal Data</span> about you
                  (this includes details about your race or ethnicity, religious
                  or philosophical beliefs, sex life, sexual orientation,
                  political opinions, trade union membership, information about
                  your health, and genetic and biometric data). Nor do we
                  collect any information about criminal convictions and
                  offences.
                </p>
              </div>
              <div className="privacy-policy-subtitle">
                If you fail to provide personal data
              </div>
              <div className="privacy-policy-text">
                Where we need to collect personal data by law, or under the
                terms of a contract we have with you, and you fail to provide
                that data when requested, we may not be able to perform the
                contract we have or are trying to enter into with you (for
                example, to provide you with goods or services or access to the
                same). In this case, we may have to cancel a product or service
                or access you have with us but we will notify you if this is the
                case at the time.
              </div>
            </div>
            <div className="privacy-policy-section">
              <div className="privacy-policy-title">
                3. How is your personal data collected?
              </div>
              <div className="privacy-policy-text">
                We use different methods to collect data from and about you
                including through:
              </div>
              <ul className="list-none privacy-policy-list">
                <li>
                  <span>· Direct interactions.</span> You may give us your
                  Identity, Contact and Financial Data by filling in account
                  details, forms or by corresponding with us. This includes but
                  is not limited to personal data you provide when you:
                </li>
                <li>
                  <span>· Contact Data</span> includes addresses, email address
                  and telephone numbers.
                </li>
                <li>· create an account on our website;</li>
                <li>· engage with our services or publications;</li>
                <li>· request marketing to be sent to you;</li>
                <li>· enter a competition, promotion or survey; or</li>
                <li>· give us feedback or contact us.</li>
                <li>
                  <span>· Automated technologies or interactions.</span> As you
                  interact with our website, we will automatically collect
                  Technical Data about your equipment, browsing actions
                </li>
                <li>
                  and patterns. We collect this personal data by using cookies[,
                  server logs] and other similar technologies. We may also
                  receive Technical Data about you if you visit other websites
                  employing our cookies. Please see our cookie policy{" "}
                  <a href="https://www.edcsquared.io/cookiepolicy">
                    https://www.edcsquared.io/cookiepolicy
                  </a>{" "}
                  for further details.
                </li>
                <li>
                  <span>Technical Data</span> from the following parties:
                </li>
                <li>
                  <p>(a) analytics providers such as Google; and</p>
                  <p>(b) advertising networks such as TikTok, Meta.</p>
                </li>
              </ul>
            </div>
            <div className="privacy-policy-section">
              <div className="privacy-policy-title">
                4. How we use your personal data
              </div>
              <div className="privacy-policy-text">
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </div>
              <ul className="list-none privacy-policy-list">
                <li>
                  · Where we need to perform the contract we are about to enter
                  into or have entered into with you.
                </li>
                <li>
                  <span>· Contact Data</span> includes addresses, email address
                  and telephone numbers.
                </li>
                <li>
                  · Where it is necessary for our legitimate interests (or those
                  of a third party) and your interests and fundamental rights do
                  not override those interests.
                </li>
                <li>· Where we need to comply with a legal obligation.</li>
              </ul>
              <div className="privacy-policy-text">
                <p>
                  Click <a href="/">here</a> to find out more about the types of
                  lawful basis that we will rely on to process your personal
                  data.
                </p>
                <p>
                  Generally, we do not rely on consent as a legal basis for
                  processing your personal data although we will get your
                  consent before sending third party direct marketing
                  communications to you via email or text message. You have the
                  right to withdraw consent to marketing at any time by
                  contacting us. Purposes for which we will use your p
                </p>
              </div>
              <div className="privacy-policy-subtitle">
                Purposes for which we will use your personal data
              </div>
              <div className="privacy-policy-text">
                We have set out below, in a table format, a description of all
                the ways we plan to use your personal data, and which of the
                legal bases we rely on to do so. We have also identified what
                our legitimate interests are where appropriate. Note that we may
                process your personal data for more than one lawful ground
                depending on the specific purpose for which we are using your
                data. Please contact us if you need details about the specific
                legal ground we are relying on to process your personal data
                where more than one ground has been set out in the table below.
              </div>
              <table className="privacy-policy-table">
                <tr>
                  <th>Purpose/Activity</th>
                  <th>Type of data</th>
                  <th>
                    Lawful basis for processing including basis of legitimate
                    interest
                  </th>
                </tr>
                <tr>
                  <td>To register you as a new user on our Website</td>
                  <td>
                    (a) Identity
                    <br />
                    <br />
                    (b) Contact
                  </td>
                  <td>Performance of a contract with you</td>
                </tr>
                <tr>
                  <td>
                    To process and deliver the Services:
                    <br />
                    <br />
                    (a) Manage payments, fees and charges
                    <br />
                    <br />
                    (b) Collect and recover money owed to us
                  </td>
                  <td>
                    (a) Identity
                    <br />
                    <br />
                    (b) Contact
                    <br />
                    <br />
                    (c) Financial
                    <br />
                    <br />
                    (d) Transaction
                    <br />
                    <br />
                    (e) Marketing and Communications
                  </td>
                  <td>
                    (a) Performance of a contract with you
                    <br />
                    <br />
                    (b) Necessary for our legitimate interests (to recover debts
                    due to us)
                  </td>
                </tr>
                <tr>
                  <td>
                    To manage our relationship with you which will include:
                    <br />
                    <br />
                    (a) Notifying you about changes to our terms or privacy
                    policy
                    <br />
                    <br />
                    (b) Asking you to leave a review or take a survey
                  </td>
                  <td>
                    (a) Identity
                    <br />
                    <br />
                    (b) Contact
                    <br />
                    <br />
                    (c) Profile
                    <br />
                    <br />
                    (d) Marketing and Communications
                  </td>
                  <td>
                    (a) Performance of a contract with you
                    <br />
                    <br />
                    (b) Necessary to comply with a legal obligation
                    <br />
                    <br />
                    (c) Necessary for our legitimate interests (to keep our
                    records updated and to study how customers use our
                    products/services)
                  </td>
                </tr>
                <tr>
                  <td>
                    To enable you to partake in a prize draw, competition or
                    complete a survey
                  </td>
                  <td>
                    (a) Identity
                    <br />
                    <br />
                    (b) Contact
                    <br />
                    <br />
                    (c) Profile
                    <br />
                    <br />
                    (d) Usage
                    <br />
                    <br />
                    (d) Marketing and Communications
                  </td>
                  <td>
                    (a) Performance of a contract with you
                    <br />
                    <br />
                    (b) Necessary for our legitimate interests (to study how
                    customers use our products/services, to develop them and
                    grow our business)
                  </td>
                </tr>
                <tr>
                  <td>
                    To administer and protect our business and this website
                    (including troubleshooting, data analysis, testing, system
                    maintenance, support, reporting and hosting of data)
                  </td>
                  <td>
                    (a) Identity
                    <br />
                    <br />
                    (b) Contact
                    <br />
                    <br />
                    (c) Technical
                  </td>
                  <td>
                    (a) Necessary for our legitimate interests (for running our
                    business, provision of administration and IT services,
                    network security, to prevent fraud and in the context of a
                    business reorganisation or group restructuring exercise)
                    <br />
                    <br />
                    (b) Necessary to comply with a legal obligation
                  </td>
                </tr>
                <tr>
                  <td>
                    To deliver relevant website content and advertisements to
                    you and measure or understand the effectiveness of the
                    advertising we serve to you
                  </td>
                  <td>
                    (a) Identity
                    <br />
                    <br />
                    (b) Contact
                    <br />
                    <br />
                    (c) Profile
                    <br />
                    <br />
                    (d) Usage
                    <br />
                    <br />
                    (e) Marketing and Communications
                    <br />
                    <br />
                    (f) Technical
                  </td>
                  <td>
                    Necessary for our legitimate interests (to study how
                    customers use our products/services, to develop them, to
                    grow our business and to inform our marketing strategy)
                  </td>
                </tr>
                <tr>
                  <td>
                    To use data analytics to improve our website,
                    products/services, marketing, customer relationships and
                    experiences
                  </td>
                  <td>
                    (a) Identity
                    <br />
                    <br />
                    (b) Usage
                  </td>
                  <td>
                    Necessary for our legitimate interests (to define types of
                    customers for our products and services, to keep our website
                    updated and relevant, to develop our business and to inform
                    our marketing strategy)
                  </td>
                </tr>
                <tr>
                  <td>
                    To make suggestions and recommendations to you about goods
                    or services that may be of interest to you
                  </td>
                  <td>
                    (a) Identity
                    <br />
                    <br />
                    (b) Contact
                    <br />
                    <br />
                    (c) Technical
                    <br />
                    <br />
                    (d) Usage
                    <br />
                    <br />
                    (e) Profile
                    <br />
                    <br />
                    (f) Marketing and Communications
                  </td>
                  <td>
                    Necessary for our legitimate interests (to develop our
                    products/services and grow our business)
                  </td>
                </tr>
              </table>
              <div className="privacy-policy-text">
                Your data may be transferred to, and stored in or outside, the
                United Arab Emirates. In submitting your data to us and using
                our Website, you acknowledge that your data may be sent to
                countries with differing levels of laws in the field of personal
                data protection. We require all third parties to whom any
                personal data is disclosed to keep it secure, treat it as
                confidential and use it only for the purposes agreed with us.
              </div>
              <div className="privacy-policy-subtitle">Marketing</div>
              <div className="privacy-policy-text">
                We strive to provide you with choices regarding certain personal
                data uses, particularly around marketing and advertising.
              </div>
              <div className="privacy-policy-subtitle">
                Promotional offers from us
              </div>
              <div className="privacy-policy-text">
                <p>
                  We may use your Identity, Contact, Technical, Usage and
                  Profile Data to form a view on what we think you may want or
                  need, or what may be of interest to you. This is how we decide
                  which products, services and offers may be relevant for you
                  (we call this marketing).
                </p>
                <p>
                  You will receive marketing communications from us if you have
                  requested information from us or purchased services from us
                  and you have not opted out of receiving that marketing.
                </p>
              </div>
              <div className="privacy-policy-subtitle">
                Third-party marketing
              </div>
              <div className="privacy-policy-text">
                We will get your express opt-in consent before we share your
                personal data with any third party for marketing purposes.
              </div>
              <div className="privacy-policy-subtitle">Opting out</div>
              <div className="privacy-policy-text">
                <p>
                  You can ask us or third parties to stop sending you marketing
                  messages at any time by logging into the Website and checking
                  or unchecking relevant boxes to adjust your marketing
                  preferences, by following the opt-out links on any marketing
                  message sent to you or by contacting us at any time.
                </p>
                <p>
                  Where you opt out of receiving these marketing messages, this
                  will not apply to personal data provided to us as a result of
                  a service provision or purchase or service experience or other
                  transactions.
                </p>
              </div>
              <div className="privacy-policy-subtitle">Cookies</div>
              <div className="privacy-policy-text">
                You can set your browser to refuse all or some browser cookies,
                or to alert you when websites set or access cookies. If you
                disable or refuse cookies, please note that some parts of this
                website may become inaccessible or not function properly. For
                more information about the cookies we use, please see{" "}
                <a href="https://www.edcsquared.io/cookiepolicy.">
                  https://www.edcsquared.io/cookiepolicy.
                </a>
              </div>
              <div className="privacy-policy-subtitle">Change of purpose</div>
              <div className="privacy-policy-text">
                <p>
                  We will only use your personal data for the purposes for which
                  we collected it, unless we reasonably consider that we need to
                  use it for another reason and that reason is compatible with
                  the original purpose. If you wish to get an explanation as to
                  how the processing for the new purpose is compatible with the
                  original purpose, please contact us.
                </p>
                <p>
                  If we need to use your personal data for an unrelated purpose,
                  we will notify you and we will explain the legal basis which
                  allows us to do so.
                </p>
                <p>
                  Please note that we may process your personal data without
                  your knowledge or consent, in compliance with the above rules,
                  where this is required or permitted by law.
                </p>
              </div>
            </div>
            <div className="privacy-policy-section">
              <div className="privacy-policy-title">
                5. Disclosures of your personal data
              </div>
              <div className="privacy-policy-text">
                We may share your personal data with the parties set out below
                for the purposes set out in the table Purposes for which we will
                use your personal data above.
              </div>
              <ul className="list-none privacy-policy-list">
                <li>· External Third Parties as set out below.</li>
                <li>
                  · Third parties to whom we may choose to sell, transfer or
                  merge parts of our business or our assets. Alternatively, we
                  may seek to acquire other businesses or merge with them. If a
                  change happens to our business, then the new owners may use
                  your personal data in the same way as set out in this privacy
                  policy.
                </li>
              </ul>
              <div className="privacy-policy-text">
                We require all third parties to respect the security of your
                personal data and to treat it in accordance with the law. We do
                not allow our third-party service providers to use your personal
                data for their own purposes and only permit them to process your
                personal data for specified purposes and in accordance with our
                instructions.
              </div>
            </div>
            <div className="privacy-policy-section">
              <div className="privacy-policy-title">
                6. International transfers
              </div>
              <div className="privacy-policy-text">
                <p>
                  Reflecting the regional span of our business, we process
                  personal data globally. This means we may also transfer
                  personal data to countries other than the one where you live
                  or use our Website. When we transfer your Personal Data
                  abroad, we will take appropriate measures to protect your
                  Personal Data in accordance with this Privacy Notice and the
                  laws of the country from where the transfer is occurring.
                </p>
                <p>
                  Where we are required to obtain from you consent to the
                  processing of personal data outside the country where you
                  access the Website, you provide that consent to us by
                  continuing to use the Website to the fullest extent possible
                  under applicable laws
                </p>
              </div>
            </div>
            <div className="privacy-policy-section">
              <div className="privacy-policy-title">7. Data security</div>
              <div className="privacy-policy-text">
                <p>
                  We have put in place appropriate security measures to prevent
                  your personal data from being accidentally lost, used or
                  accessed in an unauthorised way, altered or disclosed. In
                  addition, we limit access to your personal data to those
                  employees, agents, contractors and other third parties who
                  have a business need to know. They will only process your
                  personal data on our instructions and they are subject to a
                  duty of confidentiality.
                </p>
                <p>
                  We have put in place procedures to deal with any suspected
                  personal data breach and will notify you and any applicable
                  regulator of a breach where we are legally required to do so.
                </p>
              </div>
            </div>
            <div className="privacy-policy-section">
              <div className="privacy-policy-title">8. Data retention</div>
              <div className="privacy-policy-subtitle">Contact details</div>
              <div className="privacy-policy-text">
                <p>
                  We will only retain your personal data for as long as
                  reasonably necessary to fulfil the purposes we collected it
                  for, including for the purposes of satisfying any legal,
                  regulatory, tax, accounting or reporting requirements. We may
                  retain your personal data for a longer period in the event of
                  a complaint or if we reasonably believe there is a prospect of
                  litigation in respect to our relationship with you.
                </p>
                <p>
                  To determine the appropriate retention period for personal
                  data, we consider the amount, nature and sensitivity of the
                  personal data, the potential risk of harm from unauthorised
                  use or disclosure of your personal data, the purposes for
                  which we process your personal data and whether we can achieve
                  those purposes through other means, and the applicable legal,
                  regulatory, tax, accounting or other requirements.
                </p>
                <p>
                  By law we have to keep basic information about our customers
                  (including Contact, Identity, Financial and Transaction Data)
                  for six years after they cease being customers for tax
                  purposes.
                </p>
                <p>
                  In some circumstances you can ask us to delete your data: see
                  your legal rights below for further information. In some
                  circumstances we will anonymise your personal data (so that it
                  can no longer be associated with you) for research or
                  statistical purposes, in which case we may use this
                  information indefinitely without further notice to you.
                </p>
              </div>
            </div>
            <div className="privacy-policy-section">
              <div className="privacy-policy-title">9. Your legal rights</div>
              <div className="privacy-policy-text">
                Under certain circumstances, you have rights under data
                protection laws in relation to your personal data. Please see
                below to find out more about these rights. If you wish to
                exercise any of the rights set out above, please contact us.
              </div>
              <div className="privacy-policy-subtitle">
                No fee usually required
              </div>
              <div className="privacy-policy-text">
                You will not have to pay a fee to access your personal data (or
                to exercise any of the other rights). However, we may charge a
                reasonable fee if your request is clearly unfounded, repetitive
                or excessive. Alternatively, we could refuse to comply with your
                request in these circumstances.
              </div>
              <div className="privacy-policy-subtitle">
                What we may need from you
              </div>
              <div className="privacy-policy-text">
                We may need to request specific information from you to help us
                confirm your identity and ensure your right to access your
                personal data (or to exercise any of your other rights). This is
                a security measure to ensure that personal data is not disclosed
                to any person who has no right to receive it. We may also
                contact you to ask you for further information in relation to
                your request to speed up our response.
              </div>
              <div className="privacy-policy-subtitle">
                Time limit to respond
              </div>
              <div className="privacy-policy-text">
                We try to respond to all legitimate requests within one month.
                Occasionally it could take us longer than a month if your
                request is particularly complex or you have made a number of
                requests. In this case, we will notify you and keep you updated.
              </div>
            </div>
            <div className="privacy-policy-section">
              <div className="privacy-policy-title">10. Glossary</div>
              <div className="privacy-policy-subtitle bold">LAWFUL BASIS</div>
              <div className="privacy-policy-text">
                <p>
                  <span>Legitimate Interest</span> means the interest of our
                  business in conducting and managing our business to enable us
                  to give you the best service/product and the best and most
                  secure experience. We make sure we consider and balance any
                  potential impact on you (both positive and negative) and your
                  rights before we process your personal data for our legitimate
                  interests. We do not use your personal data for activities
                  where our interests are overridden by the impact on you
                  (unless we have your consent or are otherwise required or
                  permitted to by law). You can obtain further information about
                  how we assess our legitimate interests against any potential
                  impact on you in respect of specific activities by contacting
                  us.
                </p>
                <p>
                  <span>Performance of Contract</span> means processing your
                  data where it is necessary for the performance of a contract
                  to which you are a party or to take steps at your request
                  before entering into such a contract.
                </p>
                <p>
                  <span>Comply with a legal obligation</span> means processing
                  your personal data where it is necessary for compliance with a
                  legal obligation that we are subject to.
                </p>
              </div>
              <div className="privacy-policy-subtitle bold">THIRD PARTIES</div>
              <div className="privacy-policy-subtitle">
                External Third Parties
              </div>
              <ul className="list-none privacy-policy-list">
                <li>
                  · Service providers acting as processors who provide IT and
                  system administration services.
                </li>
                <li>· Payment processing companies</li>
                <li>
                  · HM Revenue & Customs, regulators and other authorities
                  acting as processors or joint controllers who require
                  reporting of processing activities in certain circumstances.
                </li>
                <li>· EDC Customers.</li>
              </ul>
              <div className="privacy-policy-subtitle bold">
                YOUR LEGAL RIGHTS
              </div>
              <div className="privacy-policy-subtitle">
                You have the right to:
              </div>
              <div className="privacy-policy-text">
                <p>
                  <span>Request access</span> to your personal data (commonly
                  known as a "data subject access request"). This enables you to
                  receive a copy of the personal data we hold about you and to
                  check that we are lawfully processing it.
                </p>
                <p>
                  <span>Request correction</span> of the personal data that we
                  hold about you. This enables you to have any incomplete or
                  inaccurate data we hold about you corrected, though we may
                  need to verify the accuracy of the new data you provide to us.
                </p>
                <p>
                  <span>Request erasure</span> of your personal data. This
                  enables you to ask us to delete or remove personal data where
                  there is no good reason for us continuing to process it. You
                  also have the right to ask us to delete or remove your
                  personal data where you have successfully exercised your right
                  to object to processing (see below), where we may have
                  processed your information unlawfully or where we are required
                  to erase your personal data to comply with local law. Note,
                  however, that we may not always be able to comply with your
                  request of erasure for specific legal reasons which will be
                  notified to you, if applicable, at the time of your request.
                </p>
                <p>
                  <span>Object to processing</span> of your personal data where
                  we are relying on a legitimate interest (or those of a third
                  party) and there is something about your particular situation
                  which makes you want to object to processing on this ground as
                  you feel it impacts on your fundamental rights and freedoms.
                  You also have the right to object where we are processing your
                  personal data for direct marketing purposes. In some cases, we
                  may demonstrate that we have compelling legitimate grounds to
                  process your information which override your rights and
                  freedoms.
                </p>
                <p>
                  <span>Request restriction of processing</span> of your
                  personal data. This enables you to ask us to suspend the
                  processing of your personal data in the following scenarios:
                </p>
              </div>
              <ul className="list-none privacy-policy-list">
                <li>· If you want us to establish the data's accuracy</li>
                <li>
                  · Where our use of the data is unlawful but you do not want us
                  to erase it.
                </li>
                <li>
                  · Where you need us to hold the data even if we no longer
                  require it as you need it to establish, exercise or defend
                  legal claims.
                </li>
                <li>
                  · You have objected to our use of your data but we need to
                  verify whether we have overriding legitimate grounds to use
                  it.
                </li>
              </ul>
              <div className="privacy-policy-text">
                <p>
                  <span>Request the transfer</span> of your personal data to you
                  or to a third party. We will provide to you, or a third party
                  you have chosen, your personal data in a structured, commonly
                  used, machine-readable format. Note that this right only
                  applies to automated information which you initially provided
                  consent for us to use or where we used the information to
                  perform a contract with you.
                </p>
                <p>
                  <span>Withdraw consent</span> at any time where we are relying
                  on consent to process your personal data. However, this will
                  not affect the lawfulness of any processing carried out before
                  you withdraw your consent. If you withdraw your consent, we
                  may not be able to provide certain products or services to
                  you. We will advise you if this is the case at the time you
                  withdraw your consent.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer isDark={true} />
      </div>
    </>
  );
};

export default PrivacyPolicy;
