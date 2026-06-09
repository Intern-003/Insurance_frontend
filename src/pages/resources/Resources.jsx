import {
  ArrowRight,
  BookOpen,
  FileText,
  Newspaper,
  PlayCircle,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Download,
  Clock3,
} from "lucide-react";

const featuredResources = [
  {
    icon: BookOpen,
    title: "Insurance Knowledge Hub",
    description:
      "Explore expert-written insurance guides, tips, and policy explainers.",
    button: "Explore Articles",
  },
  {
    icon: FileText,
    title: "Policy & Claim Guides",
    description:
      "Understand claims, renewals, premium calculations, and policy benefits.",
    button: "Read Guides",
  },
  {
    icon: Newspaper,
    title: "Industry Insights",
    description:
      "Stay updated with the latest insurance trends, regulations, and innovations.",
    button: "View Insights",
  },
];

const categories = [
  {
    title: "Insurance Basics",
    articles: "120+ Articles",
  },
  {
    title: "Claim Assistance",
    articles: "45+ Guides",
  },
  {
    title: "Health Insurance",
    articles: "85+ Resources",
  },
  {
    title: "Life Insurance",
    articles: "60+ Resources",
  },
];

const latestResources = [
  {
    title: "How To Choose The Right Health Insurance Plan",
    category: "Health Insurance",
    readTime: "5 min read",
  },
  {
    title: "Everything You Need To Know About Claim Settlement",
    category: "Claims",
    readTime: "8 min read",
  },
  {
    title: "Top Benefits Of Digital Insurance Platforms",
    category: "Technology",
    readTime: "6 min read",
  },
];

const Resources = () => {
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

                Insurance Resources & Insights

              </span>

            </div>

            <h1 className="mt-5 text-[34px] font-bold leading-[1.05] tracking-[-1.5px] md:text-[52px]">

              Learn Insurance
              The Smart Way

            </h1>

            <p className="mt-5 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

              Explore expert-written guides,
              policy explainers, claim resources,
              industry updates, and practical
              insights designed to help you make
              informed insurance decisions.

            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                "500+ Educational Resources",
                "Expert Written Content",
                "Claims & Renewal Guides",
                "Updated Industry Insights",
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

                Explore Resources

                <ArrowRight className="h-4 w-4" />

              </button>

              <button className="flex h-[48px] items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120]/70 px-7 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                <PlayCircle className="h-4 w-4" />

                Watch Tutorials

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-[26px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: BookOpen,
                    value: "500+",
                    label: "Resources",
                  },
                  {
                    icon: FileText,
                    value: "150+",
                    label: "Guides",
                  },
                  {
                    icon: Newspaper,
                    value: "Weekly",
                    label: "Insights",
                  },
                  {
                    icon: TrendingUp,
                    value: "24×7",
                    label: "Learning Access",
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

                  KNOWLEDGE HUB

                </span>

                <h3 className="mt-2 text-[20px] font-semibold">

                  Learn From Insurance Experts

                </h3>

                <p className="mt-2 text-[13px] leading-[1.8] text-[#94A3B8]">

                  Guides, tutorials, industry trends,
                  policy explainers, and actionable advice.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* FEATURED RESOURCES */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

                Featured Resources

              </span>

              <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

                Everything You Need
                To Know About Insurance

              </h2>

              <p className="mt-4 max-w-[650px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Discover carefully curated content
                covering policies, claims, renewals,
                regulations, and insurance best practices.

              </p>

            </div>

            <button className="flex h-[48px] items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120] px-6 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

              Browse Library

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {featuredResources.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="group rounded-[26px] border border-[#132238] bg-[#071120]/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10 transition-all duration-300 group-hover:bg-[#2563EB]/20">

                    <Icon className="h-6 w-6 text-[#60A5FA]" />

                  </div>

                  <h3 className="mt-6 text-[20px] font-semibold leading-[1.4]">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.9] text-[#94A3B8]">

                    {item.description}

                  </p>

                  <button className="mt-6 flex items-center gap-2 text-[14px] font-semibold text-[#60A5FA]">

                    {item.button}

                    <ArrowRight className="h-4 w-4" />

                  </button>

                  <div className="mt-5 h-[1px] bg-gradient-to-r from-[#2563EB] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* RESOURCE CATEGORIES */}

      <section className="border-y border-[#132238] bg-[#071120]/50">

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Resource Categories

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Browse By Topic

            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-[16px] leading-[1.9] text-[#94A3B8]">

              Explore insurance topics organized
              by category to quickly find the
              information you're looking for.

            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {categories.map((item, index) => (

              <div
                key={index}
                className="group rounded-[24px] border border-[#132238] bg-[#020817] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10 transition-all duration-300 group-hover:bg-[#2563EB]/20">

                  <ShieldCheck className="h-5 w-5 text-[#60A5FA]" />

                </div>

                <h3 className="mt-5 text-[20px] font-semibold">

                  {item.title}

                </h3>

                <p className="mt-2 text-[13px] text-[#94A3B8]">

                  {item.articles}

                </p>

                <div className="mt-5 h-[1px] bg-gradient-to-r from-[#2563EB] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

              </div>

            ))}

          </div>

          {/* KNOWLEDGE BANNER */}

          <div className="mt-14 overflow-hidden rounded-[28px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-8">

            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">

              <div>

                <span className="inline-flex rounded-full border border-[#1E293B] px-3 py-1 text-[12px] font-semibold text-[#60A5FA]">

                  Insurance Education

                </span>

                <h3 className="mt-4 text-[30px] font-bold leading-[1.15]">

                  Making Insurance
                  Easier To Understand

                </h3>

                <p className="mt-4 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

                  Our mission is to simplify insurance
                  through educational content,
                  practical guides, and industry
                  insights that help customers make
                  informed financial decisions.

                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    500+

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Resources

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    150+

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Guides

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    Weekly

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Insights

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    24×7

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Access

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* LATEST RESOURCES */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

                Latest Insights

              </span>

              <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

                Recently Published

              </h2>

              <p className="mt-4 max-w-[650px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Stay informed with the latest
                insurance updates, practical advice,
                and industry trends.

              </p>

            </div>

            <button className="flex h-[48px] items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120] px-6 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

              View All Articles

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

          <div className="mt-12 space-y-4">

            {latestResources.map((item, index) => (

              <div
                key={index}
                className="group rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6 transition-all duration-300 hover:border-[#2563EB]"
              >

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <div className="flex flex-wrap items-center gap-3">

                      <div className="rounded-full border border-[#1E293B] bg-[#020817] px-4 py-2 text-[12px] text-[#CBD5E1]">

                        {item.category}

                      </div>

                      <div className="flex items-center gap-2 text-[12px] text-[#94A3B8]">

                        <Clock3 className="h-4 w-4" />

                        {item.readTime}

                      </div>

                    </div>

                    <h3 className="mt-4 text-[22px] font-semibold leading-[1.5]">

                      {item.title}

                    </h3>

                  </div>

                  <button className="flex h-[46px] items-center gap-2 rounded-full bg-[#2563EB] px-6 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                    Read Now

                    <ArrowRight className="h-4 w-4" />

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* DOWNLOAD CTA */}

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

                Download Free Insurance Resources

              </h2>

              <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Access premium insurance guides,
                claim checklists, policy comparison
                resources, and financial planning
                materials — completely free.

              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <button className="flex h-[50px] items-center gap-2 rounded-full bg-[#2563EB] px-8 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                  Download Resources

                  <ArrowRight className="h-4 w-4" />

                </button>

                <button className="flex h-[50px] items-center rounded-full border border-[#1E293B] bg-[#071120]/70 px-8 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                  Explore Library

                </button>

              </div>

              {/* TRUST STATS */}

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

                {[
                  "500+ Resources",
                  "150+ Guides",
                  "Weekly Updates",
                  "24×7 Access",
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

export default Resources;