import { useNavigate } from "react-router-dom";

import { ChevronRight, Plane, Ticket } from "lucide-react";

import Header from "../../components/Header";

const TravelInsuranceForm = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#140B45] to-[#4F46E5]">
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className="relative flex min-h-[calc(100vh-88px)] items-center justify-center px-5 py-10">
        {/* CONTENT */}
        <div className="w-full max-w-[560px]">
          {/* TITLE */}
          <div className="text-center">
            <h1 className="text-[38px] font-black tracking-[-2px] text-white">
              Smarter travel, unlocked!
            </h1>

            <p className="mt-2 text-[13px] text-[#DBEAFE]">
              Simple travel protection for every journey.
            </p>
          </div>

          {/* CARD 1 */}
          <div
            onClick={() =>
              navigate("/insurance-plans", {
                state: {
                  category: "travel",
                },
              })
            }
            className="group mt-7 cursor-pointer overflow-hidden rounded-[22px] border border-white/10 bg-white/10 p-[1px] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_18px_35px_rgba(0,0,0,0.22)]"
          >
            <div className="flex items-center justify-between rounded-[22px] bg-white/[0.07] px-5 py-5 backdrop-blur-md">
              {/* LEFT */}
              <div className="max-w-[280px]">
                <h2 className="text-[18px] font-bold leading-[1.35] text-white">
                  Get international
                  <br />
                  travel insurance
                </h2>

                <p className="mt-2 text-[13px] text-[#E0E7FF]">
                  Plans starting at ₹45/day with ₹0 tax
                </p>

                <p className="mt-1 text-[10px] text-[#BFDBFE]">
                  UID: 7444 | *T&Cs apply
                </p>

                <button className="mt-4 flex items-center gap-1 text-[13px] font-semibold text-white transition-all duration-300 group-hover:translate-x-1">
                  Explore
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* RIGHT */}
              <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15">
                <Plane className="h-8 w-8 rotate-[-18deg] text-white" />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            onClick={() =>
              navigate("/insurance-plans", {
                state: {
                  category: "travel",
                },
              })
            }
            className="group mt-4 cursor-pointer overflow-hidden rounded-[22px] border border-white/10 bg-white/10 p-[1px] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_18px_35px_rgba(0,0,0,0.22)]"
          >
            <div className="flex items-center justify-between rounded-[22px] bg-white/[0.07] px-5 py-5 backdrop-blur-md">
              {/* LEFT */}
              <div className="max-w-[280px]">
                <div className="inline-flex rounded-full bg-[#FB7185] px-2.5 py-1 text-[10px] font-semibold text-white">
                  New
                </div>

                <h2 className="mt-3 text-[18px] font-bold leading-[1.35] text-white">
                  AirPass for
                  <br />
                  domestic travel
                </h2>

                <p className="mt-2 text-[13px] leading-6 text-[#E0E7FF]">
                  Delays & missed flights covered instantly.
                </p>

                <button className="mt-4 flex items-center gap-1 text-[13px] font-semibold text-white transition-all duration-300 group-hover:translate-x-1">
                  Explore
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* RIGHT */}
              <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15">
                <Ticket className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelInsuranceForm;
