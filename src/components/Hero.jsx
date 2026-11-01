
import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Sparkles,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";

const slides = [
  {
    id: 1,
    label: "Limited Time Offer",
    category: "Exclusive Deal",
    title: "Upgrade Your",
    highlight: "Gaming Experience.",
    description:
      "Experience next-level gaming with powerful performance, premium accessories, and incredible deals.",
    productName: "Premium Gaming Setup",
    oldPrice: "৳45,000",
    newPrice: "৳34,999",
    discount: "22% OFF",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Premium gaming setup",
    buttonText: "Shop Gaming Gear",
    link: "/shop?category=gaming",
    badgeIcon: Zap,
    theme: "from-blue-600/20 to-cyan-500/5",
  },
  {
    id: 2,
    label: "Just Arrived",
    category: "New Arrival",
    title: "Discover the",
    highlight: "Latest Technology.",
    description:
      "Explore the latest smartphones with stunning displays, powerful cameras, and advanced performance.",
    productName: "Latest Smartphones",
    oldPrice: "৳85,000",
    newPrice: "৳72,999",
    discount: "15% OFF",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Latest premium smartphone",
    buttonText: "Explore Smartphones",
    link: "/shop?category=smartphones",
    badgeIcon: Sparkles,
    theme: "from-violet-600/20 to-blue-500/5",
  },
  {
    id: 3,
    label: "Coming Soon",
    category: "Upcoming Product",
    title: "Something",
    highlight: "Powerful Is Coming.",
    description:
      "Get ready for the next generation of computing. Stay updated with upcoming premium laptops and devices.",
    productName: "Next-Gen Laptop",
    oldPrice: null,
    newPrice: "Coming Soon",
    discount: "NEW RELEASE",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Premium laptop",
    buttonText: "Explore Collection",
    link: "/shop?category=laptops",
    badgeIcon: Clock3,
    theme: "from-cyan-600/20 to-blue-500/5",
  },
  {
    id: 4,
    label: "Special Discount",
    category: "Hot Deal",
    title: "Make Every Moment",
    highlight: "Sound Better.",
    description:
      "Enjoy immersive audio with premium headphones designed for music lovers, gamers, and professionals.",
    productName: "Premium Headphones",
    oldPrice: "৳12,000",
    newPrice: "৳8,999",
    discount: "25% OFF",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Premium wireless headphones",
    buttonText: "Explore Audio Gear",
    link: "/shop?category=accessories",
    badgeIcon: Zap,
    theme: "from-indigo-600/20 to-purple-500/5",
  },
];

const AUTO_SLIDE_INTERVAL = 2500;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const activeSlide = slides[activeIndex];
  const BadgeIcon = activeSlide.badgeIcon;

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
    setProgressKey((current) => current + 1);
  };

  const previousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + slides.length) % slides.length
    );
    setProgressKey((current) => current + 1);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    setProgressKey((current) => current + 1);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
      setProgressKey((current) => current + 1);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative overflow-hidden bg-[#080f1d] text-white"
      aria-label="Featured promotions"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-8 lg:py-20">

        {/* Carousel */}
        <div className="relative min-h-[570px] sm:min-h-[560px] lg:min-h-[490px]">

          {/* Slide content */}
          <div
            key={activeSlide.id}
            className="grid min-h-[570px] items-center gap-12 animate-[fadeIn_500ms_ease-in-out] sm:min-h-[560px] lg:min-h-[490px] lg:grid-cols-2"
          >
            {/* Left content */}
            <div className="relative z-10 flex flex-col items-start">

              {/* Category badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                <BadgeIcon size={16} />
                {activeSlide.label}
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                {activeSlide.category}
              </p>

              {/* Heading */}
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
                {activeSlide.title}
                <span className="mt-2 block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {activeSlide.highlight}
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                {activeSlide.description}
              </p>

              {/* Product pricing */}
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                <div>
                  <p className="text-xs text-gray-500">
                    Featured Product
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    {activeSlide.productName}
                  </p>
                </div>

                <div className="h-9 w-px bg-gray-700" />

                <div>
                  {activeSlide.oldPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      {activeSlide.oldPrice}
                    </p>
                  )}
                  <p className="text-2xl font-bold text-blue-400">
                    {activeSlide.newPrice}
                  </p>
                </div>

                <span className="rounded-md bg-red-500/15 px-3 py-1.5 text-xs font-bold text-red-400">
                  {activeSlide.discount}
                </span>
              </div>

              {/* CTA buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={activeSlide.link}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080f1d]"
                >
                  {activeSlide.buttonText}
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/shop"
                  className="rounded-lg border border-gray-700 px-6 py-3.5 text-sm font-semibold text-gray-200 transition hover:border-blue-400 hover:text-blue-400"
                >
                  View All Products
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-xs text-gray-400 sm:text-sm">
                <div className="flex items-center gap-2">
                  <Truck size={17} className="text-blue-400" />
                  Fast Delivery
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck size={17} className="text-blue-400" />
                  Genuine Products
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="relative mx-auto w-full max-w-xl">
              <div
                className={`absolute inset-8 rounded-full bg-gradient-to-br ${activeSlide.theme} blur-3xl`}
              />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl sm:p-5">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.imageAlt}
                  fetchPriority="high"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />

                {/* Discount floating card */}
                <div className="absolute right-6 top-6 rounded-xl border border-white/10 bg-[#080f1d]/90 px-4 py-3 shadow-xl backdrop-blur-md">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                    Special Offer
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-blue-400">
                    {activeSlide.discount}
                  </p>
                </div>

                {/* Bottom product label */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/10 bg-[#080f1d]/90 p-4 backdrop-blur-md">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400">
                      Gadget Goods Featured
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {activeSlide.productName}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                    <Sparkles size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="absolute bottom-0 left-0 z-20 flex w-full items-center justify-between gap-4 lg:bottom-1">

            {/* Pagination */}
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}: ${slide.category}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-10 bg-blue-500"
                      : "w-5 bg-gray-600 hover:bg-gray-400"
                  }`}
                >
                  {activeIndex === index && !isPaused && (
                    <span
                      key={progressKey}
                      className="absolute inset-y-0 left-0 bg-cyan-300 animate-[slideProgress_2500ms_linear_forwards]"
                    />
                  )}
                </button>
              ))}

              <span className="ml-2 text-xs text-gray-500">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-white/5 text-white transition hover:border-blue-400 hover:bg-blue-600"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-white/5 text-white transition hover:border-blue-400 hover:bg-blue-600"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fadeIn_500ms_ease-in-out\\],
          .animate-\\[slideProgress_2500ms_linear_forwards\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
