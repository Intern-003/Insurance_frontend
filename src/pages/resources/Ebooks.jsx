import {
  ArrowRight,
  BookOpen,
  Download,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  FileText,
  Clock3,
  Star,
  CheckCircle2,
} from "lucide-react";

const featuredEbook = {
  title: "The Complete Insurance Planning Guide 2026",
  description:
    "A premium guide covering health, life, vehicle, and travel insurance with expert financial planning insights.",
  downloads: "25K+ Downloads",
  pages: "120 Pages",
};

const ebooks = [
  {
    title: "Health Insurance Master Guide",
    category: "Health Insurance",
    pages: "80 Pages",
  },
  {
    title: "Vehicle Insurance Handbook",
    category: "Vehicle Insurance",
    pages: "65 Pages",
  },
  {
    title: "Claims & Settlement Blueprint",
    category: "Claims",
    pages: "52 Pages",
  },
  {
    title: "Financial Protection Planning",
    category: "Financial Planning",
    pages: "95 Pages",
  },
];

const benefits = [
  "Expert-written insurance insights",
  "Easy-to-understand claim guidance",
  "Financial planning strategies",
  "Practical policy comparison tips",
];

const Ebooks = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020817] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-[#132238]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_32%)]" />

        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#2563EB]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1180px] px-5 py-14 md:px-8">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120]/80 px-4 py-1.5 backdrop-blur-xl">

                <Sparkles className="h-4 w-4 text-[#60A5FA]" />

                <span className="text-[12px] font-semibold text-[#60A5FA]">

                  Premium Insurance Ebooks

                </span>

              </div>

              <h1 className="mt-5 text-[34px] font-bold leading-[1.05] tracking-[-1.5px] md:text-[52px]">

                Learn Insurance
                Through Expert
                <span className="bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
                  {" "}Ebooks
                </span>

              </h1>

              <p className="mt-5 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

                Access premium insurance guides,
                claim resources, financial planning
                handbooks, and educational materials
                designed to simplify complex topics.

              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {[
                  "25K+ Downloads",
                  "Expert Written Content",
                  "Insurance Planning Guides",
                  "Free Educational Resources",
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

              <div className="mt-8 flex flex-wrap gap-3">

                <button className="flex h-[48px] items-center gap-2 rounded-full bg-[#2563EB] px-7 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                  Explore Ebooks

                  <ArrowRight className="h-4 w-4" />

                </button>

                <button className="flex h-[48px] items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120]/70 px-7 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                  <Download className="h-4 w-4" />

                  Free Downloads

                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div className="rounded-[26px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">

                <div className="grid gap-4 sm:grid-cols-2">

                  {[
                    {
                      icon: Download,
                      value: "25K+",
                      label: "Downloads",
                    },
                    {
                      icon: BookOpen,
                      value: "120+",
                      label: "Pages",
                    },
                    {
                      icon: FileText,
                      value: "50+",
                      label: "Resources",
                    },
                    {
                      icon: TrendingUp,
                      value: "Weekly",
                      label: "Updates",
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

                <div className="mt-4 rounded-2xl border border-[#132238] bg-[#071120] p-5">

                  <span className="text-[12px] font-semibold text-[#60A5FA]">

                    KNOWLEDGE LIBRARY

                  </span>

                  <h3 className="mt-2 text-[20px] font-semibold">

                    Learn From Industry Experts

                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.8] text-[#94A3B8]">

                    Premium ebooks covering claims,
                    planning, policy selection,
                    and insurance optimization.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* FEATURED EBOOK */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="overflow-hidden rounded-[28px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)]">

            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

              {/* COVER */}

              <div className="relative flex items-center justify-center border-b border-[#132238] bg-[#020817] p-10 lg:border-b-0 lg:border-r">

                <div className="absolute h-[240px] w-[240px] rounded-full bg-[#2563EB]/10 blur-[90px]" />

                <div className="relative w-[220px] rounded-[24px] border border-[#1E293B] bg-[#071120] p-6 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">

                  <div className="flex h-[280px] items-center justify-center rounded-[18px] border border-[#132238] bg-[#020817]">

                    <BookOpen className="h-16 w-16 text-[#60A5FA]" />

                  </div>

                </div>

              </div>

              {/* CONTENT */}

              <div className="p-8 md:p-10">

                <span className="inline-flex rounded-full border border-[#1E293B] bg-[#020817] px-4 py-2 text-[12px] text-[#CBD5E1]">

                  Featured Ebook

                </span>

                <h2 className="mt-6 text-[36px] font-bold leading-[1.15] tracking-[-1.5px]">

                  The Complete Guide To
                  Insurance Planning In India

                </h2>

                <p className="mt-5 max-w-[650px] text-[15px] leading-[1.9] text-[#94A3B8]">

                  Learn how to choose the right policies,
                  avoid common insurance mistakes,
                  understand claims, and build
                  long-term financial protection
                  for yourself and your family.

                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  {[
                    "120 Pages",
                    "Expert Written",
                    "Free Download",
                    "Updated 2026",
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="rounded-full border border-[#1E293B] bg-[#020817] px-4 py-2 text-[12px] text-[#CBD5E1]"
                    >

                      {item}

                    </div>

                  ))}

                </div>

                <div className="mt-8 flex flex-wrap gap-3">

                  <button className="flex h-[48px] items-center gap-2 rounded-full bg-[#2563EB] px-7 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                    Download Ebook

                    <Download className="h-4 w-4" />

                  </button>

                  <button className="flex h-[48px] items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120]/70 px-7 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                    Preview Content

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* EBOOK CATEGORIES */}

      <section className="border-y border-[#132238] bg-[#071120]/50">

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Ebook Library

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Browse By Category

            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-[16px] leading-[1.9] text-[#94A3B8]">

              Explore insurance knowledge
              organized into focused categories
              for faster learning.

            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {[
              "Health Insurance",
              "Life Insurance",
              "Claims Management",
              "Financial Planning",
              "Travel Insurance",
              "Business Insurance",
              "Policy Comparison",
              "Insurance Basics",
            ].map((item, index) => (

              <div
                key={index}
                className="group rounded-[24px] border border-[#132238] bg-[#020817] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10 transition-all duration-300 group-hover:bg-[#2563EB]/20">

                  <BookOpen className="h-5 w-5 text-[#60A5FA]" />

                </div>

                <h3 className="mt-5 text-[18px] font-semibold">

                  {item}

                </h3>

                <p className="mt-2 text-[13px] text-[#94A3B8]">

                  Premium guides and resources

                </p>

                <div className="mt-5 h-[1px] bg-gradient-to-r from-[#2563EB] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

              </div>

            ))}

          </div>

          {/* KNOWLEDGE STATS */}

          <div className="mt-14 overflow-hidden rounded-[28px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-8">

            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">

              <div>

                <span className="inline-flex rounded-full border border-[#1E293B] px-3 py-1 text-[12px] font-semibold text-[#60A5FA]">

                  Learning Platform

                </span>

                <h3 className="mt-4 text-[30px] font-bold leading-[1.15]">

                  Knowledge Designed
                  For Better Decisions

                </h3>

                <p className="mt-4 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

                  Our ebook collection helps customers
                  understand insurance products,
                  optimize coverage, and make
                  confident financial decisions.

                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">
                  <div className="text-[28px] font-bold">25K+</div>
                  <div className="mt-1 text-[13px] text-[#94A3B8]">
                    Downloads
                  </div>
                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">
                  <div className="text-[28px] font-bold">50+</div>
                  <div className="mt-1 text-[13px] text-[#94A3B8]">
                    Ebooks
                  </div>
                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">
                  <div className="text-[28px] font-bold">120+</div>
                  <div className="mt-1 text-[13px] text-[#94A3B8]">
                    Resources
                  </div>
                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">
                  <div className="text-[28px] font-bold">Free</div>
                  <div className="mt-1 text-[13px] text-[#94A3B8]">
                    Access
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* EBOOK LIBRARY */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

                Ebook Collection

              </span>

              <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

                Popular Downloads

              </h2>

              <p className="mt-4 max-w-[650px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Explore our most downloaded
                insurance resources, guides,
                and educational handbooks.

              </p>

            </div>

            <button className="flex h-[48px] items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120] px-6 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

              Browse Library

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {ebooks.map((ebook, index) => (

              <div
                key={index}
                className="group rounded-[26px] border border-[#132238] bg-[#071120]/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]"
              >

                {/* Cover */}

                <div className="flex h-[180px] items-center justify-center rounded-[18px] border border-[#132238] bg-[#020817]">

                  <BookOpen className="h-12 w-12 text-[#60A5FA]" />

                </div>

                {/* Content */}

                <div className="mt-6">

                  <div className="inline-flex rounded-full border border-[#1E293B] bg-[#020817] px-3 py-1 text-[11px] text-[#CBD5E1]">

                    {ebook.category}
                  </div>

                  <h3 className="mt-4 text-[20px] font-semibold leading-[1.5]">

                    {ebook.title}

                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.9] text-[#94A3B8]">

                    {ebook.description}

                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <span className="text-[13px] text-[#94A3B8]">

                      {ebook.pages} Pages

                    </span>

                    <span className="text-[13px] text-[#94A3B8]">

                      {ebook.downloads} Downloads

                    </span>

                  </div>

                  <button className="mt-6 flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#2563EB] text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                    Download Ebook

                    <Download className="h-4 w-4" />

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* LEARNING BENEFITS */}

      <section className="border-y border-[#132238] bg-[#071120]/50">

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Why Read Our Ebooks

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Learn From Trusted Experts

            </h2>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-[26px] border border-[#132238] bg-[#020817] p-6">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10">

                <ShieldCheck className="h-6 w-6 text-[#60A5FA]" />

              </div>

              <h3 className="mt-6 text-[20px] font-semibold">

                Practical Knowledge

              </h3>

              <p className="mt-4 text-[14px] leading-[1.9] text-[#94A3B8]">

                Learn real-world insurance concepts
                with actionable insights and examples.

              </p>

            </div>

            <div className="rounded-[26px] border border-[#132238] bg-[#020817] p-6">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10">

                <TrendingUp className="h-6 w-6 text-[#60A5FA]" />

              </div>

              <h3 className="mt-6 text-[20px] font-semibold">

                Better Decisions

              </h3>

              <p className="mt-4 text-[14px] leading-[1.9] text-[#94A3B8]">

                Understand coverage options and
                choose policies confidently.

              </p>

            </div>

            <div className="rounded-[26px] border border-[#132238] bg-[#020817] p-6">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10">

                <BookOpen className="h-6 w-6 text-[#60A5FA]" />

              </div>

              <h3 className="mt-6 text-[20px] font-semibold">

                Expert Guidance

              </h3>

              <p className="mt-4 text-[14px] leading-[1.9] text-[#94A3B8]">

                Access professionally researched
                educational resources anytime.

              </p>

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

                <Download className="h-7 w-7 text-[#60A5FA]" />

              </div>

              <h2 className="mx-auto mt-6 max-w-[760px] text-[40px] font-bold leading-[1.1] tracking-[-1.5px]">

                Start Learning Today

              </h2>

              <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Download free insurance ebooks,
                improve your financial knowledge,
                and make smarter protection decisions.

              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <button className="flex h-[50px] items-center gap-2 rounded-full bg-[#2563EB] px-8 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                  Download Resources

                  <Download className="h-4 w-4" />

                </button>

                <button className="flex h-[50px] items-center rounded-full border border-[#1E293B] bg-[#071120]/70 px-8 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                  Explore Library

                </button>

              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

                {[
                  "25K+ Downloads",
                  "50+ Ebooks",
                  "120+ Resources",
                  "Free Access",
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

export default Ebooks;