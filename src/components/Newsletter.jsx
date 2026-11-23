
import { useState } from "react";
import {
  ArrowRight,
  Mail,
  Send,
  CheckCircle2,
  LoaderCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Connect newsletter subscription API here.
      // Do not show a successful subscription until
      // the backend confirms the subscription.

      toast.error(
        "Newsletter subscriptions are not available yet. Please try again later."
      );
    } catch (error) {
      console.error("Newsletter subscription error:", error);

      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="newsletter-title"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-100/80 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-12 shadow-sm sm:px-10 sm:py-14 lg:px-16 lg:py-16">

        {/* Decorative Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-12 top-10 hidden h-24 w-24 rounded-full border border-blue-200/50 lg:block"
        />

        {/* Content */}
        <div className="relative mx-auto max-w-2xl text-center">

          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-600 shadow-md shadow-blue-100/50">
            <Mail size={27} strokeWidth={1.8} />
          </div>

          {/* Badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">
            <Sparkles size={13} />
            GadgetGoods Newsletter
          </div>

          {/* Heading */}
          <h2
            id="newsletter-title"
            className="mt-5 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-[42px]"
          >
            Stay Ahead with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              New Tech
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Get the latest gadgets, product launches, exclusive
            deals and tech updates delivered straight to your inbox.
          </p>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
            noValidate
          >
            {/* Email Input */}
            <div className="relative min-w-0 flex-1">

              <Mail
                size={18}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                aria-hidden="true"
              />

              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                aria-required="true"
                autoComplete="email"
                maxLength={254}
                disabled={isSubmitting}
                className="h-14 w-full rounded-full border border-gray-200 bg-white py-3 pl-12 pr-5 text-sm font-medium text-gray-900 shadow-sm outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>

            {/* Subscribe Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle
                    size={17}
                    className="animate-spin"
                  />
                  Subscribing...
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>

          {/* Trust Information */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-medium text-gray-500">

            <span className="flex items-center gap-1.5">
              <CheckCircle2
                size={14}
                className="text-emerald-600"
              />
              No spam
            </span>

            <span className="flex items-center gap-1.5">
              <ShieldCheck
                size={14}
                className="text-emerald-600"
              />
              Your privacy matters
            </span>

            <span className="flex items-center gap-1.5">
              <Send
                size={13}
                className="text-blue-600"
              />
              Exclusive tech updates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
