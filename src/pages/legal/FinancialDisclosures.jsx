import {
  BadgeDollarSign,
  ShieldCheck,
  FileText,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const disclosures = [
  {
    icon: BadgeDollarSign,
    title: "Commission Disclosure",
    content:
      "We may receive commissions or compensation from insurance providers for policies purchased through our platform.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Partner Transparency",
    content:
      "All insurance providers listed on our platform are verified and operate under applicable regulatory approvals.",
  },
  {
    icon: TrendingUp,
    title: "Pricing & Premium Information",
    content:
      "Premiums, benefits, and policy pricing may vary based on insurer underwriting guidelines and customer eligibility.",
  },
  {
    icon: FileText,
    title: "Policy Documentation",
    content:
      "Customers are advised to carefully review all policy terms, inclusions, exclusions, and disclosures before purchase.",
  },
];

const guidelines = [
  "Insurance is the subject matter of solicitation.",
  "Policy issuance is solely at the discretion of the insurer.",
  "Premiums and benefits are subject to underwriting approval.",
  "Customers should review all policy documentation carefully.",
  "Claims are processed as per insurer terms and conditions.",
];

const FinancialDisclosures = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020817] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-[#132238]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_32%)]" />

        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#2563EB]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-5 py-14 md:px-8 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120]/80 px-4 py-1.5 backdrop-blur-xl">

              <Sparkles className="h-4 w-4 text-[#60A5FA]" />

              <span className="text-[12px] font-semibold text-[#60A5FA]">

                Regulatory & Financial Transparency

              </span>

            </div>

            <h1 className="mt-5 text-[34px] font-bold leading-[1.05] tracking-[-1.5px] md:text-[52px]">

              Financial
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
                {" "}Disclosures
              </span>

            </h1>

            <p className="mt-5 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

              We believe in complete transparency
              regarding insurance partnerships,
              commissions, pricing structures,
              compensation models, and customer
              financial disclosures.

            </p>

            {/* TRUST CHIPS */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                "IRDAI Compliance Focused",
                "Transparent Revenue Models",
                "Verified Insurance Partners",
                "Clear Customer Disclosures",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-[#132238] bg-[#071120]/60 px-3 py-3"
                >

                  <ShieldCheck className="h-4 w-4 text-[#60A5FA]" />

                  <span className="text-[13px] text-[#E2E8F0]">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="rounded-full border border-[#1E293B] bg-[#071120] px-5 py-3 text-[13px] text-[#CBD5E1]">

                Updated May 2026

              </div>

              <div className="rounded-full border border-[#1E293B] bg-[#071120] px-5 py-3 text-[13px] text-[#CBD5E1]">

                Regulatory Compliance Standards

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-[26px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: BadgeDollarSign,
                    value: "100%",
                    label: "Transparency",
                  },
                  {
                    icon: ShieldCheck,
                    value: "Verified",
                    label: "Partners",
                  },
                  {
                    icon: FileText,
                    value: "Updated",
                    label: "Disclosures",
                  },
                  {
                    icon: TrendingUp,
                    value: "Compliant",
                    label: "Practices",
                  },
                ].map((item, index) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={index}
                      className="rounded-2xl border border-[#132238] bg-[#020817] p-5"
                    >

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10">

                        <Icon className="h-5 w-5 text-[#60A5FA]" />

                      </div>

                      <h3 className="mt-4 text-[24px] font-bold">

                        {item.value}

                      </h3>

                      <p className="mt-1 text-[13px] text-[#94A3B8]">

                        {item.label}

                      </p>

                    </div>

                  );

                })}

              </div>

              {/* COMPLIANCE BANNER */}

              <div className="mt-4 rounded-2xl border border-[#132238] bg-[#071120] p-5">

                <span className="text-[12px] font-semibold text-[#60A5FA]">

                  FINANCIAL COMPLIANCE

                </span>

                <h3 className="mt-2 text-[20px] font-semibold">

                  Clear & Responsible Disclosures

                </h3>

                <p className="mt-2 text-[13px] leading-[1.8] text-[#94A3B8]">

                  We provide transparent information
                  regarding commissions, insurance
                  partnerships, pricing practices,
                  and policy-related disclosures.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* DISCLOSURE CARDS */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Financial Transparency

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Key Financial Disclosures

            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

              Understanding how our platform operates,
              generates revenue, works with insurance
              providers, and presents policy information.

            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {disclosures.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="group rounded-[26px] border border-[#132238] bg-[#071120]/70 p-6 transition-all duration-300 hover:border-[#2563EB]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10 transition-all duration-300 group-hover:bg-[#2563EB]/20">

                    <Icon className="h-6 w-6 text-[#60A5FA]" />

                  </div>

                  <h3 className="mt-6 text-[22px] font-semibold">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.9] text-[#94A3B8]">

                    {item.content}

                  </p>

                  <div className="mt-5 h-[1px] bg-gradient-to-r from-[#2563EB] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* CUSTOMER GUIDELINES */}

      <section className="border-y border-[#132238] bg-[#071120]/50">

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">

            {/* LEFT */}

            <div>

              <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

                Customer Guidelines

              </span>

              <h2 className="mt-5 text-[38px] font-bold leading-[1.1] tracking-[-1.5px]">

                Important Information
                Before Purchasing

              </h2>

              <p className="mt-5 text-[16px] leading-[1.9] text-[#94A3B8]">

                Insurance decisions should be made
                after reviewing policy benefits,
                exclusions, premium structures,
                claim processes, and insurer terms.

              </p>

            </div>

            {/* RIGHT */}

            <div className="space-y-4">

              {guidelines.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 rounded-[20px] border border-[#132238] bg-[#020817] p-5"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563EB]/10">

                    <CheckCircle2 className="h-5 w-5 text-[#60A5FA]" />

                  </div>

                  <span className="text-[14px] text-[#E2E8F0]">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* COMPLIANCE BANNER */}

          <div className="mt-14 overflow-hidden rounded-[28px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-8">

            <div className="grid gap-4 md:grid-cols-4">

              <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                <div className="text-[28px] font-bold">

                  Verified

                </div>

                <div className="mt-1 text-[13px] text-[#94A3B8]">

                  Insurance Partners

                </div>

              </div>

              <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                <div className="text-[28px] font-bold">

                  100%

                </div>

                <div className="mt-1 text-[13px] text-[#94A3B8]">

                  Transparency Focus

                </div>

              </div>

              <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                <div className="text-[28px] font-bold">

                  Updated

                </div>

                <div className="mt-1 text-[13px] text-[#94A3B8]">

                  Disclosure Practices

                </div>

              </div>

              <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                <div className="text-[28px] font-bold">

                  Compliant

                </div>

                <div className="mt-1 text-[13px] text-[#94A3B8]">

                  Financial Standards

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* DETAILED FINANCIAL INFORMATION */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Detailed Information

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Understanding Our Financial Practices

            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

              We are committed to maintaining
              transparency regarding compensation,
              partnerships, pricing disclosures,
              and customer information.

            </p>

          </div>

          <div className="mt-12 space-y-5">

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Insurance Marketplace Disclosure

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                Our platform facilitates connections
                between customers and verified
                insurance providers. Insurance
                products are offered by licensed
                insurers and remain subject to
                their underwriting, approval,
                and policy issuance processes.

              </p>

            </div>

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Compensation & Revenue Model

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                Revenue may be generated through
                commissions, referral arrangements,
                service fees, insurance partnerships,
                and other approved business models.
                Such arrangements do not alter
                insurer underwriting decisions or
                customer eligibility assessments.

              </p>

            </div>

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Pricing & Premium Information

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                Insurance premiums, benefits,
                discounts, and policy terms may vary
                based on insurer guidelines, customer
                eligibility, underwriting outcomes,
                risk profiles, and applicable
                regulatory requirements.

              </p>

            </div>

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Product Recommendations

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                Customers should evaluate policy
                benefits, exclusions, waiting periods,
                premium costs, claim settlement
                history, and insurer reputation
                before making purchase decisions.

              </p>

            </div>

          </div>

          {/* REGULATORY NOTICE */}

          <div className="mt-12 rounded-[28px] border border-[#F59E0B]/30 bg-[#F59E0B]/10 p-6">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/20">

                <AlertTriangle className="h-6 w-6 text-[#FBBF24]" />

              </div>

              <div>

                <span className="text-[12px] font-semibold tracking-wide text-[#FBBF24]">

                  REGULATORY NOTICE

                </span>

                <p className="mt-3 text-[14px] leading-[2] text-[#FDE68A]">

                  Insurance is the subject matter of
                  solicitation. Policy issuance,
                  premium calculations, benefits,
                  exclusions, and claim decisions
                  remain solely at the discretion
                  of the respective insurer and are
                  subject to applicable policy terms,
                  conditions, and underwriting approval.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* COMPLIANCE CTA */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 pb-20 md:px-8">

          <div className="relative overflow-hidden rounded-[32px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-10 md:p-12">

            <div className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[#2563EB]/10 blur-[100px]" />

            <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#0EA5E9]/10 blur-[100px]" />

            <div className="relative z-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB]/15">

                <BadgeDollarSign className="h-7 w-7 text-[#60A5FA]" />

              </div>

              <h2 className="mx-auto mt-6 max-w-[760px] text-[40px] font-bold leading-[1.1] tracking-[-1.5px]">

                Transparency You Can Trust

              </h2>

              <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

                We remain committed to transparent
                disclosures, responsible financial
                practices, regulatory compliance,
                and customer-first insurance experiences.

              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <button className="flex h-[50px] items-center gap-2 rounded-full bg-[#2563EB] px-8 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                  Contact Support

                  <ArrowRight className="h-4 w-4" />

                </button>

                <button className="flex h-[50px] items-center rounded-full border border-[#1E293B] bg-[#071120]/70 px-8 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                  Learn More

                </button>

              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

                {[
                  "Verified Partners",
                  "Transparent Disclosures",
                  "Regulatory Compliance",
                  "Customer First",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="rounded-xl border border-[#132238] bg-[#020817]/80 p-4"
                  >

                    <p className="text-[13px] font-medium text-[#CBD5E1]">

                      {item}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default FinancialDisclosures; 