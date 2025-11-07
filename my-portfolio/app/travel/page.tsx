import TravelCard from "@/components/travel-card";
import { getContentItems } from "@/lib/content";

export default function TravelPage() {
  const travelSpots = getContentItems("travel");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <div className="mx-auto mb-12 flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel
          </h1>
          <p className="text-xl text-gray-600 max-w-6xl mx-auto">
            I like exploring new places — walking around cities, finding quiet
            corners, and learning from the world one trip at a time.
          </p>
        </div>

        {/* Cards */}
        {travelSpots.length > 0 ? (
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelSpots.map((spot) => (
              <TravelCard
                key={spot.slug}
                title={spot.metadata.title}
                description={spot.excerpt || ""}
                date={spot.metadata.date}
                days={spot.metadata.days || ""}
                tags={spot.metadata.tags || []}
                slug={spot.slug}
              />
            ))}
          </div>
        ) : (
          /* Empty state fallback */
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No trips yet
            </h3>
            <p className="text-gray-600">More adventures coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
