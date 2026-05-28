import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header";
import RenewalForm from "../../components/renewal/RenewalForm";

import logo from "../../assets/images/logo.png";

const RenewalVerify = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({

    applicationNo: "",

    policyNo: "",

    dob: "",
  });

  /*
  |--------------------------------------------------------------------------
  | HANDLE CHANGE
  |--------------------------------------------------------------------------
  */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({

      ...prev,

      [name]: value,
    }));

    setErrors((prev) => ({

      ...prev,

      [name]: "",

      identity: "",
    }));
  };

  /*
  |--------------------------------------------------------------------------
  | VALIDATE
  |--------------------------------------------------------------------------
  */

  const validateForm = () => {

    const newErrors = {};

    if (
      !formData.applicationNo.trim() &&
      !formData.policyNo.trim()
    ) {

      newErrors.identity =
        "Enter Application Number or Policy Number";
    }

    if (!formData.dob) {

      newErrors.dob =
        "Date of Birth is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /*
  |--------------------------------------------------------------------------
  | SUBMIT
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(

        `${import.meta.env.VITE_API_URL}renewals/verify`,

        {
          application_number:
            formData.applicationNo || null,

          policy_number:
            formData.policyNo || null,

          date_of_birth:
            formData.dob,
        }
      );

      if (
        response.data.status &&
        response.data.policies?.length > 0
      ) {

        navigate("/renewals/policies", {

          state: {

            policies:
              response.data.policies,
          },
        });

      } else {

        setErrors({

          identity:
            "No policies found",
        });
      }

    } catch (error) {

      console.log(error);

      setErrors({

        identity:
          error?.response?.data?.message ||
          "Unable to verify policy",
      });

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-[#F4F7FB]">

      <Header />

      <div className="mx-auto max-w-[560px] px-4 py-5">

        <div className="overflow-hidden rounded-[22px] border border-[#E7EEF7] bg-white shadow-[0_6px_24px_rgba(15,23,42,0.04)]">

          {/* TOP */}

          <div className="border-b border-[#EEF2F7] px-5 py-4 sm:px-6">

            <div className="text-center">

              {/* LOGO */}

              <img
                src={logo}
                alt="SPAY Insurance"
                className="mx-auto h-[42px] w-auto object-contain"
              />

              {/* TITLE */}

              <h1 className="mt-2 text-[26px] font-black tracking-[-1px] text-[#0F172A]">

                Renew Your Policy
              </h1>

              {/* DESC */}

              <p className="mx-auto mt-1.5 max-w-[430px] text-[13px] leading-[22px] text-[#64748B]">

                Verify your insurance policy using your
                Application Number or Policy Number along
                with Date of Birth to continue renewal.
              </p>
            </div>
          </div>

          {/* FORM */}

          <div className="px-5 py-4 sm:px-6">

            <RenewalForm
              formData={formData}
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />

            {/* API ERROR */}

            {errors.identity && (

              <div className="mt-3 rounded-[14px] border border-red-200 bg-red-50 px-4 py-3">

                <p className="text-[12.5px] font-medium text-red-600">

                  {errors.identity}
                </p>
              </div>
            )}

            {/* LOADING */}

            {loading && (

              <div className="mt-4 flex justify-center">

                <div className="flex items-center gap-2 rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-3 py-1.5">

                  <div className="h-3 w-3 animate-spin rounded-full border-2 border-[#2563EB] border-t-transparent" />

                  <span className="text-[12px] font-medium text-[#2563EB]">

                    Verifying Policy...
                  </span>
                </div>
              </div>
            )}

            {/* NOTE */}

            <div className="mt-4 rounded-[14px] border border-[#EDF2F7] bg-[#FAFCFF] p-3">

              <p className="text-center text-[11.5px] leading-[20px] text-[#64748B]">

                Ensure your Date of Birth matches your
                registered policy details for successful
                verification and renewal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewalVerify;