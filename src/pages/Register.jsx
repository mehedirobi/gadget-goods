
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
  LoaderCircle,
  Check,
  X,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebase.config";
import AuthLayout, { GoogleButton } from "../components/AuthLayout";
import { useToast } from "../contexts/ToastContext";

// Password strength
const getPasswordStrength = (password) => {
  if (!password) return 0;

  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  return score;
};

// Firebase error messages
const getAuthErrorMessage = (error) => {
  const errorMessages = {
    "auth/email-already-in-use":
      "An account with this email already exists. Please sign in.",

    "auth/invalid-email":
      "Please enter a valid email address.",

    "auth/weak-password":
      "Your password is too weak. Please choose a stronger password.",

    "auth/operation-not-allowed":
      "This sign-up method is currently disabled. Please contact support.",

    "auth/popup-closed-by-user":
      "Google sign-up was cancelled. Please try again.",

    "auth/popup-blocked":
      "Your browser blocked the Google sign-in popup. Please allow popups and try again.",

    "auth/cancelled-popup-request":
      "Another sign-in popup is already open.",

    "auth/account-exists-with-different-credential":
      "An account already exists with this email using another sign-in method. Please sign in with that method.",

    "auth/network-request-failed":
      "Network error. Please check your internet connection.",

    "auth/unauthorized-domain":
      "This domain is not authorized for Firebase Authentication.",
  };

  return (
    errorMessages[error.code] ||
    "Unable to create your account. Please try again."
  );
};

// Input style
const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10";

// Initial form state
const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreeToTerms: false,
};

const Register = () => {
  const navigate = useNavigate();

  // Global toast notification
  const { showToast } = useToast();

  const [formData, setFormData] = useState(initialFormData);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [feedback, setFeedback] = useState({
    type: "",
    text: "",
  });

  const isBusy = isSubmitting || googleLoading;

  // Show inline feedback and toast
  const showError = (message, type = "error") => {
    setFeedback({
      type,
      text: message,
    });

    showToast(message, type === "warning" ? "warning" : "error");
  };

  // Password strength
  const passwordStrength = useMemo(
    () => getPasswordStrength(formData.password),
    [formData.password]
  );

  // Password requirements
  const passwordChecks = useMemo(
    () => [
      {
        label: "At least 8 characters",
        valid: formData.password.length >= 8,
      },
      {
        label: "One uppercase letter",
        valid: /[A-Z]/.test(formData.password),
      },
      {
        label: "One number",
        valid: /[0-9]/.test(formData.password),
      },
      {
        label: "One special character",
        valid: /[^A-Za-z0-9]/.test(formData.password),
      },
    ],
    [formData.password]
  );

  const strengthLabel = [
    "",
    "Weak",
    "Weak",
    "Fair",
    "Good",
    "Strong",
  ][passwordStrength];

  const strengthColor =
    passwordStrength <= 2
      ? "bg-red-400"
      : passwordStrength === 3
        ? "bg-amber-400"
        : "bg-emerald-500";

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

  // Email and password registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isBusy) return;

    setFeedback({ type: "", text: "" });

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    // Name validation
    if (name.length < 2) {
      showError(
        "Please enter your full name (at least 2 characters).",
        "warning"
      );
      return;
    }

    // Password validation
    if (passwordStrength < 4) {
      showError(
        "Please choose a stronger password.",
        "warning"
      );
      return;
    }

    // Confirm password validation
    if (password !== formData.confirmPassword) {
      showError(
        "Your passwords do not match.",
        "warning"
      );
      return;
    }

    // Terms validation
    if (!formData.agreeToTerms) {
      showError(
        "Please accept the Terms & Conditions to continue.",
        "warning"
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Create Firebase account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save user's display name
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      // Update Firebase user's profile locally
      await userCredential.user.reload();

      showToast(
        `Welcome to GadgetGoods, ${name}! Your account has been created.`,
        "success"
      );

      // Redirect after successful registration
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Email Registration Error:", error);

      showError(getAuthErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Google registration
  const handleGoogleSignUp = async () => {
    if (isBusy) return;

    setGoogleLoading(true);
    setFeedback({ type: "", text: "" });

    try {
      const provider = new GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: "select_account",
      });

      // Open Google account popup
      const userCredential = await signInWithPopup(auth, provider);

      const userName =
        userCredential.user.displayName || "there";

      showToast(
        `Welcome to GadgetGoods, ${userName}!`,
        "success"
      );

      // Redirect after successful authentication
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Google Registration Error:", error);

      showError(getAuthErrorMessage(error));
    } finally {
      setGoogleLoading(false);
    }
  };

  const passwordsMatch =
    formData.confirmPassword.length > 0 &&
    formData.password === formData.confirmPassword;

  return (
    <AuthLayout
      eyebrow="Join GadgetGoods"
      title="Create your account"
      subtitle="Join GadgetGoods to save your favorites and enjoy a personalized shopping experience."
      isRegister
    >
      {/* Google authentication */}
      <GoogleButton
        onClick={handleGoogleSignUp}
        loading={googleLoading}
        disabled={isSubmitting}
        label="Sign up with Google"
      />

      {/* Divider */}
      <div className="my-5 flex items-center gap-4">
        <span className="h-px flex-1 bg-slate-200" />

        <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Or sign up with email
        </span>

        <span className="h-px flex-1 bg-slate-200" />
      </div>

      {/* Registration form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full name */}
        <div>
          <label
            htmlFor="register-name"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Full name
          </label>

          <div className="relative">
            <UserRound
              size={19}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              id="register-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={80}
              disabled={isBusy}
              className={`${inputClass} pr-4`}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="register-email"
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
              id="register-email"
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
          <label
            htmlFor="register-password"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Password
          </label>

          <div className="relative">
            <LockKeyhole
              size={19}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              id="register-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={8}
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

          {/* Password strength */}
          {formData.password && (
            <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600">
                  Password strength
                </span>

                <span
                  className={`text-xs font-bold ${
                    passwordStrength <= 2
                      ? "text-red-500"
                      : passwordStrength === 3
                        ? "text-amber-600"
                        : "text-emerald-600"
                  }`}
                >
                  {strengthLabel}
                </span>
              </div>

              <div
                className="flex gap-1.5"
                role="progressbar"
                aria-label="Password strength"
                aria-valuemin={0}
                aria-valuemax={5}
                aria-valuenow={passwordStrength}
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-200 ${
                      index < passwordStrength
                        ? strengthColor
                        : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
                {passwordChecks.map((check) => (
                  <div
                    key={check.label}
                    className="flex items-center gap-1.5"
                  >
                    {check.valid ? (
                      <Check
                        size={13}
                        className="shrink-0 text-emerald-600"
                      />
                    ) : (
                      <X
                        size={13}
                        className="shrink-0 text-slate-400"
                      />
                    )}

                    <span
                      className={`text-[11px] ${
                        check.valid
                          ? "font-medium text-emerald-700"
                          : "text-slate-400"
                      }`}
                    >
                      {check.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Confirm password */}
        <div>
          <label
            htmlFor="register-confirm-password"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Confirm password
          </label>

          <div className="relative">
            <LockKeyhole
              size={19}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              id="register-confirm-password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength={8}
              disabled={isBusy}
              className={`${inputClass} ${
                formData.confirmPassword
                  ? passwordsMatch
                    ? "border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500/10"
                    : "border-red-300 focus:border-red-400 focus:ring-red-400/10"
                  : ""
              }`}
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              disabled={isBusy}
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
              aria-pressed={showConfirmPassword}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700 disabled:opacity-50"
            >
              {showConfirmPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>
          </div>

          {formData.confirmPassword && (
            <p
              className={`mt-2 flex items-center gap-1.5 text-xs ${
                passwordsMatch ? "text-emerald-600" : "text-red-500"
              }`}
            >
              {passwordsMatch ? (
                <CheckCircle2 size={14} />
              ) : (
                <AlertCircle size={14} />
              )}

              {passwordsMatch
                ? "Passwords match"
                : "Passwords do not match"}
            </p>
          )}
        </div>

        {/* Terms and conditions */}
        <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-sm leading-6 text-slate-500">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            disabled={isBusy}
            className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 accent-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500"
          />

          <span>
            I agree to the{" "}
            <Link
              to="/terms"
              className="font-semibold text-blue-600 transition hover:text-blue-700 hover:underline"
            >
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="font-semibold text-blue-600 transition hover:text-blue-700 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        {/* Inline feedback */}
        {feedback.text && (
          <div
            role="alert"
            aria-live="polite"
            className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm leading-6 ${
              feedback.type === "warning"
                ? "border-amber-100 bg-amber-50 text-amber-700"
                : "border-red-100 bg-red-50 text-red-700"
            }`}
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

          {isSubmitting ? "Creating account..." : "Create account"}
        </button>
      </form>

      {/* Login link */}
      <p className="mt-7 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-bold text-blue-600 transition hover:text-blue-700 hover:underline"
        >
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Register;
