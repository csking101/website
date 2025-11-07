interface TravelCardProps {
  title: string;
  description: string;
  date: string;
  days: string;
  tags: string[];
  slug: string;
}

export default function TravelCard({
  title,
  description,
  date,
  days,
  tags,
  slug,
}: TravelCardProps) {
  return (
    <article className="group bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 overflow-hidden flex flex-col">
      <a href={`/travel/${slug}`} className="flex flex-col h-full">
        <div className="p-6 flex-grow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors line-clamp-2">
            {title}
          </h2>

          <p className="text-gray-600 dark:text-slate-400 mb-4 line-clamp-3">{description}</p>

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
        </div>

        <div className="px-6 py-4 bg-gray-50 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-700 flex items-center justify-between text-sm text-gray-500 dark:text-slate-400">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>{days}</span>
        </div>
      </a>
    </article>
  );
}
