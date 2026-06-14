import { useState } from "react";
import { X } from "lucide-react";
import svgPaths from "../../imports/ParkmuseerneHiFiMobilePrototype-2/svg-hyhthya7sp";
import imgImageBotanicalGarden from "../../imports/ParkmuseerneHiFiMobilePrototype-2/cf170c0c95d371603d644b97bcbec9fe2de94af4.png";
import imgImage1 from "../../imports/image.png";
import parkLogo from "../../imports/ParkmuseerneHiFiMobilePrototype/c558da41746efd85c313bcad2c6f96deba71a7c7.png";

const FONT = "'Source Serif 4', serif";

const HERO_H = 199.994;

const NAV_LINKS = [
  "Explore the area", "Museums", "Parks & Gardens",
  "Køb billet", "Events", "About Parkmuseerne", "Contact",
];

interface Props {
  onBack: () => void;
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

export function BotanicalGardenScreen({ onBack }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col bg-[#fcf5ec] relative" style={{ minHeight: 852.354 }}>

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
                  className={`text-left py-3 border-b border-[#58744A]/10 text-[15px] hover:text-[#58744A] ${
                    link === "Køb billet" ? "text-[#E9672B] font-semibold" : "text-black font-medium"
                  }`}
                  style={{ fontFamily: FONT }}
                >
                  {link}
                </button>
              ))}
            </nav>
            <div className="px-5 py-6">
              <p className="text-xs text-[#58744A]/60" style={{ fontFamily: FONT }}>© 2024 Parkmuseerne</p>
            </div>
          </div>
        </div>
      )}

      {/* Header — sticky, absolute in Figma */}
      <div
        className="bg-[#fcf5ec] sticky top-0 z-20 w-full shrink-0"
        style={{ borderBottom: "0.682px solid rgba(0,0,0,0.08)" }}
      >
        <div className="flex items-center justify-between px-4" style={{ paddingTop: 12, paddingBottom: 12.682 }}>
          {/* Back to Map button */}
          <button onClick={onBack} className="flex items-center gap-2">
            <svg width={17.995} height={17.995} viewBox="0 0 17.9953 17.9953" fill="none">
              <path d={svgPaths.p1c94b100} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49961" />
              <path d="M14.2463 8.99765H3.74902" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49961" />
            </svg>
            <span className="text-black" style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, lineHeight: "20px" }}>Back to Map</span>
          </button>
          {/* Right side: DA|EN + hamburger */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <button className="p-1" aria-label="Menu" onClick={() => setMenuOpen(true)}>
              <HamburgerMenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer matching Figma's PlaceholderForBotanicalGardenScreen (header area in the static layout) */}
      {/* Not needed since header is now sticky in DOM flow */}

      {/* Botanical garden hero image */}
      <div className="relative shrink-0 w-full overflow-hidden" style={{ height: HERO_H }}>
        <img
          alt="Botanical Garden"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImageBotanicalGarden}
        />
      </div>

      {/* Content image — full width, natural height */}
      <img src={imgImage1} alt="Botanical Garden map and information" className="w-full block" />

      {/* Footer */}
      <div
        className="bg-[#ede8df] relative shrink-0 w-full"
        style={{ borderTop: "0.682px solid rgba(0,0,0,0.08)" }}
      >
        <div className="flex flex-col items-start px-4" style={{ paddingTop: 20.682, paddingBottom: 20 }}>
          <p
            className="text-center w-full"
            style={{ fontFamily: FONT, fontSize: 11, fontWeight: 400, lineHeight: "17.875px", color: "rgba(0,0,0,0.55)" }}
          >
            Parkmuseerne | c/o Statens Museum for Kunst Sølvgade 48-50 • 1307 København K
          </p>
        </div>
      </div>

    </div>
  );
}
