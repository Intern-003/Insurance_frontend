import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Plane,
  Ticket,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";

import Header from "../../components/Header";
import { usePost } from "../../hooks/usePost";

const TravelInsuranceForm = () => {
  const navigate = useNavigate();

  const { postData, loading } = usePost();

  const [formData, setFormData] = useState({
    destination: "",
    travel_start_date: "",
    travel_end_date: "",
    travellers: "1",
    full_name: "",
    mobile: "",
  });

  const [error, setError] = useState("");

  /*
  |--------------------------------------------------------------------------
  | HANDLE CHANGE
  |--------------------------------------------------------------------------
  */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /*
  |--------------------------------------------------------------------------
  | HANDLE CONTINUE
  |--------------------------------------------------------------------------
  */

  const handleContinue = async () => {
    setError("");

    if (
      !formData.destination ||
      !formData.travel_start_date ||
      !formData.travel_end_date ||
      !formData.full_name ||
      !formData.mobile
    ) {
      setError("Please fill all required fields");
      return;
    }

    try {
      const payload = {
        category: "travel",
        full_name: formData.full_name,
        mobile: formData.mobile,
        destination: formData.destination,
        travel_start_date: formData.travel_start_date,
        travel_end_date: formData.travel_end_date,
        extra_details: JSON.stringify({
          travellers: formData.travellers,
        }),
      };

      const response = await postData(
        "store-insurance-lead",
        payload
      );

      if (response?.status) {
        navigate("/insurance-plans", {
          state: {
            category: "travel",
            lead_id: response?.lead?.id,
            destination: formData.destination,
          },
        });
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#140B45] to-[#4F46E5]">
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className="relative min-h-[calc(100vh-88px)] px-5 py-8">
        <div className="mx-auto grid max-w-[1080px] gap-8 lg:grid-cols-[0.9fr_1fr]">
          {/* LEFT SECTION */}
          <div className="sticky top-10 flex h-fit flex-col justify-center self-start">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
                International & Domestic Protection
              </div>

              <h1 className="mt-5 text-[42px] font-black leading-[0.95] tracking-[-2px] text-white md:text-[56px]">
                TRAVEL
                <br />
                SAFE
              </h1>

              <p className="mt-5 max-w-[420px] text-[14px] leading-7 text-[#E0E7FF]">
                Explore the world with complete peace of mind.
                Get instant travel insurance for flights,
                emergencies, delays and baggage protection.
              </p>
            </div>

            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <div className="text-[20px] font-black text-white">
                  190+
                </div>

                <p className="mt-1 text-[11px] leading-5 text-[#DBEAFE]">
                  Countries covered worldwide
                </p>
              </div>

              <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <div className="text-[20px] font-black text-white">
                  ₹0
                </div>

                <p className="mt-1 text-[11px] leading-5 text-[#DBEAFE]">
                  Paperwork with instant issuance
                </p>
              </div>

              <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <div className="text-[20px] font-black text-white">
                  24x7
                </div>

                <p className="mt-1 text-[11px] leading-5 text-[#DBEAFE]">
                  Emergency assistance support
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="rounded-[26px] border border-white/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            {/* TOP */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[26px] font-black tracking-[-1px] text-[#0F172A]">
                  Travel Insurance
                </h2>

                <p className="mt-1 text-[12px] text-[#64748B]">
                  Secure your next trip in minutes
                </p>
              </div>

              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#EEF2FF]">
                <Plane className="h-6 w-6 text-[#4F46E5]" />
              </div>
            </div>

            {/* FORM */}
            <div className="mt-6 space-y-4">
              {/* DESTINATION */}
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-[#0F172A]">
                  Destination
                </label>

                <div className="flex h-[50px] items-center rounded-[14px] border border-[#E2E8F0] bg-[#F8FAFC] px-3">
                  <MapPin className="h-4 w-4 text-[#64748B]" />

                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Dubai, Thailand, Europe..."
                    className="h-full w-full bg-transparent pl-2.5 text-[14px] font-medium outline-none"
                  />
                </div>
              </div>

              {/* DATES */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-[#0F172A]">
                    Start Date
                  </label>

                  <div className="flex h-[50px] items-center rounded-[14px] border border-[#E2E8F0] bg-[#F8FAFC] px-3">
                    <Calendar className="h-4 w-4 text-[#64748B]" />

                    <input
                      type="date"
                      name="travel_start_date"
                      value={formData.travel_start_date}
                      onChange={handleChange}
                      className="h-full w-full bg-transparent pl-2.5 text-[14px] font-medium outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-[#0F172A]">
                    End Date
                  </label>

                  <div className="flex h-[50px] items-center rounded-[14px] border border-[#E2E8F0] bg-[#F8FAFC] px-3">
                    <Calendar className="h-4 w-4 text-[#64748B]" />

                    <input
                      type="date"
                      name="travel_end_date"
                      value={formData.travel_end_date}
                      onChange={handleChange}
                      className="h-full w-full bg-transparent pl-2.5 text-[14px] font-medium outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* TRAVELLERS */}
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-[#0F172A]">
                  Travellers
                </label>

                <div className="flex h-[50px] items-center rounded-[14px] border border-[#E2E8F0] bg-[#F8FAFC] px-3">
                  <Users className="h-4 w-4 text-[#64748B]" />

                  <select
                    name="travellers"
                    value={formData.travellers}
                    onChange={handleChange}
                    className="h-full w-full bg-transparent pl-2.5 text-[14px] font-medium outline-none"
                  >
                    <option value="1">1 Traveller</option>
                    <option value="2">2 Travellers</option>
                    <option value="3">3 Travellers</option>
                    <option value="4">4 Travellers</option>
                    <option value="5">5+ Travellers</option>
                  </select>
                </div>
              </div>

              {/* NAME */}
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-[#0F172A]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="h-[50px] w-full rounded-[14px] border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-[14px] font-medium outline-none transition-all duration-300 focus:border-[#4F46E5]"
                />
              </div>

              {/* MOBILE */}
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-[#0F172A]">
                  Mobile Number
                </label>

                <input
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className="h-[50px] w-full rounded-[14px] border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-[14px] font-medium outline-none transition-all duration-300 focus:border-[#4F46E5]"
                />
              </div>

              {/* ERROR */}
              {error && (
                <p className="text-[12px] font-medium text-red-500">
                  {error}
                </p>
              )}

              {/* BUTTON */}
              <button
                onClick={handleContinue}
                disabled={loading}
                className="flex h-[54px] w-full items-center justify-center gap-2 rounded-[16px] bg-[#0F172A] text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#1E293B] disabled:opacity-70"
              >
                {loading ? "Please wait..." : "View Plans"}

                {!loading && (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {/* SMALL TEXT */}
              <p className="text-center text-[11px] leading-5 text-[#64748B]">
                By continuing, you agree to our Terms &
                Conditions and Privacy Policy.
              </p>
            </div>

            {/* EXTRA CARD */}
            <div className="mt-5 rounded-[18px] border border-[#E2E8F0] bg-[#F8FAFC] p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white shadow-sm">
                  <Ticket className="h-5 w-5 text-[#4F46E5]" />
                </div>

                <div>
                  <h3 className="text-[15px] font-bold text-[#0F172A]">
                    Flight Delay Protection
                  </h3>

                  <p className="mt-1 text-[12px] leading-5 text-[#64748B]">
                    Get instant compensation for delays,
                    cancellations and baggage loss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelInsuranceForm;