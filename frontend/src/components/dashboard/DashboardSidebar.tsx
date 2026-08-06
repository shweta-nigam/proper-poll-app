import {
  BarChart3,
  Home,
  LogOut,
  Settings,
  Users,
  Vote,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    icon: Home,
    path: "/dashboard/home",
  },
  {
    title: "My Polls",
    icon: Vote,
    path: "/dashboard/polls",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/dashboard/analytics",
  },
  {
    title: "Participants",
    icon: Users,
    path: "/dashboard/participants",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

const DashboardSidebar = () => {
  return (
    <div className="flex h-full flex-col justify-between px-5 py-6">
      {/* Logo */}
      <div>
        <div className="mb-10">
          <h1
            className="text-2xl font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Proper
            <span style={{ color: "var(--primary)" }}>Poll</span>
          </h1>

          <p
            className="mt-1 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Poll Management Dashboard
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                    isActive
                      ? "shadow-lg"
                      : "hover:translate-x-1 hover:bg-white/5"
                  }`
                }
                style={({ isActive }) => ({
                  backgroundColor: isActive
                    ? "var(--primary)"
                    : "transparent",
                  color: isActive
                    ? "#fff"
                    : "var(--text-secondary)",
                })}
              >
                <Icon size={20} />

                <span className="font-medium">{item.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        <button
          className="flex w-full items-center gap-3 rounded-xl border px-4 py-3 transition hover:bg-white/5"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>

        <div
          className="mt-6 border-t pt-4 text-xs"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          ProperPoll v1.0
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;