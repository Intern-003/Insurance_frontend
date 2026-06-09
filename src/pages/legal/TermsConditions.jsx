import {
  FileCheck,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const termsSections = [
  {
    icon: FileCheck,
    title: "Acceptance Of Terms",
    content:
      "By accessing and using our platform, you agree to comply with these Terms & Conditions, policies, and applicable regulations.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Services",
    content:
      "All insurance products displayed are subject to policy terms, insurer approvals, eligibility verification, and regulatory guidelines.",
  },
  {
    icon: Lock,
    title: "User Responsibilities",
    content:
      "Users are responsible for providing accurate personal, financial, and policy-related information during purchases and claims.",
  },
  {
    icon: AlertTriangle,
    title: "Limitations & Liability",
    content:
      "We are not responsible for losses arising from incorrect information, insurer decisions, or third-party service interruptions.",
  },
];

const policies = [
  "Users must provide accurate and complete information.",
  "Insurance approvals depend on insurer underwriting policies.",
  "Premiums and policy terms may vary by provider.",
  "Unauthorized use of the platform is strictly prohibited.",
  "Policy claims are subject to insurer verification processes.",
];

const TermsConditions = () => {
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

                Legal Information & Platform Policies

              </span>

            </div>

            <h1 className="mt-5 text-[34px] font-bold leading-[1.05] tracking-[-1.5px] md:text-[52px]">

              Terms &
              Conditions

            </h1>

            <p className="mt-5 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

              These Terms & Conditions explain the
              rules, responsibilities, and legal
              framework governing access to and use
              of our insurance platform and services.

            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                "Transparent Policies",
                "Regulatory Compliance",
                "User Protection",
                "Secure Platform Usage",
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

                Legally Compliant Policies

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-[26px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: FileCheck,
                    title: "Terms",
                    value: "Updated",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Compliance",
                    value: "Verified",
                  },
                  {
                    icon: Lock,
                    title: "Security",
                    value: "Protected",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Policies",
                    value: "Transparent",
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

                      <h3 className="mt-4 text-[18px] font-semibold">

                        {item.value}

                      </h3>

                      <p className="mt-1 text-[13px] text-[#94A3B8]">

                        {item.title}

                      </p>

                    </div>

                  );

                })}

              </div>

              <div className="mt-4 rounded-2xl border border-[#132238] bg-[#071120] p-5">

                <span className="text-[12px] font-semibold text-[#60A5FA]">

                  LEGAL FRAMEWORK

                </span>

                <h3 className="mt-2 text-[20px] font-semibold">

                  Clear Rules & Responsibilities

                </h3>

                <p className="mt-2 text-[13px] leading-[1.8] text-[#94A3B8]">

                  Designed to ensure transparency,
                  compliance, security, and fair use
                  of our services.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* TERMS OVERVIEW */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Terms Overview

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Important Platform Policies

            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

              These terms define how our platform,
              insurance services, and customer
              responsibilities work together to
              create a secure and transparent experience.

            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {termsSections.map((item, index) => {

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

      {/* USER RESPONSIBILITIES */}

      <section className="border-y border-[#132238] bg-[#071120]/50">

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">

            {/* LEFT */}

            <div>

              <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

                User Responsibilities

              </span>

              <h2 className="mt-5 text-[38px] font-bold leading-[1.1] tracking-[-1.5px]">

                Responsible &
                Secure Platform Usage

              </h2>

              <p className="mt-5 text-[16px] leading-[1.9] text-[#94A3B8]">

                To maintain a safe and reliable
                insurance platform, users are expected
                to provide accurate information,
                follow applicable regulations,
                and use services responsibly.

              </p>

            </div>

            {/* RIGHT */}

            <div className="space-y-4">

              {policies.map((item, index) => (

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

          {/* COMPLIANCE STATS */}

          <div className="mt-14 overflow-hidden rounded-[28px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-8">

            <div className="grid gap-4 md:grid-cols-4">

              <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                <div className="text-[28px] font-bold">

                  Verified

                </div>

                <div className="mt-1 text-[13px] text-[#94A3B8]">

                  Compliance

                </div>

              </div>

              <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                <div className="text-[28px] font-bold">

                  Secure

                </div>

                <div className="mt-1 text-[13px] text-[#94A3B8]">

                  Platform

                </div>

              </div>

              <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                <div className="text-[28px] font-bold">

                  Trusted

                </div>

                <div className="mt-1 text-[13px] text-[#94A3B8]">

                  Insurance Partners

                </div>

              </div>

              <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                <div className="text-[28px] font-bold">

                  Transparent

                </div>

                <div className="mt-1 text-[13px] text-[#94A3B8]">

                  Policies

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* DETAILED TERMS INFORMATION */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Detailed Terms

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Understanding Our Terms & Policies

            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

              These terms explain platform usage,
              insurance-related responsibilities,
              compliance requirements, and important
              legal considerations.

            </p>

          </div>

          <div className="mt-12 space-y-5">

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Insurance Policy Terms

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                Insurance products available through
                the platform are governed by the
                terms, conditions, exclusions,
                limitations, and underwriting
                guidelines established by the
                respective insurance providers.
                Policy approval remains subject to
                insurer evaluation and eligibility.

              </p>

            </div>

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Platform Usage

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                Users agree to access and use
                the platform responsibly and in
                accordance with applicable laws.
                Activities that compromise security,
                disrupt services, or misuse platform
                functionality are prohibited.

              </p>

            </div>

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Regulatory Compliance

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                Our platform operates in alignment
                with applicable insurance regulations,
                industry standards, financial
                compliance requirements, and data
                protection obligations relevant
                to our services.

              </p>

            </div>

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Limitation Of Liability

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                We are not responsible for losses,
                delays, claim decisions, underwriting
                outcomes, or service interruptions
                resulting from insurer actions,
                third-party systems, inaccurate user
                information, or circumstances beyond
                reasonable control.

              </p>

            </div>

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Changes To Terms

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                Terms & Conditions may be updated
                periodically to reflect regulatory,
                operational, or business changes.
                Continued use of the platform after
                updates constitutes acceptance of
                revised terms.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* LEGAL CTA */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 pb-20 md:px-8">

          <div className="relative overflow-hidden rounded-[32px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-10 md:p-12">

            <div className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[#2563EB]/10 blur-[100px]" />

            <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#0EA5E9]/10 blur-[100px]" />

            <div className="relative z-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB]/15">

                <ShieldCheck className="h-7 w-7 text-[#60A5FA]" />

              </div>

              <h2 className="mx-auto mt-6 max-w-[760px] text-[40px] font-bold leading-[1.1] tracking-[-1.5px]">

                Transparent & Trusted
                Insurance Platform

              </h2>

              <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

                We are committed to maintaining
                transparency, compliance, security,
                and fair platform practices for all
                customers, partners, and users.

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
                  "Verified Compliance",
                  "Secure Platform",
                  "Trusted Partners",
                  "Transparent Policies",
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

export default TermsConditions;