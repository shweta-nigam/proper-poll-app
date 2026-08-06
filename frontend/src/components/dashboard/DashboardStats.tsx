import {
  Activity,
  BarChart3,
  Users,
  Vote,
} from "lucide-react";
import StatsCard from "./StatsCard";

const DashboardStats = () => {
  return (
    <section>
      <div className="mb-6">
        <h2
          className="text-2xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Dashboard Overview
        </h2>

        <p
          className="mt-1"
          style={{ color: "var(--text-secondary)" }}
        >
          Track the performance of your polls at a glance.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Polls"
          value={24}
          description="Created so far"
          icon={Vote}
          trend={{
            value: "+12%",
            positive: true,
          }}
        />

        <StatsCard
          title="Votes Received"
          value="3,482"
          description="Across all polls"
          icon={BarChart3}
          trend={{
            value: "+8%",
            positive: true,
          }}
        />

        <StatsCard
          title="Participants"
          value={946}
          description="Unique voters"
          icon={Users}
          trend={{
            value: "+18%",
            positive: true,
          }}
        />

        <StatsCard
          title="Active Polls"
          value={7}
          description="Currently running"
          icon={Activity}
          trend={{
            value: "-2%",
            positive: false,
          }}
        />
      </div>
    </section>
  );
};

export default DashboardStats;