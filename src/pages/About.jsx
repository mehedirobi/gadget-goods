
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Headphones,
  BadgeCheck,
  Target,
  Eye,
  Heart,
  Zap,
  ShoppingBag,
  Smartphone,
  Laptop,
  Gamepad2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Authentic Products",
    description:
      "Our goal is to make genuine technology products accessible with clear product information and reliable service.",
  },
  {
    icon: Truck,
    title: "Convenient Delivery",
    description:
      "A smooth shopping and delivery experience designed around customers across Bangladesh.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Get assistance when you need help choosing a product or understanding your order.",
  },
  {
    icon: BadgeCheck,
    title: "Quality First",
    description:
      "We focus on product quality, transparent pricing, and a dependable shopping experience.",
  },
];

const categories = [
  { icon: Smartphone, name: "Smartphones" },
  { icon: Laptop, name: "Laptops & PCs" },
  { icon: Gamepad2, name: "Gaming Gear" },
  { icon: Zap, name: "Accessories" },
];

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080d18] text-white">

      {/* Hero Section */}
      <section className="relative border-b border-gray-800/70">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-28">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <Zap size={14} />
              About Gadget Goods
            </div>

            <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Technology That
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Moves You Forward.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-8 text-gray-400 sm:text-base">
              Gadget Goods is an electronics shopping destination built
              for people who love technology. From everyday essentials
              to powerful devices, we aim to make discovering the right
              technology simple and convenient.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Explore Products
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/"
                className="rounded-xl border border-gray-700 px-6 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-blue-500 hover:text-white"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-cyan-500/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-gray-700/70 bg-[#111827] p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1100&q=85"
                alt="Modern electronics and technology products"
                className="h-[300px] w-full rounded-2xl object-cover sm:h-[380px]"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-[#080d18]/85 p-5 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                  Our philosophy
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  Upgrade Your Digital World.
                </h3>
                <p className="mt-2 text-xs leading-6 text-gray-400">
                  Better technology. Better possibilities.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            Who We Are
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Making Technology Shopping Simpler
          </h2>

          <p className="mt-6 text-sm leading-8 text-gray-400 sm:text-base">
            We believe technology should make everyday life easier,
            more productive, and more enjoyable. Gadget Goods brings
            different categories of electronics together in one place,
            helping customers explore products and make informed
            purchasing decisions.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="border-y border-gray-800/70 bg-[#0c1322]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-2 lg:px-10 lg:py-20">

          <div className="rounded-2xl border border-gray-800 bg-[#111827] p-7 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Target size={24} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">Our Mission</h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              To create a convenient and trustworthy electronics
              shopping experience by bringing useful technology,
              transparent product information, and customer-focused
              service together.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111827] p-7 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <Eye size={24} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">Our Vision</h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              To become a customer-focused destination for electronics
              in Bangladesh, where discovering, comparing, and buying
              technology feels simple and reliable.
            </p>
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              What We Offer
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Explore the World of Gadgets
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
              Discover technology for work, entertainment, gaming,
              creativity, and everyday life.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            View All Products
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map(({ icon: Icon, name }) => (
            <Link
              key={name}
              to="/shop"
              className="group rounded-2xl border border-gray-800 bg-[#111827] p-6 transition hover:-translate-y-1 hover:border-blue-500/50 hover:bg-[#151f32]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={23} />
              </div>

              <h3 className="mt-5 text-sm font-bold text-white sm:text-base">
                {name}
              </h3>

              <span className="mt-3 inline-flex items-center gap-1 text-xs text-gray-500 transition group-hover:text-blue-400">
                Explore
                <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-gray-800/70 bg-[#0c1322]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              Why Gadget Goods
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A Better Way to Shop for Tech
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              We want every step of your shopping journey to feel
              convenient, clear, and customer-focused.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-800 bg-[#111827] p-6 transition hover:-translate-y-1 hover:border-blue-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-base font-bold">{title}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#14254a] via-[#101b32] to-[#111827] p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                <Heart size={24} />
              </div>

              <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                Your Technology Journey Matters to Us.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300">
                From finding your next smartphone to upgrading your
                complete setup, Gadget Goods aims to help you discover
                technology that fits your needs.
              </p>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Start Shopping
              <ShoppingBag size={17} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
