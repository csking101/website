import NoteCard from "@/components/note-card";
import { getContentItems } from "@/lib/content";

export default function NotesPage() {
  const notes = getContentItems("notes");

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
        {notes.length > 0 ? (
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard
                key={note.slug}
                title={note.metadata.title}
                description={note.excerpt || ""}
                date={note.metadata.date}
                tags={note.metadata.tags || []}
                slug={note.slug}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
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
