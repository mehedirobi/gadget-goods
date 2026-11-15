
import { useState } from "react";
import { ArrowRight, Mail, Send } from "lucide-react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      toast.error("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // TODO: Connect newsletter subscription API here.

      toast.success(
        "Newsletter UI is ready! Backend integration is coming soon."
      );

      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

        {/* Decorative Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl"
        />

        {/* Content */}
        <div className="relative mx-auto max-w-2xl text-center">

          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-600 shadow-sm">
            <Mail size={25} strokeWidth={1.8} />
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
            Stay Ahead with{" "}
            <span className="text-blue-600">New Tech</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Subscribe to get the latest product updates, exclusive
            offers and technology news delivered straight to your inbox.
          </p>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <div className="relative min-w-0 flex-1">
              <Mail
                size={18}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                autoComplete="email"
                required
                disabled={isSubmitting}
                className="h-13 w-full rounded-full border border-gray-200 bg-white py-3 pl-12 pr-5 text-sm font-medium text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-bold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}

              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Supporting Text */}
          <p className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-gray-500">
            <Send size={13} className="text-blue-600" />
            No spam. Just useful updates and exclusive deals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
