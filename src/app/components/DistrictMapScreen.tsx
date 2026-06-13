import { useState } from "react";
import { X } from "lucide-react";
import districtMap from "../../imports/parkmuseerne.png";
import { HamburgerIcon } from "./HamburgerIcon";
import parkLogo from "../../imports/Parkmuseerne/c558da41746efd85c313bcad2c6f96deba71a7c7.png";

const NAV_LINKS = [
  "Explore the area", "Museums", "Parks & Gardens",
  "Køb billet", "Events", "About Parkmuseerne", "Contact",
];

export interface Museum {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  top: string;
  left: string;
}

export const MUSEUMS: Museum[] = [
  {
    id: 1,
    name: "SMK – Statens Museum for Kunst",
    subtitle: "Denmark's largest art museum with over 700 years of art history.",
    image: "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=600&h=300&fit=crop&auto=format",
    top: "10%", left: "48%",
  },
  {
    id: 2,
    name: "The Palm House",
    subtitle: "A Victorian greenhouse home to exotic tropical plants.",
    image: "https://images.unsplash.com/photo-1580735284991-ea9028fa53a1?w=600&h=300&fit=crop&auto=format",
    top: "38%", left: "17%",
  },
  {
    id: 3,
    name: "Natural History Museum",
    subtitle: "Explore Earth's natural history from dinosaurs to deep-sea life.",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&h=300&fit=crop&auto=format",
    top: "44%", left: "38%",
  },
  {
    id: 4,
    name: "Rosenborg Castle",
    subtitle: "A 17th-century royal castle set in the beautiful King's Garden.",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&h=300&fit=crop&auto=format",
    top: "57%", left: "52%",
  },
  {
    id: 5,
    name: "Arbejdermuseet",
    subtitle: "The Workers Museum documenting Danish working-class life since 1650.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=300&fit=crop&auto=format",
    top: "58%", left: "11%",
  },
  {
    id: 6,
    name: "Davids Samling",
    subtitle: "One of Europe's finest collections of Islamic and decorative arts.",
    image: "https://images.unsplash.com/photo-1566127992631-137a642a90f4?w=600&h=300&fit=crop&auto=format",
    top: "62%", left: "80%",
  },
];

const CAFES = [
  { top: "42%", left: "43%" },
  { top: "14%", left: "54%" },
  { top: "60%", left: "47%" },
];

const WCS = [
  { top: "50%", left: "22%" },
  { top: "20%", left: "66%" },
  { top: "68%", left: "58%" },
];

type FilterKey = "museums" | "cafes" | "wc";

interface Props {
  onBack: () => void;
  onPinClick: (museum: Museum) => void;
}

export function DistrictMapScreen({ onBack, onPinClick }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterKey | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = (key: FilterKey) =>
    setActiveFilter((prev) => (prev === key ? null : key));

  const pillClass = (key: FilterKey) =>
    `flex items-center gap-1.5 px-3 py-1.5 border rounded-full text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
      activeFilter === key
        ? "bg-[#E9672B] border-[#E9672B] text-white"
        : "bg-[#FCF5EC] border-black/25 text-black"
    }`;

  return (
    <div className="flex flex-col min-h-screen bg-[#FCF5EC] relative">

      {/* Slide-in menu */}
      {menuOpen && (
        <div className="absolute inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-4/5 bg-[#FCF5EC] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#58744A]/10">
              <img src={parkLogo} alt="Parkmuseerne" className="h-9 w-auto object-contain" />
              <button onClick={() => setMenuOpen(false)}>
                <X size={22} className="text-black" />
              </button>
            </div>
            <nav className="flex flex-col flex-1 px-5 pt-6 gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => setMenuOpen(false)}
                  className={`text-left py-3 border-b border-[#58744A]/10 font-medium text-[15px] hover:text-[#58744A] ${
                    link === "Køb billet" ? "text-[#E9672B] font-semibold" : "text-black"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link}
                </button>
              ))}
            </nav>
            <div className="px-5 py-6">
              <p className="text-xs text-[#58744A]/60" style={{ fontFamily: "'Inter', sans-serif" }}>© 2024 Parkmuseerne</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-[#FCF5EC] flex-shrink-0 border-b border-black/8 sticky top-0 z-10">
        <button onClick={onBack} className="p-1">
          <img src={parkLogo} alt="Parkmuseerne" className="h-10 w-auto object-contain" />
        </button>
        <div className="flex items-center gap-3">
          <button
            className="bg-[#E9672B] text-white px-4 py-2 text-sm font-medium whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Køb billet
          </button>
          <button className="p-1" aria-label="Menu" onClick={() => setMenuOpen(true)}>
            <HamburgerIcon />
          </button>
        </div>
      </header>

      {/* Filter pill row */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto flex-shrink-0 border-b border-black/5">
        <button className={pillClass("museums")} onClick={() => toggle("museums")}
          style={{ fontFamily: "'Inter', sans-serif" }}>
          🏛️ Museums
        </button>
        <button className={pillClass("cafes")} onClick={() => toggle("cafes")}
          style={{ fontFamily: "'Inter', sans-serif" }}>
          ☕ Caféer
        </button>
        <button className={pillClass("wc")} onClick={() => toggle("wc")}
          style={{ fontFamily: "'Inter', sans-serif" }}>
          🚻 WC
        </button>
      </div>

      {/* Map — aspect-ratio locked so full illustration shows */}
      <div className="w-full relative" style={{ aspectRatio: "5/4" }}>
        <img
          src={districtMap}
          alt="Parkmuseerne district map"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Pulsing "You are here" blue dot */}
        <div
          className="absolute"
          style={{ top: "62%", left: "54%", transform: "translate(-50%, -50%)" }}
        >
          <span className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500 border-2 border-white shadow-md" />
          </span>
          <div
            className="absolute -top-7 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap shadow"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            You are here
          </div>
        </div>

        {/* Museum pins — always visible */}
        {(activeFilter === null || activeFilter === "museums") &&
          MUSEUMS.map((m) => (
            <button
              key={m.id}
              onClick={() => onPinClick(m)}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              style={{ top: m.top, left: m.left }}
            >
              <div className="w-8 h-8 rounded-full bg-[#58744A] border-2 border-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-active:scale-95">
                <span className="text-white text-[11px] font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {m.id}
                </span>
              </div>
            </button>
          ))}

        {/* Café markers — only when filter active */}
        {activeFilter === "cafes" &&
          CAFES.map((c, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-[#E9672B] rounded-full border-2 border-white flex items-center justify-center shadow-md text-sm"
              style={{ top: c.top, left: c.left }}
            >
              ☕
            </div>
          ))}

        {/* WC markers — only when filter active */}
        {activeFilter === "wc" &&
          WCS.map((w, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-[#E9672B] rounded-full border-2 border-white flex items-center justify-center shadow-md text-sm"
              style={{ top: w.top, left: w.left }}
            >
              🚻
            </div>
          ))}
      </div>

      {/* Vertical text list */}
      <div className="flex-shrink-0 px-4 py-4 bg-[#FCF5EC] border-t border-black/8">
        <p
          className="text-[10px] font-semibold text-black/35 uppercase tracking-widest mb-3"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Locations
        </p>
        <div className="flex flex-col">
          {MUSEUMS.map((m, i) => (
            <button
              key={m.id}
              onClick={() => onPinClick(m)}
              className={`flex items-center gap-3 py-3 text-left ${
                i < MUSEUMS.length - 1 ? "border-b border-black/8" : ""
              } hover:bg-black/3 -mx-1 px-1 rounded-lg transition-colors`}
            >
              <span className="w-6 h-6 rounded-full bg-[#58744A] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {m.id}
                </span>
              </span>
              <span
                className="text-black font-semibold text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {m.name}
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
