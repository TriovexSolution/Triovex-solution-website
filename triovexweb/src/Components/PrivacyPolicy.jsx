"use client";

import React, { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect browser theme
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkMediaQuery.matches);

    const listener = (e) => setIsDarkMode(e.matches);
    darkMediaQuery.addEventListener("change", listener);

    return () => darkMediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <div
      className={`flex justify-center w-full px-6 py-12 lg:px-32 py-22 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-[#313719]"
      }`}
    >
      {/* Inner container */}
      <div className="w-full max-w-6xl">
        <h1
          className={`text-4xl font-bold mt-4 mb-2 text-center ${
            isDarkMode ? "text-white" : "text-[#313719]"
          }`}
        >
          Privacy Policy
        </h1>

        <p className="mb-2 italic text-center">Last Updated: 31 July 2025</p>

        <section className="space-y-6 text-lg my-6">
          <p>
            Welcome to <strong>Triovex Solution</strong> where innovation meets
            trust. At Triovex Solution, your privacy is not just a policy, it’s
            a promise. We are committed to protecting your personal information
            and being transparent about how we use it.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Who We Are</h2>
            <p>
              We are a global tech solutions provider offering cutting-edge
              services like Website Development, AI/ML, App Development, SEO,
              Digital Marketing, and more. And yes, we take your privacy
              seriously across all platforms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">What We Collect</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Name, email, phone number</li>
              <li>Company name & location</li>
              <li>Project details or service interests</li>
              <li>Payment & billing information (only if applicable)</li>
              <li>Cookies and device/browser info (for better experience)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">
              How We Use Your Info
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Deliver and personalize our services</li>
              <li>Improve our website & communication</li>
              <li>Respond to your queries quickly</li>
              <li>Send you service updates or offers (only with your consent!)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">
              We Respect Your Trust
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>No selling your data. Ever.</li>
              <li>No spammy emails. Only relevant updates.</li>
              <li>
                You control your data. Unsubscribe or request deletion anytime.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Data Protection</h2>
            <p>
              We use secure servers, encrypted communication, and modern access
              controls to safeguard your data. Whether you are in India, the US,
              Europe, or elsewhere we follow strict data compliance norms (GDPR,
              etc.).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">
              Cookies? Just the Useful Ones
            </h2>
            <p>
              Yes, we use cookies not the chocolate ones but the kind that
              improves your browsing. You can choose to turn them off in your
              browser, no hard feelings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">
              Third-Party Sharing
            </h2>
            <p>
              We do not share your data with unknown third parties. We may,
              however, use verified service providers (like email platforms,
              analytics tools, payment gateways) who are equally committed to
              keeping your data safe.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Want to see what data we have? Just ask.</li>
              <li>Want it deleted? Say the word.</li>
              <li>
                Have a concern? We’re here to help:{" "}
                <a
                  href="mailto:support@triovexsolution.com"
                  className={`underline ${
                    isDarkMode ? "text-white" : "text-[#313719]"
                  }`}
                >
                  support@triovexsolution.com
                </a>{" "}
                or use our{" "}
                <a
                  href="/contact"
                  className={`underline ${
                    isDarkMode ? "text-white" : "text-[#313719]"
                  }`}
                >
                  contact form
                </a>
                .
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Policy Updates</h2>
            <p>
              We may update this policy when necessary. If it’s something major,
              we’ll notify you. But feel free to check this page anytime to stay
              informed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">
              Thanks for Trusting Us
            </h2>
            <p>
              We are thrilled to have you on board. This Privacy Policy is
              designed to ensure clarity, confidence, and care because your
              privacy deserves nothing less.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
