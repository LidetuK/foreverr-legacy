import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="section-padding bg-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
                ECKZET Group
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                A Complete Circle{" "}
                <span className="gradient-text">of Care.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                FOREVERR.APP is proud to be part of the ECKZET Group family. While we handle your 
                digital legacy, our partner EXXiiT.com handles the physical logistics—from funeral 
                planning to vendor management. Together, we provide a 360-degree solution for families 
                during life's most delicate transitions.
              </p>
              <a
                href="https://exxit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
              >
                Learn about EXXiiT <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="feature-card text-center">
                <div className="w-12 h-12 rounded-xl gradient-purple mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">F</span>
                </div>
                <h4 className="font-serif font-bold text-foreground mb-1">FOREVERR</h4>
                <p className="text-xs text-muted-foreground">Digital Legacy</p>
              </div>
              <div className="feature-card text-center">
                <div className="w-12 h-12 rounded-xl bg-foreground mx-auto mb-4 flex items-center justify-center">
                  <span className="text-background font-bold text-lg">E</span>
                </div>
                <h4 className="font-serif font-bold text-foreground mb-1">EXXiiT</h4>
                <p className="text-xs text-muted-foreground">Physical Logistics</p>
              </div>
              <div className="col-span-2 feature-card text-center">
                <p className="text-sm font-semibold text-foreground">Powered by</p>
                <p className="font-serif text-2xl font-bold gradient-text">ECKZET Group</p>
                <p className="text-xs text-muted-foreground mt-1">A 360° Solution for Families</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
