import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  HelpCircle,
  ChevronRight,
  ShieldCheck,
  User,
  Phone,
  MapPin,
  CalendarDays,
  HeartPulse,
} from "lucide-react";

import logo from "../../assets/images/logo.png";

import { usePost } from "../../hooks/usePost";
const SelectButton = ({ active, onClick, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[50px] flex-1 rounded-[16px] border text-[14px] font-semibold transition-all duration-200 ${
        active
          ? "border-[#7C3AED] bg-[#F3EEFF] text-[#7C3AED] shadow-sm"
          : "border-[#DCE6F5] bg-white text-[#0F172A] hover:border-[#BFDBFE]"
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
  icon,
  error,
}) => {
  return (
    <div>
      <label className="mb-2 block text-[13px] font-semibold text-[#0F172A]">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]">
          {icon}
        </div>

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`h-[56px] w-full rounded-[18px] border bg-[#FBFDFF] pl-12 pr-4 text-[14px] text-[#111827] outline-none transition-all ${
            error
              ? "border-red-500"
              : "border-[#DCE6F5] focus:border-[#7C3AED]"
          }`}
        />
      </div>

      {error && (
        <p className="mt-1 text-[12px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

const fieldConfigs = {
  name: {
    regex: /[^A-Za-z\s]/g,
    maxLength: 40,
    type: "text",
  },

  city: {
    regex: /[^A-Za-z\s]/g,
    maxLength: 40,
    type: "text",
  },

  phone: {
    regex: /\D/g,
    maxLength: 10,
    type: "number",
  },
};

const LifeInsuranceForm = () => {
  const navigate = useNavigate();

  const { postData, loading } = usePost();

  const [apiError, setApiError] = useState("");

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    gender: "",
    dob: "",
    name: "",
    phone: "",
    smoker: "",
    city: "",
  });

  const cities = [
    "Mumbai",
    "Pune",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
  ];

  const handleChange = (field, value) => {
    value = value.trimStart();

    const config = fieldConfigs[field];

    if (config) {
      value = value.replace(config.regex, "");

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
      gender: !formData.gender
        ? "Please select gender"
        : "",

      dob: !formData.dob
        ? "Date of birth is required"
        : "",

      name: !formData.name
        ? "Full name is required"
        : !/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(
            formData.name
          )
        ? "Only alphabets allowed"
        : "",

      phone: !formData.phone
        ? "Phone number is required"
        : !/^[6-9][0-9]{9}$/.test(formData.phone)
        ? "Enter valid mobile number"
        : "",

      city: !formData.city
        ? "City is required"
        : !/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(
            formData.city
          )
        ? "Only alphabets allowed"
        : "",

      smoker: !formData.smoker
        ? "Please select smoker option"
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

  const handleContinue = async () => {
    if (!validateForm()) return;

    try {
      setApiError("");

      const payload = {
        category: "life",
        full_name: formData.name,
        mobile: formData.phone,
        city: formData.city,
  date_of_birth: formData.dob,
        gender: formData.gender,
        smoker: formData.smoker,
      };

      const response = await postData(
        "store-insurance-lead",
        payload
      );

      if (response?.status) {
        navigate("/insurance-plans", {
          state: {
            category: "life",
            lead_id: response?.lead?.id,
            formData,
          },
        });
      }
    } catch (error) {
      console.log(error);

      setApiError(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7FF]">
      {/* HEADER */}
      <div className="sticky top-0 z-50 border-b border-[#E6EEF9] bg-white/90 backdrop-blur-xl">
        <div className="flex h-[82px] items-center justify-between px-[45px]">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-14 object-contain"
            />
          </Link>

          <button className="flex h-[44px] items-center gap-2 rounded-[14px] border border-[#DCE6F5] bg-[#F8FBFF] px-5 text-[14px] font-semibold text-[#111827] transition-all hover:bg-white">
            <HelpCircle className="h-4 w-4" />
            Support
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto max-w-[1450px] px-[100px] py-12">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_560px]">
          {/* LEFT */}
          <div className="sticky top-[110px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE6F5] bg-white px-5 py-2 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#7C3AED]" />

              <span className="text-[13px] font-semibold text-[#7C3AED]">
                Trusted by 5Cr+ Indians
              </span>
            </div>

            <div className="mt-8">
              <h1 className="text-[76px] font-black uppercase leading-[0.88] tracking-[-5px] text-[#0F172A]">
                <span className="text-transparent [-webkit-text-stroke:2px_#0F172A]">
                  SECURE
                </span>

                <br />

                YOUR

                <br />

                <span className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">
                  FAMILY
                </span>
              </h1>

              <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-[#64748B]">
                Get personalised life insurance plans with
                high coverage, affordable premiums and
                complete financial protection for your loved
                ones.
              </p>
            </div>

            {/* CARDS */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-[24px] border border-[#E4ECF8] bg-white p-5 shadow-sm">
                <ShieldCheck className="h-7 w-7 text-[#7C3AED]" />

                <h3 className="mt-4 text-[16px] font-bold text-[#111827]">
                  High coverage
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                  Get up to ₹2 Cr life protection instantly.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E4ECF8] bg-white p-5 shadow-sm">
                <HeartPulse className="h-7 w-7 text-[#2563EB]" />

                <h3 className="mt-4 text-[16px] font-bold text-[#111827]">
                  Family security
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                  Protect your loved ones financially.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E4ECF8] bg-white p-5 shadow-sm">
                <ShieldCheck className="h-7 w-7 text-[#16A34A]" />

                <h3 className="mt-4 text-[16px] font-bold text-[#111827]">
                  Instant approval
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                  Quick policy issuance with less paperwork.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <div className="rounded-[32px] border border-[#E4ECF8] bg-white p-8 shadow-[0_12px_40px_rgba(37,99,235,0.08)]">
              <div>
                <h2 className="text-[36px] font-bold leading-[1.1] tracking-[-2px] text-[#0F172A]">
                  Find your perfect
                  <br />
                  life insurance
                </h2>

                <p className="mt-3 text-[14px] leading-7 text-[#64748B]">
                  Fill basic details and compare the best
                  life insurance plans instantly.
                </p>
              </div>

              {/* NAME */}
              <div className="mt-8">
                <InputField
                  label="Full name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    handleChange("name", e.target.value)
                  }
                  icon={<User className="h-5 w-5" />}
                  error={errors.name}
                />
              </div>

              {/* PHONE */}
              <div className="mt-6">
                <InputField
                  label="Mobile number"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) =>
                    handleChange("phone", e.target.value)
                  }
                  icon={<Phone className="h-5 w-5" />}
                  error={errors.phone}
                />
              </div>

              {/* CITY */}
              <div className="mt-6">
                <InputField
                  label="City"
                  placeholder="Mumbai"
                  value={formData.city}
                  onChange={(e) =>
                    handleChange("city", e.target.value)
                  }
                  icon={<MapPin className="h-5 w-5" />}
                  error={errors.city}
                />

                <div className="mt-4 flex flex-wrap gap-3">
                  {cities.map((city, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          city,
                        })
                      }
                      className="rounded-full border border-[#DCE6F5] bg-white px-4 py-2 text-[13px] font-medium text-[#475569] transition-all hover:border-[#7C3AED] hover:text-[#7C3AED]"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* DOB */}
              <div className="mt-6">
                <InputField
                  label="Date of birth"
                  type="date"
                  value={formData.dob}
                  onChange={(e) =>
                    handleChange("dob", e.target.value)
                  }
                  icon={<CalendarDays className="h-5 w-5" />}
                  error={errors.dob}
                />
              </div>

              {/* GENDER */}
              <div className="mt-6">
                <label className="mb-2 block text-[13px] font-semibold text-[#0F172A]">
                  Gender
                </label>

                <div className="flex gap-3">
                  <SelectButton
                    active={formData.gender === "Male"}
                    onClick={() =>
                      handleChange("gender", "Male")
                    }
                    label="Male"
                  />

                  <SelectButton
                    active={formData.gender === "Female"}
                    onClick={() =>
                      handleChange("gender", "Female")
                    }
                    label="Female"
                  />
                </div>

                {errors.gender && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.gender}
                  </p>
                )}
              </div>

              {/* SMOKER */}
              <div className="mt-6">
                <label className="mb-2 block text-[13px] font-semibold text-[#0F172A]">
                  Tobacco / Smoker
                </label>

                <div className="flex gap-3">
                  <SelectButton
                    active={formData.smoker === "No"}
                    onClick={() =>
                      handleChange("smoker", "No")
                    }
                    label="No"
                  />

                  <SelectButton
                    active={formData.smoker === "Yes"}
                    onClick={() =>
                      handleChange("smoker", "Yes")
                    }
                    label="Yes"
                  />
                </div>

                {errors.smoker && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.smoker}
                  </p>
                )}
              </div>

              {/* API ERROR */}
              {apiError && (
                <p className="mt-4 text-[13px] text-red-500">
                  {apiError}
                </p>
              )}

              {/* INFO CARD */}
              <div className="mt-8 rounded-[24px] border border-[#E4ECF8] bg-gradient-to-r from-[#F3EEFF] to-[#EEF5FF] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <ShieldCheck className="h-6 w-6 text-[#7C3AED]" />
                  </div>

                  <div>
                    <h3 className="text-[16px] font-bold text-[#111827]">
                      120+ life plans available
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                      Compare premiums, claim ratios and
                      coverage benefits from India’s top life
                      insurers.
                    </p>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <button
                type="button"
                onClick={handleContinue}
                disabled={loading}
                className="mt-8 flex h-[58px] w-full items-center justify-center gap-2 rounded-[18px] bg-[#111827] text-[15px] font-semibold text-white transition-all hover:bg-black disabled:opacity-70"
              >
                {loading
                  ? "Please wait..."
                  : "View Plans"}

                <ChevronRight className="h-5 w-5" />
              </button>

              <p className="mt-4 text-center text-[12px] leading-6 text-[#64748B]">
                By continuing, you agree to our Terms &
                Conditions and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeInsuranceForm;