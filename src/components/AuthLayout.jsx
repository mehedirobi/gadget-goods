
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  Truck,
  Headphones,
  Zap,
  ArrowUpRight,
} from "lucide-react";

// ============================================
// GOOGLE ICON
// ============================================

const GoogleIcon = () => (
  <svg
    viewBox="0 0 48 48"
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
  >
    <path
      fill="#FFC107"
      d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
    />
    <path
      fill="#1976D2"
      d="M12.6 27.5a12 12 0 0 1 0-7v-5.3H5.8a20 20 0 0 0 0 17.6l6.8-5.3Z"
    />
    <path
      fill="#EA4335"
      d="M24 12.1c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4A20 20 0 0 0 5.8 15.2l6.8 5.3c1.6-4.8 6.1-8.4 11.4-8.4Z"
    />
  </svg>
);

// ============================================
// GOOGLE AUTH BUTTON
// ============================================

export const GoogleButton = ({
  onClick,
  loading = false,
  disabled = false,
  label = "Continue with Google",
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled || loading}
    aria-busy={loading}
    className="group flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/15 disabled:cursor-not-allowed disabled:opacity-60"
  >
    {loading ? (
      <span
        className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600"
        aria-hidden="true"
      />
    ) : (
      <GoogleIcon />
    )}

    <span>{loading ? "Connecting..." : label}</span>
  </button>
);

// ============================================
// BRAND FEATURES
// ============================================

const features = [
  {
    icon: ShieldCheck,
    title: "Secure shopping",
    description:
      "Your account and shopping experience matter to us.",
  },
  {
    icon: Truck,
    title: "Reliable delivery",
    description:
      "Get your favorite tech delivered to your doorstep.",
  },
  {
    icon: Headphones,
    title: "Dedicated support",
    description:
      "We're here to help whenever you need assistance.",
  },
];

// ============================================
// BRAND LOGO
// ============================================

const BrandLogo = ({ mobile = false }) => (
  <Link
    to="/"
    aria-label="GadgetGoods home"
    className={`inline-flex items-center gap-2.5 font-black tracking-tight text-slate-900 transition hover:opacity-80 ${
      mobile ? "text-xl" : "text-2xl"
    }`}
  >
    <span
      className={`flex shrink-0 items-center justify-center rounded-xl bg-blue-600 font-black text-white shadow-lg shadow-blue-600/20 ${
        mobile ? "h-9 w-9 text-base" : "h-11 w-11 text-lg"
      }`}
    >
      G
    </span>

    <span>
      Gadget<span className="text-blue-600">Goods</span>
    </span>
  </Link>
);

// ============================================
// AUTH LAYOUT
// ============================================

const AuthLayout = ({
  children,
  title = "Welcome",
  subtitle = "",
  eyebrow = "",
  isRegister = false,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-2.5rem)] w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/60 sm:min-h-[calc(100vh-4rem)] sm:rounded-3xl lg:grid-cols-[0.9fr_1.1fr]">

        {/* ======================================
            BRAND PANEL
        ====================================== */}

        <aside className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-10 lg:flex xl:p-14">

          {/* Background Decorations */}
          <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

          <div className="pointer-events-none absolute right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-blue-200/30" />

          <div className="relative z-10">

            {/* Logo */}
            <BrandLogo />

            {/* Main Content */}
            <div className="mt-24 max-w-md xl:mt-28">

              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur-sm">
                <Zap
                  size={14}
                  className="fill-blue-600"
                />
                Your tech destination
              </span>

              <h1 className="mt-7 text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 xl:text-5xl">
                {isRegister
                  ? "A smarter way to shop for technology."
                  : "Your favorite technology, all in one place."}
              </h1>

              <p className="mt-6 text-sm leading-8 text-slate-500 xl:text-base">
                Discover the latest gadgets, explore trusted
                products, and enjoy a seamless shopping
                experience with GadgetGoods.
              </p>

              <Link
                to="/shop"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700"
              >
                Explore our collection

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Features */}
            <div className="mt-14 space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600 shadow-sm">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        {feature.title}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Copyright */}
          <p className="relative z-10 mt-10 text-xs text-slate-400">
            © {currentYear} GadgetGoods. All rights reserved.
          </p>
        </aside>

        {/* ======================================
            FORM PANEL
        ====================================== */}

        <section className="flex items-center justify-center px-5 py-8 sm:px-10 sm:py-10 lg:px-12 xl:px-16">

          <div className="w-full max-w-md">

            {/* Back Navigation */}
            <Link
              to="/"
              className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />

              Back to home
            </Link>

            {/* Mobile Logo */}
            <div className="mb-8 lg:hidden">
              <BrandLogo mobile />
            </div>

            {/* Heading */}
            <div className="mb-8">
              {eyebrow && (
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
                  {eyebrow}
                </p>
              )}

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {title}
              </h2>

              {subtitle && (
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Authentication Form */}
            {children}

            {/* Mobile Copyright */}
            <p className="mt-8 text-center text-[11px] text-slate-400 lg:hidden">
              © {currentYear} GadgetGoods. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AuthLayout;
