import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Phone, Video, MessageCircle, CheckCircle } from "lucide-react";

interface BookPageProps {
  darkMode: boolean;
}

type ConsultationType = "voice" | "video";

const options: Array<{
  id: ConsultationType;
  title: string;
  duration: string;
  price: number;
  Icon: typeof Phone;
}> = [
  {
    id: "voice",
    title: "Voice Consultation",
    duration: "30 Minutes",
    price: 10,
    Icon: Phone,
  },
  {
    id: "video",
    title: "Video Consultation",
    duration: "45 Minutes",
    price: 25,
    Icon: Video,
  },
];

export function BookPage({ darkMode }: BookPageProps) {
  const whatsappUrl = import.meta.env.VITE_CONTACT_WHATSAPP_URL || "https://wa.link/5pb1om";

  const paymentMethod = import.meta.env.VITE_PAYMENT_METHOD || "NayaPay";
  const paymentName = import.meta.env.VITE_PAYMENT_ACCOUNT_NAME || "Uzair Khan";
  const paymentAccount = import.meta.env.VITE_PAYMENT_ACCOUNT_NUMBER || "03428980297";
  const paymentIban = import.meta.env.VITE_PAYMENT_IBAN || "";

  const paymentNameDisplay = paymentName.toUpperCase();

  const [selected, setSelected] = useState<ConsultationType>("voice");

  const copyToClipboard = async (text: string) => {
    const value = text.trim();
    if (!value) return;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        return;
      }
    } catch {
      // Fall through to legacy copy approach
    }

    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const handleCopyKeyDown = (event: React.KeyboardEvent, text: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      void copyToClipboard(text);
    }
  };

  const instructionSteps = useMemo(
    () => [
      "Send the payment using the NayaPay account above.",
      "Take a screenshot of the payment confirmation.",
      "Send the screenshot on WhatsApp to confirm your booking.",
    ],
    []
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    if (type === "voice" || type === "video") {
      setSelected(type);
    }
  }, []);

  const selectedOption = useMemo(
    () => options.find((o) => o.id === selected) || options[0],
    [selected]
  );

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
            Booking
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
            Book Your Consultation
          </h1>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "0.95rem",
              color: darkMode ? "#aaa" : "#777",
              lineHeight: 1.7,
            }}
          >
            Choose your preferred consultation type and complete the booking process.
          </p>
        </motion.div>

        {/* Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {options.map((opt, i) => {
            const isSelected = opt.id === selected;
            const accent = "#C4A882";
            const gradient = opt.id === "video"
              ? "linear-gradient(135deg, #C4A882, #8B6B4A)"
              : "linear-gradient(135deg, #D4B896, #C4A882)";

            return (
              <motion.button
                key={opt.id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelected(opt.id)}
                className="text-left rounded-3xl overflow-hidden border transition-all duration-300"
                style={{
                  fontFamily: "Sora, sans-serif",
                  background: darkMode ? "#1a1a1a" : "#fff",
                  borderColor: isSelected
                    ? darkMode
                      ? "rgba(212,184,150,0.45)"
                      : "rgba(196,168,130,0.55)"
                    : darkMode
                    ? "rgba(255,255,255,0.07)"
                    : "rgba(196,168,130,0.18)",
                  boxShadow: isSelected
                    ? darkMode
                      ? "0 10px 40px rgba(0,0,0,0.45)"
                      : "0 10px 40px rgba(196,168,130,0.18)"
                    : "none",
                }}
              >
                <div className="h-1.5 w-full" style={{ background: isSelected ? gradient : "rgba(196,168,130,0.18)" }} />
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ background: `${accent}18` }}
                      >
                        <opt.Icon className="w-5 h-5" style={{ color: accent }} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "1.02rem",
                            fontWeight: 800,
                            color: darkMode ? "#fff" : "#111",
                          }}
                        >
                          {opt.title}
                        </div>
                        <div
                          className="mt-1"
                          style={{
                            fontSize: "0.85rem",
                            color: darkMode ? "#aaa" : "#777",
                          }}
                        >
                          {opt.duration}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <div
                        className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: gradient,
                          color: "#fff",
                        }}
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        Selected
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex items-end justify-between">
                    <div
                      className="text-sm"
                      style={{ color: darkMode ? "#bbb" : "#666" }}
                    >
                      Price
                    </div>
                    <div
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 900,
                        color: darkMode ? "#E8DCCF" : "#8B6B4A",
                      }}
                    >
                      ${opt.price}
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Summary + Payment */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div
            className="rounded-3xl p-7"
            style={{
              background: darkMode ? "#1a1a1a" : "#fff",
              border: darkMode ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(196,168,130,0.18)",
              boxShadow: darkMode ? "0 10px 40px rgba(0,0,0,0.35)" : "0 10px 40px rgba(196,168,130,0.12)",
            }}
          >
            <div
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "0.85rem",
                fontWeight: 800,
                color: darkMode ? "#E8DCCF" : "#8B6B4A",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Price Summary
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: "Sora, sans-serif", fontSize: "0.9rem", color: darkMode ? "#aaa" : "#777" }}>
                  Selected Service
                </span>
                <span style={{ fontFamily: "Sora, sans-serif", fontSize: "0.9rem", fontWeight: 700, color: darkMode ? "#fff" : "#111" }}>
                  {selectedOption.title}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: "Sora, sans-serif", fontSize: "0.9rem", color: darkMode ? "#aaa" : "#777" }}>
                  Total Price
                </span>
                <span style={{ fontFamily: "Sora, sans-serif", fontSize: "1.1rem", fontWeight: 900, color: darkMode ? "#E8DCCF" : "#8B6B4A" }}>
                  ${selectedOption.price}
                </span>
              </div>
            </div>

            <div
              className="mt-6 rounded-2xl p-5"
              style={{
                background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(212,184,150,0.18)",
                border: darkMode ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(196,168,130,0.2)",
              }}
            >
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: darkMode ? "#E8DCCF" : "#8B6B4A",
                  marginBottom: 10,
                }}
              >
                Payment Method
              </div>
              <div className="space-y-2" style={{ fontFamily: "Sora, sans-serif", fontSize: "0.9rem" }}>
                <div className="flex items-center justify-between">
                  <span style={{ color: darkMode ? "#aaa" : "#777" }}>Method</span>
                  <span style={{ color: darkMode ? "#fff" : "#111", fontWeight: 700 }}>{paymentMethod}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: darkMode ? "#aaa" : "#777" }}>Name</span>
                  <span style={{ color: darkMode ? "#fff" : "#111", fontWeight: 700 }}>{paymentNameDisplay}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: darkMode ? "#aaa" : "#777" }}>Phone / Account</span>
                  <span
                    role="button"
                    tabIndex={0}
                    title="Click to copy"
                    aria-label="Copy phone or account number"
                    onClick={() => void copyToClipboard(paymentAccount)}
                    onKeyDown={(e) => handleCopyKeyDown(e, paymentAccount)}
                    style={{
                      color: darkMode ? "#fff" : "#111",
                      fontWeight: 700,
                      cursor: "pointer",
                      textDecoration: "underline",
                      textDecorationColor: "rgba(196,168,130,0.45)",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    {paymentAccount}
                  </span>
                </div>
                {paymentIban ? (
                  <div className="flex items-center justify-between">
                    <span style={{ color: darkMode ? "#aaa" : "#777" }}>IBAN</span>
                    <span
                      role="button"
                      tabIndex={0}
                      title="Click to copy"
                      aria-label="Copy IBAN"
                      onClick={() => void copyToClipboard(paymentIban)}
                      onKeyDown={(e) => handleCopyKeyDown(e, paymentIban)}
                      style={{
                        color: darkMode ? "#fff" : "#111",
                        fontWeight: 700,
                        cursor: "pointer",
                        textDecoration: "underline",
                        textDecorationColor: "rgba(196,168,130,0.45)",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      {paymentIban}
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="rounded-3xl p-7"
              style={{
                background: darkMode ? "#1a1a1a" : "#fff",
                border: darkMode ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(196,168,130,0.18)",
                boxShadow: darkMode ? "0 10px 40px rgba(0,0,0,0.35)" : "0 10px 40px rgba(196,168,130,0.12)",
              }}
            >
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: darkMode ? "#E8DCCF" : "#8B6B4A",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Payment Instructions
              </div>

              <ol className="mt-5 space-y-3">
                {instructionSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        background: darkMode ? "rgba(212,184,150,0.15)" : "rgba(212,184,150,0.25)",
                        color: darkMode ? "#D4B896" : "#8B6B4A",
                        fontFamily: "Sora, sans-serif",
                        border: "1px solid rgba(196,168,130,0.25)",
                      }}
                    >
                      {index + 1}
                    </div>
                    <span
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontSize: "0.9rem",
                        color: darkMode ? "#aaa" : "#777",
                        lineHeight: 1.7,
                      }}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-8 py-5 rounded-3xl text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
              style={{
                fontFamily: "Sora, sans-serif",
                background: "#25D366",
                color: "#fff",
                boxShadow: darkMode ? "0 14px 45px rgba(0,0,0,0.45)" : "0 14px 45px rgba(37,211,102,0.25)",
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Send Payment Screenshot on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
