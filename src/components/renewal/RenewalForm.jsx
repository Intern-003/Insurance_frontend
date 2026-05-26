import { Calendar, ArrowRight } from "lucide-react";

const RenewalForm = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 space-y-6"
    >

      {/* APPLICATION NO */}
      <div>
        <label className="mb-3 block text-[14px] font-semibold text-[#0F172A]">
          Application Number
        </label>

        <input
          type="text"
          name="applicationNo"
          value={formData.applicationNo}
          onChange={handleChange}
          placeholder="Enter application number"
          className="h-[58px] w-full rounded-[18px] border border-[#DCE5F2] bg-[#FCFDFF] px-5 text-[15px] text-[#0F172A] outline-none transition-all duration-200 placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white"
        />
      </div>

      {/* OR */}
      <div className="relative py-1">

        <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-[#E5EDF7]" />

        <div className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#E5EDF7] bg-white text-[12px] font-semibold text-[#64748B]">
          OR
        </div>
      </div>

      {/* POLICY NO */}
      <div>
        <label className="mb-3 block text-[14px] font-semibold text-[#0F172A]">
          Policy Number
        </label>

        <input
          type="text"
          name="policyNo"
          value={formData.policyNo}
          onChange={handleChange}
          placeholder="Enter policy number"
          className="h-[58px] w-full rounded-[18px] border border-[#DCE5F2] bg-[#FCFDFF] px-5 text-[15px] text-[#0F172A] outline-none transition-all duration-200 placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white"
        />
      </div>

      {/* ERROR */}
      {errors.identity && (
        <p className="text-[13px] font-medium text-red-500">
          {errors.identity}
        </p>
      )}

      {/* DOB */}
      <div>
        <label className="mb-3 block text-[14px] font-semibold text-[#0F172A]">
          Date of Birth
        </label>

        <div className="relative">

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="h-[58px] w-full rounded-[18px] border border-[#DCE5F2] bg-[#FCFDFF] px-5 pr-14 text-[15px] text-[#0F172A] outline-none transition-all duration-200 focus:border-[#2563EB] focus:bg-white"
          />

          <Calendar className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#94A3B8]" />
        </div>

        {errors.dob && (
          <p className="mt-2 text-[13px] font-medium text-red-500">
            {errors.dob}
          </p>
        )}
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="group mt-4 flex h-[60px] w-full items-center justify-center gap-3 rounded-[20px] bg-[#111827] text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#2563EB]"
      >
        Verify Policy

        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
};

export default RenewalForm;