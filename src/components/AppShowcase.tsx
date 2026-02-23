import { useState, useEffect, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";
import showcaseSignup from "@/assets/showcase-signup.png";
import showcaseFlowers from "@/assets/showcase-flowers.png";
import showcaseMemorial from "@/assets/showcase-memorial.png";
import showcaseFollowers from "@/assets/showcase-followers.png";
import showcaseNotifications from "@/assets/showcase-notifications.png";
import showcaseLivestream from "@/assets/showcase-livestream.png";

const screenshots = [
  { src: showcaseLivestream, alt: "Live-streamed memorial service", label: "Live Streaming", desc: "Join virtual services in real-time" },
  { src: showcaseFlowers, alt: "Honors with Flowers", label: "Virtual Gifting", desc: "Send tokens of honor and love" },
  { src: showcaseMemorial, alt: "Memorial profile with timeline", label: "Memorial Profile", desc: "Map out a life story" },
  { src: showcaseFollowers, alt: "Community and followers", label: "Community", desc: "Stay connected with loved ones" },
  { src: showcaseNotifications, alt: "Notifications panel", label: "Notifications", desc: "Never miss a tribute" },
  { src: showcaseSignup, alt: "Easy sign up flow", label: "Easy Sign Up", desc: "Get started in minutes" },
];

const AppShowcase = () => {
  const [active, setActive] = useState(0);
  const total = screenshots.length;

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, [next]);

  const getOffset = (index: number) => {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">App Preview</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              See FOREVERR{" "}
              <span className="gradient-text">in Action</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative h-[420px] md:h-[480px] flex items-center justify-center">
          {screenshots.map((shot, i) => {
            const offset = getOffset(i);
            const isActive = offset === 0;
            const absOffset = Math.abs(offset);
            const visible = absOffset <= 2;

            return (
              <button
                key={shot.label}
                onClick={() => setActive(i)}
                className="absolute transition-all duration-700 ease-in-out cursor-pointer focus:outline-none"
                style={{
                  transform: `translateX(${offset * 280}px) scale(${isActive ? 1 : 0.75 - absOffset * 0.05})`,
                  zIndex: 10 - absOffset,
                  opacity: visible ? (isActive ? 1 : 0.4) : 0,
                  pointerEvents: visible ? "auto" : "none",
                  filter: isActive ? "none" : "brightness(0.6)",
                }}
                aria-label={`View ${shot.label}`}
              >
                <div
                  className={`w-56 md:w-72 overflow-hidden transition-shadow duration-700 ${
                    isActive
                      ? "shadow-2xl ring-2 ring-accent/40"
                      : "shadow-lg"
                  }`}
                  style={{ borderRadius: "var(--radius)" }}
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active label */}
        <div className="text-center mt-6 min-h-[56px]">
          <p className="font-serif text-xl font-bold text-foreground transition-all duration-500">
            {screenshots[active].label}
          </p>
          <p className="text-sm text-muted-foreground">{screenshots[active].desc}</p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === active
                  ? "w-6 bg-accent"
                  : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
