import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RenewalCard = ({
  icon: Icon,
  title,
  description,
  slug,
}) => {
  return (
    <Link
      to={`/renewals/${slug}`}
      className="group relative overflow-hidden rounded-[32px] border border-[#E5EDF7] bg-white p-8 shadow-[0_6px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#CFE0FF] hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]"
    >

      {/* ICON */}
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] bg-[#EFF6FF] text-[#2563EB] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white">
        <Icon className="h-8 w-8 stroke-[2]" />
      </div>

      {/* CONTENT */}
      <div className="mt-7">

        <h3 className="text-[24px] font-semibold tracking-[-0.5px] text-[#0F172A] transition-colors duration-200 group-hover:text-[#2563EB]">
          {title}
        </h3>

        <p className="mt-4 text-[15.5px] leading-[29px] text-[#64748B]">
          {description}
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
    </Link>
  );
};

export default RenewalCard;