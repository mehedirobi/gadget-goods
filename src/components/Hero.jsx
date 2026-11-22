
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const SLIDE_INTERVAL = 2500;

const slides = [
  {
    id: 1,
    tag: "LIMITED TIME OFFER",
    eyebrow: "HOME ENTERTAINMENT",
    title: "Big Screen. Smaller Price.",
    description:
      "Upgrade your entertainment with exclusive deals on selected Smart TVs.",
    offer: "UP TO 25% OFF",
    buttonText: "Explore TV Deals",
    link: "/shop?category=televisions",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Modern large-screen television in a living room",
    position: "center",
  },
  {
    id: 2,
    tag: "JUST ANNOUNCED",
    eyebrow: "SMARTPHONE COLLECTION",
    title: "The Next Era of Smartphones.",
    description:
      "Discover what's new in mobile technology and find your next upgrade.",
    offer: "EXPLORE NEW ARRIVALS",
    buttonText: "Explore Smartphones",
    link: "/shop?category=smartphones",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Modern smartphone showcasing its display",
    position: "center",
  },
  {
    id: 3,
    tag: "SPECIAL DEALS",
    eyebrow: "GAMING COLLECTION",
    title: "Level Up Your Setup.",
    description:
      "Get more from every game with deals on gaming gear and accessories.",
    offer: "EXCLUSIVE GAMING DEALS",
    buttonText: "Shop Gaming Gear",
    link: "/shop?category=gaming",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Gaming setup with monitor and gaming equipment",
    position: "center",
  },
  {
    id: 4,
    tag: "WEEKLY SPECIAL",
    eyebrow: "LAPTOP COLLECTION",
    title: "Power Your Next Big Idea.",
    description:
      "Find powerful laptops for productivity, creativity and everyday work.",
    offer: "EXPLORE LAPTOP DEALS",
    buttonText: "Shop Laptops",
    link: "/shop?category=laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Laptop on a clean modern workspace",
    position: "center",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = slides[activeIndex];

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, []);

  const previousSlide = useCallback(() => {
    setActiveIndex(
      (current) => (current - 1 + slides.length) % slides.length
    );
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Preload upcoming image
  useEffect(() => {
    const nextIndex = (activeIndex + 1) % slides.length;
    const image = new Image();

    image.src = slides[nextIndex].image;
  }, [activeIndex]);

  return (
    <section
      aria-label="Featured promotions"
      className="bg-white px-3 pt-3 sm:px-5 sm:pt-4 lg:px-7"
    >
      <div className="mx-auto max-w-[1440px]">
        <div
          className="group relative isolate min-h-[350px] overflow-hidden rounded-xl bg-slate-950 sm:min-h-[390px] lg:min-h-[440px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          {/* Background Image */}
          <img
            key={activeSlide.id}
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            fetchPriority={activeIndex === 0 ? "high" : "auto"}
            loading={activeIndex === 0 ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover animate-[heroImage_600ms_ease-out]"
            style={{ objectPosition: activeSlide.position }}
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/35 to-transparent" />

          {/* Content */}
          <div
            key={`content-${activeSlide.id}`}
            className="flex min-h-[350px] flex-col items-start justify-center px-6 pb-20 pt-12 animate-[heroContent_500ms_ease-out] sm:min-h-[390px] sm:px-10 lg:min-h-[440px] lg:px-16"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-white backdrop-blur-sm">
              <Sparkles size={12} className="text-blue-300" />
              {activeSlide.tag}
            </span>

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300 sm:text-xs">
              {activeSlide.eyebrow}
            </p>

            <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[56px]">
              {activeSlide.title}
            </h1>

            <p className="mt-4 max-w-md text-xs leading-6 text-white/75 sm:text-sm sm:leading-7">
              {activeSlide.description}
            </p>

            <p className="mt-4 text-xs font-bold tracking-wider text-blue-300 sm:text-sm">
              {activeSlide.offer}
            </p>

            <Link
              to={activeSlide.link}
              className="group/btn mt-6 inline-flex items-center gap-3 rounded-lg bg-white px-5 py-3 text-xs font-semibold text-gray-900 transition-colors duration-200 hover:bg-blue-600 hover:text-white sm:text-sm"
            >
              {activeSlide.buttonText}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Carousel Controls */}
          <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between sm:bottom-7 sm:left-10 sm:right-10 lg:left-16 lg:right-16">
            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}: ${slide.eyebrow}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-white"
                      : "w-4 bg-white/40 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            {/* Previous / Next */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-gray-900 sm:h-10 sm:w-10"
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-gray-900 sm:h-10 sm:w-10"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes heroContent {
          from {
            opacity: 0;
            transform: translateY(10px);
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
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
