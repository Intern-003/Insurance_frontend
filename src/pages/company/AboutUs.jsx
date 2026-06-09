// import {
//   ShieldCheck,
//   Users,
//   BadgeCheck,
//   HeartHandshake,
//   ArrowRight,
//   Play,
//   Globe,
//   Sparkles,
//   CheckCircle2,
//   TrendingUp,
//   Building2,
//   PhoneCall,
// } from "lucide-react";

// const stats = [
//   {
//     number: "10M+",
//     label: "Policies Issued",
//   },
//   {
//     number: "98.7%",
//     label: "Claim Success Rate",
//   },
//   {
//     number: "150+",
//     label: "Insurance Partners",
//   },
//   {
//     number: "24×7",
//     label: "Customer Support",
//   },
// ];

// const features = [
//   {
//     icon: ShieldCheck,
//     title: "Trusted Protection",
//     description:
//       "Comprehensive insurance solutions powered by secure digital infrastructure and trusted providers.",
//   },
//   {
//     icon: Users,
//     title: "Customer First",
//     description:
//       "Dedicated support and personalized assistance for claims, renewals, and policy management.",
//   },
//   {
//     icon: BadgeCheck,
//     title: "Verified Providers",
//     description:
//       "Every insurance partner is IRDAI approved and carefully verified for compliance and reliability.",
//   },
//   {
//     icon: HeartHandshake,
//     title: "Fast Claims",
//     description:
//       "Simplified claim process with quick approvals, transparent tracking, and seamless digital experience.",
//   },
// ];

// const timeline = [
//   "Founded with a vision to modernize insurance access.",
//   "Expanded across multiple insurance categories nationwide.",
//   "Integrated digital-first claim and renewal systems.",
//   "Serving millions with trusted insurance experiences.",
// ];

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen overflow-hidden bg-[#020817] text-white">

//       {/* HERO */}
//       <section className="relative overflow-hidden border-b border-[#132238]">
        
//         {/* BACKGROUND EFFECTS */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_32%)]" />
//         <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#2563EB]/10 blur-[120px]" />
//         <div className="absolute bottom-0 left-[20%] h-[350px] w-[350px] rounded-full bg-[#0EA5E9]/10 blur-[120px]" />

//         <div className="relative mx-auto grid max-w-[1450px] items-center gap-12 px-5 py-16 md:px-10 xl:grid-cols-2 xl:px-[90px]">
          
//           {/* LEFT */}
//           <div>
            
//             <div className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120]/80 px-4 py-1.5 backdrop-blur-xl">
              
//               <Sparkles className="h-4 w-4 text-[#60A5FA]" />

//               <span className="text-[13px] font-semibold text-[#60A5FA]">
//                 India’s Trusted Insurance Platform
//               </span>
//             </div>

//             <h1 className="mt-6 text-[38px] font-bold leading-[1.1] tracking-[-2px] md:text-[58px]">
//               Insurance
//               <span className="bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
//                 {" "}Built For The Future
//               </span>
//             </h1>

//             <p className="mt-6 max-w-[620px] text-[16px] leading-[1.9] text-[#94A3B8]">
//               We are transforming the insurance experience through technology,
//               transparency, and customer-first innovation. From protection to
//               claims, we make insurance simple, secure, and accessible.
//             </p>

//             {/* FEATURES */}
//             <div className="mt-8 grid gap-3 sm:grid-cols-2">
              
//               {[
//                 "Instant policy access",
//                 "IRDAI approved partners",
//                 "Fast digital claims",
//                 "24×7 expert support",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 rounded-xl border border-[#132238] bg-[#071120]/60 px-3 py-3 backdrop-blur-xl"
//                 >
//                   <CheckCircle2 className="h-5 w-5 text-[#60A5FA]" />

//                   <span className="text-[14px] text-[#E2E8F0]">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* BUTTONS */}
//             <div className="mt-8 flex flex-wrap items-center gap-3">
              
//               <button className="flex h-[52px] items-center gap-3 rounded-full bg-[#2563EB] px-8 text-[15px] font-semibold transition-all duration-300 hover:scale-[1.03] hover:bg-[#1D4ED8]">
//                 Explore Insurance

//                 <ArrowRight className="h-4 w-4" />
//               </button>

//               <button className="flex h-[52px] items-center gap-3 rounded-full border border-[#1E293B] bg-[#071120]/70 px-8 text-[15px] font-semibold backdrop-blur-xl transition-all duration-300 hover:border-[#2563EB]">
//                 <Play className="h-4 w-4" />

//                 Watch Overview
//               </button>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="relative">
            
//             <div className="relative rounded-[32px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-6 shadow-[0_20px_80px_rgba(37,99,235,0.15)]">
              
//               {/* TOP */}
//               <div className="flex items-center justify-between">
                
//                 <div>
//                   <p className="text-[14px] text-[#94A3B8]">
//                     Total Protected Users
//                   </p>

//                   <h2 className="mt-2 text-[34px] font-bold">
//                     10M+
//                   </h2>
//                 </div>

//                 <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2563EB]/20">
//                   <ShieldCheck className="h-8 w-8 text-[#60A5FA]" />
//                 </div>
//               </div>

//               {/* GRAPH */}
//               <div className="mt-8 rounded-[24px] border border-[#132238] bg-[#020817] p-5">
                
//                 <div className="flex items-end justify-between gap-3">
                  
//                   {[40, 70, 55, 90, 75, 100].map((height, index) => (
//                     <div
//                       key={index}
//                       className="flex-1 rounded-t-full bg-gradient-to-t from-[#2563EB] to-[#60A5FA]"
//                       style={{ height: `${height * 1.5}px` }}
//                     />
//                   ))}
//                 </div>

//                 <div className="mt-6 flex items-center justify-between text-[12px] text-[#64748B]">
//                   <span>Jan</span>
//                   <span>Feb</span>
//                   <span>Mar</span>
//                   <span>Apr</span>
//                   <span>May</span>
//                   <span>Jun</span>
//                 </div>
//               </div>

//               {/* FLOATING CARDS */}
//               <div className="mt-6 grid gap-3 sm:grid-cols-2">
                
//                 <div className="rounded-xl border border-[#132238] bg-[#071120] p-4">
                  
//                   <div className="flex items-center gap-3">
                    
//                     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/20">
//                       <TrendingUp className="h-5 w-5 text-[#60A5FA]" />
//                     </div>

//                     <div>
//                       <h3 className="text-[24px] font-bold">
//                         98.7%
//                       </h3>

//                       <p className="text-[12px] text-[#94A3B8]">
//                         Claims approved
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="rounded-xl border border-[#132238] bg-[#071120] p-4">
                  
//                   <div className="flex items-center gap-3">
                    
//                     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/20">
//                       <Globe className="h-5 w-5 text-[#60A5FA]" />
//                     </div>

//                     <div>
//                       <h3 className="text-[24px] font-bold">
//                         PAN India
//                       </h3>

//                       <p className="text-[12px] text-[#94A3B8]">
//                         Nationwide coverage
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* GLOW */}
//             <div className="absolute -bottom-20 -right-20 h-[240px] w-[240px] rounded-full bg-[#2563EB]/20 blur-[120px]" />
//           </div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="border-b border-[#132238]">
        
//         <div className="mx-auto grid max-w-[1450px] grid-cols-2 gap-5 px-5 py-16 md:grid-cols-4 md:px-10 xl:px-[90px]">
          
//           {stats.map((item, index) => (
//             <div
//               key={index}
//               className="group rounded-[30px] border border-[#132238] bg-[#071120]/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]"
//             >
//               <h3 className="text-[42px] font-bold tracking-[-1px]">
//                 {item.number}
//               </h3>

//               <p className="mt-3 text-[15px] text-[#94A3B8]">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section>
        
//         <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-10 xl:px-[90px]">
          
//           <div className="max-w-[720px]">
            
//             <span className="text-[14px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">
//               Why Choose Us
//             </span>

//             <h2 className="mt-6 text-[48px] font-bold leading-[1.15] tracking-[-2px]">
//               Designed Around
//               <span className="bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
//                 {" "}Trust & Technology
//               </span>
//             </h2>

//             <p className="mt-6 text-[18px] leading-[2] text-[#94A3B8]">
//               We combine advanced technology with exceptional customer support
//               to create a seamless insurance experience for everyone.
//             </p>
//           </div>

//           <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            
//             {features.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={index}
//                   className="group rounded-[32px] border border-[#132238] bg-[#071120]/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]"
//                 >
//                   <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2563EB]/10 transition-all duration-300 group-hover:bg-[#2563EB]/20">
//                     <Icon className="h-7 w-7 text-[#60A5FA]" />
//                   </div>

//                   <h3 className="mt-8 text-[24px] font-semibold">
//                     {item.title}
//                   </h3>

//                   <p className="mt-5 text-[15px] leading-[2] text-[#94A3B8]">
//                     {item.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* JOURNEY */}
//       <section className="border-y border-[#132238] bg-[#071120]/60 backdrop-blur-xl">
        
//         <div className="mx-auto grid max-w-[1450px] gap-16 px-5 py-24 md:px-10 xl:grid-cols-2 xl:px-[90px]">
          
//           {/* LEFT */}
//           <div>
            
//             <span className="text-[14px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">
//               Our Journey
//             </span>

//             <h2 className="mt-6 text-[48px] font-bold leading-[1.15] tracking-[-2px]">
//               Building India’s Most Trusted Insurance Platform
//             </h2>

//             <p className="mt-7 text-[17px] leading-[2] text-[#94A3B8]">
//               We started with a mission to simplify insurance access and create
//               transparent digital experiences that empower millions across India.
//             </p>

//             <div className="mt-10 flex items-center gap-4">
              
//               <button className="flex h-[58px] items-center gap-2 rounded-full bg-[#2563EB] px-8 text-[15px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">
//                 Explore Plans

//                 <ArrowRight className="h-4 w-4" />
//               </button>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="space-y-5">
            
//             {timeline.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-5 rounded-[28px] border border-[#132238] bg-[#020817] p-6"
//               >
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10">
//                   <Building2 className="h-6 w-6 text-[#60A5FA]" />
//                 </div>

//                 <div>
//                   <span className="text-[13px] font-semibold text-[#60A5FA]">
//                     STEP {index + 1}
//                   </span>

//                   <p className="mt-2 text-[16px] leading-[1.9] text-[#E2E8F0]">
//                     {item}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section>
        
//         <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-10 xl:px-[90px]">
          
//           <div className="relative overflow-hidden rounded-[40px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-14 text-center">
            
//             <div className="absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-[#2563EB]/10 blur-[120px]" />
//             <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-[#0EA5E9]/10 blur-[120px]" />

//             <div className="relative">
              
//               <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#2563EB]/15">
//                 <PhoneCall className="h-9 w-9 text-[#60A5FA]" />
//               </div>

//               <h2 className="mt-8 text-[52px] font-bold leading-[1.15] tracking-[-2px]">
//                 Ready To Get Protected?
//               </h2>

//               <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-[2] text-[#94A3B8]">
//                 Explore trusted insurance plans with transparent pricing,
//                 seamless onboarding, and dedicated support designed around you.
//               </p>

//               <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                
//                 <button className="flex h-[52px] items-center gap-3 rounded-full bg-[#2563EB] px-9 text-[15px] font-semibold transition-all duration-300 hover:scale-[1.03] hover:bg-[#1D4ED8]">
//                   Explore Insurance

//                   <ArrowRight className="h-4 w-4" />
//                 </button>

//                 <button className="flex h-[52px] items-center rounded-full border border-[#1E293B] bg-[#071120]/70 px-9 text-[15px] font-semibold backdrop-blur-xl transition-all duration-300 hover:border-[#2563EB]">
//                   Talk To Experts
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default AboutUs;


import {
  ShieldCheck,
  Users,
  BadgeCheck,
  HeartHandshake,
  ArrowRight,
  Play,
  Globe,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Building2,
  PhoneCall,
} from "lucide-react";

const stats = [
  {
    number: "10M+",
    label: "Policies Issued",
  },
  {
    number: "98.7%",
    label: "Claim Success Rate",
  },
  {
    number: "150+",
    label: "Insurance Partners",
  },
  {
    number: "24×7",
    label: "Customer Support",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Protection",
    description:
      "Comprehensive insurance solutions powered by secure infrastructure and trusted providers.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Dedicated support and personalized assistance for claims, renewals, and policy management.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Providers",
    description:
      "Every insurance partner is verified for compliance, transparency, and reliability.",
  },
  {
    icon: HeartHandshake,
    title: "Fast Claims",
    description:
      "Streamlined claim processing with digital tracking and faster approvals.",
  },
];

const timeline = [
  "Founded with a vision to modernize insurance access.",
  "Expanded across multiple insurance categories nationwide.",
  "Integrated digital-first claim and renewal systems.",
  "Serving millions with trusted insurance experiences.",
];

const AboutUs = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020817] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#132238]">

        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_32%)]" />

        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#2563EB]/10 blur-[120px]" />

        <div className="absolute bottom-0 left-[20%] h-[280px] w-[280px] rounded-full bg-[#0EA5E9]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-5 py-14 md:px-8 xl:grid-cols-2">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120]/80 px-4 py-1.5 backdrop-blur-xl">

              <Sparkles className="h-4 w-4 text-[#60A5FA]" />

              <span className="text-[12px] font-semibold text-[#60A5FA]">
                India's Trusted Insurance Platform
              </span>

            </div>

            <h1 className="mt-5 text-[32px] font-bold leading-[1.05] tracking-[-1.5px] md:text-[48px]">

              Insurance

              <span className="bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
                {" "}Built For The Future
              </span>

            </h1>

            <p className="mt-5 max-w-[560px] text-[15px] leading-[1.8] text-[#94A3B8]">

              We are transforming insurance through technology,
              transparency, and customer-first innovation.
              From policy purchase to claim settlement,
              we make protection simple, secure, and accessible.

            </p>

            {/* Feature Chips */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                "Instant policy access",
                "Verified insurance partners",
                "Fast digital claims",
                "24×7 expert assistance",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-[#132238] bg-[#071120]/60 px-3 py-3 backdrop-blur-xl"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#60A5FA]" />

                  <span className="text-[13px] text-[#E2E8F0]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap items-center gap-3">

              <button className="flex h-[48px] items-center gap-2 rounded-full bg-[#2563EB] px-7 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                Explore Insurance

                <ArrowRight className="h-4 w-4" />

              </button>

              <button className="flex h-[48px] items-center gap-2 rounded-full border border-[#1E293B] bg-[#071120]/70 px-7 text-[14px] font-semibold backdrop-blur-xl transition-all duration-300 hover:border-[#2563EB]">

                <Play className="h-4 w-4" />

                Watch Overview

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="relative rounded-[26px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[13px] text-[#94A3B8]">
                    Total Protected Users
                  </p>

                  <h2 className="mt-2 text-[30px] font-bold">
                    10M+
                  </h2>

                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/20">

                  <ShieldCheck className="h-6 w-6 text-[#60A5FA]" />

                </div>

              </div>

              {/* Graph */}

              <div className="mt-6 rounded-[20px] border border-[#132238] bg-[#020817] p-4">

                <div className="flex items-end justify-between gap-2">

                  {[40, 70, 55, 90, 75, 100].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-full bg-gradient-to-t from-[#2563EB] to-[#60A5FA]"
                      style={{
                        height: `${height * 1.25}px`,
                      }}
                    />
                  ))}

                </div>

                <div className="mt-5 flex items-center justify-between text-[11px] text-[#64748B]">

                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>

                </div>

              </div>

              {/* Quick Stats */}

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                <div className="rounded-xl border border-[#132238] bg-[#071120] p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563EB]/20">

                      <TrendingUp className="h-4 w-4 text-[#60A5FA]" />

                    </div>

                    <div>

                      <h3 className="text-[20px] font-bold">
                        98.7%
                      </h3>

                      <p className="text-[11px] text-[#94A3B8]">
                        Claims Approved
                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-xl border border-[#132238] bg-[#071120] p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563EB]/20">

                      <Globe className="h-4 w-4 text-[#60A5FA]" />

                    </div>

                    <div>

                      <h3 className="text-[20px] font-bold">
                        PAN India
                      </h3>

                      <p className="text-[11px] text-[#94A3B8]">
                        Nationwide Coverage
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="absolute -bottom-16 -right-16 h-[180px] w-[180px] rounded-full bg-[#2563EB]/20 blur-[100px]" />

          </div>

        </div>
      </section>
            {/* STATS */}
      <section className="border-b border-[#132238]">

        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-4 px-5 py-12 md:grid-cols-4 md:px-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="group rounded-[24px] border border-[#132238] bg-[#071120]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]"
            >

              <h3 className="text-[34px] font-bold tracking-[-1px] text-white">

                {item.number}

              </h3>

              <p className="mt-2 text-[14px] text-[#94A3B8]">

                {item.label}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* FEATURES */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          {/* Header */}

          <div className="max-w-[680px]">

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Why Choose Us

            </span>

            <h2 className="mt-5 text-[38px] font-bold leading-[1.1] tracking-[-1.5px]">

              Designed Around

              <span className="bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">

                {" "}Trust & Technology

              </span>

            </h2>

            <p className="mt-5 text-[16px] leading-[1.9] text-[#94A3B8]">

              We combine advanced technology, trusted insurance
              providers, and exceptional customer support to
              deliver a modern insurance experience for individuals
              and businesses across India.

            </p>

          </div>

          {/* Feature Cards */}

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {features.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="group rounded-[26px] border border-[#132238] bg-[#071120]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]"
                >

                  {/* Icon */}

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10 transition-all duration-300 group-hover:bg-[#2563EB]/20">

                    <Icon className="h-6 w-6 text-[#60A5FA]" />

                  </div>

                  {/* Content */}

                  <h3 className="mt-6 text-[20px] font-semibold text-white">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.9] text-[#94A3B8]">

                    {item.description}

                  </p>

                  {/* Bottom Accent */}

                  <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-[#2563EB] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

                </div>

              );

            })}

          </div>

          {/* Trust Banner */}

          <div className="mt-16 overflow-hidden rounded-[28px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-8">

            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">

              <div>

                <span className="inline-flex items-center rounded-full border border-[#1E293B] px-3 py-1 text-[12px] font-semibold text-[#60A5FA]">

                  Trusted Across India

                </span>

                <h3 className="mt-4 text-[30px] font-bold leading-[1.15]">

                  Insurance Built For The Digital Era

                </h3>

                <p className="mt-4 max-w-[620px] text-[15px] leading-[1.9] text-[#94A3B8]">

                  From policy discovery and instant renewals
                  to claim management and customer support,
                  we provide a seamless experience powered
                  by technology and trusted partnerships.

                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold text-white">

                    10M+

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Customers Protected

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold text-white">

                    150+

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Insurance Partners

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold text-white">

                    98.7%

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Claim Success Rate

                  </div>

                </div>

                <div className="rounded-2xl border border-[#132238] bg-[#020817] p-5">

                  <div className="text-[28px] font-bold text-white">

                    24×7

                  </div>

                  <div className="mt-1 text-[13px] text-[#94A3B8]">

                    Customer Support

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* JOURNEY */}

      <section className="border-y border-[#132238] bg-[#071120]/50 backdrop-blur-xl">

        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-20 md:px-8 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="text-[13px] font-semibold uppercase tracking-[3px] text-[#60A5FA]">

              Our Journey

            </span>

            <h2 className="mt-5 text-[38px] font-bold leading-[1.1] tracking-[-1.5px]">

              Building India's Most Trusted
              Insurance Ecosystem

            </h2>

            <p className="mt-6 text-[16px] leading-[1.9] text-[#94A3B8]">

              We started with a simple mission —
              making insurance more transparent,
              accessible, and technology-driven.
              Today, millions trust our platform
              to discover, manage, and renew
              their insurance seamlessly.

            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <button className="flex h-[48px] items-center gap-2 rounded-full bg-[#2563EB] px-7 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                Explore Plans

                <ArrowRight className="h-4 w-4" />

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="space-y-4">

            {timeline.map((item, index) => (

              <div
                key={index}
                className="group flex items-start gap-4 rounded-[24px] border border-[#132238] bg-[#020817] p-5 transition-all duration-300 hover:border-[#2563EB]"
              >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/10">

                  <Building2 className="h-5 w-5 text-[#60A5FA]" />

                </div>

                <div>

                  <span className="text-[12px] font-semibold tracking-wide text-[#60A5FA]">

                    STEP {index + 1}

                  </span>

                  <p className="mt-2 text-[15px] leading-[1.8] text-[#E2E8F0]">

                    {item}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PREMIUM CTA */}

      <section>

        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8">

          <div className="relative overflow-hidden rounded-[32px] border border-[#132238] bg-[linear-gradient(180deg,#071120_0%,#0F172A_100%)] p-10 md:p-12">

            {/* Glow Effects */}

            <div className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[#2563EB]/10 blur-[100px]" />

            <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#0EA5E9]/10 blur-[100px]" />

            <div className="relative z-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB]/15">

                <PhoneCall className="h-7 w-7 text-[#60A5FA]" />

              </div>

              <h2 className="mx-auto mt-6 max-w-[760px] text-[40px] font-bold leading-[1.1] tracking-[-1.5px]">

                Ready To Protect
                What Matters Most?

              </h2>

              <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.9] text-[#94A3B8]">

                Compare plans, renew policies,
                manage claims, and access trusted
                insurance services through one
                powerful digital platform.

              </p>

              {/* CTA Buttons */}

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <button className="flex h-[50px] items-center gap-2 rounded-full bg-[#2563EB] px-8 text-[14px] font-semibold transition-all duration-300 hover:bg-[#1D4ED8]">

                  Explore Insurance

                  <ArrowRight className="h-4 w-4" />

                </button>

                <button className="flex h-[50px] items-center rounded-full border border-[#1E293B] bg-[#071120]/70 px-8 text-[14px] font-semibold transition-all duration-300 hover:border-[#2563EB]">

                  Talk To Experts

                </button>

              </div>

              {/* Mini Stats */}

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

                {[
                  "10M+ Customers",
                  "150+ Partners",
                  "98.7% Claims",
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

export default AboutUs;