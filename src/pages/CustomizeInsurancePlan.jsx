import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useGet } from "../hooks/useGet";

import {
  ArrowLeft,
  ChevronDown,
  Heart,
  Check,
} from "lucide-react";

const CustomizeInsurancePlan = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const renewal = location.state?.renewal;

const renewalData =
  location.state?.renewalData;

  /*
  |--------------------------------------------------------------------------
  | GET DATA FROM BOTH FLOWS
  |--------------------------------------------------------------------------
  */

/*
|--------------------------------------------------------------------------
| GET DATA FROM LOCATION
|--------------------------------------------------------------------------
*/
/*
|--------------------------------------------------------------------------
| FINAL SLUG
|--------------------------------------------------------------------------
*/
/*
|--------------------------------------------------------------------------
| FINAL SLUG
|--------------------------------------------------------------------------
*/

const finalSlug =

  location.state?.selectedPlan?.slug ||

  location.state?.selected_plan?.slug ||

  location.state?.slug ||

  location.state?.category;
  /*
  |--------------------------------------------------------------------------
  | API
  |--------------------------------------------------------------------------
  */

  const {
    data: planResponse,
    loading,
  } = useGet(
    finalSlug
      ? `insurance-plan/${finalSlug}`
      : null
  );

  const plan = planResponse?.plan;

  /*
  |--------------------------------------------------------------------------
  | COVER OPTIONS
  |--------------------------------------------------------------------------
  */

  const coverOptions =
    plan?.coverages?.map((item) => ({
      id: item.id,

      cover: item.coverage_name,

      premium: Number(item.one_year_price),

      oneYear: Number(item.one_year_price),

      twoYear: Number(item.two_year_price),

      threeYear: Number(item.three_year_price),
    })) || [];

  /*
  |--------------------------------------------------------------------------
  | POLICY OPTIONS
  |--------------------------------------------------------------------------
  */

  const periods = [
    {
      year: "1 Year",
      value: 1,
      save: null,
    },

    {
      year: "2 Years",
      value: 2,
      save: "Save More",
    },

    {
      year: "3 Years",
      value: 3,
      save: "Best Value",
      popular: true,
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | STATES
  |--------------------------------------------------------------------------
  */

  const [selectedCover, setSelectedCover] =
    useState(null);

  const [selectedPeriod, setSelectedPeriod] =
    useState(periods[0]);

  const [showCoverDropdown, setShowCoverDropdown] =
    useState(false);

  /*
  |--------------------------------------------------------------------------
  | AUTO SELECT COVER FOR RENEWAL
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (
      coverOptions.length > 0 &&
      !selectedCover
    ) {
      /*
      |--------------------------------------------------------------------------
      | RENEWAL FLOW
      |--------------------------------------------------------------------------
      */

      if (renewal && renewalData) {
        const matchedCover =
          coverOptions.find(
            (item) =>
              item.id ===
              renewalData.insurance_coverage_id
          );

        setSelectedCover(
          matchedCover || coverOptions[0]
        );

        const matchedPeriod =
          periods.find(
            (item) =>
              item.value === renewalData.tenure
          );

        if (matchedPeriod) {
          setSelectedPeriod(matchedPeriod);
        }
      } else {
        /*
        |--------------------------------------------------------------------------
        | NORMAL FLOW
        |--------------------------------------------------------------------------
        */

        setSelectedCover(
          coverOptions[0]
        );
      }
    }
  }, [coverOptions]);

  /*
  |--------------------------------------------------------------------------
  | TOTAL PREMIUM
  |--------------------------------------------------------------------------
  */

  const totalPremium =
    selectedPeriod.value === 1
      ? selectedCover?.oneYear || 0
      : selectedPeriod.value === 2
        ? selectedCover?.twoYear || 0
        : selectedCover?.threeYear || 0;

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F4F7FB]">
        <p className="text-[14px] font-semibold text-[#64748B]">
          Loading Plan...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F7FB]">
      {/* HEADER */}
      <div className="sticky top-0 z-50 border-b border-[#E6EDF7] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[62px] max-w-[1400px] items-center justify-between px-5 lg:px-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[13px] font-semibold text-[#1E293B]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <button className="rounded-[10px] border border-[#DBEAFE] bg-[#F8FBFF] px-3 py-2 text-[11px] font-semibold text-[#2563EB]">
            Need Help?
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto grid max-w-[1400px] gap-4 px-4 py-4 lg:grid-cols-[1fr_320px] lg:px-8">
        {/* LEFT */}
        <div className="space-y-4">
          {/* PLAN CARD */}
          <div className="rounded-[18px] border border-[#E5EDF8] bg-white p-4 shadow-sm">
            <div className="flex items-center gap-4">
              {/* LOGO */}
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[14px] border border-[#E5EDF8] bg-[#FCFDFF]">
                <img
                  src={
                    plan?.logo_url ||
                    "/logo.png"
                  }
                  alt="logo"
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-[18px] font-bold text-[#111827]">
                    {plan?.plan_name}
                  </h2>

                  <button className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E2E8F0]">
                    <Heart className="h-3.5 w-3.5 text-[#64748B]" />
                  </button>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-[12px]">
                  <button className="font-semibold text-[#16A34A]">
                    View Features
                  </button>

                  <span className="h-1 w-1 rounded-full bg-[#CBD5E1]" />

                  <p className="text-[#475569]">
                    <span className="font-semibold text-[#16A34A]">
                      {plan?.cashless_hospitals}
                    </span>{" "}
                    Cashless Hospitals
                  </p>
                </div>

                {/* RENEWAL BADGE */}
                {renewal && (
                  <div className="mt-2 inline-flex rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-semibold text-[#2563EB]">
                    Renewal Plan
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* COVER */}
          <div className="rounded-[18px] border border-[#E5EDF8] bg-white p-4 shadow-sm">
            <h3 className="text-[17px] font-bold text-[#111827]">
              Cover Amount
            </h3>

            <div className="relative mt-4 w-full max-w-[380px]">
              <button
                onClick={() =>
                  setShowCoverDropdown(
                    !showCoverDropdown
                  )
                }
                className="flex h-[52px] w-full items-center justify-between rounded-[14px] border border-[#CBD5E1] bg-white px-4 transition-all duration-300 hover:border-[#2563EB]"
              >
                <span className="text-[15px] font-bold text-[#111827]">
                  {selectedCover?.cover ||
                    "Select Cover"}
                </span>

                <ChevronDown
                  className={`h-4 w-4 text-[#64748B] transition-all duration-300 ${
                    showCoverDropdown
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {/* DROPDOWN */}
              {showCoverDropdown && (
                <div className="absolute left-0 top-[58px] z-20 w-full overflow-hidden rounded-[14px] border border-[#DCE6F2] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                  {coverOptions.map(
                    (item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedCover(
                            item
                          );

                          setShowCoverDropdown(
                            false
                          );
                        }}
                        className={`flex w-full items-center justify-between border-b border-[#EEF2F7] px-4 py-3 text-left transition-all duration-300 last:border-b-0 hover:bg-[#F8FBFF] ${
                          selectedCover?.cover ===
                          item.cover
                            ? "bg-[#EFF6FF]"
                            : ""
                        }`}
                      >
                        <h4 className="text-[14px] font-bold text-[#111827]">
                          {item.cover}
                        </h4>

                        <p className="text-[12px] text-[#475569]">
                          ₹
                          {item.premium.toLocaleString()}
                        </p>
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* POLICY PERIOD */}
          <div className="rounded-[18px] border border-[#E5EDF8] bg-white p-4 shadow-sm">
            <h3 className="text-[17px] font-bold text-[#111827]">
              Policy Period
            </h3>

            <div className="mt-4 grid gap-3 lg:grid-cols-3">
              {periods.map((item, index) => {
                const calculatedPrice =
                  item.value === 1
                    ? selectedCover?.oneYear
                    : item.value === 2
                      ? selectedCover?.twoYear
                      : selectedCover?.threeYear;

                return (
                  <button
                    key={index}
                    onClick={() =>
                      setSelectedPeriod(
                        item
                      )
                    }
                    className={`relative rounded-[16px] border p-4 text-left transition-all duration-300 ${
                      selectedPeriod.year ===
                      item.year
                        ? "border-[#60A5FA] bg-[#EFF6FF]"
                        : "border-[#DCE6F2] bg-white"
                    }`}
                  >
                    {item.popular && (
                      <div className="absolute right-3 top-[-10px] rounded-full bg-[#DBEAFE] px-2 py-1 text-[9px] font-semibold text-[#2563EB]">
                        Popular
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-1 flex h-4 w-4 items-center justify-center rounded-full border ${
                          selectedPeriod.year ===
                          item.year
                            ? "border-[#2563EB]"
                            : "border-[#94A3B8]"
                        }`}
                      >
                        {selectedPeriod.year ===
                          item.year && (
                          <div className="h-2 w-2 rounded-full bg-[#2563EB]" />
                        )}
                      </div>

                      <div>
                        <h4 className="text-[14px] font-semibold text-[#111827]">
                          {item.year}
                        </h4>

                        <p className="mt-1 text-[20px] font-black tracking-[-1px] text-[#1E293B]">
                          ₹
                          {calculatedPrice?.toLocaleString?.() ||
                            0}
                        </p>

                        {item.save && (
                          <div className="mt-2 inline-flex rounded-full bg-[#E0F2FE] px-2 py-1 text-[9px] font-semibold text-[#0284C7]">
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
          <div className="rounded-[18px] border border-[#DBEAFE] bg-gradient-to-r from-[#EFF6FF] to-[#F8FBFF] p-4 shadow-sm">
            <h3 className="text-[17px] font-bold text-[#111827]">
              Plan Benefits
            </h3>

            <div className="mt-4 space-y-3">
              {plan?.features?.map(
                (item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3"
                  >
                    <Check className="h-4 w-4 text-[#2563EB]" />

                    <p className="text-[13px] text-[#475569]">
                      {item.feature}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="sticky top-[78px] self-start">
          <div className="overflow-hidden rounded-[20px] border border-[#E5EDF8] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
            {/* HEADER */}
            <div className="border-b border-[#EEF2F7] px-4 py-3">
              <h3 className="text-[16px] font-bold text-[#111827]">
                Summary
              </h3>
            </div>

            {/* BODY */}
            <div className="space-y-4 p-4">
              {/* PREMIUM */}
              <div className="flex items-center justify-between">
                <p className="text-[13px] text-[#64748B]">
                  Premium
                </p>

                <h4 className="text-[24px] font-black tracking-[-1px] text-[#111827]">
                  ₹
                  {totalPremium.toLocaleString()}
                </h4>
              </div>

              {/* DETAILS */}
              <div className="rounded-[14px] border border-dashed border-[#CBD5E1] p-3">
                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-[#64748B]">
                    Cover
                  </span>

                  <span className="font-semibold text-[#111827]">
                    {selectedCover?.cover}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between text-[12px]">
                  <span className="text-[#64748B]">
                    Duration
                  </span>

                  <span className="font-semibold text-[#111827]">
                    {selectedPeriod?.year}
                  </span>
                </div>
              </div>

              {/* TOTAL */}
              <div className="flex items-center justify-between border-t border-[#EEF2F7] pt-4">
                <h3 className="text-[16px] font-bold text-[#111827]">
                  Total
                </h3>

                <h3 className="text-[28px] font-black tracking-[-1px] text-[#2563EB]">
                  ₹
                  {totalPremium.toLocaleString()}
                </h3>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => {
                  navigate(
                    `/proposal/${plan?.category}`,
                    {
                      state: {
                        renewal:
                          renewal ||
                          false,

renewalData:
  renewalData,
                        insurance_plan_id:
                          plan?.id,

                        insurance_coverage_id:
                          selectedCover?.id,

                        premium_amount:
                          totalPremium,

                        tenure:
                          selectedPeriod.value,

                        category:
                          plan?.category,

                        selected_plan:
                          plan,

                        selected_cover:
                          selectedCover,
                      },
                    }
                  );
                }}
                className="mt-2 flex h-[50px] w-full items-center justify-center rounded-[14px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.24)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Proceed To Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeInsurancePlan;