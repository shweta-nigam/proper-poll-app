import { Search, Flame, Clock3, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const polls = [
  {
    id: 1,
    question: "Which frontend framework do you prefer in 2026?",
    votes: 1245,
    category: "Technology",
    trending: true,
  },
  {
    id: 2,
    question: "What is the best way to learn DSA?",
    votes: 892,
    category: "Education",
    trending: false,
  },
  {
    id: 3,
    question: "Which AI tool helps developers the most?",
    votes: 2150,
    category: "AI",
    trending: true,
  },
  {
    id: 4,
    question: "Should remote work remain permanent?",
    votes: 623,
    category: "Career",
    trending: false,
  },
];

const PollsPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        min-h-screen
        bg-[var(--bg-primary)]
        text-[var(--text-primary)]
      "
    >
      {/* Navbar */}
      <nav
        className="
          sticky
          top-0
          z-50
          border-b
          border-[var(--border)]
          bg-[#111111cc]
          backdrop-blur-lg
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-4
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              text-2xl
              font-black
              tracking-tight
            "
          >
            ProperPoll
          </div>

          <button
            onClick={() => navigate("/create-poll")}
            className="
              flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-xl
              font-semibold
              transition-all
              duration-300
              bg-[var(--primary)]
              hover:bg-[var(--primary-hover)]
            "
          >
            <Plus size={18} />
            Create Poll
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          pt-16
          pb-12
        "
      >
        <div
          className="
            max-w-3xl
          "
        >
          <h1
            className="
              text-5xl
              md:text-6xl
              font-black
              leading-tight
            "
          >
            Discover &
            <span
              className="
                text-[var(--primary)]
              "
            >
              {" "}
              Vote
            </span>{" "}
            on Trending Polls
          </h1>

          <p
            className="
              mt-6
              text-lg
              text-[var(--text-secondary)]
              leading-relaxed
            "
          >
            Explore community-driven polls, share your opinion, and see what the
            world thinks in real time.
          </p>
        </div>

        {/* Search */}
        <div
          className="
            mt-10
            relative
            max-w-2xl
          "
        >
          <Search
            size={20}
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-[var(--text-secondary)]
            "
          />

          <input
            type="text"
            placeholder="Search polls..."
            className="
              w-full
              pl-14
              pr-5
              py-4
              rounded-2xl
              bg-[var(--bg-card)]
              border
              border-[var(--border)]
              outline-none
              text-[var(--text-primary)]
              placeholder:text-[var(--text-secondary)]
              focus:border-[var(--primary)]
              transition-all
            "
          />
        </div>
      </section>

      {/* Categories */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >
        <div
          className="
            flex
            flex-wrap
            gap-4
          "
        >
          {["All", "Technology", "AI", "Education", "Career", "Gaming"].map(
            (category) => (
              <button
                key={category}
                className={`
                px-5
                py-2.5
                rounded-xl
                border
                transition-all
                duration-300
                ${
                  category === "All"
                    ? "bg-[var(--primary)] border-[var(--primary)]"
                    : "bg-[var(--bg-card)] border-[var(--border)] hover:border-[var(--primary)]"
                }
              `}
              >
                {category}
              </button>
            ),
          )}
        </div>
      </section>

      {/* Polls Grid */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          py-14
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            mb-8
          "
        >
          <h2
            className="
              text-3xl
              font-bold
            "
          >
            Trending Polls
          </h2>

          <div
            className="
              flex
              items-center
              gap-2
              text-[var(--text-secondary)]
            "
          >
            <Flame size={18} />
            Hot discussions
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {polls.map((poll) => (
            <div
              key={poll.id}
              className="
                group
                p-6
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--bg-card)]
                hover:border-[var(--primary)]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              {/* Top */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-5
                "
              >
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    bg-[#2b2b2b]
                    text-[var(--text-secondary)]
                  "
                >
                  {poll.category}
                </span>

                {poll.trending && (
                  <div
                    className="
                      flex
                      items-center
                      gap-1
                      text-[var(--primary)]
                      text-sm
                      font-medium
                    "
                  >
                    <Flame size={15} />
                    Trending
                  </div>
                )}
              </div>

              {/* Question */}
              <h3
                className="
                  text-2xl
                  font-bold
                  leading-snug
                "
              >
                {poll.question}
              </h3>

              {/* Footer */}
              <div
                className="
                  mt-8
                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[var(--text-secondary)]
                  "
                >
                  <Clock3 size={16} />
                  {poll.votes} votes
                </div>

                <button
                  className="
                    px-5
                    py-2.5
                    rounded-xl
                    font-semibold
                    bg-[var(--primary)]
                    hover:bg-[var(--primary-hover)]
                    transition-all
                  "
                >
                  Vote Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PollsPage;
