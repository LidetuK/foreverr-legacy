import ScrollReveal from "./ScrollReveal";
import { UserPlus, Share2, Heart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create a Memorial",
    description: "Set up a profile for your loved one in minutes.",
  },
  {
    icon: Share2,
    step: "02",
    title: "Invite the Circle",
    description: "Share a private or public link with friends and family worldwide.",
  },
  {
    icon: Heart,
    step: "03",
    title: "Honor Together",
    description: "Post photos, host the service live, and collect tributes that will be cherished for generations.",
  },
];

const ShowcaseSection = () => {
  return (
    <section id="download" className="section-padding bg-purple-mist">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Get Started</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Three Simple Steps to{" "}
              <span className="gradient-text">Preserve a Legacy</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 150}>
              <div className="feature-card text-center relative">
                <span className="absolute top-4 right-6 text-5xl font-bold text-primary/5 font-serif">
                  {s.step}
                </span>
                <div className="w-16 h-16 rounded-2xl gradient-purple flex items-center justify-center mx-auto mb-6">
                  <s.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Download CTA */}
        <ScrollReveal>
          <div className="gradient-purple rounded-lg p-10 md:p-16 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Download FOREVERR Today
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Available on Android and iOS. Start preserving the memories that matter most.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="glass-card bg-primary-foreground/10 border-primary-foreground/20 px-6 py-3 inline-flex items-center gap-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.38l2.423 1.402c.594.344.594 1.198 0 1.542l-2.423 1.402-2.534-2.534 2.534-2.812zM5.864 2.658L16.8 9.284l-2.302 2.302-8.634-8.928z"/></svg>
                Google Play
              </a>
              <a
                href="#"
                className="glass-card bg-primary-foreground/10 border-primary-foreground/20 px-6 py-3 inline-flex items-center gap-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ShowcaseSection;
