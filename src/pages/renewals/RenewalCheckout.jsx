import { useState } from "react";
import {
  Shield,
  CreditCard,
  Wallet,
  Landmark,
  CheckCircle2,
  ChevronRight,
  Lock,
  Calendar,
  FileText,
  BadgeCheck,
} from "lucide-react";

const RenewalCheckout = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  return (
    <div className="min-h-screen bg-[#F6F9FC]">

      {/* HERO */}
      <section className="relative overflow-hidden py-8">

        {/* BG */}
        <div className="absolute left-[-100px] top-[-100px] h-[220px] w-[220px] rounded-full bg-[#2563EB]/10 blur-3xl" />

        <div className="absolute right-[-100px] bottom-[-100px] h-[220px] w-[220px] rounded-full bg-[#2563EB]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-7">

          {/* BREADCRUMB */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-[#64748B]">

            <span>Home</span>

            <ChevronRight className="h-3 w-3" />

            <span>Renewals</span>

            <ChevronRight className="h-3 w-3" />

            <span>Policies</span>

            <ChevronRight className="h-3 w-3" />

            <span className="text-[#2563EB]">
              Checkout
            </span>
          </div>

          {/* TOP */}
          <div className="mt-6">

            <div className="inline-flex items-center rounded-full border border-[#DCE7F8] bg-white px-4 py-1.5 shadow-sm">
              <span className="text-[10px] font-semibold tracking-[0.2px] text-[#2563EB]">
                SECURE PAYMENT
              </span>
            </div>

            <h1 className="mt-4 text-[30px] font-bold leading-[38px] tracking-[-1px] text-[#0F172A] sm:text-[38px] sm:leading-[46px]">
              Complete Your
              <span className="block text-[#2563EB]">
                Policy Renewal
              </span>
            </h1>

            <p className="mt-3 max-w-[620px] text-[14px] leading-[25px] text-[#64748B]">
              Review your renewal details and complete payment securely.
            </p>
          </div>

          {/* GRID */}
          <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_360px]">

            {/* LEFT */}
            <div className="space-y-6">

              {/* POLICY CARD */}
              <div className="rounded-[26px] border border-[#E5EDF7] bg-white p-5 shadow-[0_6px_25px_rgba(15,23,42,0.04)]">

                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                  {/* LEFT */}
                  <div className="flex gap-4">

                    <div className="flex h-[64px] w-[64px] min-w-[64px] items-center justify-center rounded-[20px] bg-[#EFF6FF] text-[#2563EB]">
                      <Shield className="h-7 w-7" />
                    </div>

                    <div>

                      {/* STATUS */}
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#D6F5DF] bg-[#F3FFF7] px-3 py-1">

                        <CheckCircle2 className="h-3 w-3 text-[#16A34A]" />

                        <span className="text-[10px] font-semibold text-[#16A34A]">
                          Eligible For Renewal
                        </span>
                      </div>

                      {/* TITLE */}
                      <h2 className="mt-3 text-[22px] font-bold tracking-[-0.7px] text-[#0F172A]">
                        Term Life Secure Plus
                      </h2>

                      <p className="mt-2 text-[13px] font-medium text-[#64748B]">
                        Policy Number :
                        <span className="ml-2 font-semibold text-[#0F172A]">
                          TERM-984523
                        </span>
                      </p>

                      <p className="mt-1.5 text-[13px] font-medium text-[#64748B]">
                        Customer :
                        <span className="ml-2 font-semibold text-[#0F172A]">
                          Arslan Khan
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* PREMIUM */}
                  <div className="rounded-[20px] border border-[#E5EDF7] bg-[#FAFCFF] p-4">

                    <p className="text-[12px] font-medium text-[#64748B]">
                      Renewal Premium
                    </p>

                    <h3 className="mt-1 text-[30px] font-bold tracking-[-1px] text-[#0F172A]">
                      ₹4,500
                    </h3>

                    <p className="mt-1 text-[11px] text-[#64748B]">
                      Inclusive of taxes
                    </p>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                  {/* VALIDITY */}
                  <div className="rounded-[18px] border border-[#E5EDF7] bg-[#FAFCFF] p-3.5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                        <Calendar className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-[11px] text-[#64748B]">
                          Renewal Validity
                        </p>

                        <h4 className="mt-1 text-[15px] font-bold text-[#0F172A]">
                          1 Year
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* COVERAGE */}
                  <div className="rounded-[18px] border border-[#E5EDF7] bg-[#FAFCFF] p-3.5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                        <FileText className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-[11px] text-[#64748B]">
                          Coverage
                        </p>

                        <h4 className="mt-1 text-[15px] font-bold text-[#0F172A]">
                          ₹50 Lakhs
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* STATUS */}
                  <div className="rounded-[18px] border border-[#E5EDF7] bg-[#FAFCFF] p-3.5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                        <BadgeCheck className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-[11px] text-[#64748B]">
                          Status
                        </p>

                        <h4 className="mt-1 text-[15px] font-bold text-[#16A34A]">
                          Active
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PAYMENT METHODS */}
              <div className="rounded-[26px] border border-[#E5EDF7] bg-white p-5 shadow-[0_6px_25px_rgba(15,23,42,0.04)]">

                <h2 className="text-[24px] font-bold tracking-[-0.7px] text-[#0F172A]">
                  Select Payment Method
                </h2>

                <p className="mt-2 text-[13px] leading-[24px] text-[#64748B]">
                  Choose your preferred payment option.
                </p>

                {/* METHODS */}
                <div className="mt-5 grid gap-3 md:grid-cols-3">

                  {/* CARD */}
                  <button
                    onClick={() => setSelectedMethod("card")}
                    className={`rounded-[20px] border p-4 text-left transition-all duration-300 ${
                      selectedMethod === "card"
                        ? "border-[#2563EB] bg-[#F8FBFF]"
                        : "border-[#E5EDF7] bg-white hover:border-[#D4E4FF]"
                    }`}
                  >

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                      <CreditCard className="h-5 w-5" />
                    </div>

                    <h3 className="mt-3 text-[15px] font-semibold text-[#0F172A]">
                      Card
                    </h3>

                    <p className="mt-1 text-[11px] leading-[20px] text-[#64748B]">
                      Visa, Mastercard & RuPay accepted.
                    </p>
                  </button>

                  {/* UPI */}
                  <button
                    onClick={() => setSelectedMethod("upi")}
                    className={`rounded-[20px] border p-4 text-left transition-all duration-300 ${
                      selectedMethod === "upi"
                        ? "border-[#2563EB] bg-[#F8FBFF]"
                        : "border-[#E5EDF7] bg-white hover:border-[#D4E4FF]"
                    }`}
                  >

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                      <Wallet className="h-5 w-5" />
                    </div>

                    <h3 className="mt-3 text-[15px] font-semibold text-[#0F172A]">
                      UPI
                    </h3>

                    <p className="mt-1 text-[11px] leading-[20px] text-[#64748B]">
                      Google Pay, PhonePe & Paytm.
                    </p>
                  </button>

                  {/* BANK */}
                  <button
                    onClick={() => setSelectedMethod("bank")}
                    className={`rounded-[20px] border p-4 text-left transition-all duration-300 ${
                      selectedMethod === "bank"
                        ? "border-[#2563EB] bg-[#F8FBFF]"
                        : "border-[#E5EDF7] bg-white hover:border-[#D4E4FF]"
                    }`}
                  >

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                      <Landmark className="h-5 w-5" />
                    </div>

                    <h3 className="mt-3 text-[15px] font-semibold text-[#0F172A]">
                      Banking
                    </h3>

                    <p className="mt-1 text-[11px] leading-[20px] text-[#64748B]">
                      Secure net banking payments.
                    </p>
                  </button>
                </div>

                {/* FORM */}
                <div className="mt-6 space-y-4">

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold text-[#0F172A]">
                      Card Holder Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter card holder name"
                      className="h-[50px] w-full rounded-[16px] border border-[#DCE5F2] bg-[#FCFDFF] px-4 text-[13px] outline-none transition-all duration-200 placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold text-[#0F172A]">
                      Card Number
                    </label>

                    <input
                      type="text"
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="h-[50px] w-full rounded-[16px] border border-[#DCE5F2] bg-[#FCFDFF] px-4 text-[13px] outline-none transition-all duration-200 placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-[12px] font-semibold text-[#0F172A]">
                        Expiry Date
                      </label>

                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="h-[50px] w-full rounded-[16px] border border-[#DCE5F2] bg-[#FCFDFF] px-4 text-[13px] outline-none transition-all duration-200 placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[12px] font-semibold text-[#0F172A]">
                        CVV
                      </label>

                      <input
                        type="password"
                        placeholder="***"
                        className="h-[50px] w-full rounded-[16px] border border-[#DCE5F2] bg-[#FCFDFF] px-4 text-[13px] outline-none transition-all duration-200 placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div>

              <div className="sticky top-24 rounded-[26px] border border-[#E5EDF7] bg-white p-5 shadow-[0_6px_25px_rgba(15,23,42,0.04)]">

                <h2 className="text-[22px] font-bold tracking-[-0.7px] text-[#0F172A]">
                  Payment Summary
                </h2>

                {/* SUMMARY */}
                <div className="mt-6 space-y-4">

                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-[#64748B]">
                      Base Premium
                    </span>

                    <span className="text-[13px] font-semibold text-[#0F172A]">
                      ₹4,000
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-[#64748B]">
                      GST & Charges
                    </span>

                    <span className="text-[13px] font-semibold text-[#0F172A]">
                      ₹500
                    </span>
                  </div>

                  <div className="h-[1px] w-full bg-[#E5EDF7]" />

                  <div className="flex items-center justify-between">

                    <span className="text-[15px] font-semibold text-[#0F172A]">
                      Total Amount
                    </span>

                    <span className="text-[28px] font-bold tracking-[-1px] text-[#2563EB]">
                      ₹4,500
                    </span>
                  </div>
                </div>

                {/* SECURITY */}
                <div className="mt-6 rounded-[18px] border border-[#DCE7F8] bg-[#F8FBFF] p-4">

                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#2563EB] shadow-sm">
                      <Lock className="h-4 w-4" />
                    </div>

                    <div>
                      <h3 className="text-[13px] font-semibold text-[#0F172A]">
                        100% Secure Payment
                      </h3>

                      <p className="mt-1 text-[11px] leading-[20px] text-[#64748B]">
                        Encrypted and protected payment infrastructure.
                      </p>
                    </div>
                  </div>
                </div>

                {/* BUTTON */}
                <button className="mt-6 flex h-[52px] w-full items-center justify-center rounded-[16px] bg-[#111827] text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#2563EB]">
                  Pay & Renew Policy
                </button>

                <p className="mt-4 text-center text-[10.5px] leading-[19px] text-[#64748B]">
                  By proceeding, you agree to the renewal terms and secure
                  payment authorization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RenewalCheckout;