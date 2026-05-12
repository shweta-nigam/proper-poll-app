import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  BarChart3,
  Check,
  Sparkles,
} from "lucide-react";

import { useState } from "react";

const pollOptions = [
  {
    id: 1,
    label: "React",
    votes: 48,
  },
  {
    id: 2,
    label: "Vue",
    votes: 22,
  },
  {
    id: 3,
    label: "Angular",
    votes: 12,
  },
  {
    id: 4,
    label: "Svelte",
    votes: 18,
  },
];

const PollPreview = () => {
  const [selected, setSelected] = useState<
    number | null
  >(1);

  return (
    <section
      className="relative overflow-hidden px-6 py-28 lg:px-20"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Background Effects */}
      <div
        className="absolute left-[-100px] top-20 h-[300px] w-[300px] rounded-full blur-[120px]"
        style={{
          background:
            "rgba(192,36,39,0.18)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full blur-[140px]"
        style={{
          background:
            "rgba(224,49,53,0.12)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
        >
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{
              borderColor: "var(--border)",
              color: "var(--primary)",
              background:
                "rgba(255,255,255,0.03)",
            }}
          >
            <Sparkles size={16} />
            Live Poll Preview
          </div>

          <h2
            className="mb-6 text-5xl font-black leading-tight md:text-6xl"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Watch Votes
            <span
              style={{
                color: "var(--primary)",
              }}
            >
              {" "}
              Update
            </span>
            <br />
            In Real Time
          </h2>

          <p
            className="mb-10 text-lg leading-relaxed"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Experience instant poll interactions with
            dynamic voting updates, animated result
            bars, and seamless response tracking.
          </p>

          <div className="space-y-5">
            {[
              "Live vote tracking",
              "Instant analytics updates",
              "Interactive response visualization",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background:
                      "rgba(192,36,39,0.12)",
                    color: "var(--primary)",
                  }}
                >
                  <Check size={18} />
                </div>

                <span
                  className="text-lg font-medium"
                  style={{
                    color:
                      "var(--text-primary)",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Poll Card */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Floating Glow */}
          <div
            className="absolute inset-0 rounded-[40px] blur-3xl"
            style={{
              background:
                "rgba(192,36,39,0.15)",
            }}
          />

          <div
            className="relative overflow-hidden rounded-[40px] border p-8"
            style={{
              background:
                "rgba(255,255,255,0.04)",
              borderColor: "var(--border)",
              backdropFilter: "blur(18px)",
            }}
          >
            {/* Header */}
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p
                  className="mb-2 text-sm uppercase tracking-[0.25em]"
                  style={{
                    color:
                      "var(--text-secondary)",
                  }}
                >
                  Trending Poll
                </p>

                <h3
                  className="text-3xl font-bold"
                  style={{
                    color:
                      "var(--text-primary)",
                  }}
                >
                  Favorite Frontend Framework?
                </h3>
              </div>

              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{
                  background:
                    "rgba(192,36,39,0.12)",
                  color: "var(--primary)",
                }}
              >
                <BarChart3 size={28} />
              </div>
            </div>

            {/* Poll Options */}
            <div className="space-y-5">
              {pollOptions.map((option) => (
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  key={option.id}
                  onClick={() =>
                    setSelected(option.id)
                  }
                  className="relative w-full overflow-hidden rounded-3xl border p-5 text-left transition-all duration-300"
                  style={{
                    borderColor:
                      selected === option.id
                        ? "var(--primary)"
                        : "var(--border)",
                    background:
                      selected === option.id
                        ? "rgba(192,36,39,0.08)"
                        : "rgba(255,255,255,0.03)",
                  }}
                >
                  {/* Animated Progress */}
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${option.votes}%`,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                    }}
                    className="absolute left-0 top-0 h-full"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(192,36,39,0.22), transparent)",
                    }}
                  />

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl border"
                        style={{
                          borderColor:
                            "rgba(255,255,255,0.08)",
                          background:
                            "rgba(255,255,255,0.03)",
                          color:
                            "var(--text-primary)",
                        }}
                      >
                        {selected === option.id ? (
                          <Check size={18} />
                        ) : (
                          <span>
                            {option.id}
                          </span>
                        )}
                      </div>

                      <div>
                        <h4
                          className="text-lg font-semibold"
                          style={{
                            color:
                              "var(--text-primary)",
                          }}
                        >
                          {option.label}
                        </h4>
                      </div>
                    </div>

                    <AnimatePresence>
                      <motion.div
                        key={option.votes}
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="text-xl font-bold"
                        style={{
                          color: "var(--primary)",
                        }}
                      >
                        {option.votes}%
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div
              className="mt-8 flex items-center justify-between border-t pt-6"
              style={{
                borderColor:
                  "rgba(255,255,255,0.06)",
              }}
            >
              <div>
                <p
                  className="text-sm"
                  style={{
                    color:
                      "var(--text-secondary)",
                  }}
                >
                  Total Votes
                </p>

                <h4
                  className="text-2xl font-bold"
                  style={{
                    color:
                      "var(--text-primary)",
                  }}
                >
                  12,482
                </h4>
              </div>

              <div
                className="rounded-2xl px-5 py-3 text-sm font-semibold"
                style={{
                  background:
                    "rgba(192,36,39,0.12)",
                  color: "var(--primary)",
                }}
              >
                Live Updating
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default PollPreview