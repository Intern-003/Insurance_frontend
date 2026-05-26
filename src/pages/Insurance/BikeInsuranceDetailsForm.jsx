import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Bike,
  ChevronRight,
  ShieldCheck,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

import logo from "../../assets/images/logo.png";

const SelectButton = ({ active, onClick, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[50px] flex-1 rounded-[16px] border text-[14px] font-semibold transition-all duration-200 ${
        active
          ? "border-[#2563EB] bg-[#EEF5FF] text-[#2563EB] shadow-sm"
          : "border-[#DCE6F5] bg-white text-[#0F172A] hover:border-[#93C5FD]"
      }`}
    >
      {label}
    </button>
  );
};

const InputField = ({ label, placeholder, value, onChange, type = "text" }) => {
  return (
    <div>
      <label className="mb-2 block text-[13px] font-semibold text-[#0F172A]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-[52px] w-full rounded-[16px] border border-[#DCE6F5] bg-[#FBFCFF] px-4 text-[14px] font-medium text-[#111827] outline-none transition-all focus:border-[#2563EB] focus:bg-white"
      />
    </div>
  );
};

const SelectField = ({ label, value, onChange, placeholder, options }) => {
  return (
    <div>
      <label className="mb-2 block text-[13px] font-semibold text-[#0F172A]">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="h-[52px] w-full rounded-[16px] border border-[#DCE6F5] bg-[#FBFCFF] px-4 text-[14px] font-medium text-[#111827] outline-none transition-all focus:border-[#2563EB]"
      >
        <option value="">{placeholder}</option>

        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

const BikeInsuranceDetailsForm = () => {
  const [formData, setFormData] = useState({
    policyExpired: "",
    pincode: "",
    ownerName: "",
    mobile: "",
    email: "",
    bikeModel: "Royal Enfield Classic 350",
    variant: "Signals Edition",
    registration: "MH12AB4587",
    year: "2023",
    fuelType: "",
    previousClaim: "",
    ownership: "",
    city: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#F4F8FF]">
      {/* HEADER */}
      <div className="sticky top-0 z-50 border-b border-[#E5EEF9] bg-white/90 backdrop-blur-xl">
        <div className="flex h-[82px] items-center justify-between px-[50px]">
          {/* LOGO */}
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-12 object-contain cursor-pointer"
            />
          </Link>

          {/* RIGHT */}
          <button className="flex h-[42px] items-center gap-2 rounded-[14px] border border-[#DCE6F5] bg-[#F8FBFF] px-4 text-[14px] font-semibold text-[#111827] transition-all hover:bg-white">
            <HelpCircle className="h-4 w-4" />
            Support
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="px-[180px] py-10">
        <div className="grid grid-cols-[280px_1fr] gap-10">
          {/* SIDEBAR */}
          <div className="pt-8">
            <div className="space-y-5">
              <div className="flex items-center gap-4 rounded-[18px] bg-[#EAF4FF] px-5 py-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563EB] text-[14px] font-bold text-white">
                  1
                </div>

                <div>
                  <h3 className="text-[15px] font-bold text-[#111827]">
                    Bike details
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 px-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563EB] text-[14px] font-bold text-white">
                  2
                </div>

                <div>
                  <h3 className="text-[15px] font-medium text-[#4B5563]">
                    Personal details
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 px-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8EAF2] text-[14px] font-bold text-[#475569]">
                  3
                </div>

                <div>
                  <h3 className="text-[15px] font-medium text-[#4B5563]">
                    Plan selection
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 px-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8EAF2] text-[14px] font-bold text-[#475569]">
                  4
                </div>

                <div>
                  <h3 className="text-[15px] font-medium text-[#4B5563]">
                    Verify & review
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="rounded-[32px] border border-[#E4ECF8] bg-white p-10 shadow-[0_12px_40px_rgba(37,99,235,0.06)]">
              {/* TOP */}
              <div className="flex items-start justify-between gap-8">
                <div>
                  <h1 className="text-[38px] font-bold leading-[1.1] tracking-[-2px] text-[#111827]">
                    Review your bike info
                    <br />& continue
                  </h1>

                  <p className="mt-3 text-[14px] leading-7 text-[#64748B]">
                    Fill your bike and owner details to explore personalised
                    bike insurance plans.
                  </p>
                </div>

                <div className="rounded-[22px] border border-[#DCE8FA] bg-gradient-to-br from-[#EEF5FF] to-[#F8FBFF] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#2563EB]" />

                    <span className="text-[13px] font-semibold text-[#2563EB]">
                      Secure Process
                    </span>
                  </div>
                </div>
              </div>

              {/* BIKE CARD */}
              <div className="mt-8 rounded-[24px] border border-[#DCE8FA] bg-gradient-to-r from-[#EEF5FF] to-[#F8FBFF] p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-white shadow-sm">
                      <Bike className="h-8 w-8 text-[#2563EB]" />
                    </div>

                    <div>
                      <h3 className="text-[20px] font-bold text-[#111827]">
                        {formData.bikeModel}
                      </h3>

                      <p className="mt-1 text-[13px] font-medium text-[#64748B]">
                        {formData.registration}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-3">
                        <div className="rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-[#111827]">
                          {formData.variant}
                        </div>

                        <div className="rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-[#111827]">
                          Registration year {formData.year}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="text-[14px] font-semibold text-[#2563EB]">
                    Edit
                  </button>
                </div>
              </div>

              {/* POLICY DETAILS */}
              <div className="mt-10">
                <h2 className="text-[24px] font-bold tracking-[-1px] text-[#111827]">
                  Policy details
                </h2>

                <p className="mt-2 text-[14px] text-[#64748B]">
                  Help us understand your previous policy
                </p>

                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
                  <div>
                    <label className="mb-2 block text-[13px] font-semibold text-[#0F172A]">
                      Has your policy expired?
                    </label>

                    <div className="flex gap-3">
                      <SelectButton
                        active={formData.policyExpired === "Yes"}
                        onClick={() => handleChange("policyExpired", "Yes")}
                        label="Yes"
                      />

                      <SelectButton
                        active={formData.policyExpired === "No"}
                        onClick={() => handleChange("policyExpired", "No")}
                        label="No"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-semibold text-[#0F172A]">
                      Any previous claim?
                    </label>

                    <div className="flex gap-3">
                      <SelectButton
                        active={formData.previousClaim === "Yes"}
                        onClick={() => handleChange("previousClaim", "Yes")}
                        label="Yes"
                      />

                      <SelectButton
                        active={formData.previousClaim === "No"}
                        onClick={() => handleChange("previousClaim", "No")}
                        label="No"
                      />
                    </div>
                  </div>

                  <SelectField
                    label="Fuel type"
                    value={formData.fuelType}
                    onChange={(e) => handleChange("fuelType", e.target.value)}
                    placeholder="Select fuel type"
                    options={["Petrol", "Electric"]}
                  />

                  <SelectField
                    label="Ownership type"
                    value={formData.ownership}
                    onChange={(e) => handleChange("ownership", e.target.value)}
                    placeholder="Select ownership"
                    options={["Individual", "Company"]}
                  />
                </div>
              </div>

              {/* OWNER DETAILS */}
              <div className="mt-12">
                <h2 className="text-[24px] font-bold tracking-[-1px] text-[#111827]">
                  Owner details
                </h2>

                <p className="mt-2 text-[14px] text-[#64748B]">
                  Enter your personal and contact details
                </p>

                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
                  <InputField
                    label="Owner full name"
                    placeholder="Enter full name"
                    value={formData.ownerName}
                    onChange={(e) => handleChange("ownerName", e.target.value)}
                  />

                  <InputField
                    label="Mobile number"
                    placeholder="+91 9876543210"
                    value={formData.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                  />

                  <InputField
                    label="Email address"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />

                  <InputField
                    label="Pincode"
                    placeholder="400043"
                    value={formData.pincode}
                    onChange={(e) => handleChange("pincode", e.target.value)}
                  />

                  <InputField
                    label="City"
                    placeholder="Mumbai"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                  />
                </div>
              </div>

              {/* BENEFITS */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="rounded-[20px] border border-[#DCE8FA] bg-[#F8FBFF] p-5">
                  <CheckCircle2 className="h-6 w-6 text-[#2563EB]" />

                  <h3 className="mt-4 text-[15px] font-bold text-[#111827]">
                    Instant quotes
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                    Compare plans and get instant premium pricing.
                  </p>
                </div>

                <div className="rounded-[20px] border border-[#DCE8FA] bg-[#F8FBFF] p-5">
                  <CheckCircle2 className="h-6 w-6 text-[#2563EB]" />

                  <h3 className="mt-4 text-[15px] font-bold text-[#111827]">
                    Zero paperwork
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                    Fast process with minimal documentation.
                  </p>
                </div>

                <div className="rounded-[20px] border border-[#DCE8FA] bg-[#F8FBFF] p-5">
                  <CheckCircle2 className="h-6 w-6 text-[#2563EB]" />

                  <h3 className="mt-4 text-[15px] font-bold text-[#111827]">
                    Claim support
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                    Dedicated support team for quick claim help.
                  </p>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-12 flex items-center justify-between rounded-[28px] border border-[#DCE8FA] bg-gradient-to-r from-[#EEF5FF] to-[#F8FBFF] px-6 py-5">
                <div>
                  <p className="text-[13px] font-semibold text-[#2563EB]">
                    Secure & trusted insurance journey
                  </p>

                  <p className="mt-1 text-[12px] text-[#64748B]">
                    Your details are safe and encrypted.
                  </p>
                </div>

                <Link to="/insurance-plans">
                  <button className="flex h-[54px] items-center gap-2 rounded-[18px] bg-[#16A34A] px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#15803D] hover:shadow-lg cursor-pointer">
                    View plans
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeInsuranceDetailsForm;
