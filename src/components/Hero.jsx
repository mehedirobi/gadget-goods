
import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
} from "lucide-react";

const SLIDE_INTERVAL = 4000;

const slides = [
  {
    id: 1,
    eyebrow: "THE NEXT LEVEL OF GAMING",
    badge: "EXCLUSIVE DEAL",
    title: "Power Up Your",
    highlight: "Gaming World.",
    description:
      "Build your ultimate gaming setup with powerful hardware, immersive displays, and premium gaming accessories.",
    product: "Gaming Collection",
    offer: "UP TO 30% OFF",
    price: "Starting at ৳2,499",
    buttonText: "Explore Gaming",
    link: "/shop?category=gaming",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=2000&q=85",
    imagePosition: "center",
  },
  {
    id: 2,
    eyebrow: "TECHNOLOGY MEETS INNOVATION",
    badge: "NEW ARRIVALS",
    title: "Experience the",
    highlight: "Future Today.",
    description:
      "Discover the latest smartphones with exceptional cameras, stunning displays, and powerful performance.",
    product: "Latest Smartphones",
    offer: "NEW COLLECTION",
    price: "Explore the latest models",
    buttonText: "Discover Phones",
    link: "/shop?category=smartphones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=2000&q=85",
    imagePosition: "center",
  },
  {
    id: 3,
    eyebrow: "BUILT FOR YOUR PRODUCTIVITY",
    badge: "PREMIUM COLLECTION",
    title: "Work Smarter.",
    highlight: "Go Further.",
    description:
      "Find your perfect laptop for creativity, productivity, business, and everything in between.",
    product: "Premium Laptops",
    offer: "SPECIAL PRICES",
    price: "Explore laptop collection",
    buttonText: "Explore Laptops",
    link: "/shop?category=laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=2000&q=85",
    imagePosition: "center",
  },
  {
    id: 4,
    eyebrow: "SOUND WITHOUT LIMITS",
    badge: "LIMITED TIME OFFER",
    title: "Feel Every",
    highlight: "Beat.",
    description:
      "Discover premium headphones and audio accessories designed to bring every detail to life.",
    product: "Premium Audio",
    offer: "UP TO 25% OFF",
    price: "Selected audio products",
    buttonText: "Explore Audio",
    link: "/shop?category=accessories",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=2000&q=85",
    imagePosition: "center",
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

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Preload the next image to reduce transition flicker.
  useEffect(() => {
    const nextIndex = (activeIndex + 1) % slides.length;
    const image = new Image();

    image.src = slides[nextIndex].image;
  }, [activeIndex]);

  // Autoplay continues during hover and resets after manual navigation.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <section
      aria-label="Featured products and promotions"
      className="relative isolate mx-auto overflow-hidden bg-[#080d18]"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          key={activeSlide.id}
          src={activeSlide.image}
          alt=""
          fetchPriority={activeIndex === 0 ? "high" : "auto"}
          className="h-full w-full object-cover animate-[heroImage_700ms_ease-out]"
          style={{ objectPosition: activeSlide.imagePosition }}
        />
      </div>

      {/* Subtle overlays - image remains clearly visible */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080d18]/95 via-[#080d18]/75 to-[#080d18]/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080d18]/75 via-transparent to-[#080d18]/10" />

      {/* Main content */}
      <div className="relative mx-auto flex min-h-[440px] max-w-[1440px] items-center px-16 pb-24 pt-12 sm:min-h-[460px] sm:px-20 sm:pb-24 lg:min-h-[420px] lg:px-28 lg:py-12">
        <div
          key={activeSlide.id}
          className="w-full max-w-[590px] animate-[heroContent_500ms_ease-out]"
        >
          {/* Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-3.5 py-2 text-[10px] font-bold tracking-[0.14em] text-blue-300 backdrop-blur-sm sm:text-xs">
              <Sparkles size={14} />
              {activeSlide.badge}
            </span>

            <span className="text-[10px] font-semibold tracking-[0.16em] text-gray-300 sm:text-xs">
              {activeSlide.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[58px]">
            {activeSlide.title}
            <span className="mt-1 block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {activeSlide.highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[490px] text-sm leading-7 text-gray-300 sm:text-base">
            {activeSlide.description}
          </p>

          {/* Offer */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-lg border border-blue-400/25 bg-blue-500/15 px-4 py-2.5 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
              <Zap size={16} className="text-cyan-300" />
              {activeSlide.offer}
            </span>

            <span className="text-sm font-medium text-gray-200">
              {activeSlide.price}
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to={activeSlide.link}
              className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              {activeSlide.buttonText}
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              to="/shop"
              className="inline-flex items-center rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10"
            >
              Browse Products
            </Link>
          </div>

          {/* Product label */}
          <div className="mt-6 flex items-center gap-2 text-xs text-gray-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Featured: {activeSlide.product}
          </div>
        </div>
      </div>

      {/* Left navigation */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous promotion"
        className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-600 sm:left-5 sm:h-12 sm:w-12"
      >
        <ArrowLeft size={19} />
      </button>

      {/* Right navigation */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next promotion"
        className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-600 sm:right-5 sm:h-12 sm:w-12"
      >
        <ArrowRight size={19} />
      </button>

      {/* Bottom centered pill pagination */}
      <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-full border border-white/15 bg-[#080d18]/75 px-4 py-2.5 shadow-xl backdrop-blur-xl">
          <span className="text-xs font-semibold tabular-nums text-white">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          {/* Progress indicators */}
          <div className="flex items-center gap-1.5">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to promotion ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-white/25"
                    : "w-1.5 bg-white/35 hover:bg-white/70"
                }`}
              >
                {activeIndex === index && (
                  <span
                    key={activeIndex}
                    className="absolute inset-0 origin-left rounded-full bg-blue-400 animate-[heroProgress_4000ms_linear]"
                  />
                )}
              </button>
            ))}
          </div>

          <span className="text-xs font-medium tabular-nums text-gray-400">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes heroImage {
          from {
            opacity: 0.75;
            transform: scale(1.015);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes heroContent {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroProgress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[heroImage_700ms_ease-out\\],
          .animate-\\[heroContent_500ms_ease-out\\],
          .animate-\\[heroProgress_4000ms_linear\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
