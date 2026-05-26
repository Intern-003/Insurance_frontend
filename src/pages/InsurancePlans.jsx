import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import {
  ChevronDown,
  ShieldCheck,
  Heart,
  PhoneCall,
  Check,
  SlidersHorizontal,
  Star,
} from "lucide-react";

import logo from "../assets/images/logo.png";

const InsurancePlans = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { category, formData } = location.state || {};

  const demoPlans = [
    {
      id: 1,
      company: "Care Health Insurance",
      plan: "Ultimate Care Supreme",
      cover: "₹10 Lakh",
      premium: "₹749/month",
      hospitals: "299 Cashless hospitals",
      features: [
        "No Room Rent Limit",
        "Unlimited Restoration",
        "₹10 lakh yearly bonus",
        "Daycare treatments covered",
      ],
      badge: "Recommended",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Care_Health_Insurance_logo.png",
      color: "border-[#FACC15]",
    },

    {
      id: 2,
      company: "ICICI Lombard",
      plan: "Elevate Smart",
      cover: "₹10 Lakh",
      premium: "₹442/month",
      hospitals: "167 Cashless hospitals",
      features: [
        "20% Co-pay outside network",
        "Twin sharing room",
        "₹2 lakh no claim bonus",
        "Unlimited restoration",
      ],
      badge: "Fast Claim",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/ICICI_Lombard_logo.png",
      color: "border-[#FB923C]",
    },

    {
      id: 3,
      company: "TATA AIG",
      plan: "Medicare Select",
      cover: "₹10 Lakh",
      premium: "₹450/month",
      hospitals: "302 Cashless hospitals",
      features: [
        "Single private AC room",
        "Young family discount",
        "Unlimited restoration",
        "₹5 lakh no claim bonus",
      ],
      badge: "Popular",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Tata_AIG_Logo.png",
      color: "border-[#60A5FA]",
    },

    {
      id: 4,
      company: "TATA AIG",
      plan: "Medicare Select",
      cover: "₹10 Lakh",
      premium: "₹450/month",
      hospitals: "302 Cashless hospitals",
      features: [
        "Single private AC room",
        "Young family discount",
        "Unlimited restoration",
        "₹5 lakh no claim bonus",
      ],
      badge: "Popular",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Tata_AIG_Logo.png",
      color: "border-[#60A5FA]",
    },
    {
      id: 5,
      company: "TATA AIG",
      plan: "Medicare Select",
      cover: "₹10 Lakh",
      premium: "₹450/month",
      hospitals: "302 Cashless hospitals",
      features: [
        "Single private AC room",
        "Young family discount",
        "Unlimited restoration",
        "₹5 lakh no claim bonus",
      ],
      badge: "Popular",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Tata_AIG_Logo.png",
      color: "border-[#60A5FA]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      {/* TOP NAV */}
      <div className="border-b border-[#E5EDF8] bg-white">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between px-18 py-5">
          {/* LEFT */}
          <div className="flex items-center gap-5">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-11 w-auto cursor-pointer object-contain"
              />
            </Link>

            <div className="hidden h-9 w-[1px] bg-[#E2E8F0] lg:block" />

            <div className="hidden items-center gap-3 rounded-[14px] border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 lg:flex">
              <span className="text-[13px] font-semibold capitalize text-[#111827]">
                {category || "Health"} Insurance
              </span>

              <span className="text-[#CBD5E1]">•</span>

              <span className="text-[13px] text-[#64748B]">
                {formData?.city || "Mumbai"}
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <button className="flex h-[46px] items-center gap-2 rounded-[14px] border border-[#DCE6F5] bg-white px-5 text-[13px] font-semibold text-[#111827] transition-all duration-300 hover:shadow-md">
            <PhoneCall className="h-4 w-4" />
            Talk to us
          </button>
        </div>
      </div>

      {/* STICKY FILTERS */}
      <div className="sticky top-0 z-40 border-b border-[#E5EDF8] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1450px] items-center gap-3 overflow-x-auto px-18 py-4">
          <span className="mr-3 whitespace-nowrap text-[15px] font-bold text-[#111827]">
            Quick filters
          </span>

          {[
            "Cover",
            "Sort by",
            "Features",
            "Cashless Hospitals",
            "Discount",
          ].map((item) => (
            <button
              key={item}
              className="flex h-[42px] items-center gap-2 whitespace-nowrap rounded-[14px] border border-[#DCE6F5] bg-white px-4 text-[13px] font-medium text-[#111827] transition-all duration-300 hover:border-[#BFDBFE]"
            >
              {item}

              <ChevronDown className="h-4 w-4" />
            </button>
          ))}

          <button className="flex h-[42px] items-center gap-2 whitespace-nowrap rounded-[14px] border border-[#DCE6F5] bg-white px-4 text-[13px] font-medium text-[#111827]">
            <SlidersHorizontal className="h-4 w-4" />
            All filters
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto grid max-w-[1450px] gap-6 px-28 py-7 lg:grid-cols-[1fr_320px]">
        {/* LEFT */}
        <div>
          {/* TITLE */}
          <div className="mb-5 flex items-center gap-3">
            <div className="h-7 w-1 rounded-full bg-[#2563EB]" />

            <h2 className="text-[24px] font-bold tracking-[-1px] text-[#111827]">
              {demoPlans.length} plans found
            </h2>
          </div>

          {/* RECOMMENDED */}
          <div className="mb-6 flex items-center justify-between rounded-[22px] border border-[#E4ECF8] bg-gradient-to-r from-[#F8FBFF] to-[#EEF4FF] p-5 shadow-sm">
            <div className="max-w-[500px]">
              <h3 className="text-[20px] font-bold tracking-[-0.5px] text-[#111827]">
                Recommended features for you
              </h3>

              <p className="mt-1 text-[13px] leading-6 text-[#64748B]">
                Based on your profile and preferences.
              </p>
            </div>

            <button className="h-[46px] rounded-[14px] bg-[#2563EB] px-5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#1D4ED8]">
              View Features
            </button>
          </div>

          {/* PLAN CARDS */}
          <div className="space-y-5">
            {demoPlans.map((plan) => (
              <div className="overflow-hidden rounded-[18px] border border-[#E5EDF8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)]">
                <div className="grid grid-cols-[120px_1fr_250px]">
                  {/* LEFT */}
                  <div className="flex flex-col justify-between border-r border-[#EEF2F7] p-4">
                    <div className="flex h-[54px] items-center justify-center rounded-[12px] border border-[#E5EDF8] bg-[#FCFDFF]">
                      <img
                        src={plan.logo}
                        alt={plan.company}
                        className="h-7 object-contain"
                      />
                    </div>

                    <button className="mt-4 text-left text-[12px] font-semibold text-[#111827] transition-all duration-300 hover:text-[#2563EB]">
                      About Insurer
                    </button>
                  </div>

                  {/* CENTER */}
                  <div className="p-4">
                    {/* TITLE */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-[18px] font-bold tracking-[-0.4px] text-[#1E293B]">
                          {plan.plan}
                        </h3>

                        {/* HOSPITAL */}
                        <div className="mt-1.5 flex items-center gap-1.5 text-[12px] text-[#475569]">
                          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#22C55E]" />

                          <span className="truncate">{plan.hospitals}</span>

                          <button className="shrink-0 font-semibold text-[#16A34A]">
                            View list ›
                          </button>
                        </div>
                      </div>

                      <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] transition-all duration-300 hover:bg-[#F8FAFC]">
                        <Heart className="h-3.5 w-3.5 text-[#64748B]" />
                      </button>
                    </div>

                    {/* FEATURES */}
                    <div className="mt-4 space-y-2">
                      {plan.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#22C55E]" />

                          <p className="text-[12px] leading-5 text-[#475569]">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* FOOTER */}
                    <div className="mt-4">
                      <button className="text-[12px] font-semibold text-[#16A34A] transition-all duration-300 hover:text-[#15803D]">
                        View all features ›
                      </button>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col justify-between border-l border-[#EEF2F7] bg-[#FCFDFF] p-4">
                    {/* TOP */}
                    <div className="flex items-start justify-between gap-3">
                      {/* COVER */}
                      <div>
                        <p className="text-[11px] text-[#64748B]">
                          Cover amount
                        </p>

                        <div className="mt-1 flex items-center gap-1">
                          <h3 className="text-[20px] font-bold tracking-[-0.5px] text-[#1E293B]">
                            {plan.cover}
                          </h3>

                          <ChevronDown className="h-3.5 w-3.5 text-[#64748B]" />
                        </div>
                      </div>

                      {/* PREMIUM */}
                      <div>
                        <p className="text-[11px] text-[#64748B]">
                          Starting from
                        </p>

                        <h3 className="mt-1 text-[20px] font-bold tracking-[-0.5px] text-[#1E293B]">
                          {plan.premium}
                        </h3>

                        <p className="mt-0.5 text-[11px] text-[#94A3B8]">
                          ₹4,417 annually
                        </p>
                      </div>
                    </div>

                    {/* BUTTON */}
                    <button
                      onClick={() => navigate("/customize-insurance-plan")}
                      className="mt-5 flex h-[42px] w-full items-center justify-center rounded-[12px] bg-[#2563EB] text-[13px] font-semibold text-white shadow-[0_8px_18px_rgba(37,99,235,0.22)] transition-all duration-300 hover:bg-[#1D4ED8] hover:shadow-[0_12px_24px_rgba(37,99,235,0.30)] cursor-pointer"
                    >
                      Check Premium ›
                    </button>

                    {/* BOTTOM */}
                    <div className="mt-4 flex items-center justify-end gap-2">
                      <div className="h-4 w-4 rounded-full border border-[#CBD5E1]" />

                      <span className="text-[12px] font-medium text-[#475569]">
                        Add compare
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="sticky top-[95px] space-y-5 self-start">
          {/* ADVISOR */}
          <div className="rounded-[24px] border border-[#DCEBFF] bg-white p-5 shadow-[0_10px_30px_rgba(37,99,235,0.06)]">
            <div className="rounded-[20px] bg-gradient-to-br from-[#EFF6FF] via-[#F8FBFF] to-[#E0ECFF] p-5">
              {/* TOP */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[2px] text-[#2563EB]">
                    Support
                  </p>

                  <h3 className="mt-2 text-[24px] font-bold tracking-[-1px] text-[#111827]">
                    Insurance Expert
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                    Get guidance to choose the right plan with better benefits &
                    coverage.
                  </p>
                </div>
              </div>

              {/* FEATURES */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-[14px] bg-white/80 px-4 py-3">
                  <div className="h-2 w-2 rounded-full bg-[#2563EB]" />

                  <p className="text-[13px] font-medium text-[#334155]">
                    Better premium suggestions
                  </p>
                </div>

                <div className="flex items-center gap-3 rounded-[14px] bg-white/80 px-4 py-3">
                  <div className="h-2 w-2 rounded-full bg-[#2563EB]" />

                  <p className="text-[13px] font-medium text-[#334155]">
                    Faster claim support assistance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* INSIGHT */}
          <div className="rounded-[24px] border border-[#DBEAFE] bg-gradient-to-br from-[#EFF6FF] via-[#F8FBFF] to-[#E0ECFF] p-5 shadow-[0_10px_30px_rgba(37,99,235,0.06)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="mt-2 text-[22px] font-bold tracking-[-1px] text-[#111827]">
                  Better Insurance Decisions
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#475569]">
                  Compare hospitals, bonuses, claims support and premium
                  benefits instantly.
                </p>
              </div>
              <div className="flex h-2 w-2 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#60A5FA] shadow-[0_10px_24px_rgba(37,99,235,0.20)]"></div>
            </div>

            {/* FEATURES */}
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 rounded-[14px] bg-white/80 px-4 py-3">
                <div className="h-2 w-2 rounded-full bg-[#2563EB]" />

                <p className="text-[13px] font-medium text-[#334155]">
                  Cashless hospital comparison
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-[14px] bg-white/80 px-4 py-3">
                <div className="h-2 w-2 rounded-full bg-[#2563EB]" />

                <p className="text-[13px] font-medium text-[#334155]">
                  Premium & bonus breakdown
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-[14px] bg-white/80 px-4 py-3">
                <div className="h-2 w-2 rounded-full bg-[#2563EB]" />

                <p className="text-[13px] font-medium text-[#334155]">
                  Fast claim support guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurancePlans;
