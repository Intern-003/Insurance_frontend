import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Car,
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

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
}) => {
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
        autoComplete="off"
        className={`h-[52px] w-full rounded-[16px] border bg-[#FBFCFF] px-4 text-[14px] font-medium text-[#111827] outline-none transition-all focus:bg-white
        ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-[#DCE6F5] focus:border-[#2563EB]"
        }`}
      />
      {error && <p className="mt-1 text-[12px] text-red-500">{error}</p>}
    </div>
  );
};

const SelectField = ({
  label,
  value,
  onChange,
  placeholder,
  options,
  error,
}) => {
  return (
    <div>
      <label className="mb-2 block text-[13px] font-semibold text-[#0F172A]">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className={`h-[52px] w-full rounded-[16px] border bg-[#FBFCFF] px-4 text-[14px] font-medium text-[#111827] outline-none transition-all
        ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-[#DCE6F5] focus:border-[#2563EB]"
        }`}
      >
        <option value="">{placeholder}</option>

        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-[12px] text-red-500">{error}</p>}
    </div>
  );
};

const fieldConfigs = {
  ownerName: {
    regex: /[^A-Za-z\s]/g,
    maxLength: 40,
    type: "text",
  },

  city: {
    regex: /[^A-Za-z\s]/g,
    maxLength: 40,
    type: "text",
  },

  mobile: {
    regex: /\D/g,
    maxLength: 10,
    type: "number",
  },

  pincode: {
    regex: /\D/g,
    maxLength: 6,
    type: "number",
  },

  email: {
    maxLength: 60,
    type: "email",
  },
};

const CarInsuranceDetailsForm = () => {
  const [formData, setFormData] = useState({
    policyExpired: "",
    pincode: "",
    ownerName: "",
    mobile: "",
    email: "",
    fuelType: "",
    previousClaim: "",
    ownership: "",
    city: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    value = value.trimStart();

    const config = fieldConfigs[field];

    if (config) {
      if (config.regex) {
        value = value.replace(config.regex, "");
      }

      if (config.type === "text") {
        value = value.replace(/\s+/g, " ");
      }

      if (config.maxLength) {
        value = value.slice(0, config.maxLength);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    const validations = {
      policyExpired: !formData.policyExpired && "Please select policy status",

      previousClaim:
        !formData.previousClaim && "Please select previous claim status",

      fuelType: !formData.fuelType && "Select fuel type",

      ownership: !formData.ownership && "Select ownership type",

      ownerName: !formData.ownerName
        ? "Owner name is required"
        : !/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.ownerName)
          ? "Only alphabets allowed"
          : "",

      mobile: !formData.mobile
        ? "Mobile number is required"
        : !/^[6-9][0-9]{9}$/.test(formData.mobile)
          ? "Enter valid mobile number"
          : "",

      email: !formData.email
        ? "Email is required"
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
          ? "Enter valid email"
          : "",

      pincode: !formData.pincode
        ? "Pincode is required"
        : !/^[0-9]{6}$/.test(formData.pincode)
          ? "Enter valid 6 digit pincode"
          : "",

      city: !formData.city
        ? "City is required"
        : !/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.city)
          ? "Only alphabets allowed"
          : "",
    };

    Object.keys(validations).forEach((key) => {
      if (validations[key]) {
        newErrors[key] = validations[key];
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="min-h-screen bg-[#F5F9FF]">
      {/* HEADER */}
      <div className="sticky top-0 z-50 border-b border-[#DCE6F5] bg-white/90 backdrop-blur-xl">
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
          <button className="flex h-[42px] items-center gap-2 rounded-[14px] border border-[#D6E7FF] bg-[#F4F9FF] px-4 text-[14px] font-semibold text-[#111827] transition-all hover:bg-white">
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
              {/* STEP */}
              <div className="flex items-center gap-4 rounded-[18px] bg-[#EAF2FF] px-5 py-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563EB] text-[14px] font-bold text-white">
                  1
                </div>

                <div>
                  <h3 className="text-[15px] font-bold text-[#111827]">
                    Car details
                  </h3>
                </div>
              </div>

              {/* STEP */}
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

              {/* STEP */}
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

              {/* STEP */}
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
            <div className="rounded-[32px] border border-[#DCE6F5] bg-white p-10 shadow-[0_12px_40px_rgba(37,99,235,0.06)]">
              {/* TOP */}
              <div className="flex items-start justify-between gap-8">
                <div>
                  <h1 className="text-[38px] font-bold leading-[1.1] tracking-[-2px] text-[#111827]">
                    Review your car info
                    <br />& continue
                  </h1>

                  <p className="mt-3 text-[14px] leading-7 text-[#64748B]">
                    Fill your vehicle and owner details to explore personalised
                    car insurance plans.
                  </p>
                </div>

                <div className="rounded-[22px] border border-[#D6E7FF] bg-gradient-to-br from-[#EEF5FF] to-[#F8FBFF] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#2563EB]" />

                    <span className="text-[13px] font-semibold text-[#2563EB]">
                      Secure Process
                    </span>
                  </div>
                </div>
              </div>

              {/* CAR CARD */}
              <div className="mt-8 rounded-[24px] border border-[#DCE6F5] bg-gradient-to-r from-[#EEF5FF] to-[#F8FBFF] p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-5">
                    {/* ICON */}
                    <div className="flex h-18 w-18 items-center justify-center rounded-[22px] bg-white shadow-sm border border-[#E2ECFF]">
                      <Car className="h-9 w-9 text-[#2563EB]" />
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h3 className="text-[24px] font-bold tracking-[-0.5px] text-[#111827]">
                        Car Insurance Journey
                      </h3>

                      <p className="mt-2 max-w-[500px] text-[13px] leading-6 text-[#64748B]">
                        Complete your details to unlock personalised car
                        insurance plans, premium pricing and policy benefits
                        instantly.
                      </p>

                      {/* TAGS */}
                      <div className="mt-4 flex flex-wrap gap-3">
                        <div className="rounded-full border border-[#DCE6F5] bg-white px-4 py-2 text-[12px] font-semibold text-[#111827]">
                          Instant Quotes
                        </div>

                        <div className="rounded-full border border-[#DCE6F5] bg-white px-4 py-2 text-[12px] font-semibold text-[#111827]">
                          Secure Process
                        </div>

                        <div className="rounded-full border border-[#DCE6F5] bg-white px-4 py-2 text-[12px] font-semibold text-[#111827]">
                          Zero Paperwork
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* POLICY */}
              <div className="mt-10">
                <h2 className="text-[24px] font-bold tracking-[-1px] text-[#111827]">
                  Policy details
                </h2>

                <p className="mt-2 text-[14px] text-[#64748B]">
                  Help us understand your previous policy
                </p>

                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
                  {/* POLICY EXPIRED */}
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
                    {errors.policyExpired && (
                      <p className="mt-1 text-[12px] text-red-500">
                        {errors.policyExpired}
                      </p>
                    )}
                  </div>

                  {/* PREVIOUS CLAIM */}
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
                    {errors.previousClaim && (
                      <p className="mt-1 text-[12px] text-red-500">
                        {errors.previousClaim}
                      </p>
                    )}
                  </div>

                  {/* FUEL TYPE */}
                  <SelectField
                    label="Fuel type"
                    error={errors.fuelType}
                    value={formData.fuelType}
                    onChange={(e) => handleChange("fuelType", e.target.value)}
                    placeholder="Select fuel type"
                    options={["Petrol", "Diesel", "CNG", "Electric"]}
                  />

                  {/* OWNERSHIP */}
                  <SelectField
                    label="Ownership type"
                    error={errors.ownership}
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
                    error={errors.ownerName}
                    placeholder="Enter full name"
                    value={formData.ownerName}
                    onChange={(e) => handleChange("ownerName", e.target.value)}
                  />

                  <InputField
                    label="Mobile number"
                    error={errors.mobile}
                    placeholder="+91 9876543210"
                    value={formData.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                  />

                  <InputField
                    label="Email address"
                    error={errors.email}
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />

                  <InputField
                    label="Pincode"
                    error={errors.pincode}
                    placeholder="400043"
                    value={formData.pincode}
                    onChange={(e) => handleChange("pincode", e.target.value)}
                  />

                  <InputField
                    label="City"
                    error={errors.city}
                    placeholder="Mumbai"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                  />
                </div>
              </div>

              {/* BENEFITS */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="rounded-[20px] border border-[#DCE6F5] bg-[#F8FBFF] p-5">
                  <CheckCircle2 className="h-6 w-6 text-[#2563EB]" />

                  <h3 className="mt-4 text-[15px] font-bold text-[#111827]">
                    Instant quotes
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                    Compare plans and get instant premium pricing.
                  </p>
                </div>

                <div className="rounded-[20px] border border-[#DCE6F5] bg-[#F8FBFF] p-5">
                  <CheckCircle2 className="h-6 w-6 text-[#2563EB]" />

                  <h3 className="mt-4 text-[15px] font-bold text-[#111827]">
                    Zero paperwork
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                    Fast process with minimal documentation.
                  </p>
                </div>

                <div className="rounded-[20px] border border-[#DCE6F5] bg-[#F8FBFF] p-5">
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
              <div className="mt-12 flex items-center justify-between rounded-[28px] border border-[#DCE6F5] bg-gradient-to-r from-[#EEF5FF] to-[#F8FBFF] px-6 py-5">
                <div>
                  <p className="text-[13px] font-semibold text-[#2563EB]">
                    Secure & trusted insurance journey
                  </p>

                  <p className="mt-1 text-[12px] text-[#64748B]">
                    Your details are safe and encrypted.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (validateForm()) {
                      navigate("/insurance-plans", {
                        state: {
                          category: "car",
                          formData,
                        },
                      });
                    }
                  }}
                  className="flex h-[54px] items-center gap-2 rounded-[18px] bg-[#16A34A] px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#15803D] hover:shadow-lg cursor-pointer"
                >
                  View plans
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInsuranceDetailsForm;
