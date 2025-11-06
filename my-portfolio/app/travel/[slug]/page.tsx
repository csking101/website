import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "rehype-toc";
import rehypeStringify from "rehype-stringify";

export default async function TripPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const notesDir = path.join(process.cwd(), "content/travel");
  const filePath = path.join(notesDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  const htmlContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeToc, { headings: ["h2", "h3"] })
    .use(rehypeStringify)
    .process(content);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <style>{`
        .travel-content h2 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.875rem;
          color: #1f2937;
        }
        .travel-content h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.75rem;
          color: #374151;
        }
        .travel-content h4 {
          font-size: 1rem;
          font-weight: 500;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: #374151;
        }
        .travel-content p {
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 1rem;
          color: #1f2937;
        }
        .travel-content ul,
        .travel-content ol {
          margin-bottom: 1rem;
          margin-left: 1.5rem;
        }
        .travel-content li {
          margin-bottom: 0.5rem;
          color: #1f2937;
        }
        .travel-content strong {
          font-weight: 700;
        }
        .travel-content em {
          font-style: italic;
        }
        .travel-content code {
          background-color: #f3f4f6;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: monospace;
          font-size: 0.875rem;
        }
        .travel-content pre {
          background-color: #1f2937;
          color: #f3f4f6;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin-bottom: 1rem;
        }
        .travel-content pre code {
          background-color: transparent;
          padding: 0;
          color: inherit;
        }
        .travel-content a {
          color: #1f2937;
          text-decoration: none;
        }
        .travel-content a:hover {
          color: #1f2937;
        }
        .travel-content blockquote {
          border-left: 4px solid #d1d5db;
          padding-left: 1rem;
          margin-left: 0;
          margin-bottom: 1rem;
          color: #6b7280;
        }
        .travel-toc {
          margin-bottom: 2rem;
          padding: 1rem;
          background-color: #f9fafb;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
        }
        .travel-toc h2 {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin-top: 0;
          margin-bottom: 1rem;
        }
        .travel-toc ul {
          margin: 0;
          padding-left: 1.5rem;
        }
        .travel-toc li {
          margin-bottom: 0.5rem;
        }
        .travel-toc a {
          color: #2563eb;
          text-decoration: none;
        }
        .travel-toc a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="mx-auto max-w-3xl mt-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            {data?.title || slug}
          </h1>
          {data?.location && (
            <p className="text-lg text-gray-600 mb-2">{data.location}</p>
          )}
          {data?.days && (
            <p className="text-gray-600 mb-2">{data.days}</p>
          )}
          {data?.date && (
            <time className="text-gray-600 block mb-4" dateTime={data.date}>
              {new Date(data.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          )}
          {data?.tags && Array.isArray(data.tags) && (
            <div className="flex flex-wrap gap-2">
              
              {data.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-white border border-gray-200 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <h1 className="mb-6 font-bold text-xl">Table of Contents</h1>
        <article
          className="travel-content"
          dangerouslySetInnerHTML={{ __html: String(htmlContent) }}
        />
      </div>
    </div>
  );
}