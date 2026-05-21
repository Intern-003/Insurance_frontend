import { ArrowRight, Shield, Users, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-16 sm:py-24">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              <Shield className="h-4 w-4" />
              Trusted by 10 Lakh+ Indians
            </div>

            {/* Heading */}
            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Secure Your Health,
                <span className="block text-emerald-700">
                  Protect Your Future
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-8 text-gray-600">
                Compare and buy health insurance from India&apos;s top insurers.
                Get comprehensive coverage for you and your family with cashless
                claims at 14,000+ hospitals.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-7 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-emerald-800 hover:scale-[1.02]"
              >
                View Health Plans
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:8450007614"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-4 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-emerald-700 hover:text-emerald-700"
              >
                Talk to Expert
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">95%</h3>
                <p className="mt-1 text-sm text-gray-600">Claim Settlement</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">14K+</h3>
                <p className="mt-1 text-sm text-gray-600">Network Hospitals</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
                <p className="mt-1 text-sm text-gray-600">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-200 to-emerald-100 blur-3xl opacity-60" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <div className="space-y-7">
                {/* Item */}
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                    <Shield className="h-6 w-6 text-emerald-700" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Complete Coverage
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                      From Rs. 5 Lakhs to Rs. 2 Crores
                    </p>
                  </div>
                </div>

                {/* Item */}
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                    <Users className="h-6 w-6 text-emerald-700" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Family Plans
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                      Cover your entire family under one premium
                    </p>
                  </div>
                </div>

                {/* Item */}
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                    <Clock className="h-6 w-6 text-emerald-700" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Instant Policy
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                      Get your policy in under 2 minutes
                    </p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="mb-2 text-sm text-gray-500">Starting from</p>

                  <div className="flex items-end gap-1">
                    <h2 className="text-4xl font-bold text-gray-900">₹499</h2>

                    <span className="pb-1 text-gray-500">/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
