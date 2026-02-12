import { useState } from "react";
import { MessageCircle, X, Phone, MessageSquare, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingSupport = () => {
  const [open, setOpen] = useState(false);

  const options = [
    { icon: MessageSquare, label: "Live Chat", action: "#" },
    { icon: Phone, label: "Call Support", action: "tel:+911234567890" },
    { icon: MessageCircle, label: "WhatsApp", action: "https://wa.me/911234567890" },
    { icon: HelpCircle, label: "FAQ", action: "#faq" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-4 bg-card rounded-2xl shadow-card-hover border border-border overflow-hidden"
          >
            <div className="p-4 border-b border-border">
              <p className="font-serif font-semibold text-foreground">24/7 Support</p>
              <p className="text-xs text-muted-foreground">We're here to help, anytime.</p>
            </div>
            <div className="p-2">
              {options.map((opt) => (
                <a
                  key={opt.label}
                  href={opt.action}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-foreground hover:bg-muted transition-colors"
                >
                  <opt.icon className="h-4 w-4 text-primary" />
                  {opt.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  );
};

export default FloatingSupport;
