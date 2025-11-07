// components/note-card.tsx
import Link from "next/link";

interface NoteCardProps {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  slug: string;
}

export default function NoteCard({
  title,
  description,
  date,
  tags = [],
  slug,
}: NoteCardProps) {
  return (
    <article className="group bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 overflow-hidden flex flex-col">
      <Link href={`/notes/${slug}`} className="flex flex-col h-full p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
          {title}
        </h2>

        {/* Date */}
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-3">
          {new Date(date).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </p>

        {/* Description */}
        <p className="text-gray-700 dark:text-slate-400 mb-4 line-clamp-3">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
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
      </Link>
    </article>
  );
}
