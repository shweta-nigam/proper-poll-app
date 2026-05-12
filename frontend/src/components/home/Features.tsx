import {
  motion,
} from "framer-motion";

import {
  ShieldCheck,
  Activity,
  BarChart3,
  Sparkles,
  Globe,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Real-Time Results",
    description:
      "Watch votes update instantly with dynamic analytics and live engagement tracking.",
    icon: Activity,
  },
  {
    title: "Secure Voting",
    description:
      "Protect polls with authentication, anonymous voting, and secure response handling.",
    icon: ShieldCheck,
  },
  {
    title: "Advanced Analytics",
    description:
      "Track participation trends, response growth, and audience engagement in real time.",
    icon: BarChart3,
  },
  {
    title: "Global Sharing",
    description:
      "Share polls anywhere using public links optimized for every device and platform.",
    icon: Globe,
  },
  {
    title: "Instant Performance",
    description:
      "Built for speed with ultra-fast interactions and smooth live response syncing.",
    icon: Zap,
  },
  {
    title: "Modern Experience",
    description:
      "Beautiful UI with seamless animations designed for communities and teams.",
    icon: Sparkles,
  },
];

const Features = () => {
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
            "rgba(192,36,39,0.14)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full blur-[140px]"
        style={{
          background:
            "rgba(224,49,53,0.10)",
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
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
            "
            style={{
              borderColor: "var(--border)",
              background:
                "rgba(255,255,255,0.03)",
              color: "var(--primary)",
            }}
          >
            <Sparkles size={16} />
            Features
          </div>

          <h2
            className="
              mb-6
              text-5xl
              font-black
              leading-tight
              md:text-6xl
            "
            style={{
              color: "var(--text-primary)",
            }}
          >
            Everything You Need
            <span
              style={{
                color: "var(--primary)",
              }}
            >
              {" "}
              To Run
            </span>
            <br />
            Interactive Polls
          </h2>

          <p
            className="
              text-lg
              leading-relaxed
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Create engaging polls, collect instant
            responses, and visualize audience
            insights with a premium real-time voting
            platform.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  p-8
                  transition-all
                  duration-500
                "
                style={{
                  background:
                    "rgba(255,255,255,0.04)",
                  borderColor: "var(--border)",
                  backdropFilter: "blur(18px)",
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
                      "radial-gradient(circle at top right, rgba(192,36,39,0.18), transparent 60%)",
                  }}
                />

                {/* Floating Blur */}
                <div
                  className="
                    absolute
                    -right-10
                    -top-10
                    h-32
                    w-32
                    rounded-full
                    blur-3xl
                  "
                  style={{
                    background:
                      "rgba(192,36,39,0.12)",
                  }}
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    mb-8
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                  style={{
                    background:
                      "rgba(192,36,39,0.12)",
                    color: "var(--primary)",
                  }}
                >
                  <Icon size={34} />
                </div>

                {/* Title */}
                <h3
                  className="
                    relative
                    mb-4
                    text-3xl
                    font-bold
                  "
                  style={{
                    color:
                      "var(--text-primary)",
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    relative
                    text-lg
                    leading-relaxed
                  "
                  style={{
                    color:
                      "var(--text-secondary)",
                  }}
                >
                  {feature.description}
                </p>

                {/* Bottom Accent */}
                <div
                  className="
                    mt-8
                    h-[3px]
                    w-full
                    rounded-full
                  "
                  style={{
                    background:
                      "linear-gradient(to right, var(--primary), transparent)",
                  }}
                />

                {/* Corner Number */}
                <div
                  className="
                    absolute
                    bottom-5
                    right-6
                    text-6xl
                    font-black
                    opacity-10
                  "
                  style={{
                    color:
                      "var(--text-primary)",
                  }}
                >
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;