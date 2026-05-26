import { ArrowLeft, ChevronDown, Heart, Check } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CustomizeInsurancePlan = () => {
  const navigate = useNavigate();

  /* COVER OPTIONS */
  const coverOptions = [
    {
      cover: "₹5 Lakh",
      premium: 5305,
    },

    {
      cover: "₹7.5 Lakh",
      premium: 5526,
    },

    {
      cover: "₹10 Lakh",
      premium: 5391,
    },

    {
      cover: "₹15 Lakh",
      premium: 6081,
    },
  ];

  /* POLICY OPTIONS */
  const periods = [
    {
      year: "1 Year",
      multiplier: 1,
      save: null,
    },

    {
      year: "2 Years",
      multiplier: 1.98,
      save: "Save ₹543",
    },

    {
      year: "3 Years",
      multiplier: 2.99,
      save: "Save ₹1,269",
      popular: true,
    },
  ];

  /* STATES */
  const [selectedCover, setSelectedCover] = useState(coverOptions[1]);

  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);

  const [showCoverDropdown, setShowCoverDropdown] = useState(false);

  /* PRICE */
  const totalPremium = Math.round(
    selectedCover.premium * selectedPeriod.multiplier,
  );

  return (
    <div className="min-h-screen bg-[#F4F7FB]">
      {/* HEADER */}
      <div className="sticky top-0 z-50 border-b border-[#E6EDF7] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-[1450px] items-center justify-between px-16">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[14px] font-semibold text-[#1E293B]"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back to quotes
          </button>

          <button className="rounded-[12px] border border-[#DBEAFE] bg-[#F8FBFF] px-4 py-2 text-[12px] font-semibold text-[#2563EB]">
            Talk to us
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto grid max-w-[1450px] gap-5 px-30 py-5 lg:grid-cols-[1fr_340px]">
        {/* LEFT */}
        <div className="space-y-4">
          {/* TOP CARD */}
          <div className="rounded-[18px] border border-[#E5EDF8] bg-white p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[14px] border border-[#E5EDF8] bg-[#FCFDFF]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1b/TATA_AIG_General_Insurance_Logo.png"
                  alt="logo"
                  className="h-7 object-contain"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-[18px] font-bold text-[#111827]">
                    Medicare Select
                  </h2>

                  <button className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E2E8F0]">
                    <Heart className="h-3.5 w-3.5 text-[#64748B]" />
                  </button>
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[12px]">
                  <button className="font-semibold text-[#16A34A]">
                    View all features
                  </button>

                  <span className="h-1 w-1 rounded-full bg-[#CBD5E1]" />

                  <p className="text-[#475569]">
                    <span className="font-semibold text-[#16A34A]">
                      302 Cashless hospitals
                    </span>{" "}
                    (+Cashless anywhere support)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COVER */}
          <div className="rounded-[18px] border border-[#E5EDF8] bg-white p-5 shadow-sm">
            <h3 className="text-[18px] font-bold text-[#111827]">
              Cover Amount
            </h3>

            <div className="mt-2 flex items-center gap-2">
              <p className="text-[13px] text-[#64748B]">
                Is this cover amount sufficient?
              </p>

              <button className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-semibold text-[#2563EB]">
                Let’s find out ›
              </button>
            </div>

            {/* CUSTOM SELECT */}
            <div className="relative mt-4 w-full max-w-[410px]">
              <button
                onClick={() => setShowCoverDropdown(!showCoverDropdown)}
                className="flex h-[56px] w-full items-center justify-between rounded-[14px] border border-[#CBD5E1] bg-white px-4 transition-all duration-300 hover:border-[#2563EB]"
              >
                <span className="text-[16px] font-bold text-[#111827]">
                  {selectedCover.cover}
                </span>

                <ChevronDown
                  className={`h-4 w-4 text-[#64748B] transition-all duration-300 ${
                    showCoverDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN */}
              {showCoverDropdown && (
                <div className="absolute left-0 top-[64px] z-20 w-full overflow-hidden rounded-[16px] border border-[#DCE6F2] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                  {coverOptions.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedCover(item);
                        setShowCoverDropdown(false);
                      }}
                      className={`flex w-full items-center justify-between border-b border-[#EEF2F7] px-4 py-4 text-left transition-all duration-300 last:border-b-0 hover:bg-[#F8FBFF] ${
                        selectedCover.cover === item.cover ? "bg-[#EFF6FF]" : ""
                      }`}
                    >
                      <h4 className="text-[16px] font-bold text-[#111827]">
                        {item.cover}
                      </h4>

                      <p className="text-[13px] text-[#475569]">
                        Premium ₹{item.premium.toLocaleString()}/year
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* POLICY */}
          <div className="rounded-[18px] border border-[#E5EDF8] bg-white p-5 shadow-sm">
            <h3 className="text-[18px] font-bold text-[#111827]">
              Policy Period
            </h3>

            <p className="mt-2 text-[13px] text-[#64748B]">
              Choosing a multi-year plan saves yearly renewal hassle.
            </p>

            {/* OPTIONS */}
            <div className="mt-4 grid gap-3 lg:grid-cols-3">
              {periods.map((item, index) => {
                const calculatedPrice = Math.round(
                  selectedCover.premium * item.multiplier,
                );

                return (
                  <button
                    key={index}
                    onClick={() => setSelectedPeriod(item)}
                    className={`relative rounded-[16px] border p-4 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                      selectedPeriod.year === item.year
                        ? "border-[#60A5FA] bg-[#EFF6FF]"
                        : "border-[#DCE6F2] bg-white hover:border-[#93C5FD]"
                    }`}
                  >
                    {/* POPULAR */}
                    {item.popular && (
                      <div className="absolute right-3 top-[-10px] rounded-full bg-[#DBEAFE] px-2.5 py-1 text-[10px] font-semibold text-[#2563EB]">
                        Most popular
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      {/* RADIO */}
                      <div
                        className={`mt-1 flex h-4 w-4 items-center justify-center rounded-full border ${
                          selectedPeriod.year === item.year
                            ? "border-[#2563EB]"
                            : "border-[#94A3B8]"
                        }`}
                      >
                        {selectedPeriod.year === item.year && (
                          <div className="h-2 w-2 rounded-full bg-[#2563EB]" />
                        )}
                      </div>

                      {/* CONTENT */}
                      <div>
                        <h4 className="text-[15px] font-semibold text-[#111827]">
                          {item.year} @
                        </h4>

                        <p className="mt-1 text-[21px] font-black tracking-[-1px] text-[#1E293B]">
                          ₹{calculatedPrice.toLocaleString()}
                        </p>

                        {item.save && (
                          <div className="mt-2 inline-flex rounded-full bg-[#E0F2FE] px-2.5 py-1 text-[10px] font-semibold text-[#0284C7]">
                            {item.save}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* BENEFITS */}
          <div className="rounded-[18px] border border-[#DBEAFE] bg-gradient-to-r from-[#EFF6FF] to-[#F8FBFF] p-5 shadow-sm">
            <h3 className="text-[18px] font-bold text-[#111827]">
              Why this plan?
            </h3>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-[#2563EB]" />

                <p className="text-[13px] text-[#475569]">
                  Unlimited restoration benefits
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-[#2563EB]" />

                <p className="text-[13px] text-[#475569]">
                  Better hospital coverage support
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-[#2563EB]" />

                <p className="text-[13px] text-[#475569]">
                  Faster claim settlement guidance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="sticky top-[88px] self-start">
          <div className="overflow-hidden rounded-[20px] border border-[#E5EDF8] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
            {/* HEADER */}
            <div className="border-b border-[#EEF2F7] px-5 py-4">
              <h3 className="text-[17px] font-bold text-[#111827]">Summary</h3>
            </div>

            {/* BODY */}
            <div className="space-y-4 p-5">
              {/* PREMIUM */}
              <div className="flex items-center justify-between">
                <p className="text-[13px] text-[#64748B]">
                  Premium - {selectedPeriod.year}
                </p>

                <h4 className="text-[24px] font-black tracking-[-1px] text-[#111827]">
                  ₹{totalPremium.toLocaleString()}
                </h4>
              </div>

              {/* RIDER */}
              <div>
                <h4 className="text-[13px] font-semibold text-[#111827]">
                  Select Rider(s)
                </h4>

                <div className="mt-2 flex items-center justify-between rounded-[12px] border border-dashed border-[#CBD5E1] px-4 py-3">
                  <p className="text-[12px] text-[#64748B]">
                    Missing out on benefits
                  </p>

                  <button className="text-[12px] font-semibold text-[#2563EB]">
                    View
                  </button>
                </div>
              </div>

              {/* ADDONS */}
              <div>
                <h4 className="text-[13px] font-semibold text-[#111827]">
                  Select Add-ons
                </h4>

                <div className="mt-2 flex items-center justify-between rounded-[12px] border border-dashed border-[#CBD5E1] px-4 py-3">
                  <p className="text-[12px] text-[#64748B]">
                    No add-ons selected
                  </p>

                  <button className="text-[12px] font-semibold text-[#2563EB]">
                    View
                  </button>
                </div>
              </div>

              {/* TOTAL */}
              <div className="flex items-center justify-between border-t border-[#EEF2F7] pt-4">
                <h3 className="text-[18px] font-bold text-[#111827]">Total</h3>

                <h3 className="text-[28px] font-black tracking-[-1px] text-[#2563EB]">
                  ₹{totalPremium.toLocaleString()}
                </h3>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => navigate("/checkout")}
                className="mt-2 flex h-[52px] w-full items-center justify-center rounded-[14px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(37,99,235,0.30)]"
              >
                Proceed to proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeInsurancePlan;
