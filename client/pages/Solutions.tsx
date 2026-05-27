import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Zap, Shield, BarChart3, Cpu, TrendingUp } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: Zap,
      title: "EV Fleet Telematics & IoT Tracking",
      description:
        "High-frequency edge-node sensors delivering sub-second geospatial and vehicle health data.",
      benefits: [
        "Absolute visibility across your fleet",
        "Monitor real-time state-of-charge (SoC)",
        "Dynamic route optimization",
        "Predictive maintenance to eliminate downtime",
      ],
      color: "blue",
    },
    {
      icon: Shield,
      title: "Intelligent Battery Management Systems (BMS)",
      description:
        "Adaptive algorithms integrated with continuous, cell-level telemetry.",
      benefits: [
        "Peak performance and uncompromised safety",
        "Granular thermal dynamics analytics",
        "Voltage balancing optimization",
        "Extended battery lifecycles under stress",
      ],
      color: "purple",
    },
    {
      icon: BarChart3,
      title: "Unified Energy & Data Dashboards",
      description:
        "Cloud-native analytics engineered for massive data ingestion.",
      benefits: [
        "Transform fragmented data into intelligence",
        "Monitor grid interactions",
        "Track localized energy consumption",
        "Optimize distributed EV asset management",
      ],
      color: "amber",
    },
  ];

  const colorMap = {
    blue: "from-blue-100 to-blue-50",
    purple: "from-purple-100 to-purple-50",
    amber: "from-amber-100 to-amber-50",
  };

  const iconColorMap = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    amber: "text-amber-600",
  };

  const bgColorMap = {
    blue: "bg-blue-100",
    purple: "bg-purple-100",
    amber: "bg-amber-100",
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-background to-blue-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Core Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Market-ready technologies grounded in technical authority. Each
            solution is engineered for precision, scalability, and real-world
            impact.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const bgGradient =
              colorMap[solution.color as keyof typeof colorMap];
            const iconColor =
              iconColorMap[solution.color as keyof typeof iconColorMap];
            const bgColor = bgColorMap[solution.color as keyof typeof bgColorMap];

            return (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <div className={`w-16 h-16 ${bgColor} rounded-xl flex items-center justify-center mb-6`}>
                        <Icon className={`w-8 h-8 ${iconColor}`} />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        {solution.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {solution.description}
                      </p>
                      <div className="space-y-3">
                        {solution.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            </div>
                            <p className="text-foreground">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`hidden md:block bg-gradient-to-br ${bgGradient} rounded-2xl p-8 h-96`}></div>
                  </>
                ) : (
                  <>
                    <div className={`hidden md:block bg-gradient-to-br ${bgGradient} rounded-2xl p-8 h-96`}></div>
                    <div>
                      <div className={`w-16 h-16 ${bgColor} rounded-xl flex items-center justify-center mb-6`}>
                        <Icon className={`w-8 h-8 ${iconColor}`} />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        {solution.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {solution.description}
                      </p>
                      <div className="space-y-3">
                        {solution.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            </div>
                            <p className="text-foreground">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-12 h-96"></div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Seamless Integration
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our APIs and SDKs integrate directly into your existing infrastructure.
                Whether you're building IoT applications, fleet management systems, or
                grid optimization platforms, AxiSense.io provides the data backbone you need.
              </p>
              <Link to="/innovation" className="btn-primary inline-flex items-center gap-2">
                Explore Advanced Capabilities
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to implement precision data infrastructure?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start with a consultation to understand your unique requirements.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Request a Demo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
