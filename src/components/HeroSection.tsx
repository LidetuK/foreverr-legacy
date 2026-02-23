import heroPhone from "@/assets/hero-phone-mockup.png";
import ScrollReveal from "./ScrollReveal";
import { Play, Apple } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm font-medium text-muted-foreground">
                <span className="w-2 h-2 rounded-full gradient-purple" />
                Part of the ECKZET Ecosystem
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] text-balance">
                Keeping Their Spirit{" "}
                <span className="gradient-text">Alive, Everywhere.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                The world's first dedicated social memorial platform. Host live-streamed services, 
                share beautiful tributes, and preserve your loved one's legacy in a space built for 
                honor and respect.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#download"
                  className="btn-primary-gradient px-6 py-3.5 inline-flex items-center gap-3 text-sm"
                >
                  <Play size={18} fill="currentColor" />
                  Google Play
                </a>
                <a
                  href="#download"
                  className="glass-card px-6 py-3.5 inline-flex items-center gap-3 text-sm font-semibold text-foreground hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Apple size={18} />
                  App Store
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                  <p className="text-xs text-muted-foreground">Active Users</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-xs text-muted-foreground">Countries</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">∞</p>
                  <p className="text-xs text-muted-foreground">Memories</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Phone Mockup */}
          <ScrollReveal delay={200} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full purple-glow scale-150 opacity-40" />
              <img
                src={heroPhone}
                alt="FOREVERR App memorial profile interface"
                className="relative w-72 sm:w-80 lg:w-96 animate-float drop-shadow-2xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
