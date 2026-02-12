import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Send, Sparkles } from "lucide-react";

const interests = ["Adventure", "Spiritual", "Nature", "Party", "History", "Beach", "Mountains"];

const AiPlannerSection = () => {
  const [message, setMessage] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: "Hey! 👋 I'm your AI Trip Planner. Tell me your budget, dates, and what excites you — I'll craft the perfect itinerary!" },
  ]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSend = () => {
    if (!message.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      { role: "user", content: message },
      { role: "assistant", content: "That sounds amazing! 🗺️ Based on your preferences, I'd recommend a 4-day trip to Hampi — ancient ruins, bouldering, and riverside camping for under ₹7,000. Want me to create a detailed day-by-day plan?" },
    ]);
    setMessage("");
  };

  return (
    <section id="ai-planner" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest flex items-center justify-center gap-2">
            <Bot className="h-4 w-4" /> AI-Powered
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-3">
            Your Personal Trip Planner
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Tell us your budget and interests. Our AI builds a custom itinerary in seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Interest Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {interests.map((interest) => (
              <button
                key={interest}
                onClick={() => toggleInterest(interest)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedInterests.includes(interest)
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {interest}
              </button>
            ))}
          </div>

          {/* Chat Window */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden border border-border">
            <div className="h-80 overflow-y-auto p-6 space-y-4">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-4 flex gap-3">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="e.g., I have ₹10,000 for 3 days, love nature..."
                className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={handleSend}
                className="bg-primary text-primary-foreground rounded-xl px-4 py-3 hover:opacity-90 transition-opacity"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
            <Sparkles className="h-3 w-3" /> Connect to Cloud to enable real AI-powered trip planning
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AiPlannerSection;
