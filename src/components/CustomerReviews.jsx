
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Verified Customer",
    review: "Great product quality and smooth delivery experience. The packaging was excellent and everything arrived safely.",
    rating: 5,
    initial: "R",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Verified Customer",
    review: "The shopping experience was simple and convenient. I found exactly what I needed at a competitive price.",
    rating: 5,
    initial: "N",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    role: "Verified Customer",
    review: "Excellent customer support and genuine products. I would definitely consider shopping here again.",
    rating: 5,
    initial: "T",
  },
];

const CustomerReviews = () => {
  return (
    <section className="bg-[#0b1120] px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Customer Feedback
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-400">
            Real shopping experiences matter to us.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-2xl border border-gray-800 bg-[#111827] p-7 transition hover:border-blue-500/50"
            >
              <Quote size={30} className="text-blue-500/60" />

              <div className="mt-5 flex gap-1 text-yellow-400">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="mt-5 min-h-24 text-sm leading-7 text-gray-400">
                "{review.review}"
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-gray-800 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600/20 font-bold text-blue-400">
                  {review.initial}
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {review.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
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
