import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export default function Placeholder() {
  return (
    <Layout>
      <section className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-gradient-to-br from-background to-blue-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Page Coming Soon
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            This page is being developed. Check back soon for more information!
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
