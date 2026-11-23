
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgePercent,
  Sparkles,
} from "lucide-react";

const SLIDE_INTERVAL = 3000;

const slides = [
  {
    id: 1,
    tag: "NEW ARRIVAL",
    eyebrow: "APPLE IPHONE 18 PRO SERIES",
    title: "Pro Beyond Expectations.",
    description:
      "Discover iPhone 18 Pro and Pro Max. A powerful camera system, A20 Pro performance and a stunning new design.",
    offer: "EXPLORE THE NEW IPHONE 18 SERIES",
    buttonText: "Explore iPhone",
    link: "/shop?search=iPhone%2018",
    image:
      "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/article/Apple-iPhone-18-Pro-2up-260909_inline.jpg.large.jpg",
    imageAlt: "Official iPhone 18 Pro and Pro Max product image",
    imageMode: "product",
    imagePosition: "right",
    background: "bg-[#09090b]",
  },
  {
    id: 2,
    tag: "NEW PRODUCT",
    eyebrow: "INTRODUCING IPHONE DUO",
    title: "A New Way to Experience iPhone.",
    description:
      "Meet Apple's first foldable iPhone. Two displays, a refined titanium design and a whole new way to do more.",
    offer: "DISCOVER THE FOLDABLE IPHONE",
    buttonText: "Explore iPhone Duo",
    link: "/shop?search=iPhone%20Duo",
    image:
      "https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-colors-260909_big.jpg.large.jpg",
    imageAlt: "Official iPhone Duo foldable smartphone product image",
    imageMode: "product",
    imagePosition: "right",
    background: "bg-[#10131a]",
  },
  {
    id: 3,
    tag: "SPECIAL PRICE",
    eyebrow: "LAPTOP COLLECTION",
    title: "Upgrade Your Workstation.",
    description:
      "Power through work, creativity and entertainment with laptops from leading brands.",
    offer: "EXPLORE LAPTOP DEALS",
    buttonText: "Shop Laptops",
    link: "/shop?search=Laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Premium laptop on a modern workspace",
    imageMode: "cover",
    background: "bg-[#101820]",
  },
  {
    id: 4,
    tag: "HOME ENTERTAINMENT",
    eyebrow: "SMART TV COLLECTION",
    title: "Bring the Big Screen Home.",
    description:
      "Make movie nights better with immersive displays and selected Smart TV deals.",
    offer: "DISCOVER TV OFFERS",
    buttonText: "Explore Smart TVs",
    link: "/shop?search=TV",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Large modern television in a stylish living room",
    imageMode: "cover",
    background: "bg-[#111827]",
  },
  {
    id: 5,
    tag: "SHOP SMARTER",
    eyebrow: "GADGET GOODS EXCLUSIVE",
    title: "More Flexibility. Better Shopping.",
    description:
      "Planning a big upgrade? Explore available EMI and flexible payment options on selected products.",
    offer: "CHECK AVAILABLE PAYMENT OPTIONS",
    buttonText: "Explore Products",
    link: "/shop",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=2000&q=85",
    imageAlt: "Shopping and promotional offers",
    imageMode: "cover",
    background: "bg-[#111827]",
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

  // Automatic carousel: continues even when hovering.
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
      <div className="mx-auto max-w-[1440px]">
        <div
          className={`relative isolate min-h-[370px] overflow-hidden rounded-2xl sm:min-h-[410px] lg:min-h-[460px] ${activeSlide.background}`}
          aria-roledescription="carousel"
        >
          {/* Background Image */}
          {activeSlide.imageMode === "cover" ? (
            <img
              key={activeSlide.id}
              src={activeSlide.image}
              alt={activeSlide.imageAlt}
              fetchPriority={activeIndex === 0 ? "high" : "auto"}
              loading={activeIndex === 0 ? "eager" : "lazy"}
              decoding="async"
              className="absolute inset-0 -z-20 h-full w-full object-cover animate-[heroImage_700ms_ease-out]"
            />
          ) : (
            <div className="absolute inset-y-0 right-0 -z-20 w-full overflow-hidden sm:w-[65%] lg:w-[62%]">
              <img
                key={activeSlide.id}
                src={activeSlide.image}
                alt={activeSlide.imageAlt}
                fetchPriority="auto"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain object-right animate-[heroImage_700ms_ease-out]"
              />
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/65 to-black/10" />

          {activeSlide.imageMode === "product" && (
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-transparent to-white/5" />
          )}

          {activeSlide.imageMode === "cover" && (
            <div className="absolute inset-0 -z-10 bg-black/15" />
          )}

          {/* Content */}
          <div
            key={`content-${activeSlide.id}`}
            className="flex min-h-[370px] flex-col items-start justify-center px-7 pb-20 pt-12 animate-[heroContent_500ms_ease-out] sm:min-h-[410px] sm:px-12 lg:min-h-[460px] lg:px-20"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-white backdrop-blur-md">
              {activeSlide.tag === "SPECIAL PRICE" ||
              activeSlide.tag === "SHOP SMARTER" ? (
                <BadgePercent size={13} className="text-blue-300" />
              ) : (
                <Sparkles size={13} className="text-blue-300" />
              )}
              {activeSlide.tag}
            </span>

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300 sm:text-xs">
              {activeSlide.eyebrow}
            </p>

            <h1 className="max-w-[620px] text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[58px]">
              {activeSlide.title}
            </h1>

            <p className="mt-4 max-w-[420px] text-xs leading-6 text-white/75 sm:text-sm sm:leading-7">
              {activeSlide.description}
            </p>

            <p className="mt-4 text-[10px] font-bold tracking-wider text-blue-300 sm:text-xs">
              {activeSlide.offer}
            </p>

            <Link
              to={activeSlide.link}
              className="group/btn mt-6 inline-flex items-center gap-3 rounded-lg bg-white px-5 py-3 text-xs font-semibold text-gray-900 transition-all duration-200 hover:bg-blue-600 hover:text-white sm:text-sm"
            >
              {activeSlide.buttonText}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Left Navigation */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous promotion"
            className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-gray-900 sm:left-5 sm:h-11 sm:w-11"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Right Navigation */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next promotion"
            className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-gray-900 sm:right-5 sm:h-11 sm:w-11"
          >
            <ArrowRight size={18} />
          </button>

          {/* Bottom Controls */}
          <div className="absolute bottom-5 left-7 right-7 flex items-center justify-between sm:bottom-7 sm:left-12 sm:right-12 lg:left-20 lg:right-20">
            {/* Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to promotion ${index + 1}: ${slide.eyebrow}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-9 bg-white"
                      : "w-4 bg-white/40 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <span className="text-[10px] font-medium tracking-widest text-white/70">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

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
