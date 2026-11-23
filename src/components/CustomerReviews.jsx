
import { useEffect, useRef } from "react";
import {
  Star,
  Quote,
  ShieldCheck,
  MessageSquareQuote,
  MoveHorizontal,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Verified Customer",
    review:
      "Great product quality and smooth delivery experience. The packaging was excellent and everything arrived safely.",
    rating: 5,
    image: "https://i.pravatar.cc/120?img=12",
    product: "Electronics",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Verified Customer",
    review:
      "The shopping experience was simple and convenient. I found exactly what I needed at a competitive price.",
    rating: 5,
    image: "https://i.pravatar.cc/120?img=47",
    product: "Smartphones",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    role: "Verified Customer",
    review:
      "Excellent customer support and genuine products. I would definitely consider shopping here again.",
    rating: 5,
    image: "https://i.pravatar.cc/120?img=13",
    product: "Gaming Gear",
  },
  {
    id: 4,
    name: "Ayesha Rahman",
    role: "Verified Customer",
    review:
      "I ordered a smartwatch and received it in perfect condition. The overall experience was smooth and reliable.",
    rating: 5,
    image: "https://i.pravatar.cc/120?img=44",
    product: "Smartwatches",
  },
  {
    id: 5,
    name: "Sabbir Hossain",
    role: "Verified Customer",
    review:
      "Really impressed with the product quality and packaging. Everything was exactly as expected.",
    rating: 5,
    image: "https://i.pravatar.cc/120?img=14",
    product: "Accessories",
  },
  {
    id: 6,
    name: "Maliha Islam",
    role: "Verified Customer",
    review:
      "Good product collection, reasonable pricing, and a clean shopping experience. Looking forward to ordering again.",
    rating: 5,
    image: "https://i.pravatar.cc/120?img=45",
    product: "Gadgets",
  },
];

const StarRating = ({ rating }) => (
  <div
    className="flex items-center gap-0.5"
    aria-label={`${rating} out of 5 stars`}
  >
    {Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={13}
        fill={index < rating ? "currentColor" : "none"}
        className={
          index < rating ? "text-amber-500" : "text-gray-200"
        }
        aria-hidden="true"
      />
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <article className="group flex w-[300px] shrink-0 flex-col rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5 sm:w-[340px]">

    {/* Rating and Quote */}
    <div className="flex items-center justify-between">
      <StarRating rating={review.rating} />

      <Quote
        size={23}
        strokeWidth={1.5}
        className="text-blue-100 transition-colors group-hover:text-blue-500"
        aria-hidden="true"
      />
    </div>

    {/* Review */}
    <p className="mt-4 min-h-[100px] flex-1 text-[13px] leading-7 text-gray-600 sm:text-sm">
      “{review.review}”
    </p>

    {/* Product */}
    <span className="mt-4 w-fit rounded-full border border-gray-100 bg-gray-50 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-gray-500 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600">
      {review.product}
    </span>

    {/* Customer */}
    <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
      <img
        src={review.image}
        alt={review.name}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="h-11 w-11 shrink-0 rounded-full border border-gray-100 object-cover"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-bold text-gray-900">
          {review.name}
        </h3>

        <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-emerald-600">
          <ShieldCheck size={13} />
          {review.role}
        </p>
      </div>

      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
        aria-label="Verified customer"
      >
        <ShieldCheck size={16} />
      </div>
    </div>
  </article>
);

const CustomerReviews = () => {
  const viewportRef = useRef(null);
  const firstGroupRef = useRef(null);

  const animationRef = useRef(null);
  const hoverRef = useRef(false);
  const draggingRef = useRef(false);

  const dragStartRef = useRef({
    x: 0,
    scrollLeft: 0,
  });

  // =====================================
  // Automatic Infinite Marquee
  // =====================================

  useEffect(() => {
    const viewport = viewportRef.current;
    const firstGroup = firstGroupRef.current;

    if (!viewport || !firstGroup) return;

    let previousTime = 0;

    const speed = 35; // Pixels per second

    const animate = (currentTime) => {
      if (!viewport || !firstGroup) return;

      if (!previousTime) {
        previousTime = currentTime;
      }

      const delta = Math.min(
        currentTime - previousTime,
        32
      );

      previousTime = currentTime;

      const cycleWidth = firstGroup.offsetWidth;

      // Pause on hover or while dragging.
      if (
        !hoverRef.current &&
        !draggingRef.current &&
        !document.hidden &&
        cycleWidth > 0
      ) {
        viewport.scrollLeft += (speed * delta) / 1000;

        // Seamless infinite loop.
        if (viewport.scrollLeft >= cycleWidth) {
          viewport.scrollLeft -= cycleWidth;
        }
      }

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // =====================================
  // Mouse Drag Interaction
  // =====================================

  const handlePointerDown = (event) => {
    // Custom drag is for mouse.
    // Touch uses native horizontal scrolling.
    if (event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    const viewport = viewportRef.current;

    if (!viewport) return;

    draggingRef.current = true;

    dragStartRef.current = {
      x: event.clientX,
      scrollLeft: viewport.scrollLeft,
    };

    viewport.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!draggingRef.current) return;

    const viewport = viewportRef.current;

    if (!viewport) return;

    const distance =
      event.clientX - dragStartRef.current.x;

    viewport.scrollLeft =
      dragStartRef.current.scrollLeft - distance;
  };

  const handlePointerUp = (event) => {
    draggingRef.current = false;

    const viewport = viewportRef.current;

    if (
      viewport?.hasPointerCapture(event.pointerId)
    ) {
      viewport.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      className="overflow-hidden bg-gray-50 py-14 sm:py-16 lg:py-20"
      aria-labelledby="customer-reviews-title"
    >
      {/* Section Header */}
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:mb-12 sm:px-6 lg:px-8">

        <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-blue-700">
          <MessageSquareQuote size={14} />
          Customer Feedback
        </span>

        <h2
          id="customer-reviews-title"
          className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-[42px]"
        >
          What Our Customers{" "}
          <span className="text-blue-600">Say</span>
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
          Real experiences, genuine feedback. Discover why
          customers choose GadgetGoods for their tech needs.
        </p>

        {/* Rating Summary */}
        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-sm">

          <Star
            size={19}
            fill="currentColor"
            className="text-amber-500"
          />

          <span className="text-lg font-extrabold text-gray-950">
            5.0
          </span>

          <span className="h-5 w-px bg-gray-200" />

          <span className="text-sm font-medium text-gray-500">
            Customer satisfaction
          </span>
        </div>
      </div>

      {/* Single Row Infinite Marquee */}
      <div className="relative">

        {/* Left Gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-gray-50 to-transparent sm:w-24" />

        {/* Right Gradient */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-gray-50 to-transparent sm:w-24" />

        <div
          ref={viewportRef}
          className={`review-viewport flex overflow-x-auto overflow-y-hidden py-4 ${
            draggingRef.current ? "is-dragging" : ""
          }`}
          onPointerEnter={() => {
            hoverRef.current = true;
          }}
          onPointerLeave={() => {
            hoverRef.current = false;
            draggingRef.current = false;
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          aria-label="Customer reviews. Automatically scrolling. Hover to pause or drag to navigate."
        >
          {/* First Group */}
          <div
            ref={firstGroupRef}
            className="flex w-max shrink-0 gap-5 pr-5"
          >
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
              />
            ))}
          </div>

          {/* Duplicate Group for Infinite Loop */}
          <div
            className="flex w-max shrink-0 gap-5 pr-5"
            aria-hidden="true"
          >
            {reviews.map((review) => (
              <ReviewCard
                key={`duplicate-${review.id}`}
                review={review}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interaction Hint */}
      <div className="mx-auto mt-5 flex items-center justify-center gap-2 px-4 text-xs font-medium text-gray-400">
        <MoveHorizontal size={15} />
        <span>
          Hover to pause · Drag or swipe to explore reviews
        </span>
      </div>

      {/* Bottom Note */}
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-center gap-2 px-4 text-center text-xs font-medium text-gray-400 sm:text-sm">
        <ShieldCheck
          size={15}
          className="shrink-0 text-emerald-600"
        />
        Customer experiences help us improve every day.
      </div>
    </section>
  );
};

export default CustomerReviews;
