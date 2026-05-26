import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";

import carImg from "../../assets/images/carnew.webp";

const CarInsuranceForm = () => {
  const [carNumber, setCarNumber] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateCarNumber = (number) => {
    const regex =
      /^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{4}$/;

    return regex.test(number);
  };

  const handleCheckPrice = () => {
    if (!carNumber.trim()) {
      setError("Please enter registration number");
      return;
    }

    if (!validateCarNumber(carNumber)) {
      setError("Enter valid registration number");
      return;
    }

    setError("");

    navigate("/car-insurance-details");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F5F7FB]">
      
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className="mx-auto max-w-[1720px] px-[140px] pt-15 py-8">
        
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_540px]">
          
          {/* LEFT */}
          <div className="pt-2">
            
            {/* BADGES */}
            <div className="flex items-center gap-8">
              
              <div className="flex items-start gap-3">
                
                <div className="text-[40px] leading-none text-[#444]">
                  ❛
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold leading-[1.35] text-[#111827]">
                    Trusted by
                    <br />
                    5 Cr+ Indians
                  </h3>
                </div>

                <div className="rotate-180 text-[40px] leading-none text-[#444]">
                  ❛
                </div>
              </div>

              <div className="flex items-start gap-3">
                
                <div className="text-[40px] leading-none text-[#444]">
                  ❛
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold leading-[1.35] text-[#111827]">
                    Best direct
                    <br />
                    insurer 2025
                  </h3>
                </div>

                <div className="rotate-180 text-[40px] leading-none text-[#444]">
                  ❛
                </div>
              </div>
            </div>

            {/* HEADING */}
            <div className="mt-6">
              
              <h1 className="text-[64px] font-black uppercase leading-[0.9] tracking-[-4px] text-[#111827]">
                
                <span className="text-transparent [-webkit-text-stroke:2px_#111827]">
                  LET&apos;S
                </span>

                {" "}INSURE
                <br />

                <span className="text-transparent [-webkit-text-stroke:2px_#111827]">
                  YOUR
                </span>

                {" "}CAR
              </h1>
            </div>

            {/* CAR IMAGE */}
            <div className="mt-1">
              
              <img
                src={carImg}
                alt="Car"
                className="h-[320px] w-auto object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            
            {/* FORM CARD */}
            <div className="rounded-[24px] border border-[#ECEFF5] bg-gradient-to-br from-[#F8F3FF] via-[#FCFBFF] to-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
              
              <h2 className="text-[16px] font-bold tracking-[-0.3px] text-[#111827]">
                Enter your car registration number
              </h2>

              {/* INPUT */}
              <div
                className={`mt-4 overflow-hidden rounded-[14px] border bg-white ${
                  error
                    ? "border-red-400"
                    : "border-[#DCE6F5]"
                }`}
              >
                <div className="flex h-[50px] items-center">
                  
                  <div className="flex h-full w-[56px] items-center justify-center bg-[#2563EB] text-[11px] font-bold text-white">
                    IND
                  </div>

                  <input
                    type="text"
                    value={carNumber}
                    onChange={(e) => {
                      setCarNumber(
                        e.target.value
                          .toUpperCase()
                          .replace(/\s/g, "")
                      );

                      setError("");
                    }}
                    placeholder="MH05VF1234"
                    maxLength={12}
                    className="h-full w-full border-none bg-transparent px-4 text-[14px] font-semibold tracking-[0.5px] text-[#111827] outline-none placeholder:text-[#94A3B8]"
                  />
                </div>
              </div>

              {error && (
                <p className="mt-2 text-[12px] font-medium text-red-500">
                  {error}
                </p>
              )}

              {/* BUTTON */}
              <button
                onClick={handleCheckPrice}
                className="mt-4 flex h-[50px] w-full items-center justify-center rounded-[14px] bg-[#111827] text-[14px] font-bold text-white transition-all hover:bg-black cursor-pointer"
              >
                Check price
              </button>

              <p className="mt-2 text-center text-[10px] font-medium text-[#7C8595]">
                UID: 7733 | T&amp;Cs apply*
              </p>
            </div>

            {/* SECOND CARD */}
            <div className="rounded-[24px] border border-[#ECEFF5] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
              
              <h2 className="max-w-[380px] text-[18px] font-bold leading-[1.3] tracking-[-0.6px] text-[#111827]">
                Save more with smarter car insurance
              </h2>

              {/* MINI CARDS */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                
                {/* LEFT */}
                <div className="flex min-h-[165px] flex-col justify-between rounded-[18px] border border-[#E6EDF7] bg-[#FAFCFF] p-4">
                  
                  <div>
                    <h3 className="text-[15px] font-bold leading-[1.25] text-[#111827]">
                      Fast renewals
                    </h3>

                    <p className="mt-2 text-[12px] leading-[1.5] text-[#64748B]">
                      Renew your policy instantly with better pricing.
                    </p>
                  </div>

                  <button className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#DCE6F5] transition-all hover:bg-[#F8FBFF]">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* RIGHT */}
                <div className="flex min-h-[165px] flex-col justify-between rounded-[18px] border border-[#BFDBFE] bg-gradient-to-br from-[#EEF5FF] to-[#F8FBFF] p-4">
                  <div>
                    <h3 className="text-[15px] font-bold leading-[1.25] text-[#111827]">
                      Premium support
                    </h3>

                    <p className="mt-2 text-[12px] leading-[1.5] text-[#5B6B85]">
                      Quick claims & hassle-free assistance anytime.
                    </p>

                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#DBEAFE] px-3 py-1.5">
                      
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2563EB] text-[9px] font-bold text-white">
                        ✓
                      </div>

                      <span className="text-[11px] font-semibold text-[#1E3A8A]">
                        Trusted by 5Cr+
                      </span>
                    </div>
                  </div>
                <div className="flex items-center justify-between">
                  
                  <button className="text-[13px] font-bold text-[#1D4ED8]">
                    Explore
                  </button>

                  <button className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#93C5FD] bg-white text-[#2563EB] transition-all hover:bg-[#EFF6FF]">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInsuranceForm;