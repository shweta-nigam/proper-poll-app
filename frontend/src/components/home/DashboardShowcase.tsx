import {
  motion,
} from "framer-motion";

import {
  Activity,
  BarChart3,
  TrendingUp,
  Users,
  Vote,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Votes",
    value: "128K+",
    icon: Vote,
  },
  {
    title: "Active Polls",
    value: "2.4K",
    icon: BarChart3,
  },
  {
    title: "Participants",
    value: "54K+",
    icon: Users,
  },
];

const activities = [
  "React Survey reached 12K votes",
  "Design Poll gained 320 responses",
  "Marketing team exported analytics",
];

const DashboardShowcase = () => {
  return (
    <section id="analytics"
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
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{
              borderColor: "var(--border)",
              background:
                "rgba(255,255,255,0.03)",
              color: "var(--primary)",
            }}
          >
            <TrendingUp size={16} />
            Analytics Dashboard
          </div>

          <h2
            className="mb-6 text-5xl font-black leading-tight md:text-6xl"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Powerful
            <span
              style={{
                color: "var(--primary)",
              }}
            >
              {" "}
              Insights
            </span>
            <br />
            At A Glance
          </h2>

          <p
            className="mb-10 text-lg leading-relaxed"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Track participation, analyze voting
            trends, and monitor engagement with a
            modern analytics dashboard built for
            real-time decision making.
          </p>

          <div className="space-y-5">
            {[
              "Real-time voting analytics",
              "Instant response tracking",
              "Interactive data visualization",
              "Exportable reports & insights",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    background:
                      "rgba(192,36,39,0.12)",
                    color: "var(--primary)",
                  }}
                >
                  <ArrowUpRight size={18} />
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

        {/* Dashboard UI */}
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
          {/* Main Dashboard Card */}
          <div
            className="relative overflow-hidden rounded-[36px] border p-8"
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
                  Dashboard Overview
                </p>

                <h3
                  className="text-3xl font-bold"
                  style={{
                    color:
                      "var(--text-primary)",
                  }}
                >
                  Poll Analytics
                </h3>
              </div>

              <div
                className="flex h-16 w-16 items-center justify-center rounded-3xl"
                style={{
                  background:
                    "rgba(192,36,39,0.12)",
                  color: "var(--primary)",
                }}
              >
                <Activity size={30} />
              </div>
            </div>

            {/* Stats */}
            <div className="mb-10 grid gap-5 sm:grid-cols-3">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                    className="rounded-3xl border p-5"
                    style={{
                      borderColor:
                        "rgba(255,255,255,0.06)",
                      background:
                        "rgba(255,255,255,0.03)",
                    }}
                  >
                    <div
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        background:
                          "rgba(192,36,39,0.12)",
                        color: "var(--primary)",
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <h4
                      className="mb-2 text-3xl font-black"
                      style={{
                        color:
                          "var(--text-primary)",
                      }}
                    >
                      {item.value}
                    </h4>

                    <p
                      style={{
                        color:
                          "var(--text-secondary)",
                      }}
                    >
                      {item.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Fake Graph */}
            <div
              className="mb-10 rounded-[32px] border p-6"
              style={{
                borderColor:
                  "rgba(255,255,255,0.06)",
                background:
                  "rgba(255,255,255,0.03)",
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h4
                  className="text-xl font-bold"
                  style={{
                    color:
                      "var(--text-primary)",
                  }}
                >
                  Response Growth
                </h4>

                <span
                  className="rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    background:
                      "rgba(192,36,39,0.12)",
                    color: "var(--primary)",
                  }}
                >
                  +24%
                </span>
              </div>

              {/* Graph Bars */}
              <div className="flex h-[220px] items-end justify-between gap-4">
                {[35, 60, 45, 80, 65, 95, 75].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        height: 0,
                      }}
                      whileInView={{
                        height: `${height}%`,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="w-full rounded-t-[20px]"
                      style={{
                        background:
                          "linear-gradient(to top, var(--primary), rgba(224,49,53,0.35))",
                      }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Activity Feed */}
            <div
              className="rounded-[32px] border p-6"
              style={{
                borderColor:
                  "rgba(255,255,255,0.06)",
                background:
                  "rgba(255,255,255,0.03)",
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h4
                  className="text-xl font-bold"
                  style={{
                    color:
                      "var(--text-primary)",
                  }}
                >
                  Live Activity
                </h4>

                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    background:
                      "var(--primary)",
                    boxShadow:
                      "0 0 18px rgba(192,36,39,0.8)",
                  }}
                />
              </div>

              <div className="space-y-5">
                {activities.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 rounded-2xl border p-4"
                    style={{
                      borderColor:
                        "rgba(255,255,255,0.05)",
                      background:
                        "rgba(255,255,255,0.02)",
                    }}
                  >
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{
                        background:
                          "var(--primary)",
                      }}
                    />

                    <p
                      style={{
                        color:
                          "var(--text-secondary)",
                      }}
                    >
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              -right-10
              -top-10
              hidden
              rounded-3xl
              border
              p-5
              lg:block
            "
            style={{
              background:
                "rgba(255,255,255,0.05)",
              borderColor:
                "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
            }}
          >
            <p
              className="mb-2 text-sm"
              style={{
                color:
                  "var(--text-secondary)",
              }}
            >
              Engagement Rate
            </p>

            <h4
              className="text-4xl font-black"
              style={{
                color: "var(--text-primary)",
              }}
            >
              94%
            </h4>

            <div
              className="mt-3 inline-flex rounded-full px-3 py-1 text-sm font-semibold"
              style={{
                background:
                  "rgba(192,36,39,0.12)",
                color: "var(--primary)",
              }}
            >
              +12% this week
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardShowcase;