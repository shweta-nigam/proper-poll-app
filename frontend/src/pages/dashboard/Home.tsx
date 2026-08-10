import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  FileEdit,
  Flame,
  MoreHorizontal,
  TrendingUp,
  Users,
  Vote,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const responseData = [
  { day: "Mon", responses: 320 },
  { day: "Tue", responses: 480 },
  { day: "Wed", responses: 390 },
  { day: "Thu", responses: 620 },
  { day: "Fri", responses: 540 },
  { day: "Sat", responses: 760 },
  { day: "Sun", responses: 820 },
];

const recentPolls = [
  {
    id: 1,
    title: "Favourite Programming Language",
    category: "Technology",
    status: "Active",
    votes: 324,
    progress: 72,
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Employee Satisfaction Survey",
    category: "Workplace",
    status: "Closed",
    votes: 852,
    progress: 100,
    time: "Yesterday",
  },
  {
    id: 3,
    title: "Hackathon Theme Voting",
    category: "Events",
    status: "Active",
    votes: 109,
    progress: 48,
    time: "2 days ago",
  },
];

const activities = [
  {
    text: "Rahul voted on Favourite Programming Language",
    time: "8 minutes ago",
    icon: Vote,
  },
  {
    text: "Employee Satisfaction Survey reached 850 responses",
    time: "1 hour ago",
    icon: TrendingUp,
  },
  {
    text: "Sneha joined your Hackathon Theme Voting poll",
    time: "3 hours ago",
    icon: Users,
  },
  {
    text: "Employee Satisfaction Survey was closed",
    time: "Yesterday",
    icon: CheckCircle2,
  },
];

const Home = () => {
  return (
    <div className="space-y-8 pb-10">
      {/* =========================================================
          OVERVIEW INTRO
      ========================================================= */}
      <section>
        <div className="flex flex-col gap-2">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--primary)" }}
          >
            Overview
          </p>

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h1
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: "var(--text-primary)" }}
              >
                Your polling activity
              </h1>

              <p
                className="mt-2 max-w-2xl text-sm leading-6 sm:text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                Keep track of responses, engagement and poll performance from
                one place.
              </p>
            </div>

            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "#22c55e" }}
              />
              Everything is up to date
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total Polls */}
        <div
          className="rounded-2xl border p-5 transition duration-200 hover:-translate-y-0.5"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Total Polls
              </p>

              <h2
                className="mt-3 text-3xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                24
              </h2>
            </div>

            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{
                background: "rgba(192,36,39,0.12)",
                color: "var(--primary)",
              }}
            >
              <BarChart3 size={21} />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs">
            <span
              className="rounded-full px-2 py-1 font-semibold"
              style={{
                background: "rgba(34,197,94,0.12)",
                color: "#22c55e",
              }}
            >
              +12%
            </span>

            <span style={{ color: "var(--text-secondary)" }}>
              vs last month
            </span>
          </div>
        </div>

        {/* Responses */}
        <div
          className="rounded-2xl border p-5 transition duration-200 hover:-translate-y-0.5"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Total Responses
              </p>

              <h2
                className="mt-3 text-3xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                3,482
              </h2>
            </div>

            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{
                background: "rgba(192,36,39,0.12)",
                color: "var(--primary)",
              }}
            >
              <Vote size={21} />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs">
            <span
              className="rounded-full px-2 py-1 font-semibold"
              style={{
                background: "rgba(34,197,94,0.12)",
                color: "#22c55e",
              }}
            >
              +18.4%
            </span>

            <span style={{ color: "var(--text-secondary)" }}>
              this month
            </span>
          </div>
        </div>

        {/* Participants */}
        <div
          className="rounded-2xl border p-5 transition duration-200 hover:-translate-y-0.5"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Participants
              </p>

              <h2
                className="mt-3 text-3xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                946
              </h2>
            </div>

            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{
                background: "rgba(192,36,39,0.12)",
                color: "var(--primary)",
              }}
            >
              <Users size={21} />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs">
            <span
              className="rounded-full px-2 py-1 font-semibold"
              style={{
                background: "rgba(34,197,94,0.12)",
                color: "#22c55e",
              }}
            >
              +8.2%
            </span>

            <span style={{ color: "var(--text-secondary)" }}>
              new participants
            </span>
          </div>
        </div>

        {/* Active Polls */}
        <div
          className="rounded-2xl border p-5 transition duration-200 hover:-translate-y-0.5"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Active Polls
              </p>

              <h2
                className="mt-3 text-3xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                7
              </h2>
            </div>

            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{
                background: "rgba(192,36,39,0.12)",
                color: "var(--primary)",
              }}
            >
              <Flame size={21} />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs">
            <span
              className="rounded-full px-2 py-1 font-semibold"
              style={{
                background: "rgba(192,36,39,0.12)",
                color: "var(--primary)",
              }}
            >
              3 need attention
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          ANALYTICS + MONTHLY GOAL
      ========================================================= */}
      <section className="grid gap-6 xl:grid-cols-3">
        {/* Response Analytics */}
        <div
          className="rounded-3xl border p-6 xl:col-span-2"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <div className="flex items-center gap-2">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Response Analytics
                </h2>

                <span
                  className="rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide"
                  style={{
                    background: "rgba(34,197,94,0.12)",
                    color: "#22c55e",
                  }}
                >
                  +18.4%
                </span>
              </div>

              <p
                className="mt-1 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Responses collected over the last 7 days
              </p>
            </div>

            <select
              className="rounded-xl border px-3 py-2 text-sm outline-none"
              style={{
                background: "var(--bg)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
              defaultValue="7"
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
            </select>
          </div>

          <div className="mt-8 h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={responseData}
                margin={{
                  top: 10,
                  right: 5,
                  left: -20,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient
                    id="responseGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="var(--primary)"
                      stopOpacity={0.28}
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--primary)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  vertical={false}
                  stroke="var(--border)"
                  strokeDasharray="4 4"
                />

                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "var(--text-secondary)",
                    fontSize: 12,
                  }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "var(--text-secondary)",
                    fontSize: 12,
                  }}
                />

                <Tooltip
                  contentStyle={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    color: "var(--text-primary)",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="responses"
                  stroke="var(--primary)"
                  strokeWidth={3}
                  fill="url(#responseGradient)"
                  dot={false}
                  activeDot={{
                    r: 5,
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div
            className="mt-4 flex items-center justify-between border-t pt-4 text-sm"
            style={{ borderColor: "var(--border)" }}
          >
            <span style={{ color: "var(--text-secondary)" }}>
              Total this week
            </span>

            <span
              className="font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              3,930 responses
            </span>
          </div>
        </div>

        {/* Monthly Goal */}
        <div
          className="rounded-3xl border p-6"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Monthly Goal
              </p>

              <h2
                className="mt-1 text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                August progress
              </h2>
            </div>

            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{
                background: "rgba(192,36,39,0.12)",
                color: "var(--primary)",
              }}
            >
              <TrendingUp size={19} />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <div
              className="flex h-40 w-40 items-center justify-center rounded-full"
              style={{
                background:
                  "conic-gradient(var(--primary) 72%, rgba(255,255,255,0.06) 72%)",
              }}
            >
              <div
                className="flex h-32 w-32 flex-col items-center justify-center rounded-full"
                style={{ background: "var(--bg-card)" }}
              >
                <span
                  className="text-3xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  72%
                </span>

                <span
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  completed
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span style={{ color: "var(--text-secondary)" }}>
                  Polls created
                </span>

                <span
                  className="font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  4 / 6
                </span>
              </div>

              <div
                className="mt-2 h-2 overflow-hidden rounded-full"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "67%",
                    background: "var(--primary)",
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span style={{ color: "var(--text-secondary)" }}>
                  Responses
                </span>

                <span
                  className="font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  3,482 / 4,000
                </span>
              </div>

              <div
                className="mt-2 h-2 overflow-hidden rounded-full"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "87%",
                    background: "#22c55e",
                  }}
                />
              </div>
            </div>
          </div>

          <p
            className="mt-6 text-xs leading-5"
            style={{ color: "var(--text-secondary)" }}
          >
            You're on track to beat last month's engagement by{" "}
            <span
              className="font-semibold"
              style={{ color: "#22c55e" }}
            >
              18%
            </span>
            .
          </p>
        </div>
      </section>

      {/* =========================================================
          RECENT POLLS + TOP PERFORMING
      ========================================================= */}
      <section className="grid gap-6 xl:grid-cols-3">
        {/* Recent Polls */}
        <div
          className="rounded-3xl border p-6 xl:col-span-2"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2
                className="text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Recent Polls
              </h2>

              <p
                className="mt-1 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Your latest polling activity
              </p>
            </div>

            <Link
              to="/dashboard/polls"
              className="flex items-center gap-2 text-sm font-medium transition hover:opacity-80"
              style={{ color: "var(--primary)" }}
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-3">
            {recentPolls.map((poll) => (
              <div
                key={poll.id}
                className="group rounded-2xl border p-4 transition duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--border)",
                  background: "rgba(255,255,255,0.015)",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className="truncate font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {poll.title}
                      </h3>

                      <span
                        className="rounded-full px-2 py-1 text-[10px] font-semibold"
                        style={{
                          background:
                            poll.status === "Active"
                              ? "rgba(34,197,94,0.12)"
                              : "rgba(148,163,184,0.12)",
                          color:
                            poll.status === "Active"
                              ? "#22c55e"
                              : "var(--text-secondary)",
                        }}
                      >
                        {poll.status}
                      </span>
                    </div>

                    <div
                      className="mt-2 flex flex-wrap items-center gap-3 text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span>{poll.category}</span>
                      <span>•</span>
                      <span>{poll.time}</span>
                      <span>•</span>
                      <span>{poll.votes} votes</span>
                    </div>

                    <div
                      className="mt-4 h-1.5 overflow-hidden rounded-full"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${poll.progress}%`,
                          background: "var(--primary)",
                        }}
                      />
                    </div>
                  </div>

                  <Link
                    to={`/polls/${poll.id}/analytics`}
                    className="rounded-xl px-3 py-2 text-xs font-medium opacity-80 transition hover:opacity-100"
                    style={{
                      background: "rgba(192,36,39,0.12)",
                      color: "var(--primary)",
                    }}
                  >
                    Analytics
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Poll */}
        <div
          className="relative overflow-hidden rounded-3xl border p-6"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl"
            style={{ background: "rgba(192,36,39,0.16)" }}
          />

          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--primary)" }}
                >
                  Top Performer
                </p>

                <h2
                  className="mt-2 text-xl font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Employee Satisfaction
                </h2>
              </div>

              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(192,36,39,0.12)",
                  color: "var(--primary)",
                }}
              >
                <Flame size={19} />
              </div>
            </div>

            <p
              className="mt-4 text-sm leading-6"
              style={{ color: "var(--text-secondary)" }}
            >
              Your most engaging poll this month based on responses and
              participation.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div
                className="rounded-2xl border p-4"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Responses
                </p>

                <p
                  className="mt-2 text-2xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  852
                </p>
              </div>

              <div
                className="rounded-2xl border p-4"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Engagement
                </p>

                <p
                  className="mt-2 text-2xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  92%
                </p>
              </div>
            </div>

            <div
              className="mt-5 flex items-center justify-between rounded-2xl p-4"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div>
                <p
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Average response time
                </p>

                <p
                  className="mt-1 font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  1.8 minutes
                </p>
              </div>

              <TrendingUp
                size={20}
                style={{ color: "#22c55e" }}
              />
            </div>

            <Link
              to="/polls/2/analytics"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition hover:opacity-90"
              style={{
                background: "var(--primary)",
                color: "#fff",
              }}
            >
              View Full Analytics
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          ACTIVITY + DRAFTS
      ========================================================= */}
      <section className="grid gap-6 xl:grid-cols-3">
        {/* Recent Activity */}
        <div
          className="rounded-3xl border p-6 xl:col-span-2"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="mb-7">
            <h2
              className="text-xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Recent Activity
            </h2>

            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              What's happening across your polls
            </p>
          </div>

          <div className="space-y-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <div
                  key={index}
                  className="relative flex gap-4"
                >
                  {index !== activities.length - 1 && (
                    <div
                      className="absolute left-5 top-11 h-8 w-px"
                      style={{ background: "var(--border)" }}
                    />
                  )}

                  <div
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(192,36,39,0.12)",
                      color: "var(--primary)",
                    }}
                  >
                    <Icon size={17} />
                  </div>

                  <div className="min-w-0 pt-1">
                    <p
                      className="text-sm leading-5"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {activity.text}
                    </p>

                    <div
                      className="mt-1 flex items-center gap-1 text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <Clock3 size={12} />
                      {activity.time}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Draft Polls */}
        <div
          className="rounded-3xl border p-6"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <h2
                className="text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Draft Polls
              </h2>

              <p
                className="mt-1 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Finish what you started
              </p>
            </div>

            <FileEdit
              size={20}
              style={{ color: "var(--primary)" }}
            />
          </div>

          <div className="mt-6 space-y-3">
            <div
              className="rounded-2xl border p-4"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className="font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Product Feedback Survey
                  </p>

                  <p
                    className="mt-1 text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    4 of 7 questions
                  </p>
                </div>

                <MoreHorizontal
                  size={18}
                  style={{ color: "var(--text-secondary)" }}
                />
              </div>

              <div
                className="mt-4 h-1.5 overflow-hidden rounded-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "57%",
                    background: "var(--primary)",
                  }}
                />
              </div>

              <Link
                to="/polls/create"
                className="mt-4 flex items-center justify-between text-xs font-semibold"
                style={{ color: "var(--primary)" }}
              >
                Continue editing
                <ArrowRight size={14} />
              </Link>
            </div>

            <div
              className="rounded-2xl border p-4"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className="font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Weekend Activity
                  </p>

                  <p
                    className="mt-1 text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    2 of 5 questions
                  </p>
                </div>

                <MoreHorizontal
                  size={18}
                  style={{ color: "var(--text-secondary)" }}
                />
              </div>

              <div
                className="mt-4 h-1.5 overflow-hidden rounded-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "40%",
                    background: "var(--primary)",
                  }}
                />
              </div>

              <Link
                to="/polls/create"
                className="mt-4 flex items-center justify-between text-xs font-semibold"
                style={{ color: "var(--primary)" }}
              >
                Continue editing
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INSIGHT BANNER
      ========================================================= */}
      <section
        className="relative overflow-hidden rounded-3xl border p-6 sm:p-7"
        style={{
          background:
            "linear-gradient(135deg, rgba(192,36,39,0.14), var(--bg-card) 65%)",
          borderColor: "var(--border)",
        }}
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{
                background: "rgba(192,36,39,0.15)",
                color: "var(--primary)",
              }}
            >
              <TrendingUp size={21} />
            </div>

            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--primary)" }}
              >
                Insight
              </p>

              <h3
                className="mt-1 text-lg font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Your polls received 18% more responses this week.
              </h3>

              <p
                className="mt-1 text-sm leading-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Engagement is trending upward. Your Saturday polls are
                currently getting the highest response rate.
              </p>
            </div>
          </div>

          <Link
            to="/dashboard/analytics"
            className="flex shrink-0 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition hover:opacity-80"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          >
            Explore Analytics
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

