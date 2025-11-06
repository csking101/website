import ResearchCard from "@/components/research-card";

const research = [
  {
    title: "Retinal Layer Segmentation using Foundation Models",
    venue: "arXiv Preprint",
    year: "2025",
    description:
      "Explores adapting vision foundation models for high-resolution medical imaging tasks, introducing a lightweight fine-tuning pipeline.",
    pdf: "#",
    code: "#",
    tags: ["Medical Imaging", "Deep Learning"],
  },
  {
    title: "Multi-Class Mammogram Classification Using Transfer Learning",
    venue: "IEEE ICIP",
    year: "2024",
    description:
      "Developed a classification system trained on mammography datasets, improving early-stage detection and interpretability with Grad-CAM.",
    pdf: "#",
    code: "#",
    tags: ["CNNs", "Healthcare AI"],
  },
  {
    title: "Knowledge Distillation for Medical Image Segmentation",
    venue: "Springer Journal",
    year: "2023",
    description:
      "Introduces a student-teacher training strategy to reduce model size while preserving segmentation accuracy.",
    pdf: "#",
    code: "#",
    tags: ["Distillation", "Segmentation"],
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <div className="mx-auto mb-12 flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Research
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            My adventures in pushing the boundaries of technology through
            experiments.
          </p>
        </div>

        {/* Research Cards Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {research.map((paper, index) => (
            <ResearchCard key={index} {...paper} />
          ))}
        </div>

        {/* Empty State (just in case) */}
        {research.length === 0 && (
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="text-6xl mb-4">🔬</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No publications yet
            </h3>
            <p className="text-gray-600">More research updates coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
