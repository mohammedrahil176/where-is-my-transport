import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Train, Bus, Map as MapIcon, Bot, Heart, Home, User, Search } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Where Is My Transport?",
  description: "Real-Time Train & KSRTC Karnataka Travel Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 pb-16 md:pb-0 h-full min-h-screen flex flex-col`}>
        {/* Desktop Sidebar / Mobile Topbar */}
        <header className="bg-white shadow-sm md:hidden p-4 flex justify-between items-center sticky top-0 z-50">
          <Link href="/" className="font-bold text-xl text-blue-600 flex items-center gap-2">
             WIMT
          </Link>
          <div className="flex gap-4">
            <Search className="w-6 h-6 text-gray-600" />
            <User className="w-6 h-6 text-gray-600" />
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden h-full">
          {/* Desktop Sidebar */}
          <aside className="hidden md:flex flex-col w-64 bg-white shadow-md border-r z-50 relative">
            <div className="p-6">
              <Link href="/" className="font-bold text-2xl text-blue-600">
                WIMT
              </Link>
              <p className="text-sm text-gray-500 mt-1">Travel Assistant</p>
            </div>
            <nav className="flex-1 px-4 space-y-2">
              <NavItem href="/" icon={<Home />} label="Home" />
              <NavItem href="/trains" icon={<Train />} label="Trains" />
              <NavItem href="/ksrtc" icon={<Bus />} label="KSRTC" />
              <NavItem href="/map" icon={<MapIcon />} label="Map" />
              <NavItem href="/ai-guide" icon={<Bot />} label="AI Guide" />
              <NavItem href="/favourites" icon={<Heart />} label="Favourites" />
            </nav>
            <div className="p-4 border-t">
               <NavItem href="/profile" icon={<User />} label="Profile" />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto relative z-0">
            {children}
          </main>
        </div>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <MobileNavItem href="/" icon={<Home />} label="Home" />
          <MobileNavItem href="/trains" icon={<Train />} label="Trains" />
          <MobileNavItem href="/ksrtc" icon={<Bus />} label="KSRTC" />
          <MobileNavItem href="/map" icon={<MapIcon />} label="Map" />
          <MobileNavItem href="/ai-guide" icon={<Bot />} label="AI" />
        </nav>
      </body>
    </html>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
      <span className="w-5 h-5">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
}

function MobileNavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-600">
      <span className="w-6 h-6">{icon}</span>
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}
