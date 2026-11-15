import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  ShoppingBag,
} from "lucide-react";

const SLIDE_INTERVAL = 4000;

const slides = [
  {
    id: 1,
    eyebrow: "LEVEL UP YOUR GAMING",
    badge: "EXCLUSIVE DEAL",
    title: "Power Up Your",
    highlight: "Gaming World.",
    description:
      "Discover powerful gaming gear, immersive displays, and premium accessories built to elevate every gaming session.",
    offer: "UP TO 30% OFF",
    price: "On selected gaming products",
    buttonText: "Explore Gaming",
    link: "/shop?category=gaming",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Modern gaming setup with monitor and gaming equipment",
    imagePosition: "center",
    theme: "blue",
  },
  {
    id: 2,
    eyebrow: "TECHNOLOGY MEETS INNOVATION",
    badge: "NEW ARRIVALS",
    title: "Experience the",
    highlight: "Future Today.",
    description:
      "Explore the latest smartphones featuring stunning displays, advanced cameras, and powerful performance.",
    offer: "LATEST COLLECTION",
    price: "Discover the newest smartphones",
    buttonText: "Discover Phones",
    link: "/shop?category=smartphones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Modern smartphone showcasing its display",
    imagePosition: "center",
    theme: "indigo",
  },
  {
    id: 3,
    eyebrow: "BUILT FOR YOUR PRODUCTIVITY",
    badge: "PREMIUM COLLECTION",
    title: "Work Smarter.",
    highlight: "Go Further.",
    description:
      "Find the perfect laptop for your workflow, from everyday productivity to professional creativity.",
    offer: "SPECIAL PRICES",
    price: "Explore premium laptops",
    buttonText: "Explore Laptops",
    link: "/shop?category=laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Premium laptop on a clean modern workspace",
    imagePosition: "center",
    theme: "sky",
  },
  {
    id: 4,
    eyebrow: "SOUND WITHOUT LIMITS",
    badge: "LIMITED TIME OFFER",
    title: "Feel Every",
    highlight: "Beat.",
    description:
      "Experience immersive sound with premium headphones designed for music lovers, creators, and everyday listening.",
    offer: "UP TO 25% OFF",
    price: "On selected audio products",
    buttonText: "Explore Audio",
    link: "/shop?category=accessories",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Premium wireless headphones",
    imagePosition: "center",
    theme: "violet",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = slides[activeIndex];

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  // Preload the next slide image.
  useEffect(() => {
    const nextIndex = (activeIndex + 1) % slides.length;
    const image = new Image();

    image.src = slides[nextIndex].image;
  }, [activeIndex]);

  // Automatic carousel.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <section
      aria-label="Featured products and promotions"
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

        {/* Carousel Content */}
        <div className="relative min-h-[540px] sm:min-h-[500px] lg:min-h-[460px]">

          <div
            key={activeSlide.id}
            className="grid min-h-[540px] items-center gap-10 animate-[heroFade_500ms_ease-out] sm:min-h-[500px] lg:min-h-[460px] lg:grid-cols-2 lg:gap-12"
          >
            {/* Left Content */}
            <div className="relative z-10 flex flex-col items-start">

              {/* Eyebrow */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-bold tracking-wider text-blue-600">
                  <Sparkles size={14} />
                  {activeSlide.badge}
                </span>

                <span className="text-[10px] font-semibold tracking-[0.16em] text-gray-400 sm:text-xs">
                  {activeSlide.eyebrow}
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-gray-900 sm:text-5xl lg:text-[58px]">
                {activeSlide.title}

                <span className="mt-2 block text-blue-600">
                  {activeSlide.highlight}
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-[480px] text-sm leading-7 text-gray-500 sm:text-base">
                {activeSlide.description}
              </p>

              {/* Offer */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2.5 text-xs font-bold tracking-wide text-blue-700">
                  <Zap size={15} />
                  {activeSlide.offer}
                </span>

                <span className="text-sm font-medium text-gray-500">
                  {activeSlide.price}
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to={activeSlide.link}
                  className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
                >
                  {activeSlide.buttonText}

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <ShoppingBag size={16} />
                  Browse Products
                </Link>
              </div>

              {/* Trust / Product Info */}
              <div className="mt-9 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="flex -space-x-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-blue-600">
                    <Zap size={14} />
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-indigo-100 text-indigo-600">
                    <Sparkles size={14} />
                  </span>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    Explore Premium Technology
                  </p>
                  <p className="mt-0.5 text-[11px] text-gray-400">
                    Discover products made for your lifestyle
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex items-center justify-center">

              {/* Decorative Background */}
              <div className="absolute h-[85%] w-[85%] rounded-full bg-blue-100/60 blur-3xl" />

              {/* Image Container */}
              <div className="group relative w-full overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_20px_70px_rgba(15,23,42,0.10)] sm:rounded-[32px]">
                <div className="relative h-[260px] overflow-hidden rounded-[22px] bg-gray-100 sm:h-[340px] lg:h-[380px]">

                  <img
                    src={activeSlide.image}
                    alt={activeSlide.imageAlt}
                    fetchPriority={activeIndex === 0 ? "high" : "auto"}
                    loading={activeIndex === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{
                      objectPosition: activeSlide.imagePosition,
                    }}
                  />

                  {/* Subtle image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/25 via-transparent to-transparent" />

                  {/* Image Label */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur-md">
                      {activeSlide.badge}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-md">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating offer card */}
              <div className="absolute -bottom-4 left-2 z-10 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:-bottom-5 sm:left-0 sm:px-5 sm:py-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Featured Collection
                </p>

                <p className="mt-1 text-sm font-bold text-gray-900">
                  {activeSlide.title} {activeSlide.highlight}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="relative z-20 mt-12 flex items-center justify-between border-t border-gray-100 pt-6 sm:mt-10">

          {/* Slide Counter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tabular-nums text-gray-900">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <span className="text-sm text-gray-300">/</span>

            <span className="text-sm font-medium tabular-nums text-gray-400">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Pill Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-9 bg-blue-600"
                    : "w-2 bg-gray-300 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[heroFade_500ms_ease-out\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;