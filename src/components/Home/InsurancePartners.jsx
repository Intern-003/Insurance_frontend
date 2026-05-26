const partners = [
  "Aditya Birla",
  "Ageas Federal",
  "Aviva",
  "Axis Max",
  "Bajaj Allianz",
  "Bandhan Life",
  "Canara HSBC",
  "Care Health",
  "Chola MS",
  "Digit",
  "Edelweiss",
  "Future Generali",
  "Galaxy",
  "HDFC ERGO",
  "HDFC Life",
  "ICICI Lombard",
  "IFFCO Tokio",
  "IndiaFirst",
  "Kotak Life",
  "Liberty",
  "LIC",
];

const InsurancePartners = () => {
  return (
    <section className="bg-[#F7FAFF] pt-7 py-[90px]">
      
      <div className="mx-auto max-w-[1500px] px-[110px]">
        
        {/* HEADING */}
        <div className="text-center">
          
          <h2 className="text-[36px] font-[500] tracking-[-0.5px] text-[#243B64]">
            Our Partners
          </h2>

          <p className="mt-2 text-[16px] font-normal text-[#94A3B8]">
            Leading insurers for your financial freedom
          </p>
        </div>

        {/* GRID */}
        <div className="mt-[48px] grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex h-[82px] items-center justify-center rounded-[10px] border border-[#E9EEF7] bg-white px-4 transition-all duration-300 hover:border-[#DCE8FF] hover:shadow-[0_8px_24px_rgba(37,99,235,0.06)]"
            >
              <h3 className="text-center text-[16px] font-[500] leading-[1.3] tracking-[-0.2px] text-[#7C8CA5] transition-all duration-300 group-hover:text-[#2563EB]">
                {partner}
              </h3>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-[38px] text-center">
          
          <p className="text-[13px] font-normal text-[#A0AEC0]">
            All insurance companies are IRDAI registered and regulated
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;