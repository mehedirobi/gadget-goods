
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Headphones,
  Laptop,
  Menu,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Upload,
  X,
  ImagePlus,
  Trash2,
  Truck,
  Zap,
  Monitor,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    brand: "Apple",
    category: "Smartphones",
    description: "The next level of performance, photography and innovation.",
    price: 189999,
    oldPrice: 199999,
    releaseDate: "December 15, 2026",
    status: "Pre-Order Open",
    badge: "Most Anticipated",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=900&q=85",
  },
  {
    id: 2,
    name: "Samsung Galaxy S26 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    description: "Powerful AI experiences with an extraordinary display.",
    price: 169999,
    oldPrice: 179999,
    releaseDate: "December 20, 2026",
    status: "Pre-Order Open",
    badge: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&q=85",
  },
  {
    id: 3,
    name: "MacBook Pro M5",
    brand: "Apple",
    category: "Laptops",
    description: "Unmatched performance for creators and professionals.",
    price: 249999,
    oldPrice: 269999,
    releaseDate: "January 05, 2027",
    status: "Coming Soon",
    badge: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&q=85",
  },
  {
    id: 4,
    name: "Sony WH-1000XM6",
    brand: "Sony",
    category: "Gadgets",
    description: "Premium noise cancellation and immersive sound.",
    price: 42999,
    oldPrice: 46999,
    releaseDate: "December 25, 2026",
    status: "Pre-Order Open",
    badge: "Exclusive",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&q=85",
  },
  {
    id: 5,
    name: "ASUS ROG Gaming Laptop",
    brand: "ASUS",
    category: "Laptops",
    description: "Powerful gaming performance built for the next generation.",
    price: 189999,
    oldPrice: 199999,
    releaseDate: "January 12, 2027",
    status: "Pre-Order Open",
    badge: "Gaming Pick",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=900&q=85",
  },
  {
    id: 6,
    name: "Apple Watch Ultra",
    brand: "Apple",
    category: "Gadgets",
    description: "Built for adventure. Engineered for performance.",
    price: 89999,
    oldPrice: 94999,
    releaseDate: "January 20, 2027",
    status: "Coming Soon",
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=900&q=85",
  },
];

const categories = [
  "All Products",
  "Smartphones",
  "Laptops",
  "Gadgets",
];

const benefits = [
  {
    icon: Zap,
    title: "Exclusive Launch Offers",
    description:
      "Get access to special pricing and exclusive pre-order deals.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Pre-Ordering",
    description:
      "A transparent ordering process with customer information protection.",
  },
  {
    icon: Truck,
    title: "Priority Delivery",
    description:
      "Get your selected product as soon as it becomes available.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Product",
    description:
      "Explore upcoming gadgets and select the product you want.",
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Submit Your Details",
    description:
      "Complete the pre-order form with your contact and delivery information.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Get Your Product",
    description:
      "Our team will contact you and arrange the next steps for delivery.",
    icon: Truck,
  },
];

const formatPrice = (price) =>
  `৳${price.toLocaleString("en-BD")}`;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  note: "",
};

const PreOrder = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState(initialForm);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageError, setImageError] = useState("");
  const [formError, setFormError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileInputRef = useRef(null);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const matchesSearch = `${product.name} ${product.brand}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, searchTerm, sortBy]);

  const openPreOrder = (product) => {
    setSelectedProduct(product);
    setFormData(initialForm);
    setSelectedImage(null);
    setImageError("");
    setFormError("");
    setIsSubmitted(false);
    document.body.style.overflow = "hidden";
  };

  const closePreOrder = () => {
    setSelectedProduct(null);
    setSelectedImage(null);
    setImageError("");
    setFormError("");
    setIsSubmitted(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!selectedProduct) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") closePreOrder();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProduct]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setImageError("Please upload a valid image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setImageError("Image size must be less than 5MB.");
      return;
    }

    setImageError("");
    setSelectedImage(file);
  };

  const handleFileChange = (event) => {
    handleImage(event.target.files?.[0]);
    event.target.value = "";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    handleImage(event.dataTransfer.files?.[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError("");

    if (!selectedImage) {
      setImageError("Please upload a product/reference image.");
      return;
    }

    const phone = formData.phone.replace(/[\s-]/g, "");

    if (!/^(?:\+?8801|01)[3-9]\d{8}$/.test(phone)) {
      setFormError("Please enter a valid Bangladesh phone number.");
      return;
    }

    const orderData = new FormData();

    orderData.append("productId", selectedProduct.id);
    orderData.append("productName", selectedProduct.name);
    orderData.append("name", formData.name);
    orderData.append("email", formData.email);
    orderData.append("phone", formData.phone);
    orderData.append("address", formData.address);
    orderData.append("note", formData.note);
    orderData.append("productImage", selectedImage);

    // Connect your backend API here.
    console.log("Pre-order submission:", Object.fromEntries(orderData));

    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#f5f8f5]">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-green-200/40 blur-[100px]" />
        <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-emerald-100/60 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-green-700 shadow-sm">
              <Sparkles size={14} />
              GadgetGoods Pre-Order
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Be First.
              <span className="block text-green-600">
                Own the Future.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
              Discover the next generation of technology before
              everyone else. Reserve upcoming smartphones, laptops
              and premium gadgets with exclusive launch offers.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#upcoming-products"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5 hover:bg-green-700"
              >
                Explore Products
                <ArrowRight size={18} />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-green-300 hover:text-green-700"
              >
                How It Works
              </a>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-5 border-t border-slate-200 pt-8">
              <div>
                <p className="text-2xl font-extrabold">01</p>
                <p className="mt-1 text-xs text-slate-500">
                  Early Access
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold">100%</p>
                <p className="mt-1 text-xs text-slate-500">
                  Secure Process
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold">24/7</p>
                <p className="mt-1 text-xs text-slate-500">
                  Online Support
                </p>
              </div>
            </div>
          </div>

          {/* Hero Featured Product */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-green-300/40 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-4 shadow-2xl shadow-slate-300/40 sm:p-6">
              <div className="flex items-center justify-between px-2 py-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-green-600">
                    Featured Product
                  </p>
                  <h2 className="mt-1 text-lg font-bold">
                    {products[0].name}
                  </h2>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                  Pre-Order
                </span>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={products[0].image}
                  alt={products[0].name}
                  className="h-72 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex items-end justify-between gap-3 px-2 pb-2 pt-5">
                <div>
                  <p className="text-xs text-slate-400">
                    Exclusive Pre-Order Price
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-green-600">
                    {formatPrice(products[0].price)}
                  </p>
                  <p className="mt-1 text-xs text-slate-400 line-through">
                    {formatPrice(products[0].oldPrice)}
                  </p>
                </div>

                <button
                  onClick={() => openPreOrder(products[0])}
                  className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                >
                  Reserve Now
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </div>

            <div className="absolute -left-5 top-1/3 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Zap size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold">Early Access</p>
                  <p className="text-xs text-slate-400">
                    Be ahead of the crowd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-slate-200/40"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
              <Icon size={23} />
            </div>

            <div>
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ================= PRODUCTS ================= */}
      <section
        id="upcoming-products"
        className="scroll-mt-24 bg-[#f8faf9] py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                Discover What's Next
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Upcoming Products
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
                Explore the latest upcoming tech products and reserve
                your favorites before their official launch.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4">
                <Search size={17} className="text-slate-400" />
                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400 sm:w-48"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-green-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-9 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-green-600 text-white shadow-md shadow-green-600/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-green-300 hover:text-green-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Cards */}
          {filteredProducts.length > 0 ? (
            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => {
                const discount = Math.round(
                  ((product.oldPrice - product.price) /
                    product.oldPrice) *
                    100
                );

                return (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-slate-200/60"
                  >
                    <div className="relative overflow-hidden bg-slate-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-green-700 shadow-sm">
                        {product.badge}
                      </span>

                      <span
                        className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${
                          product.status === "Pre-Order Open"
                            ? "bg-green-600 text-white"
                            : "bg-slate-900 text-white"
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>

                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {product.brand} · {product.category}
                      </p>

                      <h3 className="mt-2 text-lg font-bold transition group-hover:text-green-600">
                        {product.name}
                      </h3>

                      <p className="mt-2 min-h-10 text-sm leading-6 text-slate-500">
                        {product.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                        <div>
                          <p className="text-xs text-slate-400">
                            Pre-Order Price
                          </p>
                          <p className="mt-1 text-xl font-extrabold text-slate-900">
                            {formatPrice(product.price)}
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="text-xs text-slate-400 line-through">
                              {formatPrice(product.oldPrice)}
                            </span>
                            <span className="text-xs font-bold text-green-600">
                              {discount}% OFF
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <CalendarDays
                            size={17}
                            className="mb-1 ml-auto text-green-600"
                          />
                          <p className="text-xs text-slate-400">
                            Expected Launch
                          </p>
                          <p className="mt-1 text-xs font-semibold text-slate-700">
                            {product.releaseDate}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => openPreOrder(product)}
                        disabled={product.status === "Coming Soon"}
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                      >
                        {product.status === "Coming Soon"
                          ? "Coming Soon"
                          : "Pre-Order Now"}
                        <ArrowRight size={17} />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-slate-100 bg-white py-16 text-center">
              <Search size={36} className="mx-auto text-slate-300" />
              <h3 className="mt-4 font-bold">No products found</h3>
              <p className="mt-2 text-sm text-slate-500">
                Try another product name or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="scroll-mt-24 py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              Easy & Convenient
            </span>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              How Pre-Order Works
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-500">
              Getting your favorite upcoming gadget is simple.
              Follow these three easy steps.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-100 bg-white p-7 transition hover:border-green-200 hover:shadow-xl hover:shadow-slate-200/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Icon size={24} />
                  </div>
                  <span className="text-4xl font-extrabold text-slate-100">
                    {number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-slate-900 px-6 py-16 text-center sm:px-12">
          <div className="absolute -right-20 -top-40 h-96 w-96 rounded-full bg-green-500/20 blur-[100px]" />
          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-[90px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
              <Sparkles size={27} />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
              Your Next Gadget Awaits.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Don't wait for everyone else. Explore upcoming products
              and secure your favorite tech before the official launch.
            </p>

            <a
              href="#upcoming-products"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-3.5 font-bold text-white transition hover:bg-green-400"
            >
              Explore Products
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= PRE-ORDER MODAL ================= */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closePreOrder();
          }}
        >
          <div className="relative my-auto max-h-[95vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4 sm:px-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-green-600">
                  GadgetGoods
                </p>
                <h2 className="mt-1 text-lg font-extrabold">
                  Complete Your Pre-Order
                </h2>
              </div>

              <button
                onClick={closePreOrder}
                aria-label="Close pre-order form"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-red-50 hover:text-red-500"
              >
                <X size={20} />
              </button>
            </div>

            {isSubmitted ? (
              <div className="px-6 py-16 text-center sm:px-12">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={42} />
                </div>

                <h3 className="mt-6 text-2xl font-extrabold">
                  Request Submitted!
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
                  Your pre-order request for{" "}
                  <strong className="text-slate-800">
                    {selectedProduct.name}
                  </strong>{" "}
                  has been prepared successfully in this demo.
                  Our team will contact you after the order system
                  is connected.
                </p>

                <button
                  onClick={closePreOrder}
                  className="mt-8 rounded-xl bg-green-600 px-8 py-3 font-bold text-white transition hover:bg-green-700"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 sm:p-7">

                {/* Selected Product */}
                <div className="rounded-2xl border border-green-100 bg-green-50/60 p-4">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="h-32 w-full rounded-xl bg-white object-cover sm:w-36"
                    />

                    <div className="flex flex-1 flex-col justify-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-green-700">
                        Selected Product
                      </span>

                      <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                        {selectedProduct.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {selectedProduct.brand} · {selectedProduct.category}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <span className="text-xl font-extrabold text-green-700">
                          {formatPrice(selectedProduct.price)}
                        </span>

                        <span className="text-xs text-slate-400 line-through">
                          {formatPrice(selectedProduct.oldPrice)}
                        </span>
                      </div>

                      <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                        <CalendarDays size={14} />
                        Expected: {selectedProduct.releaseDate}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Customer Details */}
                <div className="mt-8">
                  <div className="mb-5">
                    <h3 className="text-base font-extrabold">
                      Customer Information
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Please provide your correct contact details.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="preorder-name"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="preorder-name"
                        name="name"
                        type="text"
                        required
                        minLength={2}
                        maxLength={100}
                        autoComplete="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="preorder-email"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="preorder-email"
                        name="email"
                        type="email"
                        required
                        maxLength={254}
                        autoComplete="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />
                    </div>

                    {/* Phone */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="preorder-phone"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="preorder-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+880 1XXX-XXXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />

                      <p className="mt-1.5 text-xs text-slate-400">
                        Use a valid Bangladesh mobile number.
                      </p>
                    </div>

                    {/* Address */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="preorder-address"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Delivery Address <span className="text-red-500">*</span>
                      </label>

                      <textarea
                        id="preorder-address"
                        name="address"
                        required
                        minLength={10}
                        maxLength={500}
                        rows={3}
                        autoComplete="street-address"
                        placeholder="House, Road, Area, City, District and Postal Code"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />
                    </div>

                    {/* Product Image Upload */}
                    <div className="sm:col-span-2">
                      <div className="mb-2 flex items-center justify-between">
                        <label className="text-sm font-semibold text-slate-700">
                          Upload Product Image{" "}
                          <span className="text-red-500">*</span>
                        </label>

                        <span className="text-xs text-slate-400">
                          PNG, JPG, WEBP · Max 5MB
                        </span>
                      </div>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                        onChange={handleFileChange}
                        className="hidden"
                      />

                      {selectedImage ? (
                        <div className="relative flex flex-col items-center gap-4 rounded-2xl border border-green-200 bg-green-50/50 p-4 sm:flex-row">
                          <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Uploaded product preview"
                            className="h-32 w-full rounded-xl object-cover sm:w-36"
                          />

                          <div className="flex-1 text-center sm:text-left">
                            <p className="break-all text-sm font-bold text-slate-800">
                              {selectedImage.name}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {(selectedImage.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                            <p className="mt-2 text-xs font-semibold text-green-600">
                              Image uploaded successfully
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setSelectedImage(null);
                              setImageError("");
                            }}
                            className="flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-100"
                          >
                            <Trash2 size={15} />
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div
                          onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                          }}
                          onDragLeave={() => setIsDragging(false)}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-5 py-10 text-center transition ${
                            isDragging
                              ? "border-green-500 bg-green-50"
                              : "border-slate-200 bg-slate-50 hover:border-green-400 hover:bg-green-50/50"
                          }`}
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                            <ImagePlus size={27} />
                          </div>

                          <p className="mt-4 text-sm font-bold text-slate-800">
                            Click to upload or drag and drop
                          </p>

                          <p className="mt-2 text-xs text-slate-400">
                            Upload your product/reference image here.
                          </p>

                          <span className="mt-4 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-green-700 shadow-sm">
                            Browse Files
                          </span>
                        </div>
                      )}

                      {imageError && (
                        <p className="mt-2 text-xs font-medium text-red-500">
                          {imageError}
                        </p>
                      )}
                    </div>

                    {/* Additional Note */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="preorder-note"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Additional Notes{" "}
                        <span className="font-normal text-slate-400">
                          (Optional)
                        </span>
                      </label>

                      <textarea
                        id="preorder-note"
                        name="note"
                        rows={3}
                        maxLength={500}
                        placeholder="Any specific requirements or questions?"
                        value={formData.note}
                        onChange={handleInputChange}
                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />
                    </div>
                  </div>
                </div>

                {formError && (
                  <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                    {formError}
                  </p>
                )}

                {/* Submit */}
                <div className="mt-8 border-t border-slate-100 pt-6">
                  <div className="flex items-start gap-2 text-xs leading-6 text-slate-500">
                    <ShieldCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-green-600"
                    />
                    By submitting this form, you agree to be contacted
                    regarding your pre-order request. This request does
                    not guarantee product availability or confirm payment.
                  </div>

                  <button
                    type="submit"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
                  >
                    Submit Pre-Order Request
                    <ArrowRight size={18} />
                  </button>

                  <p className="mt-3 text-center text-xs text-slate-400">
                    Our team will contact you to confirm your request.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default PreOrder;
