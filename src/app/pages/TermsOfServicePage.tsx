import { motion } from "motion/react";

interface TermsOfServicePageProps {
  darkMode: boolean;
}

type TermsSection = {
  id: string;
  title: string;
  intro?: string;
  bullets?: string[];
  paragraphs?: string[];
};

const sections: TermsSection[] = [
  {
    id: "services-provided",
    title: "1. Services Provided",
    intro: "AbroadAoo Consultancy provides professional consultancy services related to:",
    bullets: [
      "Study abroad guidance and counselling",
      "University and program selection assistance",
      "Application preparation and submission support",
      "Visa application guidance",
      "Scholarship and funding assistance",
      "Document review and preparation",
      "Other educational consultancy services",
    ],
    paragraphs: [
      "Our services are advisory in nature and intended to assist clients in navigating the study abroad process.",
    ],
  },
  {
    id: "user-responsibilities",
    title: "2. User Responsibilities",
    intro: "By using our services, you agree to:",
    bullets: [
      "Provide accurate, complete, and truthful information during consultations and applications.",
      "Submit authentic documents and avoid providing misleading or fraudulent information.",
      "Cooperate with consultants by providing requested documentation within required timelines.",
      "Comply with the rules and regulations of universities, embassies, and immigration authorities.",
    ],
    paragraphs: [
      "AbroadAoo Consultancy will not be responsible for issues arising from incorrect or fraudulent information provided by clients.",
    ],
  },
  {
    id: "no-guarantee",
    title: "3. No Guarantee of Admission or Visa",
    paragraphs: [
      "While we strive to provide the best professional guidance, we do not guarantee admission to any university or institution.",
      "We do not guarantee visa approval by any embassy or immigration authority.",
      "Final decisions are made solely by universities, immigration authorities, and government agencies.",
      "Our role is to provide guidance and support, not decision-making authority.",
    ],
  },
  {
    id: "fees-payments",
    title: "4. Fees and Payments",
    bullets: [
      "Certain services may require payment of consultancy fees.",
      "All fees will be communicated before service confirmation.",
      "Payments may include consultation charges, application processing fees, or service packages.",
      "Fees paid to AbroadAoo Consultancy are non-refundable unless explicitly stated otherwise.",
      "University fees, visa fees, and other third-party charges are separate and paid directly to the respective institutions or authorities.",
    ],
  },
  {
    id: "confidentiality",
    title: "5. Confidentiality and Data Protection",
    paragraphs: [
      "We take the protection of client information seriously.",
      "All personal and professional information provided to us is handled according to our Privacy Policy, which outlines how data is collected, stored, and processed.",
      "By using our services, you consent to the use of your information as described in the Privacy Policy.",
    ],
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    intro:
      "All content on our website and materials provided by AbroadAoo Consultancy, including logos, branding, documents, website content, and consultancy materials, are the intellectual property of AbroadAoo Consultancy.",
    paragraphs: [
      "You may not copy, distribute, reproduce, or use our materials without prior written permission.",
    ],
  },
  {
    id: "limitation-liability",
    title: "7. Limitation of Liability",
    intro: "AbroadAoo Consultancy shall not be held liable for:",
    bullets: [
      "Rejection of university applications",
      "Visa refusals or delays",
      "Changes in immigration policies",
      "Decisions made by universities, embassies, or third parties",
      "Financial losses resulting from external decisions or circumstances",
    ],
    paragraphs: ["Our services are provided on a best-effort basis with professional guidance."],
  },
  {
    id: "third-party-services",
    title: "8. Third-Party Services",
    paragraphs: [
      "Our consultancy may involve interaction with third-party organizations such as universities, immigration authorities, scholarship organizations, and testing agencies.",
      "We are not responsible for the policies, services, or decisions made by these third parties.",
    ],
  },
  {
    id: "termination",
    title: "9. Termination of Services",
    intro: "We reserve the right to suspend or terminate services if:",
    bullets: [
      "Clients provide fraudulent documents",
      "Clients engage in abusive or unethical behavior",
      "Clients violate these Terms of Service",
    ],
    paragraphs: ["Termination may occur without refund where misconduct is involved."],
  },
  {
    id: "changes",
    title: "10. Changes to Services or Terms",
    paragraphs: [
      "AbroadAoo Consultancy reserves the right to modify or discontinue services and update these Terms of Service.",
      "Changes will be published on our website with an updated effective date.",
    ],
  },
  {
    id: "governing-law",
    title: "11. Governing Law",
    paragraphs: [
      "These Terms shall be governed by and interpreted according to the laws of your jurisdiction.",
      "Any disputes arising from the use of our services will be resolved under the jurisdiction of the applicable courts.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact Information",
    paragraphs: [
      "For any questions regarding these Terms of Service:",
      "Email: support@abroadaoo.com",
      "Phone: +92 3141840011",
    ],
  },
];

export function TermsOfServicePage({ darkMode }: TermsOfServicePageProps) {
  const effectiveDate = "March 15, 2026";
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || "support@abroadaoo.com";
  const contactPhoneDisplay = import.meta.env.VITE_CONTACT_PHONE_DISPLAY || "+92 3141840011";

  return (
    <section
      className="min-h-screen px-6 py-24"
      style={{
        background: darkMode
          ? "linear-gradient(135deg, #141210 0%, #111 100%)"
          : "linear-gradient(135deg, #FAF7F4 0%, #F0E8DF 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{
              background: darkMode ? "rgba(212,184,150,0.12)" : "rgba(212,184,150,0.3)",
              color: darkMode ? "#D4B896" : "#8B6B4A",
              fontFamily: "Sora, sans-serif",
              border: "1px solid rgba(196,168,130,0.3)",
            }}
          >
            Legal
          </span>
          <h1
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 800,
              color: darkMode ? "#fff" : "#111",
              lineHeight: 1.15,
            }}
          >
            Terms of Service
          </h1>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "0.95rem",
              color: darkMode ? "#aaa" : "#777",
              lineHeight: 1.7,
            }}
          >
            These Terms of Service govern your use of our consultancy services, website, communication platforms, and related
            services.
          </p>
          <div
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs"
            style={{
              background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.7)",
              border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(196,168,130,0.18)",
              fontFamily: "Sora, sans-serif",
              color: darkMode ? "#bbb" : "#666",
            }}
          >
            <span style={{ color: darkMode ? "#D4B896" : "#8B6B4A", fontWeight: 700 }}>Effective Date:</span>
            {effectiveDate}
          </div>
        </motion.div>

        <div
          className="rounded-3xl p-7 mb-6"
          style={{
            background: darkMode ? "#1a1a1a" : "#fff",
            border: darkMode ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(196,168,130,0.18)",
            boxShadow: darkMode ? "0 10px 40px rgba(0,0,0,0.35)" : "0 10px 40px rgba(196,168,130,0.12)",
          }}
        >
          <p
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "0.92rem",
              color: darkMode ? "#aaa" : "#777",
              lineHeight: 1.75,
            }}
          >
            By accessing or using our services, you agree to comply with these Terms. If you do not agree, you should not use our
            services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              className="rounded-3xl p-7"
              style={{
                background: darkMode ? "#1a1a1a" : "#fff",
                border: darkMode ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(196,168,130,0.18)",
                boxShadow: darkMode ? "0 10px 40px rgba(0,0,0,0.35)" : "0 10px 40px rgba(196,168,130,0.12)",
              }}
            >
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 900,
                  color: darkMode ? "#E8DCCF" : "#8B6B4A",
                  marginBottom: 10,
                }}
              >
                {section.title}
              </h2>

              {section.intro ? (
                <p
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontSize: "0.92rem",
                    color: darkMode ? "#aaa" : "#777",
                    lineHeight: 1.75,
                    marginBottom: section.bullets?.length ? 14 : 0,
                  }}
                >
                  {section.intro}
                </p>
              ) : null}

              {section.paragraphs?.length ? (
                <div className="space-y-3">
                  {section.paragraphs.map((p) => (
                    <p
                      key={p}
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontSize: "0.92rem",
                        color: darkMode ? "#aaa" : "#777",
                        lineHeight: 1.75,
                      }}
                    >
                      {(() => {
                        const withEmail = p.replaceAll("support@abroadaoo.com", supportEmail);
                        const withPhone = withEmail === "Phone: +92 3141840011" ? `Phone: ${contactPhoneDisplay}` : withEmail;
                        return withPhone;
                      })()}
                    </p>
                  ))}
                </div>
              ) : null}

              {section.bullets?.length ? (
                <ul className="mt-3 space-y-2.5">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: darkMode ? "rgba(212,184,150,0.8)" : "rgba(196,168,130,0.9)" }}
                      />
                      <span
                        style={{
                          fontFamily: "Sora, sans-serif",
                          fontSize: "0.92rem",
                          color: darkMode ? "#aaa" : "#777",
                          lineHeight: 1.75,
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
