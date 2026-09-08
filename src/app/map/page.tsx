"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { mockStations, mockBuses, mockTrains } from "../../data/mockData";

export default function MapPage() {
  const Map = useMemo(() => dynamic(
    () => import("../../components/map/TransportMap"),
    { 
      loading: () => <div className="flex-1 flex items-center justify-center bg-gray-100">Loading Map...</div>,
      ssr: false
    }
  ), []);

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white p-4 shadow-sm z-10 relative">
        <h1 className="text-2xl font-bold text-gray-800">Transport Map</h1>
        <p className="text-sm text-gray-500">Live & Scheduled Transport Viewer</p>
      </div>
      <div className="flex-1 relative z-0">
         <Map />
      </div>
    </div>
  );
}
