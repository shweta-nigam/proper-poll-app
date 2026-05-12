import {
  motion,
} from "framer-motion";

import {
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Features",
    "How It Works",
    "Analytics",
    "Testimonials",
    "FAQ",
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
          background:
            "rgba(17,17,17,0.7)",
          borderColor:
            "rgba(255,255,255,0.06)",
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
              boxShadow:
                "0 0 30px rgba(192,36,39,0.35)",
            }}
          >
            P
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
            Pollify
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
            <button
              key={link}
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
                color:
                  "var(--text-secondary)",
              }}
            >
              <span className="relative z-10">
                {link}
              </span>

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
                  background:
                    "var(--primary)",
                }}
              />
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-5 lg:flex">
          {/* Login */}
          <button
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.15em]
              transition-all
              duration-300
            "
            style={{
              color:
                "var(--text-secondary)",
            }}
          >
            Login
          </button>

          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
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
              boxShadow:
                "0 0 30px rgba(192,36,39,0.35)",
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
            background:
              "rgba(255,255,255,0.04)",
            border:
              "1px solid rgba(255,255,255,0.06)",
            color: "var(--text-primary)",
          }}
        >
          {open ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
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
            background:
              "rgba(34,34,34,0.92)",
            borderColor:
              "rgba(255,255,255,0.06)",
            backdropFilter: "blur(18px)",
          }}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link}
                className="
                  text-left
                  text-lg
                  font-semibold
                "
                style={{
                  color:
                    "var(--text-primary)",
                }}
              >
                {link}
              </button>
            ))}

            {/* Mobile Buttons */}
            <div className="mt-4 flex flex-col gap-4">
              <button
                className="
                  rounded-2xl
                  border
                  px-6
                  py-4
                  text-lg
                  font-semibold
                "
                style={{
                  borderColor:
                    "rgba(255,255,255,0.08)",
                  color:
                    "var(--text-primary)",
                }}
              >
                Login
              </button>

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