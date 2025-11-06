// app/travel/page.tsx
import TravelCard from "@/components/travel-card";

const travelSpots = [
  {
    title: "Singapore",
    description:
      "A short 4–day solo trip exploring Marina Bay, Gardens by the Bay, hawker food, and late-night city walks.",
    date: "2024-06-10",
    days: "4 days",
    tags: ["Asia", "Solo", "City"],
    slug: "singapore",
  },
  {
    title: "Paris",
    description:
      "Visited the Louvre, Eiffel Tower, Saint Germain cafés, and walked along the Seine during golden hour.",
    date: "2023-09-18",
    days: "6 days",
    tags: ["Europe", "Art", "History"],
    slug: "paris",
  },
  {
    title: "Goa",
    description:
      "Beach sunsets, rented a bike, seafood shacks, and beautiful peaceful roads along the coast.",
    date: "2022-12-21",
    days: "3 days",
    tags: ["India", "Beach", "Chill"],
    slug: "goa",
  },
];

export default function TravelPage() {
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelSpots.map((spot) => (
            <TravelCard key={spot.slug} {...spot} />
          ))}
        </div>

        {/* Empty state fallback */}
        {travelSpots.length === 0 && (
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
