
import {
  ShieldCheck,
  Truck,
  Headset,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "100% Genuine Products",
    description:
      "Shop confidently with authentic products selected for quality and reliability.",
  },
  {
    icon: Truck,
    title: "Fast & Secure Delivery",
    description:
      "Get your favorite gadgets delivered safely and conveniently to your doorstep.",
  },
  {
    icon: RefreshCw,
    title: "Hassle-Free Returns",
    description:
      "Enjoy a straightforward return experience on eligible purchases.",
  },
  {
    icon: Headset,
    title: "Dedicated Customer Support",
    description:
      "Our support team is here to help whenever you need assistance.",
  },
];

const WhyShopWithUs = () => {
  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <ShieldCheck size={14} />
            The GadgetGoods Difference
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
            Why Shop With{" "}
            <span className="text-blue-600">Us?</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            More than just gadgets. We focus on genuine products,
            reliable delivery, and dependable customer service.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group flex h-full flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-gray-200/60 sm:p-7"
            >
              {/* Icon */}
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true"
              >
                <Icon size={25} strokeWidth={1.8} />
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="text-base font-bold leading-6 text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyShopWithUs;
