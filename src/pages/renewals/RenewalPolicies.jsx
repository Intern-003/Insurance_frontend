import {
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";

import {
  Shield,
  Calendar,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
} from "lucide-react";

import Header from "../../components/Header";

const RenewalPolicies = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const policies =
    location.state?.policies || [];

  /*
  |--------------------------------------------------------------------------
  | FORMAT DATE
  |--------------------------------------------------------------------------
  */


  const formatDate = (date) => {

    if (!date) return "N/A";

    return new Date(date).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  /*
  |--------------------------------------------------------------------------
  | HANDLE RENEW
  |--------------------------------------------------------------------------
  */
const handleRenewNow = (policy) => {

if (!policy?.plan?.slug) {

    console.log("Missing slug", policy);

    return;
  }

  navigate("/customize-insurance-plan", {

    state: {

      renewal: true,

      renewalData: policy,

      category: policy.category,

  selectedPlan: {
  id: policy?.plan?.id,
  slug: policy?.plan?.slug,
  plan_name: policy?.plan?.plan_name,
  company_name:
    policy?.plan?.company_name,
  logo:
    policy?.plan?.logo_url,
},
selectedCoverage: {
  id: policy?.coverage?.id,
  coverage_name:
    policy?.coverage?.coverage_name,
  coverage_amount:
    policy?.coverage?.coverage_amount,
  one_year_price:
    policy?.coverage?.one_year_price,
  two_year_price:
    policy?.coverage?.two_year_price,
  three_year_price:
    policy?.coverage?.three_year_price,
},
    },
  });
};
  return (

    <div className="min-h-screen bg-[#F6F9FC]">

      <Header />

      {/* SECTION */}

      <section className="relative overflow-hidden py-6">

        {/* BG */}

        <div className="absolute left-[-100px] top-[-100px] h-[220px] w-[220px] rounded-full bg-[#2563EB]/10 blur-3xl" />

        <div className="absolute bottom-[-100px] right-[-100px] h-[220px] w-[220px] rounded-full bg-[#2563EB]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-7">

          {/* BREADCRUMB */}

          <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-[#64748B]">

            <span>Home</span>

            <ChevronRight className="h-3 w-3" />

            <span>Renewals</span>

            <ChevronRight className="h-3 w-3" />

            <span>Policies</span>
          </div>

          {/* TOP */}

          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center rounded-full border border-[#DCE7F8] bg-white px-3.5 py-1.5 shadow-sm">

                <span className="text-[10px] font-semibold tracking-[0.2px] text-[#2563EB]">

                  VERIFIED POLICIES
                </span>
              </div>

              <h1 className="mt-4 text-[30px] font-bold leading-[38px] tracking-[-1px] text-[#0F172A] sm:text-[38px] sm:leading-[46px]">

                Policies Available

                <span className="block text-[#2563EB]">

                  For Renewal
                </span>
              </h1>

              <p className="mt-3 max-w-[600px] text-[14px] leading-[25px] text-[#64748B]">

                We found the following policies associated with your details.
              </p>
            </div>

            {/* RIGHT */}

            <div className="rounded-[22px] border border-[#E5EDF7] bg-white p-4 shadow-[0_6px_25px_rgba(15,23,42,0.04)]">

              <div className="flex items-center gap-3">

                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[16px] bg-[#EFF6FF] text-[#2563EB]">

                  <Shield className="h-6 w-6" />
                </div>

                <div>

                  <p className="text-[12px] font-medium text-[#64748B]">

                    Policies Found
                  </p>

                  <h3 className="mt-1 text-[24px] font-bold text-[#0F172A]">

                    {policies.length}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* EMPTY */}

          {policies.length === 0 ? (

            <div className="mt-8 rounded-[24px] border border-[#E5EDF7] bg-white p-10 text-center shadow-[0_6px_24px_rgba(15,23,42,0.04)]">

              <h3 className="text-[22px] font-bold text-[#0F172A]">

                No Policies Found
              </h3>

              <p className="mt-2 text-[14px] text-[#64748B]">

                No policies matched your verification details.
              </p>
            </div>

          ) : (

            <div className="mt-8 space-y-5">

              {policies.map((policy) => (

                <div
                  key={policy.id}
                  className="group relative overflow-hidden rounded-[24px] border border-[#E5EDF7] bg-white p-5 shadow-[0_6px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(37,99,235,0.08)]"
                >

                  <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">

                    {/* LEFT */}

                    <div className="flex flex-1 gap-4">

                      {/* ICON */}

                      <div className="flex h-[64px] w-[64px] min-w-[64px] items-center justify-center rounded-[20px] bg-[#EFF6FF] text-[#2563EB]">

                        <FileText className="h-7 w-7" />
                      </div>

                      {/* DETAILS */}

                      <div className="flex-1">

                        {/* STATUS */}

                        <div className="inline-flex items-center gap-2 rounded-full border border-[#D6F5DF] bg-[#F3FFF7] px-3 py-1">

                          <CheckCircle2 className="h-3 w-3 text-[#16A34A]" />

                          <span className="text-[10px] font-semibold capitalize text-[#16A34A]">

                            {policy.policy_status || "Active"}
                          </span>
                        </div>

                        {/* PLAN */}

                        <h2 className="mt-3 text-[21px] font-bold tracking-[-0.6px] text-[#0F172A]">

                       {policy?.plan?.plan_name ||
  `${policy.category} Insurance Policy`}
                        </h2>

                        {/* POLICY */}

                        <p className="mt-2 text-[13px] font-medium text-[#64748B]">

                          Policy Number :

                          <span className="ml-2 font-semibold text-[#0F172A]">

                            {policy.policy_number}
                          </span>
                        </p>

                        {/* CUSTOMER */}

                        <p className="mt-1.5 text-[13px] font-medium text-[#64748B]">

                          Customer :

                          <span className="ml-2 font-semibold text-[#0F172A]">

                            {policy.customer_name ||
                              "N/A"}
                          </span>
                        </p>

                        {/* INFO */}

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                          {/* PREMIUM */}

                          <div className="rounded-[18px] border border-[#E5EDF7] bg-[#FAFCFF] p-3.5">

                            <div className="flex items-center gap-3">

                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">

                                <CreditCard className="h-4 w-4" />
                              </div>

                              <div>

                                <p className="text-[11px] font-medium text-[#64748B]">

                                  Renewal Premium
                                </p>

                                <h4 className="mt-1 text-[15px] font-bold text-[#0F172A]">

                                  {policy.formatted_premium}
                                </h4>
                              </div>
                            </div>
                          </div>

                          {/* EXPIRY */}

                          <div className="rounded-[18px] border border-[#E5EDF7] bg-[#FAFCFF] p-3.5">

                            <div className="flex items-center gap-3">

                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">

                                <Calendar className="h-4 w-4" />
                              </div>

                              <div>

                                <p className="text-[11px] font-medium text-[#64748B]">

                                  Expiry Date
                                </p>

                                <h4 className="mt-1 text-[14px] font-bold text-[#0F172A]">

                                  {formatDate(
                                    policy.policy_end_date
                                  )}
                                </h4>
                              </div>
                            </div>
                          </div>

                          {/* TYPE */}

                          <div className="rounded-[18px] border border-[#E5EDF7] bg-[#FAFCFF] p-3.5">

                            <div className="flex items-center gap-3">

                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">

                                <Shield className="h-4 w-4" />
                              </div>

                              <div>

                                <p className="text-[11px] font-medium text-[#64748B]">

                                  Insurance Type
                                </p>

                                <h4 className="mt-1 text-[14px] font-bold capitalize text-[#0F172A]">

                                  {policy.category}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* BUTTONS */}

                    <div className="flex flex-col gap-3 xl:w-[200px]">

                      {/* RENEW */} 

<button
onClick={() => handleRenewNow(policy)}
  className="group flex h-[52px] items-center justify-center gap-3 rounded-[18px] bg-[#0F172A] px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#2563EB]"
>
  Renew Now

  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
</button>

                      {/* SUPPORT */}

                      <Link
                        to="/support"
                        className="flex h-[46px] items-center justify-center rounded-[14px] border border-[#DCE5F2] bg-white text-[12.5px] font-semibold text-[#0F172A] transition-all duration-300 hover:border-[#2563EB] hover:text-[#2563EB]"
                      >

                        Contact Support
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RenewalPolicies;