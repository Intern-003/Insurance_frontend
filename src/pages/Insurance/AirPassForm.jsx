import { useState } from "react";

import {
  ChevronRight,
  PlaneTakeoff,
  ShieldCheck,
  Clock3,
  Wallet,
  Ticket,
} from "lucide-react";

import Header from "../../components/Header";

const AirPassForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#140B45] to-[#4F46E5]">
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className="relative flex min-h-[calc(100vh-88px)] items-center justify-center px-5 py-8">
        {/* LEFT BLUR */}
        <div className="absolute left-[-120px] top-[200px] h-[220px] w-[220px] rounded-full bg-[#8B5CF6]/20 blur-3xl" />

        {/* RIGHT BLUR */}
        <div className="absolute bottom-[-80px] right-[-100px] h-[220px] w-[220px] rounded-full bg-[#6366F1]/20 blur-3xl" />

        {/* CONTENT */}
        <div className="w-full max-w-[900px]">
          {/* TOP */}
          <div className="text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md">
              <ShieldCheck className="h-3.5 w-3.5 text-[#C4B5FD]" />

              <span className="text-[11px] font-semibold text-[#E9D5FF]">
                Smart protection for every domestic trip
              </span>
            </div>

            <h1 className="mt-5 text-[36px] font-black tracking-[-2px] text-white">
              AirPass for domestic travel
            </h1>

            <p className="mx-auto mt-3 max-w-[520px] text-[13px] leading-6 text-[#DBEAFE]">
              Flight delays, cancellations and missed connections covered
              instantly.
            </p>
          </div>

          {/* MAIN CARD */}
          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
            {/* LEFT */}
            <div className="rounded-[22px] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              {/* BADGE */}
              <div className="inline-flex rounded-full bg-[#FB7185] px-2.5 py-1 text-[10px] font-semibold text-white">
                New
              </div>

              {/* TITLE */}
              <h2 className="mt-4 text-[24px] font-black leading-[1.2] tracking-[-1px] text-white">
                Travel stress-free
                <br />
                with AirPass
              </h2>

              <p className="mt-3 text-[13px] leading-6 text-[#E0E7FF]">
                Get instant compensation for delays, missed boarding and
                cancellations.
              </p>

              {/* FEATURES */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-[16px] bg-white/10 px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Clock3 className="h-4 w-4 text-white" />
                  </div>

                  <div>
                    <h3 className="text-[13px] font-bold text-white">
                      Delay coverage
                    </h3>

                    <p className="mt-1 text-[11px] text-[#DBEAFE]">
                      Compensation on delayed flights.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-[16px] bg-white/10 px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Wallet className="h-4 w-4 text-white" />
                  </div>

                  <div>
                    <h3 className="text-[13px] font-bold text-white">
                      Instant payout
                    </h3>

                    <p className="mt-1 text-[11px] text-[#DBEAFE]">
                      Fast settlement directly to account.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-[16px] bg-white/10 px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Ticket className="h-4 w-4 text-white" />
                  </div>

                  <div>
                    <h3 className="text-[13px] font-bold text-white">
                      Missed flight protection
                    </h3>

                    <p className="mt-1 text-[11px] text-[#DBEAFE]">
                      Coverage for missed connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[22px] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              {/* ICON */}
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/10">
                <PlaneTakeoff className="h-8 w-8 text-white" />
              </div>

              {/* FORM */}
              <div className="mt-5">
                <h2 className="text-[22px] font-black tracking-[-1px] text-white">
                  Get your AirPass
                </h2>

                <p className="mt-1 text-[12px] text-[#DBEAFE]">
                  Enter your travel details to continue.
                </p>

                {/* INPUTS */}
                <div className="mt-5 space-y-3">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="h-[48px] w-full rounded-[16px] border border-white/10 bg-white/10 px-4 text-[13px] font-medium text-white placeholder:text-[#CBD5E1] outline-none backdrop-blur-md focus:border-white/20"
                  />

                  <input
                    type="text"
                    placeholder="Mobile number"
                    className="h-[48px] w-full rounded-[16px] border border-white/10 bg-white/10 px-4 text-[13px] font-medium text-white placeholder:text-[#CBD5E1] outline-none backdrop-blur-md focus:border-white/20"
                  />

                  <input
                    type="text"
                    placeholder="Departure city"
                    className="h-[48px] w-full rounded-[16px] border border-white/10 bg-white/10 px-4 text-[13px] font-medium text-white placeholder:text-[#CBD5E1] outline-none backdrop-blur-md focus:border-white/20"
                  />

                  <input
                    type="text"
                    placeholder="Destination city"
                    className="h-[48px] w-full rounded-[16px] border border-white/10 bg-white/10 px-4 text-[13px] font-medium text-white placeholder:text-[#CBD5E1] outline-none backdrop-blur-md focus:border-white/20"
                  />
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => setShowPopup(true)}
                  className="mt-5 flex h-[48px] w-full items-center justify-center gap-2 rounded-[16px] bg-white text-[13px] font-bold text-[#111827] transition-all duration-300 hover:scale-[1.02]"
                >
                  Continue
                  <ChevronRight className="h-4 w-4" />
                </button>

                <p className="mt-3 text-center text-[10px] leading-5 text-[#DBEAFE]">
                  By continuing, you agree to our Terms & Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COMING SOON POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm">
          <div className="w-full max-w-[380px] rounded-[28px] border border-white/10 bg-[#1E1B4B] p-6 text-center shadow-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <PlaneTakeoff className="h-8 w-8 text-white" />
            </div>

            <h2 className="mt-5 text-[28px] font-black tracking-[-1px] text-white">
              Coming Soon
            </h2>

            <p className="mt-3 text-[13px] leading-6 text-[#CBD5E1]">
              AirPass is currently under development and will be available soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 h-[48px] w-full rounded-[16px] bg-white text-[14px] font-bold text-[#111827] transition-all hover:scale-[1.02]"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AirPassForm;
