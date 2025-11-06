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
    <main className="px-6 md:px-16 py-24 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Notes</h1>
      <p className="text-gray-600 max-w-2xl mb-12">
        A collection of short learnings, explanations, ideas, and references.
        These are informal and continuously evolving.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {notes.map((note, index) => (
          <NoteCard key={index} {...note} />
        ))}
      </div>
    </main>
  );
}
