
import {
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  Cpu,
  Gamepad2,
  Watch,
  Headphones,
  Wifi,
} from "lucide-react";

export const categories = [
  {
    id: "smartphones",
    name: "Smartphones",
    slug: "smartphones",
    icon: Smartphone,
    description: "Discover the latest smartphones with powerful performance, stunning cameras and innovative technology.",
    featured: ["Apple", "Samsung", "Google", "Xiaomi", "OnePlus"],
  },
  {
    id: "tablets",
    name: "Tablets",
    slug: "tablets",
    icon: Tablet,
    description: "Powerful tablets for productivity, creativity, entertainment and everyday use.",
    featured: ["Apple", "Samsung", "Xiaomi", "Lenovo"],
  },
  {
    id: "laptops",
    name: "Laptops",
    slug: "laptops",
    icon: Laptop,
    description: "Explore premium laptops for professional work, study, creativity and gaming.",
    featured: ["Apple", "ASUS", "HP", "Dell", "Lenovo", "MSI"],
  },
  {
    id: "desktop-pcs",
    name: "Desktop PCs",
    slug: "desktop-pcs",
    icon: Monitor,
    description: "Discover powerful desktop computers, gaming rigs and professional workstations.",
    featured: ["Custom PC", "HP", "Dell", "Lenovo", "ASUS"],
  },
  {
    id: "pc-components",
    name: "PC Components",
    slug: "pc-components",
    icon: Cpu,
    description: "Build and upgrade your dream PC with high-performance components.",
    featured: ["Intel", "AMD", "NVIDIA", "ASUS", "Corsair", "Gigabyte"],
  },
  {
    id: "gaming",
    name: "Gaming",
    slug: "gaming",
    icon: Gamepad2,
    description: "Level up your gaming experience with premium gaming peripherals and gear.",
    featured: ["Logitech", "Razer", "SteelSeries", "Sony", "Microsoft"],
  },
  {
    id: "smart-watches",
    name: "Smart Watches",
    slug: "smart-watches",
    icon: Watch,
    description: "Stay connected, track your fitness and manage your everyday life with smart wearables.",
    featured: ["Apple", "Samsung", "Huawei", "Amazfit", "Xiaomi"],
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    icon: Headphones,
    description: "Complete your setup with premium headphones, chargers, keyboards and everyday essentials.",
    featured: ["Sony", "Anker", "JBL", "Logitech", "Baseus", "Canon"],
  },
  {
    id: "networking",
    name: "Networking",
    slug: "networking",
    icon: Wifi,
    description: "Build a reliable and faster network with modern routers, Wi-Fi systems and networking devices.",
    featured: ["TP-Link", "ASUS", "Netgear", "D-Link", "Tenda"],
  },
];

export const shopCategories = categories;

export const categoryNames = [
  "All Products",
  ...categories.map((category) => category.name),
];

export const getCategoryPath = (category) => {
  if (!category || category === "All Products") {
    return "/shop";
  }

  return `/shop?category=${encodeURIComponent(category)}`;
};

export const getCategoryBySlug = (slug) =>
  categories.find((category) => category.slug === slug);

export const getCategoryByName = (name) =>
  categories.find(
    (category) =>
      category.name.toLowerCase() === String(name).toLowerCase()
  );
