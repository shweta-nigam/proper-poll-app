import {
  Bell,
  Plus,
  Search,
} from "lucide-react";

const DashboardHeader = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex items-center justify-between px-10 py-5">
      {/* Left */}
      <div>
        <h1
          className="text-3xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Welcome back 👋
        </h1>

        <p
          className="mt-1 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          {today}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div
          className="flex items-center gap-3 rounded-xl border px-4 py-3"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <Search
            size={18}
            style={{ color: "var(--text-secondary)" }}
          />

          <input
            type="text"
            placeholder="Search polls..."
            className="w-64 bg-transparent outline-none"
            style={{
              color: "var(--text-primary)",
            }}
          />
        </div>

        {/* Notification */}
        <button
          className="relative rounded-xl border p-3 transition hover:scale-105"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <Bell
            size={20}
            style={{ color: "var(--text-primary)" }}
          />

          <span
            className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full"
            style={{
              background: "var(--primary)",
            }}
          />
        </button>

        {/* Create Poll */}
        <button
          className="flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition hover:scale-105"
          style={{
            background: "var(--primary)",
            color: "#fff",
          }}
        >
          <Plus size={18} />
          Create Poll
        </button>

        {/* User */}
        <button
          className="flex items-center gap-3 rounded-xl border px-3 py-2 transition hover:bg-white/5"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold"
            style={{
              background: "var(--primary)",
              color: "#fff",
            }}
          >
            S
          </div>

          <div className="text-left">
            <p
              className="font-semibold"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Shweta
            </p>

            <p
              className="text-xs"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Poll Creator
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;