import { MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-lg font-serif font-bold text-background">DesiMiles</span>
          </div>
          <p className="text-sm text-background/60">
            Smart travel planning with complete budget transparency. Your adventure, your budget.
          </p>
        </div>

        <div>
          <h4 className="font-serif font-semibold text-background mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><a href="/#trips" className="hover:text-primary transition-colors">Trip Packages</a></li>
            <li><a href="/#hidden-gems" className="hover:text-primary transition-colors">Hidden Gems</a></li>
            <li><a href="/#ai-planner" className="hover:text-primary transition-colors">AI Planner</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-semibold text-background mb-4">Budget Tiers</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li>₹5K–₹10K Trips</li>
            <li>₹10K–₹20K Trips</li>
            <li>₹20K–₹50K Trips</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-semibold text-background mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li>24/7 Live Chat</li>
            <li>WhatsApp Support</li>
            <li>support@desiMiles.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-background/10 text-center text-xs text-background/40">
        © 2026 BudgetYatra. All rights reserved. Travel smart, travel happy.
      </div>
    </div>
  </footer>
);

export default Footer;
