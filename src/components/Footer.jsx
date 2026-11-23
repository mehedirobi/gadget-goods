
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Smartphone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const supportLinks = [
    { name: "FAQs", path: "/faq" },
    { name: "Shipping Information", path: "/shipping" },
    { name: "Returns & Refunds", path: "/returns" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com",
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white text-gray-600">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-12 lg:px-8 lg:py-16">

        {/* Brand Section */}
        <div className="sm:col-span-2 lg:col-span-1">

          {/* Brand Logo - Matching Navbar */}
          <Link
            to="/"
            aria-label="GadgetGoods home"
            className="group inline-flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-600/20 transition-transform duration-300 group-hover:scale-105">
              <Smartphone
                size={21}
                strokeWidth={2.2}
              />
            </div>

            <span className="text-[20px] font-extrabold tracking-tight text-gray-900 sm:text-[22px]">
              Gadget<span className="text-blue-600">Goods</span>
            </span>
          </Link>

          {/* Description */}
          <p className="mt-5 max-w-xs text-sm leading-7 text-gray-500">
            Discover quality electronics and innovative gadgets.
            Find the right technology to upgrade your everyday life.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ name, icon: Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit GadgetGoods on ${name}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-sm font-bold tracking-wide text-gray-950">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="group inline-flex items-center gap-1 text-sm text-gray-500 transition-colors duration-200 hover:text-blue-600"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="mb-5 text-sm font-bold tracking-wide text-gray-950">
            Customer Support
          </h3>

          <ul className="space-y-3">
            {supportLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="group inline-flex items-center gap-1 text-sm text-gray-500 transition-colors duration-200 hover:text-blue-600"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-5 text-sm font-bold tracking-wide text-gray-950">
            Get in Touch
          </h3>

          <ul className="space-y-4">

            {/* Location */}
            <li className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <MapPin size={17} />
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-900">
                  Our Location
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Dhaka, Bangladesh
                </p>
              </div>
            </li>

            {/* Phone */}
            <li className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Phone size={16} />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-900">
                  Call Us
                </p>

                <a
                  href="tel:+8801336458100"
                  className="mt-1 inline-block text-sm text-gray-500 transition-colors hover:text-blue-600"
                >
                  +8801336458100
                </a>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Mail size={17} />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-900">
                  Email Us
                </p>

                <a
                  href="mailto:support@gadgetgoods.com"
                  className="mt-1 inline-block break-all text-sm text-gray-500 transition-colors hover:text-blue-600"
                >
                  support@gadgetgoods.com
                </a>
              </div>
            </li>
          </ul>

          {/* Contact CTA */}
          <Link
            to="/contact"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
          >
            Contact Us

            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-gray-50/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">

          <p className="text-xs font-medium text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-gray-700">
              GadgetGoods
            </span>
            . All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
            Upgrade Your Digital World.

            <ArrowUpRight
              size={13}
              className="text-blue-600"
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
