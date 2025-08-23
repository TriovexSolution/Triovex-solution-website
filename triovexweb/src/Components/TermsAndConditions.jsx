"use client";

import React, { useEffect, useState } from "react";

const TermsAndConditions = () => {
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode from <html> class (set by your navbar toggle)
  useEffect(() => {
    const checkTheme = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();

    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#000000" : "#FFFFFF",
        color: isDark ? "#FFFFFF" : "#313719",
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}
      className="flex justify-center w-full px-6 py-12 lg:px-32 py-22"
    >
      <div className="w-full max-w-6xl">
        <h1
          style={{ color: isDark ? "#FFFFFF" : "#313719" }}
          className="text-4xl font-bold my-4 text-center"
        >
          Terms & Conditions
        </h1>
        <p
          style={{ color: isDark ? "#D1D5DB" : "#4B5563" }}
          className="mb-2 italic text-center"
        >
          Effective Date: 31 July 2025
        </p>

        <section className="space-y-6 text-lg my-6">
          <p>
            Welcome to <strong>Triovex Solution</strong>. By using our website
            and services, you agree to play by the rules outlined below—don’t
            worry, they are fair, transparent, and written in plain English.
          </p>

          {/* Section 1 */}
          <div>
            <h2
              style={{ color: isDark ? "#FFFFFF" : "#313719" }}
              className="text-2xl font-semibold mt-6 mb-2"
            >
              1. Acceptance of Terms
            </h2>
            <p>
              By browsing our site, submitting inquiries, or using any of our
              services, you are agreeing to these Terms. If you do not agree
              with them, that’s okay but please do not use our services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2
              style={{ color: isDark ? "#FFFFFF" : "#313719" }}
              className="text-2xl font-semibold mt-6 mb-2"
            >
              2. Services We Provide
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Website & App Development</li>
              <li>AI/ML & Custom Software Solutions</li>
              <li>SEO, Digital Marketing, and Branding</li>
              <li>Shopify & E-commerce Store Setup</li>
              <li>Social Media Handling</li>
            </ul>
            <p className="mt-2">
              Each service is subject to individual agreements or quotations
              shared during project discussions.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2
              style={{ color: isDark ? "#FFFFFF" : "#313719" }}
              className="text-2xl font-semibold mt-6 mb-2"
            >
              3. Payments & Invoices
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>All pricing is quoted in your local or agreed-upon currency.</li>
              <li>
                Payment terms (50/50 split, milestone-based, or subscription)
                will be outlined before project kick-off.
              </li>
              <li>
                Delays in payment may result in paused or discontinued service.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2
              style={{ color: isDark ? "#FFFFFF" : "#313719" }}
              className="text-2xl font-semibold mt-6 mb-2"
            >
              4. Intellectual Property
            </h2>
            <p>
              All designs, content, code, and assets developed by Triovex remain
              our intellectual property until full payment is received. Upon
              payment, ownership will be transferred to the client unless agreed
              otherwise.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2
              style={{ color: isDark ? "#FFFFFF" : "#313719" }}
              className="text-2xl font-semibold mt-6 mb-2"
            >
              5. Client Responsibilities
            </h2>
            <p>To ensure smooth delivery, clients agree to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide timely feedback and approvals.</li>
              <li>
                Supply accurate content, images, or other required material.
              </li>
              <li>
                Respect agreed timelines to avoid unnecessary project delays.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2
              style={{ color: isDark ? "#FFFFFF" : "#313719" }}
              className="text-2xl font-semibold mt-6 mb-2"
            >
              6. Confidentiality
            </h2>
            <p>
              Any data, strategies, or business information you share with us
              will be kept 100% confidential. Similarly, we expect the same
              respect for our internal processes, tools, and know-how.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2
              style={{ color: isDark ? "#FFFFFF" : "#313719" }}
              className="text-2xl font-semibold mt-6 mb-2"
            >
              7. Limitation of Liability
            </h2>
            <p>
              While we aim for perfection, Triovex Solution is not liable for:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Any indirect or consequential damages.</li>
              <li>
                Losses resulting from third-party platforms, hosting, or tools.
              </li>
              <li>
                Client misuse, delays, or lack of communication impacting
                delivery.
              </li>
            </ul>
          </div>

          {/* Section 8 */}
          <div>
            <h2
              style={{ color: isDark ? "#FFFFFF" : "#313719" }}
              className="text-2xl font-semibold mt-6 mb-2"
            >
              8. Refunds & Cancellations
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Refunds will only be provided for services not yet initiated.
              </li>
              <li>
                Once a project has started, partial or full refunds will not be
                entertained unless explicitly agreed in writing.
              </li>
              <li>
                Subscription-based services can be canceled with one month’s
                notice.
              </li>
            </ul>
          </div>

          {/* Section 9 */}
          <div>
            <h2
              style={{ color: isDark ? "#FFFFFF" : "#313719" }}
              className="text-2xl font-semibold mt-6 mb-2"
            >
              9. Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. Any updates will be
              posted on this page, and continued use of our services means you
              accept the updated version.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2
              style={{ color: isDark ? "#FFFFFF" : "#313719" }}
              className="text-2xl font-semibold mt-6 mb-2"
            >
              10. Contact Us
            </h2>
            <p>Have a question or need help? We are always here:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@triovexsolution.com"
                  style={{ color: isDark ? "#FFFFFF" : "#313719" }}
                  className="hover:underline"
                >
                  support@triovexsolution.com
                </a>
              </li>
              <li>
                <strong>WhatsApp/Phone:</strong>{" "}
                <a
                  href="https://wa.me/+919978985611"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: isDark ? "#FFFFFF" : "#313719" }}
                  className="hover:underline"
                >
                  +91 99789 85611
                </a>
              </li>
              <li>
                <strong>Address:</strong>{" "}
                <a
                  href="https://www.google.com/maps/place/Shivalik+Shilp/@23.0270241,72.5063417,16z"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: isDark ? "#FFFFFF" : "#313719" }}
                  className="hover:underline"
                >
                  1306, Shivalik Shilp, Iscon Cross Road, Sanidhya, Ahmedabad -
                  380054
                </a>
              </li>
            </ul>
          </div>

          {/* Section 11 */}
          <div>
            <h2
              style={{ color: isDark ? "#FFFFFF" : "#313719" }}
              className="text-2xl font-semibold mt-6 mb-2"
            >
              11. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes will be subject to the exclusive
              jurisdiction of the courts in Ahmedabad, Gujarat.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
