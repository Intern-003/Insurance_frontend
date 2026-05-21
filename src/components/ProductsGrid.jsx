import { useState } from "react";
import ProductCard from "./ProductCard";
import insuranceProducts from "../data/products";

const filterOptions = [
  { label: "All Plans", value: "all" },
  { label: "Individual", value: "individual" },
  { label: "Family", value: "family" },
  { label: "Senior Citizen", value: "senior" },
  { label: "Critical Illness", value: "critical" },
];

const ProductsGrid = () => {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? insuranceProducts
      : insuranceProducts.filter((product) => product.type === filter);

  return (
    <section id="products" className="bg-[#f8fafc] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose Your Insurance Plan
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Compare plans from India&apos;s top insurance providers and select
            the best coverage for yourself and your family.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`rounded-2xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                filter === option.value
                  ? "bg-emerald-700 text-white shadow-md"
                  : "border border-gray-300 bg-white text-gray-700 hover:border-emerald-700 hover:text-emerald-700"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-500">No insurance plans found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsGrid;
