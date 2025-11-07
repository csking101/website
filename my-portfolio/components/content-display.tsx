interface ContentMetadata {
  title?: string;
  date?: string;
  tags?: string[];
  location?: string;
  days?: string;
  [key: string]: string | string[] | undefined;
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

          {/* Date */}
          {metadata?.date && (
            <time className="text-gray-600 block mb-4" dateTime={metadata.date}>
              {new Date(metadata.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
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
          .content-markdown h1 {
            font-size: 2.25rem;
            font-weight: 700;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
            color: #111827;
          }
          .content-markdown h2 {
            font-size: 1.875rem;
            font-weight: 700;
            margin-top: 1.5rem;
            margin-bottom: 0.875rem;
            color: #1f2937;
          }
          .content-markdown h3 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 1.25rem;
            margin-bottom: 0.75rem;
            color: #374151;
          }
          .content-markdown h4 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-top: 1rem;
            margin-bottom: 0.5rem;
            color: #374151;
          }
          .content-markdown p {
            font-size: 1rem;
            line-height: 1.75;
            margin-bottom: 1rem;
            color: #1f2937;
          }
          .content-markdown ul,
          .content-markdown ol {
            margin-bottom: 1rem;
            margin-left: 1.5rem;
          }
          .content-markdown li {
            margin-bottom: 0.5rem;
            color: #1f2937;
          }
          .content-markdown strong {
            font-weight: 700;
          }
          .content-markdown em {
            font-style: italic;
          }
          .content-markdown code {
            background-color: #f3f4f6;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-family: monospace;
            font-size: 0.875rem;
          }
          .content-markdown pre {
            background-color: #1f2937;
            color: #f3f4f6;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin-bottom: 1rem;
          }
          .content-markdown pre code {
            background-color: transparent;
            padding: 0;
            color: inherit;
          }
          .content-markdown a {
            color: #2563eb;
            text-decoration: underline;
          }
          .content-markdown a:hover {
            color: #1d4ed8;
          }
          .content-markdown blockquote {
            border-left: 4px solid #d1d5db;
            padding-left: 1rem;
            margin-left: 0;
            margin-bottom: 1rem;
            color: #6b7280;
          }
          .content-markdown table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1rem;
          }
          .content-markdown th,
          .content-markdown td {
            border: 1px solid #d1d5db;
            padding: 0.75rem;
            text-align: left;
          }
          .content-markdown th {
            background-color: #f3f4f6;
            font-weight: 600;
          }
          .content-markdown img {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            margin: 1rem 0;
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
