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
    <article className="group bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 overflow-hidden flex flex-col min-h-[340px]">
      <Link href={pdf || "#"} className="flex flex-col h-full">
        <div className="flex flex-col h-full p-6">
          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
            {title}
          </h2>

          {/* Venue + Year */}
          <p className="text-sm text-gray-500 dark:text-slate-400 mb-3">
            {venue} • {year}
          </p>

          {/* Description */}
          <p className="text-gray-700 dark:text-slate-400 mb-4 line-clamp-3">{description}</p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer - View Details */}
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-700">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition">
              Read Full Paper →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
