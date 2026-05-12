import {
  motion,
} from "framer-motion";

import {
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Alex Carter",
    role: "Product Manager",
    review:
      "The live poll analytics completely changed how our team collects feedback during meetings.",
  },
  {
    name: "Sophia Kim",
    role: "Community Lead",
    review:
      "Beautiful interface, real-time updates, and incredibly smooth user experience across devices.",
  },
  {
    name: "Daniel Brooks",
    role: "Event Organizer",
    review:
      "We used it during a live event and handled thousands of responses instantly without issues.",
  },
];

const Testimonials = () => {
  return (
    <section
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
            <Star size={16} />
            Testimonials
          </div>

          <h2
            className="mb-6 text-5xl font-black leading-tight md:text-6xl"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Loved By
            <span
              style={{
                color: "var(--primary)",
              }}
            >
              {" "}
              Teams
            </span>
            <br />
            Around The World
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Trusted by communities, event organizers,
            and teams to collect real-time feedback
            and engagement insights.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map(
            (testimonial, index) => (
              <motion.div
                key={testimonial.name}
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
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[36px] border p-8 transition-all duration-500"
                style={{
                  background:
                    "rgba(255,255,255,0.04)",
                  borderColor: "var(--border)",
                  backdropFilter: "blur(18px)",
                }}
              >
                {/* Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(192,36,39,0.18), transparent 60%)",
                  }}
                />

                {/* Quote Icon */}
                <div
                  className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-3xl"
                  style={{
                    background:
                      "rgba(192,36,39,0.12)",
                    color: "var(--primary)",
                  }}
                >
                  <Quote size={30} />
                </div>

                {/* Review */}
                <p
                  className="relative mb-10 text-lg leading-relaxed"
                  style={{
                    color:
                      "var(--text-secondary)",
                  }}
                >
                  “{testimonial.review}”
                </p>

                {/* Stars */}
                <div className="relative mb-8 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                      style={{
                        color:
                          "var(--primary)",
                      }}
                    />
                  ))}
                </div>

                {/* User */}
                <div className="relative flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold"
                    style={{
                      background:
                        "rgba(255,255,255,0.05)",
                      color:
                        "var(--text-primary)",
                    }}
                  >
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div>
                    <h4
                      className="text-lg font-bold"
                      style={{
                        color:
                          "var(--text-primary)",
                      }}
                    >
                      {testimonial.name}
                    </h4>

                    <p
                      style={{
                        color:
                          "var(--text-secondary)",
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  className="mt-8 h-[3px] w-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, var(--primary), transparent)",
                  }}
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;