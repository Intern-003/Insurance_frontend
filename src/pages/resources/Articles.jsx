import {
  ArrowRight,
  Clock3,
  Search,
  Newspaper,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  BookOpen,
  HeartPulse,
  Car,
} from "lucide-react";

const featuredArticle = {
  category: "Insurance Insights",
  title: "How Digital Insurance Platforms Are Transforming India",
  description:
    "Discover how modern insurance technology is improving claims, renewals, customer experiences, and financial protection across India.",
  readTime: "8 min read",
};

const articles = [
  {
    icon: HeartPulse,
    category: "Health Insurance",
    title: "5 Things To Check Before Buying Health Insurance",
    readTime: "6 min read",
  },
  {
    icon: ShieldCheck,
    category: "Claims",
    title: "Complete Guide To Insurance Claim Settlement",
    readTime: "7 min read",
  },
  {
    icon: Car,
    category: "Vehicle Insurance",
    title: "Why Comprehensive Car Insurance Matters",
    readTime: "5 min read",
  },
  {
    icon: BookOpen,
    category: "Life Insurance",
    title: "Understanding Term Insurance Benefits",
    readTime: "9 min read",
  },
];

const categories = [
  "Health Insurance",
  "Life Insurance",
  "Travel Insurance",
  "Claims",
  "Financial Planning",
  "Vehicle Insurance",
];

const Articles = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020817] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-[#132238]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_32%)]" />

        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#2563EB]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1180px] px-5 py-14 md:px-8">

          <div className="max-w-[760px]">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120]/80 px-4 py-1.5">

              <Sparkles className="h-4 w-4 text-[#60A5FA]" />

              <span className="text-[12px] font-semibold text-[#60A5FA]">

                Insurance Knowledge Center

              </span>

            </div>

            <h1 className="mt-5 text-[34px] font-bold leading-[1.05] tracking-[-1.5px] md:text-[52px]">

              Explore Expert
              Insurance Articles

            </h1>

            <p className="mt-5 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

              Learn about insurance policies,
              claims, financial planning,
              and industry trends through
              expert-written educational content.

            </p>

            {/* SEARCH */}

            <div className="mt-8 flex max-w-[620px] items-center rounded-full border border-[#1E293B] bg-[#071120]/70 p-2">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#020817]">

                <Search className="h-4 w-4 text-[#60A5FA]" />

              </div>

              <input
                type="text"
                placeholder="Search articles, guides, topics..."
                className="h-[48px] flex-1 bg-transparent px-4 text-[14px] outline-none"
              />

              <button className="flex h-[44px] items-center rounded-full bg-[#2563EB] px-6 text-[13px] font-semibold hover:bg-[#1D4ED8]">

                Search

              </button>

            </div>

            {/* TRUST CHIPS */}

            <div className="mt-7 flex flex-wrap gap-3">

              {[
                "500+ Articles",
                "Expert Insights",
                "Weekly Updates",
                "Free Learning Resources",
              ].map((item, index) => (

                <div
                  key={index}
                  className="rounded-full border border-[#132238] bg-[#071120]/60 px-4 py-2 text-[12px] text-[#CBD5E1]"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

            {/* FEATURED ARTICLE */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="overflow-hidden rounded-[28px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)]">

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

              {/* CONTENT */}

              <div className="p-8 md:p-10">

                <span className="inline-flex rounded-full border border-[#1E293B] bg-[#020817] px-4 py-2 text-[12px] text-[#CBD5E1]">

                  {featuredArticle.category}

                </span>

                <h2 className="mt-6 text-[36px] font-bold leading-[1.15] tracking-[-1.5px]">

                  {featuredArticle.title}

                </h2>

                <p className="mt-5 max-w-[650px] text-[15px] leading-[1.9] text-[#94A3B8]">

                  {featuredArticle.description}

                </p>

                <div className="mt-6 flex items-center gap-3 text-[13px] text-[#94A3B8]">

                  <Clock3 className="h-4 w-4" />

                  {featuredArticle.readTime}

                </div>

                <button className="mt-8 flex h-[48px] items-center gap-2 rounded-full bg-[#2563EB] px-7 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                  Read Full Article

                  <ArrowRight className="h-4 w-4" />

                </button>

              </div>

              {/* VISUAL */}

              <div className="relative flex items-center justify-center border-t border-[#132238] bg-[#020817] p-8 lg:border-l lg:border-t-0">

                <div className="absolute h-[240px] w-[240px] rounded-full bg-[#2563EB]/10 blur-[90px]" />

                <div className="relative flex h-[180px] w-[180px] items-center justify-center rounded-full border border-[#1E293B] bg-[#071120]">

                  <div className="flex h-[130px] w-[130px] items-center justify-center rounded-full bg-[#2563EB]/10">

                    <Newspaper className="h-14 w-14 text-[#60A5FA]" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="border-y border-[#132238] bg-[#071120]/50">

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Explore Topics

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Browse By Category

            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-[16px] leading-[1.9] text-[#94A3B8]">

              Find educational content tailored
              to your interests and insurance needs.

            </p>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">

            {categories.map((item, index) => (

              <button
                key={index}
                className="group rounded-[20px] border border-[#132238] bg-[#020817] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563EB]/10 transition-all duration-300 group-hover:bg-[#2563EB]/20">

                  <BookOpen className="h-4 w-4 text-[#60A5FA]" />

                </div>

                <h3 className="mt-4 text-[14px] font-semibold leading-[1.5]">

                  {item}

                </h3>

              </button>

            ))}

          </div>

          {/* KNOWLEDGE STATS */}

          <div className="mt-14 overflow-hidden rounded-[28px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-8">

            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">

              <div>

                <span className="inline-flex rounded-full border border-[#1E293B] px-3 py-1 text-[12px] font-semibold text-[#60A5FA]">

                  Knowledge Platform

                </span>

                <h3 className="mt-4 text-[30px] font-bold leading-[1.15]">

                  Learn Insurance
                  With Confidence

                </h3>

                <p className="mt-4 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

                  Access practical insurance
                  knowledge, expert insights,
                  and educational content designed
                  to simplify financial protection.

                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    500+

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Articles

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    Weekly

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Updates

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    Expert

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Insights

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    Free

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Learning

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* ARTICLES GRID */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

                Latest Articles

              </span>

              <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

                Trending Insurance Topics

              </h2>

              <p className="mt-4 max-w-[650px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Discover practical advice,
                industry updates, and expert
                insights to make smarter
                insurance decisions.

              </p>

            </div>

            <button className="flex h-[48px] items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120] px-6 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

              Browse All Articles

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {articles.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="group rounded-[26px] border border-[#132238] bg-[#071120]/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]"
                >

                  <div className="flex items-start justify-between gap-5">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10 transition-all duration-300 group-hover:bg-[#2563EB]/20">

                      <Icon className="h-5 w-5 text-[#60A5FA]" />

                    </div>

                    <div className="rounded-full border border-[#1E293B] bg-[#020817] px-4 py-2 text-[12px] text-[#CBD5E1]">

                      {item.category}

                    </div>

                  </div>

                  <h3 className="mt-6 text-[22px] font-semibold leading-[1.5]">

                    {item.title}

                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-[13px] text-[#94A3B8]">

                    <Clock3 className="h-4 w-4" />

                    {item.readTime}

                  </div>

                  <button className="mt-6 flex items-center gap-2 text-[14px] font-semibold text-[#60A5FA]">

                    Read Article

                    <ArrowRight className="h-4 w-4" />

                  </button>

                  <div className="mt-5 h-[1px] bg-gradient-to-r from-[#2563EB] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* INSIGHTS */}

      <section className="border-y border-[#132238] bg-[#071120]/50">

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Why Read Our Content

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Expert Knowledge,
              Practical Guidance

            </h2>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="group rounded-[26px] border border-[#132238] bg-[#020817] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10">

                <TrendingUp className="h-6 w-6 text-[#60A5FA]" />

              </div>

              <h3 className="mt-6 text-[20px] font-semibold">

                Market Trends

              </h3>

              <p className="mt-4 text-[14px] leading-[1.9] text-[#94A3B8]">

                Stay updated with the latest
                insurance market developments,
                regulations, and innovations.

              </p>

            </div>

            <div className="group rounded-[26px] border border-[#132238] bg-[#020817] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10">

                <ShieldCheck className="h-6 w-6 text-[#60A5FA]" />

              </div>

              <h3 className="mt-6 text-[20px] font-semibold">

                Claims Support

              </h3>

              <p className="mt-4 text-[14px] leading-[1.9] text-[#94A3B8]">

                Learn how to navigate claims,
                avoid mistakes, and maximize
                policy benefits.

              </p>

            </div>

            <div className="group rounded-[26px] border border-[#132238] bg-[#020817] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10">

                <BookOpen className="h-6 w-6 text-[#60A5FA]" />

              </div>

              <h3 className="mt-6 text-[20px] font-semibold">

                Expert Guides

              </h3>

              <p className="mt-4 text-[14px] leading-[1.9] text-[#94A3B8]">

                Access practical educational
                resources for smarter financial
                protection planning.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* NEWSLETTER CTA */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 pb-20 md:px-8">

          <div className="relative overflow-hidden rounded-[32px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-10 md:p-12">

            <div className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[#2563EB]/10 blur-[100px]" />

            <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#0EA5E9]/10 blur-[100px]" />

            <div className="relative z-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB]/15">

                <Newspaper className="h-7 w-7 text-[#60A5FA]" />

              </div>

              <h2 className="mx-auto mt-6 max-w-[760px] text-[40px] font-bold leading-[1.1] tracking-[-1.5px]">

                Stay Updated With
                Insurance Insights

              </h2>

              <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Receive expert-written articles,
                industry trends, practical guides,
                and insurance updates directly
                in your inbox.

              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <button className="flex h-[50px] items-center gap-2 rounded-full bg-[#2563EB] px-8 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                  Explore Articles

                  <ArrowRight className="h-4 w-4" />

                </button>

                <button className="flex h-[50px] items-center rounded-full border border-[#1E293B] bg-[#071120]/70 px-8 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                  Subscribe Newsletter

                </button>

              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

                {[
                  "500+ Articles",
                  "Weekly Updates",
                  "Expert Insights",
                  "Free Learning",
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

export default Articles;