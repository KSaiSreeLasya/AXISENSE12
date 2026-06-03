import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from("contact_messages")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message,
          },
        ]);

      if (supabaseError) {
        setError(supabaseError.message);
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-background to-blue-50 pt-20 pb-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have questions about AxiSense.io? Our engineering team is ready to
            help you explore how we can accelerate your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Contact Information
                </h2>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:info@axisense.io"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@axisense.io
                  </a>
                  <br />
                  <a
                    href="mailto:sales@axisense.io"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sales@axisense.io
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-100">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+91-8247223629"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-8247223629
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Headquarters
                  </h3>
                  <p className="text-muted-foreground">
                    Sy No 2, Plot No. 148, beside Srikara Hospitals, Mythri Nagar, Hafeezpet, Madeenaguda,Hyderabad,
                    <br />
                    Telangana 500049
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="text-green-600 font-semibold">●</span> We
                  typically respond within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-slide-down">
                    <div className="text-green-600 text-lg font-semibold mb-2">
                      ✓ Message Sent Successfully!
                    </div>
                    <p className="text-green-700">
                      Thank you for reaching out. We'll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                        {error}
                      </div>
                    )}
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Tell us about your project and what you're looking to accomplish..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-primary flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                      {loading ? "Sending..." : "Send Message"}
                    </button>

                    <p className="text-sm text-muted-foreground text-center">
                      We respect your privacy. Your information is secure with us.
                    </p>
                  </form>
                )}
              </div>

              {/* Map Section */}
              <div className="mt-8 animate-slide-up" style={{ animationDelay: "300ms" }}>
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3045241898153!2d78.34556287493729!3d17.492970783412304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93860329a3f3%3A0x8882b1be660002ad!2sAxigear%20Electric%20Lounge!5e0!3m2!1sen!2sin!4v1780483642219!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AxiSense.io Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What's the typical implementation timeline?",
                a: "Most integrations are completed within 4-8 weeks, depending on complexity and your existing infrastructure. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                q: "Do you offer technical support?",
                a: "Yes, we provide 24/7 technical support for enterprise clients and business hours support for standard plans. Support includes API documentation, SDKs, and dedicated engineering resources.",
              },
              {
                q: "Can I integrate AxiSense.io with my existing systems?",
                a: "Absolutely. Our platform is designed for seamless integration with existing fleet management, ERP, and energy management systems. Our APIs support REST and WebSocket protocols.",
              },
              {
                q: "What kind of data security do you provide?",
                a: "We're SOC 2 Type II certified with military-grade encryption, end-to-end data protection, and compliance with GDPR, HIPAA, and automotive data standards.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-border animate-slide-up hover:shadow-md transition-shadow duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.q}
                </h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to accelerate?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a demo with our product team and see how AxiSense.io can
            transform your operations.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Schedule a Demo
          </a>
        </div>
      </section>
    </Layout>
  );
}
