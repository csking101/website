// This would normally fetch the actual blog post content
// For now, we'll show a template structure

export default function BlogPost({ params }: { params: { slug: string } }) {
  // In a real app, you'd fetch the post data based on params.slug
  const post = {
    title: 'Building Scalable Web Applications with Next.js',
    date: '2024-10-15',
    readTime: '8 min read',
    tags: ['Next.js', 'Web Development', 'React'],
    content: `
      This is where your actual blog post content would go. You can write in Markdown 
      and use a library like next-mdx-remote or react-markdown to render it.
      
      You could also fetch this from a headless CMS like Contentful or Sanity.
    `,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <article className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <a
            href="/blogs"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to Thoughts
          </a>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-white border border-gray-200 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="whitespace-pre-wrap text-gray-700">
              {post.content}
            </div>

            {/* This is where you'd render your MDX/Markdown content */}
            {/* Example with react-markdown: */}
            {/* <ReactMarkdown>{post.content}</ReactMarkdown> */}
          </div>

          {/* Share/Actions (Optional) */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              Thanks for reading! Feel free to share your thoughts.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

// This tells Next.js to generate static pages for all blog posts at build time
export async function generateStaticParams() {
  // In a real app, you'd fetch all blog post slugs
  return [
    { slug: 'building-scalable-web-apps' },
    { slug: 'future-of-ai-in-software' },
    { slug: 'learning-rust-journey' },
    // ... other slugs
  ];
}