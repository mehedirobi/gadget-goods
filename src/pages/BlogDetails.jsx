
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Tag,
} from "lucide-react";
import { blogs } from "../data/blogs";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Article Not Found
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          The article you're looking for doesn't exist.
        </p>

        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </main>
    );
  }

  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.id !== blog.id && item.category === blog.category
    )
    .slice(0, 3);

  const fallbackBlogs =
    relatedBlogs.length > 0
      ? relatedBlogs
      : blogs.filter((item) => item.id !== blog.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1100px] px-4 py-8 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="transition hover:text-blue-600">
            Home
          </Link>

          <span>/</span>

          <Link to="/blog" className="transition hover:text-blue-600">
            Blog
          </Link>

          <span>/</span>

          <span className="max-w-[200px] truncate text-gray-700">
            {blog.title}
          </span>
        </div>

        {/* Article Header */}
        <header className="mx-auto max-w-[850px]">
          <Link
            to="/blog"
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-blue-600 transition hover:text-blue-700"
          >
            <ArrowLeft size={15} />
            Back to Articles
          </Link>

          <span className="block text-xs font-bold uppercase tracking-widest text-blue-600">
            {blog.category}
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>

          <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
            {blog.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-gray-100 py-4 text-xs text-gray-500">
            <span className="font-semibold text-gray-800">
              {blog.author}
            </span>

            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} />
              {blog.date}
            </span>

            <span className="flex items-center gap-1.5">
              <Clock3 size={14} />
              {blog.readTime}
            </span>
          </div>
        </header>

        {/* Cover Image */}
        <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="mx-auto mt-10 max-w-[760px]">
          <article className="space-y-6">
            {blog.content.map((block, index) => {
              if (block.type === "intro") {
                return (
                  <p
                    key={index}
                    className="text-base font-medium leading-8 text-gray-700 sm:text-lg"
                  >
                    {block.text}
                  </p>
                );
              }

              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="pt-3 text-xl font-bold text-gray-900 sm:text-2xl"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="text-sm leading-8 text-gray-600 sm:text-base"
                  >
                    {block.text}
                  </p>
                );
              }

              if (block.type === "list") {
                return (
                  <ul
                    key={index}
                    className="list-disc space-y-3 pl-6 text-sm leading-7 text-gray-600 sm:text-base"
                  >
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "callout") {
                return (
                  <div
                    key={index}
                    className="rounded-xl border-l-4 border-blue-600 bg-blue-50 px-5 py-4"
                  >
                    <p className="text-sm leading-7 text-gray-700">
                      {block.text}
                    </p>
                  </div>
                );
              }

              return null;
            })}
          </article>

          {/* Article Footer */}
          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                <Tag size={15} className="text-blue-600" />
                {blog.category}
              </div>

              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
              >
                More Articles
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {fallbackBlogs.length > 0 && (
          <section className="mt-16 border-t border-gray-100 pt-10">
            <div className="mb-7">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Keep Exploring
              </span>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                Related Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fallbackBlogs.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-100 transition hover:shadow-lg"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      {item.category}
                    </span>

                    <h3 className="mt-2 font-bold leading-snug text-gray-900 transition group-hover:text-blue-600">
                      {item.title}
                    </h3>

                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-gray-500">
                      Read Article
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default BlogDetails;
