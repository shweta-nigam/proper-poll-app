import {
  PencilLine,
  Share2,
  BarChart3,
} from "lucide-react";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Create Poll",
    description:
      "Build engaging polls with custom questions, multiple options, and smart privacy controls.",
    icon: PencilLine,
  },
  {
    id: "02",
    title: "Share Instantly",
    description:
      "Send your poll anywhere using a shareable link and collect votes in real time.",
    icon: Share2,
  },
  {
    id: "03",
    title: "Track Analytics",
    description:
      "Watch live results, response percentages, and engagement metrics update instantly.",
    icon: BarChart3,
  },
];

const HowItWorks = () => {
  return (
    <section
      className="relative overflow-hidden px-6 py-28 lg:px-20"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full blur-[140px]"
        style={{
          background:
            "rgba(192,36,39,0.18)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full blur-[140px]"
        style={{
          background:
            "rgba(224,49,53,0.12)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
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
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span
            className="mb-4 inline-block rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]"
            style={{
              borderColor: "var(--border)",
              color: "var(--primary)",
              background:
                "rgba(255,255,255,0.03)",
            }}
          >
            Simple Process
          </span>

          <h2
            className="mb-6 text-5xl font-black leading-tight md:text-6xl"
            style={{
              color: "var(--text-primary)",
            }}
          >
            How It{" "}
            <span
              style={{
                color: "var(--primary)",
              }}
            >
              Works
            </span>
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Launch polls, collect votes, and
            visualize live responses in a seamless
            experience built for speed.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div
            className="
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-[2px]
              -translate-x-1/2
              lg:block
            "
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--primary), transparent)",
            }}
          />

          <div className="space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className={`
                    relative
                    flex
                    flex-col
                    items-center
                    lg:flex-row
                    ${
                      isLeft
                        ? "lg:justify-start"
                        : "lg:justify-end"
                    }
                  `}
                >
                  {/* Timeline Dot */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      hidden
                      h-6
                      w-6
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      border-4
                      lg:block
                    "
                    style={{
                      backgroundColor:
                        "var(--bg-primary)",
                      borderColor:
                        "var(--primary)",
                      boxShadow:
                        "0 0 25px rgba(192,36,39,0.7)",
                    }}
                  />

                  {/* Card */}
                  <div
                    className={`
                      group
                      relative
                      w-full
                      overflow-hidden
                      rounded-[32px]
                      border
                      p-8
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      lg:w-[45%]
                    `}
                    style={{
                      background:
                        "rgba(255,255,255,0.03)",
                      borderColor: "var(--border)",
                      backdropFilter: "blur(16px)",
                    }}
                  >
                    {/* Hover Glow */}
                    <div
                      className="
                        absolute
                        inset-0
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                      style={{
                        background:
                          "radial-gradient(circle at top right, rgba(192,36,39,0.2), transparent 60%)",
                      }}
                    />

                    {/* Step Number */}
                    <div
                      className="
                        absolute
                        right-6
                        top-6
                        text-6xl
                        font-black
                        opacity-10
                      "
                      style={{
                        color: "var(--text-primary)",
                      }}
                    >
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div
                      className="
                        relative
                        mb-6
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-3xl
                        border
                        transition-all
                        duration-500
                        group-hover:rotate-6
                        group-hover:scale-110
                      "
                      style={{
                        borderColor:
                          "rgba(192,36,39,0.3)",
                        background:
                          "rgba(192,36,39,0.08)",
                        color: "var(--primary)",
                      }}
                    >
                      <Icon size={36} />
                    </div>

                    {/* Title */}
                    <h3
                      className="relative mb-4 text-3xl font-bold"
                      style={{
                        color: "var(--text-primary)",
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="relative text-lg leading-relaxed"
                      style={{
                        color:
                          "var(--text-secondary)",
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Bottom Accent */}
                    <div
                      className="mt-8 h-[3px] w-full rounded-full"
                      style={{
                        background:
                          "linear-gradient(to right, var(--primary), transparent)",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;