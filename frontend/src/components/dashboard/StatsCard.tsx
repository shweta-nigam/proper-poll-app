import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
}

const StatsCard = ({
  title,
  value,
  description,
  icon: Icon,
  trend,
}: StatsCardProps) => {
  return (
    <div
      className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div>
          <p
            className="text-sm font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            {title}
          </p>

          <h2
            className="mt-3 text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            {value}
          </h2>
        </div>

        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: "rgba(192,36,39,0.12)",
          }}
        >
          <Icon
            size={26}
            style={{
              color: "var(--primary)",
            }}
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 flex items-center justify-between">
        {description ? (
          <p
            className="text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            {description}
          </p>
        ) : (
          <div />
        )}

        {trend && (
          <div
            className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
              trend.positive ? "bg-green-500/10" : "bg-red-500/10"
            }`}
          >
            {trend.positive ? (
              <TrendingUp size={14} className="text-green-500" />
            ) : (
              <TrendingDown size={14} className="text-red-500" />
            )}

            <span
              className={
                trend.positive ? "text-green-500" : "text-red-500"
              }
            >
              {trend.value}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;