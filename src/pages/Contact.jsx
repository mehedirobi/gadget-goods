
import { useState } from "react";
import { Link } from "react-router";

import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

import toast from "react-hot-toast";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@gadgetgoods.com",
    description: "Send us an email anytime.",
    href: "mailto:support@gadgetgoods.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+8801336458100",
    description: "Available during business hours.",
    href: "tel:+8801336458100",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Dhaka, Bangladesh",
    description: "Serving customers across Bangladesh.",
    href: "https://maps.google.com/?q=Dhaka+Bangladesh",
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com",
  },
];

const faqs = [
  {
    question: "How can I track my order?",
    answer:
      "After placing an order, you can track its status from your account's order history.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Available payment methods will be displayed during checkout, including Cash on Delivery where supported.",
  },
  {
    question: "How can I request a return or replacement?",
    answer:
      "Contact our support team with your order details. Return and replacement eligibility depends on the product policy.",
  },
  {
    question: "Can I get help choosing a product?",
    answer:
      "Yes. Contact our team with your requirements, and we can help you understand the available product options.",
  },
];

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Demo only: replace with your backend API request.
      await new Promise((resolve) => setTimeout(resolve, 700));

      toast.success("Your message has been submitted successfully!");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            <MessageCircle size={16} />
            We're Here to Help
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's Start a{" "}
            <span className="text-blue-500">Conversation.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a question about a product, order, or anything else?
            Get in touch with our team. We're ready to help you.
          </p>

          <div className="mt-7 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link to="/" className="transition hover:text-blue-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-blue-400">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Get in Touch
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            We'd Love to Hear From You
          </h2>

          <p className="mt-3 text-gray-400">
            Choose the easiest way to reach our team.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={
                  item.title === "Our Location" ? "_blank" : undefined
                }
                rel={
                  item.title === "Our Location"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-2xl border border-white/10 bg-[#101827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#131F32]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 break-words font-medium text-blue-400">
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {item.description}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            <Headphones size={17} />
            Customer Support
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            Have Something
            <br />
            <span className="text-blue-500">On Your Mind?</span>
          </h2>

          <p className="mt-5 max-w-lg leading-8 text-gray-400">
            Whether you need product recommendations, order assistance,
            or technical support, send us a message. We'll be happy to
            assist you.
          </p>

          <div className="mt-9 space-y-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                <Clock size={21} />
              </div>

              <div>
                <p className="font-semibold">Support Hours</p>
                <p className="mt-1 text-sm text-gray-500">
                  Business hours: To be announced
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                <MessageCircle size={21} />
              </div>

              <div>
                <p className="font-semibold">Customer First</p>
                <p className="mt-1 text-sm text-gray-500">
                  Your questions and feedback matter to us.
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10">
            <p className="mb-4 text-sm font-semibold text-gray-300">
              Follow Gadget Goods
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="rounded-xl border border-white/10 bg-[#101827] p-3 text-gray-400 transition hover:border-blue-500/40 hover:bg-blue-500 hover:text-white"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-white/10 bg-[#101827] p-6 shadow-2xl shadow-black/20 sm:p-9">
          <div className="mb-7">
            <h3 className="text-2xl font-bold">
              Send Us a Message
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Fill out the form below and we'll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={80}
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-[#080D18] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-[#080D18] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                minLength={3}
                maxLength={120}
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className="w-full rounded-xl border border-white/10 bg-[#080D18] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={2000}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full resize-y rounded-xl border border-white/10 bg-[#080D18] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}

              {!isSubmitting && <Send size={18} />}
            </button>

            <p className="text-center text-xs text-gray-500">
              Frontend demo only. Backend integration is required to
              deliver messages.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-white/5 bg-[#0B1220] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-3 text-gray-400">
              Quick answers to common questions.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-white/10 bg-[#101827] p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-200">
                  {faq.question}

                  <ArrowRight
                    size={18}
                    className="shrink-0 text-blue-400 transition group-open:rotate-90"
                  />
                </summary>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Ready to explore our products?
            </p>

            <Link
              to="/shop"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              Explore Shop
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
