import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { DistrictMapScreen, MUSEUMS, type Museum } from "./components/DistrictMapScreen";
import { BotanicalGardenScreen } from "./components/BotanicalGardenScreen";
import { MuseumModal } from "./components/MuseumModal";

type Screen = "welcome" | "map" | "botanical";

export default function App() {
  /* MARKER-MAKE-KIT-INVOKED */
  const [screen, setScreen] = useState<Screen>("welcome");
  const [activeMuseum, setActiveMuseum] = useState<Museum | null>(null);

  const handlePinClick = (museum: Museum) => {
    // Pin 2 (Palm House area) leads to botanical garden screen
    if (museum.id === 3) {
      setScreen("botanical");
    } else {
      setActiveMuseum(museum);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #e8e0d5 0%, #d4cfc8 100%)" }}
    >
      {/* Phone frame */}
      <div
        className="relative overflow-hidden flex-shrink-0 bg-[#FCF5EC]"
        style={{
          width: 390,
          height: 844,
          borderRadius: 44,
          boxShadow: "0 40px 80px rgba(0,0,0,0.35), 0 0 0 12px #1a1a1a, 0 0 0 14px #333",
        }}
      >
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-11 bg-[#FCF5EC] flex items-center justify-between px-6 z-40 pointer-events-none">
          <span className="text-black text-xs font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>9:41</span>
          <div className="w-24 h-6 bg-black rounded-full absolute left-1/2 -translate-x-1/2" />
          <div className="flex items-center gap-1">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0" y="3" width="3" height="9" rx="0.5" fill="black" />
              <rect x="4.5" y="2" width="3" height="10" rx="0.5" fill="black" />
              <rect x="9" y="0.5" width="3" height="11.5" rx="0.5" fill="black" />
              <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" fill="black" opacity="0.3" />
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="black">
              <rect x="1" y="3" width="13" height="7" rx="1.5" stroke="black" strokeWidth="1.2" fill="none" />
              <rect x="2.5" y="4.5" width="8" height="4" rx="0.5" fill="black" />
              <path d="M15 5.5V8.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Screen content — scrollable area below status bar */}
        <div className="absolute inset-0 top-11 bottom-5 overflow-y-auto overflow-x-hidden">
          {screen === "welcome" && (
            <WelcomeScreen onExplore={() => setScreen("map")} />
          )}
          {screen === "map" && (
            <div className="relative">
              <DistrictMapScreen
                onBack={() => setScreen("welcome")}
                onPinClick={handlePinClick}
              />
              <MuseumModal
                museum={activeMuseum}
                onClose={() => setActiveMuseum(null)}
                onBotanical={() => { setActiveMuseum(null); setScreen("botanical"); }}
              />
            </div>
          )}
          {screen === "botanical" && (
            <BotanicalGardenScreen onBack={() => setScreen("map")} />
          )}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/25 rounded-full pointer-events-none" />
      </div>
    </div>
  );
}
