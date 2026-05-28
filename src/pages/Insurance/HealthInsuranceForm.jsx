// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import {
//   ChevronRight,
//   ShieldCheck,
//   HeartPulse,
//   Check,
//   MapPin,
//   Phone,
//   User,
// } from "lucide-react";

// import Header from "../../components/Header";
// import { usePost } from "../../hooks/usePost";

// const fieldConfigs = {
//   city: {
//     regex: /[^A-Za-z\s]/g,
//     maxLength: 40,
//     type: "text",
//   },

//   fullName: {
//     regex: /[^A-Za-z\s]/g,
//     maxLength: 40,
//     type: "text",
//   },

//   mobile: {
//     regex: /\D/g,
//     maxLength: 10,
//     type: "number",
//   },
// };

// const HealthInsuranceForm = () => {
//   const navigate = useNavigate();

//   const { postData, loading } = usePost();

//   const [gender, setGender] = useState("Male");

//   const [members, setMembers] = useState(["Self"]);

//   const [errors, setErrors] = useState({});

//   const [apiError, setApiError] = useState("");

//   const [formData, setFormData] = useState({
//     age: "25",
//     city: "",
//     fullName: "",
//     mobile: "",
//   });

//   const familyMembers = [
//     "Self",
//     "Wife",
//     "Son",
//     "Daughter",
//     "Father",
//     "Mother",
//   ];

//   const cities = [
//     "Mumbai",
//     "Pune",
//     "Thane",
//     "Nagpur",
//     "Nashik",
//     "Navi Mumbai",
//   ];

//   const handleMember = (member) => {
//     if (members.includes(member)) {
//       setMembers(members.filter((item) => item !== member));
//     } else {
//       setMembers([...members, member]);
//     }
//   };

//   const handleChange = (field, value) => {
//     value = value.trimStart();

//     const config = fieldConfigs[field];

//     if (config) {
//       if (config.regex) {
//         value = value.replace(config.regex, "");
//       }

//       if (config.type === "text") {
//         value = value.replace(/\s+/g, " ");
//       }

//       if (config.maxLength) {
//         value = value.slice(0, config.maxLength);
//       }
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));

//     setErrors((prev) => ({
//       ...prev,
//       [field]: "",
//     }));
//   };

//   const validateForm = () => {
//     let newErrors = {};

//     const validations = {
//       city: !formData.city
//         ? "City is required"
//         : !/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.city)
//         ? "Only alphabets allowed"
//         : "",

//       fullName: !formData.fullName
//         ? "Full name is required"
//         : !/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.fullName)
//         ? "Only alphabets allowed"
//         : "",

//       mobile: !formData.mobile
//         ? "Mobile number is required"
//         : !/^[6-9][0-9]{9}$/.test(formData.mobile)
//         ? "Enter valid mobile number"
//         : "",

//       members:
//         members.length === 0
//           ? "Select at least one family member"
//           : "",
//     };

//     Object.keys(validations).forEach((key) => {
//       if (validations[key]) {
//         newErrors[key] = validations[key];
//       }
//     });

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleContinue = async () => {
//     if (!validateForm()) return;

//     setApiError("");

//     try {
//       const payload = {
//         category: "health",
//         full_name: formData.fullName,
//         mobile: formData.mobile,
//         city: formData.city,
//         age: formData.age,
//         gender,
//         members,
//       };

//       const response = await postData(
//         "store-insurance-lead",
//         payload
//       );

//       if (response?.status) {
//         navigate("/insurance-plans", {
//           state: {
//             category: "health",
//             lead_id: response?.lead?.id,
//             formData,
//             members,
//             gender,
//           },
//         });
//       } else {
//         setApiError("Something went wrong");
//       }
//     } catch (error) {
//       console.log(error);

//       setApiError(
//         error?.response?.data?.message ||
//           "Something went wrong"
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F5F7FB]">
//       <Header />

//       <div className="mx-auto max-w-[1500px] px-[120px] py-10 pb-10">
//         <div className="grid items-start gap-10 lg:grid-cols-[1fr_520px]">
//           {/* LEFT SECTION */}
//           <div className="sticky top-[110px] flex flex-col">
//             <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#DCE6F5] bg-white px-5 py-2 shadow-sm">
//               <ShieldCheck className="h-4 w-4 text-[#2563EB]" />

//               <span className="text-[13px] font-semibold text-[#2563EB]">
//                 Trusted by 5Cr+ Indians
//               </span>
//             </div>

//             <div className="mt-7">
//               <h1 className="text-[72px] font-black uppercase leading-[0.9] tracking-[-5px] text-[#111827]">
//                 <span className="text-transparent [-webkit-text-stroke:2px_#111827]">
//                   PROTECT
//                 </span>

//                 <br />

//                 YOUR

//                 <br />

//                 <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
//                   HEALTH
//                 </span>
//               </h1>

//               <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-[#64748B]">
//                 Get personalised health insurance plans for yourself and your
//                 family with instant premium comparison and cashless hospital
//                 coverage.
//               </p>
//             </div>

//             <div className="mt-10 grid grid-cols-3 gap-4">
//               <div className="rounded-[24px] border border-[#E4ECF8] bg-white p-5 shadow-sm">
//                 <HeartPulse className="h-7 w-7 text-[#2563EB]" />

//                 <h3 className="mt-4 text-[16px] font-bold text-[#111827]">
//                   Cashless hospitals
//                 </h3>

//                 <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
//                   10,000+ network hospitals across India.
//                 </p>
//               </div>

//               <div className="rounded-[24px] border border-[#E4ECF8] bg-white p-5 shadow-sm">
//                 <ShieldCheck className="h-7 w-7 text-[#7C3AED]" />

//                 <h3 className="mt-4 text-[16px] font-bold text-[#111827]">
//                   Instant approval
//                 </h3>

//                 <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
//                   Faster process with minimal paperwork.
//                 </p>
//               </div>

//               <div className="rounded-[24px] border border-[#E4ECF8] bg-white p-5 shadow-sm">
//                 <Check className="h-7 w-7 text-[#16A34A]" />

//                 <h3 className="mt-4 text-[16px] font-bold text-[#111827]">
//                   Affordable plans
//                 </h3>

//                 <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
//                   Compare premiums from top insurers.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SECTION */}
//           <div className="pr-2 pb-4">
//             <div className="rounded-[32px] border border-[#E4ECF8] bg-white p-8 shadow-[0_12px_40px_rgba(37,99,235,0.08)]">
//               <div>
//                 <h2 className="text-[34px] font-bold leading-[1.1] tracking-[-2px] text-[#111827]">
//                   Get your personalised
//                   <br />
//                   health insurance
//                 </h2>

//                 <p className="mt-3 text-[14px] leading-7 text-[#64748B]">
//                   Fill your details and explore plans specially curated for you.
//                 </p>
//               </div>

//               {/* GENDER */}
//               <div className="mt-8">
//                 <label className="mb-3 block text-[14px] font-semibold text-[#111827]">
//                   Select gender
//                 </label>

//                 <div className="flex gap-3">
//                   <button
//                     type="button"
//                     onClick={() => setGender("Male")}
//                     className={`h-[52px] flex-1 rounded-[16px] border text-[15px] font-semibold transition-all ${
//                       gender === "Male"
//                         ? "border-[#2563EB] bg-[#EEF5FF] text-[#2563EB]"
//                         : "border-[#DCE6F5] bg-white text-[#111827]"
//                     }`}
//                   >
//                     Male
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setGender("Female")}
//                     className={`h-[52px] flex-1 rounded-[16px] border text-[15px] font-semibold transition-all ${
//                       gender === "Female"
//                         ? "border-[#2563EB] bg-[#EEF5FF] text-[#2563EB]"
//                         : "border-[#DCE6F5] bg-white text-[#111827]"
//                     }`}
//                   >
//                     Female
//                   </button>
//                 </div>
//               </div>

//               {/* MEMBERS */}
//               <div className="mt-8">
//                 <label className="mb-4 block text-[14px] font-semibold text-[#111827]">
//                   Select members you want to insure
//                 </label>

//                 <div className="grid grid-cols-2 gap-4">
//                   {familyMembers.map((member, index) => {
//                     const active = members.includes(member);

//                     return (
//                       <button
//                         key={index}
//                         type="button"
//                         onClick={() => handleMember(member)}
//                         className={`flex h-[58px] items-center gap-3 rounded-[18px] border px-4 text-left transition-all ${
//                           active
//                             ? "border-[#2563EB] bg-[#EEF5FF]"
//                             : "border-[#DCE6F5] bg-white"
//                         }`}
//                       >
//                         <div
//                           className={`flex h-5 w-5 items-center justify-center rounded-md border ${
//                             active
//                               ? "border-[#2563EB] bg-[#2563EB]"
//                               : "border-[#CBD5E1]"
//                           }`}
//                         >
//                           {active && (
//                             <Check className="h-3 w-3 text-white" />
//                           )}
//                         </div>

//                         <span
//                           className={`text-[14px] font-semibold ${
//                             active ? "text-[#2563EB]" : "text-[#111827]"
//                           }`}
//                         >
//                           {member}
//                         </span>
//                       </button>
//                     );
//                   })}
//                 </div>

//                 {errors.members && (
//                   <p className="mt-2 text-[12px] text-red-500">
//                     {errors.members}
//                   </p>
//                 )}
//               </div>

//               {/* AGE */}
//               <div className="mt-8">
//                 <label className="mb-2 block text-[14px] font-semibold text-[#111827]">
//                   Your age
//                 </label>

//                 <select
//                   value={formData.age}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       age: e.target.value,
//                     })
//                   }
//                   className="h-[56px] w-full rounded-[18px] border border-[#DCE6F5] bg-[#FBFDFF] px-4 text-[15px] font-medium text-[#111827] outline-none focus:border-[#2563EB]"
//                 >
//                   {Array.from({ length: 83 }, (_, i) => i + 18).map(
//                     (age) => (
//                       <option key={age} value={age}>
//                         {age} yr
//                       </option>
//                     )
//                   )}
//                 </select>
//               </div>

//               {/* CITY */}
//               <div className="mt-8">
//                 <label className="mb-2 block text-[14px] font-semibold text-[#111827]">
//                   Select your city
//                 </label>

//                 <div className="relative">
//                   <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />

//                   <input
//                     type="text"
//                     value={formData.city}
//                     onChange={(e) =>
//                       handleChange("city", e.target.value)
//                     }
//                     placeholder="Search your city"
//                     className={`h-[56px] w-full rounded-[18px] border bg-[#FBFDFF] pl-12 pr-4 text-[15px] font-medium text-[#111827] outline-none ${
//                       errors.city
//                         ? "border-red-500"
//                         : "border-[#DCE6F5] focus:border-[#2563EB]"
//                     }`}
//                   />
//                 </div>

//                 {errors.city && (
//                   <p className="mt-1 text-[12px] text-red-500">
//                     {errors.city}
//                   </p>
//                 )}

//                 <div className="mt-4 flex flex-wrap gap-3">
//                   {cities.map((city, index) => (
//                     <button
//                       key={index}
//                       type="button"
//                       onClick={() =>
//                         setFormData({
//                           ...formData,
//                           city,
//                         })
//                       }
//                       className="rounded-full border border-[#DCE6F5] bg-white px-4 py-2 text-[13px] font-medium text-[#475569] transition-all hover:border-[#2563EB] hover:text-[#2563EB]"
//                     >
//                       {city}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* NAME */}
//               <div className="mt-8">
//                 <label className="mb-2 block text-[14px] font-semibold text-[#111827]">
//                   Full name
//                 </label>

//                 <div className="relative">
//                   <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />

//                   <input
//                     type="text"
//                     value={formData.fullName}
//                     onChange={(e) =>
//                       handleChange("fullName", e.target.value)
//                     }
//                     placeholder="Enter your full name"
//                     className={`h-[56px] w-full rounded-[18px] border bg-[#FBFDFF] pl-12 pr-4 text-[15px] font-medium text-[#111827] outline-none ${
//                       errors.fullName
//                         ? "border-red-500"
//                         : "border-[#DCE6F5] focus:border-[#2563EB]"
//                     }`}
//                   />
//                 </div>

//                 {errors.fullName && (
//                   <p className="mt-1 text-[12px] text-red-500">
//                     {errors.fullName}
//                   </p>
//                 )}
//               </div>

//               {/* MOBILE */}
//               <div className="mt-6">
//                 <label className="mb-2 block text-[14px] font-semibold text-[#111827]">
//                   Mobile number
//                 </label>

//                 <div className="relative">
//                   <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />

//                   <input
//                     type="text"
//                     value={formData.mobile}
//                     onChange={(e) =>
//                       handleChange("mobile", e.target.value)
//                     }
//                     placeholder="+91 9876543210"
//                     className={`h-[56px] w-full rounded-[18px] border bg-[#FBFDFF] pl-12 pr-4 text-[15px] font-medium text-[#111827] outline-none ${
//                       errors.mobile
//                         ? "border-red-500"
//                         : "border-[#DCE6F5] focus:border-[#2563EB]"
//                     }`}
//                   />
//                 </div>

//                 {errors.mobile && (
//                   <p className="mt-1 text-[12px] text-red-500">
//                     {errors.mobile}
//                   </p>
//                 )}
//               </div>

//               {/* API ERROR */}
//               {apiError && (
//                 <p className="mt-4 text-[13px] text-red-500">
//                   {apiError}
//                 </p>
//               )}

//               {/* INFO CARD */}
//               <div className="mt-8 rounded-[24px] border border-[#DCE8FA] bg-gradient-to-r from-[#EEF5FF] to-[#F8FBFF] p-5">
//                 <div className="flex items-start gap-4">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
//                     <ShieldCheck className="h-6 w-6 text-[#2563EB]" />
//                   </div>

//                   <div>
//                     <h3 className="text-[16px] font-bold text-[#111827]">
//                       93+ plans found
//                     </h3>

//                     <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
//                       Compare plans from 18+ insurers with cashless hospital
//                       coverage and instant policy issuance.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* BUTTON */}
//               <button
//                 type="button"
//                 onClick={handleContinue}
//                 disabled={loading}
//                 className="mt-8 flex h-[56px] w-full items-center justify-center gap-2 rounded-[18px] bg-[#111827] text-[15px] font-semibold text-white transition-all hover:bg-black disabled:opacity-70"
//               >
//                 {loading ? "Please wait..." : "Continue"}

//                 <ChevronRight className="h-5 w-5" />
//               </button>

//               <p className="mt-4 text-center text-[12px] leading-6 text-[#64748B]">
//                 By continuing, you agree to our Terms & Conditions and Privacy
//                 Policy.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthInsuranceForm;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ChevronRight,
  ShieldCheck,
  HeartPulse,
  Check,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import Header from "../../components/Header";
import { usePost } from "../../hooks/usePost";

const fieldConfigs = {
  city: {
    regex: /[^A-Za-z\s]/g,
    maxLength: 40,
    type: "text",
  },

  fullName: {
    regex: /[^A-Za-z\s]/g,
    maxLength: 40,
    type: "text",
  },

  mobile: {
    regex: /\D/g,
    maxLength: 10,
    type: "number",
  },
};

const HealthInsuranceForm = () => {
  const navigate = useNavigate();

  const { postData, loading } = usePost();

  const [errors, setErrors] = useState({});

  const [apiError, setApiError] = useState("");

  const [formData, setFormData] = useState({
    city: "",
    fullName: "",
    mobile: "",
  });

  const cities = [
    "Mumbai",
    "Pune",
    "Thane",
    "Nagpur",
    "Nashik",
    "Navi Mumbai",
  ];

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
      city: !formData.city
        ? "City is required"
        : !/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.city)
        ? "Only alphabets allowed"
        : "",

      fullName: !formData.fullName
        ? "Full name is required"
        : !/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.fullName)
        ? "Only alphabets allowed"
        : "",

      mobile: !formData.mobile
        ? "Mobile number is required"
        : !/^[6-9][0-9]{9}$/.test(formData.mobile)
        ? "Enter valid mobile number"
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

    setApiError("");

    try {
      const payload = {
        category: "health",
        full_name: formData.fullName,
        mobile: formData.mobile,
        city: formData.city,
      };

      const response = await postData(
        "store-insurance-lead",
        payload
      );

      if (response?.status) {
        navigate("/insurance-plans", {
          state: {
            category: "health",
            lead_id: response?.lead?.id,
            formData,
          },
        });
      } else {
        setApiError("Something went wrong");
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
    <div className="min-h-screen bg-[#F5F7FB]">
      <Header />

      <div className="mx-auto max-w-[1500px] px-[120px] py-10 pb-10">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_520px]">
          {/* LEFT SECTION */}
          <div className="sticky top-[110px] flex flex-col">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#DCE6F5] bg-white px-5 py-2 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#2563EB]" />

              <span className="text-[13px] font-semibold text-[#2563EB]">
                Trusted by 5Cr+ Indians
              </span>
            </div>

            <div className="mt-7">
              <h1 className="text-[72px] font-black uppercase leading-[0.9] tracking-[-5px] text-[#111827]">
                <span className="text-transparent [-webkit-text-stroke:2px_#111827]">
                  PROTECT
                </span>

                <br />

                YOUR

                <br />

                <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                  HEALTH
                </span>
              </h1>

              <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-[#64748B]">
                Get personalised health insurance plans for yourself and your
                family with instant premium comparison and cashless hospital
                coverage.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-[24px] border border-[#E4ECF8] bg-white p-5 shadow-sm">
                <HeartPulse className="h-7 w-7 text-[#2563EB]" />

                <h3 className="mt-4 text-[16px] font-bold text-[#111827]">
                  Cashless hospitals
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                  10,000+ network hospitals across India.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E4ECF8] bg-white p-5 shadow-sm">
                <ShieldCheck className="h-7 w-7 text-[#7C3AED]" />

                <h3 className="mt-4 text-[16px] font-bold text-[#111827]">
                  Instant approval
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                  Faster process with minimal paperwork.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E4ECF8] bg-white p-5 shadow-sm">
                <Check className="h-7 w-7 text-[#16A34A]" />

                <h3 className="mt-4 text-[16px] font-bold text-[#111827]">
                  Affordable plans
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                  Compare premiums from top insurers.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="pr-2 pb-4">
            <div className="rounded-[32px] border border-[#E4ECF8] bg-white p-8 shadow-[0_12px_40px_rgba(37,99,235,0.08)]">
              <div>
                <h2 className="text-[34px] font-bold leading-[1.1] tracking-[-2px] text-[#111827]">
                  Get your personalised
                  <br />
                  health insurance
                </h2>

                <p className="mt-3 text-[14px] leading-7 text-[#64748B]">
                  Fill your details and explore plans specially curated for you.
                </p>
              </div>



              {/* NAME */}
              <div className="mt-8">
                <label className="mb-2 block text-[14px] font-semibold text-[#111827]">
                  Full name
                </label>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />

                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleChange("fullName", e.target.value)
                    }
                    placeholder="Enter your full name"
                    className={`h-[56px] w-full rounded-[18px] border bg-[#FBFDFF] pl-12 pr-4 text-[15px] font-medium text-[#111827] outline-none ${
                      errors.fullName
                        ? "border-red-500"
                        : "border-[#DCE6F5] focus:border-[#2563EB]"
                    }`}
                  />
                </div>

                {errors.fullName && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* MOBILE */}
              <div className="mt-6">
                <label className="mb-2 block text-[14px] font-semibold text-[#111827]">
                  Mobile number
                </label>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />

                  <input
                    type="text"
                    value={formData.mobile}
                    onChange={(e) =>
                      handleChange("mobile", e.target.value)
                    }
                    placeholder="+91 9876543210"
                    className={`h-[56px] w-full rounded-[18px] border bg-[#FBFDFF] pl-12 pr-4 text-[15px] font-medium text-[#111827] outline-none ${
                      errors.mobile
                        ? "border-red-500"
                        : "border-[#DCE6F5] focus:border-[#2563EB]"
                    }`}
                  />
                </div>

                {errors.mobile && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.mobile}
                  </p>
                )}
              </div>
              {/* CITY */}
              <div className="mt-8">
                <label className="mb-2 block text-[14px] font-semibold text-[#111827]">
                  Select your city
                </label>

                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />

                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      handleChange("city", e.target.value)
                    }
                    placeholder="Search your city"
                    className={`h-[56px] w-full rounded-[18px] border bg-[#FBFDFF] pl-12 pr-4 text-[15px] font-medium text-[#111827] outline-none ${
                      errors.city
                        ? "border-red-500"
                        : "border-[#DCE6F5] focus:border-[#2563EB]"
                    }`}
                  />
                </div>

                {errors.city && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.city}
                  </p>
                )}

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
                      className="rounded-full border border-[#DCE6F5] bg-white px-4 py-2 text-[13px] font-medium text-[#475569] transition-all hover:border-[#2563EB] hover:text-[#2563EB]"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* API ERROR */}
              {apiError && (
                <p className="mt-4 text-[13px] text-red-500">
                  {apiError}
                </p>
              )}

              {/* INFO CARD */}
              <div className="mt-8 rounded-[24px] border border-[#DCE8FA] bg-gradient-to-r from-[#EEF5FF] to-[#F8FBFF] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <ShieldCheck className="h-6 w-6 text-[#2563EB]" />
                  </div>

                  <div>
                    <h3 className="text-[16px] font-bold text-[#111827]">
                      93+ plans found
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                      Compare plans from 18+ insurers with cashless hospital
                      coverage and instant policy issuance.
                    </p>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <button
                type="button"
                onClick={handleContinue}
                disabled={loading}
                className="mt-8 flex h-[56px] w-full items-center justify-center gap-2 rounded-[18px] bg-[#111827] text-[15px] font-semibold text-white transition-all hover:bg-black disabled:opacity-70"
              >
                {loading ? "Please wait..." : "Continue"}

                <ChevronRight className="h-5 w-5" />
              </button>

              <p className="mt-4 text-center text-[12px] leading-6 text-[#64748B]">
                By continuing, you agree to our Terms & Conditions and Privacy
                Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsuranceForm;