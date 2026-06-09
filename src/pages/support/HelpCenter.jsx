import {
  Search,
  ArrowRight,
  ShieldCheck,
  FileText,
  HeartHandshake,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Clock3,
  HelpCircle,
} from "lucide-react";

const faqCategories = [
  {
    icon: ShieldCheck,
    title: "Insurance Policies",
    description:
      "Learn about insurance plans, benefits, coverage, and policy details.",
  },
  {
    icon: FileText,
    title: "Claims & Renewals",
    description:
      "Get assistance with claims, policy renewals, and documentation.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Support",
    description:
      "Contact support experts for account and insurance-related queries.",
  },
];

const faqs = [
  {
    question: "How can I purchase insurance online?",
    answer:
      "You can compare plans, select coverage, and complete the policy purchase digitally through our secure platform.",
  },
  {
    question: "How long does claim processing take?",
    answer:
      "Claim timelines vary by insurer and policy type, but most digital claims are processed within 24–72 hours.",
  },
  {
    question: "Can I renew my insurance policy online?",
    answer:
      "Yes, policy renewals can be completed instantly through your customer dashboard.",
  },
  {
    question: "Are all insurers verified?",
    answer:
      "Yes, all insurance providers listed on our platform are IRDAI-approved and verified.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact support via phone, email, or live chat for immediate assistance.",
  },
];

const supportOptions = [
  "24×7 customer assistance",
  "Dedicated claims support",
  "Fast digital renewals",
  "Secure insurance management",
];

const HelpCenter = () => {
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

                Insurance Help & Support Center

              </span>

            </div>

            <h1 className="mt-5 text-[34px] font-bold leading-[1.05] tracking-[-1.5px] md:text-[52px]">

              How Can We
              Help You Today?

            </h1>

            <p className="mt-5 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

              Find answers to insurance questions,
              claims assistance, renewals, policy
              management, and customer support
              resources—all in one place.

            </p>

            {/* SUPPORT CHIPS */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                "24×7 Customer Assistance",
                "Dedicated Claims Support",
                "Instant Policy Renewals",
                "Expert Insurance Guidance",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-[#132238] bg-[#071120]/60 px-3 py-3"
                >

                  <CheckCircle2 className="h-4 w-4 text-[#60A5FA]" />

                  <span className="text-[13px] text-[#E2E8F0]">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            {/* SEARCH */}

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#132238] bg-[#071120]/80 p-2 backdrop-blur-xl">

              <div className="flex items-center">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#020817]">

                  <Search className="h-5 w-5 text-[#60A5FA]" />

                </div>

                <input
                  type="text"
                  placeholder="Search help articles, FAQs, claims, renewals..."
                  className="h-[52px] flex-1 bg-transparent px-4 text-[14px] outline-none placeholder:text-[#64748B]"
                />

                <button className="flex h-[48px] items-center rounded-xl bg-[#2563EB] px-6 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                  Search

                </button>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-[26px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: HelpCircle,
                    value: "500+",
                    label: "Help Articles",
                  },
                  {
                    icon: ShieldCheck,
                    value: "24×7",
                    label: "Support Access",
                  },
                  {
                    icon: Clock3,
                    value: "< 2 Hours",
                    label: "Response Time",
                  },
                  {
                    icon: HeartHandshake,
                    value: "Expert",
                    label: "Insurance Support",
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

              {/* SUPPORT BANNER */}

              <div className="mt-4 rounded-2xl border border-[#132238] bg-[#071120] p-5">

                <span className="text-[12px] font-semibold text-[#60A5FA]">

                  CUSTOMER SUPPORT

                </span>

                <h3 className="mt-2 text-[20px] font-semibold">

                  Fast Answers, Real Experts

                </h3>

                <p className="mt-2 text-[13px] leading-[1.8] text-[#94A3B8]">

                  Get help with claims, renewals,
                  policy management, documentation,
                  and insurance-related queries.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* HELP CATEGORIES */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Help Categories

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Find The Right Support

            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

              Browse support categories to quickly
              find answers, resources, and assistance
              for your insurance needs.

            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {faqCategories.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="group rounded-[26px] border border-[#132238] bg-[#071120]/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10 transition-all duration-300 group-hover:bg-[#2563EB]/20">

                    <Icon className="h-6 w-6 text-[#60A5FA]" />

                  </div>

                  <h3 className="mt-6 text-[20px] font-semibold">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.9] text-[#94A3B8]">

                    {item.description}

                  </p>

                  <button className="mt-6 flex items-center gap-2 text-[14px] font-semibold text-[#60A5FA]">

                    Explore Category

                    <ArrowRight className="h-4 w-4" />

                  </button>

                  <div className="mt-5 h-[1px] bg-gradient-to-r from-[#2563EB] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* FAQ SECTION */}

      <section className="border-y border-[#132238] bg-[#071120]/50">

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Frequently Asked Questions

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Common Insurance Questions

            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

              Quick answers to the questions we
              receive most often from customers.

            </p>

          </div>

          <div className="mt-12 space-y-4">

            {faqs.map((item, index) => (

              <div
                key={index}
                className="group rounded-[24px] border border-[#132238] bg-[#020817] p-6 transition-all duration-300 hover:border-[#2563EB]"
              >

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/10">

                    <HelpCircle className="h-5 w-5 text-[#60A5FA]" />

                  </div>

                  <div>

                    <h3 className="text-[18px] font-semibold">

                      {item.question}

                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.9] text-[#94A3B8]">

                      {item.answer}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* KNOWLEDGE BANNER */}

          <div className="mt-14 overflow-hidden rounded-[28px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-8">

            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">

              <div>

                <span className="inline-flex rounded-full border border-[#1E293B] px-3 py-1 text-[12px] font-semibold text-[#60A5FA]">

                  Knowledge Base

                </span>

                <h3 className="mt-4 text-[30px] font-bold leading-[1.15]">

                  Insurance Support
                  Made Simple

                </h3>

                <p className="mt-4 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

                  Access policy guidance, claims
                  assistance, renewal support,
                  and insurance resources through
                  our centralized help center.

                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    500+

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Help Articles

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    24×7

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Assistance

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    Expert

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Guidance

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    Fast

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Resolution

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* SUPPORT OPTIONS */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Support Channels

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Get Assistance Your Way

            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

              Connect with our support team through
              multiple channels for claims assistance,
              renewals, policy management, and general inquiries.

            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {[
              {
                icon: Phone,
                title: "Call Support",
                value: "+91 XXXXX XXXXX",
                desc: "Speak directly with our support specialists.",
              },
              {
                icon: Mail,
                title: "Email Support",
                value: "support@yourdomain.com",
                desc: "Receive detailed assistance via email.",
              },
              {
                icon: MessageCircle,
                title: "Live Assistance",
                value: "24×7 Available",
                desc: "Get help whenever you need it.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="group rounded-[26px] border border-[#132238] bg-[#071120]/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10 transition-all duration-300 group-hover:bg-[#2563EB]/20">

                    <Icon className="h-6 w-6 text-[#60A5FA]" />

                  </div>

                  <h3 className="mt-6 text-[20px] font-semibold">

                    {item.title}

                  </h3>

                  <p className="mt-3 text-[17px] font-medium text-white">

                    {item.value}

                  </p>

                  <p className="mt-3 text-[14px] leading-[1.9] text-[#94A3B8]">

                    {item.desc}

                  </p>

                  <div className="mt-5 h-[1px] bg-gradient-to-r from-[#2563EB] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 pb-20 md:px-8">

          <div className="relative overflow-hidden rounded-[32px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-10 md:p-12">

            <div className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[#2563EB]/10 blur-[100px]" />

            <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#0EA5E9]/10 blur-[100px]" />

            <div className="relative z-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB]/15">

                {/* <Headphones className="h-7 w-7 text-[#60A5FA]" /> */}

              </div>

              <h2 className="mx-auto mt-6 max-w-[760px] text-[40px] font-bold leading-[1.1] tracking-[-1.5px]">

                Still Need Help?

              </h2>

              <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Our insurance specialists are ready
                to assist with claims, renewals,
                policy questions, and account support.
                Get the answers you need quickly.

              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <button className="flex h-[50px] items-center gap-2 rounded-full bg-[#2563EB] px-8 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                  Contact Support

                  <ArrowRight className="h-4 w-4" />

                </button>

                <button className="flex h-[50px] items-center rounded-full border border-[#1E293B] bg-[#071120]/70 px-8 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                  Browse FAQs

                </button>

              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

                {[
                  "24×7 Assistance",
                  "Expert Support",
                  "< 2 Hour Response",
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

export default HelpCenter;