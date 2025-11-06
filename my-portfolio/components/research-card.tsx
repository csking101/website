// components/research-card.tsx
import Link from "next/link";

interface ResearchCardProps {
  title: string;
  venue: string;
  year: string;
  description: string;
  pdf?: string;
  code?: string;
  tags?: string[];
  slug?: string; // optional if later you want details page
}

export default function ResearchCard({
  title,
  venue,
  year,
  description,
  pdf,
  code,
  tags = [],
}: ResearchCardProps) {
  return (
    <article className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col">
      <div className="flex flex-col h-full p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h2>

        {/* Venue + Year */}
        <p className="text-sm text-gray-500 mb-3">
          {venue} • {year}
        </p>

        {/* Description */}
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer Buttons */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex gap-3">
          {pdf && (
            <Link
              href={pdf}
              target="_blank"
              className="px-3 py-1.5 text-sm font-medium rounded-md text-blue-600 border border-blue-200 hover:bg-blue-50 transition"
            >
              PDF
            </Link>
          )}
          {code && (
            <Link
              href={code}
              target="_blank"
              className="px-3 py-1.5 text-sm font-medium rounded-md text-gray-600 border border-gray-200 hover:bg-gray-50 transition"
            >
              Code
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
