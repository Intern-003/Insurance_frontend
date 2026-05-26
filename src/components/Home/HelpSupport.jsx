import {
  Mail,
  Headphones,
  ArrowRight,
} from "lucide-react";

const HelpSupport = () => {
  return (
    <section className="bg-[#F7FAFF] pt-0 pb-[100px]">
      
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 items-center gap-[70px] px-[170px]">
        
        {/* LEFT CONTENT */}
        <div className="max-w-[500px]">
        
        {/* TITLE */}
        <div>
            <h2 className="max-w-[340px] text-[34px] font-[600] leading-[1.15] tracking-[-1px] text-[#243B64]">
            Have a question?
            <br />
            Here to help.
            </h2>

            <div className="mt-4 h-[3px] w-[65px] rounded-full bg-[#2563EB]" />
        </div>

        {/* DESCRIPTION */}
        <p className="mt-7 max-w-[430px] text-[15px] leading-[1.9] font-normal text-[#5B6B84]">
            Our support team is always ready to help you with
            insurance queries, claims support, renewals and
            policy guidance anytime you need assistance.
        </p>

        {/* CONTACT CARDS */}
        <div className="mt-8 flex flex-col gap-4">
            
            {/* EMAIL CARD */}
            <div className="group flex items-center justify-between rounded-[16px] border border-[#E3EBF7] bg-white px-5 py-4 transition-all duration-300 hover:border-[#D4E4FF] hover:shadow-[0_8px_25px_rgba(37,99,235,0.06)]">
            
            <div className="flex items-center gap-4">
                
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#EEF5FF]">
                <Mail className="h-5 w-5 text-[#2563EB]" />
                </div>

                <div>
                <p className="text-[13px] font-medium text-[#7C8CA5]">
                    General Enquiries
                </p>

                <h3 className="mt-1 text-[18px] font-[600] tracking-[-0.3px] text-[#243B64]">
                    inquiry@spay.live
                </h3>
                </div>
            </div>

            <button className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#DCE6F5] transition-all duration-300 group-hover:border-[#2563EB] group-hover:bg-[#EEF5FF]">
                <ArrowRight className="h-3.5 w-3.5 text-[#2563EB]" />
            </button>
            </div>

            {/* CALL CARD */}
            <div className="group flex items-center justify-between rounded-[16px] border border-[#E3EBF7] bg-white px-5 py-4 transition-all duration-300 hover:border-[#D4E4FF] hover:shadow-[0_8px_25px_rgba(37,99,235,0.06)]">
            
            <div className="flex items-center gap-4">
                
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#EEF5FF]">
                <Headphones className="h-5 w-5 text-[#2563EB]" />
                </div>

                <div>
                <p className="text-[13px] font-medium text-[#7C8CA5]">
                    Customer Support
                </p>

                <h3 className="mt-1 text-[18px] font-[600] tracking-[-0.3px] text-[#243B64]">
                    +91 8450007614
                </h3>
                </div>
            </div>

            <button className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#DCE6F5] transition-all duration-300 group-hover:border-[#2563EB] group-hover:bg-[#EEF5FF]">
                <ArrowRight className="h-3.5 w-3.5 text-[#2563EB]" />
            </button>
            </div>
        </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          
          <div className="relative">
            
            {/* BLUR */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DBEAFE] opacity-40 blur-3xl" />

            {/* IMAGE */}
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/customer-support-4486996-3723271.png"
              alt="Customer Support"
              className="relative z-10 w-full max-w-[620px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSupport;