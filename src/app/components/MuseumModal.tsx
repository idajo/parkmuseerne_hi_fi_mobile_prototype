import { X, Clock, MapPin, ExternalLink, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Museum {
  id: number;
  name: string;
  subtitle?: string;
  image?: string;
}

interface Props {
  museum: Museum | null;
  onClose: () => void;
  onBotanical?: () => void;
}

export function MuseumModal({ museum, onClose, onBotanical }: Props) {
  return (
    <AnimatePresence>
      {museum && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-20"
          />

          {/* Bottom sheet — fixed to viewport, constrained to mobile width */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white rounded-t-2xl z-30 overflow-hidden shadow-2xl"
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 bg-gray-200 rounded-full" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <div className="px-5 pb-6 pt-2">
              {/* Museum image strip */}
              <div className="w-full h-28 rounded-xl overflow-hidden mb-4 bg-[#d6cfc4]">
                <img
                  src={museum.image ?? "https://images.unsplash.com/photo-1566127992631-137a642a90f4?w=600&h=200&fit=crop&auto=format"}
                  alt={museum.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Museum name */}
              <h2
                className="text-black text-2xl font-black leading-tight mb-3"
                style={{ fontFamily: "'Montagu Slab', serif" }}
              >
                {museum.name}
              </h2>

              {/* Description */}
              <p
                className="text-gray-600 text-sm leading-relaxed mb-1"
                style={{ fontFamily: "'Source Serif 4', serif" }}
              >
                An extraordinary collection spanning art and cultural heritage in the heart of Copenhagen's museum district.
              </p>
              <p
                className="text-gray-600 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "'Source Serif 4', serif" }}
              >
                Permanent exhibitions alongside rotating international displays — something new every visit.
              </p>

              {/* Metadata badges */}
              <div className="flex gap-2 mb-5">
                <div className="flex items-center gap-1.5 bg-[#FCF5EC] border border-[#58744A]/20 rounded-full px-3 py-1.5">
                  <Clock size={12} className="text-[#58744A]" />
                  <span
                    className="text-xs font-medium text-black"
                    style={{ fontFamily: "'Source Serif 4', serif" }}
                  >
                    Opening Hours: 10–17
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#FCF5EC] border border-[#58744A]/20 rounded-full px-3 py-1.5">
                  <MapPin size={12} className="text-[#58744A]" />
                  <span
                    className="text-xs font-medium text-black"
                    style={{ fontFamily: "'Source Serif 4', serif" }}
                  >
                    4 min walk
                  </span>
                </div>
              </div>

              {/* Split action buttons */}
              <div className="flex gap-3 mb-4">
                <button
                  className="flex-1 border-2 border-[#58744A] text-[#58744A] py-3 font-semibold text-sm flex items-center justify-center gap-2 rounded-sm transition-colors hover:bg-[#58744A]/5"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  <Navigation size={15} />
                  Get directions
                </button>
                <button
                  className="flex-1 bg-[#E9672B] text-white py-3 font-semibold text-sm flex items-center justify-center gap-2 rounded-sm transition-opacity hover:opacity-90 shadow-md"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  Buy ticket
                </button>
              </div>

              {/* Inline text link */}
              <div className="flex justify-center">
                <button
                  className="flex items-center gap-1.5 text-[#58744A] text-sm font-medium underline underline-offset-2"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  See current exhibitions
                  <ExternalLink size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
