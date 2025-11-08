import FoodCard from "@/components/food-card";
import { getContentItems } from "@/lib/content";

export default function FoodPage() {
  const foods = getContentItems("food");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900 transition-colors">
      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <div className="mx-auto mb-12 flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
            Food
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-4xl mx-auto">
            Culinary notes — memorable dishes, local specialties, and flavors that stood out.
          </p>
        </div>

        {/* Cards */}
        {foods.length > 0 ? (
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foods.map((item) => (
              <FoodCard
                key={item.slug}
                title={item.metadata.title}
                description={item.excerpt || ""}
                date={item.metadata.date}
                tags={item.metadata.tags || []}
                location={item.metadata.location || ""}
                slug={item.slug}
              />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="text-6xl mb-4">🍜</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-slate-100 mb-2">
              No food entries yet
            </h3>
            <p className="text-gray-600 dark:text-slate-400">
              Tasting experiences will appear here soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
