
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgePercent,
  CalendarDays,
  Check,
  Clock3,
  Copy,
  Gift,
  GraduationCap,
  Headphones,
  Laptop,
  Monitor,
  Percent,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Tag,
  Truck,
  Zap,
} from "lucide-react";

const offers = [
  {
    id: 1,
    title: "11.11 Mega Sale",
    subtitle: "The biggest tech shopping festival.",
    description:
      "Discover incredible savings on smartphones, laptops, gaming gear and accessories.",
    discount: "UP TO 30% OFF",
    category: "Mega Sale",
    badge: "Mega Campaign",
    code: "GADGET1111",
    theme: "dark",
    icon: BadgePercent,
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1000&q=85",
    link: "/shop",
    cta: "Explore Mega Deals",
  },
  {
    id: 2,
    title: "Exclusive Tech Deals",
    subtitle: "Premium technology. Better prices.",
    description:
      "Unlock special offers on selected premium electronics and flagship devices.",
    discount: "SAVE UP TO 20%",
    category: "Exclusive",
    badge: "Exclusive",
    code: "EXCLUSIVE20",
    theme: "purple",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1000&q=85",
    link: "/shop",
    cta: "Discover Deals",
  },
  {
    id: 3,
    title: "Happy Hours",
    subtitle: "More savings in less time.",
    description:
      "Enjoy selected flash deals during special shopping hours. Limited quantities available.",
    discount: "FLASH DEALS",
    category: "Flash Deals",
    badge: "Limited Time",
    code: "HAPPYHOUR",
    theme: "orange",
    icon: Clock3,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&q=85",
    link: "/shop",
    cta: "View Flash Deals",
  },
  {
    id: 4,
    title: "0% EMI Campaign",
    subtitle: "Upgrade now. Pay comfortably.",
    description:
      "Get selected electronics with convenient installment options through eligible banks.",
    discount: "0% INTEREST",
    category: "EMI",
    badge: "Flexible Payment",
    code: null,
    theme: "blue",
    icon: Percent,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000&q=85",
    link: "/contact",
    cta: "Explore EMI Benefits",
  },
  {
    id: 5,
    title: "SSC & HSC Special",
    subtitle: "Your achievement deserves an upgrade.",
    description:
      "Build your dream PC with student-focused configurations and special campaign benefits.",
    discount: "SPECIAL PC DEALS",
    category: "Student Deals",
    badge: "Student Exclusive",
    code: "STUDENTPC",
    theme: "green",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1000&q=85",
    link: "/contact",
    cta: "Build Your Dream PC",
  },
  {
    id: 6,
    title: "Bundle & Save",
    subtitle: "Better together. Save more.",
    description:
      "Shop selected gadget bundles and get better value on your complete tech setup.",
    discount: "COMBO SAVINGS",
    category: "Bundle Deals",
    badge: "Value Deals",
    code: "BUNDLE10",
    theme: "dark",
    icon: Gift,
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1000&q=85",
    link: "/shop",
    cta: "Shop Bundles",
  },
];

const dealProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    brand: "Sony",
    category: "Audio",
    price: 12999,
    oldPrice: 15999,
    discount: 19,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=85",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Apple Watch Series",
    brand: "Apple",
    category: "Gadgets",
    price: 34999,
    oldPrice: 39999,
    discount: 13,
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=700&q=85",
    tag: "Hot Deal",
  },
  {
    id: 3,
    name: "Gaming Laptop",
    brand: "ASUS",
    category: "Laptops",
    price: 139999,
    oldPrice: 154999,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=700&q=85",
    tag: "Limited Offer",
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    brand: "Gaming Gear",
    category: "Accessories",
    price: 5499,
    oldPrice: 6999,
    discount: 21,
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=700&q=85",
    tag: "Popular",
  },
];

const coupons = [
  {
    code: "GADGET10",
    title: "First Order Discount",
    description: "Get 10% off on eligible first purchases.",
    condition: "Selected products only",
  },
  {
    code: "BUNDLE10",
    title: "Bundle Savings",
    description: "Enjoy special savings on selected combo deals.",
    condition: "Eligible product bundles",
  },
  {
    code: "STUDENTPC",
    title: "Student PC Campaign",
    description: "Get access to special student PC build offers.",
    condition: "Student verification required",
  },
];

const categories = [
  "All Deals",
  "Smartphones",
  "Laptops",
  "Gadgets",
  "Accessories",
];

const formatPrice = (price) =>
  `৳${price.toLocaleString("en-BD")}`;

const themeStyles = {
  dark: {
    background: "bg-slate-900",
    accent: "text-green-400",
    badge: "bg-green-500/15 text-green-300",
  },
  purple: {
    background: "bg-[#30234f]",
    accent: "text-purple-200",
    badge: "bg-white/15 text-white",
  },
  orange: {
    background: "bg-[#462817]",
    accent: "text-orange-300",
    badge: "bg-orange-400/15 text-orange-200",
  },
  blue: {
    background: "bg-[#173451]",
    accent: "text-blue-200",
    badge: "bg-white/15 text-white",
  },
  green: {
    background: "bg-[#153b2c]",
    accent: "text-green-200",
    badge: "bg-white/15 text-white",
  },
};

const Offers = () => {
  const [activeCategory, setActiveCategory] = useState("All Deals");
  const [copiedCode, setCopiedCode] = useState("");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All Deals") return dealProducts;

    return dealProducts.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  const handleCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      window.setTimeout(() => setCopiedCode(""), 2000);
    } catch {
      setCopiedCode("");
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#f4f8f5]">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-green-200/40 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-green-700 shadow-sm">
              <Sparkles size={15} />
              GadgetGoods Special Offers
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Big Deals.
              <span className="block text-green-600">
                Better Technology.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
              Discover exclusive deals, exciting seasonal sales and
              special benefits on your favorite tech products.
              More value for every purchase.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#all-offers"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5 hover:bg-green-700"
              >
                Explore All Offers
                <ArrowRight size={18} />
              </a>

              <a
                href="#coupon-codes"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-green-300 hover:text-green-700"
              >
                Get Coupons
                <Tag size={17} />
              </a>
            </div>

            <div className="mt-11 flex flex-wrap gap-7 border-t border-slate-200 pt-7">
              <div>
                <p className="text-2xl font-extrabold">Special</p>
                <p className="mt-1 text-xs text-slate-500">
                  Seasonal Campaigns
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold">0%</p>
                <p className="mt-1 text-xs text-slate-500">
                  Eligible EMI Offers
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold">More</p>
                <p className="mt-1 text-xs text-slate-500">
                  Exclusive Savings
                </p>
              </div>
            </div>
          </div>

          {/* Hero campaign */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-green-300/40 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[28px] bg-slate-900 shadow-2xl shadow-slate-300/50">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1000&q=85"
                  alt="Special shopping offers"
                  className="h-full w-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
              </div>

              <div className="relative flex min-h-[420px] flex-col justify-between p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-green-500 px-3 py-1.5 text-xs font-bold text-white">
                    FEATURED CAMPAIGN
                  </span>
                  <BadgePercent className="text-green-400" size={28} />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                    Special Shopping Festival
                  </p>

                  <h2 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
                    11.11
                    <span className="block text-green-400">
                      MEGA SALE
                    </span>
                  </h2>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
                    Your favorite technology, exciting deals and
                    exclusive savings in one place.
                  </p>

                  <a
                    href="#all-offers"
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-400"
                  >
                    Explore Campaign
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Gift size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold">More Value</p>
                  <p className="text-xs text-slate-400">
                    Exclusive customer deals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK BENEFITS ================= */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {[
          {
            icon: Truck,
            title: "Free Delivery",
            description: "On selected products and orders.",
          },
          {
            icon: ShieldCheck,
            title: "Trusted Warranty",
            description: "Eligible official warranty coverage.",
          },
          {
            icon: Percent,
            title: "Flexible EMI",
            description: "Installment options on eligible products.",
          },
          {
            icon: Headphones,
            title: "Customer Support",
            description: "Help with your shopping experience.",
          },
        ].map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 transition hover:border-green-200 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <Icon size={23} />
            </div>
            <div>
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                {description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ================= CAMPAIGN GRID ================= */}
      <section id="all-offers" className="scroll-mt-24 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              Shop & Save
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Explore Our Offers
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Something special for every kind of tech enthusiast.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {offers.map((offer) => {
              const Icon = offer.icon;
              const theme = themeStyles[offer.theme];

              return (
                <article
                  key={offer.id}
                  className={`group relative min-h-[300px] overflow-hidden rounded-3xl ${theme.background}`}
                >
                  <img
                    src={offer.image}
                    alt={offer.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 group-hover:scale-105 group-hover:opacity-45"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/20" />

                  <div className="relative flex min-h-[300px] flex-col items-start justify-between p-6 sm:p-8">
                    <div className="flex w-full items-center justify-between">
                      <span className={`rounded-full px-3 py-1.5 text-xs font-bold ${theme.badge}`}>
                        {offer.badge}
                      </span>
                      <Icon size={27} className={theme.accent} />
                    </div>

                    <div className="max-w-md">
                      <p className={`text-xs font-bold uppercase tracking-widest ${theme.accent}`}>
                        {offer.discount}
                      </p>

                      <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                        {offer.title}
                      </h3>

                      <p className="mt-2 text-sm font-semibold text-white/90">
                        {offer.subtitle}
                      </p>

                      <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
                        {offer.description}
                      </p>

                      <a
                        href={offer.link}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-green-500 hover:text-white"
                      >
                        {offer.cta}
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HAPPY HOURS ================= */}
      <section className="bg-[#f5f8f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              <Clock3 size={15} />
              Limited Time Deals
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Happy Hours.
              <span className="block text-green-600">
                Happier Shopping.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500">
              Catch special flash deals on selected tech products
              during our Happy Hours campaign. Great products,
              limited quantities and extra savings.
            </p>

            <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <Clock3 className="text-green-600" size={24} />
                <p className="mt-4 text-sm font-bold">Special Hours</p>
                <p className="mt-2 text-lg font-extrabold">
                  12 PM – 2 PM
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Example campaign window
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <Zap className="text-orange-500" size={24} />
                <p className="mt-4 text-sm font-bold">Flash Deals</p>
                <p className="mt-2 text-lg font-extrabold">
                  Limited
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Selected products only
                </p>
              </div>
            </div>

            <a
              href="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green-600"
            >
              Explore Flash Deals
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1000&q=85"
              alt="Electronics flash deals"
              loading="lazy"
              className="h-[380px] w-full object-cover opacity-55"
            />

            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-7 sm:p-10">
              <span className="w-fit rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white">
                HAPPY HOURS
              </span>

              <h3 className="mt-4 text-3xl font-extrabold text-white">
                Your Favorite Tech.
                <span className="block text-green-400">
                  Better Prices.
                </span>
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
                Check back during campaign hours for selected
                limited-time offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 0% EMI ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#173451]">
            <div className="grid items-center lg:grid-cols-2">
              <div className="p-7 sm:p-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-blue-200">
                  <Percent size={16} />
                  SMART PAYMENT SOLUTION
                </span>

                <h2 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
                  0% EMI
                  <span className="block text-blue-200">
                    More Freedom.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-blue-100/70">
                  Upgrade your tech without paying everything at once.
                  Enjoy eligible installment options through participating
                  banks and payment partners.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-extrabold text-white">
                      0%
                    </p>
                    <p className="mt-1 text-xs text-blue-100/60">
                      Interest on eligible plans
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-extrabold text-white">
                      Easy
                    </p>
                    <p className="mt-1 text-xs text-blue-100/60">
                      Monthly installments
                    </p>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-green-400"
                >
                  Ask About EMI
                  <ArrowRight size={17} />
                </a>

                <p className="mt-5 text-xs leading-5 text-blue-100/50">
                  Terms, tenure, minimum purchase value and eligible
                  bank cards apply. Confirm current availability
                  before advertising this offer.
                </p>
              </div>

              <div className="relative hidden h-full min-h-[470px] lg:block">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000&q=85"
                  alt="Premium laptop purchase"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#173451] via-[#173451]/20 to-transparent" />
                <div className="absolute bottom-10 right-10 rounded-2xl border border-white/20 bg-slate-950/70 p-5 text-white backdrop-blur">
                  <p className="text-xs text-blue-200">
                    Upgrade Your Setup
                  </p>
                  <p className="mt-1 text-xl font-extrabold">
                    Pay Your Way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STUDENT PC BUILD ================= */}
      <section className="bg-[#f5f8f6] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1000&q=85"
              alt="Custom gaming PC build"
              loading="lazy"
              className="h-[420px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7">
              <span className="rounded-full bg-green-500 px-3 py-1.5 text-xs font-bold text-white">
                STUDENT SPECIAL
              </span>
              <h3 className="mt-4 text-3xl font-extrabold text-white">
                Build Your Dream PC.
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Your success. Your setup. Your future.
              </p>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              <GraduationCap size={18} />
              SSC & HSC Special
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              Your Results Deserve
              <span className="block text-green-600">
                Something Special.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Celebrate your academic achievement with a PC
              that supports your next journey. Explore custom
              desktop builds for studying, programming,
              creative work and gaming.
            </p>

            <div className="mt-7 space-y-4">
              {[
                {
                  icon: Monitor,
                  title: "Custom PC Builds",
                  text: "Configurations for different budgets and needs.",
                },
                {
                  icon: Laptop,
                  title: "Student-Friendly Options",
                  text: "Practical choices for study and productivity.",
                },
                {
                  icon: ShieldCheck,
                  title: "Build Guidance",
                  text: "Get help selecting compatible components.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-green-600 shadow-sm">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/contact?subject=Student%20PC%20Build"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green-700"
            >
              Get Your Custom PC Build
              <ArrowRight size={17} />
            </a>

            <p className="mt-4 text-xs text-slate-400">
              Campaign eligibility and student verification may apply.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DEAL PRODUCTS ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                Handpicked Savings
              </span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Deals Worth Exploring
              </h2>
              <p className="mt-3 text-sm text-slate-500">
                Discover selected products with special promotional prices.
              </p>
            </div>

            <a
              href="/shop"
              className="inline-flex items-center gap-2 text-sm font-bold text-green-700 transition hover:text-green-900"
            >
              View All Products
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Filters */}
          <div className="mt-9 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-green-600 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-green-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="relative overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1.5 text-xs font-bold text-white">
                      {product.discount}% OFF
                    </span>

                    <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                      {product.tag}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {product.brand}
                    </p>
                    <h3 className="mt-2 min-h-12 font-bold text-slate-900">
                      {product.name}
                    </h3>

                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-xl font-extrabold text-green-700">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-xs text-slate-400 line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                      <span className="text-xs font-semibold text-green-600">
                        Save {formatPrice(product.oldPrice - product.price)}
                      </span>
                    </div>

                    <a
                      href="/shop"
                      className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-bold text-white transition hover:bg-green-600"
                    >
                      Shop Now
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full rounded-2xl border border-slate-100 bg-slate-50 py-12 text-center">
                <ShoppingBag className="mx-auto text-slate-300" size={35} />
                <p className="mt-3 font-semibold">No deals in this category yet.</p>
                <p className="mt-1 text-sm text-slate-500">
                  Check back for upcoming offers.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= COUPON CODES ================= */}
      <section
        id="coupon-codes"
        className="scroll-mt-24 bg-[#f5f8f6] py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              Extra Savings
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Grab Your Coupon
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-500">
              Use available promotional codes at checkout to enjoy
              additional benefits on eligible purchases.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {coupons.map((coupon) => (
              <article
                key={coupon.code}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="absolute -right-5 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#f5f8f6]" />
                <div className="absolute -left-5 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#f5f8f6]" />

                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Tag size={22} />
                  </div>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    Promo Code
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-extrabold">
                  {coupon.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {coupon.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-dashed border-green-300 bg-green-50/50 p-3">
                  <span className="text-sm font-extrabold tracking-widest text-green-800">
                    {coupon.code}
                  </span>

                  <button
                    onClick={() => handleCopy(coupon.code)}
                    className="flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-green-700"
                  >
                    {copiedCode === coupon.code ? (
                      <>
                        <Check size={14} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                <p className="mt-4 text-xs text-slate-400">
                  {coupon.condition}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-5 py-20 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center sm:px-12">
          <div className="absolute -right-20 -top-40 h-96 w-96 rounded-full bg-green-500/20 blur-[100px]" />
          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-[90px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
              <Gift size={27} />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
              Great Tech. Greater Deals.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Find your next favorite gadget and enjoy more value
              with GadgetGoods special promotions.
            </p>

            <a
              href="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-3.5 font-bold text-white transition hover:bg-green-400"
            >
              Start Shopping
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Offers;
