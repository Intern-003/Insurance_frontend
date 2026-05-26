const TrustStats = () => {
  return (
    <section className="bg-[#F7FAFF] py-[10px]">
      
      {/* MAIN STRIP */}
      <div className="border-y border-[#E8EEF9] bg-white">
        
        <div className="mx-auto max-w-[1500px] px-[30px] py-[42px]">
          
          {/* HEADING */}
          <div className="text-center">
            
            <h2 className="text-[34px] font-[700] tracking-[-1px] text-[#111827]">
              Your trust isn’t assumed,
              <span className="ml-2 text-[#4F46E5]">
                it’s earned
              </span>
            </h2>

            <p className="mt-3 text-[15px] font-medium text-[#64748B]">
              Built with transparency, quick claims and premium customer support.
            </p>
          </div>

          {/* STATS */}
          <div className="mt-[38px] grid grid-cols-3 overflow-hidden rounded-[24px] border border-[#EEF3FA] bg-[#FBFDFF]">
            
            {/* ITEM 1 */}
            <div className="flex flex-col items-center justify-center border-r border-[#EEF3FA] py-[4px]">
              
              <h3 className="text-[40px] font-[700] tracking-[-1px] text-[#4F46E5]">
                7 mins
              </h3>

              <p className="mt-1.5 text-[15px] font-medium text-[#64748B]">
                Fastest claim settlement
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center justify-center border-r border-[#EEF3FA] py-[4px]">
              
              <h3 className="text-[40px] font-[700] tracking-[-1px] text-[#2563EB]">
                98.8%
              </h3>

              <p className="mt-1.5 text-[15px] font-medium text-[#64748B]">
                Claims settled in 1 week
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center justify-center py-[24px]">
              
              <h3 className="text-[40px] font-[700] tracking-[-1px] text-[#7C3AED]">
                24x7
              </h3>

              <p className="mt-1.5 text-[15px] font-medium text-[#64748B]">
                Instant claims support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;