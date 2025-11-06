// app/notes/page.tsx
import NoteCard from "@/components/note-card";

const notes = [
  {
    title: "Understanding Attention in Transformers",
    description:
      "A quick explanation of query-key-value attention and why it helps models capture context.",
    date: "2024-06-12",
    tags: ["Deep Learning", "Transformers"],
    slug: "attention-in-transformers",
  },
  {
    title: "What is Vector Quantization?",
    description:
      "My notes on VQ, codebooks, and how VQ-VAE compresses continuous vectors into discrete tokens.",
    date: "2024-07-02",
    tags: ["Representation Learning", "Compression"],
    slug: "vector-quantization-explained",
  },
  {
    title: "RAG vs Fine-Tuning",
    description:
      "When to use RAG instead of fine-tuning large models, trade-offs, cost, and latency.",
    date: "2024-08-15",
    tags: ["LLMs", "RAG"],
    slug: "rag-vs-finetuning",
  },
];

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <div className="mx-auto mb-12 flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notes
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A collection of short learnings, explanations, and evolving ideas.
          </p>
        </div>

        {/* Notes Cards Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <NoteCard key={index} {...note} />
          ))}
        </div>

        {/* Empty State */}
        {notes.length === 0 && (
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="text-6xl mb-4">✏️</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No notes yet
            </h3>
            <p className="text-gray-600">Stay tuned for new insights.</p>
          </div>
        )}
      </div>
    </div>
  );
}
