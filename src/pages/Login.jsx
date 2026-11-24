
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import { auth } from "../firebase/firebase.config";
import AuthLayout, { GoogleButton } from "../components/AuthLayout";

const initialFormData = {
  email: "",
  password: "",
  remember: true,
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10";

// Firebase error messages
const getAuthErrorMessage = (error) => {
  const errorMessages = {
    "auth/invalid-email":
      "Please enter a valid email address.",

    "auth/user-not-found":
      "No account found with this email address.",

    "auth/wrong-password":
      "Incorrect password. Please try again.",

    "auth/invalid-credential":
      "Invalid email or password. Please check your credentials.",

    "auth/user-disabled":
      "This account has been disabled. Please contact support.",

    "auth/too-many-requests":
      "Too many unsuccessful attempts. Please try again later.",

    "auth/popup-closed-by-user":
      "Google sign-in was cancelled. Please try again.",

    "auth/popup-blocked":
      "Your browser blocked the Google sign-in popup. Please allow popups and try again.",

    "auth/cancelled-popup-request":
      "Another sign-in popup is already open.",

    "auth/account-exists-with-different-credential":
      "An account already exists with this email using another sign-in method.",

    "auth/network-request-failed":
      "Network error. Please check your internet connection.",

    "auth/unauthorized-domain":
      "This domain is not authorized for Firebase Authentication.",
  };

  return (
    errorMessages[error.code] ||
    "Unable to sign in. Please try again."
  );
};

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [feedback, setFeedback] = useState({
    type: "",
    text: "",
  });

  const isBusy = isSubmitting || googleLoading;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (feedback.text) {
      setFeedback({ type: "", text: "" });
    }
  };

  // Email and password login
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isBusy) return;

    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    if (!email || !password) {
      setFeedback({
        type: "error",
        text: "Please enter your email and password.",
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback({ type: "", text: "" });

    try {
      // Remember me controls authentication persistence
      const persistence = formData.remember
        ? browserLocalPersistence
        : browserSessionPersistence;

      await setPersistence(auth, persistence);

      // Firebase email login
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("Logged in user:", userCredential.user);

      // Redirect after successful login
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Email Login Error:", error);

      setFeedback({
        type: "error",
        text: getAuthErrorMessage(error),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Google login
  const handleGoogleSignIn = async () => {
    if (isBusy) return;

    setGoogleLoading(true);
    setFeedback({ type: "", text: "" });

    try {
      const provider = new GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: "select_account",
      });

      // Google authentication
      const userCredential = await signInWithPopup(auth, provider);

      console.log("Google logged in user:", userCredential.user);

      // Redirect after successful login
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Google Login Error:", error);

      setFeedback({
        type: "error",
        text: getAuthErrorMessage(error),
      });
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Sign in to your account"
      subtitle="Enter your account details to continue shopping with GadgetGoods."
    >
      {/* Google authentication */}
      <GoogleButton
        onClick={handleGoogleSignIn}
        loading={googleLoading}
        disabled={isSubmitting}
      />

      {/* Divider */}
      <div className="my-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-slate-200" />

        <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Or continue with email
        </span>

        <span className="h-px flex-1 bg-slate-200" />
      </div>

      {/* Login form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label
            htmlFor="login-email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email address
          </label>

          <div className="relative">
            <Mail
              size={19}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={254}
              disabled={isBusy}
              className={`${inputClass} pr-4`}
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label
              htmlFor="login-password"
              className="text-sm font-semibold text-slate-700"
            >
              Password
            </label>

            <Link
              to="/forgot-password"
              className="text-xs font-semibold text-blue-600 transition hover:text-blue-700 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative">
            <LockKeyhole
              size={19}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              id="login-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              disabled={isBusy}
              className={inputClass}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              disabled={isBusy}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700 disabled:opacity-50"
            >
              {showPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>
          </div>
        </div>

        {/* Remember me */}
        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            disabled={isBusy}
            className="h-4 w-4 cursor-pointer rounded border-slate-300 accent-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500"
          />

          Remember me
        </label>

        {/* Feedback */}
        {feedback.text && (
          <div
            role="alert"
            aria-live="polite"
            className="flex items-start gap-2.5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
          >
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            <p>{feedback.text}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isBusy}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {isSubmitting && (
            <LoaderCircle size={18} className="animate-spin" />
          )}

          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>

      {/* Register link */}
      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-bold text-blue-600 transition hover:text-blue-700 hover:underline"
        >
          Create an account
        </Link>
      </p>

      {/* Terms */}
      <p className="mt-7 text-center text-xs leading-6 text-slate-400">
        By continuing, you agree to our{" "}
        <Link
          to="/terms"
          className="font-medium text-slate-500 transition hover:text-blue-600"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          to="/privacy"
          className="font-medium text-slate-500 transition hover:text-blue-600"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </AuthLayout>
  );
};

export default Login;
