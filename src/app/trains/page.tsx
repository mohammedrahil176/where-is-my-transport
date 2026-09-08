import Link from "next/link";
import { Train, Clock, ArrowRight } from "lucide-react";
import { mockTrains } from "../../data/mockData";

export default function TrainsPage() {
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Train className="text-blue-600 w-8 h-8" /> Trains
          </h1>
          <p className="text-gray-500 mt-1">Live running status & schedules</p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-8 text-sm text-blue-800">
        <span className="font-bold">DEMO MODE:</span> Showing mock schedule data. No real-time GPS tracking is currently connected.
      </div>

      <div className="grid gap-4">
        {mockTrains.map((train) => (
          <Link key={train.id} href={`/trains/${train.id}`} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 md:w-1/4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <Train className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-gray-800">{train.name}</p>
                <p className="text-sm text-gray-500">#{train.id}</p>
              </div>
            </div>

            <div className="flex-1 flex justify-between items-center text-sm md:w-2/4 px-4">
              <div className="text-center flex-1">
                <p className="font-bold text-gray-800">{train.source}</p>
                <p className="text-gray-500">{train.departure}</p>
              </div>
              <div className="flex-1 flex flex-col items-center px-2">
                <ArrowRight className="text-gray-300 mb-1 w-5 h-5" />
                <span className="text-xs text-gray-400 bg-gray-50 px-2 rounded-full border">Route</span>
              </div>
              <div className="text-center flex-1">
                <p className="font-bold text-gray-800">{train.destination}</p>
                <p className="text-gray-500">{train.arrival}</p>
              </div>
            </div>

            <div className="md:w-1/4 flex flex-col md:items-end justify-center">
               <span className={`px-3 py-1 rounded-full text-xs font-bold ${train.status === 'LIVE' || train.status === 'ON TIME' ? 'bg-green-100 text-green-700' : train.status === 'DELAYED' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                 {train.status}
               </span>
               {train.delay && <span className="text-xs text-red-500 mt-1 font-medium">{train.delay} delay</span>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
