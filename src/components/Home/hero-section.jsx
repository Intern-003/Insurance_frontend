import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import family from "../../assets/images/family.png";
import car from "../../assets/images/car.webp";
import bike from "../../assets/images/bike.webp";
import health from "../../assets/images/health.webp";
import airpass from "../../assets/images/airpass.webp";
import travel from "../../assets/images/travel.webp";

const cardStyle =
  "group relative overflow-hidden rounded-[30px] border border-[#E8EDF5] bg-white p-6 shadow-[0_2px_10px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-[2px]";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F5F7FB] pb-16 pt-12">
      <div className="mx-auto max-w-[1800px] px-30">
        {/* TOP SECTION */}
        <div className="flex items-start justify-between gap-16">
    
          {/* LEFT HEADING */}
          <div className="max-w-[650px]">
            <h1 className="text-[58px] font-bold leading-[1.02] tracking-[-3px] text-[#111827]">
              Have an award-winning insurer by your side
            </h1>
          </div>

          {/* RIGHT AWARDS */}
          <div className="flex items-center gap-12 pt-3">
            
            <div className="flex items-start gap-3">
              <div className="text-[46px] leading-none text-[#4B5563]">
                ❛
              </div>

              <div>
                <h3 className="text-[17px] font-semibold leading-[1.4] tracking-[-0.3px] text-[#111827]">
                  India&apos;s #1*
                  <br />
                  insurance app
                </h3>
              </div>

              <div className="rotate-180 text-[46px] leading-none text-[#4B5563]">
                ❛
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-[46px] leading-none text-[#4B5563]">
                ❛
              </div>

              <div>
                <h3 className="text-[17px] font-semibold leading-[1.4] tracking-[-0.3px] text-[#111827]">
                  Best direct
                  <br />
                  insurer 2025
                </h3>
              </div>

              <div className="rotate-180 text-[46px] leading-none text-[#4B5563]">
                ❛
              </div>
            </div>
          </div>
        </div>        
        
        {/* CARDS SECTION */}
        <div className="mt-8 grid grid-cols-12 gap-4">
          
          {/* LEFT BIG CARD */}
          <div
            onClick={() => navigate("/insurance/life")}
            className={`${cardStyle} col-span-4 h-[540px] cursor-pointer`}
          >
            <div className="max-w-[290px]">
              <h2 className="text-[18px] font-bold leading-[1.18] tracking-[-0.6px] text-[#0F172A]">
                Protect your family with our 100% pure life insurance
              </h2>

              <p className="mt-2.5 text-[13px] font-medium leading-5 text-[#64748B]">
                Not mixed with any returns or jargons
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#EEF4FF] px-3.5 py-2">
                <ShieldCheck className="h-3.5 w-3.5 text-[#2563EB]" />

                <span className="text-[12px] font-semibold text-[#0F172A]">
                  Coverage from ₹25 L to ₹100 Cr
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <div className="mt-8 flex justify-center">
              <img
                src={family}
                alt="Family"
                className="h-[305px] w-[92%] rounded-[18px] object-cover"
              />
            </div>

            {/* BUTTON */}
            <button className="absolute bottom-5 left-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#D6E2F3] bg-white transition-all duration-300 hover:bg-[#2563EB] hover:text-white">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-8 flex flex-col gap-4">
            
            {/* TOP 2 CARDS */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* CAR CARD */}
              <div
                onClick={() => navigate("/insurance/car")}
                className={`${cardStyle} h-[230px] cursor-pointer`}
              >
                
                <div className="max-w-[240px]">
                  <h2 className="text-[18px] font-bold tracking-[-0.6px] text-[#0F172A]">
                    Car insurance
                  </h2>

                  <p className="mt-3 text-[13px] font-semibold text-[#2563EB]">
                    Simple prices. Super fast claims.
                  </p>

                  <p className="mt-1 text-[13px] text-[#64748B]">
                    That&apos;s our promise.
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#EEF4FF] px-3.5 py-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#2563EB]" />

                    <span className="text-[12px] font-semibold text-[#0F172A]">
                      Starting at just ₹2094*
                    </span>
                  </div>
                </div>

                <img
                  src={car}
                  alt="Car"
                  className="absolute bottom-0 right-0 h-[92px] object-contain"
                />

                <button className="absolute bottom-5 left-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#D6E2F3] bg-white transition-all duration-300 hover:bg-[#2563EB] hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* HEALTH CARD */}
              <div
                onClick={() => navigate("/insurance/health")}
                className={`${cardStyle} h-[230px] cursor-pointer`}
              >
                
                <div className="max-w-[240px]">
                  <h2 className="text-[18px] font-bold tracking-[-0.6px] text-[#0F172A]">
                    Health insurance
                  </h2>

                  <p className="mt-3 text-[13px] font-semibold text-[#2563EB]">
                    100% hospital bill payments
                  </p>

                  <p className="mt-1 text-[13px] text-[#64748B]">
                    from syringes to surgeries.
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#EEF4FF] px-3.5 py-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#2563EB]" />

                    <span className="text-[12px] font-semibold text-[#0F172A]">
                      From ₹600/month
                    </span>
                  </div>
                </div>

                <img
                  src={health}
                  alt="Health"
                  className="absolute bottom-0 right-4 h-[88px] object-contain"
                />

                <button className="absolute bottom-5 left-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#D6E2F3] bg-white transition-all duration-300 hover:bg-[#2563EB] hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* BOTTOM 3 CARDS */}
            <div className="grid grid-cols-3 gap-4">
              
              {/* BIKE */}
              <div
                onClick={() => navigate("/insurance/bike")}
                className={`${cardStyle} h-[290px] cursor-pointer`}
              >
                
                <div className="max-w-[160px]">
                  <h2 className="text-[16px] font-bold tracking-[-0.5px] text-[#0F172A]">
                    Bike insurance
                  </h2>

                  <p className="mt-3 text-[13px] leading-5 text-[#64748B]">
                    Insure your bike or scooter in just 1 minute
                  </p>
                </div>

                <img
                  src={bike}
                  alt="Bike"
                  className="absolute bottom-0 right-0 h-[110px] object-contain"
                />

                <button className="absolute bottom-5 left-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#D6E2F3] bg-white transition-all duration-300 hover:bg-[#2563EB] hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* TRAVEL */}
              <div
                onClick={() => navigate("/insurance/travel")}
                className={`${cardStyle} h-[290px] cursor-pointer`}
              >
                
                <div className="max-w-[160px]">
                  <h2 className="text-[16px] font-bold tracking-[-0.5px] text-[#0F172A]">
                    Traveling soon?
                  </h2>

                  <p className="mt-3 text-[13px] leading-5 text-[#64748B]">
                    Travel insurance with emergency coverage
                  </p>
                </div>

                <img
                  src={travel}
                  alt="Travel"
                  className="absolute bottom-0 right-2 h-[100px] object-contain"
                />

                <button className="absolute bottom-5 left-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#D6E2F3] bg-white transition-all duration-300 hover:bg-[#2563EB] hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* AIRPASS */}
              <div
                onClick={() => navigate("/insurance/airpass")}
                className={`${cardStyle} h-[290px] cursor-pointer`}
              >
                <div className="max-w-[160px]">
                  <h2 className="text-[16px] font-bold tracking-[-0.5px] text-[#0F172A]">
                    Domestic AirPass
                  </h2>

                  <p className="mt-3 text-[13px] leading-5 text-[#64748B]">
                    Get paid back for flight disruptions
                  </p>
                </div>

                <img
                  src={airpass}
                  alt="AirPass"
                  className="absolute bottom-0 right-2 h-[100px] object-contain"
                />

                <button className="absolute bottom-5 left-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#D6E2F3] bg-white transition-all duration-300 hover:bg-[#2563EB] hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;