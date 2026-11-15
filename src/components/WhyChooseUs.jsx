
import {
  ShieldCheck,
  Truck,
  Headset,
  RefreshCw,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "100% Genuine Products",
    description:
      "Shop with confidence knowing every product is authentic and quality-checked.",
  },
  {
    icon: Truck,
    title: "Fast & Secure Delivery",
    description:
      "Enjoy reliable delivery with your gadgets carefully handled at every step.",
  },
  {
    icon: RefreshCw,
    title: "Hassle-Free Returns",
    description:
      "Experience a simple and convenient return process on eligible purchases.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Get expert assistance whenever you need help with your shopping experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
            The Gadget Goods Difference
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Shop With Us?
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            More than just gadgets. We deliver quality products,
            dependable service, and a shopping experience you can trust.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={26} strokeWidth={1.8} />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-base font-semibold text-gray-900">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
