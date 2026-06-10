// pages/admin/Plans.jsx
import { useState } from "react";
import { useGet } from "../../hooks/useGet";
import { useDelete } from "../../hooks/useDelete";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  X,
  CheckCircle,
  Shield,
  Building,
  TrendingUp,
  DollarSign,
  Heart,
  Car,
  Bike,
  Plane,
  Home,
  Briefcase,
  Star,
  Flame,
  Loader,
  ChevronLeft,
  ChevronRight,
  Search,
  Award,
  Zap,
  Sparkles
} from "lucide-react";

export default function Plans() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [planToDelete, setPlanToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const { data, loading, refetch } = useGet(`admin/insurance-plans?page=${currentPage}`);
  const { executeDelete } = useDelete();

  const plans = data?.plans?.data || [];
  const pagination = data?.plans || {};
  const totalPages = pagination?.last_page || 1;
  const total = pagination?.total || 0;
  const currentPageNum = pagination?.current_page || 1;

  const categories = ["all", "health", "car", "bike", "travel", "life", "home", "business", "investment"];

  // Filter plans based on search and category
  const filteredPlans = plans.filter(plan => {
    const matchesSearch = plan.plan_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plan.company_name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || plan.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category) => {
    const icons = {
      health: Heart,
      car: Car,
      bike: Bike,
      travel: Plane,
      life: Shield,
      home: Home,
      business: Briefcase,
      investment: TrendingUp
    };
    const Icon = icons[category] || Shield;
    return <Icon className="w-4 h-4" />;
  };

  const getCategoryColor = (category) => {
    const colors = {
      health: "bg-red-100 text-red-700",
      car: "bg-blue-100 text-blue-700",
      bike: "bg-green-100 text-green-700",
      travel: "bg-purple-100 text-purple-700",
      life: "bg-pink-100 text-pink-700",
      home: "bg-orange-100 text-orange-700",
      business: "bg-indigo-100 text-indigo-700",
      investment: "bg-teal-100 text-teal-700"
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  const getCategoryGradient = (category) => {
    const gradients = {
      health: "from-red-500 to-pink-500",
      car: "from-blue-500 to-cyan-500",
      bike: "from-green-500 to-emerald-500",
      travel: "from-purple-500 to-indigo-500",
      life: "from-pink-500 to-rose-500",
      home: "from-orange-500 to-amber-500",
      business: "from-indigo-500 to-blue-500",
      investment: "from-teal-500 to-green-500"
    };
    return gradients[category] || "from-gray-500 to-gray-600";
  };

  const deletePlan = async () => {
    if (planToDelete) {
      try {
        await executeDelete(`admin/insurance-plan/${planToDelete}`);
        refetch();
        setShowDeleteConfirm(false);
        setPlanToDelete(null);
      } catch (error) {
        console.error("Error deleting plan:", error);
        alert("Failed to delete plan. Please try again.");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Shield className="w-6 h-6 text-blue-600 animate-pulse" />
            </div>
          </div>
          <p className="mt-4 text-gray-600 font-medium">Loading plans...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Shield className="w-7 h-7" />
              Insurance Plans
            </h1>
            <p className="text-blue-100 mt-1">Manage all insurance plans and their details</p>
          </div>
          <button
            onClick={() => window.location.href = "/admin/plans/new"}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 rounded-xl hover:shadow-lg transition-all font-semibold"
          >
            <Plus className="w-4 h-4" />
            Add New Plan
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Plans</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{total}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Plans</p>
              <p className="text-2xl font-bold text-green-600 mt-1">{filteredPlans.length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Avg. Starting Price</p>
              <p className="text-2xl font-bold text-purple-600 mt-1">
                ₹{filteredPlans.length ? Math.round(filteredPlans.reduce((sum, p) => sum + parseFloat(p.starting_price), 0) / filteredPlans.length) : 0}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Featured Plans</p>
              <p className="text-2xl font-bold text-orange-600 mt-1">{filteredPlans.filter(p => p.is_featured).length}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by plan name or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
          {(searchTerm || categoryFilter !== "all") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
              }}
              className="px-4 py-2.5 text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Plans Grid */}
      {filteredPlans.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-gray-100">
          <Shield className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">No plans found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map((plan, index) => (
            <div 
              key={plan.id} 
              className="group bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryGradient(plan.category)} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}></div>
                {plan.logo_url ? (
                  <img
                    src={plan.logo_url}
                    alt={plan.plan_name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      const fallback = document.createElement('div');
                      fallback.className = `w-full h-full flex items-center justify-center bg-gradient-to-br ${getCategoryGradient(plan.category)} text-white font-bold text-6xl`;
                      fallback.textContent = plan.plan_name.charAt(0).toUpperCase();
                      parent.appendChild(fallback);
                    }}
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${getCategoryGradient(plan.category)} text-white font-bold text-6xl`}>
                    {plan.plan_name.charAt(0).toUpperCase()}
                  </div>
                )}
                
                {/* Badges */}
                <div className="absolute top-3 right-3 flex gap-2 z-20">
                  {plan.is_featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-medium rounded-full shadow-lg">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                  {plan.is_popular && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-medium rounded-full shadow-lg">
                      <Flame className="w-3 h-3" />
                      Popular
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {plan.plan_name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Building className="w-3 h-3 text-gray-400" />
                      <p className="text-xs text-gray-500 line-clamp-1">{plan.company_name}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full shadow-sm ${getCategoryColor(plan.category)}`}>
                    {getCategoryIcon(plan.category)}
                    {plan.category}
                  </span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2 mb-4 min-h-[40px]">
                  {plan.short_description || "No description available"}
                </p>

                <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-xl font-bold text-blue-600">₹{parseInt(plan.starting_price).toLocaleString()}</p>
                  </div>
                  {plan.claim_ratio && (
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Claim Ratio</p>
                      <p className="text-sm font-semibold text-green-600 flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {plan.claim_ratio}%
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => {
                      setSelectedPlan(plan);
                      setShowViewModal(true);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button
                    onClick={() => window.location.href = `/admin/plans/${plan.id}/edit`}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-200 font-medium text-sm"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setPlanToDelete(plan.id);
                      setShowDeleteConfirm(true);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-700 bg-red-50 rounded-lg hover:bg-red-100 transition-all duration-200 font-medium text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center gap-4 pt-6 pb-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPageNum === 1}
            className="flex items-center gap-2 px-5 py-2.5 text-gray-600 border border-gray-200 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-600">
              Page {currentPageNum} of {totalPages}
            </span>
            <span className="text-xs text-gray-400">
              ({total} total plans)
            </span>
          </div>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPageNum === totalPages}
            className="flex items-center gap-2 px-5 py-2.5 text-gray-600 border border-gray-200 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* View Plan Modal */}
      {showViewModal && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={() => setShowViewModal(false)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-blue-50 to-white px-6 py-4 border-b flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Plan Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">{selectedPlan.plan_name}</p>
              </div>
              <button onClick={() => setShowViewModal(false)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {selectedPlan.logo_url && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Logo</label>
                    <img src={selectedPlan.logo_url} alt={selectedPlan.plan_name} className="h-16 object-contain" />
                  </div>
                )}
                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Plan Name</label>
                  <p className="text-gray-800 font-semibold text-lg">{selectedPlan.plan_name}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Company</label>
                  <p className="text-gray-800">{selectedPlan.company_name}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Category</label>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full ${getCategoryColor(selectedPlan.category)}`}>
                    {getCategoryIcon(selectedPlan.category)}
                    {selectedPlan.category}
                  </span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Starting Price</label>
                  <p className="text-2xl font-bold text-blue-600">₹{parseInt(selectedPlan.starting_price).toLocaleString()}</p>
                </div>
                {selectedPlan.claim_ratio && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Claim Ratio</label>
                    <p className="text-gray-800 font-semibold">{selectedPlan.claim_ratio}%</p>
                  </div>
                )}
                {selectedPlan.cashless_hospitals && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Cashless Hospitals</label>
                    <p className="text-gray-800">{selectedPlan.cashless_hospitals}</p>
                  </div>
                )}
              </div>

              {/* Description */}
              {selectedPlan.short_description && (
                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Short Description</label>
                  <p className="text-gray-700">{selectedPlan.short_description}</p>
                </div>
              )}
              {selectedPlan.description && (
                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Full Description</label>
                  <div className="text-gray-700 prose max-w-none" dangerouslySetInnerHTML={{ __html: selectedPlan.description }} />
                </div>
              )}

              {/* Coverages */}
              {selectedPlan.coverages?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Coverages
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedPlan.coverages.map((coverage) => (
                      <div key={coverage.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-800">{coverage.coverage_name}</h4>
                          {coverage.is_recommended && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              Recommended
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">Coverage: ₹{parseInt(coverage.coverage_amount).toLocaleString()}</p>
                        <div className="flex gap-3 mt-2 text-sm">
                          <span className="text-blue-600 font-medium">1Y: ₹{parseInt(coverage.one_year_price).toLocaleString()}</span>
                          {coverage.two_year_price && <span>2Y: ₹{parseInt(coverage.two_year_price).toLocaleString()}</span>}
                          {coverage.three_year_price && <span>3Y: ₹{parseInt(coverage.three_year_price).toLocaleString()}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {selectedPlan.features?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedPlan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{feature.feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Riders */}
              {selectedPlan.riders?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-500" />
                    Riders & Add-ons
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedPlan.riders.map((rider) => (
                      <div key={rider.id} className="border border-gray-200 rounded-xl p-4">
                        <h4 className="font-semibold text-gray-800">{rider.title}</h4>
                        {rider.description && <p className="text-sm text-gray-600 mt-1">{rider.description}</p>}
                        <p className="text-sm font-medium text-blue-600 mt-2">Price: ₹{parseInt(rider.price).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setShowDeleteConfirm(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full mx-4 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mx-auto mb-4">
                <Trash2 className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Delete Plan</h3>
              <p className="text-gray-500 text-center mb-6">
                Are you sure you want to delete this plan? This action cannot be undone and will remove all associated data.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={deletePlan}
                  className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}