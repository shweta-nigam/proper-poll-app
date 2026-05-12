import {
  motion,
} from "framer-motion";

import {
  ArrowUpRight,
  Heart,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaDiscord,
} from "react-icons/fa6";

const footerLinks = [
  {
    title: "Product",
    links: [
      "Features",
      "Analytics",
      "Dashboard",
      "Live Polls",
    ],
  },
  {
    title: "Resources",
    links: [
      "Documentation",
      "API",
      "Help Center",
      "Community",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Careers",
      "Privacy",
      "Terms",
    ],
  },
];

const socials = [
  FaGithub,
  FaXTwitter,
  FaLinkedinIn,
  FaDiscord,
];

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        px-6
        pt-24
        lg:px-20
      "
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor:
          "rgba(255,255,255,0.06)",
      }}
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          left-0
          top-0
          h-[350px]
          w-[350px]
          rounded-full
          blur-[140px]
        "
        style={{
          background:
            "rgba(192,36,39,0.14)",
        }}
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-[350px]
          w-[350px]
          rounded-full
          blur-[140px]
        "
        style={{
          background:
            "rgba(224,49,53,0.10)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            {/* Logo */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="mb-6 flex items-center gap-4"
            >
              {/* Logo Box */}
              <div className="relative">
                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    blur-xl
                  "
                  style={{
                    background:
                      "rgba(192,36,39,0.45)",
                  }}
                />

                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    text-2xl
                    font-black
                  "
                  style={{
                    background:
                      "linear-gradient(to bottom right, var(--primary), var(--primary-hover))",
                    color: "#ffffff",
                    boxShadow:
                      "0 0 35px rgba(192,36,39,0.35)",
                  }}
                >
                  P
                </div>
              </div>

              {/* Text */}
              <div>
                <h2
                  className="
                    text-3xl
                    font-black
                    tracking-tight
                  "
                  style={{
                    color:
                      "var(--text-primary)",
                  }}
                >
                  Pollify
                </h2>

                <p
                  className="
                    -mt-1
                    text-xs
                    uppercase
                    tracking-[0.3em]
                  "
                  style={{
                    color:
                      "var(--text-secondary)",
                  }}
                >
                  Real-Time Polling
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <p
              className="
                mb-8
                max-w-md
                text-lg
                leading-relaxed
              "
              style={{
                color:
                  "var(--text-secondary)",
              }}
            >
              Modern polling platform designed for
              teams, communities, events, and live
              audience engagement.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socials.map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    group
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-all
                    duration-300
                  "
                  style={{
                    borderColor:
                      "rgba(255,255,255,0.08)",
                    background:
                      "rgba(255,255,255,0.03)",
                    color:
                      "var(--text-primary)",
                    backdropFilter:
                      "blur(12px)",
                  }}
                >
                  {/* Hover Glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(192,36,39,0.18), transparent 70%)",
                    }}
                  />

                  <Icon
                    size={22}
                    className="relative z-10"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3
                className="
                  mb-8
                  text-xl
                  font-bold
                "
                style={{
                  color:
                    "var(--text-primary)",
                }}
              >
                {section.title}
              </h3>

              <div className="space-y-5">
                {section.links.map((link) => (
                  <button
                    key={link}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-left
                      transition-all
                      duration-300
                      hover:translate-x-1
                    "
                    style={{
                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    <span>{link}</span>

                    <ArrowUpRight
                      size={16}
                      className="
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:opacity-100
                      "
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="
            mt-20
            flex
            flex-col
            items-center
            justify-between
            gap-6
            border-t
            py-8
            md:flex-row
          "
          style={{
            borderColor:
              "rgba(255,255,255,0.06)",
          }}
        >
          {/* Copyright */}
          <p
            className="
              flex
              items-center
              gap-2
            "
            style={{
              color:
                "var(--text-secondary)",
            }}
          >
            © 2026 Pollify. Made with

            <Heart
              size={16}
              fill="currentColor"
              style={{
                color: "var(--primary)",
              }}
            />

            for real-time engagement.
          </p>

          {/* Bottom Links */}
          <div className="flex items-center gap-8">
            {[
              "Privacy Policy",
              "Terms",
              "Cookies",
            ].map((item) => (
              <button
                key={item}
                className="
                  transition-colors
                  duration-300
                  hover:text-white
                "
                style={{
                  color:
                    "var(--text-secondary)",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;