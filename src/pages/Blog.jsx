
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  CalendarDays,
  BookOpen,
} from "lucide-react";
import { blogs } from "../data/blogs";

const categories = [
  "All",
  ...new Set(blogs.map((blog) => blog.category)),
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  const featuredBlog = blogs.find((blog) => blog.featured) || blogs[0];

  const visibleBlogs =
    activeCategory === "All"
      ? filteredBlogs.filter((blog) => blog.id !== featuredBlog.id)
      : filteredBlogs;

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        {/* Page Heading */}
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            GadgetGoods Journal
          </span>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Explore the World of <span className="text-blue-600">Tech.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Discover tech guides, product comparisons, buying advice and
            the latest insights to make smarter technology decisions.
          </p>
        </div>

        {/* Featured Article */}
        {activeCategory === "All" && featuredBlog && (
          <section className="mb-14">
            <div className="mb-5 flex items-center gap-2">
              <BookOpen size={18} className="text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">
                Featured Article
              </h2>
            </div>

            <article className="grid overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 md:grid-cols-2">
              <Link
                to={`/blog/${featuredBlog.slug}`}
                className="group relative min-h-[250px] overflow-hidden sm:min-h-[340px]"
              >
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                <span className="w-fit rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-600">
                  {featuredBlog.category}
                </span>

                <h2 className="mt-5 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                  {featuredBlog.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {featuredBlog.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    {featuredBlog.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock3 size={14} />
                    {featuredBlog.readTime}
                  </span>
                </div>

                <Link
                  to={`/blog/${featuredBlog.slug}`}
                  className="group mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Read Full Article
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </article>
          </section>
        )}

        {/* Blog Section Heading */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Explore our latest tech guides and insights.
            </p>
          </div>

          <span className="text-xs font-medium text-gray-400">
            {filteredBlogs.length} Articles
          </span>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        {visibleBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {visibleBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50"
              >
                <Link
                  to={`/blog/${blog.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-gray-100"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-blue-600 shadow-sm backdrop-blur-sm">
                    {blog.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={13} />
                      {blog.date}
                    </span>

                    <span className="flex items-center gap-1">
                      <Clock3 size={13} />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-snug text-gray-900 transition group-hover:text-blue-600">
                    <Link to={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto pt-5">
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-gray-900 transition hover:text-blue-600"
                    >
                      Read More
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-gray-50 py-16 text-center">
            <p className="text-sm text-gray-500">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
