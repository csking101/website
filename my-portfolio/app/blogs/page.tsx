import { getContentItems, calculateReadTime } from "@/lib/content";
import fs from "fs";
import path from "path";

export default function BlogsPage() {
  const blogPosts = getContentItems("blogs");

  // Calculate read time for each post
  const postsWithReadTime = blogPosts.map((post) => {
    const filePath = path.join(process.cwd(), `content/blogs/${post.slug}.md`);
    const content = fs.readFileSync(filePath, "utf8");
    const readTime = calculateReadTime(content);
    return { ...post, readTime };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <div className="mx-auto mb-12 flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thoughts
          </h1>
          <p className="text-xl text-gray-600">
            Ideas, learnings, and reflections on technology, design, and life.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {postsWithReadTime.length > 0 ? (
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postsWithReadTime.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col"
              >
                <a href={`/blogs/${post.slug}`} className="flex flex-col h-full">
                  {/* Content */}
                  <div className="p-6 flex-grow">
                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.metadata.title}
                    </h2>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Tags */}
                    {post.metadata.tags && post.metadata.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.metadata.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <time dateTime={post.metadata.date}>
                      {new Date(post.metadata.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span>{post.readTime}</span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No thoughts yet
            </h3>
            <p className="text-gray-600">
              Check back soon for new posts and reflections!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
