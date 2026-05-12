import { useState } from "react";
import {
  ArrowRight,
  Lock,
  Mail,
} from "lucide-react";

import { loginUser } from "../../api/auth.api.js";

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

  const handleGoogleLogin = () => {
   
    window.location.href =
      `${import.meta.env.VITE_API_BASE_UR}/api/v1/auth/google`;
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center px-4 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-100px] h-[300px] w-[300px] rounded-full bg-[var(--primary)] opacity-20 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-100px] h-[300px] w-[300px] rounded-full bg-blue-600 opacity-20 blur-3xl" />

      {/* Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border)] rounded-3xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-red-700 flex items-center justify-center text-2xl font-bold shadow-lg">
              P
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome Back
            </h1>

            <p className="text-[var(--text-secondary)] mt-2 text-sm">
              Login to continue to your
              dashboard
            </p>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-[var(--border)] bg-[#1a1a1a] hover:bg-[#242424] transition-all duration-300 rounded-xl py-3 font-medium mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-5 w-5"
            >
              <path
                fill="#FFC107"
                d="M43.611 20.083H42V20H24v8h11.303C33.651 32.657 29.233 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"
              />

              <path
                fill="#FF3D00"
                d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4c-7.682 0-14.347 4.337-17.694 10.691z"
              />

              <path
                fill="#4CAF50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.18 35.091 26.715 36 24 36c-5.211 0-9.617-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
              />

              <path
                fill="#1976D2"
                d="M43.611 20.083H42V20H24v8h11.303a12.05 12.05 0 01-4.084 5.571h.003l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.651-.389-3.917z"
              />
            </svg>

            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-[var(--border)]" />

            <span className="text-sm text-[var(--text-secondary)]">
              OR
            </span>

            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label className="text-sm text-[var(--text-secondary)] block mb-2">
                Email
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-secondary)]" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="w-full bg-[#181818] border border-[var(--border)] rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[var(--primary)] transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-[var(--text-secondary)] block mb-2">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-secondary)]" />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  className="w-full bg-[#181818] border border-[var(--border)] rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[var(--primary)] transition-all"
                  required
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] transition-all duration-300 rounded-xl py-3 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-red-900/30 disabled:opacity-70"
            >
              {loading
                ? "Signing In..."
                : "Sign In"}

              {!loading && (
                <ArrowRight className="h-5 w-5" />
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-[var(--text-secondary)] mt-8">
            Don&apos;t have an account?{" "}
            <span className="text-[var(--primary)] cursor-pointer hover:text-[var(--primary-hover)] transition-colors">
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;