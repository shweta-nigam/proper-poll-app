import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

import { useState } from "react";

const faqs = [
  {
    question:
      "Can users vote anonymously?",
    answer:
      "Yes. You can enable anonymous voting while creating a poll to keep participant identities hidden.",
  },
  {
    question:
      "Do poll results update in real time?",
    answer:
      "Absolutely. Votes and analytics update instantly without requiring page refreshes.",
  },
  {
    question:
      "Can I create multiple polls?",
    answer:
      "Yes. You can create and manage unlimited polls from your dashboard.",
  },
  {
    question:
      "Can I share polls publicly?",
    answer:
      "Yes. Every poll generates a shareable public link that works across devices.",
  },
  {
    question:
      "Does the dashboard support analytics?",
    answer:
      "Yes. You can track engagement, participation rates, and voting trends with interactive analytics.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState<
    number | null
  >(0);

  return (
    <section
    id="faq"
      className="relative overflow-hidden px-6 py-28 lg:px-20"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full blur-[140px]"
        style={{
          background:
            "rgba(192,36,39,0.14)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full blur-[140px]"
        style={{
          background:
            "rgba(224,49,53,0.12)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{
              borderColor: "var(--border)",
              background:
                "rgba(255,255,255,0.03)",
              color: "var(--primary)",
            }}
          >
            <HelpCircle size={16} />
            FAQ
          </div>

          <h2
            className="mb-6 text-5xl font-black leading-tight md:text-6xl"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Frequently Asked
            <span
              style={{
                color: "var(--primary)",
              }}
            >
              {" "}
              Questions
            </span>
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Everything you need to know about
            creating polls, collecting votes, and
            tracking responses.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-[32px] border"
                style={{
                  borderColor: isOpen
                    ? "rgba(192,36,39,0.4)"
                    : "var(--border)",
                  background:
                    "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(18px)",
                }}
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setActive(
                      isOpen ? null : index
                    )
                  }
                  className="flex w-full items-center justify-between p-7 text-left"
                >
                  <h3
                    className="pr-6 text-xl font-bold"
                    style={{
                      color:
                        "var(--text-primary)",
                    }}
                  >
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen
                        ? 180
                        : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      background:
                        "rgba(192,36,39,0.12)",
                      color: "var(--primary)",
                    }}
                  >
                    <ChevronDown size={22} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7">
                        <div
                          className="mb-6 h-[1px] w-full"
                          style={{
                            background:
                              "rgba(255,255,255,0.06)",
                          }}
                        />

                        <p
                          className="text-lg leading-relaxed"
                          style={{
                            color:
                              "var(--text-secondary)",
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;