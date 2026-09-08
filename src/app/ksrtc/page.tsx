import Link from "next/link";
import { Bus, Clock, ArrowRight } from "lucide-react";
import { mockBuses } from "../../data/mockData";

export default function KsrtcPage() {
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Bus className="text-emerald-600 w-8 h-8" /> KSRTC
          </h1>
          <p className="text-gray-500 mt-1">Karnataka State Road Transport Services</p>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg mb-8 text-sm text-emerald-800">
        <span className="font-bold">DEMO MODE:</span> Showing mock scheduled data. Live GPS tracking is simulated.
      </div>

      <div className="grid gap-4">
        {mockBuses.map((bus) => (
          <Link key={bus.id} href={`/ksrtc/${bus.id}`} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 md:w-1/4">
              <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-gray-800">{bus.name}</p>
                <p className="text-sm text-gray-500">{bus.id}</p>
              </div>
            </div>

            <div className="flex-1 flex justify-between items-center text-sm md:w-2/4 px-4">
              <div className="text-center flex-1">
                <p className="font-bold text-gray-800">{bus.source}</p>
                <p className="text-gray-500">{bus.departure}</p>
              </div>
              <div className="flex-1 flex flex-col items-center px-2">
                <ArrowRight className="text-gray-300 mb-1 w-5 h-5" />
                <span className="text-xs text-gray-400 bg-gray-50 px-2 rounded-full border">Route</span>
              </div>
              <div className="text-center flex-1">
                <p className="font-bold text-gray-800">{bus.destination}</p>
                <p className="text-gray-500">{bus.arrival}</p>
              </div>
            </div>

            <div className="md:w-1/4 flex flex-col md:items-end justify-center">
               <span className={`px-3 py-1 rounded-full text-xs font-bold ${bus.status === 'LIVE' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                 {bus.status}
               </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
