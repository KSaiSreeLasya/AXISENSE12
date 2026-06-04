import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Award, Users, Zap } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function About() {
  useSEO({
    title: "AxiSense | Smart Analytics for Smarter Businesses",
    description: "Axisense helps organizations unlock valuable insights through AI-powered analytics, intelligent automation, and innovative technology solutions.",
    canonical: "https://axisense.io/about",
    ogTitle: "AxiSense | Smart Analytics for Smarter Businesses",
    ogDescription: "Axisense helps organizations unlock valuable insights through AI-powered analytics, intelligent automation, and innovative technology solutions.",
  });
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-background to-indigo-50 pt-20 pb-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-slide-up">
            Engineering the Electric Horizon
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            At AxiSense.io, we build the critical data infrastructure
            accelerating the global shift to sustainable mobility.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 border border-border animate-slide-up hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At AxiSense.io, we operate at the intersection of advanced
              hardware and cloud intelligence, fusing precise IoT sensors with
              powerful, real-time analytics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We do not just track vehicles; we optimize entire energy
              ecosystems. By empowering innovators with our proprietary BMS and
              telematics solutions, AxiSense.io is setting the new standard for
              how the world monitors, manages, and moves electric energy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our vision is a world where every EV, every battery, and every
              grid node is connected, measured, and optimized in real-time—creating
              a seamless, efficient, and sustainable energy future.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-border animate-slide-up hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: "100ms" }}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Technical Excellence
              </h3>
              <p className="text-muted-foreground">
                Precision, accuracy, and innovation in every line of code and
                every sensor measurement. We believe in building hardware and
                software that works under real-world stress.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border animate-slide-up hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: "200ms" }}>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Sustainability First
              </h3>
              <p className="text-muted-foreground">
                Every product we build accelerates the transition to clean energy.
                We measure success not just in revenue, but in carbon offset and
                environmental impact.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border animate-slide-up hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: "300ms" }}>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Partnership Mindset
              </h3>
              <p className="text-muted-foreground">
                We succeed when our customers succeed. Our engineering team works
                side-by-side with enterprises to solve real problems at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Why Choose AxiSense.io
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                {
                  title: "Cloud-Native Architecture",
                  description:
                    "Built for scale from day one. Our infrastructure handles billions of data points per day without legacy constraints.",
                },
                {
                  title: "Proprietary Hardware + Software Stack",
                  description:
                    "End-to-end control from sensor to dashboard. No black boxes, no dependencies on third-party telemetry providers.",
                },
                {
                  title: "Enterprise-Grade Security",
                  description:
                    "Military-grade encryption, SOC 2 Type II certified, and active R&D into quantum-resistant protocols.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-indigo-100 to-blue-50 rounded-2xl p-12 h-96"></div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Built by Industry Experts
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            Our team brings decades of experience from Tesla, Lucid Motors,
            GridTech, and leading IoT platforms. We combine deep automotive
            expertise with cloud-scale engineering prowess.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: "Founder & CEO",
                description: "Former Principal Engineer at Tesla Energy",
              },
              {
                role: "Chief Technology Officer",
                description: "Ex-VP of Engineering at Lucid Motors",
              },
              {
                role: "Head of Hardware",
                description: "IoT architect with 15+ years in embedded systems",
              },
            ].map((person, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-border text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {person.role}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {person.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're looking to partner, invest, or explore careers at
            AxiSense.io, we'd love to connect.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
