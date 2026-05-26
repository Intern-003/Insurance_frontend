import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Shield,
  Calendar,
  FileText,
  ArrowRight,
  Search,
  ChevronRight,
} from "lucide-react";

const renewalTypeMap = {
  "term-life": {
    title: "Term Life Insurance Renewal",
    subtitle:
      "Verify your existing term life insurance policy to continue uninterrupted coverage.",
  },

  investment: {
    title: "Investment Insurance Renewal",
    subtitle:
      "Securely verify your investment policy details for seamless renewals.",
  },

  health: {
    title: "Health Insurance Renewal",
    subtitle:
      "Securely verify your health insurance details for seamless renewals.",
  },

  car: {
    title: "Car Insurance Renewal",
    subtitle:
      "Renew your car insurance quickly with real-time policy verification.",
  },

  bike: {
    title: "Bike Insurance Renewal",
    subtitle:
      "Continue your two-wheeler coverage with fast renewal verification.",
  },

  travel: {
    title: "Travel Insurance Renewal",
    subtitle:
      "Verify your travel insurance policy details securely and instantly.",
  },

  home: {
    title: "Home Insurance Renewal",
    subtitle:
      "Protect your property continuously with secure policy renewals.",
  },

  business: {
    title: "Business Insurance Renewal",
    subtitle:
      "Verify your business protection plans with enterprise-grade workflows.",
  },
};

const RenewalVerify = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  const currentType =
    renewalTypeMap[type] || renewalTypeMap["term-life"];

  const [formData, setFormData] = useState({
    applicationNo: "",
    policyNo: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.applicationNo && !formData.policyNo) {
      newErrors.identity =
        "Please enter either Application Number or Policy Number";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate(`/renewals/${type}/policies`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F9FC]">

      {/* SECTION */}
      <section className="relative overflow-hidden py-10">

        {/* BG EFFECTS */}
        <div className="absolute left-[-120px] top-[-80px] h-[320px] w-[320px] rounded-full bg-[#2563EB]/10 blur-3xl" />

        <div className="absolute right-[-120px] bottom-[-80px] h-[320px] w-[320px] rounded-full bg-[#2563EB]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10">

          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-[13px] font-medium text-[#64748B]">

            <span>Home</span>

            <ChevronRight className="h-4 w-4" />

            <span>Renewals</span>

            <ChevronRight className="h-4 w-4" />

            <span className="text-[#2563EB]">
              Verification
            </span>
          </div>

          {/* MAIN GRID */}
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_440px] lg:items-start">

            {/* LEFT SECTION */}
            <div className="pt-8">

              {/* BADGE */}
              <div className="inline-flex items-center rounded-full border border-[#DCE7F8] bg-white px-5 py-2 shadow-sm">
                <span className="text-[12px] font-semibold tracking-[0.2px] text-[#2563EB]">
                  POLICY VERIFICATION
                </span>
              </div>

              {/* TITLE */}
              <h1 className="mt-5 max-w-[580px] text-[34px] font-bold leading-[44px] tracking-[-1.2px] text-[#0F172A] sm:text-[44px] sm:leading-[54px]">
                {currentType.title}
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-[580px] text-[15.5px] leading-[29px] text-[#64748B]">
                {currentType.subtitle}
              </p>

              {/* FEATURES */}
              <div className="mt-8 flex flex-wrap gap-4">

                {/* FEATURE */}
                <div className="flex items-center gap-3 rounded-[22px] border border-[#E5EDF7] bg-white px-5 py-4 shadow-sm">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                    <Shield className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold text-[#0F172A]">
                      Secure Verification
                    </p>

                    <p className="mt-1 text-[12px] text-[#64748B]">
                      Enterprise-grade protection
                    </p>
                  </div>
                </div>

                {/* FEATURE */}
                <div className="flex items-center gap-3 rounded-[22px] border border-[#E5EDF7] bg-white px-5 py-4 shadow-sm">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                    <Search className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold text-[#0F172A]">
                      Instant Lookup
                    </p>

                    <p className="mt-1 text-[12px] text-[#64748B]">
                      Real-time policy verification
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM CARD */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#E5EDF7] bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-7">

              {/* TOP */}
              <div className="flex items-center gap-4">

                {/* ICON */}
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[18px] bg-[#EFF6FF] text-[#2563EB]">
                  <FileText className="h-6 w-6" />
                </div>

                {/* TITLE */}
                <div>
                  <h2 className="text-[24px] font-bold tracking-[-0.8px] text-[#0F172A]">
                    Verify Policy
                  </h2>

                  <p className="mt-1 text-[13px] text-[#64748B]">
                    Continue your renewal process
                  </p>
                </div>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >

                {/* APPLICATION NUMBER */}
                <div>
                  <label className="mb-2 block text-[13.5px] font-semibold text-[#0F172A]">
                    Application Number
                  </label>

                  <input
                    type="text"
                    name="applicationNo"
                    value={formData.applicationNo}
                    onChange={handleChange}
                    placeholder="Enter application number"
                    className="h-[52px] w-full rounded-[16px] border border-[#DCE5F2] bg-[#FCFDFF] px-5 text-[14px] text-[#0F172A] outline-none transition-all duration-200 placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white"
                  />
                </div>

                {/* OR */}
                <div className="relative py-1">

                  <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-[#E5EDF7]" />

                  <div className="relative mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-[#E5EDF7] bg-white text-[10px] font-semibold text-[#64748B]">
                    OR
                  </div>
                </div>

                {/* POLICY NUMBER */}
                <div>
                  <label className="mb-2 block text-[13.5px] font-semibold text-[#0F172A]">
                    Policy Number
                  </label>

                  <input
                    type="text"
                    name="policyNo"
                    value={formData.policyNo}
                    onChange={handleChange}
                    placeholder="Enter policy number"
                    className="h-[52px] w-full rounded-[16px] border border-[#DCE5F2] bg-[#FCFDFF] px-5 text-[14px] text-[#0F172A] outline-none transition-all duration-200 placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white"
                  />
                </div>

                {/* ERROR */}
                {errors.identity && (
                  <p className="text-[12px] font-medium text-red-500">
                    {errors.identity}
                  </p>
                )}

                {/* DOB */}
                <div>
                  <label className="mb-2 block text-[13.5px] font-semibold text-[#0F172A]">
                    Date of Birth
                  </label>

                  <div className="relative">

                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="h-[52px] w-full rounded-[16px] border border-[#DCE5F2] bg-[#FCFDFF] px-5 text-[14px] text-[#0F172A] outline-none transition-all duration-200 focus:border-[#2563EB] focus:bg-white"
                    />
                  </div>

                  {errors.dob && (
                    <p className="mt-2 text-[12px] font-medium text-red-500">
                      {errors.dob}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="group mt-2 flex h-[52px] w-full items-center justify-center gap-3 rounded-[16px] bg-[#111827] text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#2563EB]"
                >
                  Verify Policy

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>

              {/* FOOTER */}
              <div className="mt-5 rounded-[18px] border border-[#E5EDF7] bg-[#FAFCFF] p-4">

                <p className="text-[12px] leading-[22px] text-[#64748B]">
                  Your details are securely encrypted and verified using
                  enterprise-grade infrastructure to ensure maximum protection
                  and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RenewalVerify;