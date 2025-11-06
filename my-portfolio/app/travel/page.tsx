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
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Travel</h1>

      <p className="text-gray-600 mb-10 max-w-2xl">
        I like to travel whenever I get the time — exploring cities, local
        cultures, and walking aimlessly for hours. Here are some places I've
        visited and the memories from them.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {travelSpots.map((spot) => (
          <TravelCard key={spot.slug} {...spot} />
        ))}
      </div>
    </section>
  );
}
