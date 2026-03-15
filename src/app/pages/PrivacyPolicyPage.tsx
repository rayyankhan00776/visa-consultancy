import { motion } from "motion/react";

interface PrivacyPolicyPageProps {
  darkMode: boolean;
}

type PolicySection = {
  id: string;
  title: string;
  intro?: string;
  bullets?: string[];
  paragraphs?: string[];
};

const sections: PolicySection[] = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    intro:
      "We collect information to provide you with efficient, secure, and personalized services. The types of information we may collect include:",
    bullets: [
      "Personal Information: Full name, date of birth, gender, nationality, passport details, identification numbers, email address, phone number, and residential address.",
      "Educational and Professional Information: Academic transcripts, certificates, degrees, test scores, reference letters, resume/CV, professional experience, internships, and achievements.",
      "Financial Information: Bank account details, payment information, scholarship or funding documents, and tax-related information where applicable.",
      "Communication Data: Emails, phone conversations, messages via web forms or social media, and notes/records from consultant interactions.",
      "Technical Information: IP address, browser type, operating system, device identifiers, and usage data (pages visited, links clicked, time spent).",
      "Sensitive Information: Sensitive personal data necessary to process applications (e.g., health information, legal status, or biometric data) if required by authorities.",
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    paragraphs: [
      "We use the information we collect to provide consultancy services, application assistance, visa guidance, scholarship support, and related services.",
      "We may also use your information to communicate updates and reminders, process payments and document verification, ensure compliance with laws and contractual obligations, improve our services and records, and prevent fraud or unauthorized access.",
      "We will never sell, trade, or rent your personal information to third parties.",
    ],
  },
  {
    id: "security",
    title: "3. Data Protection & Security Measures",
    intro: "We prioritize client data protection at every step:",
    bullets: [
      "Encryption: Sensitive information is encrypted using industry-standard protocols during transmission and storage.",
      "Access Controls: Only authorized personnel can access personal information on a need-to-know basis.",
      "Secure Storage: We use secure servers, cloud storage solutions, and secure physical storage facilities.",
      "Regular Audits & Monitoring: Periodic audits help ensure compliance with data protection laws and best practices.",
      "Data Backup & Recovery: Regular backups and disaster recovery protocols protect against accidental loss and cyber-attacks.",
      "Confidentiality Agreements: Employees, consultants, and third-party providers are bound by confidentiality agreements.",
    ],
  },
  {
    id: "sharing",
    title: "4. Sharing and Disclosure of Information",
    intro: "We only share your information under strict circumstances:",
    bullets: [
      "Service Providers: Trusted partners assisting in processing, verification, or technology services under confidentiality agreements.",
      "Educational Institutions or Authorities: Only as necessary to process applications, visas, scholarships, or regulatory requirements.",
      "Legal Obligations: To comply with applicable laws, court orders, or governmental requests.",
      "Protection of Rights: To safeguard our rights, safety, property, or those of clients or third parties.",
      "We do not sell or trade client data for marketing purposes.",
    ],
  },
  {
    id: "international-transfers",
    title: "5. International Data Transfers",
    paragraphs: [
      "Your data may be stored, processed, and accessed in countries other than your country of residence.",
      "We take steps to ensure transfers comply with applicable data protection laws, including the use of standard contractual clauses and secure processing practices.",
    ],
  },
  {
    id: "retention",
    title: "6. Data Retention",
    paragraphs: [
      "We retain personal information only for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements.",
      "Retention periods may vary depending on the type of data and purpose of collection.",
    ],
  },
  {
    id: "rights",
    title: "7. Your Rights",
    intro: "Depending on applicable law, you may have the following rights regarding your personal information:",
    bullets: [
      "Access: Request a copy of personal information we hold about you.",
      "Correction: Correct inaccurate or incomplete data.",
      "Deletion: Request deletion of personal data, subject to legal obligations.",
      "Restriction: Limit the processing of your data.",
      "Objection: Object to processing for certain purposes.",
      "Data Portability: Receive your personal data in a structured, machine-readable format.",
      "To exercise your rights, contact: privacy@abroadaoo.com",
    ],
  },
  {
    id: "cookies",
    title: "8. Cookies and Tracking",
    paragraphs: [
      "Our website may use cookies, web beacons, and other tracking technologies to enhance your experience, analyze usage, and improve services.",
      "You may disable cookies in your browser settings, but some features may not function properly.",
    ],
  },
  {
    id: "minors",
    title: "9. Data Protection for Minors",
    paragraphs: [
      "Our services are intended for individuals aged 18 and above.",
      "We do not knowingly collect personal information from minors without parental or guardian consent.",
    ],
  },
  {
    id: "third-party-links",
    title: "10. Third-Party Websites and Links",
    paragraphs: [
      "Our website or communications may include links to external websites.",
      "We are not responsible for the privacy practices or content of these third-party sites.",
      "We encourage you to read their privacy policies.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this policy periodically to reflect changes in our practices, legal requirements, or technological advancements.",
      "Updates will be posted on our website with the revised effective date.",
    ],
  },
  {
    id: "dispute-resolution",
    title: "12. Dispute Resolution",
    paragraphs: [
      "Any disputes arising from this Privacy Policy or the use of our services shall be governed by the laws of your jurisdiction.",
      "Parties agree to seek amicable resolution through negotiation before pursuing legal action.",
    ],
  },
  {
    id: "contact",
    title: "13. Contact Information",
    paragraphs: [
      "For questions, concerns, or requests regarding your personal data:",
      "Email: privacy@abroadaoo.com",
      "Phone: +92 3141840011",
    ],
  },
];

export function PrivacyPolicyPage({ darkMode }: PrivacyPolicyPageProps) {
  const effectiveDate = "March 15, 2026";
  const privacyEmail = import.meta.env.VITE_PRIVACY_EMAIL || "privacy@abroadaoo.com";
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
            Privacy Policy
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
            AbroadAoo Consultancy ("we," "our," or "us") is committed to protecting the privacy and security of your personal
            information.
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

        {/* Content */}
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
                        const withEmail = p.replaceAll("privacy@abroadaoo.com", privacyEmail);
                        return withEmail === "Phone: +92 3141840011" ? `Phone: ${contactPhoneDisplay}` : withEmail;
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
                        {item.replaceAll("privacy@abroadaoo.com", privacyEmail)}
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
