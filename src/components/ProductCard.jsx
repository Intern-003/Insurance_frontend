import { Check, ArrowRight } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Top Badge */}
      <div className="mb-4">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold capitalize text-emerald-700">
          {product.type}
        </span>
      </div>

      {/* Product Name */}
      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>

      {/* Company */}
      <p className="mt-1 text-sm text-gray-500">{product.company}</p>

      {/* Pricing */}
      <div className="mt-6 flex items-end gap-1">
        <span className="text-3xl font-bold text-gray-900">
          ₹{product.premium}
        </span>

        <span className="pb-1 text-gray-500">/month</span>
      </div>

      {/* Coverage */}
      <div className="mt-3 text-sm">
        <span className="text-gray-500">Coverage:</span>

        <span className="ml-2 font-semibold text-emerald-700">
          {product.coverageAmount}
        </span>
      </div>

      {/* Features */}
      <ul className="mt-6 space-y-3">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700" />

            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Highlights */}
      <div className="mt-2 flex flex-wrap gap-2 border-t border-gray-100 pt-5">
        {product.highlights.map((highlight, index) => (
          <span
            key={index}
            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
          >
            {highlight}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href={`/product/${product.id}`}
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-800"
      >
        View Details
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
};

export default ProductCard;
