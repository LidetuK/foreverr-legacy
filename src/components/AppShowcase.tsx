import ScrollReveal from "./ScrollReveal";
import showcaseSignup from "@/assets/showcase-signup.png";
import showcaseFlowers from "@/assets/showcase-flowers.png";
import showcaseMemorial from "@/assets/showcase-memorial.png";
import showcaseFollowers from "@/assets/showcase-followers.png";
import showcaseNotifications from "@/assets/showcase-notifications.png";
import showcaseLivestream from "@/assets/showcase-livestream.png";

const screenshots = [
  { src: showcaseLivestream, alt: "Live-streamed memorial service with audience participation", label: "Live Streaming" },
  { src: showcaseFlowers, alt: "Honors with Flowers virtual gifting system", label: "Virtual Gifting" },
  { src: showcaseMemorial, alt: "Memorial profile with events and timeline", label: "Memorial Profile" },
  { src: showcaseFollowers, alt: "Followers and community features", label: "Community" },
  { src: showcaseNotifications, alt: "Notifications panel", label: "Notifications" },
  { src: showcaseSignup, alt: "Sign up screen for FOREVERR app", label: "Easy Sign Up" },
];

const AppShowcase = () => {
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

        {/* Scrolling showcase */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {screenshots.map((shot, i) => (
            <ScrollReveal key={shot.label} delay={i * 80} className="flex-shrink-0 snap-center">
              <div className="w-72 md:w-80 group">
                <div className="glass-card overflow-hidden mb-3 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-semibold text-foreground text-center">{shot.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
