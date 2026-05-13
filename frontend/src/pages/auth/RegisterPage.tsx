import React, {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import {
  Eye,
  EyeOff,
  Loader2,
  UserPlus,
} from "lucide-react";

import {
  registerUser,
} from "../../api/auth.api.js";

const RegisterPage = () => {
  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState({
      name: "",
      username: "",
      email: "",
      role: "user",
      password: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await registerUser(
        formData
      );

      navigate("/login");
    } catch (err: any) {
      setError(
        err?.response?.data
          ?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[var(--bg-primary)]
        px-4
        py-10
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          w-full
          max-w-md
        "
      >
        <div
          className="
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--bg-card)]
            p-8
            shadow-2xl
          "
        >
          {/* Heading */}
          <div
            className="
              mb-8
              text-center
            "
          >
            <div
              className="
                mx-auto
                mb-4
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-[var(--primary)]
              "
            >
              <UserPlus
                className="
                  text-white
                "
                size={30}
              />
            </div>

            <h1
              className="
                text-3xl
                font-bold
                text-[var(--text-primary)]
              "
            >
              Create Account
            </h1>

            <p
              className="
                mt-2
                text-sm
                text-[var(--text-secondary)]
              "
            >
              Join Proper Poll and
              start creating premium
              polls.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div
              className="
                mb-5
                rounded-xl
                border
                border-red-500/30
                bg-red-500/10
                px-4
                py-3
                text-sm
                text-red-400
              "
            >
              {error}
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={
              handleSubmit
            }
            className="
              space-y-5
            "
          >
            {/* Name */}
            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-[var(--text-primary)]
                "
              >
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
                required
                placeholder="Enter your name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[#1a1a1a]
                  px-4
                  py-3
                  text-[var(--text-primary)]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[var(--text-secondary)]
                  focus:border-[var(--primary)]
                  focus:ring-2
                  focus:ring-[var(--primary)]/20
                "
              />
            </div>

            {/* Username */}
            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-[var(--text-primary)]
                "
              >
                Username
              </label>

              <input
                type="text"
                name="username"
                value={
                  formData.username
                }
                onChange={
                  handleChange
                }
                required
                placeholder="Choose a username"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[#1a1a1a]
                  px-4
                  py-3
                  text-[var(--text-primary)]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[var(--text-secondary)]
                  focus:border-[var(--primary)]
                  focus:ring-2
                  focus:ring-[var(--primary)]/20
                "
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-[var(--text-primary)]
                "
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                required
                placeholder="Enter your email"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[#1a1a1a]
                  px-4
                  py-3
                  text-[var(--text-primary)]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[var(--text-secondary)]
                  focus:border-[var(--primary)]
                  focus:ring-2
                  focus:ring-[var(--primary)]/20
                "
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-[var(--text-primary)]
                "
              >
                Password
              </label>

              <div
                className="
                  relative
                "
              >
                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={
                    formData.password
                  }
                  onChange={
                    handleChange
                  }
                  required
                  placeholder="Create a password"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[#1a1a1a]
                    px-4
                    py-3
                    pr-12
                    text-[var(--text-primary)]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[var(--text-secondary)]
                    focus:border-[var(--primary)]
                    focus:ring-2
                    focus:ring-[var(--primary)]/20
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[var(--text-secondary)]
                    transition
                    hover:text-white
                  "
                >
                  {showPassword ? (
                    <EyeOff
                      size={20}
                    />
                  ) : (
                    <Eye
                      size={20}
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              type="submit"
              disabled={loading}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-[var(--primary)]
                px-4
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[var(--primary-hover)]
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {loading ? (
                <>
                  <Loader2
                    className="
                      animate-spin
                    "
                    size={20}
                  />
                  Creating...
                </>
              ) : (
                <>
                  <UserPlus
                    size={20}
                  />
                  Register
                </>
              )}
            </motion.button>
          </form>

          {/* Footer */}
          <p
            className="
              mt-8
              text-center
              text-sm
              text-[var(--text-secondary)]
            "
          >
            Already have an
            account?{" "}
            <Link
              to="/login"
              className="
                font-semibold
                text-[var(--primary)]
                transition
                hover:text-[var(--primary-hover)]
              "
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;