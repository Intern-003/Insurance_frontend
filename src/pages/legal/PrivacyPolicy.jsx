import {
  ShieldCheck,
  Lock,
  Database,
  Eye,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content:
      "We collect personal information such as your name, email address, mobile number, insurance details, and policy-related information to provide insurance services effectively.",
  },
  {
    icon: Lock,
    title: "How We Protect Data",
    content:
      "Your data is protected using advanced encryption, secure infrastructure, and industry-standard security measures to prevent unauthorized access.",
  },
  {
    icon: Eye,
    title: "How Information Is Used",
    content:
      "Information is used to process insurance requests, policy renewals, claims assistance, customer support, and service improvements.",
  },
  {
    icon: ShieldCheck,
    title: "Third-Party Sharing",
    content:
      "We only share information with verified insurance providers, regulatory authorities, and trusted service partners when required.",
  },
];

const PrivacyPolicy = () => {
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

                Privacy & Data Protection

              </span>

            </div>

            <h1 className="mt-5 text-[34px] font-bold leading-[1.05] tracking-[-1.5px] md:text-[52px]">

              Your Privacy
              Matters To Us

            </h1>

            <p className="mt-5 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

              We are committed to protecting your
              personal information and maintaining
              transparency about how data is collected,
              stored, processed, and secured.

            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                "Advanced Data Encryption",
                "Industry Security Standards",
                "Transparent Data Usage",
                "Privacy-First Approach",
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

                Privacy & Security Focused

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-[26px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: Database,
                    title: "Data Security",
                    value: "Encrypted",
                  },
                  {
                    icon: Lock,
                    title: "Protection",
                    value: "24×7",
                  },
                  {
                    icon: Eye,
                    title: "Transparency",
                    value: "100%",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Compliance",
                    value: "Industry Standard",
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

                  PRIVACY FIRST

                </span>

                <h3 className="mt-2 text-[20px] font-semibold">

                  Your Data Stays Protected

                </h3>

                <p className="mt-2 text-[13px] leading-[1.8] text-[#94A3B8]">

                  Security, transparency, and customer
                  trust are at the core of everything we do.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* PRIVACY OVERVIEW */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Privacy Overview

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              How We Handle Your Information

            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

              We collect, process, and protect data
              responsibly to deliver secure insurance
              services while maintaining transparency
              and compliance.

            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {sections.map((item, index) => {

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

      {/* USER RIGHTS */}

      <section className="border-y border-[#132238] bg-[#071120]/50">

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">

            {/* LEFT */}

            <div>

              <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

                Your Rights

              </span>

              <h2 className="mt-5 text-[38px] font-bold leading-[1.1] tracking-[-1.5px]">

                You Stay In Control
                Of Your Information

              </h2>

              <p className="mt-5 text-[16px] leading-[1.9] text-[#94A3B8]">

                We believe customers should always
                understand and control how their
                personal information is managed.
                That's why we provide clear rights
                and transparent privacy practices.

              </p>

            </div>

            {/* RIGHT */}

            <div className="space-y-4">

              {[
                "Access your personal information",
                "Request correction of inaccurate records",
                "Request deletion where applicable",
                "Withdraw marketing consent anytime",
                "Request data portability",
                "Receive privacy-related support",
              ].map((item, index) => (

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

          {/* PRIVACY STATS */}

          <div className="mt-14 overflow-hidden rounded-[28px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-8">

            <div className="grid gap-4 md:grid-cols-4">

              <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                <div className="text-[28px] font-bold">

                  256-bit

                </div>

                <div className="mt-1 text-[13px] text-[#94A3B8]">

                  Encryption

                </div>

              </div>

              <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                <div className="text-[28px] font-bold">

                  24×7

                </div>

                <div className="mt-1 text-[13px] text-[#94A3B8]">

                  Monitoring

                </div>

              </div>

              <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                <div className="text-[28px] font-bold">

                  100%

                </div>

                <div className="mt-1 text-[13px] text-[#94A3B8]">

                  Transparency

                </div>

              </div>

              <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                <div className="text-[28px] font-bold">

                  Secure

                </div>

                <div className="mt-1 text-[13px] text-[#94A3B8]">

                  Infrastructure

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* DETAILED PRIVACY INFORMATION */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Detailed Policy

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Understanding Our Privacy Practices

            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

              Learn how information is collected,
              processed, protected, and managed
              across our platform.

            </p>

          </div>

          <div className="mt-12 space-y-5">

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Data Collection & Usage

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                We collect information necessary for
                insurance quotations, policy issuance,
                renewals, claims processing, customer
                support, fraud prevention, and service
                improvements. Information collected may
                include identification details, policy
                information, payment-related data, and
                communication records.

              </p>

            </div>

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Cookies & Tracking Technologies

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                We use cookies, analytics tools,
                and related technologies to improve
                functionality, personalize experiences,
                understand platform usage, and enhance
                security and performance.

              </p>

            </div>

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Data Retention

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                Personal information is retained only
                for as long as necessary to fulfill
                legal obligations, provide services,
                resolve disputes, enforce agreements,
                and comply with regulatory requirements.

              </p>

            </div>

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Third-Party Services

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                We may share information with verified
                insurance providers, payment partners,
                regulatory authorities, and trusted
                service providers strictly for business,
                compliance, and operational purposes.

              </p>

            </div>

            <div className="rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6">

              <h3 className="text-[22px] font-semibold">

                Privacy Support

              </h3>

              <p className="mt-4 text-[14px] leading-[2] text-[#94A3B8]">

                For questions regarding this policy,
                requests related to personal data,
                or privacy concerns, users may contact
                our support team through official
                communication channels.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SECURITY CTA */}

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

                Secure & Transparent
                Insurance Experience

              </h2>

              <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Protecting customer information
                remains one of our highest priorities.
                We continuously improve our security,
                privacy, and compliance practices to
                maintain trust and transparency.

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
                  "256-bit Encryption",
                  "24×7 Monitoring",
                  "Secure Infrastructure",
                  "Privacy First",
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

export default PrivacyPolicy;