import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
  MessageSquare,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    description: "Talk directly with our insurance experts.",
  },
  {
    icon: Mail,
    title: "Email Support",
    value: "support@spayinsurance.com",
    description: "Get assistance for claims and renewals.",
  },
  {
    icon: MapPin,
    title: "Head Office",
    value: "Mumbai, Maharashtra",
    description: "Visit our corporate office anytime.",
  },
];

const faqs = [
  {
    question: "How quickly are claims processed?",
    answer:
      "Most digital claims are processed within 24 to 72 hours depending on policy verification.",
  },
  {
    question: "Are all insurance providers verified?",
    answer:
      "Yes, all insurance providers listed on our platform are IRDAI approved and verified.",
  },
  {
    question: "Can I renew my policy online?",
    answer:
      "Absolutely. Renewals can be completed instantly through our digital portal.",
  },
];

const ContactUs = () => {
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

              <MessageSquare className="h-4 w-4 text-[#60A5FA]" />

              <span className="text-[12px] font-semibold text-[#60A5FA]">

                Contact Spay Insurance

              </span>

            </div>

            <h1 className="mt-5 text-[34px] font-bold leading-[1.05] tracking-[-1.5px] md:text-[52px]">

              We're Here To
              Help You Succeed

            </h1>

            <p className="mt-5 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

              Whether you need assistance with claims,
              renewals, partnerships, or insurance plans,
              our experts are ready to help.

            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                "24×7 Customer Support",
                "Fast Response Times",
                "Dedicated Insurance Experts",
                "Secure Assistance",
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

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-[26px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    value: "<PHONE>",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    value: "support@spay.live",
                  },
                  {
                    icon: Clock3,
                    title: "Response",
                    value: "< 2 Hours",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Mumbai",
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

                      <h3 className="mt-4 text-[15px] font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[18px] font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-2xl border border-[#132238] bg-[#071120] p-5">

                <span className="text-[12px] font-semibold text-[#60A5FA]">

                  CUSTOMER FIRST

                </span>

                <h3 className="mt-2 text-[20px] font-semibold">

                  Speak With Insurance Specialists

                </h3>

                <p className="mt-2 text-[13px] leading-[1.8] text-[#94A3B8]">

                  Claims, renewals, policy selection,
                  and support — our experts are ready.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* CONTACT OPTIONS */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="grid gap-5 md:grid-cols-3">

            {contactCards.map((item, index) => {

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

                    {item.description}

                  </p>

                  <div className="mt-5 h-[1px] bg-gradient-to-r from-[#2563EB] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* CONTACT FORM */}

      <section className="border-y border-[#132238] bg-[#071120]/50">

        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}

          <div>

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Get In Touch

            </span>

            <h2 className="mt-5 text-[38px] font-bold leading-[1.1] tracking-[-1.5px]">

              Let's Talk About
              Your Insurance Needs

            </h2>

            <p className="mt-5 text-[16px] leading-[1.9] text-[#94A3B8]">

              Whether you need help choosing
              the right plan, processing claims,
              renewing policies, or exploring
              partnership opportunities, our
              specialists are ready to assist.

            </p>

            {/* SUPPORT FEATURES */}

            <div className="mt-8 space-y-4">

              {[
                {
                  icon: Clock3,
                  title: "Fast Response",
                  desc: "Most enquiries answered within a few hours.",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure Communication",
                  desc: "Your personal information stays protected.",
                },
                {
                  icon: Headphones,
                  title: "Dedicated Support",
                  desc: "Expert assistance whenever you need it.",
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="flex gap-4 rounded-2xl border border-[#132238] bg-[#020817] p-4"
                  >

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/10">

                      <Icon className="h-5 w-5 text-[#60A5FA]" />

                    </div>

                    <div>

                      <h3 className="text-[15px] font-semibold">

                        {item.title}

                      </h3>

                      <p className="mt-1 text-[13px] leading-[1.8] text-[#94A3B8]">

                        {item.desc}

                      </p>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

          {/* FORM */}

          <div className="rounded-[28px] border border-[#132238] bg-[#020817] p-6 md:p-8">

            <h3 className="text-[24px] font-semibold">

              Send Us A Message

            </h3>

            <p className="mt-2 text-[14px] text-[#94A3B8]">

              Fill out the form and our team will get back to you.

            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-[13px] text-[#CBD5E1]">

                  First Name

                </label>

                <input
                  type="text"
                  placeholder="John"
                  className="h-[52px] w-full rounded-xl border border-[#1E293B] bg-[#071120] px-4 text-[14px] outline-none transition-all duration-300 focus:border-[#2563EB]"
                />

              </div>

              <div>

                <label className="mb-2 block text-[13px] text-[#CBD5E1]">

                  Last Name

                </label>

                <input
                  type="text"
                  placeholder="Doe"
                  className="h-[52px] w-full rounded-xl border border-[#1E293B] bg-[#071120] px-4 text-[14px] outline-none transition-all duration-300 focus:border-[#2563EB]"
                />

              </div>

            </div>

            <div className="mt-5">

              <label className="mb-2 block text-[13px] text-[#CBD5E1]">

                Email Address

              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="h-[52px] w-full rounded-xl border border-[#1E293B] bg-[#071120] px-4 text-[14px] outline-none transition-all duration-300 focus:border-[#2563EB]"
              />

            </div>

            <div className="mt-5">

              <label className="mb-2 block text-[13px] text-[#CBD5E1]">

                Phone Number

              </label>

              <input
                type="text"
                placeholder="+91 XXXXX XXXXX"
                className="h-[52px] w-full rounded-xl border border-[#1E293B] bg-[#071120] px-4 text-[14px] outline-none transition-all duration-300 focus:border-[#2563EB]"
              />

            </div>

            <div className="mt-5">

              <label className="mb-2 block text-[13px] text-[#CBD5E1]">

                Message

              </label>

              <textarea
                rows="5"
                placeholder="Tell us how we can help..."
                className="w-full rounded-xl border border-[#1E293B] bg-[#071120] px-4 py-3 text-[14px] outline-none transition-all duration-300 focus:border-[#2563EB]"
              />

            </div>

            <button className="mt-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#2563EB] text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

              Send Message

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

        </div>

      </section>

            {/* FAQ */}

      <section>

        <div className="mx-auto max-w-[980px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Support FAQ

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Frequently Asked Questions

            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-[16px] leading-[1.9] text-[#94A3B8]">

              Quick answers to common questions about
              insurance, claims, renewals, and support.

            </p>

          </div>

          <div className="mt-12 space-y-4">

            {faqs.map((item, index) => (

              <div
                key={index}
                className="group rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6 transition-all duration-300 hover:border-[#2563EB]"
              >

                <h3 className="text-[18px] font-semibold">

                  {item.question}

                </h3>

                <p className="mt-3 text-[14px] leading-[1.9] text-[#94A3B8]">

                  {item.answer}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 pb-20 md:px-8">

          <div className="relative overflow-hidden rounded-[32px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-10 md:p-12">

            {/* Glow Effects */}

            <div className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[#2563EB]/10 blur-[100px]" />

            <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#0EA5E9]/10 blur-[100px]" />

            <div className="relative z-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB]/15">

                <Headphones className="h-7 w-7 text-[#60A5FA]" />

              </div>

              <h2 className="mx-auto mt-6 max-w-[760px] text-[40px] font-bold leading-[1.1] tracking-[-1.5px]">

                Need Immediate Assistance?

              </h2>

              <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Speak directly with our insurance specialists
                for claims support, renewals, policy guidance,
                and personalized assistance.

              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <button className="flex h-[50px] items-center gap-2 rounded-full bg-[#2563EB] px-8 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                  Talk To Experts

                  <ArrowRight className="h-4 w-4" />

                </button>

                <button className="flex h-[50px] items-center rounded-full border border-[#1E293B] bg-[#071120]/70 px-8 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                  Call Support

                </button>

              </div>

              {/* Mini Trust Stats */}

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

                {[
                  "24×7 Support",
                  "< 2 Hour Response",
                  "PAN India Service",
                  "Secure Assistance",
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

export default ContactUs;