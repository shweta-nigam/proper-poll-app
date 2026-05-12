import {
  BarChart3,
  Sparkles,
  Share2,
} from "lucide-react";

type FeatureCardProps = {
  icon?: "analytics" | "create" | "share";
  title: string;
  description: string;
};

const iconMap = {
  analytics: BarChart3,
  create: Sparkles,
  share: Share2,
};

function FeatureCard({
  icon = "analytics",
  title,
  description,
}: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="feature-card group">
      {/* Top */}
      <div className="flex items-center justify-between mb-8">
        <div
          className="
            p-4
            rounded-2xl
            bg-[rgba(192,36,39,0.12)]
            border
            border-[rgba(192,36,39,0.2)]
          "
        >
          <Icon
            size={32}
            className="
              text-[var(--primary)]
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />
        </div>

        <div
          className="
            text-xs
            px-3
            py-1
            rounded-full
            border
            border-[var(--border)]
            text-[var(--text-secondary)]
          "
        >
          Live
        </div>
      </div>

      {/* Fake Graph */}
      <div className="graph mb-8">
        <div className="graph-bar h-[40%] delay-100"></div>

        <div className="graph-bar h-[65%] delay-200"></div>

        <div className="graph-bar h-[85%] delay-300"></div>

        <div className="graph-bar h-[55%] delay-500"></div>

        <div className="graph-bar h-[75%] delay-700"></div>
      </div>

      {/* Content */}
      <h3
        className="
          text-2xl
          font-bold
          mb-4
          text-[var(--text-primary)]
        "
      >
        {title}
      </h3>

      <p
        className="
          leading-7
          text-[var(--text-secondary)]
        "
      >
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;