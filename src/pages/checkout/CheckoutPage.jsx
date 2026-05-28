import React, { useMemo } from "react";

import {
  ShieldCheck,
  BadgeCheck,
  FileText,
  Lock,
  User,
  Shield,
  Receipt,
  CalendarDays,
  QrCode,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  CreditCard,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../components/Header";

import { usePost } from "../../hooks/usePost";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  /*
  |--------------------------------------------------------------------------
  | PROPOSAL DATA
  |--------------------------------------------------------------------------
  */

  const proposal = location.state?.proposal || {};
  /*
|--------------------------------------------------------------------------
| RENEWAL DATA
|--------------------------------------------------------------------------
*/

const renewal =
  location.state?.renewal || false;

const renewalData =
  location.state?.renewalData ||
  location.state?.proposal ||
  null;

  /*
  |--------------------------------------------------------------------------
  | PAYMENT API
  |--------------------------------------------------------------------------
  */

  const { postData, loading } = usePost();

  /*
  |--------------------------------------------------------------------------
  | CALCULATIONS
  |--------------------------------------------------------------------------
  */

  const premium = Number(
    proposal?.premium_amount || 0
  );

  const gst = Math.round(
    (premium * 18) / 100
  );

  const total = premium + gst;
/*
|--------------------------------------------------------------------------
| RENEWAL EXPIRY
|--------------------------------------------------------------------------
*/

const currentExpiry =
  renewalData?.policy_end_date;

const newExpiryDate = currentExpiry
  ? new Date(currentExpiry)
  : null;

if (newExpiryDate) {

  newExpiryDate.setFullYear(
    newExpiryDate.getFullYear() +
      Number(proposal?.tenure || 1)
  );
}
  /*
  |--------------------------------------------------------------------------
  | CATEGORY TITLE
  |--------------------------------------------------------------------------
  */

  const categoryTitle = useMemo(() => {
    switch (proposal?.category) {
      case "car":
        return "Car Insurance";

      case "bike":
        return "Bike Insurance";

      case "health":
        return "Health Insurance";

      case "life":
        return "Life Insurance";

      case "travel":
        return "Travel Insurance";

      default:
        return "Insurance";
    }
  }, [proposal]);

  /*
  |--------------------------------------------------------------------------
  | HANDLE PAYMENT
  |--------------------------------------------------------------------------
  */

  const handlePaymentComplete = async () => {
    try {
      const response = await postData(
        "complete-payment",
        {
application_number:
  proposal?.application_number,

renewal:
  renewal,

old_policy_id:
  renewalData?.id || null,
        }
      );

      console.log(
        "PAYMENT RESPONSE :",
        response
      );

      if (response?.status) {
        navigate("/policy-success", {
          state: {
            proposal: response?.proposal,
          },
        });
      }
    } catch (err) {
      console.log(
        "PAYMENT ERROR :",
        err
      );
    }
  };

  /*
  |--------------------------------------------------------------------------
  | UI
  |--------------------------------------------------------------------------
  */

  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      <Header />

      <div className="px-3 py-3 lg:px-4">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-4 xl:grid-cols-[260px_1fr]">
            {/* ===================================================== */}
            {/* LEFT PANEL */}
            {/* ===================================================== */}

            <div className="sticky top-3 h-[calc(100vh-95px)]">
              <div className="flex h-full flex-col rounded-[26px] bg-gradient-to-b from-[#07153A] via-[#0B1D4D] to-[#132B68] p-5 shadow-xl">
                {/* ICON */}
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white/10">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>

                {/* TITLE */}
                <h1 className="mt-5 text-[24px] font-black leading-tight tracking-[-1px] text-white">
                  Complete
                  <br />
                  Your Payment
                </h1>

                <p className="mt-3 text-[12px] leading-6 text-slate-300">
                  Secure your insurance instantly
                  with encrypted payment
                  verification.
                </p>

                {/* STEPS */}
                <div className="mt-6 space-y-3">
                  {/* STEP */}
                  <div className="rounded-[18px] border border-white/10 bg-white/10 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-green-500/15">
                        <BadgeCheck className="h-4 w-4 text-green-400" />
                      </div>

                      <div>
                        <h3 className="text-[14px] font-bold text-white">
                          Plan Selected
                        </h3>

                        <p className="text-[11px] text-slate-300">
                          Insurance finalized
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* STEP */}
                  <div className="rounded-[18px] border border-white/10 bg-white/10 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-blue-500/15">
                        <FileText className="h-4 w-4 text-blue-400" />
                      </div>

                      <div>
                        <h3 className="text-[14px] font-bold text-white">
                          Proposal Submitted
                        </h3>

                        <p className="text-[11px] text-slate-300">
                          Details verified
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* STEP */}
                  <div className="rounded-[18px] border border-white/10 bg-white/10 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-yellow-500/15">
                        <CreditCard className="h-4 w-4 text-yellow-300" />
                      </div>

                      <div>
                        <h3 className="text-[14px] font-bold text-white">
                          Payment Pending
                        </h3>

                        <p className="text-[11px] text-slate-300">
                          Awaiting confirmation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TOTAL */}
                <div className="mt-auto rounded-[22px] border border-white/10 bg-white/10 p-4">
                  <p className="text-[10px] uppercase tracking-[3px] text-slate-400">
                    Total Amount
                  </p>

                  <h2 className="mt-3 text-[40px] font-black leading-none tracking-[-2px] text-white">
                    ₹{total}
                  </h2>

                  <p className="mt-2 text-[11px] text-slate-300">
                    Including GST & charges
                  </p>

                  <div className="mt-4 h-[6px] overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-[#4F46E5] to-[#22C55E]" />
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================== */}
            {/* RIGHT SIDE */}
            {/* ===================================================== */}

            <div className="space-y-4">
              {/* SUMMARY */}
              <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
                {/* TOP */}
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h2 className="text-[28px] font-black tracking-[-1px] text-[#0F172A]">
                      Checkout Summary
                    </h2>

                    <p className="mt-1 text-[12px] text-slate-500">
                      Review your policy details
                      before payment.
                    </p>
                  </div>
{renewal && (
  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-2">

    <CheckCircle2 className="h-4 w-4 text-[#2563EB]" />

    <span className="text-[12px] font-semibold text-[#2563EB]">
      Renewal Checkout
    </span>
  </div>
)}
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-4 py-2">
                    <Lock className="h-4 w-4 text-[#4F46E5]" />

                    <span className="text-[12px] font-semibold text-[#4F46E5]">
                      Secure Payment
                    </span>
                  </div>
                </div>

                {/* INFO GRID */}
                <div className="mt-4 grid gap-3 lg:grid-cols-2">
                  {/* CUSTOMER */}
                  <div className="rounded-[18px] border border-slate-200 bg-[#FCFDFF] p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-[46px] w-[46px] items-center justify-center rounded-2xl bg-[#EEF2FF]">
                        <User className="h-5 w-5 text-[#4F46E5]" />
                      </div>

                      <div>
                        <p className="text-[11px] text-slate-500">
                          Customer
                        </p>

                        <h3 className="text-[18px] font-black text-[#0F172A]">
                          {proposal?.full_name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* CATEGORY */}
                  <div className="rounded-[18px] border border-slate-200 bg-[#FCFDFF] p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-[46px] w-[46px] items-center justify-center rounded-2xl bg-[#EEF2FF]">
                        <Shield className="h-5 w-5 text-[#4F46E5]" />
                      </div>

                      <div>
                        <p className="text-[11px] text-slate-500">
                          Insurance Type
                        </p>

                        <h3 className="text-[18px] font-black text-[#0F172A]">
                          {categoryTitle}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* APP NUMBER */}
                  <div className="rounded-[18px] border border-slate-200 bg-[#FCFDFF] p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-[46px] w-[46px] items-center justify-center rounded-2xl bg-[#EEF2FF]">
                        <Receipt className="h-5 w-5 text-[#4F46E5]" />
                      </div>

                      <div className="overflow-hidden">
                        <p className="text-[11px] text-slate-500">
                          Application Number
                        </p>

                        <h3 className="truncate text-[16px] font-black text-[#0F172A]">
                          {
                            proposal?.application_number
                          }
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* TENURE */}
                  <div className="rounded-[18px] border border-slate-200 bg-[#FCFDFF] p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-[46px] w-[46px] items-center justify-center rounded-2xl bg-[#EEF2FF]">
                        <CalendarDays className="h-5 w-5 text-[#4F46E5]" />
                      </div>

                      <div>
                        <p className="text-[11px] text-slate-500">
                          Policy Duration
                        </p>

                        <h3 className="text-[18px] font-black text-[#0F172A]">
                          {proposal?.tenure} Year
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
{renewal && (
  <div className="rounded-[24px] border border-[#DBEAFE] bg-gradient-to-r from-[#EFF6FF] to-[#F8FBFF] p-4 shadow-sm">

    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      {/* LEFT */}
      <div>

        <h2 className="text-[24px] font-black tracking-[-1px] text-[#0F172A]">
          Renewal Summary
        </h2>

        <p className="mt-1 text-[13px] text-slate-600">
          Your existing policy will be extended after successful renewal payment.
        </p>
      </div>

      {/* STATUS */}
      <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2">

        <CheckCircle2 className="h-4 w-4 text-green-600" />

        <span className="text-[12px] font-semibold text-green-700">
          Active Policy
        </span>
      </div>
    </div>

    {/* GRID */}
    <div className="mt-5 grid gap-3 lg:grid-cols-3">

      {/* OLD POLICY */}
      <div className="rounded-[18px] border border-white bg-white/80 p-4">

        <p className="text-[11px] text-slate-500">
          Existing Policy Number
        </p>

        <h3 className="mt-2 text-[18px] font-black text-[#0F172A]">
          {renewalData?.policy_number}
        </h3>
      </div>

      {/* CURRENT EXPIRY */}
      <div className="rounded-[18px] border border-white bg-white/80 p-4">

        <p className="text-[11px] text-slate-500">
          Current Expiry Date
        </p>

        <h3 className="mt-2 text-[18px] font-black text-[#DC2626]">
          {currentExpiry
            ? new Date(
                currentExpiry
              ).toLocaleDateString()
            : "-"}
        </h3>
      </div>

      {/* NEW EXPIRY */}
      <div className="rounded-[18px] border border-white bg-white/80 p-4">

        <p className="text-[11px] text-slate-500">
          New Expiry After Renewal
        </p>

        <h3 className="mt-2 text-[18px] font-black text-[#16A34A]">
          {newExpiryDate
            ? newExpiryDate.toLocaleDateString()
            : "-"}
        </h3>
      </div>
    </div>
  </div>
)}
              {/* PAYMENT DETAILS */}
              <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="grid gap-4 xl:grid-cols-[1fr_260px]">
                  {/* LEFT */}
                  <div>
                    <h2 className="text-[28px] font-black tracking-[-1px] text-[#0F172A]">
                      Payment Details
                    </h2>

                    {/* PRICE */}
                    <div className="mt-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[14px] text-slate-600">
                          Premium Amount
                        </p>

                        <h3 className="text-[24px] font-black text-[#0F172A]">
                          ₹{premium}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-[14px] text-slate-600">
                          GST (18%)
                        </p>

                        <h3 className="text-[24px] font-black text-[#0F172A]">
                          ₹{gst}
                        </h3>
                      </div>

                      <div className="border-t border-dashed border-slate-300 pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[16px] font-bold text-[#0F172A]">
                              Total Payable
                            </p>

                            <p className="mt-1 text-[11px] text-slate-500">
                              Inclusive of all taxes
                            </p>
                          </div>

                          <h2 className="text-[40px] font-black tracking-[-2px] text-[#16A34A]">
                            ₹{total}
                          </h2>
                        </div>
                      </div>
                    </div>

                    {/* BUTTON */}
                    <button
                      onClick={
                        handlePaymentComplete
                      }
                      disabled={loading}
                      className="mt-5 flex h-[56px] w-full items-center justify-center gap-2 rounded-[16px] bg-gradient-to-r from-[#0F172A] to-[#111C44] text-[15px] font-bold text-white transition-all duration-300 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? (
                        "Processing..."
                      ) : (
                        <>
                          Payment Complete
                          <ChevronRight className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    {/* NOTE */}
                    <div className="mt-4 rounded-[16px] border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-3">
                      <div className="flex gap-2">
                        <AlertCircle className="mt-0.5 h-4 w-4 text-amber-600" />

                        <p className="text-[11px] leading-5 text-amber-700">
                          Policy number will
                          auto-generate after
                          successful payment
                          verification.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* QR SECTION */}
                  <div className="rounded-[22px] border border-slate-200 bg-[#F8FAFC] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-[46px] w-[46px] items-center justify-center rounded-2xl bg-[#EEF2FF]">
                        <QrCode className="h-5 w-5 text-[#4F46E5]" />
                      </div>

                      <div>
                        <h3 className="text-[20px] font-black text-[#0F172A]">
                          Scan & Pay
                        </h3>

                        <p className="text-[11px] text-slate-500">
                          UPI / QR Payment
                        </p>
                      </div>
                    </div>

                    {/* QR */}
                    <div className="mt-4 flex items-center justify-center rounded-[20px] border border-dashed border-slate-300 bg-white p-3">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=SPAY-INSURANCE"
                        alt="QR"
                        className="h-[150px] w-[150px] rounded-xl"
                      />
                    </div>

                    {/* INFO */}
                    <div className="mt-4 rounded-[16px] bg-[#EEF2FF] p-3">
                      <p className="text-center text-[11px] leading-5 text-slate-600">
                        Complete payment and
                        instantly generate your
                        policy.
                      </p>
                    </div>

                    {/* SECURE */}
                    <div className="mt-4 flex items-center justify-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />

                      <span className="text-[11px] font-semibold text-green-700">
                        100% Secure Gateway
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* END RIGHT */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;