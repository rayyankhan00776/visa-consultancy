import { motion } from "motion/react";
import { GraduationCap, Wrench, BookOpen, Check, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ServicesSectionProps {
  darkMode: boolean;
}

const services = [
  {
    id: "masters",
    icon: GraduationCap,
    emoji: "🎓",
    title: "Master's Programs in Germany",
    color: "#C4A882",
    bgColor: "rgba(196,168,130,0.12)",
    features: [
      "16 years of education required (Bachelor's degree)",
      "IELTS or TOEFL required",
      "Many English-taught programs available",
      "German not required for many courses",
      "No tuition fees in most public universities",
    ],
    cta: "Learn More",
  },
  {
    id: "ausbildung",
    icon: Wrench,
    emoji: "🛠️",
    title: "Ausbildung in Germany",
    color: "#A07850",
    bgColor: "rgba(160,120,80,0.12)",
    features: [
      "Dual vocational training program",
      "Duration: 2 – 3.5 years",
      "Work in a company while studying",
      "Monthly stipend €800 – €1000",
      "No blocked account required if applying directly",
    ],
    cta: "Explore Ausbildung",
  },
  {
    id: "direct-bachelors",
    icon: BookOpen,
    emoji: "🎓",
    title: "Direct Bachelor's Route",
    color: "#8B6B4A",
    bgColor: "rgba(139,107,74,0.12)",
    features: [
      "After 2 semesters of Bachelor's in Pakistan",
      "Skip Studienkolleg – apply directly",
      "English Programs: IELTS 6.0+",
      "German Programs: B2 German level",
      "Blocked account €11,208 | Visa wait 3–6 months",
    ],
    cta: "Check Eligibility",
  },
];

type ProgramDetails = {
  title: string;
  intro: string[];
  sections: Array<
    | { heading: string; type: "bullets"; items: string[] }
    | { heading: string; type: "paragraphs"; paragraphs: string[] }
  >;
};

const programDetails: Record<string, ProgramDetails> = {
  masters: {
    title: "Master's Programs in Germany",
    intro: [
      "Germany is one of the most popular destinations for international students due to its world-class education system, affordable study options, and strong job market.",
      "Many German public universities offer high-quality Master's programs with no tuition fees, making it an excellent option for students who want to pursue higher education in Europe.",
    ],
    sections: [
      {
        heading: "Eligibility Requirements",
        type: "bullets",
        items: [
          "16 years of education (Bachelor’s degree required)",
          "Strong academic background (good GPA)",
          "Valid IELTS or TOEFL score",
          "Admission from a German university",
        ],
      },
      {
        heading: "Language Requirements",
        type: "paragraphs",
        paragraphs: [
          "Many programs are taught in English, so German is not mandatory for several courses.",
          "Typical English requirements:",
          "IELTS: 6.0 – 6.5",
          "TOEFL: 80+",
        ],
      },
      {
        heading: "Benefits",
        type: "bullets",
        items: [
          "No tuition fees in most public universities",
          "Internationally recognized degrees",
          "Opportunity to work part-time during studies",
          "Access to post-study work opportunities in Germany",
        ],
      },
      {
        heading: "Duration",
        type: "paragraphs",
        paragraphs: ["Usually 1.5 – 2 years depending on the program."],
      },
      {
        heading: "Typical Required Documents",
        type: "bullets",
        items: [
          "Bachelor’s degree and transcripts",
          "IELTS/TOEFL certificate",
          "CV",
          "Motivation letter",
          "Passport copy",
        ],
      },
    ],
  },
  ausbildung: {
    title: "Ausbildung in Germany",
    intro: [
      "Ausbildung is Germany’s dual vocational training program, designed for students who want to gain practical skills while earning a salary.",
      "This program combines classroom education with hands-on work experience in a company, allowing students to develop professional skills while studying.",
    ],
    sections: [
      {
        heading: "Program Structure",
        type: "bullets",
        items: [
          "Working in a company",
          "Studying in a vocational school",
          "This approach helps students gain real industry experience while completing their training.",
        ],
      },
      {
        heading: "Duration",
        type: "paragraphs",
        paragraphs: ["Typically 2 – 3.5 years"],
      },
      {
        heading: "Benefits",
        type: "bullets",
        items: [
          "Monthly stipend €800 – €1000 during training",
          "Practical work experience in German companies",
          "Opportunity to secure full-time employment after completion",
          "High demand for skilled workers in Germany",
        ],
      },
      {
        heading: "Eligibility Requirements",
        type: "bullets",
        items: [
          "Minimum 12 years of education",
          "Basic German language proficiency (usually B1–B2 level)",
          "Motivation to work and study simultaneously",
        ],
      },
      {
        heading: "Financial Advantage",
        type: "paragraphs",
        paragraphs: [
          "Students applying directly for Ausbildung often do not need a blocked account, which reduces the financial burden compared to other study routes.",
        ],
      },
    ],
  },
  "direct-bachelors": {
    title: "Direct Bachelor’s Route in Germany",
    intro: [
      "Students who have already completed two semesters of a Bachelor’s degree in Pakistan may be eligible to apply directly to a Bachelor’s program in Germany, without the need for a preparatory year (Studienkolleg).",
      "This pathway allows students to continue their undergraduate studies at a German university.",
    ],
    sections: [
      {
        heading: "Eligibility Requirements",
        type: "bullets",
        items: [
          "Completion of 2 semesters of a Bachelor’s degree in Pakistan",
          "Good academic performance",
          "Admission from a German university",
        ],
      },
      {
        heading: "Language Requirements",
        type: "bullets",
        items: [
          "English-taught programs: IELTS 6.0+",
          "German-taught programs: B2 German language level",
        ],
      },
      {
        heading: "Financial Requirements",
        type: "paragraphs",
        paragraphs: [
          "Students usually need to show proof of financial resources through a blocked account, currently around:",
          "€11,208 for one year",
        ],
      },
      {
        heading: "Visa Processing Time",
        type: "paragraphs",
        paragraphs: ["Visa decisions typically take 3 – 6 months"],
      },
      {
        heading: "Benefits",
        type: "bullets",
        items: [
          "Access to high-quality German education",
          "Opportunity to study in Europe at low or no tuition cost",
          "Possibility to work part-time while studying",
        ],
      },
    ],
  },
};

function ProgramDetailsDialog({
  darkMode,
  title,
  emoji,
  color,
  bgColor,
  ctaLabel,
  details,
}: {
  darkMode: boolean;
  title: string;
  emoji: string;
  color: string;
  bgColor: string;
  ctaLabel: string;
  details: ProgramDetails;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="group/btn flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 w-full justify-center hover:shadow-md"
          style={{
            fontFamily: "Sora, sans-serif",
            background: `linear-gradient(135deg, ${color}22, ${color}33)`,
            border: `1.5px solid ${color}55`,
            color: darkMode ? "#E8DCCF" : color,
          }}
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-4xl rounded-3xl p-0 border-0 overflow-hidden"
        style={{
          background: darkMode ? "#1a1a1a" : "#fff",
          border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(196,168,130,0.18)",
          boxShadow: darkMode ? "0 18px 70px rgba(0,0,0,0.65)" : "0 18px 70px rgba(17,17,17,0.16)",
        }}
      >
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />

        <div>
          <div
            className="p-7"
            style={{
              background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(212,184,150,0.14)",
              borderBottom: darkMode ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(196,168,130,0.16)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: bgColor }}
              >
                {emoji}
              </div>

              <DialogHeader className="text-left">
                <DialogTitle
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 900,
                    color: darkMode ? "#fff" : "#111",
                  }}
                >
                  {details.title}
                </DialogTitle>
                <DialogDescription
                  style={{
                    fontFamily: "Sora, sans-serif",
                    color: darkMode ? "#aaa" : "#777",
                    lineHeight: 1.7,
                  }}
                >
                  Key details and requirements.
                </DialogDescription>
              </DialogHeader>
            </div>
          </div>

          <div className="p-7">
            <div className="max-h-[70vh] overflow-y-auto pr-2">
              <div className="space-y-5">
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(250,247,244,0.75)",
                    border: darkMode ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(196,168,130,0.16)",
                  }}
                >
                  <div className="space-y-3">
                    {details.intro.map((p) => (
                      <p
                        key={p}
                        style={{
                          fontFamily: "Sora, sans-serif",
                          fontSize: "0.92rem",
                          color: darkMode ? "#aaa" : "#666",
                          lineHeight: 1.7,
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                {details.sections.map((section) => (
                  <div
                    key={section.heading}
                    className="rounded-2xl p-5"
                    style={{
                      background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(250,247,244,0.75)",
                      border: darkMode ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(196,168,130,0.16)",
                    }}
                  >
                    <div
                      className="mb-3"
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: darkMode ? "#E8DCCF" : "#8B6B4A",
                      }}
                    >
                      {section.heading}
                    </div>

                    {section.type === "bullets" ? (
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color }} />
                            <span
                              style={{
                                fontFamily: "Sora, sans-serif",
                                fontSize: "0.86rem",
                                color: darkMode ? "#aaa" : "#666",
                                lineHeight: 1.6,
                              }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="space-y-2">
                        {section.paragraphs.map((p) => (
                          <p
                            key={p}
                            style={{
                              fontFamily: "Sora, sans-serif",
                              fontSize: "0.92rem",
                              color: darkMode ? "#aaa" : "#666",
                              lineHeight: 1.7,
                            }}
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const scholarships = {
  intro:
    "Our consultancy helps students apply for fully funded and partially funded scholarships in Europe, especially for Master's and PhD programs. Below are the typical details and requirements for major international scholarship programs.",
  option1: {
    title: "Scholarship Program – Option 1",
    emoji: "🎓",
    color: "#C4A882",
    bgColor: "rgba(196,168,130,0.12)",
    summary: [
      "Master’s & PhD opportunities (plus research/short courses)",
      "IELTS 6.0 – 6.5 or TOEFL 80+ (German tracks may require TestDaF/DSH)",
      "Monthly stipend: €900 – €1,000 (Master’s), €1,300 – €1,400 (PhD)",
      "Benefits: stipend + travel + insurance + tuition support (where applicable)",
      "Typical duration: 1–2 years (Master’s), 3–4 years (PhD)",
    ],
    groups: [
      {
        heading: "Degree Levels",
        items: ["Master’s Programs", "PhD Programs", "Research or Short Courses"],
      },
      {
        heading: "Fields of Study",
        items: [
          "Engineering",
          "Computer Science",
          "Artificial Intelligence",
          "Data Science",
          "Economics",
          "Public Policy",
          "Development Studies",
          "Environmental Science",
          "Agriculture",
          "Social Sciences",
          "Public Health",
          "Architecture",
          "Media and Communication",
        ],
      },
      {
        heading: "Basic Requirements",
        items: [
          "A Bachelor’s degree (for Master’s programs)",
          "A Master’s degree (for PhD programs)",
          "Strong academic performance (good GPA)",
          "In some cases 2 years of work experience",
          "A strong motivation letter",
          "Admission to or eligibility for a program at a European university",
        ],
      },
      {
        heading: "English Language Requirements",
        items: [
          "IELTS 6.0 – 6.5",
          "TOEFL 80+",
          "For programs taught in German: TestDaF or DSH may be required",
          "Some programs also provide German language preparation courses.",
        ],
      },
      {
        heading: "Required Documents",
        items: [
          "Application form",
          "CV (Europass format recommended)",
          "Motivation letter",
          "Recommendation letters",
          "Academic degrees and transcripts",
          "Proof of work experience (if required)",
          "IELTS or TOEFL certificate",
          "Passport copy",
        ],
      },
      {
        heading: "Monthly Stipend",
        items: [
          "Master’s students: approximately €900 – €1,000 per month",
          "PhD students: approximately €1,300 – €1,400 per month",
        ],
      },
      {
        heading: "Benefits",
        items: [
          "Monthly stipend for living expenses",
          "Travel allowance",
          "Health insurance",
          "Tuition fee coverage (many European universities have very low or no tuition fees)",
          "Language preparation courses",
          "Possible housing or family allowance",
        ],
      },
      {
        heading: "Duration",
        items: ["Master’s programs: 1 – 2 years", "PhD programs: 3 – 4 years"],
      },
    ],
  },
  option2: {
    title: "Scholarship Program – Option 2",
    emoji: "🌍",
    color: "#A07850",
    bgColor: "rgba(160,120,80,0.12)",
    summary: [
      "Primarily Master’s programs across Europe",
      "IELTS 6.5 – 7.0 or TOEFL 90+ (MOI sometimes accepted)",
      "Monthly stipend: ~€1000",
      "Benefits: full tuition + travel allowance (sometimes up to €7000) + insurance",
      "Unique: multi-country study experience",
    ],
    groups: [
      {
        heading: "Degree Level",
        items: ["Primarily Master’s programs"],
      },
      {
        heading: "Fields of Study",
        items: [
          "Artificial Intelligence",
          "Data Science",
          "Robotics",
          "Cybersecurity",
          "Renewable Energy",
          "Engineering",
          "Economics",
          "Business",
          "Biotechnology",
          "Environmental Science",
          "Food Science",
          "Public Policy",
          "Social Sciences",
        ],
      },
      {
        heading: "Basic Requirements",
        items: [
          "A Bachelor’s degree",
          "Good academic record",
          "Proof of English proficiency",
          "Motivation letter",
          "Two recommendation letters",
          "Europass CV",
          "Passport",
        ],
      },
      {
        heading: "English Language Requirements",
        items: [
          "IELTS 6.5 – 7.0",
          "TOEFL 90+",
          "Some universities may also accept Medium of Instruction (MOI) certificates.",
        ],
      },
      {
        heading: "Monthly Stipend",
        items: ["Approximately €1000 per month"],
      },
      {
        heading: "Benefits",
        items: [
          "Full tuition fee coverage",
          "Travel allowance (sometimes up to €7000)",
          "Health insurance",
          "Initial relocation or installation allowance",
        ],
      },
      {
        heading: "Duration",
        items: ["Usually 2 years (120 ECTS credits)"],
      },
      {
        heading: "Unique Feature",
        items: ["Students may study in multiple European countries, gaining international academic and cultural experience."],
      },
    ],
  },
  comparison: {
    title: "Quick Comparison of Scholarship Opportunities",
    rows: [
      { feature: "Study Location", option1: "Primarily Germany", option2: "Multiple European countries" },
      { feature: "Degree Level", option1: "Master’s & PhD", option2: "Mostly Master’s" },
      { feature: "IELTS Requirement", option1: "6.0 – 6.5", option2: "6.5 – 7.0" },
      { feature: "Monthly Stipend", option1: "€900 – €1,000", option2: "~€1000" },
      { feature: "Tuition Fees", option1: "Often free", option2: "Fully covered" },
      { feature: "Competition Level", option1: "Moderate", option2: "Very competitive" },
    ],
  },
};

function ScholarshipCard({
  darkMode,
  title,
  emoji,
  color,
  bgColor,
  summary,
  groups,
  comparison,
  index,
}: {
  darkMode: boolean;
  title: string;
  emoji: string;
  color: string;
  bgColor: string;
  summary: string[];
  groups: Array<{ heading: string; items: string[] }>;
  comparison: { title: string; rows: Array<{ feature: string; option1: string; option2: string }> };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col rounded-3xl overflow-hidden h-full"
      style={{
        background: darkMode ? "#1a1a1a" : "#fff",
        border: darkMode ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(196,168,130,0.18)",
        boxShadow: darkMode ? "0 4px 30px rgba(0,0,0,0.3)" : "0 4px 30px rgba(196,168,130,0.12)",
      }}
    >
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
      <div className="p-8 flex flex-col flex-1">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
          style={{ background: bgColor }}
        >
          {emoji}
        </div>

        <h3
          className="mb-5"
          style={{
            fontFamily: "Sora, sans-serif",
            fontSize: "1.05rem",
            fontWeight: 800,
            color: darkMode ? "#fff" : "#111",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        {/* Compact summary (outer card) */}
        <ul className="flex-1 space-y-3 mb-8">
          {summary.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color }} />
              <span
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "0.83rem",
                  color: darkMode ? "#aaa" : "#666",
                  lineHeight: 1.55,
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Learn More (dialog) */}
        <Dialog>
          <DialogTrigger asChild>
            <button
              className="group/btn flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 w-full justify-center hover:shadow-md"
              style={{
                fontFamily: "Sora, sans-serif",
                background: `linear-gradient(135deg, ${color}22, ${color}33)`,
                border: `1.5px solid ${color}55`,
                color: darkMode ? "#E8DCCF" : color,
              }}
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-4xl rounded-3xl p-0 border-0 overflow-hidden"
            style={{
              background: darkMode ? "#1a1a1a" : "#fff",
              border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(196,168,130,0.18)",
              boxShadow: darkMode ? "0 18px 70px rgba(0,0,0,0.65)" : "0 18px 70px rgba(17,17,17,0.16)",
            }}
          >
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
            <div>
              <div
                className="p-7"
                style={{
                  background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(212,184,150,0.14)",
                  borderBottom: darkMode ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(196,168,130,0.16)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: bgColor }}
                  >
                    {emoji}
                  </div>

                  <DialogHeader className="text-left">
                    <DialogTitle
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontSize: "1.2rem",
                        fontWeight: 900,
                        color: darkMode ? "#fff" : "#111",
                      }}
                    >
                      {title}
                    </DialogTitle>
                    <DialogDescription
                      style={{
                        fontFamily: "Sora, sans-serif",
                        color: darkMode ? "#aaa" : "#777",
                        lineHeight: 1.7,
                      }}
                    >
                      Full details and typical requirements.
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </div>

              <div className="p-7">
                <div className="max-h-[70vh] overflow-y-auto pr-2">
                  <div className="space-y-5">
                    {groups.map((g) => (
                      <div
                        key={g.heading}
                        className="rounded-2xl p-5"
                        style={{
                          background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(250,247,244,0.75)",
                          border: darkMode ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(196,168,130,0.16)",
                        }}
                      >
                        <div
                          className="mb-3"
                          style={{
                            fontFamily: "Sora, sans-serif",
                            fontSize: "0.78rem",
                            fontWeight: 800,
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            color: darkMode ? "#E8DCCF" : "#8B6B4A",
                          }}
                        >
                          {g.heading}
                        </div>
                        <ul className="space-y-2">
                          {g.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color }} />
                              <span
                                style={{
                                  fontFamily: "Sora, sans-serif",
                                  fontSize: "0.86rem",
                                  color: darkMode ? "#aaa" : "#666",
                                  lineHeight: 1.6,
                                }}
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div
                      className="rounded-2xl p-5"
                      style={{
                        background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(250,247,244,0.75)",
                        border: darkMode ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(196,168,130,0.16)",
                      }}
                    >
                      <div
                        className="mb-3"
                        style={{
                          fontFamily: "Sora, sans-serif",
                          fontSize: "0.78rem",
                          fontWeight: 800,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          color: darkMode ? "#E8DCCF" : "#8B6B4A",
                        }}
                      >
                        {comparison.title}
                      </div>

                      <div
                        className="rounded-2xl overflow-hidden"
                        style={{
                          background: darkMode ? "rgba(0,0,0,0.22)" : "rgba(255,255,255,0.7)",
                          border: darkMode ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(196,168,130,0.18)",
                        }}
                      >
                        <div
                          className="grid grid-cols-3 gap-0 px-4 py-3"
                          style={{
                            background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(212,184,150,0.14)",
                          }}
                        >
                          {["Feature", "Program Option 1", "Program Option 2"].map((h) => (
                            <div
                              key={h}
                              style={{
                                fontFamily: "Sora, sans-serif",
                                fontSize: "0.78rem",
                                fontWeight: 800,
                                letterSpacing: "0.04em",
                                textTransform: "uppercase",
                                color: darkMode ? "#E8DCCF" : "#8B6B4A",
                              }}
                            >
                              {h}
                            </div>
                          ))}
                        </div>

                        <div
                          className="divide-y"
                          style={{
                            borderColor: darkMode ? "rgba(255,255,255,0.06)" : "rgba(196,168,130,0.14)",
                          }}
                        >
                          {comparison.rows.map((r) => (
                            <div
                              key={r.feature}
                              className="grid grid-cols-3 gap-0 px-4 py-3"
                              style={{
                                fontFamily: "Sora, sans-serif",
                                fontSize: "0.86rem",
                                color: darkMode ? "#aaa" : "#666",
                              }}
                            >
                              <div style={{ fontWeight: 700, color: darkMode ? "#ddd" : "#444" }}>{r.feature}</div>
                              <div>{r.option1}</div>
                              <div>{r.option2}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
}

export function ServicesSection({ darkMode }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="py-24 px-6"
      style={{
        background: darkMode ? "#111" : "#fff",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{
              background: darkMode ? "rgba(212,184,150,0.12)" : "rgba(212,184,150,0.25)",
              color: darkMode ? "#D4B896" : "#8B6B4A",
              fontFamily: "Sora, sans-serif",
              border: "1px solid rgba(196,168,130,0.3)",
            }}
          >
            Germany Study Programs for Pakistani Students
          </span>
          <h2
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: darkMode ? "#fff" : "#111",
              lineHeight: 1.2,
            }}
          >
            Germany Study Pathways — Masters, Ausbildung & Bachelor's
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "0.95rem",
              color: darkMode ? "#888" : "#777",
              lineHeight: 1.7,
            }}
          >
            Choose the Germany study pathway that fits your background and goals. We guide Pakistani students through Masters, Ausbildung, and Direct Bachelor's routes every step of the way.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer"
              style={{
                background: darkMode ? "#1a1a1a" : "#fff",
                border: darkMode ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(196,168,130,0.18)",
                boxShadow: darkMode
                  ? "0 4px 30px rgba(0,0,0,0.3)"
                  : "0 4px 30px rgba(196,168,130,0.12)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${service.color}, transparent)`,
                }}
              />

              <div className="p-8 flex flex-col flex-1">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: service.bgColor }}
                >
                  {service.emoji}
                </div>

                {/* Title */}
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: darkMode ? "#fff" : "#111",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>

                {/* Features */}
                <ul className="flex-1 space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: service.color }}
                      />
                      <span
                        style={{
                          fontFamily: "Sora, sans-serif",
                          fontSize: "0.83rem",
                          color: darkMode ? "#aaa" : "#666",
                          lineHeight: 1.5,
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <ProgramDetailsDialog
                  darkMode={darkMode}
                  title={service.title}
                  emoji={service.emoji}
                  color={service.color}
                  bgColor={service.bgColor}
                  ctaLabel={service.cta}
                  details={programDetails[service.id]}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scholarships */}
        <div className="mt-20" id="scholarships">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
              style={{
                background: darkMode ? "rgba(212,184,150,0.12)" : "rgba(212,184,150,0.25)",
                color: darkMode ? "#D4B896" : "#8B6B4A",
                fontFamily: "Sora, sans-serif",
                border: "1px solid rgba(196,168,130,0.3)",
              }}
            >
              Scholarships in Germany for Pakistanis
            </span>
            <h3
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                fontWeight: 750,
                color: darkMode ? "#fff" : "#111",
                lineHeight: 1.2,
              }}
            >
              Scholarship Opportunities in Germany for Pakistani Students
            </h3>
            <p
              className="mt-4 max-w-3xl mx-auto"
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "0.95rem",
                color: darkMode ? "#888" : "#777",
                lineHeight: 1.7,
              }}
            >
              {scholarships.intro}
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row md:justify-center md:items-stretch gap-8">
            <div className="w-full md:max-w-md flex">
              <ScholarshipCard
                darkMode={darkMode}
                index={0}
                {...scholarships.option1}
                comparison={scholarships.comparison}
              />
            </div>
            <div className="w-full md:max-w-md flex">
              <ScholarshipCard
                darkMode={darkMode}
                index={1}
                {...scholarships.option2}
                comparison={scholarships.comparison}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
