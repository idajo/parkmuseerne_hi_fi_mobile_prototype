import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { HamburgerIcon } from "./HamburgerIcon";
import botanicalHero from "../../imports/botanical_garden.png";
import parkLogo from "../../imports/Parkmuseerne/c558da41746efd85c313bcad2c6f96deba71a7c7.png";
// BotanicalGarden-2 Figma assets
import imgImage6 from "../../imports/BotanicalGarden-2/9bd4adf7c1416ac6fa75aaec9295e4e84460e0c5.png";
import imgImage7 from "../../imports/BotanicalGarden-2/00be8eb58c40740372a789bb1175fca39a7b1432.png";

// The Figma frame is 393×1688px.
// imgImage6 covers y=0–1688 (full design screenshot).
// imgImage7 covers y=882–1688 (bottom half reinforcement, rendered at 209.43% h / -109.43% top).
// We crop out the dark museum header (y=0–411) and replace it with our own
// header + hero image. Content shown from y=411 onwards.
//
// At rendered width ≈390px (scale 390/393 ≈ 0.9924):
//   Crop offset  : 411 × 0.9924 ≈ 408px  (marginTop on imgImage6)
//   Content height: (1688−411) × 0.9924 ≈ 1267px
//   imgImage7 starts at (882−411) × 0.9924 ≈ 467px from content top

const CONTENT_HEIGHT = 1267;
const IMG6_CROP     = -408;   // negative marginTop to skip the header area
const IMG7_TOP      =  467;   // px from content top where imgImage7 overlay begins
const IMG7_HEIGHT   =  799;   // (806 × 0.9924)

const NAV_LINKS = [
  "Explore the area", "Museums", "Parks & Gardens",
  "Køb billet", "Events", "About Parkmuseerne", "Contact",
];

interface Props {
  onBack: () => void;
}

export function BotanicalGardenScreen({ onBack }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#FCF5EC] relative">

      {/* ── App header (sticky) ── */}
      <header className="flex items-center justify-between px-4 py-3 bg-[#FCF5EC] flex-shrink-0 border-b border-black/8 sticky top-0 z-20">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-black"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
            Back to Map
          </span>
        </button>
        <button className="p-1" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
          <HamburgerIcon />
        </button>
      </header>

      {/* ── Slide-in menu ── */}
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
              <p className="text-xs text-[#58744A]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                © 2024 Parkmuseerne
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Hero photo (replaces dark museum header) ── */}
      <div className="w-full flex-shrink-0 overflow-hidden" style={{ height: 200 }}>
        <img src={botanicalHero} alt="Botanical Garden" className="w-full h-full object-cover" />
      </div>

      {/* ── Figma design content (y=411 → 1688) ── */}
      {/* Outer clip container, exact height of visible content */}
      <div
        className="relative w-full flex-shrink-0 overflow-hidden"
        style={{ height: CONTENT_HEIGHT }}
      >
        {/* imgImage6 — full 1688px design, shifted up so y=411 aligns to top */}
        <img
          src={imgImage6}
          alt=""
          style={{
            position: "absolute",
            top: IMG6_CROP,
            left: 0,
            width: "100%",
            height: "auto",
            display: "block",
            pointerEvents: "none",
          }}
        />

        {/* imgImage7 — Figma places this at y=882, rendered at 209.43% h / -109.43% top */}
        {/* In our cropped view it starts at IMG7_TOP px from the top */}
        <div
          style={{
            position: "absolute",
            top: IMG7_TOP,
            left: 0,
            right: 0,
            height: IMG7_HEIGHT,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <img
            src={imgImage7}
            alt=""
            style={{
              position: "absolute",
              width: "100%",
              height: "209.43%",
              top: "-109.43%",
              left: 0,
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-[#EDE8DF] border-t border-black/8 px-4 py-5">
        <p
          className="text-center text-[11px] text-black/55 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Parkmuseerne | c/o Statens Museum for Kunst{"\n"}
          Sølvgade 48-50 • 1307 København K
        </p>
      </div>

    </div>
  );
}
