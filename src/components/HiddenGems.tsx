import { motion } from "framer-motion";
import { Sparkles, IndianRupee } from "lucide-react";
import { hiddenGems } from "@/data/trips";

import gemMeghalaya from "@/assets/gem-meghalaya.jpg";
import gemSpiti from "@/assets/gem-spiti.jpg";
import gemHampi from "@/assets/gem-hampi.jpg";

const imageMap: Record<string, string> = {
  "gem-meghalaya": gemMeghalaya,
  "gem-spiti": gemSpiti,
  "gem-hampi": gemHampi,
};

const HiddenGems = () => {
  return (
    <section id="hidden-gems" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4" /> Hidden Gems
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-3">
            Offbeat & Underrated
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Low budget. Less crowd. Unforgettable memories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hiddenGems.map((gem, i) => (
            <motion.div
              key={gem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden h-[420px] cursor-pointer"
            >
              <img
                src={imageMap[gem.image]}
                alt={gem.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <IndianRupee className="h-4 w-4 text-accent" />
                  <span className="text-xs font-semibold text-accent">{gem.budget}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary-foreground">{gem.name}</h3>
                <p className="text-sm text-primary-foreground/70 italic mb-2">{gem.tagline}</p>
                <p className="text-sm text-primary-foreground/80 line-clamp-3 group-hover:line-clamp-none transition-all">
                  {gem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiddenGems;
