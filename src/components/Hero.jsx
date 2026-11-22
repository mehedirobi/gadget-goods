
import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const SLIDE_INTERVAL = 4000;

const slides = [
  {
    id: 1,
    category: "GAMING COLLECTION",
    title: "Gear Up. Game On.",
    description: "Discover powerful gaming gear built for every victory.",
    buttonText: "Explore Gaming",
    link: "/shop?category=gaming",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=2000&q=90",
    imageAlt: "Premium gaming setup with monitor and gaming equipment",
    position: "center",
  },
  {
    id: 2,
    category: "SMARTPHONE COLLECTION",
    title: "Innovation in Your Hands.",
    description: "Explore the latest smartphones and next-level technology.",
    buttonText: "Explore Smartphones",
    link: "/shop?category=smartphones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=2000&q=90",
    imageAlt: "Modern smartphone showcasing its display",
    position: "center",
  },
  {
    id: 3,
    category: "LAPTOP COLLECTION",
    title: "Power Your Potential.",
    description: "Find the perfect laptop for work, creativity and beyond.",
    buttonText: "Explore Laptops",
    link: "/shop?category=laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=2000&q=90",
    imageAlt: "Premium laptop on a modern workspace",
    position: "center",
  },
  {
    id: 4,
    category: "AUDIO COLLECTION",
    title: "Sound Beyond Limits.",
    description: "Experience every detail with premium audio technology.",
    buttonText: "Explore Audio",
    link: "/shop?category=accessories",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=2000&q=90",
    imageAlt: "Premium wireless headphones",
    position: "center",
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

  // Preload the next image.
  useEffect(() => {
    const nextIndex = (activeIndex + 1) % slides.length;
    const image = new Image();
    image.src = slides[nextIndex].image;
  }, [activeIndex]);

  
// Automatic carousel - changes every 4 seconds.
useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, SLIDE_INTERVAL);

  return () => clearInterval(interval);
}, []);


  return (
    <section
      aria-label="Featured product collections"
      className="bg-white px-3 pt-4 sm:px-5 lg:px-8"
    >
      <div className="relative mx-auto max-w-[1600px]">

        {/* Main Banner */}
        <div
          className="group relative isolate min-h-[440px] overflow-hidden rounded-2xl bg-slate-900 sm:min-h-[500px] lg:min-h-[560px] xl:min-h-[600px]"
        >
          {/* Background Image */}
          <img
            key={activeSlide.id}
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            fetchPriority={activeIndex === 0 ? "high" : "auto"}
            loading={activeIndex === 0 ? "eager" : "lazy"}
            className="absolute inset-0 -z-20 h-full w-full object-cover animate-[imageReveal_700ms_ease-out]"
            style={{ objectPosition: activeSlide.position }}
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/5" />

          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

          {/* Banner Content */}
          <div
            key={`content-${activeSlide.id}`}
            className="flex min-h-[440px] flex-col items-start justify-center px-6 py-16 animate-[heroFade_600ms_ease-out] sm:min-h-[500px] sm:px-12 lg:min-h-[560px] lg:px-20 xl:min-h-[600px] xl:px-24"
          >
            {/* Category */}
            <span className="mb-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-300 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              {activeSlide.category}
            </span>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {activeSlide.title}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-7 text-white/75 sm:text-base">
              {activeSlide.description}
            </p>

            {/* CTA */}
            <Link
              to={activeSlide.link}
              className="group/btn mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              {activeSlide.buttonText}

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
              />
            </Link>
          </div>

          {/* Slide Navigation */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between sm:bottom-9 sm:left-12 sm:right-12 lg:left-20 lg:right-20 xl:left-24 xl:right-24">

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to ${slide.category}`}
                  aria-current={
                    activeIndex === index ? "true" : undefined
                  }
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-10 bg-white"
                      : "w-5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes imageReveal {
          from {
            opacity: 0.65;
            transform: scale(1.025);
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
