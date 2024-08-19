import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";

function Card({
  url,
  id,
  content,
}: {
  url: string;
  id: string;
  content: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={() => setOpen(false)}
          className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/50 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"big-image-" + id}
        >
          <div className="absolute bottom-8 left-8 bg-white/80 rounded p-4">
            {content}
          </div>
          <img
            src={url}
            className=" object-fill max-w-[100vw] max-h-[100vh] md:max-w-[80vw] md:max-h-[80vh] "
          />
        </motion.div>
      )}
      <button
        onClick={() => setOpen(true)}
        key={"small-image-" + id}
        className="overflow-hidden rounded-3xl"
      >
        <img src={url} className="h-64 w-[400px] object-fill" />
      </button>
    </AnimatePresence>
  );
}

export default Card;
