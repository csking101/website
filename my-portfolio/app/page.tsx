export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 mb-6 tracking-tight">
            Your Name
          </h1>
          
          {/* Description */}
          <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 space-y-4 mb-12 leading-relaxed">
            <p>
              I build innovative solutions at the intersection of technology and creativity.
            </p>
            <p>
              Currently exploring machine learning, web development, and everything in between.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/projects"
              className="px-8 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="/blogs"
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              Read Thoughts
            </a>
            <a
              href="/research"
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              Research
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Projects Card */}
          <a
            href="/projects"
            className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
          >
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Projects & Hackathons
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Explore my latest builds, experiments, and hackathon wins.
            </p>
          </a>

          {/* Notes Card */}
          <a
            href="/notes"
            className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
          >
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Notes
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Quick thoughts, learnings, and technical notes.
            </p>
          </a>

          {/* Travel Card */}
          <a
            href="/travel"
            className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
          >
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Travel
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Places I've been and stories from the road.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}