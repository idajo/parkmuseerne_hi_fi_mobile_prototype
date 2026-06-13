import { useState } from "react";
import { X } from "lucide-react";
import parkLogo from "../../imports/Parkmuseerne/c558da41746efd85c313bcad2c6f96deba71a7c7.png";
import heroImage from "../../imports/image-1.png";
import { HamburgerIcon } from "./HamburgerIcon";

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

export function WelcomeScreen({ onExplore }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#FCF5EC] relative">
      {/* Minimal nav — logo left, hamburger right */}
      <header className="flex items-center justify-between px-4 py-3 bg-[#FCF5EC] flex-shrink-0 z-10">
        <img src={parkLogo} alt="Parkmuseerne" className="h-11 w-auto object-contain" />
        <button className="p-1" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
          <HamburgerIcon />
        </button>
      </header>

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
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link}
                </button>
              ))}
            </nav>
            <div className="px-5 py-6">
              <p className="text-xs text-[#58744A]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                © 2024 Parkmuseerne
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero image */}
      <div className="flex-shrink-0 relative overflow-hidden" style={{ height: "55%" }}>
        <img src={heroImage} alt="Parkmuseerne park alley" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/75 via-black/30 to-transparent" />
        <h1
          className="absolute bottom-5 right-5 text-white text-[26px] font-black leading-tight uppercase text-right"
          style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.02em", maxWidth: "60%" }}
        >
          YOU JUST ENTERED PARKMUSEERNE
        </h1>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-5 pt-5 pb-4">
        <p
          className="text-[#2a2a2a] text-base leading-relaxed mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          You have scanned the QR code and are now ready to explore the Parkmuseerne area.
        </p>
        <button
          onClick={onExplore}
          className="w-full bg-[#E9672B] text-white py-4 font-semibold text-base tracking-wide transition-opacity hover:opacity-90 active:opacity-80 rounded-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Continue to map
        </button>
      </div>

    </div>
  );
}
