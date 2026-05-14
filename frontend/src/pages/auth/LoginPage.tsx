import {
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  useNavigate,
  Link,
} from "react-router-dom";

// import {
//   GoogleLogin,
//  type CredentialResponse,
// } from "@react-oauth/google";

import {
  GoogleLogin,
} from "@react-oauth/google";

import type {
  CredentialResponse,
} from "@react-oauth/google";

import {
  loginUser,
  googleLogin,
} from "../../api/auth.api.js";

function LoginPage() {
  console.log(import.meta.env.VITE_API_URL)
  
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

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
    e:  React.SyntheticEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data =
        await loginUser(formData);

      localStorage.setItem(
        "token",
        data.accessToken
      );

      navigate("/polls");
    } catch (error) {
      console.error(error);

      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess =
    async (
      credentialResponse: CredentialResponse
    ) => {
      try {
        if (
          !credentialResponse.credential
        ) {
          return;
        }

        const data =
          await googleLogin(
            credentialResponse.credential
          );

        localStorage.setItem(
          "token",
          data.accessToken
        );

        navigate("/polls");
      } catch (error) {
        console.error(error);

        alert(
          "Google login failed"
        );
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
        relative
        overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-[var(--primary)]
          opacity-20
          blur-3xl
          -top-40
          -left-40
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          relative
          z-10
          w-full
          max-w-md
          bg-[var(--bg-card)]
          border
          border-[var(--border)]
          rounded-3xl
          p-8
          shadow-2xl
          backdrop-blur-xl
        "
      >
        {/* Heading */}
        <div className="mb-8">
          <h1
            className="
              text-4xl
              font-bold
              text-[var(--text-primary)]
            "
          >
            Welcome Back
          </h1>

          <p
            className="
              mt-2
              text-[var(--text-secondary)]
            "
          >
            Login to continue
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <label
              className="
                block
                mb-2
                text-sm
                text-[var(--text-secondary)]
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
              placeholder="Enter email"
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-[#1a1a1a]
                border
                border-[var(--border)]
                text-white
                outline-none
                focus:border-[var(--primary)]
                transition-all
              "
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="
                block
                mb-2
                text-sm
                text-[var(--text-secondary)]
              "
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              value={
                formData.password
              }
              onChange={
                handleChange
              }
              required
              placeholder="Enter password"
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-[#1a1a1a]
                border
                border-[var(--border)]
                text-white
                outline-none
                focus:border-[var(--primary)]
                transition-all
              "
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            disabled={loading}
            className="
              w-full
              py-3
              rounded-xl
              font-semibold
              text-white
              bg-[var(--primary)]
              hover:bg-[var(--primary-hover)]
              transition-all
              disabled:opacity-50
            "
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </motion.button>
        </form>

        {/* Divider */}
        <div
          className="
            flex
            items-center
            gap-4
            my-6
          "
        >
          <div className="flex-1 h-px bg-[var(--border)]" />

          <span
            className="
              text-sm
              text-[var(--text-secondary)]
            "
          >
            OR
          </span>

          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Google Login */}
        <div
          className="
            flex
            justify-center
          "
        >
          <GoogleLogin
            onSuccess={
              handleGoogleSuccess
            }
            onError={() => {
              alert(
                "Google Login Failed"
              );
            }}
            theme="filled_black"
            shape="pill"
            size="large"
            text="continue_with"
          />
        </div>

        {/* Register */}
        <p
          className="
            text-center
            text-sm
            mt-8
            text-[var(--text-secondary)]
          "
        >
          Don&apos;t have an
          account?{" "}
          <Link
            to="/register"
            className="
              text-[var(--primary)]
              hover:underline
            "
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default LoginPage;