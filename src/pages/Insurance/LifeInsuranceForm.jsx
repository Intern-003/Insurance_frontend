import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Check, HelpCircle, ChevronRight, ShieldCheck } from "lucide-react";

import logo from "../../assets/images/logo.png";

const SelectButton = ({ active, onClick, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[48px] flex-1 rounded-[16px] border text-[14px] font-semibold transition-all duration-200 ${
        active
          ? "border-[#7C3AED] bg-[#F2ECFF] text-[#7C3AED] shadow-sm"
          : "border-[#DCE6F5] bg-white text-[#0F172A] hover:border-[#BFDBFE]"
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
        className="h-[50px] w-full rounded-[16px] border border-[#DCE6F5] bg-[#FBFDFF] px-4 text-[14px] text-[#111827] outline-none"
      />
    </div>
  );
};

const SelectField = ({ label, value, onChange, options, placeholder }) => {
  return (
    <div>
      <label className="mb-2 block text-[13px] font-semibold text-[#0F172A]">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="h-[50px] w-full rounded-[16px] border border-[#DCE6F5] bg-[#FBFDFF] px-4 text-[14px] text-[#111827] outline-none"
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

const LifeInsuranceForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    dob: "",
    marital: "",
    dependent: "",
    resident: "",
    pincode: "",
    name: "",
    phone: "",
    occupation: "",
    income: "",
    smoker: "",
    education: "",
    city: "",
    annualIncome: "",
    coverage: "₹50L",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F4F8FF]">
      {/* HEADER */}
      <div className="sticky top-0 z-50 border-b border-[#E5EEF9] bg-white/90 backdrop-blur-xl">
        <div className="flex h-[82px] items-center justify-between px-[40px]">
          {/* LEFT */}
          <div className="pl-[30px]">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-14 object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="pr-[30px]">
            <button className="flex h-[42px] items-center gap-2 rounded-[14px] border border-[#DCE6F5] bg-[#F8FBFF] px-4 text-[14px] font-semibold text-[#111827] transition-all hover:bg-white cursor-pointer">
              <HelpCircle className="h-4 w-4" />
              Help
            </button>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="px-[200px] py-10">
        <div className="flex gap-14">
          {/* RIGHT */}
          <div className="flex-1">
            <div className="rounded-[32px] border border-[#E4ECF8] bg-white p-12 shadow-[0_10px_35px_rgba(37,99,235,0.05)]">
              {/* TOP */}
              <div className="flex items-start justify-between gap-10">
                <div>
                  <h1 className="text-[38px] font-bold leading-[1.05] tracking-[-2px] text-[#0F172A]">
                    Get your personalised
                    <br />
                    insurance plan
                  </h1>

                  <p className="mt-3 max-w-[620px] text-[14px] leading-7 text-[#64748B]">
                    Fill all your details and get instant life insurance
                    recommendation based on your lifestyle, income and family
                    profile.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#DCE8FA] bg-gradient-to-br from-[#EEF5FF] to-[#F5F3FF] px-6 py-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#64748B]">
                    For Suggested Coverage
                  </p>
                </div>
              </div>

              {/* SECTION */}
              <div className="mt-10">
                <div className="mb-6">
                  <h2 className="text-[26px] font-bold tracking-[-1px] text-[#111827]">
                    About You
                  </h2>

                  <p className="mt-2 text-[14px] text-[#64748B]">
                    Enter your personal details
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {/* GENDER */}
                  <div>
                    <label className="mb-2 block text-[13px] font-semibold text-[#0F172A]">
                      Gender
                    </label>

                    <div className="flex gap-3">
                      <SelectButton
                        active={formData.gender === "Male"}
                        onClick={() => handleChange("gender", "Male")}
                        label="Male"
                      />

                      <SelectButton
                        active={formData.gender === "Female"}
                        onClick={() => handleChange("gender", "Female")}
                        label="Female"
                      />
                    </div>
                  </div>

                  {/* DOB */}
                  <InputField
                    label="Date of birth"
                    type="date"
                    value={formData.dob}
                    onChange={(e) => handleChange("dob", e.target.value)}
                  />

                  {/* MARITAL */}
                  <SelectField
                    label="Marital status"
                    field="marital"
                    value={formData.marital}
                    placeholder="Select status"
                    options={["Married", "Unmarried", "Separated", "Divorced"]}
                  />

                  {/* DEPENDENT */}
                  <SelectField
                    label="Financial dependent"
                    field="dependent"
                    value={formData.dependent}
                    placeholder="Select dependent"
                    options={[
                      "Parents",
                      "Spouse",
                      "Children",
                      "Extended family",
                      "No one",
                    ]}
                  />

                  {/* RESIDENT */}
                  <div>
                    <label className="mb-2 block text-[13px] font-semibold text-[#0F172A]">
                      Indian Resident?
                    </label>

                    <div className="flex gap-3">
                      <SelectButton
                        active={formData.resident === "Yes"}
                        onClick={() => handleChange("resident", "Yes")}
                        label="Yes"
                      />

                      <SelectButton
                        active={formData.resident === "No"}
                        onClick={() => handleChange("resident", "No")}
                        label="No"
                      />
                    </div>
                  </div>

                  {/* PINCODE */}
                  <InputField
                    label="Pincode"
                    placeholder="400043"
                    value={formData.pincode}
                    onChange={(e) => handleChange("pincode", e.target.value)}
                  />

                  {/* NAME */}
                  <InputField
                    label="Full name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Enter your full name"
                  />

                  {/* PHONE */}
                  <InputField
                    label="Phone number"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>
              </div>

              {/* LIFESTYLE */}
              <div className="mt-12">
                <div className="mb-6">
                  <h2 className="text-[26px] font-bold tracking-[-1px] text-[#111827]">
                    Lifestyle & Work
                  </h2>

                  <p className="mt-2 text-[14px] text-[#64748B]">
                    Tell us about your work and lifestyle
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {/* EDUCATION */}
                  <SelectField
                    label="Education"
                    field="education"
                    value={formData.education}
                    placeholder="Select education"
                    options={[
                      "10th Pass",
                      "12th Pass",
                      "Graduate",
                      "Post Graduate",
                    ]}
                  />

                  {/* OCCUPATION */}
                  <SelectField
                    label="Occupation"
                    field="occupation"
                    value={formData.occupation}
                    placeholder="Select occupation"
                    options={[
                      "Salaried",
                      "Business owner",
                      "Self employed",
                      "Student",
                    ]}
                  />

                  {/* CITY */}
                  <InputField
                    label="City"
                    placeholder="Mumbai"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                  />

                  {/* INCOME */}
                  <InputField
                    label="Monthly income"
                    placeholder="₹ 50,000"
                    value={formData.income}
                    onChange={(e) => handleChange("income", e.target.value)}
                  />

                  {/* ANNUAL */}
                  <InputField
                    label="Annual income"
                    placeholder="₹ 8,00,000"
                    value={formData.annualIncome}
                    onChange={(e) =>
                      handleChange("annualIncome", e.target.value)
                    }
                  />

                  {/* SMOKER */}
                  <div>
                    <label className="mb-2 block text-[13px] font-semibold text-[#0F172A]">
                      Tobacco / Smoker
                    </label>

                    <div className="flex gap-3">
                      <SelectButton
                        active={formData.smoker === "No"}
                        onClick={() => handleChange("smoker", "No")}
                        label="No"
                      />

                      <SelectButton
                        active={formData.smoker === "Yes"}
                        onClick={() => handleChange("smoker", "Yes")}
                        label="Yes"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* RECOMMENDATION */}
              <div className="mt-12 flex justify-end rounded-[28px] border border-[#DCE8FA] bg-gradient-to-r from-[#EEF5FF] via-[#F5F7FF] to-[#F3EEFF] p-6 shadow-[0_10px_30px_rgba(37,99,235,0.06)]">
                <button
                  type="button"
                  onClick={() =>
                    navigate("/insurance-plans", {
                      state: {
                        category: "life",
                        formData,
                      },
                    })
                  }
                  className="flex h-[52px] items-center gap-2 rounded-[16px] bg-[#111827] px-7 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#1E293B] hover:shadow-xl cursor-pointer"
                >
                  Continue
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeInsuranceForm;
