import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import {
  BarChart3,
  Users,
  Activity,
  Loader2,
  Vote,
  TrendingUp,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
} from "recharts";

import { getPollAnalytics } from "../../api/response.api.js";

interface PollOptionAnalytics {
  option: string;
  votes: number;
  percentage: number;
}

interface PollAnalyticsData {
  pollId: string;
  totalResponses: number;
  options: PollOptionAnalytics[];
}

function PollAnalytics() {
  const { pollId } = useParams();

  const [analytics, setAnalytics] = useState<PollAnalyticsData | null>(null);

  const [loading, setLoading] = useState(true);

  const [lastUpdated, setLastUpdated] = useState("");

  const fetchAnalytics = async () => {
    try {
      if (!pollId) return;

      const response = await getPollAnalytics(pollId);

      setAnalytics(response.data);

      setLastUpdated(new Date().toLocaleTimeString());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();

    // Live updates every 5 sec
    const interval = setInterval(() => {
      fetchAnalytics();
    }, 5000);

    return () => clearInterval(interval);
  }, [pollId]);

  const chartColors = ["#c02427", "#e03135", "#ff6b6b", "#ff8787", "#fa5252"];

  // Pie chart data with colors
  const pieData =
    analytics?.options.map((item, index) => ({
      ...item,
      fill: chartColors[index % chartColors.length],
    })) || [];

  if (loading) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[var(--bg-primary)]
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="
            flex
            flex-col
            items-center
            gap-4
          "
        >
          <Loader2
            className="
              w-12
              h-12
              animate-spin
              text-[var(--primary)]
            "
          />

          <p
            className="
              text-lg
              text-[var(--text-secondary)]
            "
          >
            Loading Analytics...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="
        min-h-screen
        bg-[var(--bg-primary)]
        text-[var(--text-primary)]
        p-6
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
        "
      >
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-6
            mb-10
          "
        >
          <div>
            <div
              className="
                flex
                items-center
                gap-3
                mb-3
              "
            >
              <div
                className="
                  p-3
                  rounded-2xl
                  bg-[var(--primary)]
                "
              >
                <BarChart3 className="w-7 h-7" />
              </div>

              <h1
                className="
                  text-4xl
                  font-black
                "
              >
                Poll Analytics
              </h1>
            </div>

            <p
              className="
                text-[var(--text-secondary)]
                text-lg
              "
            >
              Live voting insights & trends
            </p>
          </div>

          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--bg-card)]
            "
          >
            <Activity
              className="
                w-5
                h-5
                text-green-400
              "
            />

            <span
              className="
                text-sm
                text-[var(--text-secondary)]
              "
            >
              Live • {lastUpdated}
            </span>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            mb-10
          "
        >
          {/* Total Responses */}
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="
              p-6
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--bg-card)]
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                mb-4
              "
            >
              <Users
                className="
                  w-8
                  h-8
                  text-[var(--primary)]
                "
              />

              <span
                className="
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  bg-[var(--primary)]
                "
              >
                TOTAL
              </span>
            </div>

            <h2
              className="
                text-4xl
                font-black
                mb-2
              "
            >
              {analytics?.totalResponses}
            </h2>

            <p
              className="
                text-[var(--text-secondary)]
              "
            >
              Total Responses
            </p>
          </motion.div>

          {/* Options */}
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="
              p-6
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--bg-card)]
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                mb-4
              "
            >
              <Vote
                className="
                  w-8
                  h-8
                  text-[var(--primary)]
                "
              />

              <span
                className="
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  bg-[var(--primary)]
                "
              >
                OPTIONS
              </span>
            </div>

            <h2
              className="
                text-4xl
                font-black
                mb-2
              "
            >
              {analytics?.options.length}
            </h2>

            <p
              className="
                text-[var(--text-secondary)]
              "
            >
              Poll Choices
            </p>
          </motion.div>

          {/* Leading Option */}
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="
              p-6
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--bg-card)]
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                mb-4
              "
            >
              <TrendingUp
                className="
                  w-8
                  h-8
                  text-[var(--primary)]
                "
              />

              <span
                className="
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  bg-[var(--primary)]
                "
              >
                LEADING
              </span>
            </div>

            <h2
              className="
                text-2xl
                font-black
                truncate
                mb-2
              "
            >
              {analytics?.options.sort((a, b) => b.votes - a.votes)[0]?.option}
            </h2>

            <p
              className="
                text-[var(--text-secondary)]
              "
            >
              Most Voted Option
            </p>
          </motion.div>
        </div>

        {/* Charts */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-8
            mb-10
          "
        >
          {/* Bar Chart */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              p-6
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--bg-card)]
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                mb-6
              "
            >
              Vote Distribution
            </h2>

            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analytics?.options}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />

                  <XAxis dataKey="option" stroke="#b3b3b3" />

                  <YAxis stroke="#b3b3b3" />

                  <Tooltip
                    contentStyle={{
                      background: "#222222",
                      border: "1px solid #333333",
                      borderRadius: "16px",
                      color: "#fff",
                    }}
                  />

                  <Bar
                    dataKey="votes"
                    radius={[10, 10, 0, 0]}
                    fill="var(--primary)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="
              p-6
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--bg-card)]
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                mb-6
              "
            >
              Percentage Split
            </h2>

            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="votes"
                    nameKey="option"
                    outerRadius={140}
                    label={({ percent }) =>
                      `${((percent || 0) * 100).toFixed(0)}%`
                    }
                  />

                  <Tooltip
                    contentStyle={{
                      background: "#222222",
                      border: "1px solid #333333",
                      borderRadius: "16px",
                      color: "#fff",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Detailed Results */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            p-6
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--bg-card)]
          "
        >
          <h2
            className="
              text-2xl
              font-bold
              mb-8
            "
          >
            Detailed Breakdown
          </h2>

          <div className="space-y-6">
            <AnimatePresence>
              {analytics?.options.map((option, index) => (
                <motion.div
                  key={option.option}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <div
                    className="
                        flex
                        items-center
                        justify-between
                        mb-2
                      "
                  >
                    <div>
                      <h3
                        className="
                            text-lg
                            font-semibold
                          "
                      >
                        {option.option}
                      </h3>

                      <p
                        className="
                            text-sm
                            text-[var(--text-secondary)]
                          "
                      >
                        {option.votes} votes
                      </p>
                    </div>

                    <span
                      className="
                          text-lg
                          font-bold
                          text-[var(--primary)]
                        "
                    >
                      {option.percentage}%
                    </span>
                  </div>

                  <div
                    className="
                        w-full
                        h-4
                        rounded-full
                        overflow-hidden
                        bg-[#1a1a1a]
                      "
                  >
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: `${option.percentage}%`,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className="
                          h-full
                          rounded-full
                        "
                      style={{
                        background: "linear-gradient(90deg, #c02427, #e03135)",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PollAnalytics;
