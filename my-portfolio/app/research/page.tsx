// app/research/page.tsx
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
    <main className="px-6 md:px-16 py-24 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Research & Publications
      </h1>
      <p className="text-gray-600 max-w-2xl mb-12">
        Academic research work focusing on deep learning for healthcare,
        segmentation, classification, and model efficiency.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {research.map((paper, index) => (
          <ResearchCard key={index} {...paper} />
        ))}
      </div>
    </main>
  );
}
