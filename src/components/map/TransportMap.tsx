"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { mockStations, mockBuses, mockTrains } from "../../data/mockData";

export default function TransportMap() {
  const defaultCenter: [number, number] = [12.9716, 77.5946]; // Bengaluru

  return (
    <MapContainer center={defaultCenter} zoom={7} scrollWheelZoom={true} className="w-full h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {mockStations.map((station) => (
        <Marker key={station.id} position={[station.lat, station.lng]}>
          <Popup>
            <div className="font-bold">{station.name}</div>
            <div className="text-xs text-gray-500 uppercase">{station.type}</div>
            <div className="text-xs text-gray-400 mt-1">ID: {station.id}</div>
          </Popup>
        </Marker>
      ))}

      {mockTrains.map((train) => (
        <Marker key={train.id} position={[train.lat, train.lng]}>
          <Popup>
            <div className="font-bold text-blue-600">🚆 {train.name}</div>
            <div className="text-xs text-gray-600">{train.source} → {train.destination}</div>
            <div className="text-xs font-bold mt-1 text-red-500">{train.status}</div>
          </Popup>
        </Marker>
      ))}

      {mockBuses.map((bus) => (
        <Marker key={bus.id} position={[bus.lat, bus.lng]}>
          <Popup>
            <div className="font-bold text-emerald-600">🚌 {bus.name}</div>
            <div className="text-xs text-gray-600">{bus.source} → {bus.destination}</div>
            <div className="text-xs font-bold mt-1 text-red-500">{bus.status}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
