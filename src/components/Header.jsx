import { useState } from "react";
import { Shield, Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 shadow-sm">
              <Shield className="h-5 w-5 text-white" />
            </div>

            <h1 className="text-[20px] font-bold text-gray-900 tracking-tight">
              InsureIndia
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="/"
              className="text-[15px] font-medium text-gray-600 hover:text-emerald-700 transition-colors duration-200"
            >
              Home
            </a>

            <a
              href="#products"
              className="text-[15px] font-medium text-gray-600 hover:text-emerald-700 transition-colors duration-200"
            >
              Products
            </a>

            <a
              href="#why-us"
              className="text-[15px] font-medium text-gray-600 hover:text-emerald-700 transition-colors duration-200"
            >
              Why Us
            </a>

            <a
              href="#companies"
              className="text-[15px] font-medium text-gray-600 hover:text-emerald-700 transition-colors duration-200"
            >
              Partners
            </a>
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:8450007614"
              className="flex items-center gap-2 text-gray-500 hover:text-emerald-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-[15px] font-medium">+91 8450007614</span>
            </a>

            <a
              href="#products"
              className="rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-emerald-800 hover:scale-[1.02]"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-5">
            <nav className="flex flex-col gap-5">
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-emerald-700"
              >
                Home
              </a>

              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-emerald-700"
              >
                Products
              </a>

              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-emerald-700"
              >
                Why Us
              </a>

              <a
                href="#companies"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-emerald-700"
              >
                Partners
              </a>

              <a
                href="tel:8450007614"
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <Phone className="h-4 w-4" />
                +91 8450007614
              </a>

              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
              >
                Get Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
