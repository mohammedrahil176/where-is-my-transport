import Link from "next/link";
import { Train, Bus, MapPin, Bot, Search, Clock, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-8 shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Where are you going?</h1>
          <p className="text-blue-100 text-lg mb-6">Real-Time Train & KSRTC Karnataka Travel Assistant</p>
          
          <div className="bg-white rounded-xl p-2 flex items-center shadow-lg max-w-2xl">
            <Search className="text-gray-400 w-6 h-6 ml-2" />
            <input 
              type="text" 
              placeholder="Search train, bus, station or destination..." 
              className="flex-1 p-3 outline-none text-gray-800 placeholder-gray-400"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Search
            </button>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-32 w-32 h-32 bg-indigo-400 opacity-20 rounded-full blur-2xl"></div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <QuickButton href="/trains" icon={<Train className="w-8 h-8 mb-2" />} label="Find Train" color="bg-blue-50 text-blue-600 border-blue-100" />
        <QuickButton href="/ksrtc" icon={<Bus className="w-8 h-8 mb-2" />} label="KSRTC Bus" color="bg-emerald-50 text-emerald-600 border-emerald-100" />
        <QuickButton href="/map" icon={<MapPin className="w-8 h-8 mb-2" />} label="Explore Map" color="bg-purple-50 text-purple-600 border-purple-100" />
        <QuickButton href="/ai-guide" icon={<Bot className="w-8 h-8 mb-2" />} label="AI Guide" color="bg-orange-50 text-orange-600 border-orange-100" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-xl font-bold text-gray-800">Popular Routes</h2>
            <button className="text-blue-600 text-sm font-medium hover:underline">View all</button>
          </div>
          <div className="space-y-3">
            <RouteCard from="Bengaluru" to="Mysuru" type="train" time="2h 30m" id="12627" status="LIVE" />
            <RouteCard from="Bengaluru" to="Mangaluru" type="bus" time="8h 00m" id="AMBAARI-1" status="SCHEDULED" />
            <RouteCard from="Bengaluru" to="Hubballi" type="train" time="7h 15m" id="12079" status="ESTIMATED" />
          </div>
        </section>

        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-xl font-bold text-gray-800">Recent Searches</h2>
            <button className="text-blue-600 text-sm font-medium hover:underline">Clear</button>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2">
             <RecentSearch text="Majestic to Mysuru" />
             <RecentSearch text="Karnataka Express 12627" />
             <RecentSearch text="SBC Station Arrivals" />
             <RecentSearch text="Airavata Club Class" />
          </div>
          
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5 relative overflow-hidden">
            <div className="relative z-10 flex gap-4 items-start">
               <div className="bg-white p-2 rounded-full shadow-sm text-blue-600">
                 <Bot className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="font-bold text-gray-800 mb-1">Need help planning?</h3>
                 <p className="text-sm text-gray-600 mb-3">Ask the AI Transport Guide for the best routes and timings.</p>
                 <Link href="/ai-guide" className="text-sm font-medium text-blue-600 flex items-center gap-1 hover:gap-2 transition-all">
                   Ask AI <ArrowRight className="w-4 h-4" />
                 </Link>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function QuickButton({ href, icon, label, color }: { href: string; icon: React.ReactNode; label: string; color: string }) {
  return (
    <Link href={href} className={`flex flex-col items-center justify-center p-6 rounded-xl border transition-transform hover:scale-105 shadow-sm ${color}`}>
      {icon}
      <span className="font-semibold text-sm">{label}</span>
    </Link>
  );
}

function RouteCard({ from, to, type, time, id, status }: { from: string; to: string; type: "train" | "bus"; time: string; id: string; status: string }) {
  const isLive = status === "LIVE";
  
  return (
    <Link href={`/${type}s/${id}`} className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          {type === 'train' ? <Train className="w-5 h-5 text-blue-600" /> : <Bus className="w-5 h-5 text-emerald-600" />}
          <span className="text-xs font-bold px-2 py-1 bg-gray-100 text-gray-600 rounded-md uppercase">{id}</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold">
           {isLive && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
           <span className={isLive ? "text-red-500" : "text-gray-500"}>{status}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="font-bold text-gray-800">{from}</p>
        </div>
        <div className="flex flex-col items-center px-4 flex-1">
          <ArrowRight className="w-4 h-4 text-gray-400 mb-1" />
          <span className="text-[10px] text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {time}</span>
        </div>
        <div className="flex-1 text-right">
          <p className="font-bold text-gray-800">{to}</p>
        </div>
      </div>
    </Link>
  );
}

function RecentSearch({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0">
      <Clock className="w-4 h-4 text-gray-400" />
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
}
