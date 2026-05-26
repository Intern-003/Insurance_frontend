import { Link } from "react-router-dom";
import {
  Shield,
  HeartPulse,
  Car,
  Bike,
  Plane,
  Home,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const renewalOptions = [
  {
    title: "Term Life Renewal",
    description:
      "Renew your term insurance plans securely with uninterrupted protection.",
    icon: Shield,
    slug: "term-life",
  },
  {
    title: "Health Insurance Renewal",
    description:
      "Continue your health coverage with quick and hassle-free renewals.",
    icon: HeartPulse,
    slug: "health",
  },
  {
    title: "Car Insurance Renewal",
    description:
      "Renew your car insurance instantly with complete coverage benefits.",
    icon: Car,
    slug: "car",
  },
  {
    title: "Bike Insurance Renewal",
    description:
      "Get fast two-wheeler renewals with affordable premium options.",
    icon: Bike,
    slug: "bike",
  },
  {
    title: "Travel Insurance Renewal",
    description:
      "Extend your travel coverage for international and domestic trips.",
    icon: Plane,
    slug: "travel",
  },
  {
    title: "Home Insurance Renewal",
    description:
      "Protect your home and valuables with seamless renewal services.",
    icon: Home,
    slug: "home",
  },
  {
    title: "Business Insurance Renewal",
    description:
      "Renew your business protection policies with enterprise-grade support.",
    icon: Briefcase,
    slug: "business",
  },
];

const RenewalSelection = () => {
  return (
    <div className="min-h-screen bg-[#F6F9FC]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-20">

        {/* BACKGROUND EFFECT */}
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#2563EB]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1450px] px-6 sm:px-8 lg:px-10">

          {/* TOP CONTENT */}
          <div className="mx-auto max-w-[860px] text-center">

            <div className="inline-flex items-center rounded-full border border-[#DCE7F8] bg-white px-5 py-2 shadow-sm">
              <span className="text-[13px] font-semibold tracking-[0.2px] text-[#2563EB]">
                INSURANCE POLICY RENEWALS
              </span>
            </div>

            <h1 className="mt-7 text-[42px] font-bold leading-[52px] tracking-[-1.8px] text-[#0F172A] sm:text-[56px] sm:leading-[66px]">
              Renew Your Insurance Policies
              <span className="block text-[#2563EB]">
                In Minutes
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[32px] text-[#64748B]">
              Quickly renew your insurance plans with a secure and seamless
              renewal experience designed for modern customers and enterprises.
            </p>
          </div>

          {/* RENEWAL GRID */}
          <div className="mt-20 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">

            {renewalOptions.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  to={`/renewals/${item.slug}`}
                  className="group relative overflow-hidden rounded-[32px] border border-[#E5EDF7] bg-white p-8 shadow-[0_6px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#CFE0FF] hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]"
                >

                  {/* TOP ICON */}
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] bg-[#EFF6FF] text-[#2563EB] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white">
                    <Icon className="h-8 w-8 stroke-[2]" />
                  </div>

                  {/* CONTENT */}
                  <div className="mt-7">

                    <h3 className="text-[24px] font-semibold tracking-[-0.5px] text-[#0F172A] transition-colors duration-200 group-hover:text-[#2563EB]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[15.5px] leading-[29px] text-[#64748B]">
                      {item.description}
                    </p>
                  </div>

                  {/* FOOTER */}
                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-[14px] font-semibold tracking-[0.2px] text-[#2563EB]">
                      Renew Policy
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE7F8] bg-[#F8FBFF] text-[#2563EB] transition-all duration-300 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>

                  {/* HOVER GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/0 via-[#2563EB]/0 to-[#2563EB]/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-24 rounded-[36px] border border-[#E5EDF7] bg-white p-10 shadow-[0_8px_35px_rgba(15,23,42,0.04)]">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              {/* LEFT */}
              <div>

                <span className="inline-flex rounded-full border border-[#DCE7F8] bg-[#F8FBFF] px-4 py-2 text-[13px] font-semibold tracking-[0.2px] text-[#2563EB]">
                  WHY CHOOSE US
                </span>

                <h2 className="mt-6 text-[34px] font-bold leading-[46px] tracking-[-1.2px] text-[#0F172A]">
                  Fast, Secure & Enterprise-Grade Renewals
                </h2>

                <p className="mt-5 max-w-[620px] text-[16px] leading-[30px] text-[#64748B]">
                  Experience effortless insurance renewals with real-time
                  verification, policy tracking, secure payments, and dedicated
                  customer support — all in one modern platform.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <div className="rounded-2xl border border-[#E5EDF7] bg-[#FAFCFF] px-5 py-4">
                    <p className="text-[22px] font-bold text-[#0F172A]">
                      100%
                    </p>

                    <p className="mt-1 text-[13px] text-[#64748B]">
                      Secure Renewals
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E5EDF7] bg-[#FAFCFF] px-5 py-4">
                    <p className="text-[22px] font-bold text-[#0F172A]">
                      Instant
                    </p>

                    <p className="mt-1 text-[13px] text-[#64748B]">
                      Policy Verification
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E5EDF7] bg-[#FAFCFF] px-5 py-4">
                    <p className="text-[22px] font-bold text-[#0F172A]">
                      24/7
                    </p>

                    <p className="mt-1 text-[13px] text-[#64748B]">
                      Support Access
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative overflow-hidden rounded-[30px] border border-[#E5EDF7] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] p-10">

                <div className="absolute right-[-40px] top-[-40px] h-[180px] w-[180px] rounded-full bg-white/10" />

                <div className="absolute bottom-[-60px] left-[-60px] h-[220px] w-[220px] rounded-full bg-white/5" />

                <div className="relative">

                  <div className="flex h-[78px] w-[78px] items-center justify-center rounded-[24px] bg-white/10 backdrop-blur-md">
                    <Shield className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="mt-8 text-[34px] font-bold leading-[44px] tracking-[-1px] text-white">
                    Renew Policies
                    <span className="block">
                      Without Hassle
                    </span>
                  </h3>

                  <p className="mt-5 max-w-[520px] text-[15.5px] leading-[30px] text-white/80">
                    Access a seamless insurance renewal experience built with
                    speed, trust, and modern customer-first workflows.
                  </p>

                  <button className="mt-10 inline-flex h-[56px] items-center justify-center rounded-[18px] bg-white px-8 text-[15px] font-semibold text-[#2563EB] transition-all duration-300 hover:scale-[1.02]">
                    Start Renewal Process
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RenewalSelection;