import { Heart, Search, MapPin } from "lucide-react";

export default function FavouritesPage() {
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Heart className="text-red-500 w-8 h-8" /> Favourites
          </h1>
          <p className="text-gray-500 mt-1">Saved journeys and stations</p>
        </div>
      </div>
      
      <div className="bg-white border rounded-xl p-8 text-center text-gray-500 shadow-sm mt-10">
        <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-700 mb-2">No favourites yet</h2>
        <p>Save your frequent routes, stations, and vehicles to access them quickly.</p>
      </div>
    </div>
  );
}
