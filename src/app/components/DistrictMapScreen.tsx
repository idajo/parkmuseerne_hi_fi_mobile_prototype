import { useState } from "react";
import { X } from "lucide-react";

const districtMap = new URL("../../imports/ParkmuseerneHiFiMobilePrototype/ad518c9bc1f134e0c56a7bd2d9e600fe66ecde02.png", import.meta.url).href;
const parkLogo = new URL("../../imports/ParkmuseerneHiFiMobilePrototype/c558da41746efd85c313bcad2c6f96deba71a7c7.png", import.meta.url).href;
const hirschsprungImage = new URL("../../imports/ParkmuseerneHiFiMobilePrototype/thehirschsprungcollection.jpg", import.meta.url).href;
const smkImage = new URL("../../imports/ParkmuseerneHiFiMobilePrototype/smk.jpg", import.meta.url).href;
const naturalHistoryImage = new URL("../../imports/ParkmuseerneHiFiMobilePrototype/naturalhistorymuseum.webp", import.meta.url).href;
const rosenborgImage = new URL("../../imports/ParkmuseerneHiFiMobilePrototype/rosenborgcastle.JPG", import.meta.url).href;
const workersMuseumImage = new URL("../../imports/ParkmuseerneHiFiMobilePrototype/workersmuseum.jpg", import.meta.url).href;
const davidCollectionImage = new URL("../../imports/ParkmuseerneHiFiMobilePrototype/davidcollection.jpg", import.meta.url).href;

const FONT = "'Source Serif 4', serif";
const HEADING_FONT = "'Montagu Slab', serif";

const NAV_LINKS = ["Explore the area", "Museums", "Parks & Gardens", "Køb billet", "Events", "About Parkmuseerne", "Contact"];

export interface Museum {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  // Figma pixel positions within the 390×312px map container
  mapLeft: number;
  mapTop: number;
}

export const MUSEUMS: Museum[] = [
  {
    id: 1,
    name: "The Hirschsprung Collection",
    subtitle: "Intimate museum of 19th-century Danish Golden Age paintings.",
    image: hirschsprungImage,
    mapLeft: 120.61,
    mapTop: 16.29,
  },
  {
    id: 2,
    name: "SMK – National Gallery of Denmark",
    subtitle: "Denmark's largest art museum with over 700 years of art history.",
    image: smkImage,
    mapLeft: 167.61,
    mapTop: 77.29,
  },
  {
    id: 3,
    name: "National History Museum Denmark",
    subtitle: "Explore Earth's natural history from dinosaurs to deep-sea life.",
    image: naturalHistoryImage,
    mapLeft: 123.61,
    mapTop: 145.29,
  },
  {
    id: 4,
    name: "Rosenborg Castle",
    subtitle: "A 17th-century royal castle set in the beautiful King's Garden.",
    image: rosenborgImage,
    mapLeft: 205.61,
    mapTop: 181.29,
  },
  {
    id: 5,
    name: "The Workers Museum",
    subtitle: "Documenting Danish working-class history and everyday life since 1650.",
    image: workersMuseumImage,
    mapLeft: 6.61,
    mapTop: 157.29,
  },
  {
    id: 6,
    name: "The David Collection",
    subtitle: "One of Europe's finest collections of Islamic and decorative arts.",
    image: davidCollectionImage,
    mapLeft: 324.61,
    mapTop: 225.29,
  },
  {
    id: 7,
    name: "Kongens Have",
    subtitle: "Copenhagen's oldest royal park, surrounding Rosenborg Castle.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop&auto=format",
    mapLeft: 194.61,
    mapTop: 253.29,
  },
  {
    id: 8,
    name: "Botanisk Have",
    subtitle: "The Botanical Garden, home to over 13,000 plant species.",
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=600&h=300&fit=crop&auto=format",
    mapLeft: 111.61,
    mapTop: 181.29,
  },
  {
    id: 9,
    name: "Østre Anlæg",
    subtitle: "A peaceful Victorian landscaped park next to SMK.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=300&fit=crop&auto=format",
    mapLeft: 225.61,
    mapTop: 109.29,
  },
];

const MUSEUMS_LIST = MUSEUMS.filter((m) => m.id <= 6);
const PARKS_LIST = MUSEUMS.filter((m) => m.id >= 7);

type FilterKey = "museums" | "parks" | "bikes" | "handicap" | "cafes";

interface Props {
  onBack: () => void;
  onPinClick: (museum: Museum) => void;
}

function LanguageSelector() {
  return (
    <p className="tracking-[0.275px] whitespace-nowrap" style={{ fontFamily: FONT, fontSize: 11, color: "rgba(0,0,0,0.5)" }}>
      <span style={{ fontSize: 11, lineHeight: "16.5px" }}>DA</span>
      <span style={{ fontSize: 11, lineHeight: "16.5px", color: "rgba(0,0,0,0.3)" }}>|</span>
      <span style={{ fontSize: 11, lineHeight: "16.5px", color: "#000", fontWeight: 700 }}>EN</span>
    </p>
  );
}

function HamburgerMenuIcon() {
  return (
    <div className="flex flex-col gap-[5px]" style={{ width: 28 }}>
      <div className="bg-[#58744a] rounded-[6px]" style={{ height: 2.994, width: 18.198 }} />
      <div className="bg-[#58744a] rounded-[6px]" style={{ height: 2.994, width: 28 }} />
      <div className="bg-[#58744a] rounded-[6px]" style={{ height: 2.994, width: 11.752 }} />
    </div>
  );
}

function GreenPin({ num }: { num: number }) {
  return (
    <div
      className="bg-[#58744a] relative rounded-full shrink-0"
      style={{
        width: 32,
        height: 32,
        boxShadow: "0px 10px 7.5px rgba(0,0,0,0.1), 0px 4px 3px rgba(0,0,0,0.1)",
      }}
    >
      <div className="absolute inset-0 rounded-full pointer-events-none" style={{ border: "2.728px solid white" }} />
      <div className="flex items-center justify-center size-full">
        <span className="text-white text-center" style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700 }}>
          {num}
        </span>
      </div>
    </div>
  );
}

function SmallGreenPin({ num }: { num: number }) {
  return (
    <div className="bg-[#58744a] relative rounded-full shrink-0" style={{ width: 28, height: 28, flexShrink: 0 }}>
      <div className="absolute inset-0 rounded-full pointer-events-none" style={{ border: "2.728px solid white", boxShadow: "0px 0px 0px 0px #58744a, 0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.1)" }} />
      <div className="flex items-center justify-center size-full">
        <span className="text-white text-center" style={{ fontFamily: FONT, fontSize: 10, fontWeight: 700 }}>
          {num}
        </span>
      </div>
    </div>
  );
}

export function DistrictMapScreen({ onBack, onPinClick }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterKey | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = (key: FilterKey) => setActiveFilter((prev) => (prev === key ? null : key));

  const showMuseumPins = activeFilter !== "parks";
  const showParkPins = activeFilter !== "museums";

  const pillStyle = (key: FilterKey): Record<string, string> => (activeFilter === key ? { background: "#E9672B", border: "0.682px solid #E9672B", color: "#fff", borderRadius: "9999px" } : { background: "#fcf5ec", border: "0.682px solid rgba(0,0,0,0.25)", color: "#000", borderRadius: "9999px" });

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf5ec] relative">
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
                <button key={link} onClick={() => setMenuOpen(false)} className={`text-left py-3 border-b border-[#58744A]/10 text-[15px] hover:text-[#58744A] ${link === "Køb billet" ? "text-[#E9672B] font-semibold" : "text-black font-medium"}`} style={{ fontFamily: FONT }}>
                  {link}
                </button>
              ))}
            </nav>
            <div className="px-5 py-6">
              <p className="text-xs text-[#58744A]/60" style={{ fontFamily: FONT }}>
                © 2024 Parkmuseerne
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-[#fcf5ec] relative shrink-0 w-full" style={{ borderBottom: "0.682px solid rgba(0,0,0,0.08)" }}>
        <div className="flex items-center justify-between px-4" style={{ paddingTop: 12, paddingBottom: 12.682 }}>
          {/* Logo */}
          <button onClick={onBack} className="p-1">
            <div style={{ height: 39.997, width: 54.636, position: "relative" }}>
              <img alt="Parkmuseerne" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={parkLogo} />
            </div>
          </button>
          {/* Right side: Buy ticket + DA|EN + hamburger */}
          <div className="flex items-center gap-3">
            <div className="bg-[#e9672b]" style={{ height: 42, width: 114, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="text-white text-center" style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, letterSpacing: "0.4px", lineHeight: "24px" }}>
                Buy ticket
              </span>
            </div>
            <LanguageSelector />
            <button className="p-1" aria-label="Menu" onClick={() => setMenuOpen(true)}>
              <HamburgerMenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filter pill row */}
      <div className="relative shrink-0 w-full">
        <div className="overflow-hidden size-full">
          <div className="flex gap-2 items-center px-4 overflow-x-auto size-full" style={{ paddingTop: 10, paddingBottom: 10 }}>
            {(["museums", "parks", "bikes", "handicap", "cafes"] as FilterKey[]).map((key) => {
              const labels: Record<FilterKey, string> = { museums: "🏛️ Museums", parks: "🌳 Parks", bikes: "🚲 Bike-parking", handicap: "🚻 Toilet", cafes: "☕ Cafés" };
              return (
                <button
                  key={key}
                  onClick={() => toggle(key)}
                  className="shrink-0"
                  style={{
                    ...pillStyle(key),
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    fontFamily: FONT,
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: 1,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    whiteSpace: "nowrap",
                  }}
                >
                  {labels[key]}
                </button>
              );
            })}
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ borderBottom: "0.682px solid rgba(0,0,0,0.05)" }} />
      </div>

      {/* Map — exact 312px tall, full width, pins at Figma pixel positions */}
      <div className="relative shrink-0 w-full" style={{ height: 311.993 }}>
        <img alt="Parkmuseerne district map" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={districtMap} />

        {/* You are here (Container4 in Figma at left=173.29, top=167.83) */}
        <div className="absolute" style={{ left: 173.29, top: 167.83 }}>
          <span className="relative flex" style={{ width: 20, height: 20 }}>
            <span className="animate-ping absolute inline-flex size-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full size-full bg-blue-500 border-2 border-white shadow-md" />
          </span>
        </div>

        {showMuseumPins &&
          MUSEUMS_LIST.map((m) => (
            <button key={m.id} onClick={() => onPinClick(m)} className="absolute flex items-center justify-center" style={{ left: m.mapLeft, top: m.mapTop, width: 32, height: 32 }}>
              <GreenPin num={m.id} />
            </button>
          ))}

        {showParkPins &&
          PARKS_LIST.map((m) => (
            <button key={m.id} onClick={() => onPinClick(m)} className="absolute flex items-center justify-center" style={{ left: m.mapLeft, top: m.mapTop, width: 32, height: 32 }}>
              <GreenPin num={m.id} />
            </button>
          ))}
      </div>

      {/* Directory — Museums */}
      <div className="bg-[#fcf5ec] relative shrink-0 w-full" style={{ borderTop: "0.682px solid rgba(0,0,0,0.08)" }}>
        <div className="flex flex-col items-start px-4" style={{ paddingTop: 20.682, paddingBottom: 16 }}>
          <div style={{ height: 24.004, position: "relative", marginBottom: 12 }}>
            <p className="absolute left-0 text-black whitespace-nowrap" style={{ fontFamily: HEADING_FONT, fontSize: 16, fontWeight: 700, lineHeight: "24px", top: -0.95 }}>
              Museums
            </p>
          </div>
          <div className="flex flex-col items-start w-full" style={{ paddingTop: 12 }}>
            {MUSEUMS_LIST.map((m, i) => (
              <div key={m.id} className="relative shrink-0 w-full" style={{ height: i < MUSEUMS_LIST.length - 1 ? 52.682 : 52 }}>
                <button onClick={() => onPinClick(m)} className="absolute flex gap-3 items-center rounded-[10px] hover:bg-black/3 transition-colors" style={{ left: -4, top: 0, width: 366, paddingLeft: 4, paddingRight: 4, paddingTop: 12, paddingBottom: i < MUSEUMS_LIST.length - 1 ? 12.682 : 12 }}>
                  {i < MUSEUMS_LIST.length - 1 && <div className="absolute inset-0 rounded-[10px] pointer-events-none" style={{ borderBottom: "0.682px solid rgba(0,0,0,0.08)" }} />}
                  <SmallGreenPin num={m.id} />
                  <span className="text-black whitespace-nowrap" style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, lineHeight: "20px" }}>
                    {m.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Directory — Parks */}
      <div className="bg-[#fcf5ec] relative shrink-0 w-full" style={{ borderTop: "0.682px solid rgba(0,0,0,0.08)" }}>
        <div className="flex flex-col items-start px-4" style={{ paddingTop: 20.682, paddingBottom: 24 }}>
          <div style={{ height: 24.004, position: "relative", marginBottom: 12 }}>
            <p className="absolute left-0 text-black whitespace-nowrap" style={{ fontFamily: HEADING_FONT, fontSize: 16, fontWeight: 700, lineHeight: "24px", top: -0.95 }}>
              Parks
            </p>
          </div>
          <div className="flex flex-col items-start w-full" style={{ paddingTop: 12 }}>
            {PARKS_LIST.map((m, i) => (
              <div key={m.id} className="relative shrink-0 w-full" style={{ height: i < PARKS_LIST.length - 1 ? 52.682 : 52 }}>
                <button onClick={() => onPinClick(m)} className="absolute flex gap-3 items-center rounded-[10px] hover:bg-black/3 transition-colors" style={{ left: -4, top: 0, width: 366, paddingLeft: 4, paddingRight: 4, paddingTop: 12, paddingBottom: i < PARKS_LIST.length - 1 ? 12.682 : 12 }}>
                  {i < PARKS_LIST.length - 1 && <div className="absolute inset-0 rounded-[10px] pointer-events-none" style={{ borderBottom: "0.682px solid rgba(0,0,0,0.08)" }} />}
                  <SmallGreenPin num={m.id} />
                  <span className="text-black whitespace-nowrap" style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, lineHeight: "20px" }}>
                    {m.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1a1a1a] relative shrink-0 w-full">
        <div className="flex flex-col items-start p-4">
          <p className="text-center w-full" style={{ fontFamily: FONT, fontSize: 10, fontWeight: 400, lineHeight: "16.25px", color: "rgba(255,255,255,0.8)" }}>
            Parkmuseerne | c/o Statens Museum for Kunst • Sølvgade 48-50 • 1307 København K
          </p>
        </div>
      </div>
    </div>
  );
}
