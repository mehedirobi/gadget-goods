
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Tag,
} from "lucide-react";

const SLIDE_INTERVAL = 3000;

const slides = [
  {
    id: 1,
    label: "NEW ARRIVALS",
    title: "Technology, Reimagined.",
    description:
      "Discover the latest smartphones and experience what's next.",
    buttonText: "Explore Smartphones",
    link: "/shop?search=Smartphone",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Modern smartphone",
    imagePosition: "center",
  },
  {
    id: 2,
    label: "LAPTOP COLLECTION",
    title: "Power Your Productivity.",
    description:
      "Find the perfect laptop for work, creativity and everyday life.",
    buttonText: "Shop Laptops",
    link: "/shop?search=Laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Laptop on a modern workspace",
    imagePosition: "center",
  },
  {
    id: 3,
    label: "HOME ENTERTAINMENT",
    title: "Make Every Moment Bigger.",
    description:
      "Upgrade your entertainment with immersive Smart TVs.",
    buttonText: "Explore Smart TVs",
    link: "/shop?search=TV",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Modern television in a living room",
    imagePosition: "center",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = slides[activeIndex];

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, []);

  const previousSlide = useCallback(() => {
    setActiveIndex(
      (current) => (current - 1 + slides.length) % slides.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Preload the next slide image.
  useEffect(() => {
    const nextIndex = (activeIndex + 1) % slides.length;
    const image = new Image();
    image.src = slides[nextIndex].image;
  }, [activeIndex]);

  return (
    <section
      aria-label="Featured products and promotional offers"
      className="bg-white px-3 pt-3 sm:px-5 sm:pt-4 lg:px-7"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-3 lg:grid-cols-[7fr_3fr]">
        {/* Main Carousel - 70% */}
        <div
          className="relative isolate min-h-[340px] overflow-hidden rounded-2xl bg-[#101820] sm:min-h-[380px] lg:min-h-[400px]"
          aria-roledescription="carousel"
        >
          {/* Slide Image */}
          <img
            key={activeSlide.id}
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            fetchPriority={activeIndex === 0 ? "high" : "auto"}
            loading={activeIndex === 0 ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover animate-[heroImage_600ms_ease-out]"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/65 to-black/10" />

          {/* Slide Content */}
          <div
            key={`content-${activeSlide.id}`}
            className="flex min-h-[340px] max-w-[600px] flex-col items-start justify-center px-7 pb-16 pt-10 animate-[heroContent_450ms_ease-out] sm:min-h-[380px] sm:px-12 lg:min-h-[400px] lg:px-14"
          >
            <span className="mb-4 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-white backdrop-blur-md">
              {activeSlide.label}
            </span>

            <h1 className="max-w-[480px] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
              {activeSlide.title}
            </h1>

            <p className="mt-3 max-w-[370px] text-xs leading-6 text-white/75 sm:text-sm sm:leading-7">
              {activeSlide.description}
            </p>

            <Link
              to={activeSlide.link}
              className="group mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-xs font-semibold text-gray-900 transition hover:bg-blue-600 hover:text-white sm:text-sm"
            >
              {activeSlide.buttonText}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Navigation */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900 sm:left-5"
          >
            <ArrowLeft size={17} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900 sm:right-5"
          >
            <ArrowRight size={17} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-5 left-7 flex items-center gap-2 sm:left-12 lg:left-14">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-white"
                    : "w-4 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Promotional Banners - 30% */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {/* Exclusive Deals Banner */}
          <div className="group relative isolate flex min-h-[175px] flex-col justify-center overflow-hidden rounded-2xl bg-[#14243b] p-6 sm:min-h-[190px] lg:min-h-0 lg:flex-1">
            <img
              src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=900&q=85"
              alt="Exclusive shopping deals"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101827]/95 via-[#101827]/75 to-[#101827]/20" />

            <div className="mb-3 flex items-center gap-2 text-blue-300">
              <CalendarDays size={15} />
              <span className="text-[10px] font-bold tracking-[0.15em]">
                LIMITED TIME OFFER
              </span>
            </div>

            <h2 className="max-w-[220px] text-xl font-bold leading-tight text-white sm:text-2xl">
              Exclusive Deals
            </h2>

            <p className="mt-2 text-xs text-white/75">
              Special offers from 25 – 30 November.
            </p>

            <Link
              to="/shop?sort=discount"
              className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-semibold text-white transition hover:text-blue-300"
            >
              Explore Deals
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Special Price Banner */}
          <div className="group relative isolate flex min-h-[175px] flex-col justify-center overflow-hidden rounded-2xl bg-[#18212c] p-6 sm:min-h-[190px] lg:min-h-0 lg:flex-1">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85"
              alt="Premium headphones special price offer"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111827]/95 via-[#111827]/75 to-[#111827]/20" />

            <div className="mb-3 flex items-center gap-2 text-amber-300">
              <Tag size={15} />
              <span className="text-[10px] font-bold tracking-[0.15em]">
                SPECIAL PRICE
              </span>
            </div>

            <h2 className="max-w-[220px] text-xl font-bold leading-tight text-white sm:text-2xl">
              Better Tech. Better Price.
            </h2>

            <p className="mt-2 text-xs text-white/75">
              Discover selected products at special prices.
            </p>

            <Link
              to="/shop?sort=price"
              className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-semibold text-white transition hover:text-amber-300"
            >
              Shop Now
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroContent {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroImage {
          from {
            opacity: 0.7;
            transform: scale(1.02);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
