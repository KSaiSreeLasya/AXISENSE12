import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="https://cdn.builder.io/api/v1/image/assets%2Fd6ed3a58ddbf4178909cabbd3ef86178%2F982260fd9bcd4f70ac81cf7c0e0d87a4?format=webp&width=800&height=1200" alt="AxiSense" className="w-12 h-12" />
              <span className="text-xl font-bold text-foreground">AxiSense</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors font-semibold"
              >
                Home
              </Link>
              <Link
                to="/solutions"
                className="text-foreground hover:text-primary transition-colors"
              >
                Solutions
              </Link>
              <Link
                to="/innovation"
                className="text-foreground hover:text-primary transition-colors"
              >
                Innovation Lab
              </Link>
              <Link
                to="/use-cases"
                className="text-foreground hover:text-primary transition-colors"
              >
                Use Cases
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="btn-primary"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4 space-y-4">
              <Link
                to="/"
                className="block text-foreground hover:text-primary transition-colors font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/solutions"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                to="/innovation"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Innovation Lab
              </Link>
              <Link
                to="/use-cases"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Use Cases
              </Link>
              <Link
                to="/about"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link to="/contact" className="btn-primary block text-center">
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-white text-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <img src="https://cdn.builder.io/api/v1/image/assets%2Fd6ed3a58ddbf4178909cabbd3ef86178%2F982260fd9bcd4f70ac81cf7c0e0d87a4?format=webp&width=1600&height=2400" alt="AxiSense" className="w-16 h-16" />
              </div>
              <p className="text-foreground/70 text-sm">
                The digital nervous system for the energy transition.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Product</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <Link to="/solutions" className="hover:text-background">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/innovation" className="hover:text-background">
                    Innovation Lab
                  </Link>
                </li>
                <li>
                  <a href="#docs" className="hover:text-background">
                    Developer API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <Link to="/about" className="hover:text-background">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/use-cases" className="hover:text-background">
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-background">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#privacy" className="hover:text-background">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-background">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/20 pt-8">
            <p className="text-center text-sm text-foreground/70">
              © 2026 AxiSense.io. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
