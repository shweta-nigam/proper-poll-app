import { useState } from "react";

import {
  GoogleLogin,
 type CredentialResponse,
} from "@react-oauth/google";

import { Link } from "react-router-dom";

import {
  loginUser,
  googleLogin,
} from "../../api/auth.api.js";

const LoginPage = () => {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginUser({
        email,
        password,
      });

      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (
    credentialResponse: CredentialResponse
  ) => {
    try {
      const token =
        credentialResponse.credential;

      if (!token) {
        console.error(
          "Google token not found"
        );

        return;
      }

      const data =
        await googleLogin(token);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-[var(--border)]
          bg-[#111]
          p-8
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            mb-2
          "
        >
          Welcome Back
        </h1>

        <p
          className="
            text-sm
            text-gray-400
            mb-8
          "
        >
          Login to your account
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <div>
            <label
              className="
                text-sm
                mb-2
                block
              "
            >
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              placeholder="Enter email"
              className="
                w-full
                rounded-xl
                border
                border-[var(--border)]
                bg-[#1a1a1a]
                px-4
                py-3
                outline-none
              "
            />
          </div>

          <div>
            <label
              className="
                text-sm
                mb-2
                block
              "
            >
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              placeholder="Enter password"
              className="
                w-full
                rounded-xl
                border
                border-[var(--border)]
                bg-[#1a1a1a]
                px-4
                py-3
                outline-none
              "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-xl
              py-3
              font-semibold
              transition-all
              duration-300
            "
            style={{
              background:
                "linear-gradient(90deg, rgba(0,36,31,1) 0%, rgba(84,9,121,1) 50%, rgba(0,102,255,1) 100%)",
            }}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>

        <div
          className="
            my-6
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              h-px
              flex-1
              bg-[var(--border)]
            "
          />

          <span
            className="
              text-sm
              text-gray-400
            "
          >
            OR
          </span>

          <div
            className="
              h-px
              flex-1
              bg-[var(--border)]
            "
          />
        </div>

        <div
          className="
            flex
            justify-center
          "
        >
          <GoogleLogin
            onSuccess={
              handleGoogleLogin
            }
            onError={() => {
              console.log(
                "Google Login Failed"
              );
            }}
          />
        </div>

        <p
          className="
            mt-6
            text-center
            text-sm
            text-gray-400
          "
        >
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="
              text-blue-400
              hover:underline
            "
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;