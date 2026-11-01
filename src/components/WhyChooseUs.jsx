
import {
  ShieldCheck,
  Truck,
  Headphones,
  RefreshCcw,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "100% Genuine Products",
    description: "Shop confidently with authentic products and trusted brands.",
  },
  {
    icon: Truck,
    title: "Fast & Secure Delivery",
    description: "Get your favorite gadgets delivered safely to your doorstep.",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "A straightforward return process for eligible purchases.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Our support team is here to help with your shopping needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#080d19] px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            The Gadget Goods Difference
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Why Shop With Us?
          </h2>

          <p className="mt-4 text-gray-400">
            Quality products, reliable service and a better shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-800 bg-[#111827] p-7 text-center transition hover:border-blue-500/50"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Icon size={27} />
              </div>

              <h3 className="mt-5 font-semibold text-white">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
