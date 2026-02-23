import ScrollReveal from "./ScrollReveal";

const ProblemSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Distance Shouldn't Keep Us Apart in{" "}
            <span className="gradient-text">Moments of Grief.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            In a global world, we can't always be physically present to say goodbye. 
            FOREVERR.APP bridges the gap, allowing family and friends from New York to Accra—and 
            everywhere in between—to come together, mourn, and celebrate a life well-lived in real-time.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
