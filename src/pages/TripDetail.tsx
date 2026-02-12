import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Train, Hotel, UtensilsCrossed, Car, Ticket, IndianRupee, Lightbulb, MapPin, Calendar } from "lucide-react";
import { trips } from "@/data/trips";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSupport from "@/components/FloatingSupport";

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

const TripDetail = () => {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === id);

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Trip Not Found</h1>
          <Link to="/" className="text-primary font-medium hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src={imageMap[trip.image]} alt={trip.destination} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Trips
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">{trip.destination}</h1>
            <div className="flex items-center gap-4 mt-3 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{trip.duration}</span>
              <span className="flex items-center gap-1"><IndianRupee className="h-4 w-4" />{trip.totalBudget}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Itinerary */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" /> Day-wise Itinerary
              </h2>
              <div className="space-y-4">
                {trip.itinerary.map((day) => (
                  <div key={day.day} className="bg-card rounded-xl p-5 shadow-card border border-border">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-primary">{day.day}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground">{day.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{day.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* How to Reach */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
                <Train className="h-5 w-5 text-primary" /> How to Reach
              </h2>
              <div className="bg-card rounded-xl p-5 shadow-card border border-border space-y-3">
                {trip.transport.map((t, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-card-foreground">{t.mode}</span>
                    <span className="font-medium text-primary">{t.cost}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Hidden Places */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" /> Hidden Places Nearby
              </h2>
              <div className="flex flex-wrap gap-3">
                {trip.hiddenPlaces.map((place) => (
                  <span key={place} className="bg-accent/10 text-accent text-sm font-medium px-4 py-2 rounded-full">
                    {place}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Budget Breakdown */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border sticky top-24">
              <h3 className="text-lg font-serif font-bold text-card-foreground mb-4 flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-primary" /> Budget Breakdown
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground"><Hotel className="h-4 w-4" /> Stay</span>
                  <span className="text-card-foreground">{trip.stays[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground"><UtensilsCrossed className="h-4 w-4" /> Food</span>
                  <span className="text-card-foreground">{trip.foodCost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground"><Car className="h-4 w-4" /> Local Transport</span>
                  <span className="text-card-foreground">{trip.localTransport}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground"><Ticket className="h-4 w-4" /> Entry Tickets</span>
                  <span className="text-card-foreground">{trip.entryCosts}</span>
                </div>
                <div className="border-t border-border pt-3 mt-3 flex justify-between font-semibold">
                  <span className="text-card-foreground">Total Estimated</span>
                  <span className="text-primary text-lg">{trip.totalBudget}</span>
                </div>
              </div>
            </div>

            {/* Money Saving Tips */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="text-lg font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-accent" /> Money-Saving Tips
              </h3>
              <ul className="space-y-2">
                {trip.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingSupport />
    </div>
  );
};

export default TripDetail;
