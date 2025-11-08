import Link from 'next/link';
import HeroInteractive from '../components/hero-interactive';
import { getContentItems } from '../lib/content';

export default function Home() {
  const blogs = getContentItems('blogs').slice(0, 2);
  const projects = getContentItems('projects').filter(p => p.metadata.featured).slice(0, 2);
  const notes = getContentItems('notes').slice(0, 2);

  return (
    <main
      className="relative min-h-screen w-full md:h-screen overflow-y-auto md:overflow-hidden bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100"
    >
      {/* Subtle animated backdrop accents */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute -top-24 left-1/3 w-72 h-72 rounded-full bg-indigo-300/30 dark:bg-indigo-600/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-pink-300/30 dark:bg-pink-600/20 blur-3xl animate-pulse [animation-delay:400ms]" />
        <div className="absolute -bottom-32 -left-24 w-72 h-72 rounded-full bg-blue-300/30 dark:bg-blue-700/20 blur-3xl animate-pulse [animation-delay:900ms]" />
      </div>

      {/* Layout grid (single screen) */}
      <div className="relative z-10 flex flex-col md:h-full md:overflow-hidden">
        {/* Top hero trimmed */}
        <div className="flex-none overflow-visible mt-6 md:mt-8 mb-8 md:mb-10 lg:mb-12">
          <HeroInteractive />
        </div>

        {/* Mosaic content */}
        <div
          className="flex-1 px-6 md:px-12 pb-4 overflow-hidden flex flex-col"
        >
          <div className="flex-1 grid gap-4 grid-cols-1 md:grid-cols-3 p-3 md:h-full">
            {/* Featured Projects Tile */}
            <section
              className="group relative rounded-xl p-5 flex flex-col md:h-full md:min-h-full bg-transparent overflow-hidden hover:shadow-md transition-all"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-50 via-blue-100 to-indigo-200 dark:from-indigo-900/40 dark:via-blue-900/30 dark:to-indigo-800/40 transition-opacity" />
              <header className="relative flex items-center justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                  Featured Projects
                </h3>
                <Link
                  href="/projects"
                  className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  All →
                </Link>
              </header>
              <div className="relative space-y-3 text-base">
                {projects.length === 0 && (
                  <span className="text-slate-500 dark:text-slate-400">No featured projects.</span>
                )}
                {projects.map(p => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="flex items-start gap-3 rounded-lg px-3 py-2 hover:bg-indigo-100/60 dark:hover:bg-indigo-900/40 transition-colors group/item"
                  >
                    <span className="text-lg">💡</span>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold leading-tight group-hover/item:text-indigo-700 dark:group-hover/item:text-indigo-300 line-clamp-1">
                        {p.metadata.title}
                      </span>
                      {p.excerpt && (
                        <span className="text-base text-slate-500 dark:text-slate-400 line-clamp-1">
                          {p.excerpt}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Latest Blogs Tile */}
            <section className="group relative rounded-xl p-5 flex flex-col md:h-full md:min-h-full bg-transparent overflow-hidden hover:shadow-md transition-all">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-fuchsia-50 via-pink-100 to-purple-100 dark:from-fuchsia-900/40 dark:via-pink-900/30 dark:to-purple-900/40 transition-opacity" />
              <header className="relative flex items-center justify-between mb-0.5">
                <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-fuchsia-600 dark:text-fuchsia-400">
                  Thoughts
                </h3>
                <Link
                  href="/blogs"
                  className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
                >
                  More →
                </Link>
              </header>
              <div className="relative space-y-2 text-sm">
                {blogs.map(b => (
                  <Link
                    key={b.slug}
                    href={`/blogs/${b.slug}`}
                    className="flex flex-col rounded-md px-3 py-2 hover:bg-pink-100/60 dark:hover:bg-pink-900/40 transition-colors"
                  >
                    <span className="text-lg font-semibold line-clamp-1 group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-300">
                      {b.metadata.title}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <time dateTime={b.metadata.date}>
                        {new Date(b.metadata.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                      • {b.metadata.readingTime}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Notes Tile */}
            <section className="group relative rounded-xl p-5 flex flex-col md:h-full md:min-h-full bg-transparent overflow-hidden hover:shadow-md transition-all">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-emerald-50 via-teal-100 to-cyan-100 dark:from-emerald-900/40 dark:via-teal-900/30 dark:to-cyan-900/40 transition-opacity" />
              <header className="relative flex items-center justify-between mb-0.5">
                <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                  Notes
                </h3>
                <Link
                  href="/notes"
                  className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  All →
                </Link>
              </header>
              <div className="relative grid gap-3 text-base">
                {notes.map(n => (
                  <Link
                    key={n.slug}
                    href={`/notes/${n.slug}`}
                    className="group flex items-start gap-3 rounded-md px-3 py-2 hover:bg-emerald-100/60 dark:hover:bg-emerald-900/40 transition-colors"
                  >
                    <span className="text-base">📝</span>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold line-clamp-1 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                        {n.metadata.title}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {n.metadata.readingTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Bottom subtle gradient fade (optional aesthetic) */}
      
    </main>
  );
}
