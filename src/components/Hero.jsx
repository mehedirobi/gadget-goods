
import { Link } from "react-router";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b1120]">
      <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

        <div className="relative z-10">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Premium Electronics Collection
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Upgrade Your
            <span className="block text-blue-500">Digital World.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-400">
            Discover the latest smartphones, laptops, gaming gear
            and premium gadgets. Experience technology with quality
            you can trust.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Products
              <ArrowRight size={19} />
            </Link>

            <Link
              to="/shop?category=deals"
              className="rounded-lg border border-gray-700 px-7 py-3.5 font-semibold text-white transition hover:border-blue-500 hover:text-blue-400"
            >
              View Deals
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-7 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Truck size={19} className="text-blue-400" />
              Fast Delivery
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck size={19} className="text-blue-400" />
              Genuine Products
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />

          <img
            src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=85"
            alt="Premium smartphone"
            className="relative z-10 mx-auto aspect-[4/3] w-full max-w-xl rounded-3xl object-cover shadow-2xl"
          />

          <div className="absolute -bottom-5 left-3 z-20 rounded-xl border border-gray-700 bg-[#111827] p-4 shadow-xl sm:left-0">
            <p className="text-xs text-gray-400">Discover more</p>
            <p className="mt-1 font-semibold text-white">Latest Technology</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
