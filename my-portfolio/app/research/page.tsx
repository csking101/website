import ResearchCard from "@/components/research-card";
import { getContentItems } from "@/lib/content";

export default function ResearchPage() {
  const research = getContentItems("research");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900 transition-colors">
      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <div className="mx-auto mb-12 flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
            Research
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-4xl mx-auto">
            My adventures in pushing the boundaries of technology through
            experiments.
          </p>
        </div>

        {/* Research Cards Grid */}
        {research.length > 0 ? (
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {research.map((paper) => (
              <ResearchCard
                key={paper.slug}
                title={paper.metadata.title}
                venue="Research Paper"
                year={new Date(paper.metadata.date).getFullYear().toString()}
                description={paper.excerpt || ""}
                pdf={`/research/${paper.slug}`}
                code="#"
                tags={paper.metadata.tags || []}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="text-6xl mb-4">🔬</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-slate-100 mb-2">
              No publications yet
            </h3>
            <p className="text-gray-600 dark:text-slate-400">More research updates coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
