import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Truck, Zap, Network } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function UseCases() {
  useSEO({
    title: "AxiSense | Data-Driven Innovation for Business Growth",
    description: "Leverage the power of data analytics, artificial intelligence, and digital transformation services to accelerate growth and improve decision-making.",
    canonical: "https://axisense.io/use-cases",
    ogTitle: "AxiSense | Data-Driven Innovation for Business Growth",
    ogDescription: "Leverage the power of data analytics, artificial intelligence, and digital transformation services to accelerate growth and improve decision-making.",
  });
  const useCases = [
    {
      icon: Truck,
      title: "For EV Fleet Operators",
      description:
        "Maximize utilization rates, automate charging schedules based on grid pricing, and extend the operational life of every vehicle in the fleet.",
      benefits: [
        "Real-time fleet visibility and health monitoring",
        "Automated, grid-aware charging optimization",
        "Predictive maintenance to reduce downtime",
        "Extended vehicle lifecycle through BMS analytics",
        "Integration with existing fleet management systems",
      ],
      color: "blue",
      image: "from-blue-100 to-cyan-50",
    },
    {
      icon: Zap,
      title: "For Automotive OEMs",
      description:
        "Integrate our IoT modules at the manufacturing stage to offer your buyers premium, built-in telematics and branded companion apps.",
      benefits: [
        "Factory-integrated IoT telematics",
        "Premium customer experience with companion apps",
        "Direct insight into vehicle performance and customer behavior",
        "Competitive differentiation in EV market",
        "New revenue streams from data services",
      ],
      color: "purple",
      image: "from-purple-100 to-pink-50",
    },
    {
      icon: Network,
      title: "For Renewable Energy Grids",
      description:
        "Seamlessly map energy draw from charging stations and balance loads during peak demand using our predictive energy monitoring.",
      benefits: [
        "Real-time charging station load mapping",
        "Predictive energy demand forecasting",
        "Automated demand-response orchestration",
        "Grid stability and peak shaving",
        "Integration with smart grid infrastructure",
      ],
      color: "amber",
      image: "from-amber-100 to-orange-50",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-background to-green-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Use Cases
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Real-world applications where AxiSense.io delivers measurable impact
            across the EV and renewable energy ecosystem.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        {useCase.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8">
                        {useCase.description}
                      </p>

                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Key Benefits:
                      </h3>
                      <ul className="space-y-3">
                        {useCase.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <span className="text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`hidden md:block bg-gradient-to-br ${useCase.image} rounded-2xl p-12 h-96`}></div>
                  </>
                ) : (
                  <>
                    <div className={`hidden md:block bg-gradient-to-br ${useCase.image} rounded-2xl p-12 h-96`}></div>
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        {useCase.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8">
                        {useCase.description}
                      </p>

                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Key Benefits:
                      </h3>
                      <ul className="space-y-3">
                        {useCase.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <span className="text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Market Segments */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Addressing the Entire Ecosystem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Fleet Management", value: "500K+" },
              { label: "EV Charging Networks", value: "100K+" },
              { label: "Grid Operators", value: "1000+" },
              { label: "OEM Partners", value: "50+" },
            ].map((segment, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {segment.value}
                </div>
                <p className="text-foreground font-semibold">{segment.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            See how AxiSense.io fits your use case
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team will work with you to design a custom integration that
            maximizes your operational value.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
