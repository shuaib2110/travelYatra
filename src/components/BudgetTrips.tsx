import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, IndianRupee, ArrowRight } from "lucide-react";
import { trips } from "@/data/trips";

import tripRishikesh from "@/assets/trip-rishikesh.jpg";
import tripGoa from "@/assets/trip-goa.jpg";
import tripManali from "@/assets/trip-manali.jpg";
import tripKerala from "@/assets/trip-kerala.jpg";
import tripRajasthan from "@/assets/trip-rajasthan.jpg";
import tripDarjeeling from "@/assets/trip-darjeeling.jpg";

const imageMap: Record<string, string> = {
  "trip-rishikesh": tripRishikesh,
  "trip-goa": tripGoa,
  "trip-manali": tripManali,
  "trip-kerala": tripKerala,
  "trip-rajasthan": tripRajasthan,
  "trip-darjeeling": tripDarjeeling,
};

const budgetCategories = [
  { key: "low" as const, label: "₹5K–₹10K Trips", color: "bg-primary" },
  { key: "mid" as const, label: "₹10K–₹20K Trips", color: "bg-budget-mid" },
  { key: "high" as const, label: "₹20K–₹50K Trips", color: "bg-accent" },
];

const BudgetTrips = () => {
  return (
    <section id="trips" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Explore By Budget</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-3">
            Trips For Every Wallet
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Complete packages with transparent pricing. No hidden costs, ever.
          </p>
        </motion.div>

        {budgetCategories.map((cat) => {
          const catTrips = trips.filter((t) => t.category === cat.key);
          if (catTrips.length === 0) return null;

          return (
            <div key={cat.key} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <div className={`h-3 w-3 rounded-full ${cat.color}`} />
                <h3 className="text-xl font-serif font-semibold text-foreground">{cat.label}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catTrips.map((trip, i) => (
                  <motion.div
                    key={trip.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={`/trip/${trip.id}`}
                      className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={imageMap[trip.image]}
                          alt={trip.destination}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          {trip.budgetLabel}
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-serif font-semibold text-card-foreground">{trip.destination}</h4>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{trip.description}</p>
                        <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{trip.duration}</span>
                          <span className="flex items-center gap-1"><IndianRupee className="h-3.5 w-3.5" />{trip.budgetLabel}</span>
                        </div>
                        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                          View Full Plan <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BudgetTrips;
