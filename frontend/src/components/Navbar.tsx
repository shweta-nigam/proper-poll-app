import { motion } from "framer-motion";

import { Menu, X, ChevronRight } from "lucide-react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    {
      name: "Features",
      path: "#features",
    },
    {
      name: "How It Works",
      path: "#how-it-works",
    },
    {
      name: "Analytics",
      path: "#analytics",
    },
    {
      name: "Testimonials",
      path: "#testimonials",
    },
    {
      name: "FAQ",
      path: "#faq",
    },
  ];

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        px-6
        py-5
        lg:px-16
      "
    >
      {/* Blur Background */}
      <div
        className="
          absolute
          inset-0
          border-b
          backdrop-blur-2xl
        "
        style={{
          background: "rgba(17,17,17,0.7)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="flex items-center gap-3"
        >
          {/* Logo Icon */}
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              text-xl
              font-black
            "
            style={{
              background:
                "linear-gradient(to bottom right, var(--primary), var(--primary-hover))",
              color: "#ffffff",
              boxShadow: "0 0 40px rgba(192,36,39,0.35)",
            }}
          >
            Proper
          </div>

          {/* Logo Text */}
          <h1
            className="
              text-3xl
              font-black
              tracking-tight
            "
            style={{
              color: "var(--text-primary)",
            }}
          >
            Poll
          </h1>
        </motion.div>

        {/* Desktop Nav */}
        <nav
          className="
            hidden
            items-center
            gap-10
            lg:flex
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="
      relative
      text-sm
      font-semibold
      uppercase
      tracking-[0.15em]
      transition-all
      duration-300
    "
              style={{
                color: "var(--text-secondary)",
              }}
            >
              <span className="relative z-10">{link.name}</span>

              {/* Hover Line */}
              <span
                className="
        absolute
        bottom-[-8px]
        left-0
        h-[2px]
        w-0
        transition-all
        duration-300
        hover:w-full
      "
                style={{
                  background: "var(--primary)",
                }}
              />
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-5 lg:flex">
          {/* Login */}
          <Link
            to="/login"
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.15em]
              transition-all
              duration-300
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Login
          </Link>

          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => navigate("/polls/create")}
            className="
              group
              flex
              items-center
              gap-2
              rounded-2xl
              px-6
              py-3
              text-sm
              font-semibold
              uppercase
              tracking-[0.15em]
            "
            style={{
              background:
                "linear-gradient(to right, var(--primary), var(--primary-hover))",
              color: "#ffffff",
              boxShadow: "0 0 30px rgba(192,36,39,0.35)",
            }}
          >
            Create Poll
            <ChevronRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            lg:hidden
          "
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            color: "var(--text-primary)",
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            relative
            z-10
            mx-6
            mt-5
            overflow-hidden
            rounded-[32px]
            border
            p-6
            lg:hidden
          "
          style={{
            background: "rgba(34,34,34,0.92)",
            borderColor: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(18px)",
          }}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="
      text-left
      text-lg
      font-semibold
      transition-all
      duration-300
      hover:translate-x-1
    "
                style={{
                  color: "var(--text-primary)",
                }}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Buttons */}
            <div className="mt-4 flex flex-col gap-4">
              <Link
                to="/login"
                className="
                  rounded-2xl
                  border
                  px-6
                  py-4
                  text-lg
                  font-semibold
                "
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  color: "var(--text-primary)",
                }}
              >
                Login
              </Link>

              <button
                className="
                  rounded-2xl
                  px-6
                  py-4
                  text-lg
                  font-semibold
                "
                style={{
                  background:
                    "linear-gradient(to right, var(--primary), var(--primary-hover))",
                  color: "#ffffff",
                }}
              >
                Create Poll
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
