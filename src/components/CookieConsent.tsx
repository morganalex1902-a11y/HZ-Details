import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hz-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("hz-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("hz-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 z-[90] sm:left-auto sm:right-6 sm:max-w-md"
        >
          <div className="clay-card glass-panel p-5 relative">
            <button
              onClick={decline}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl gradient-navy flex items-center justify-center shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground text-sm mb-1">We Use Cookies</h4>
                <p className="font-body text-muted-foreground text-xs leading-relaxed mb-3">
                  We use cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept," you consent to our use of cookies.
                </p>
                <div className="flex gap-2">
                  <button onClick={accept} className="btn-accent text-xs py-2 px-4">
                    Accept
                  </button>
                  <button onClick={decline} className="clay-button bg-secondary text-secondary-foreground text-xs py-2 px-4">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
