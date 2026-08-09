import {
  ArrowRight,
  Clock3,
  Plus,
  Vote,
} from "lucide-react";
import { Link } from "react-router-dom";
import DashboardStats from "../../components/dashboard/DashboardStats";

const recentPolls = [
  {
    id: 1,
    title: "Favourite Programming Language",
    status: "Active",
    votes: 324,
  },
  {
    id: 2,
    title: "Employee Satisfaction Survey",
    status: "Closed",
    votes: 852,
  },
  {
    id: 3,
    title: "Hackathon Theme Voting",
    status: "Active",
    votes: 109,
  },
];

const activities = [
  "Rahul voted on 'Favourite Programming Language'",
  "Employee Satisfaction Survey closed",
  "Sneha joined your poll",
];

const Home = () => {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section
        className="rounded-3xl border p-8"
        style={{
          background: "var(--bg-card)",
          borderColor: "var(--border)",
        }}
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p
              className="text-sm uppercase tracking-widest"
              style={{ color: "var(--primary)" }}
            >
              Dashboard
            </p>

            <h1
              className="mt-3 text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Welcome back 👋
            </h1>

            <p
              className="mt-4 max-w-2xl text-lg leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              You have <span className="font-semibold text-white">7 active polls</span>{" "}
              collecting responses. Keep an eye on engagement and create new
              polls to gather more insights.
            </p>
          </div>

          <Link
            to="/polls/create"
            className="flex items-center gap-3 rounded-2xl px-6 py-4 font-semibold transition hover:scale-105"
            style={{
              background: "var(--primary)",
              color: "#fff",
            }}
          >
            <Plus size={20} />
            Create New Poll
          </Link>
        </div>
      </section>

      {/* Stats */}
      <DashboardStats />

      {/* Bottom Grid */}
      <div className="grid gap-8 xl:grid-cols-3">
        {/* Recent Polls */}
        <section
          className="xl:col-span-2 rounded-3xl border p-6"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2
              className="text-xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Recent Polls
            </h2>

            <Link
              to="/dashboard/polls"
              className="flex items-center gap-2 text-sm font-medium transition hover:opacity-80"
              style={{ color: "var(--primary)" }}
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-4">
            {recentPolls.map((poll) => (
              <div
                key={poll.id}
                className="flex items-center justify-between rounded-2xl border p-5 transition hover:border-red-700"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <div>
                  <h3
                    className="font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {poll.title}
                  </h3>

                  <div
                    className="mt-2 flex items-center gap-4 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span>{poll.status}</span>

                    <span className="flex items-center gap-1">
                      <Vote size={15} />
                      {poll.votes} Votes
                    </span>
                  </div>
                </div>

                <Link
                  to={`/polls/${poll.id}/analytics`}
                  className="rounded-xl px-4 py-2 text-sm font-medium transition"
                  style={{
                    background: "rgba(192,36,39,0.15)",
                    color: "var(--primary)",
                  }}
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <section
            className="rounded-3xl border p-6"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <h2
              className="mb-5 text-xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Quick Actions
            </h2>

            <div className="space-y-3">
              <Link
                to="/polls/create"
                className="flex items-center justify-between rounded-xl border px-4 py-4 transition hover:border-red-700"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                Create Poll
                <Plus size={18} />
              </Link>

              <Link
                to="/dashboard/polls"
                className="flex items-center justify-between rounded-xl border px-4 py-4 transition hover:border-red-700"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                Manage Polls
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>

          {/* Activity */}
          <section
            className="rounded-3xl border p-6"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <h2
              className="mb-5 text-xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Recent Activity
            </h2>

            <div className="space-y-5">
              {activities.map((activity, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className="mt-1 flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(192,36,39,0.12)",
                    }}
                  >
                    <Clock3
                      size={18}
                      style={{ color: "var(--primary)" }}
                    />
                  </div>

                  <div>
                    <p
                      className="text-sm leading-6"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {activity}
                    </p>

                    <span
                      className="text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Just now
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;