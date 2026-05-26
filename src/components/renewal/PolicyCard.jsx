import {
  Shield,
  Calendar,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react";

const PolicyCard = ({ policy, type }) => {
  return (
    <div className="group relative overflow-hidden rounded-[34px] border border-[#E5EDF7] bg-white p-8 shadow-[0_8px_35px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)]">

      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">

        {/* LEFT */}
        <div className="flex flex-1 gap-5">

          <div className="flex h-[78px] w-[78px] min-w-[78px] items-center justify-center rounded-[24px] bg-[#EFF6FF] text-[#2563EB]">
            <FileText className="h-9 w-9" />
          </div>

          <div className="flex-1">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#D6F5DF] bg-[#F3FFF7] px-4 py-2">

              <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />

              <span className="text-[12px] font-semibold text-[#16A34A]">
                {policy.status}
              </span>
            </div>

            <h2 className="mt-5 text-[30px] font-bold tracking-[-1px] text-[#0F172A]">
              {policy.plan}
            </h2>

            <p className="mt-3 text-[15px] font-medium text-[#64748B]">
              Policy Number :
              <span className="ml-2 font-semibold text-[#0F172A]">
                {policy.policyNo}
              </span>
            </p>

            <p className="mt-2 text-[15px] font-medium text-[#64748B]">
              Customer :
              <span className="ml-2 font-semibold text-[#0F172A]">
                {policy.customer}
              </span>
            </p>

            {/* DETAILS */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-[22px] border border-[#E5EDF7] bg-[#FAFCFF] p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                    <CreditCard className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[13px] font-medium text-[#64748B]">
                      Renewal Premium
                    </p>

                    <h4 className="mt-1 text-[22px] font-bold tracking-[-0.5px] text-[#0F172A]">
                      {policy.premium}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="rounded-[22px] border border-[#E5EDF7] bg-[#FAFCFF] p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                    <Calendar className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[13px] font-medium text-[#64748B]">
                      Expiry Date
                    </p>

                    <h4 className="mt-1 text-[18px] font-bold tracking-[-0.5px] text-[#0F172A]">
                      {policy.expiry}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="rounded-[22px] border border-[#E5EDF7] bg-[#FAFCFF] p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                    <Shield className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[13px] font-medium text-[#64748B]">
                      Insurance Type
                    </p>

                    <h4 className="mt-1 text-[18px] font-bold capitalize tracking-[-0.5px] text-[#0F172A]">
                      {type}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ACTION */}
        <div className="flex flex-col gap-4 xl:w-[240px]">

          <button className="group flex h-[60px] items-center justify-center gap-3 rounded-[20px] bg-[#111827] px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#2563EB]">

            Renew Now

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;