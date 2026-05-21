import { ShieldCheck, Zap, HeartHandshake, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Comprehensive Coverage",
    description:
      "Coverage options from Rs. 5 Lakhs to Rs. 2 Crores with flexible health plans.",
  },

  {
    icon: Zap,
    title: "Fast Claim Support",
    description:
      "Quick and smooth claim process with high settlement success rates.",
  },

  {
    icon: HeartHandshake,
    title: "14,000+ Hospitals",
    description:
      "Cashless treatment access across India's top hospitals and healthcare centers.",
  },

  {
    icon: BadgeCheck,
    title: "Expert Assistance",
    description:
      "Dedicated insurance experts to guide you in choosing the right policy.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-[#f8fafc] py-14 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Why Choose InsureIndia?
          </h2>

          <p className="mt-3 text-[15px] leading-7 text-gray-600">
            Simple, transparent, and reliable health insurance solutions for
            every Indian family.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-5 transition duration-200 hover:border-emerald-200 hover:shadow-sm"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50">
                  <Icon className="h-5 w-5 text-emerald-700" />
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-[16px] font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
