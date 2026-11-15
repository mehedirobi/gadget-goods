
import { Star, Quote, ShieldCheck } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Verified Customer",
    review:
      "Great product quality and smooth delivery experience. The packaging was excellent and everything arrived safely.",
    rating: 5,
    initial: "R",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Verified Customer",
    review:
      "The shopping experience was simple and convenient. I found exactly what I needed at a competitive price.",
    rating: 5,
    initial: "N",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    role: "Verified Customer",
    review:
      "Excellent customer support and genuine products. I would definitely consider shopping here again.",
    rating: 5,
    initial: "T",
  },
];

const CustomerReviews = () => {
  return (
    <section className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto mb-11 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <ShieldCheck size={14} />
            Customer Feedback
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
            What Our Customers <span className="text-blue-600">Say</span>
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
            Your satisfaction matters. Discover what customers
            think about their shopping experience with us.
          </p>

          {/* Rating Summary */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-sm">
            <div className="flex items-center gap-1">
              <Star
                size={18}
                fill="currentColor"
                className="text-amber-500"
              />
              <span className="text-lg font-extrabold text-gray-950">
                5.0
              </span>
            </div>

            <span className="h-5 w-px bg-gray-200" />

            <span className="text-sm font-medium text-gray-600">
              Based on customer reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md sm:p-7"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="currentColor"
                      className="text-amber-500"
                    />
                  ))}
                </div>

                <Quote
                  size={30}
                  strokeWidth={1.5}
                  className="text-blue-100 transition-colors group-hover:text-blue-200"
                />
              </div>

              {/* Review Content */}
              <p className="mt-5 flex-1 text-sm leading-7 text-gray-700">
                “{review.review}”
              </p>

              {/* Customer Information */}
              <div className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-base font-bold text-blue-700">
                  {review.initial}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold text-gray-900">
                    {review.name}
                  </h3>

                  <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-gray-500">
                    <ShieldCheck size={13} className="text-emerald-600" />
                    {review.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerReviews;
