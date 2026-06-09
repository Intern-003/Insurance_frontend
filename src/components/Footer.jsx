import {
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Car,
  HeartPulse,
  FileText,
  Headphones,
  MapPin,
  Lock,
} from "lucide-react";

import logo from "../assets/images/logo.png";

const footerLinks = {
  Products: [
    { name: "Car insurance", link: "/insurance/car" },
    { name: "Bike insurance", link: "/insurance/bike" },
    { name: "Health insurance", link: "/insurance/health" },
    { name: "Life insurance", link: "/insurance/life" },
    { name: "Travel insurance", link: "/insurance/travel" },
  ],

  Company: [
    { name: "About us", link: "/about-us" },
    { name: "Careers", link: "/careers" },
    { name: "Contact us", link: "/contact-us" },
  ],

  Resources: [
    { name: "All resources", link: "/resources" },
    { name: "Customer stories", link: "/customer-stories" },
    { name: "Articles", link: "/articles" },
    { name: "E-books", link: "/ebooks" },
  ],

  Legal: [
    { name: "Privacy policy", link: "/privacy-policy" },
    {name: "Help center", link: "/help-center"},
    { name: "Terms & conditions", link: "/terms-and-conditions" },
    { name: "Financial disclosures", link: "/financial-disclosures" },
  ],
};

// const accordions = [
//   {
//     icon: Car,
//     title: "Auto products and services",
//     content:
//       "Explore comprehensive car and bike insurance solutions with instant quotes, cashless garages, roadside assistance, and hassle-free renewals.",
//   },
//   {
//     icon: HeartPulse,
//     title: "Health, life and other services",
//     content:
//       "Protect your family with health insurance, life coverage, travel insurance, and personalized financial protection services.",
//   },
//   {
//     icon: FileText,
//     title: "Insurance Policy",
//     content:
//       "Understand policy coverage, benefits, exclusions, renewals, premium calculations, and important insurance documentation details.",
//   },
//   {
//     icon: Headphones,
//     title: "Claims and support",
//     content:
//       "Get dedicated support for claims, policy renewals, premium payments, documentation verification, and customer assistance.",
//   },
// ];

const Footer = () => {
  return (
    <footer className="overflow-hidden border-t border-[#132238] bg-[#020817] text-white">
      
      <div className="mx-auto max-w-[1450px] px-5 py-12 md:px-8 xl:px-[70px]">

        {/* TOP */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_repeat(4,1fr)]">
          
          {/* LEFT */}
          <div>
            
            {/* LOGO */}
            <div className="inline-flex rounded-[18px] bg-white p-4 shadow-[0_10px_30px_rgba(255,255,255,0.05)]">
              <img
                src={logo}
                alt="Spay Insurance"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 text-[13px] leading-[2] text-[#94A3B8]">
              Secure your future with trusted insurance solutions designed
              for individuals, families, and businesses.
            </p>

            {/* BADGES */}
            <div className="mt-6 flex flex-col gap-3">
              
              <div className="flex items-center gap-3 rounded-[16px] border border-[#1E293B] bg-[#071120] px-4 py-3">
                
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F172A]">
                  <ShieldCheck className="h-4 w-4 text-[#60A5FA]" />
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-white">
                    IRDAI Approved
                  </h3>

                  <p className="mt-0.5 text-[11px] text-[#64748B]">
                    Trusted insurance partners
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-[16px] border border-[#1E293B] bg-[#071120] px-4 py-3">
                
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F172A]">
                  <Lock className="h-4 w-4 text-[#60A5FA]" />
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-white">
                    Secure Payments
                  </h3>

                  <p className="mt-0.5 text-[11px] text-[#64748B]">
                    PCI DSS protected
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              
              <h3 className="relative inline-block pb-2 text-[18px] font-semibold text-white">
                {title}

                <span className="absolute bottom-0 left-0 h-[2px] w-[22px] rounded-full bg-[#3B82F6]" />
              </h3>

              <ul className="mt-6 flex flex-col gap-3">
                
                {links.map((item) => (
                  <li key={item.name}>
                    
                    <a
                      href={item.link}
                      className="group flex items-center gap-2 border-b border-[#132238] pb-3 text-[13px] text-[#CBD5E1] transition-all duration-300 hover:text-white"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-[#64748B] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#60A5FA]" />

                      <span className="transition-all duration-300 group-hover:translate-x-1">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* MIDDLE ACCORDIONS */}
                  {/* <div className="mt-12 flex flex-col gap-4">
          
          {accordions.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[18px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#081426_100%)] px-5 py-4 transition-all duration-300 hover:border-[#2563EB]"
              >
                <div className="flex items-center justify-between gap-5">
                  
                  <div className="flex items-center gap-4">
                    
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F1C32]">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <h3 className="text-[16px] font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 max-w-[820px] text-[12px] leading-[1.9] text-[#94A3B8]">
                        {item.content}
                      </p>
                    </div>
                  </div>

                  <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1E293B] bg-[#0B1727]">
                    <ChevronDown className="h-4 w-4 text-[#94A3B8]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* BOTTOM */}
        <div className="mt-12 border-t border-[#132238] pt-7">
          
          <div className="flex flex-col gap-7 xl:flex-row xl:items-center xl:justify-between">
            
            {/* ADDRESS */}
            <div className="flex items-start gap-3">
              
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1727]">
                <MapPin className="h-4 w-4 text-[#60A5FA]" />
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white">
                  Spay Fintech Pvt. Ltd.
                </h3>

                <p className="mt-2 max-w-[320px] text-[12px] leading-[1.8] text-[#94A3B8]">
                  316 Laxmi Plaza, Laxmi Industrial Estate,
                  Andheri West, Mumbai, Maharashtra - 400053.
                </p>
              </div>
            </div>

            {/* CENTER */}
            <div>
              <p className="text-center text-[11px] leading-[1.8] text-[#94A3B8]">
                All insurance partners are IRDAI approved. <br />
                Insurance is the subject matter of solicitation.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-start gap-3 xl:items-end">
              
              <p className="text-[11px] text-[#94A3B8]">
                © 2026 Spay Insurance. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center gap-2">
                
                <div className="rounded-[10px] border border-[#2563EB] bg-[#071120] px-4 py-2 text-[10px] font-semibold text-white">
                  IRDAI VERIFIED
                </div>

                <div className="rounded-[10px] border border-[#16A34A] bg-[#071120] px-4 py-2 text-[10px] font-semibold text-white">
                  PCI DSS COMPLIANT
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;