import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useStructuredData } from "@/hooks/useStructuredData";

export default function Index() {
  useSEO({
    title: "AxiSense | AI-Powered Analytics & Smart Solutions",
    description: "Axisense delivers innovative AI, analytics, automation, and digital solutions that help businesses improve efficiency, gain insights, and drive sustainable growth.",
    canonical: "https://axisense.io/",
    ogTitle: "AxiSense | AI-Powered Analytics & Smart Solutions",
    ogDescription: "Axisense delivers innovative AI, analytics, automation, and digital solutions that help businesses improve efficiency, gain insights, and drive sustainable growth.",
  });

  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Axisense',
    url: 'https://axisense.io',
    logo: 'https://axisense.io/logo.png',
    description: 'Axisense delivers innovative AI, analytics, automation, and digital solutions',
    sameAs: [
      'https://linkedin.com/company/axisense',
      'https://twitter.com/axisense',
    ],
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-blue-50 pt-20 pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-normal">
              AxiSense.io
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                The Digital Nervous System
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-4">
                for the Energy Transition
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              High-fidelity IoT telematics, intelligent Battery Management Systems
              (BMS), and real-time energy analytics for next-generation electric
              mobility and smart grids.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/solutions"
                className="btn-primary flex items-center gap-2"
              >
                Explore the Platform
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/innovation"
                className="btn-outline"
              >
                View R&D Initiatives
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Core Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Market-ready solutions grounded in technical authority
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  EV Fleet Telematics & IoT Tracking
                </h3>
                <p className="text-muted-foreground mb-4">
                  High-frequency edge-node sensors delivering sub-second geospatial
                  and vehicle health data. Monitor real-time state-of-charge,
                  optimize routing, and deploy predictive maintenance.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Intelligent Battery Management Systems
                </h3>
                <p className="text-muted-foreground mb-4">
                  Adaptive algorithms with cell-level telemetry. Deliver granular
                  analytics on thermal dynamics and voltage balancing, extending
                  battery lifecycles under extreme operational stresses.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Unified Energy & Data Dashboards
                </h3>
                <p className="text-muted-foreground mb-4">
                  Cloud-native analytics engineered for massive data ingestion.
                  Transform fragmented data into strategic intelligence. Monitor
                  grid interactions and optimize power distribution.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/solutions" className="btn-primary inline-flex items-center gap-2">
              Explore All Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to power your infrastructure with precision data?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with our engineering team to explore how AxiSense.io can
            transform your operations.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Connect with AxiSense Engineering
          </Link>
        </div>
      </section>
    </Layout>
  );
}
