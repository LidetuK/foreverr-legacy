import { Video, Flower2, CalendarDays, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Video,
    title: "Live-Streamed Memorials",
    description:
      "Don't just watch; participate. Join live virtual services with high-quality video, interactive audience participation, and real-time support.",
  },
  {
    icon: Flower2,
    title: "Honors with Flowers",
    description:
      "Express your sympathy through our unique gifting system. Send virtual roses and tokens of honor that remain on the memorial profile forever as a symbol of your love.",
  },
  {
    icon: CalendarDays,
    title: "Digital Timelines & Milestones",
    description:
      "Map out a life story. From birthdays to wake services, create a chronological journey of your loved one's most important moments.",
  },
  {
    icon: Heart,
    title: "Tributes & Social Reactions",
    description:
      "Leave a \"Spirit,\" share a \"Tribute,\" or follow a memorial to stay connected. A social network designed purely for legacy, free from noise.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-purple-mist">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Everything You Need to{" "}
              <span className="gradient-text">Honor a Legacy</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 100}>
              <div className="feature-card h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl gradient-purple flex items-center justify-center mb-6">
                  <feature.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
