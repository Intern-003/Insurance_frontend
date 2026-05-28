import { useState, useMemo } from "react";
import getRenewalData from "../../utils/getRenewalData";

import {
  Plane,
  Shield,
  User,
  Phone,
 Mail,
  Calendar,
  MapPin,
  FileText,
  ChevronRight,
  CheckCircle2,
  Globe,
  IdCard,
} from "lucide-react";

import Header from "../../components/Header";
import { usePost } from "../../hooks/usePost";
import { useNavigate, useLocation } from "react-router-dom";

const TravelProposalForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  /*
|--------------------------------------------------------------------------
| RENEWAL DATA
|--------------------------------------------------------------------------
*/

const renewalData =
  getRenewalData(location);

const renewal =
  !!renewalData;

  const { postData, loading } = usePost();

  /*
  |--------------------------------------------------------------------------
  | GET DATA FROM PREVIOUS PAGE
  |--------------------------------------------------------------------------
  */

  const proposalData = useMemo(() => {
    return location?.state || {};
  }, [location]);

  /*
  |--------------------------------------------------------------------------
  | FORM STATE
  |--------------------------------------------------------------------------
  */

const [formData, setFormData] = useState({

  /*
  |--------------------------------------------------------------------------
  | PERSONAL DETAILS
  |--------------------------------------------------------------------------
  */

  full_name:
    renewalData?.fullName || "",

  mobile:
    renewalData?.mobile || "",

  email:
    renewalData?.email || "",

  date_of_birth:
    renewalData?.dateOfBirth || "",

  gender:
    renewalData?.customerDetails
      ?.gender || "male",

  /*
  |--------------------------------------------------------------------------
  | TRAVEL DETAILS
  |--------------------------------------------------------------------------
  */

  passport_number:

    renewalData?.customerDetails
      ?.passport_number ||

    "",

  destination_country:

    renewalData?.customerDetails
      ?.destination_country ||

    "",

  departure_date:

    renewalData?.customerDetails
      ?.departure_date ||

    "",

  return_date:

    renewalData?.customerDetails
      ?.return_date ||

    "",

  /*
  |--------------------------------------------------------------------------
  | ADDRESS
  |--------------------------------------------------------------------------
  */

  address:

    renewalData?.customerDetails
      ?.address ||

    "",

  city:

    renewalData?.customerDetails
      ?.city ||

    "",

  state:

    renewalData?.customerDetails
      ?.state ||

    "",

  pincode:

    renewalData?.customerDetails
      ?.pincode ||

    "",

  /*
  |--------------------------------------------------------------------------
  | NOMINEE
  |--------------------------------------------------------------------------
  */

  nominee_name:

    renewalData?.nomineeDetails
      ?.nominee_name ||

    "",

  nominee_relation:

    renewalData?.nomineeDetails
      ?.nominee_relation ||

    "",
});
  const [error, setError] = useState("");

  /*
  |--------------------------------------------------------------------------
  | HANDLE CHANGE
  |--------------------------------------------------------------------------
  */

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /*
  |--------------------------------------------------------------------------
  | HANDLE SUBMIT
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async () => {
    setError("");

    if (
      !formData.full_name ||
      !formData.mobile ||
      !formData.email ||
      !formData.date_of_birth ||
      !formData.passport_number ||
      !formData.destination_country ||
      !formData.departure_date ||
      !formData.return_date
    ) {
      setError("Please fill all required fields");
      return;
    }

    try {
      const payload = {
        renewal: renewal,
insurance_plan_id:

  renewalData?.insurancePlanId ||

  proposalData?.insurance_plan_id,

insurance_coverage_id:

  renewalData?.insuranceCoverageId ||

  proposalData?.insurance_coverage_id,

        category: "travel",

        premium_amount:
          proposalData?.premium_amount,

        tenure: proposalData?.tenure || 1,

        /*
        |--------------------------------------------------------------------------
        | ROOT FIELDS
        |--------------------------------------------------------------------------
        */

        full_name: formData.full_name,

        email: formData.email,

        mobile: formData.mobile,

        date_of_birth:
          formData.date_of_birth,

        /*
        |--------------------------------------------------------------------------
        | CUSTOMER DETAILS
        |--------------------------------------------------------------------------
        */

        customer_details: {
          full_name: formData.full_name,

          email: formData.email,

          mobile: formData.mobile,

          date_of_birth:
            formData.date_of_birth,

          gender: formData.gender,

          passport_number:
            formData.passport_number,

          destination_country:
            formData.destination_country,

          departure_date:
            formData.departure_date,

          return_date:
            formData.return_date,

          address: formData.address,

          city: formData.city,

          state: formData.state,

          pincode: formData.pincode,
        },

        /*
        |--------------------------------------------------------------------------
        | NOMINEE DETAILS
        |--------------------------------------------------------------------------
        */

        nominee_details: {
          nominee_name:
            formData.nominee_name,

          nominee_relation:
            formData.nominee_relation,
        },
      };

      const response = await postData(
        "store-insurance-proposal",
        payload
      );

      if (response?.status) {
navigate("/checkout", {
  state: {

    proposal:
      response?.proposal,

    premium_amount:
      proposalData?.premium_amount,

    renewal:
      renewal,

    renewalData:
      renewalData,
  },
});
      }
    } catch (err) {
      console.log(err);

      setError(
        err?.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      <div className="px-4 py-8">
        <div className="mx-auto grid max-w-[1280px] gap-7 lg:grid-cols-[320px_1fr]">
          {/* LEFT */}
          <div className="sticky top-6 h-fit rounded-[28px] bg-gradient-to-b from-[#0F172A] to-[#1E293B] p-6 text-white shadow-xl">
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/10">
              <Plane className="h-8 w-8" />
            </div>

            <h2 className="mt-5 text-[28px] font-black leading-tight tracking-[-1px]">
              Travel Insurance
              <br />
              Proposal
            </h2>

            <p className="mt-3 text-[14px] leading-7 text-slate-300">
              Complete your proposal form to continue
              with policy issuance.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                <CheckCircle2 className="h-5 w-5 text-green-400" />

                <div>
                  <p className="text-[14px] font-semibold">
                    Plan Selected
                  </p>

                  <p className="text-[12px] text-slate-300">
                    Premium finalized
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Shield className="h-5 w-5 text-blue-400" />

                <div>
                  <p className="text-[14px] font-semibold">
                    Proposal Form
                  </p>

                  <p className="text-[12px] text-slate-300">
                    Fill traveller details
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 opacity-70">
                <FileText className="h-5 w-5 text-yellow-300" />

                <div>
                  <p className="text-[14px] font-semibold">
                    Checkout
                  </p>

                  <p className="text-[12px] text-slate-300">
                    Payment & invoice
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-[12px] uppercase tracking-[2px] text-slate-400">
                Premium
              </p>

              <h3 className="mt-2 text-[36px] font-black">
                ₹
                {proposalData?.premium_amount ||
                  "3500"}
              </h3>

              <p className="mt-1 text-[13px] text-slate-300">
                Inclusive of all taxes
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] bg-white p-7 shadow-sm">
            <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-[34px] font-black tracking-[-1px] text-[#0F172A]">
                  Travel Proposal Form
                </h1>

                <p className="mt-2 text-[14px] text-slate-500">
                  Fill all required details carefully
                  for faster policy issuance.
                </p>
                {renewal && (
  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-2">
    <CheckCircle2 className="h-4 w-4 text-[#2563EB]" />

    <span className="text-[12px] font-semibold text-[#2563EB]">
      Renewal Policy Detected
    </span>
  </div>
)}
              </div>

              <div className="rounded-2xl bg-[#EEF2FF] px-5 py-3">
                <p className="text-[12px] font-semibold text-[#4F46E5]">
                  Secure & Encrypted Process
                </p>
              </div>
            </div>

            {/* PERSONAL DETAILS */}
            <div className="mt-8">
              <h2 className="text-[20px] font-bold text-[#0F172A]">
                Traveller Details
              </h2>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <Input
                  icon={<User className="h-4 w-4 text-slate-500" />}
                  label="Full Name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                />

                <Input
                  icon={<Phone className="h-4 w-4 text-slate-500" />}
                  label="Mobile Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                />

                <Input
                  icon={<Mail className="h-4 w-4 text-slate-500" />}
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                />

                <Input
                  type="date"
                  icon={
                    <Calendar className="h-4 w-4 text-slate-500" />
                  }
                  label="Date Of Birth"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                />

                <Input
                  icon={
                    <IdCard className="h-4 w-4 text-slate-500" />
                  }
                  label="Passport Number"
                  name="passport_number"
                  value={formData.passport_number}
                  onChange={handleChange}
                  placeholder="Passport Number"
                />

                <Input
                  icon={
                    <Globe className="h-4 w-4 text-slate-500" />
                  }
                  label="Destination Country"
                  name="destination_country"
                  value={formData.destination_country}
                  onChange={handleChange}
                  placeholder="Dubai"
                />

                <Input
                  type="date"
                  label="Departure Date"
                  name="departure_date"
                  value={formData.departure_date}
                  onChange={handleChange}
                />

                <Input
                  type="date"
                  label="Return Date"
                  name="return_date"
                  value={formData.return_date}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* ADDRESS */}
            <div className="mt-10 border-t border-slate-200 pt-8">
              <h2 className="text-[20px] font-bold text-[#0F172A]">
                Address Details
              </h2>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <Input
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Mumbai"
                />

                <Input
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Maharashtra"
                />

                <Input
                  label="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="400001"
                />

                <div className="md:col-span-2">
                  <label className="mb-2 block text-[13px] font-semibold text-slate-700">
                    Address
                  </label>

                  <div className="flex items-start rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <MapPin className="mt-1 h-4 w-4 text-slate-500" />

                    <textarea
                      rows={3}
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter complete address"
                      className="w-full resize-none bg-transparent pl-3 text-[14px] outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* NOMINEE */}
            <div className="mt-10 border-t border-slate-200 pt-8">
              <h2 className="text-[20px] font-bold text-[#0F172A]">
                Nominee Details
              </h2>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <Input
                  label="Nominee Name"
                  name="nominee_name"
                  value={formData.nominee_name}
                  onChange={handleChange}
                  placeholder="Enter nominee name"
                />

                <Input
                  label="Nominee Relation"
                  name="nominee_relation"
                  value={
                    formData.nominee_relation
                  }
                  onChange={handleChange}
                  placeholder="Father / Mother / Wife"
                />
              </div>
            </div>

            {/* ERROR */}
            {error && (
              <p className="mt-6 text-[14px] font-medium text-red-500">
                {error}
              </p>
            )}

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-8 flex h-[58px] w-full items-center justify-center gap-2 rounded-2xl bg-[#0F172A] text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#1E293B] disabled:opacity-70"
            >
              {loading
                ? "Submitting..."
                : "Proceed To Checkout"}

              {!loading && (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
|--------------------------------------------------------------------------
| REUSABLE INPUT
|--------------------------------------------------------------------------
*/

const Input = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
}) => {
  return (
    <div>
      <label className="mb-2 block text-[13px] font-semibold text-slate-700">
        {label}
      </label>

      <div className="flex h-[56px] items-center rounded-2xl border border-slate-200 bg-slate-50 px-4">
        {icon}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-full w-full bg-transparent pl-3 text-[14px] outline-none"
        />
      </div>
    </div>
  );
};

export default TravelProposalForm;