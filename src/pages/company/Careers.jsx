import {
  ArrowRight,
  Briefcase,
  Users,
  Globe,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Laptop,
  Coffee,
  Trophy,
  Clock3,
} from "lucide-react";

const benefits = [
  {
    icon: Laptop,
    title: "Flexible Work",
    description:
      "Work remotely with flexible schedules and modern collaboration tools.",
  },
  {
    icon: Trophy,
    title: "Growth Opportunities",
    description:
      "Advance your career with mentorship, learning, and leadership programs.",
  },
  {
    icon: Coffee,
    title: "Amazing Culture",
    description:
      "Collaborative environment focused on innovation and teamwork.",
  },
  {
    icon: ShieldCheck,
    title: "Health Benefits",
    description:
      "Comprehensive medical and wellness benefits for employees.",
  },
];

const openings = [
  {
    role: "Frontend Developer",
    type: "Full Time",
    location: "Mumbai / Remote",
  },
  {
    role: "UI/UX Designer",
    type: "Full Time",
    location: "Remote",
  },
  {
    role: "Insurance Operations Executive",
    type: "Full Time",
    location: "Mumbai",
  },
  {
    role: "Customer Success Manager",
    type: "Full Time",
    location: "Hybrid",
  },
];

const values = [
  "Customer-first mindset",
  "Innovation through technology",
  "Transparency & trust",
  "Fast execution",
];

const Careers = () => {
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

                Careers At Spay Insurance

              </span>

            </div>

            <h1 className="mt-5 text-[34px] font-bold leading-[1.05] tracking-[-1.5px] md:text-[52px]">

              Build Products That
              Transform Insurance

            </h1>

            <p className="mt-5 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

              Join a fast-growing team building India's
              next-generation insurance platform.
              Work alongside talented people, solve
              meaningful problems, and create experiences
              that impact millions.

            </p>

            {/* CULTURE CHIPS */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                "Remote-Friendly",
                "High Ownership",
                "Fast Career Growth",
                "People First Culture",
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

                View Open Roles

                <ArrowRight className="h-4 w-4" />

              </button>

              <button className="flex h-[48px] items-center rounded-full border border-[#1E293B] bg-[#071120]/70 px-7 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                Life At Spay

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-[26px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: Users,
                    value: "250+",
                    label: "Team Members",
                  },
                  {
                    icon: Globe,
                    value: "PAN India",
                    label: "Operations",
                  },
                  {
                    icon: HeartHandshake,
                    value: "4.9/5",
                    label: "Employee Rating",
                  },
                  {
                    icon: Briefcase,
                    value: "25+",
                    label: "Open Positions",
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

                      <h3 className="mt-5 text-[24px] font-bold">

                        {item.value}

                      </h3>

                      <p className="mt-1 text-[13px] text-[#94A3B8]">

                        {item.label}

                      </p>

                    </div>
                  );
                })}
              </div>

              {/* Hiring Banner */}

              <div className="mt-4 rounded-2xl border border-[#132238] bg-[#071120] p-5">

                <span className="text-[12px] font-semibold text-[#60A5FA]">

                  WE ARE HIRING

                </span>

                <h3 className="mt-2 text-[20px] font-semibold">

                  Help Build The Future Of Insurance

                </h3>

                <p className="mt-2 text-[13px] leading-[1.8] text-[#94A3B8]">

                  Engineers, designers, operations specialists,
                  and customer success professionals are welcome.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* VALUES */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="max-w-[700px]">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Our Culture

            </span>

            <h2 className="mt-5 text-[38px] font-bold leading-[1.1] tracking-[-1.5px]">

              The Principles That
              Guide Everything We Do

            </h2>

            <p className="mt-5 text-[16px] leading-[1.9] text-[#94A3B8]">

              Great companies are built by great people.
              We foster an environment where ownership,
              innovation, collaboration, and trust drive
              every decision.

            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {values.map((item, index) => (

              <div
                key={index}
                className="group rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10">

                  <CheckCircle2 className="h-5 w-5 text-[#60A5FA]" />

                </div>

                <h3 className="mt-5 text-[18px] font-semibold leading-[1.6]">

                  {item}

                </h3>

                <div className="mt-5 h-[1px] bg-gradient-to-r from-[#2563EB] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

              </div>

            ))}

          </div>

          {/* CULTURE BANNER */}

          <div className="mt-14 overflow-hidden rounded-[28px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-8">

            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">

              <div>

                <span className="inline-flex rounded-full border border-[#1E293B] px-3 py-1 text-[12px] font-semibold text-[#60A5FA]">

                  People First

                </span>

                <h3 className="mt-4 text-[30px] font-bold leading-[1.15]">

                  A Workplace Designed
                  For Growth & Impact

                </h3>

                <p className="mt-4 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

                  We believe exceptional talent thrives
                  when empowered with autonomy,
                  mentorship, and meaningful challenges.
                  That's why we invest heavily in people,
                  not just processes.

                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    250+

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Team Members

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    4.9/5

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Employee Rating

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    25+

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Open Roles

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold">

                    PAN India

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Operations

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="border-y border-[#132238] bg-[#071120]/50">

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="text-center">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Employee Benefits

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              Why You'll Love Working Here

            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

              We provide the resources, flexibility,
              and support needed for people to do
              their best work every day.

            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {benefits.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="group rounded-[26px] border border-[#132238] bg-[#020817] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]"
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

                  <div className="mt-5 h-[1px] bg-gradient-to-r from-[#2563EB] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

                </div>

              );

            })}

          </div>

        </div>

      </section>
            {/* OPEN POSITIONS */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

                Open Opportunities

              </span>

              <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

                Current Open Positions

              </h2>

              <p className="mt-4 max-w-[650px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Join a team that's reshaping the future
                of insurance through technology,
                innovation, and customer obsession.

              </p>

            </div>

            <button className="flex h-[48px] items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120] px-6 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

              View All Roles

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

          <div className="mt-12 space-y-4">

            {openings.map((item, index) => (

              <div
                key={index}
                className="group rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6 transition-all duration-300 hover:border-[#2563EB]"
              >

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <h3 className="text-[22px] font-semibold">

                      {item.role}

                    </h3>

                    <div className="mt-4 flex flex-wrap gap-3">

                      <div className="rounded-full border border-[#1E293B] bg-[#020817] px-4 py-2 text-[12px] text-[#CBD5E1]">

                        {item.type}

                      </div>

                      <div className="rounded-full border border-[#1E293B] bg-[#020817] px-4 py-2 text-[12px] text-[#CBD5E1]">

                        {item.location}

                      </div>

                    </div>

                  </div>

                  <button className="flex h-[46px] items-center gap-2 rounded-full bg-[#2563EB] px-6 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                    Apply Now

                    <ArrowRight className="h-4 w-4" />

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* HIRING PROCESS */}

      <section className="border-y border-[#132238] bg-[#071120]/50">

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="max-w-[700px]">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Hiring Process

            </span>

            <h2 className="mt-5 text-[38px] font-bold tracking-[-1.5px]">

              What To Expect

            </h2>

            <p className="mt-4 text-[16px] leading-[1.9] text-[#94A3B8]">

              Our hiring process is designed to be
              transparent, efficient, and respectful
              of your time.

            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                step: "01",
                title: "Apply",
                desc: "Submit your application and tell us about your experience.",
              },
              {
                step: "02",
                title: "Interview",
                desc: "Meet our team and discuss your skills and ambitions.",
              },
              {
                step: "03",
                title: "Assessment",
                desc: "Complete a role-specific evaluation or case study.",
              },
              {
                step: "04",
                title: "Offer",
                desc: "Receive your offer and begin your journey with us.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="rounded-[24px] border border-[#132238] bg-[#020817] p-6"
              >

                <span className="text-[12px] font-bold text-[#60A5FA]">

                  STEP {item.step}

                </span>

                <h3 className="mt-4 text-[20px] font-semibold">

                  {item.title}

                </h3>

                <p className="mt-3 text-[14px] leading-[1.8] text-[#94A3B8]">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PREMIUM CTA */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="relative overflow-hidden rounded-[32px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-10 md:p-12">

            <div className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[#2563EB]/10 blur-[100px]" />

            <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#0EA5E9]/10 blur-[100px]" />

            <div className="relative z-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB]/15">

                <Clock3 className="h-7 w-7 text-[#60A5FA]" />

              </div>

              <h2 className="mx-auto mt-6 max-w-[760px] text-[40px] font-bold leading-[1.1] tracking-[-1.5px]">

                Ready To Build The
                Future Of Insurance?

              </h2>

              <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Join a team that values innovation,
                ownership, and continuous growth.
                Help us create the next generation
                of insurance experiences.

              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <button className="flex h-[50px] items-center gap-2 rounded-full bg-[#2563EB] px-8 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                  Apply Today

                  <ArrowRight className="h-4 w-4" />

                </button>

                <button className="flex h-[50px] items-center rounded-full border border-[#1E293B] bg-[#071120]/70 px-8 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                  Explore Opportunities

                </button>

              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

                {[
                  "250+ Team Members",
                  "25+ Open Roles",
                  "4.9/5 Rating",
                  "PAN India Presence",
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

export default Careers;