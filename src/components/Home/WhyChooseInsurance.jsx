const WhyChooseInsurance = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] py-[70px]">
      
      {/* LEFT DESIGN */}
      <div className="absolute left-[-120px] top-[110px] h-[380px] w-[380px] rounded-full bg-[#FFFDF4]" />

      <div className="absolute left-[70px] top-[60px] h-[250px] w-[250px] rounded-full bg-[#F4FAFF] opacity-90" />

      {/* DOTS */}
      <div className="absolute left-0 top-[160px]">
        <div className="grid grid-cols-6 gap-4 opacity-40">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="h-[4px] w-[4px] rounded-full bg-[#FFB4B4]"
            />
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-[180px]">
        <div className="grid grid-cols-6 gap-4 opacity-40">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="h-[4px] w-[4px] rounded-full bg-[#FFB4B4]"
            />
          ))}
        </div>
      </div>

      {/* SMALL ICONS */}
      <div className="absolute left-[120px] top-[95px] h-[30px] w-[30px] rounded-full border-[3px] border-[#FFCACA]" />

      <div className="absolute left-[180px] top-[390px] h-[18px] w-[18px] rounded-full border-[3px] border-[#C7F0FF]" />

      <div className="absolute left-[370px] top-[390px] text-[32px] text-[#FFD5D5]">
        ×
      </div>

      <div className="absolute right-[80px] top-[95px] text-[40px] text-[#B8F2FF]">
        ×
      </div>

      <div className="absolute right-[70px] top-[390px] text-[42px] text-[#FFD2D2]">
        +
      </div>

      {/* MAIN */}
      <div className="mx-auto max-w-[1720px] px-[80px]">
        
        <div className="grid items-center gap-[140px] lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="relative z-10 pl-[150px]">
            
            <h2 className="text-[62px] font-light leading-[1.15] tracking-[-2px] text-[#243B64]">
              What makes
            </h2>

            <h2 className="mt-4 text-[44px] font-bold leading-[1.15] tracking-[-2px] text-[#243B64]">
              SpayInsurance
              <span className="ml-4 font-light">
                one of
              </span>
            </h2>

            <h2 className="mt-5 text-[44px] font-bold leading-[1.15] tracking-[-2px] text-[#243B64]">
              India's favourite places
            </h2>

            <h2 className="mt-5 text-[42px] font-light leading-[1.15] tracking-[-2px] text-[#243B64]">
              to buy{" "}
              <span className="font-bold">
                insurance
              </span>
              ?
            </h2>
          </div>

          {/* RIGHT CARDS */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            
            {/* CARD 1 */}
            <div className="rounded-[14px] border-l-[3px] border-[#4F46E5] bg-white p-6 shadow-[0_8px_24px_rgba(37,99,235,0.06)] transition-all hover:-translate-y-1">
                
                <div className="text-[22px]">
                🎉
                </div>

                <h3 className="mt-4 text-[18px] font-bold leading-[1.25] text-[#3B4CFF]">
                Over 9 million
                </h3>

                <p className="mt-3 text-[14px] leading-[1.6] text-[#475569]">
                customers trust us & have bought their insurance on Policybazaar
                </p>
            </div>

            {/* CARD 2 */}
            <div className="mt-[28px] rounded-[14px] border-l-[3px] border-[#0EA5E9] bg-white p-6 shadow-[0_8px_24px_rgba(37,99,235,0.06)] transition-all hover:-translate-y-1">
                
                <div className="text-[22px]">
                🔍
                </div>

                <h3 className="mt-4 text-[18px] font-bold leading-[1.25] text-[#0EA5E9]">
                51 insurers
                </h3>

                <p className="mt-3 text-[14px] leading-[1.6] text-[#475569]">
                partnered with us so that you can compare easily & transparently
                </p>
            </div>

            {/* CARD 3 */}
            <div className="ml-[30px] rounded-[14px] border-l-[3px] border-[#4ADE80] bg-white p-6 shadow-[0_8px_24px_rgba(37,99,235,0.06)] transition-all hover:-translate-y-1">
                
                <div className="text-[22px]">
                😄
                </div>

                <h3 className="mt-4 text-[18px] font-bold leading-[1.25] text-[#4ADE80]">
                Great Price
                </h3>

                <p className="mt-3 text-[14px] leading-[1.6] text-[#475569]">
                for all kinds of insurance plans available online
                </p>
            </div>

            {/* CARD 4 */}
            <div className="mt-[18px] rounded-[14px] border-l-[3px] border-[#FFB800] bg-white p-6 shadow-[0_8px_24px_rgba(37,99,235,0.06)] transition-all hover:-translate-y-1">
                
                <div className="text-[22px]">
                👩🏻
                </div>

                <h3 className="mt-4 text-[18px] font-bold leading-[1.25] text-[#FFB800]">
                Claims
                </h3>

                <p className="mt-3 text-[14px] leading-[1.6] text-[#475569]">
                support built in with every policy for help, when you need it the most
                </p>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseInsurance;