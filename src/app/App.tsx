import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { DistrictMapScreen, type Museum } from "./components/DistrictMapScreen";
import { BotanicalGardenScreen } from "./components/BotanicalGardenScreen";
import { MuseumModal } from "./components/MuseumModal";

type Screen = "welcome" | "map" | "botanical";

export default function App() {
  /* MARKER-MAKE-KIT-INVOKED */
  const [screen, setScreen] = useState<Screen>("welcome");
  const [activeMuseum, setActiveMuseum] = useState<Museum | null>(null);

  const handlePinClick = (museum: Museum) => {
    if (museum.id === 7 || museum.id === 9) {
      setActiveMuseum(null);
      return;
    }

    // Pin 8 (Botanisk Have) leads to the botanical garden screen
    if (museum.id === 8) {
      setScreen("botanical");
    } else {
      setActiveMuseum(museum);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center bg-[#FCF5EC]">
      <div className="w-full max-w-[390px] min-h-screen overflow-x-hidden">
        {screen === "welcome" && <WelcomeScreen onExplore={() => setScreen("map")} />}
        {screen === "map" && (
          <div className="relative">
            <DistrictMapScreen onBack={() => setScreen("welcome")} onPinClick={handlePinClick} />
            <MuseumModal
              museum={activeMuseum}
              onClose={() => setActiveMuseum(null)}
              onBotanical={() => {
                setActiveMuseum(null);
                setScreen("botanical");
              }}
            />
          </div>
        )}
        {screen === "botanical" && <BotanicalGardenScreen onBack={() => setScreen("map")} />}
      </div>
    </div>
  );
}
