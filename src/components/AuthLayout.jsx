
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Truck, Headphones } from "lucide-react";

const AuthLayout = ({ children, title, subtitle, isRegister = false }) => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 lg:grid-cols-2">
        {/* Left panel */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:flex xl:p-14">
          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-2xl font-black tracking-tight">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg">
                G
              </span>
              Gadget<span className="text-blue-400">Goods</span>
            </Link>

            <div className="mt-24 max-w-md">
              <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Your tech destination
              </span>

              <h1 className="mt-7 text-4xl font-bold leading-tight xl:text-5xl">
                {isRegister
                  ? "Your next tech experience starts here."
                  : "Technology that moves you forward."}
              </h1>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Discover quality gadgets, explore the latest technology, and
                enjoy a smoother shopping experience with GadgetGoods.
              </p>
            </div>

            <div className="mt-12 space-y-5">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                  <ShieldCheck size={21} />
                </span>
                <div>
                  <p className="font-semibold">Secure shopping</p>
                  <p className="mt-1 text-sm text-slate-400">
                    A simple and secure shopping experience.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                  <Truck size={21} />
                </span>
                <div>
                  <p className="font-semibold">Convenient delivery</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Shop your favorite tech from one place.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                  <Headphones size={21} />
                </span>
                <div>
                  <p className="font-semibold">Customer support</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Help when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="relative z-10 text-sm text-slate-500">
            © {new Date().getFullYear()} GadgetGoods. All rights reserved.
          </p>
        </section>

        {/* Form panel */}
        <section className="flex items-center justify-center px-5 py-8 sm:px-10 lg:px-12 xl:px-16">
          <div className="w-full max-w-md">
            <Link
              to="/"
              className="mb-9 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <div className="mb-8 lg:hidden">
              <Link to="/" className="text-2xl font-black tracking-tight text-slate-900">
                Gadget<span className="text-blue-600">Goods</span>
              </Link>
            </div>

            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
                {isRegister ? "Create account" : "Welcome back"}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {subtitle}
              </p>
            </div>

            {children}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AuthLayout;
