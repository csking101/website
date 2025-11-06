// components/note-card.tsx
import Link from "next/link";

interface NoteCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}

export default function NoteCard({ title, description, date, tags, slug }: NoteCardProps) {
  return (
    <article className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col">
      <Link href={`/notes/${slug}`} className="flex flex-col h-full p-6">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Date */}
        <time className="block text-xs text-gray-400 mt-4">
          {new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
          })}
        </time>
      </Link>
    </article>
  );
}
