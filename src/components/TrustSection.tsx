import { Shield, Globe, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Unlike standard social networks, our platform is a respectful, ad-free environment dedicated solely to memorialization.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description:
      "Built for international families, specifically supporting the connection between the diaspora and their home countries.",
  },
  {
    icon: Clock,
    title: "Permanence",
    description:
      "Your data and memories are stored securely. We believe a legacy should last forever.",
  },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Safe, Secure, and{" "}
              <span className="gradient-text">Respectful.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A private space for your most cherished memories.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 100}>
              <div className="feature-card text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-6">
                  <r.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
