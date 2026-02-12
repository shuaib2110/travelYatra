import { useState } from "react";
import { Search, MapPin, IndianRupee, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-travel.jpg";

const budgetOptions = ["₹5,000–₹10,000", "₹10,000–₹20,000", "₹20,000–₹50,000", "₹50,000+"];
const travelTypes = ["Solo", "Friends", "Couple", "Family"];

const HeroSection = () => {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState("");
  const [travelType, setTravelType] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img src={heroImg} alt="Stunning mountain valley" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight"
        >
          Travel Smart.
          <br />
          Travel Within Budget.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12"
        >
          Discover affordable trips with complete budget breakdowns. No surprises, just adventures.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass rounded-2xl p-4 md:p-6 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Destination */}
            <div className="flex items-center gap-3 bg-card/90 rounded-xl px-4 py-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where to?"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
            </div>

            {/* Budget */}
            <div className="flex items-center gap-3 bg-card/90 rounded-xl px-4 py-3">
              <IndianRupee className="h-5 w-5 text-primary shrink-0" />
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-transparent text-sm text-foreground outline-none appearance-none"
              >
                <option value="">Budget Range</option>
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Days */}
            <div className="flex items-center gap-3 bg-card/90 rounded-xl px-4 py-3">
              <Calendar className="h-5 w-5 text-primary shrink-0" />
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                placeholder="No. of Days"
                min={1}
                max={30}
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
            </div>

            {/* Travel Type */}
            <div className="flex items-center gap-3 bg-card/90 rounded-xl px-4 py-3">
              <Users className="h-5 w-5 text-primary shrink-0" />
              <select
                value={travelType}
                onChange={(e) => setTravelType(e.target.value)}
                className="w-full bg-transparent text-sm text-foreground outline-none appearance-none"
              >
                <option value="">Travel Type</option>
                {travelTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <button className="mt-4 w-full md:w-auto rounded-full bg-primary px-8 py-3.5 text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mx-auto">
            <Search className="h-4 w-4" />
            Plan My Trip
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
