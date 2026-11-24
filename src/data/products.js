
export const products = [
  {
    id: "gadget-001",
    name: "Apple iPhone 15 Pro Max",
    brand: "Apple",
    category: "Smartphones",
    price: 145000,
    oldPrice: 165000,
    rating: 4.9,
    reviews: 128,
    badge: "Best Seller",
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=85",
    description: "Premium smartphone with advanced camera and performance.",
    createdAt: "2026-10-20",
    specifications: {
      ram: "8GB",
      storageCapacity: "256GB",
      processorBrand: "Apple",
      processorSeries: "Apple A17 Pro",
      operatingSystem: "iOS",
      screenSize: "6.7",
      graphicsType: "Integrated",
    },
  },
  {
    id: "gadget-002",
    name: "MacBook Pro 14-inch",
    brand: "Apple",
    category: "Laptops",
    price: 195000,
    oldPrice: 215000,
    rating: 4.9,
    reviews: 96,
    badge: "Popular",
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=85",
    description: "Powerful laptop for professional work and creativity.",
    createdAt: "2026-10-25",
    specifications: {
      ram: "16GB",
      storageType: "SSD",
      storageCapacity: "512GB",
      processorBrand: "Apple",
      processorSeries: "Apple M3",
      operatingSystem: "macOS",
      graphicsType: "Integrated",
      gpuBrand: "Apple",
      screenSize: "14.1 - 15",
    },
  },
  {
    id: "gadget-003",
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Accessories",
    price: 28999,
    oldPrice: 34999,
    rating: 4.8,
    reviews: 84,
    badge: "Hot Deal",
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
    description: "Premium wireless headphones with noise cancellation.",
    createdAt: "2026-10-28",
    specifications: {
      productType: "Headphones",
    },
  },
  {
    id: "gadget-004",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    price: 118000,
    oldPrice: 135000,
    rating: 4.8,
    reviews: 110,
    badge: "New Arrival",
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=85",
    description: "Flagship smartphone with advanced camera technology.",
    createdAt: "2026-10-29",
    specifications: {
      ram: "12GB",
      storageCapacity: "256GB",
      processorBrand: "Snapdragon",
      processorSeries: "Snapdragon 8 Gen 3",
      operatingSystem: "Android",
      screenSize: "6.8",
      graphicsType: "Integrated",
    },
  },
  {
    id: "gadget-005",
    name: "Gaming Mechanical Keyboard",
    brand: "Logitech",
    category: "Gaming",
    price: 6500,
    oldPrice: 8500,
    rating: 4.7,
    reviews: 72,
    badge: "Hot Deal",
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=700&q=85",
    description: "Mechanical keyboard designed for gaming enthusiasts.",
    createdAt: "2026-10-26",
    specifications: {
      productType: "Keyboard",
      compatibility: "PC",
    },
  },
  {
    id: "gadget-006",
    name: "Apple Watch Series 9",
    brand: "Apple",
    category: "Smart Watches",
    price: 42000,
    oldPrice: 48000,
    rating: 4.8,
    reviews: 64,
    badge: "Popular",
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=700&q=85",
    description: "Smartwatch with fitness tracking and smart features.",
    createdAt: "2026-10-24",
    specifications: {
      productType: "Smartwatch",
      operatingSystem: "watchOS",
    },
  },
  {
    id: "gadget-007",
    name: "ASUS ROG Gaming Laptop",
    brand: "ASUS",
    category: "Laptops",
    price: 165000,
    oldPrice: 185000,
    rating: 4.9,
    reviews: 58,
    badge: "Featured",
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=700&q=85",
    description: "High-performance laptop for gaming and productivity.",
    createdAt: "2026-10-27",
    specifications: {
      ram: "16GB",
      storageType: "SSD",
      storageCapacity: "1TB",
      processorBrand: "Intel",
      processorSeries: "Intel Core i7",
      operatingSystem: "Windows",
      graphicsType: "Dedicated",
      gpuBrand: "NVIDIA",
      screenSize: "16.1 - 17",
    },
  },
  {
    id: "gadget-008",
    name: "Canon EOS Mirrorless Camera",
    brand: "Canon",
    category: "Accessories",
    price: 89000,
    oldPrice: 99000,
    rating: 4.7,
    reviews: 43,
    badge: "New Arrival",
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85",
    description: "Professional camera for photography and content creation.",
    createdAt: "2026-10-30",
    specifications: {
      productType: "Camera",
    },
  },
];

export const categories = [
  "All Products",
  "Smartphones",
  "Laptops",
  "Desktop PCs",
  "Gaming",
  "Smart Watches",
  "Accessories",
  "PC Components",
];

export const brands = [
  "Apple",
  "Samsung",
  "Sony",
  "Logitech",
  "ASUS",
  "Canon",
];

// Category-specific banners and descriptions.
export const categoryConfig = {
  "All Products": {
    title: "Explore All Products",
    description:
      "Discover premium electronics, innovative gadgets and accessories designed to upgrade your digital lifestyle.",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1600&q=85",
  },
  Smartphones: {
    title: "Explore Smartphones",
    description:
      "Discover the latest smartphones with powerful performance, stunning cameras and innovative technology.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=85",
  },
  Laptops: {
    title: "Find Your Perfect Laptop",
    description:
      "Power your productivity, creativity and gaming with laptops built for every need.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=85",
  },
  "Desktop PCs": {
    title: "Powerful Desktop PCs",
    description:
      "Explore powerful desktop systems for professional work, entertainment and gaming.",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1600&q=85",
  },
  Gaming: {
    title: "Level Up Your Gaming",
    description:
      "Upgrade your gaming setup with performance-driven gaming gear and accessories.",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1600&q=85",
  },
  "Smart Watches": {
    title: "Smart Watches & Wearables",
    description:
      "Stay connected, track your fitness and simplify your everyday life.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=85",
  },
  Accessories: {
    title: "Essential Tech Accessories",
    description:
      "Complete your setup with premium accessories and everyday tech essentials.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=85",
  },
  "PC Components": {
    title: "Build Your Dream PC",
    description:
      "Discover quality PC components to build, customize and upgrade your setup.",
    image:
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1600&q=85",
  },
};

// Only relevant filters are displayed for each category.
export const categoryFilters = {
  Smartphones: [
    "processorBrand",
    "ram",
    "storageCapacity",
    "operatingSystem",
  ],
  Laptops: [
    "storageType",
    "processorBrand",
    "ram",
    "operatingSystem",
    "storageCapacity",
    "graphicsType",
    "screenSize",
    "gpuBrand",
    "processorSeries",
  ],
  "Desktop PCs": [
    "processorBrand",
    "ram",
    "storageType",
    "storageCapacity",
    "graphicsType",
    "gpuBrand",
    "processorSeries",
  ],
  Gaming: ["productType", "compatibility"],
  "Smart Watches": ["operatingSystem"],
  Accessories: ["productType"],
  "PC Components": [
    "processorBrand",
    "ram",
    "storageType",
    "storageCapacity",
    "graphicsType",
    "gpuBrand",
    "processorSeries",
  ],
};

// Filter labels and available options.
export const filterOptions = {
  storageType: {
    label: "Storage Type",
    options: ["SSD", "HDD"],
  },
  processorBrand: {
    label: "Processor Brand",
    options: ["Snapdragon", "Apple", "AMD", "Intel"],
  },
  ram: {
    label: "RAM",
    options: [
      "4GB",
      "8GB",
      "12GB",
      "16GB",
      "24GB",
      "32GB",
      "64GB",
    ],
  },
  operatingSystem: {
    label: "Operating System",
    options: [
      "Windows",
      "macOS",
      "Linux",
      "DOS",
      "Android",
      "iOS",
      "watchOS",
    ],
  },
  storageCapacity: {
    label: "Storage Capacity",
    options: [
      "128GB",
      "256GB",
      "512GB",
      "1TB",
      "2TB",
      "2TB+",
    ],
  },
  graphicsType: {
    label: "Graphics Type",
    options: ["Dedicated", "Integrated"],
  },
  screenSize: {
    label: "Screen Size",
    options: [
      "11 - 13",
      "13.1 - 14",
      "14.1 - 15",
      "15.1 - 16",
      "16.1 - 17",
      "17.1 & Above",
    ],
  },
  gpuBrand: {
    label: "GPU Brand",
    options: ["AMD Radeon", "NVIDIA", "Intel", "Qualcomm", "Apple"],
  },
  processorSeries: {
    label: "Processor Series",
    options: [
      "AMD Ryzen 9",
      "AMD Ryzen 7",
      "AMD Ryzen 5",
      "AMD Ryzen 3",
      "Intel Core 3",
      "Intel Core 5",
      "Intel Core 7",
      "Intel Core i3",
      "Intel Core i5",
      "Intel Core i7",
      "Intel Core i9",
      "Intel Core Ultra 5",
      "Intel Core Ultra 7",
      "Intel Core Ultra 9",
      "Apple M3",
      "Apple A17 Pro",
      "Snapdragon 8 Gen 3",
      "X Elite",
      "X Plus",
    ],
  },
  productType: {
    label: "Product Type",
    options: ["Headphones", "Keyboard", "Camera", "Smartwatch"],
  },
  compatibility: {
    label: "Compatibility",
    options: ["PC", "PlayStation", "Xbox", "Universal"],
  },
};
