import {
  motion,
} from "framer-motion";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

const CTASection = () => {
  return (
    <section
      className="relative overflow-hidden px-6 py-28 lg:px-20"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
        style={{
          background:
            "rgba(192,36,39,0.18)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border px-8 py-16 text-center md:px-16"
          style={{
            background:
              "rgba(255,255,255,0.04)",
            borderColor: "var(--border)",
            backdropFilter: "blur(18px)",
          }}
        >
          {/* Top Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(circle at top, rgba(192,36,39,0.18), transparent 60%)",
            }}
          />

          {/* Floating Blurs */}
          <div
            className="absolute left-0 top-0 h-40 w-40 rounded-full blur-[100px]"
            style={{
              background:
                "rgba(224,49,53,0.18)",
            }}
          />

          <div
            className="absolute bottom-0 right-0 h-40 w-40 rounded-full blur-[100px]"
            style={{
              background:
                "rgba(192,36,39,0.16)",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{
                borderColor: "var(--border)",
                background:
                  "rgba(255,255,255,0.03)",
                color: "var(--primary)",
              }}
            >
              <Sparkles size={16} />
              Start Today
            </div>

            {/* Heading */}
            <h2
              className="mx-auto mb-6 max-w-4xl text-5xl font-black leading-tight md:text-7xl"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Create Polls
              <span
                style={{
                  color: "var(--primary)",
                }}
              >
                {" "}
                That Drive
              </span>
              <br />
              Real Engagement
            </h2>

            {/* Description */}
            <p
              className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Launch interactive polls, collect live
              responses, and analyze engagement with
              a modern real-time polling platform.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              {/* Primary Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group flex items-center gap-3 rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(to right, var(--primary), var(--primary-hover))",
                  color: "#ffffff",
                  boxShadow:
                    "0 0 40px rgba(192,36,39,0.35)",
                }}
              >
                Create Poll

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="rounded-2xl border px-8 py-4 text-lg font-semibold transition-all duration-300"
                style={{
                  borderColor: "var(--border)",
                  background:
                    "rgba(255,255,255,0.03)",
                  color: "var(--text-primary)",
                }}
              >
                View Dashboard
              </motion.button>
            </div>

            {/* Small Stats */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-10">
              {[
                "12K+ Active Users",
                "250K+ Votes Collected",
                "99.9% Real-Time Uptime",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      background:
                        "var(--primary)",
                      boxShadow:
                        "0 0 12px rgba(192,36,39,0.8)",
                    }}
                  />

                  <span
                    className="font-medium"
                    style={{
                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;