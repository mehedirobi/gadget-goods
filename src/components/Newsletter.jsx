
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    toast.success("Newsletter UI is ready! Backend integration is coming soon.");
    setEmail("");
  };

  return (
    <section className="bg-[#080d19] px-6 py-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-950 to-[#111827] px-6 py-14 text-center sm:px-12">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400">
          <Mail size={27} />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
          Stay Ahead with New Tech
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
          Subscribe to receive product updates, exclusive offers
          and the latest technology news.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-[#080d19] px-5 py-3.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Subscribe
            <ArrowRight size={18} />
          </button>
        </form>

      </div>
    </section>
  );
};

export default Newsletter;
