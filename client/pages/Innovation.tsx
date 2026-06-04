import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Zap, Brain, Cpu, Lock } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function Innovation() {
  useSEO({
    title: "AxiSense | Advanced AI & Digital Transformation Solutions",
    description: "Explore cutting-edge AI, machine learning, analytics, and digital transformation services that help businesses stay ahead in a competitive market.",
    canonical: "https://axisense.io/innovation",
    ogTitle: "AxiSense | Advanced AI & Digital Transformation Solutions",
    ogDescription: "Explore cutting-edge AI, machine learning, analytics, and digital transformation services that help businesses stay ahead in a competitive market.",
  });
  const innovations = [
    {
      icon: Zap,
      title: "V2G (Vehicle-to-Grid) Orchestration",
      description:
        "Pioneering bi-directional energy flow protocols. We are developing frameworks that allow EV fleets to act as mobile, high-capacity energy storage units—stabilizing local grids and unlocking new revenue streams for fleet operators.",
      status: "In Development",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      icon: Brain,
      title: "Predictive AI for Battery Degradation",
      description:
        "Moving beyond monitoring into forecasting. By training machine learning models on millions of BMS data points, we are engineering AI that predicts thermal runaway and cell degradation months before a physical failure occurs.",
      status: "Research Phase",
      statusColor: "bg-purple-100 text-purple-700",
    },
    {
      icon: Cpu,
      title: "Edge-AI Processing for Autonomous Integration",
      description:
        "Reducing cloud latency by processing critical data directly on the vehicle. Our exploratory edge-computing modules are designed to support the split-second decision-making required for autonomous EV platforms.",
      status: "Prototype",
      statusColor: "bg-amber-100 text-amber-700",
    },
    {
      icon: Lock,
      title: "Next-Gen Automotive Cybersecurity",
      description:
        "As vehicles become rolling data centers, security is paramount. We are testing quantum-resistant encryption protocols to ensure that over-the-air (OTA) updates and IoT telemetry remain completely impenetrable.",
      status: "Beta Testing",
      statusColor: "bg-green-100 text-green-700",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-background to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Innovation Lab
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Frontier technologies currently in development. These initiatives
            showcase our commitment to pushing the boundaries of IoT, EV
            technology, and energy management.
          </p>
        </div>
      </section>

      {/* Innovations Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => {
              const Icon = innovation.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/30"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${innovation.statusColor}`}
                    >
                      {innovation.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {innovation.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {innovation.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Interested in collaboration or partnership?{" "}
                      <Link to="/contact" className="text-primary font-semibold hover:underline">
                        Connect with our R&D team
                      </Link>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Why Invest in AxiSense.io R&D
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-border">
              <div className="text-4xl font-bold text-primary mb-2">2030</div>
              <p className="text-foreground font-semibold mb-2">
                Global EV Sales Target
              </p>
              <p className="text-muted-foreground text-sm">
                50% of new vehicle sales expected to be electric, creating massive demand for telematics infrastructure
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border">
              <div className="text-4xl font-bold text-primary mb-2">$500B+</div>
              <p className="text-foreground font-semibold mb-2">
                Energy Storage Market
              </p>
              <p className="text-muted-foreground text-sm">
                V2G and battery optimization represent a multi-trillion dollar opportunity
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border">
              <div className="text-4xl font-bold text-primary mb-2">Zero</div>
              <p className="text-foreground font-semibold mb-2">
                Legacy Constraints
              </p>
              <p className="text-muted-foreground text-sm">
                Built cloud-native from day one, without the technical debt of legacy IoT platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Explore our R&D Initiatives
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            For investors, partners, and forward-thinking enterprises seeking to shape the future of mobility and energy.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Start a Partnership
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
