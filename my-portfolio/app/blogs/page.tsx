// This would normally fetch from your content source (files, CMS, etc.)
// For now, we'll use sample data
const blogPosts = [
  {
    id: '1',
    title: 'Building Scalable Web Applications with Next.js',
    description: 'Exploring the power of server-side rendering and how Next.js makes building performant web apps a breeze.',
    date: '2024-10-15',
    readTime: '8 min read',
    tags: ['Next.js', 'Web Development', 'React'],
    slug: 'building-scalable-web-apps',
  },
  {
    id: '2',
    title: 'The Future of AI in Software Development',
    description: 'How artificial intelligence is transforming the way we write code and build applications.',
    date: '2024-09-22',
    readTime: '6 min read',
    tags: ['AI', 'Machine Learning', 'Future Tech'],
    slug: 'future-of-ai-in-software',
  },
  {
    id: '3',
    title: 'My Journey Learning Rust',
    description: 'Lessons learned while diving into systems programming and why Rust is worth the learning curve.',
    date: '2024-08-10',
    readTime: '10 min read',
    tags: ['Rust', 'Programming', 'Learning'],
    slug: 'learning-rust-journey',
  },
  {
    id: '4',
    title: 'Designing Better User Experiences',
    description: 'Key principles and practical tips for creating intuitive and delightful user interfaces.',
    date: '2024-07-05',
    readTime: '5 min read',
    tags: ['UX', 'Design', 'Frontend'],
    slug: 'designing-better-ux',
  },
  {
    id: '5',
    title: 'Reflections on Building in Public',
    description: 'What I learned from sharing my projects and journey openly with the developer community.',
    date: '2024-06-18',
    readTime: '7 min read',
    tags: ['Community', 'Building', 'Reflection'],
    slug: 'building-in-public',
  },
  {
    id: '6',
    title: 'Database Design Best Practices',
    description: 'A practical guide to designing efficient and maintainable database schemas.',
    date: '2024-05-30',
    readTime: '12 min read',
    tags: ['Database', 'Backend', 'Architecture'],
    slug: 'database-design-best-practices',
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thoughts
          </h1>
          <p className="text-xl text-gray-600">
            Ideas, learnings, and reflections on technology, design, and life.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col"
            >
              <a href={`/blogs/${post.slug}`} className="flex flex-col h-full">
                {/* Content */}
                <div className="p-6 flex-grow">
                  {/* Title */}
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
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

        {/* Empty State (if no posts) */}
        {blogPosts.length === 0 && (
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