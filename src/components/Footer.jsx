import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#020817] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Top Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700">
                <Shield className="h-4 w-4 text-white" />
              </div>

              <h2 className="text-[20px] font-semibold">InsureIndia</h2>
            </a>

            <p className="mt-3 max-w-sm text-[13px] leading-6 text-gray-400">
              Your trusted partner for health insurance. We help you find the
              best coverage from top Indian insurance companies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-[15px] font-semibold">Quick Links</h3>

            <ul className="space-y-2 text-[14px] text-gray-300">
              <li>
                <a
                  href="/"
                  className="transition duration-200 hover:text-emerald-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="transition duration-200 hover:text-emerald-400"
                >
                  Health Plans
                </a>
              </li>

              <li>
                <a
                  href="#why-us"
                  className="transition duration-200 hover:text-emerald-400"
                >
                  Why Choose Us
                </a>
              </li>

              <li>
                <a
                  href="#companies"
                  className="transition duration-200 hover:text-emerald-400"
                >
                  Our Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Insurance Types */}
          <div>
            <h3 className="mb-3 text-[15px] font-semibold">Insurance Types</h3>

            <ul className="space-y-2 text-[14px] text-gray-300">
              <li>
                <a
                  href="#products"
                  className="transition duration-200 hover:text-emerald-400"
                >
                  Individual Health
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="transition duration-200 hover:text-emerald-400"
                >
                  Family Floater
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="transition duration-200 hover:text-emerald-400"
                >
                  Senior Citizen
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="transition duration-200 hover:text-emerald-400"
                >
                  Critical Illness
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-[15px] font-semibold">Contact Us</h3>

            <div className="space-y-3 text-[14px] text-gray-300">
              <a
                href="tel:18001234567"
                className="flex items-start gap-2 transition duration-200 hover:text-emerald-400"
              >
                <Phone className="mt-1 h-4 w-4 flex-shrink-0" />

                <span className="leading-6">+91 8450007614</span>
              </a>

              <a
                href="mailto:support@insureindia.com"
                className="flex items-start gap-2 transition duration-200 hover:text-emerald-400"
              >
                <Mail className="mt-1 h-4 w-4 flex-shrink-0" />

                <span className="leading-6">inquiry@spay.live</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />

                <span className="leading-6">
                  316 Laxmi Plaza,
                  <br />
                  Laxmi Industrial Estate,
                  <br />
                  Andheri West,
                  <br />
                  Mumbai, Maharashtra - 400053.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[13px] text-gray-300">
              © 2026 InsureIndia. All Rights Reserved | Powered by Spay Fintech
              Private Limited
            </p>
          </div>

          {/* Policies */}
          <div className="flex flex-wrap gap-4 text-[13px] text-gray-300">
            <a className="transition duration-200 hover:text-emerald-400 cursor-pointer">
              Privacy Policy
            </a>

            <a className="transition duration-200 hover:text-emerald-400 cursor-pointer">
              Terms of Service
            </a>

            <a className="transition duration-200 hover:text-emerald-400 cursor-pointer">
              IRDAI License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
