export const mockTrains = [
  { id: "12627", name: "Karnataka Express", source: "Bengaluru (SBC)", destination: "New Delhi (NDLS)", departure: "19:20", arrival: "09:00", status: "ON TIME", type: "train", lat: 12.9771, lng: 77.5671 },
  { id: "16511", name: "KSR Bengaluru - Kannur Express", source: "Bengaluru (SBC)", destination: "Kannur (CAN)", departure: "21:35", arrival: "10:55", status: "SCHEDULED", type: "train", lat: 12.9771, lng: 77.5671 },
  { id: "12007", name: "Shatabdi Express", source: "Chennai (MAS)", destination: "Mysuru (MYS)", departure: "06:00", arrival: "13:00", status: "DELAYED", delay: "20 mins", type: "train", lat: 12.2958, lng: 76.6394 },
];

export const mockBuses = [
  { id: "AIRAVATA-1", name: "Airavata Club Class", source: "Bengaluru (Majestic)", destination: "Mysuru", departure: "10:00", arrival: "13:00", status: "LIVE", type: "bus", lat: 12.65, lng: 77.2 },
  { id: "AMBAARI-1", name: "Ambaari Dream Class", source: "Bengaluru (Majestic)", destination: "Mangaluru", departure: "22:00", arrival: "06:00", status: "SCHEDULED", type: "bus", lat: 12.9771, lng: 77.5671 },
];

export const mockStations = [
  { id: "SBC", name: "KSR Bengaluru City Junction", lat: 12.9771, lng: 77.5671, type: "station" },
  { id: "MYS", name: "Mysuru Junction", lat: 12.3013, lng: 76.6433, type: "station" },
  { id: "MAJ", name: "Majestic Bus Station (Kempagowda)", lat: 12.9766, lng: 77.5713, type: "bus_stop" },
];
