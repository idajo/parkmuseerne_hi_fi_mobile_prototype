import { useState } from "react";
import { X } from "lucide-react";
import parkLogo from "../../imports/ParkmuseerneHiFiMobilePrototype-1/c558da41746efd85c313bcad2c6f96deba71a7c7.webp";
import heroImage from "../../imports/ParkmuseerneHiFiMobilePrototype-1/b77c9a85cc3672710566fceeac353d600e075c0a.webp";

interface Props {
  onExplore: () => void;
}

const NAV_LINKS = [
  "Explore the area",
  "Museums",
  "Parks & Gardens",
  "Køb billet",
  "Events",
  "About Parkmuseerne",
  "Contact",
];

function LanguageSelector() {
  return (
    <p className="tracking-[0.275px] whitespace-nowrap" style={{ fontFamily: "'Source Serif 4', serif", fontSize: 11, color: "rgba(0,0,0,0.5)" }}>
      <span style={{ fontSize: 11, lineHeight: "16.5px" }}>DA</span>
      <span style={{ fontSize: 11, lineHeight: "16.5px", color: "rgba(0,0,0,0.3)" }}>|</span>
      <span style={{ fontSize: 11, lineHeight: "16.5px", color: "#000", fontWeight: 700 }}>EN</span>
    </p>
  );
}

function HamburgerIcon() {
  return (
    <div className="flex flex-col gap-[5px]" style={{ width: 28 }}>
      <div className="bg-[#58744a] rounded-[6px]" style={{ height: 2.994, width: 18.198 }} />
      <div className="bg-[#58744a] rounded-[6px]" style={{ height: 2.994, width: 28 }} />
      <div className="bg-[#58744a] rounded-[6px]" style={{ height: 2.994, width: 11.752 }} />
    </div>
  );
}

export function WelcomeScreen({ onExplore }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf5ec] relative">

      {/* Slide-in menu overlay */}
      {menuOpen && (
        <div className="absolute inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-4/5 bg-[#FCF5EC] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#58744A]/10">
              <img src={parkLogo} alt="Parkmuseerne" className="h-9 w-auto object-contain" />
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={22} className="text-black" />
              </button>
            </div>
            <nav className="flex flex-col flex-1 px-5 pt-6 gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => setMenuOpen(false)}
                  className={`text-left py-3 border-b border-[#58744A]/10 font-medium text-[15px] transition-colors hover:text-[#58744A] ${
                    link === "Køb billet" ? "text-[#E9672B] font-semibold" : "text-black"
                  }`}
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  {link}
                </button>
              ))}
            </nav>
            <div className="px-5 py-6">
              <p className="text-xs text-[#58744A]/60" style={{ fontFamily: "'Source Serif 4', serif" }}>© 2024 Parkmuseerne</p>
            </div>
          </div>
        </div>
      )}

      {/* Header — logo left, DA|EN + hamburger right */}
      <div className="bg-[#fcf5ec] relative shrink-0 w-full z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="h-[43.992px] relative" style={{ width: 60.091 }}>
            <img alt="Parkmuseerne" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={parkLogo} />
          </div>
          <div className="flex gap-3 items-center">
            <LanguageSelector />
            <button className="p-1" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Hero image — 519px tall, full width */}
      <div className="relative shrink-0 w-full overflow-hidden" style={{ height: 519.403 }}>
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={heroImage}
        />
        {/* Gradient overlay: transparent left → dark right */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to left, rgba(0,0,0,0.75), rgba(0,0,0,0.3) 50%, rgba(0,0,0,0))" }} />
        {/* Heading — bottom of hero, right-aligned, matching Figma positioning */}
        <div className="absolute" style={{ top: 401.92, left: 136, width: 233.992, height: 97.488 }}>
          <p
            className="absolute text-white text-right uppercase"
            style={{
              fontFamily: "'Montagu Slab', serif",
              fontSize: 26,
              lineHeight: "32.5px",
              letterSpacing: "0.52px",
              width: 325,
              top: 49.09,
              left: 240.49,
              transform: "translateX(-100%)",
            }}
          >
            YOU JUST ENTERED PARKMUSEERNE
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-5 pt-5 pb-4">
        <p
          className="text-[#2a2a2a] mb-6"
          style={{ fontFamily: "'Source Serif 4', serif", fontSize: 16, lineHeight: "26px" }}
        >
          You have scanned the QR code and are now ready to explore Parkmuseerne.
        </p>
        <div className="bg-[#e9672b]" style={{ width: 349.998 }}>
          <button
            onClick={onExplore}
            className="w-full py-4 text-white text-center"
            style={{ fontFamily: "'Source Serif 4', serif", fontSize: 16, fontWeight: 600, letterSpacing: "0.4px", lineHeight: "24px" }}
          >
            Continue to map
          </button>
        </div>
      </div>

    </div>
  );
}
