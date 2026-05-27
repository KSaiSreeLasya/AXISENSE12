import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-gradient-to-br from-background to-red-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <p className="text-2xl font-semibold text-foreground mb-2">
            Page Not Found
          </p>
          <p className="text-xl text-muted-foreground mb-8">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
