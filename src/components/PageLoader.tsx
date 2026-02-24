import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] gradient-navy flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets%2F36956977346e4857a08b0a5b876a1b79%2Ffdde913ef95a4b81a334018214d08d4c?format=webp&width=800&height=1200"
              alt="HZ Details"
              className="w-48 h-48 object-contain"
              initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
              className="h-1 rounded-full gradient-accent"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="font-heading text-sm font-semibold text-silver-light tracking-widest uppercase"
            >
              Premium Auto Detailing
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
