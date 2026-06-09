import {
  ArrowRight,
  Quote,
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  Star,
  Sparkles,
  Users,
} from "lucide-react";

const stories = [
  {
    name: "Rahul Mehta",
    role: "Business Owner",
    type: "Health Insurance",
    story:
      "The claim process was incredibly smooth and transparent. Their support team guided me at every step during a medical emergency.",
  },
  {
    name: "Priya Sharma",
    role: "Working Professional",
    type: "Life Insurance",
    story:
      "I was able to purchase and manage my policy completely online. Fast approvals and excellent customer experience.",
  },
  {
    name: "Amit Verma",
    role: "Startup Founder",
    type: "Travel Insurance",
    story:
      "Their travel insurance support saved me during an international emergency. Highly reliable and professional team.",
  },
];

const highlights = [
  {
    icon: Users,
    number: "1M+",
    label: "Happy Customers",
  },
  {
    icon: ShieldCheck,
    number: "98.7%",
    label: "Claims Approved",
  },
  {
    icon: HeartHandshake,
    number: "24×7",
    label: "Customer Support",
  },
  {
    icon: TrendingUp,
    number: "150+",
    label: "Insurance Partners",
  },
];

const CustomerStories = () => {
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

                Real Customer Experiences

              </span>

            </div>

            <h1 className="mt-5 text-[34px] font-bold leading-[1.05] tracking-[-1.5px] md:text-[52px]">

              Trusted By Millions
              Across India

            </h1>

            <p className="mt-5 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

              Discover how customers use our platform
              for secure protection, fast claim
              settlements, and seamless insurance
              experiences.

            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                "1M+ Happy Customers",
                "98.7% Claims Approved",
                "150+ Insurance Partners",
                "24×7 Expert Support",
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

              <button className="flex h-[48px] items-center gap-2 rounded-full bg-[#2563EB] px-7 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                Explore Stories

                <ArrowRight className="h-4 w-4" />

              </button>

              <button className="flex h-[48px] items-center rounded-full border border-[#1E293B] bg-[#071120]/70 px-7 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                Customer Reviews

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-[26px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">

              <div className="grid gap-4 sm:grid-cols-2">

                {highlights.map((item, index) => {

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

                        {item.number}

                      </h3>

                      <p className="mt-1 text-[13px] text-[#94A3B8]">

                        {item.label}

                      </p>

                    </div>

                  );

                })}

              </div>

              <div className="mt-4 rounded-2xl border border-[#132238] bg-[#071120] p-5">

                <span className="text-[12px] font-semibold text-[#60A5FA]">

                  CUSTOMER TRUST

                </span>

                <h3 className="mt-2 text-[20px] font-semibold">

                  Insurance Experiences That Matter

                </h3>

                <p className="mt-2 text-[13px] leading-[1.8] text-[#94A3B8]">

                  Millions rely on our platform for
                  reliable protection, fast support,
                  and transparent service.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* TRUST HIGHLIGHTS */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {highlights.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="group rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10 transition-all duration-300 group-hover:bg-[#2563EB]/20">

                    <Icon className="h-5 w-5 text-[#60A5FA]" />

                  </div>

                  <h3 className="mt-5 text-[34px] font-bold tracking-[-1px]">

                    {item.number}

                  </h3>

                  <p className="mt-2 text-[14px] text-[#94A3B8]">

                    {item.label}

                  </p>

                  <div className="mt-5 h-[1px] bg-gradient-to-r from-[#2563EB] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* CUSTOMER STORIES */}

      <section className="border-y border-[#132238] bg-[#071120]/50">

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Customer Success Stories

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              What Our Customers Say

            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

              Real stories from customers who trust
              us for health, life, travel, and
              general insurance solutions.

            </p>

          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">

            {stories.map((item, index) => (

              <div
                key={index}
                className="group rounded-[26px] border border-[#132238] bg-[#020817] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10">

                    <Quote className="h-5 w-5 text-[#60A5FA]" />

                  </div>

                  <div className="flex gap-1">

                    {[1, 2, 3, 4, 5].map((star) => (

                      <Star
                        key={star}
                        className="h-4 w-4 fill-[#60A5FA] text-[#60A5FA]"
                      />

                    ))}

                  </div>

                </div>

                <p className="mt-6 text-[14px] leading-[2] text-[#CBD5E1]">

                  "{item.story}"

                </p>

                <div className="mt-8 border-t border-[#132238] pt-5">

                  <h3 className="text-[18px] font-semibold">

                    {item.name}

                  </h3>

                  <p className="mt-1 text-[13px] text-[#94A3B8]">

                    {item.role}

                  </p>

                  <div className="mt-4 inline-flex rounded-full border border-[#1E293B] bg-[#071120] px-4 py-2 text-[12px] text-[#CBD5E1]">

                    {item.type}

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* SOCIAL PROOF BANNER */}

          <div className="mt-14 overflow-hidden rounded-[28px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-8">

            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">

              <div>

                <span className="inline-flex rounded-full border border-[#1E293B] px-3 py-1 text-[12px] font-semibold text-[#60A5FA]">

                  Trusted Nationwide

                </span>

                <h3 className="mt-4 text-[30px] font-bold leading-[1.15]">

                  Millions Trust Spay
                  For Insurance Protection

                </h3>

                <p className="mt-4 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

                  Our mission is to make insurance
                  simpler, more transparent, and
                  accessible through technology,
                  trusted partners, and customer-first
                  service.

                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    1M+

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Customers

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    98.7%

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Claim Success

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    150+

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Partners

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    24×7

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Support

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* WHY CUSTOMERS TRUST US */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">

            {/* LEFT */}

            <div>

              <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

                Why Customers Choose Us

              </span>

              <h2 className="mt-5 text-[38px] font-bold leading-[1.1] tracking-[-1.5px]">

                Insurance Experiences
                Built Around Trust

              </h2>

              <p className="mt-5 text-[16px] leading-[1.9] text-[#94A3B8]">

                From policy discovery to claim settlement,
                we focus on transparency, simplicity,
                and exceptional customer support.
                Every interaction is designed to create
                confidence and peace of mind.

              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Fast and transparent claims process",
                  "Trusted IRDAI-approved insurance partners",
                  "Dedicated support for renewals and assistance",
                  "Completely digital insurance management",
                  "Secure and compliant policy management",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-[#132238] bg-[#071120]/70 px-5 py-4"
                  >

                    <ShieldCheck className="h-5 w-5 text-[#60A5FA]" />

                    <span className="text-[14px] text-[#E2E8F0]">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div className="rounded-[28px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-6">

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  {
                    value: "4.9/5",
                    label: "Average Customer Rating",
                  },
                  {
                    value: "95%",
                    label: "Customer Retention Rate",
                  },
                  {
                    value: "24h",
                    label: "Average Claim Response",
                  },
                  {
                    value: "PAN",
                    label: "India-Wide Coverage",
                  },
                ].map((item, index) => (

                  <div
                    key={index}
                    className="rounded-2xl border border-[#132238] bg-[#020817] p-5"
                  >

                    <h3 className="text-[32px] font-bold">

                      {item.value}

                    </h3>

                    <p className="mt-2 text-[13px] leading-[1.7] text-[#94A3B8]">

                      {item.label}

                    </p>

                  </div>

                ))}

              </div>

              <div className="mt-5 rounded-2xl border border-[#132238] bg-[#020817] p-5">

                <div className="flex items-center gap-2">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                      key={star}
                      className="h-4 w-4 fill-[#60A5FA] text-[#60A5FA]"
                    />

                  ))}

                </div>

                <h3 className="mt-4 text-[18px] font-semibold">

                  Consistently Rated Excellent

                </h3>

                <p className="mt-2 text-[13px] leading-[1.8] text-[#94A3B8]">

                  Customers consistently praise our
                  fast support, simple processes,
                  and transparent claim experiences.

                </p>

              </div>

            </div>

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

                <HeartHandshake className="h-7 w-7 text-[#60A5FA]" />

              </div>

              <h2 className="mx-auto mt-6 max-w-[760px] text-[40px] font-bold leading-[1.1] tracking-[-1.5px]">

                Join Millions Of
                Protected Customers

              </h2>

              <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Experience trusted insurance solutions,
                seamless claims, expert guidance,
                and customer-first service backed by
                leading insurance partners.

              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <button className="flex h-[50px] items-center gap-2 rounded-full bg-[#2563EB] px-8 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                  Explore Insurance

                  <ArrowRight className="h-4 w-4" />

                </button>

                <button className="flex h-[50px] items-center rounded-full border border-[#1E293B] bg-[#071120]/70 px-8 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                  Talk To Experts

                </button>

              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

                {[
                  "1M+ Customers",
                  "98.7% Claims Approved",
                  "150+ Partners",
                  "24×7 Support",
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

export default CustomerStories; 