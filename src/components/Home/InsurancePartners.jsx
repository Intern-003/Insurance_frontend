const partners = [
  "Star Health",
  "ICICI Lombard",
  "HDFC ERGO",
  "Niva Bupa",
  "Bajaj Allianz",
  "Care Health",
  "Tata AIG",
];

const InsurancePartners = () => {
  return (
    <section id="companies" className="bg-[#f8fafc] py-14 sm:py-25">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Trusted Insurance Partners
          </h2>

          <p className="mt-3 text-[15px] leading-7 text-gray-600">
            We work with India&apos;s leading insurance companies to provide
            reliable and secure health coverage options.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex h-16 items-center justify-center rounded-xl border border-gray-200 bg-white px-3 text-center transition duration-200 hover:border-emerald-200 hover:shadow-sm"
            >
              <h3 className="text-[13px] font-medium text-gray-700">
                {partner}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center">
          <p className="text-[13px] text-gray-500">
            All insurance companies are IRDAI registered and regulated
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;
