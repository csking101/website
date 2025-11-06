// app/notes/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";

export default async function NotePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const notesDir = path.join(process.cwd(), "content/notes");
  const filePath = path.join(notesDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);

  const rendered = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: { className: ["hover:opacity-60", "transition"] },
    })
    .use(rehypeStringify)
    .process(content);

  const html = String(rendered);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* Back Button */}
        <a
          href="/notes"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to Notes
        </a>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {data?.title ?? slug}
          </h1>
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
        <style>{`
          .markdown-content h1 {
            font-size: 2.25rem;
            font-weight: 700;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
            color: #111827;
          }
          .markdown-content h2 {
            font-size: 1.875rem;
            font-weight: 700;
            margin-top: 1.5rem;
            margin-bottom: 0.875rem;
            color: #1f2937;
          }
          .markdown-content h3 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 1.25rem;
            margin-bottom: 0.75rem;
            color: #374151;
          }
          .markdown-content h4 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-top: 1rem;
            margin-bottom: 0.5rem;
            color: #374151;
          }
          .markdown-content p {
            font-size: 1rem;
            line-height: 1.75;
            margin-bottom: 1rem;
            color: #1f2937;
          }
          .markdown-content ul,
          .markdown-content ol {
            margin-bottom: 1rem;
            margin-left: 1.5rem;
          }
          .markdown-content li {
            margin-bottom: 0.5rem;
            color: #1f2937;
          }
          .markdown-content strong {
            font-weight: 700;
          }
          .markdown-content em {
            font-style: italic;
          }
          .markdown-content code {
            background-color: #f3f4f6;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-family: monospace;
            font-size: 0.875rem;
          }
          .markdown-content pre {
            background-color: #1f2937;
            color: #f3f4f6;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin-bottom: 1rem;
          }
          .markdown-content pre code {
            background-color: transparent;
            padding: 0;
            color: inherit;
          }
          .markdown-content a {
            // color: #2563eb;
            // text-decoration: underline;
          }
          .markdown-content a:hover {
            // color: #1d4ed8;
          }
          .markdown-content blockquote {
            border-left: 4px solid #d1d5db;
            padding-left: 1rem;
            margin-left: 0;
            margin-bottom: 1rem;
            color: #6b7280;
          }
        `}</style>
        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}