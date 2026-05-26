import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Shield,
  Calendar,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
} from "lucide-react";

const policies = [
  {
    id: 1,
    policyNo: "TERM-984523",
    customer: "Arslan Khan",
    premium: "₹4,500",
    expiry: "12 June 2026",
    status: "Active",
    plan: "Term Life Secure Plus",
  },

  {
    id: 2,
    policyNo: "TERM-984524",
    customer: "Arslan Khan",
    premium: "₹6,800",
    expiry: "18 August 2026",
    status: "Active",
    plan: "Family Health Elite",
  },
];

const RenewalPolicies = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F6F9FC]">

      {/* SECTION */}
      <section className="relative overflow-hidden py-8">

        {/* BG */}
        <div className="absolute left-[-100px] top-[-100px] h-[220px] w-[220px] rounded-full bg-[#2563EB]/10 blur-3xl" />

        <div className="absolute right-[-100px] bottom-[-100px] h-[220px] w-[220px] rounded-full bg-[#2563EB]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-7">

          {/* BREADCRUMB */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-[#64748B]">

            <span>Home</span>

            <ChevronRight className="h-3 w-3" />

            <span>Renewals</span>

            <ChevronRight className="h-3 w-3" />

            <span>Verification</span>

            <ChevronRight className="h-3 w-3" />

            <span className="text-[#2563EB]">
              Policies
            </span>
          </div>

          {/* TOP */}
          <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center rounded-full border border-[#DCE7F8] bg-white px-3.5 py-1.5 shadow-sm">
                <span className="text-[10px] font-semibold tracking-[0.2px] text-[#2563EB]">
                  VERIFIED POLICIES
                </span>
              </div>

              <h1 className="mt-4 text-[30px] font-bold leading-[38px] tracking-[-1px] text-[#0F172A] sm:text-[38px] sm:leading-[46px]">
                Policies Available
                <span className="block text-[#2563EB]">
                  For Renewal
                </span>
              </h1>

              <p className="mt-3 max-w-[600px] text-[14px] leading-[25px] text-[#64748B]">
                We found the following policies associated with your details.
              </p>
            </div>

            {/* RIGHT */}
            <div className="rounded-[22px] border border-[#E5EDF7] bg-white p-4 shadow-[0_6px_25px_rgba(15,23,42,0.04)]">

              <div className="flex items-center gap-3">

                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[16px] bg-[#EFF6FF] text-[#2563EB]">
                  <Shield className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-[12px] font-medium text-[#64748B]">
                    Policies Found
                  </p>

                  <h3 className="mt-1 text-[24px] font-bold text-[#0F172A]">
                    {policies.length}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* POLICIES */}
          <div className="mt-8 space-y-5">

            {policies.map((policy) => (
              <div
                key={policy.id}
                className="group relative overflow-hidden rounded-[24px] border border-[#E5EDF7] bg-white p-5 shadow-[0_6px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(37,99,235,0.08)]"
              >

                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">

                  {/* LEFT */}
                  <div className="flex flex-1 gap-4">

                    {/* ICON */}
                    <div className="flex h-[64px] w-[64px] min-w-[64px] items-center justify-center rounded-[20px] bg-[#EFF6FF] text-[#2563EB]">
                      <FileText className="h-7 w-7" />
                    </div>

                    {/* DETAILS */}
                    <div className="flex-1">

                      {/* STATUS */}
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#D6F5DF] bg-[#F3FFF7] px-3 py-1">

                        <CheckCircle2 className="h-3 w-3 text-[#16A34A]" />

                        <span className="text-[10px] font-semibold text-[#16A34A]">
                          {policy.status}
                        </span>
                      </div>

                      {/* PLAN */}
                      <h2 className="mt-3 text-[21px] font-bold tracking-[-0.6px] text-[#0F172A]">
                        {policy.plan}
                      </h2>

                      {/* POLICY */}
                      <p className="mt-2 text-[13px] font-medium text-[#64748B]">
                        Policy Number :
                        <span className="ml-2 font-semibold text-[#0F172A]">
                          {policy.policyNo}
                        </span>
                      </p>

                      {/* CUSTOMER */}
                      <p className="mt-1.5 text-[13px] font-medium text-[#64748B]">
                        Customer :
                        <span className="ml-2 font-semibold text-[#0F172A]">
                          {policy.customer}
                        </span>
                      </p>

                      {/* INFO */}
                      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                        {/* PREMIUM */}
                        <div className="rounded-[18px] border border-[#E5EDF7] bg-[#FAFCFF] p-3.5">

                          <div className="flex items-center gap-3">

                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                              <CreditCard className="h-4 w-4" />
                            </div>

                            <div>
                              <p className="text-[11px] font-medium text-[#64748B]">
                                Renewal Premium
                              </p>

                              <h4 className="mt-1 text-[15px] font-bold text-[#0F172A]">
                                {policy.premium}
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* EXPIRY */}
                        <div className="rounded-[18px] border border-[#E5EDF7] bg-[#FAFCFF] p-3.5">

                          <div className="flex items-center gap-3">

                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                              <Calendar className="h-4 w-4" />
                            </div>

                            <div>
                              <p className="text-[11px] font-medium text-[#64748B]">
                                Expiry Date
                              </p>

                              <h4 className="mt-1 text-[14px] font-bold text-[#0F172A]">
                                {policy.expiry}
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* TYPE */}
                        <div className="rounded-[18px] border border-[#E5EDF7] bg-[#FAFCFF] p-3.5">

                          <div className="flex items-center gap-3">

                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                              <Shield className="h-4 w-4" />
                            </div>

                            <div>
                              <p className="text-[11px] font-medium text-[#64748B]">
                                Insurance Type
                              </p>

                              <h4 className="mt-1 text-[14px] font-bold capitalize text-[#0F172A]">
                                {type}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-col gap-3 xl:w-[200px]">

                    {/* RENEW */}
                    <button
                      onClick={() =>
                        navigate(`/renewals/${type}/checkout`)
                      }
                      className="group flex h-[50px] items-center justify-center gap-2 rounded-[16px] bg-[#111827] px-6 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#2563EB]"
                    >

                      Renew Now

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    {/* SUPPORT */}
                    <Link
                      to="/support"
                      className="flex h-[46px] items-center justify-center rounded-[14px] border border-[#DCE5F2] bg-white text-[12.5px] font-semibold text-[#0F172A] transition-all duration-300 hover:border-[#2563EB] hover:text-[#2563EB]"
                    >
                      Contact Support
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#111827] to-[#1E293B] p-7 sm:p-8">

            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              {/* LEFT */}
              <div>

                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold tracking-[0.2px] text-white">
                  SECURE & INSTANT
                </span>

                <h2 className="mt-4 max-w-[580px] text-[25px] font-bold leading-[34px] tracking-[-0.8px] text-white">
                  Continue Your Insurance Coverage
                </h2>

                <p className="mt-3 max-w-[600px] text-[13px] leading-[24px] text-white/70">
                  Renew your verified insurance policies instantly with secure
                  payment processing.
                </p>
              </div>

              {/* CTA BUTTON */}
              <button
                onClick={() =>
                  navigate(`/renewals/${type}/checkout`)
                }
                className="flex h-[50px] items-center justify-center rounded-[16px] bg-white px-7 text-[13px] font-semibold text-[#111827] transition-all duration-300 hover:scale-[1.02]"
              >
                Proceed To Payment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RenewalPolicies;