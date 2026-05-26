import {
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

import logo from "../assets/images/logo.png";

const footerLinks = {
  Products: [
    "Car insurance",
    "Bike insurance",
    "Health insurance",
    "Life insurance",
    "Travel insurance",
  ],

  Company: [
    "About us",
    "Careers",
    "Contact us",
  ],

  Resources: [
    "All resources",
    "Customer stories",
    "Articles",
    "E-books",
  ],

  Legal: [
    "Privacy policy",
    "Terms & conditions",
    "Financial disclosures",
  ],
};

const accordions = [
  "Auto products and services",
  "Health, life and other services",
  "Insurace Policy",
  "Claims and support",
];

const Footer = () => {
  return (
    <footer className="overflow-hidden border-t border-[#DCE8F7] bg-[#071120] text-white">
      
      <div className="mx-auto max-w-[1600px] px-[140px] py-25 pb-10">
        
        {/* TOP LINKS */}
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-[55px]">
          
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              
              <h3 className="text-[17px] font-semibold tracking-[-0.3px] text-white">
                {title}
              </h3>

              <ul className="mt-5 flex flex-col gap-3.5">
                
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-[14px] font-normal text-[#94A3B8] transition-all duration-300 hover:text-[#60A5FA]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ACCORDION STRIPS */}
        <div className="mt-[45px] flex flex-col gap-3">
          
          {accordions.map((item, index) => (
            <button
              key={index}
              className="flex h-[62px] items-center justify-between rounded-[16px] border border-[#132238] bg-[#0B1727] px-5 transition-all duration-300 hover:border-[#2563EB]"
            >
              <span className="text-[15px] font-medium tracking-[-0.2px] text-white">
                {item}
              </span>

              <ChevronDown className="h-4.5 w-4.5 text-[#94A3B8]" />
            </button>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-[55px] flex flex-col gap-10 border-t border-[#132238] py-[40px] lg:flex-row lg:items-end lg:justify-between">
          
          {/* LEFT */}
          <div>
            
            {/* LOGO */}
            <a href="/" className="flex items-center">
    
              <img
                src={logo}
                alt="Spay Insurance"
                className="h-23 w-auto object-contain"
              />
            </a>

            {/* COMPANY */}
            <h3 className="mt-5 text-[18px] font-semibold leading-[1.5] tracking-[-0.3px] text-white">
              || Provided by Spay Fintech Pvt. Ltd.
            </h3>

            {/* ADDRESS */}
            <p className="mt-4 max-w-[470px] text-[14px] leading-[1.8] text-[#94A3B8]">
              316 Laxmi Plaza, Laxmi Industrial Estate,
              Andheri West, Mumbai,
              Maharashtra - 400053.
            </p>

            {/* SMALL TEXT */}
            <div className="mt-6 space-y-2">

              <p className="text-[12px] text-[#64748B]">
                All insurance partners are IRDAI approved.
              </p>

              <p className="text-[12px] text-[#64748B]">
                © 2026 InsureIndia. All rights reserved.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start lg:items-end">
            
            {/* SOCIAL */}
            <div className="flex items-center gap-3">
              
              {[
              ].map((Icon, index) => (
                <button
                  key={index}
                  className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#1E293B] bg-[#0B1727] transition-all duration-300 hover:border-[#2563EB] hover:bg-[#111F33]"
                >
                  <Icon className="h-4 w-4 text-white" />
                </button>
              ))}
            </div>

            {/* BADGES */}
            <div className="mt-[40px] flex items-center gap-3">
              
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[14px] border border-[#1E293B] bg-[#0B1727]">
                <span className="text-[11px] font-semibold text-white">
                  PCI
                </span>
              </div>

              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[14px] border border-[#1E293B] bg-[#0B1727]">
                <span className="text-[11px] font-semibold text-white">
                  IRDAI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;