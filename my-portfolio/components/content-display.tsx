interface ContentMetadata {
  title?: string;
  date?: string;
  author?: string;
  readingTime?: string;
  wordCount?: number;
  updated?: string;
  tags?: string[];
  location?: string;
  days?: string;
  [key: string]: string | string[] | number | undefined;
}

interface ContentDisplayProps {
  htmlContent: string;
  metadata: ContentMetadata;
  type: "notes" | "travel" | "research" | "thoughts" | "project" | "hackathon";
  backLink: {
    href: string;
    label: string;
  };
  slug: string;
}

export default function ContentDisplay({
  htmlContent,
  metadata,
  type,
  backLink,
  slug,
}: ContentDisplayProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* Back Button */}
        <a
          href={backLink.href}
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
          {backLink.label}
        </a>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {metadata?.title ?? slug}
          </h1>

          {/* Type-specific fields */}
          {metadata?.location && (
            <p className="text-lg text-gray-600 mb-2">{metadata.location}</p>
          )}
          {metadata?.days && (
            <p className="text-gray-600 mb-2">{metadata.days}</p>
          )}

          {/* Primary meta (date) */}
          {metadata?.date && (
            <time
              className="text-gray-600 block mb-2"
              dateTime={metadata.date}
            >
              {new Date(metadata.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          )}

          {/* Extended metadata */}
          {(metadata?.author ||
            metadata?.readingTime ||
            typeof metadata?.wordCount === "number" ||
            (metadata?.updated && metadata?.updated !== metadata?.date)) && (
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
              {metadata.author && (
                <span className="inline-flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-4 0-7 2-7 4v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1c0-2-3-4-7-4Z"
                    />
                  </svg>
                  {metadata.author}
                </span>
              )}
              {metadata.readingTime && (
                <span className="inline-flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
                    />
                  </svg>
                  {metadata.readingTime}
                </span>
              )}
              {typeof metadata.wordCount === "number" && (
                <span>{metadata.wordCount} words</span>
              )}
              {metadata.updated &&
                metadata.updated !== metadata.date && (
                  <span className="inline-flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"
                      />
                    </svg>
                    Updated {metadata.updated}
                  </span>
                )}
            </div>
          )}

          {/* Tags */}
          {metadata?.tags && Array.isArray(metadata.tags) && (
            <div className="flex flex-wrap gap-2">
              {metadata.tags.map((tag: string) => (
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
          .content-markdown {
            font-size: 1rem;
            line-height: 1.75;
            color: #1f2937;
            word-wrap: break-word;
          }

          /* Headings (no section breaks / borders) */
          .content-markdown h1,
          .content-markdown h2,
          .content-markdown h3,
          .content-markdown h4 {
            scroll-margin-top: 6rem;
            position: relative;
            font-weight: 700;
            letter-spacing: -0.5px;
          }
          .content-markdown h1 {
            font-size: 2.4rem;
            margin-top: 2.4rem;
            margin-bottom: 1.15rem;
            color: #0f172a;
          }
          .content-markdown h2 {
            font-size: 1.9rem;
            margin-top: 2rem;
            margin-bottom: 0.9rem;
            color: #1e293b;
          }
          .content-markdown h3 {
            font-size: 1.4rem;
            margin-top: 1.6rem;
            margin-bottom: 0.7rem;
            color: #334155;
          }
          .content-markdown h4 {
            font-size: 1.15rem;
            margin-top: 1.4rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #475569;
          }

          /* Prevent autolink wrapped headings from changing color */
          .content-markdown h1 a,
          .content-markdown h2 a,
          .content-markdown h3 a,
          .content-markdown h4 a {
            color: inherit;
            text-decoration: none;
          }
          .content-markdown h1 a:hover,
          .content-markdown h2 a:hover,
          .content-markdown h3 a:hover,
          .content-markdown h4 a:hover {
            opacity: .8;
          }

          /* Paragraphs & lists */
          .content-markdown p { margin-bottom: 1.05rem; }
          .content-markdown ul,
          .content-markdown ol {
            margin-bottom: 1.15rem;
            margin-left: 1.4rem;
            padding-left: .25rem;
          }
          .content-markdown li { margin-bottom: .45rem; }
          .content-markdown ul li::marker { color: #64748b; }
          .content-markdown ol li::marker { color: #64748b; font-weight: 600; }

          /* Inline elements */
          .content-markdown strong { font-weight: 600; color: #0f172a; }
          .content-markdown em { font-style: italic; }

          /* Links */
          .content-markdown a {
            color: #0d66d9;
            text-decoration: none;
            border-bottom: 1px solid rgba(13,102,217,0.3);
            transition: color .15s, border-color .15s;
          }
          .content-markdown a:hover {
            color: #004ea8;
            border-color: rgba(0,78,168,0.5);
          }

          /* Code */
          .content-markdown code {
            background: #f1f5f9;
            padding: 0.25rem 0.45rem;
            border-radius: 0.35rem;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
            font-size: 0.85rem;
            border: 1px solid #e2e8f0;
          }
          .content-markdown pre {
            background: linear-gradient(135deg,#0f172a,#1e293b);
            color: #f1f5f9;
            padding: 1.05rem 1.15rem;
            border-radius: 0.7rem;
            overflow-x: auto;
            margin: 1.35rem 0;
            font-size: 0.9rem;
            box-shadow: inset 0 0 0 1px #334155,0 4px 12px -2px rgba(15,23,42,0.35);
          }
          .content-markdown pre code {
            background: transparent;
            padding: 0;
            border: 0;
            font-size: inherit;
            color: inherit;
          }

          /* Blockquote */
          .content-markdown blockquote {
            background: #f8fafc;
            border-left: 4px solid #3b82f6;
            padding: 0.85rem 1.1rem;
            margin: 1.3rem 0;
            color: #475569;
            border-radius: 0 0.5rem 0.5rem 0;
            position: relative;
          }
          .content-markdown blockquote p:last-child { margin-bottom: 0; }

          /* Remove section-break style from hr (make subtle or unused) */
          .content-markdown hr {
            margin: 2rem 0;
            border: 0;
            height: 1px;
            background: #e5e7eb;
          }

          /* Tables */
          .content-markdown table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.35rem 0;
            font-size: 0.9rem;
          }
          .content-markdown th,
          .content-markdown td {
            border: 1px solid #e2e8f0;
            padding: 0.55rem 0.7rem;
            text-align: left;
            vertical-align: top;
          }
          .content-markdown th {
            background: #f1f5f9;
            font-weight: 600;
            color: #0f172a;
          }
          .content-markdown tbody tr:nth-child(odd) td { background: #fafafa; }

          /* Images */
          .content-markdown img {
            max-width: 100%;
            height: auto;
            border-radius: 0.7rem;
            margin: 1.15rem auto;
            display: block;
            box-shadow: 0 4px 18px -4px rgba(0,0,0,0.18);
          }

          /* First child spacing */
          .content-markdown > :first-child { margin-top: 0; }

          /* Callouts */
          .content-markdown .callout {
            padding: 0.95rem 1.05rem;
            border: 1px solid #e2e8f0;
            background: #f8fafc;
            border-left: 4px solid #0d66d9;
            border-radius: 0.5rem;
            margin: 1.4rem 0;
          }

          /* Responsive */
          @media (max-width: 640px) {
            .content-markdown h1 { font-size: 2rem; }
            .content-markdown h2 { font-size: 1.55rem; }
            .content-markdown h3 { font-size: 1.25rem; }
          }
        `}</style>
        <article
          className="content-markdown"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
