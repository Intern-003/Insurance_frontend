import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import logo from "../assets/images/logo.png";

const renewalItems = [
  {
    title: "Term Life Renewal",
    path: "/renewals/term-life",
  },
  {
    title: "Investment Renewal",
    path: "/renewals/investment",
  },
  {
    title: "Health Renewal",
    path: "/renewals/health",
  },
  {
    title: "Motor Renewal",
    path: "/renewals/car",
  },
  {
    title: "Two Wheeler Renewal",
    path: "/renewals/bike",
  },
  {
    title: "Home Insurance Renewal",
    path: "/renewals/home",
  },
  {
    title: "Travel Insurance Renewal",
    path: "/renewals/travel",
  },
  {
    title: "Business Insurance Renewal",
    path: "/renewals/business",
  },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent pt-5">
      <div className="mx-auto max-w-[1720px] px-6 sm:px-8 lg:px-30">

        {/* NAVBAR */}
        <div className="flex h-[78px] items-center justify-between rounded-[30px] border border-[#E8EDF5] bg-white px-8 lg:px-10 shadow-[0_3px_14px_rgba(15,23,42,0.045)]">

          {/* LEFT SECTION */}
          <div className="flex items-center">

            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="InsureIndia"
                className="h-[50px] w-auto object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <nav className="ml-20 hidden items-center lg:flex">

              <a
                href="#products"
                className="group flex items-center gap-[4px] px-6 text-[15px] font-[450] tracking-[-0.15px] text-[#1E293B] transition-all duration-200 hover:text-[#2563EB]"
              >
                Products
                <ChevronDown className="h-[14px] w-[14px] stroke-[2.2] transition-transform duration-200 group-hover:rotate-180" />
              </a>

              <a
                href="#enterprise"
                className="px-6 text-[15px] font-[450] tracking-[-0.15px] text-[#1E293B] transition-all duration-200 hover:text-[#2563EB]"
              >
                Enterprise
              </a>

              <a
                href="#why-us"
                className="group flex items-center gap-[4px] px-6 text-[15px] font-[450] tracking-[-0.15px] text-[#1E293B] transition-all duration-200 hover:text-[#2563EB]"
              >
                Why Us
                <ChevronDown className="h-[14px] w-[14px] stroke-[2.2] transition-transform duration-200 group-hover:rotate-180" />
              </a>

              <a
                href="#support"
                className="px-6 text-[15px] font-[450] tracking-[-0.15px] text-[#1E293B] transition-all duration-200 hover:text-[#2563EB]"
              >
                Support
              </a>
            </nav>
          </div>

          {/* RIGHT SECTION */}
          <div className="hidden items-center gap-5 lg:flex">

            {/* RENEWALS */}
            <div className="group relative">

              <button className="flex items-center gap-[4px] text-[15px] font-[450] tracking-[-0.15px] text-[#1E293B] transition-all duration-200 hover:text-[#2563EB]">
                Renewals
                <ChevronDown className="h-[14px] w-[14px] stroke-[2.2] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* DROPDOWN */}
              <div className="invisible absolute right-0 top-[42px] z-50 w-[320px] translate-y-2 overflow-hidden rounded-[22px] border border-[#E5EAF3] bg-white opacity-0 shadow-[0_15px_45px_rgba(15,23,42,0.08)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                {/* HEADER */}
                <div className="border-b border-[#EEF2F7] bg-[#FAFCFF] px-5 py-4">
                  <h3 className="text-[15px] font-semibold text-[#0F172A]">
                    Renew Your Policy
                  </h3>

                  <p className="mt-1 text-[12.5px] text-[#64748B]">
                    Fast & secure insurance renewals
                  </p>
                </div>

                {/* ITEMS */}
                <div className="py-2">

                  {renewalItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="flex items-center justify-between px-5 py-3 text-[14px] font-[450] text-[#334155] transition-all duration-200 hover:bg-[#F8FAFC] hover:text-[#2563EB]"
                    >
                      <span>{item.title}</span>

                      <ChevronDown className="-rotate-90 h-[14px] w-[14px]" />
                    </Link>
                  ))}

                </div>
              </div>
            </div>

            {/* CLAIMS */}
            <button className="flex h-[50px] items-center gap-[4px] rounded-[18px] border border-[#D8E1EF] bg-white px-7 text-[14.5px] font-[500] tracking-[-0.1px] text-[#111827] transition-all duration-200 hover:border-[#2563EB] hover:text-[#2563EB]">
              Claims
              <ChevronDown className="h-[14px] w-[14px] stroke-[2.2]" />
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] lg:hidden"
          >
            {mobileMenu ? (
              <X className="h-5 w-5 text-[#0F172A]" />
            ) : (
              <Menu className="h-5 w-5 text-[#0F172A]" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="mt-4 rounded-[26px] border border-[#E5EAF3] bg-white p-5 shadow-xl lg:hidden">

            <nav className="flex flex-col gap-1">

              <a
                href="#products"
                className="rounded-xl px-4 py-3 text-[14px] font-medium tracking-[-0.1px] text-[#334155] transition hover:bg-[#F5F7FB]"
              >
                Products
              </a>

              <a
                href="#enterprise"
                className="rounded-xl px-4 py-3 text-[14px] font-medium tracking-[-0.1px] text-[#334155] transition hover:bg-[#F5F7FB]"
              >
                Enterprise
              </a>

              <a
                href="#why-us"
                className="rounded-xl px-4 py-3 text-[14px] font-medium tracking-[-0.1px] text-[#334155] transition hover:bg-[#F5F7FB]"
              >
                Why Us
              </a>

              <a
                href="#support"
                className="rounded-xl px-4 py-3 text-[14px] font-medium tracking-[-0.1px] text-[#334155] transition hover:bg-[#F5F7FB]"
              >
                Support
              </a>

              {/* MOBILE RENEWALS */}
              <div className="mt-2 rounded-xl border border-[#EEF2F7] bg-[#FAFCFF] p-3">

                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[14px] font-semibold text-[#0F172A]">
                    Renewals
                  </span>

                  <ChevronDown className="h-4 w-4 text-[#64748B]" />
                </div>

                <div className="flex flex-col">

                  {renewalItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setMobileMenu(false)}
                      className="rounded-lg px-3 py-2 text-[13.5px] text-[#475569] transition hover:bg-white hover:text-[#2563EB]"
                    >
                      {item.title}
                    </Link>
                  ))}

                </div>
              </div>

              {/* MOBILE CLAIMS */}
              <button className="mt-3 h-[48px] rounded-[16px] border border-[#D8E1EF] bg-white text-[14px] font-medium text-[#111827] transition-all duration-200 hover:border-[#2563EB] hover:text-[#2563EB]">
                Claims
              </button>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;