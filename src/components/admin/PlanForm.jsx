// pages/admin/PlanForm.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGet } from "../../hooks/useGet";
import { usePut } from "../../hooks/usePut";
import { useDelete } from "../../hooks/useDelete";
import { usePost } from "../../hooks/usePost";
import { 
  Shield, 
  Save, 
  X, 
  Loader,
  Heart,
  Car,
  Bike,
  Plane,
  Home,
  Briefcase,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function PlanForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    category: "health",
    plan_name: "",
    slug: "",
    company_name: "",
    short_description: "",
    description: "",
    starting_price: "",
    cashless_hospitals: "",
    claim_ratio: "",
    is_featured: false,
    is_popular: false,
    logo: null
  });

  const [coverages, setCoverages] = useState([]);
  const [features, setFeatures] = useState([]);
  const [riders, setRiders] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  // Modal states
  const [showCoverageModal, setShowCoverageModal] = useState(false);
  const [showFeatureModal, setShowFeatureModal] = useState(false);
  const [showRiderModal, setShowRiderModal] = useState(false);
  const [editingCoverage, setEditingCoverage] = useState(null);
  const [editingFeature, setEditingFeature] = useState(null);
  const [editingRider, setEditingRider] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  // Form states for modals
  const [coverageForm, setCoverageForm] = useState({
    insurance_plan_id: id,
    coverage_name: "",
    coverage_amount: "",
    one_year_price: "",
    two_year_price: "",
    three_year_price: "",
    is_recommended: false
  });

  const [featureForm, setFeatureForm] = useState({
    insurance_plan_id: id,
    feature: ""
  });

  const [riderForm, setRiderForm] = useState({
    insurance_plan_id: id,
    title: "",
    description: "",
    price: ""
  });

  const { data: planData, loading: planLoading } = useGet(
    isEditMode ? `admin/insurance-plan/${id}` : null
  );
  
  const { postData } = usePost();
  const { executePut } = usePut();
  const { executeDelete } = useDelete();

  const categories = [
    { value: "health", label: "Health", icon: Heart },
    { value: "car", label: "Car", icon: Car },
    { value: "bike", label: "Bike", icon: Bike },
    { value: "travel", label: "Travel", icon: Plane },
    { value: "life", label: "Life", icon: Shield },
    { value: "home", label: "Home", icon: Home },
    { value: "business", label: "Business", icon: Briefcase },
    { value: "investment", label: "Investment", icon: TrendingUp }
  ];

  useEffect(() => {
    if (isEditMode && planData?.plan) {
      const plan = planData.plan;
      setFormData({
        category: plan.category,
        plan_name: plan.plan_name,
        slug: plan.slug,
        company_name: plan.company_name,
        short_description: plan.short_description || "",
        description: plan.description || "",
        starting_price: plan.starting_price,
        cashless_hospitals: plan.cashless_hospitals || "",
        claim_ratio: plan.claim_ratio || "",
        is_featured: plan.is_featured || false,
        is_popular: plan.is_popular || false,
        logo: null
      });
      setCoverages(plan.coverages || []);
      setFeatures(plan.features || []);
      setRiders(plan.riders || []);
    }
  }, [planData, isEditMode]);

  const generateSlug = () => {
    const slug = formData.plan_name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    setFormData(prev => ({ ...prev, slug }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, logo: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const submitData = new FormData();
      
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== undefined && key !== 'logo') {
          if (key === 'is_featured' || key === 'is_popular') {
            submitData.append(key, formData[key] ? 1 : 0);
          } else {
            submitData.append(key, formData[key]);
          }
        }
      });

      if (formData.logo) {
        submitData.append('logo', formData.logo);
      }

      if (isEditMode) {
        submitData.append('_method', 'PUT');
        await postData(`admin/insurance-plan/${id}`, submitData);
      } else {
        const response = await postData("insurance-plan", submitData);
        if (response.plan?.id) {
          navigate(`/admin/plans/${response.plan.id}/edit`);
          return;
        }
      }
      navigate("/admin/plans");
    } catch (error) {
      console.error("Error saving plan:", error);
      alert("Failed to save plan. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ==================== COVERAGE CRUD ====================
  const openCoverageModal = (coverage = null) => {
    if (coverage) {
      setEditingCoverage(coverage);
      setCoverageForm({
        insurance_plan_id: id,
        coverage_name: coverage.coverage_name,
        coverage_amount: coverage.coverage_amount,
        one_year_price: coverage.one_year_price,
        two_year_price: coverage.two_year_price || "",
        three_year_price: coverage.three_year_price || "",
        is_recommended: coverage.is_recommended || false
      });
    } else {
      setEditingCoverage(null);
      setCoverageForm({
        insurance_plan_id: id,
        coverage_name: "",
        coverage_amount: "",
        one_year_price: "",
        two_year_price: "",
        three_year_price: "",
        is_recommended: false
      });
    }
    setShowCoverageModal(true);
  };

  const saveCoverage = async () => {
    setModalLoading(true);
    try {
      if (editingCoverage) {
        await executePut(`admin/coverage/${editingCoverage.id}`, coverageForm);
        setCoverages(coverages.map(c => c.id === editingCoverage.id ? { ...c, ...coverageForm } : c));
      } else {
        const response = await postData("insurance-coverage", coverageForm);
        setCoverages([...coverages, response.coverage]);
      }
      setShowCoverageModal(false);
    } catch (error) {
      console.error("Error saving coverage:", error);
      alert("Failed to save coverage");
    } finally {
      setModalLoading(false);
    }
  };

  const deleteCoverage = async (coverageId) => {
    if (window.confirm("Are you sure you want to delete this coverage?")) {
      try {
        await executeDelete(`admin/coverage/${coverageId}`);
        setCoverages(coverages.filter(c => c.id !== coverageId));
      } catch (error) {
        console.error("Error deleting coverage:", error);
        alert("Failed to delete coverage");
      }
    }
  };

  // ==================== FEATURE CRUD ====================
  const openFeatureModal = (feature = null) => {
    if (feature) {
      setEditingFeature(feature);
      setFeatureForm({
        insurance_plan_id: id,
        feature: feature.feature
      });
    } else {
      setEditingFeature(null);
      setFeatureForm({
        insurance_plan_id: id,
        feature: ""
      });
    }
    setShowFeatureModal(true);
  };

  const saveFeature = async () => {
    setModalLoading(true);
    try {
      if (editingFeature) {
        await executePut(`admin/feature/${editingFeature.id}`, featureForm);
        setFeatures(features.map(f => f.id === editingFeature.id ? { ...f, ...featureForm } : f));
      } else {
        const response = await postData("insurance-feature", featureForm);
        setFeatures([...features, response.feature]);
      }
      setShowFeatureModal(false);
    } catch (error) {
      console.error("Error saving feature:", error);
      alert("Failed to save feature");
    } finally {
      setModalLoading(false);
    }
  };

  const deleteFeature = async (featureId) => {
    if (window.confirm("Are you sure you want to delete this feature?")) {
      try {
        await executeDelete(`admin/feature/${featureId}`);
        setFeatures(features.filter(f => f.id !== featureId));
      } catch (error) {
        console.error("Error deleting feature:", error);
        alert("Failed to delete feature");
      }
    }
  };

  // ==================== RIDER CRUD ====================
  const openRiderModal = (rider = null) => {
    if (rider) {
      setEditingRider(rider);
      setRiderForm({
        insurance_plan_id: id,
        title: rider.title,
        description: rider.description || "",
        price: rider.price
      });
    } else {
      setEditingRider(null);
      setRiderForm({
        insurance_plan_id: id,
        title: "",
        description: "",
        price: ""
      });
    }
    setShowRiderModal(true);
  };

  const saveRider = async () => {
    setModalLoading(true);
    try {
      if (editingRider) {
        await executePut(`admin/rider/${editingRider.id}`, riderForm);
        setRiders(riders.map(r => r.id === editingRider.id ? { ...r, ...riderForm } : r));
      } else {
        const response = await postData("insurance-rider", riderForm);
        setRiders([...riders, response.rider]);
      }
      setShowRiderModal(false);
    } catch (error) {
      console.error("Error saving rider:", error);
      alert("Failed to save rider");
    } finally {
      setModalLoading(false);
    }
  };

  const deleteRider = async (riderId) => {
    if (window.confirm("Are you sure you want to delete this rider?")) {
      try {
        await executeDelete(`admin/rider/${riderId}`);
        setRiders(riders.filter(r => r.id !== riderId));
      } catch (error) {
        console.error("Error deleting rider:", error);
        alert("Failed to delete rider");
      }
    }
  };

  if (planLoading && isEditMode) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader className="w-12 h-12 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {isEditMode ? "Edit Insurance Plan" : "Create New Insurance Plan"}
          </h1>
          <p className="text-gray-500 mt-1">
            {isEditMode ? "Update plan details" : "Add a new insurance plan to the system"}
          </p>
        </div>
        <button
          onClick={() => navigate("/admin/plans")}
          className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b bg-gradient-to-r from-gray-50 to-white">
            <h2 className="text-lg font-semibold text-gray-800">Basic Information</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plan Name *</label>
                <input
                  type="text"
                  name="plan_name"
                  value={formData.plan_name}
                  onChange={handleInputChange}
                  onBlur={generateSlug}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Starting Price (₹) *</label>
                <input
                  type="number"
                  name="starting_price"
                  value={formData.starting_price}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Claim Ratio (%)</label>
                <input
                  type="text"
                  name="claim_ratio"
                  value={formData.claim_ratio}
                  onChange={handleInputChange}
                  placeholder="e.g., 95.5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cashless Hospitals</label>
                <input
                  type="text"
                  name="cashless_hospitals"
                  value={formData.cashless_hospitals}
                  onChange={handleInputChange}
                  placeholder="e.g., 5000+"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
                <input
                  type="file"
                  name="logo"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {isEditMode && planData?.plan?.logo_url && (
                  <div className="mt-2">
                    <img src={planData.plan.logo_url} alt="Current logo" className="h-12 object-contain" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="is_featured"
                  checked={formData.is_featured}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Featured Plan</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="is_popular"
                  checked={formData.is_popular}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Popular Plan</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
              <textarea
                name="short_description"
                value={formData.short_description}
                onChange={handleInputChange}
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief description of the plan"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Detailed description of the plan"
              />
            </div>
          </div>
        </div>

        {/* Coverages Section */}
        {isEditMode && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b bg-gradient-to-r from-gray-50 to-white flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Coverages</h2>
                <p className="text-sm text-gray-500 mt-1">Manage insurance coverage options</p>
              </div>
              <button
                type="button"
                onClick={() => openCoverageModal()}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <Plus className="w-4 h-4" />
                Add Coverage
              </button>
            </div>
            <div className="p-6">
              {coverages.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No coverages added yet</p>
              ) : (
                <div className="space-y-3">
                  {coverages.map((coverage) => (
                    <div key={coverage.id} className="border rounded-lg p-4 flex justify-between items-start hover:bg-gray-50">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-gray-800">{coverage.coverage_name}</h4>
                          {coverage.is_recommended && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Recommended</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">Coverage Amount: ₹{parseInt(coverage.coverage_amount).toLocaleString()}</p>
                        <div className="flex gap-4 mt-2 text-sm">
                          <span className="text-blue-600">1Y: ₹{parseInt(coverage.one_year_price).toLocaleString()}</span>
                          {coverage.two_year_price && <span>2Y: ₹{parseInt(coverage.two_year_price).toLocaleString()}</span>}
                          {coverage.three_year_price && <span>3Y: ₹{parseInt(coverage.three_year_price).toLocaleString()}</span>}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => openCoverageModal(coverage)} className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button type="button" onClick={() => deleteCoverage(coverage.id)} className="p-1 text-red-600 hover:bg-red-50 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Features Section */}
        {isEditMode && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b bg-gradient-to-r from-gray-50 to-white flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Features</h2>
                <p className="text-sm text-gray-500 mt-1">Key features of this insurance plan</p>
              </div>
              <button
                type="button"
                onClick={() => openFeatureModal()}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <Plus className="w-4 h-4" />
                Add Feature
              </button>
            </div>
            <div className="p-6">
              {features.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No features added yet</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature.id} className="flex items-center justify-between border rounded-lg p-3 hover:bg-gray-50">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{feature.feature}</span>
                      </div>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => openFeatureModal(feature)} className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                          <Edit className="w-3 h-3" />
                        </button>
                        <button type="button" onClick={() => deleteFeature(feature.id)} className="p-1 text-red-600 hover:bg-red-50 rounded">
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Riders Section */}
        {isEditMode && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b bg-gradient-to-r from-gray-50 to-white flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Riders / Add-ons</h2>
                <p className="text-sm text-gray-500 mt-1">Additional coverage options</p>
              </div>
              <button
                type="button"
                onClick={() => openRiderModal()}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <Plus className="w-4 h-4" />
                Add Rider
              </button>
            </div>
            <div className="p-6">
              {riders.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No riders added yet</p>
              ) : (
                <div className="space-y-3">
                  {riders.map((rider) => (
                    <div key={rider.id} className="border rounded-lg p-4 flex justify-between items-start hover:bg-gray-50">
                      <div>
                        <h4 className="font-semibold text-gray-800">{rider.title}</h4>
                        {rider.description && <p className="text-sm text-gray-600 mt-1">{rider.description}</p>}
                        <p className="text-sm font-medium text-blue-600 mt-2">₹{parseInt(rider.price).toLocaleString()}</p>
                      </div>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => openRiderModal(rider)} className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button type="button" onClick={() => deleteRider(rider.id)} className="p-1 text-red-600 hover:bg-red-50 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Submit Buttons */}
        <div className="flex gap-3 justify-end sticky bottom-4 bg-white p-4 rounded-xl shadow-lg">
          <button
            type="button"
            onClick={() => navigate("/admin/plans")}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {submitting ? <Loader className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isEditMode ? "Update Plan" : "Create Plan"}
          </button>
        </div>
      </form>

      {/* Coverage Modal */}
      {showCoverageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white px-6 py-4 border-b flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {editingCoverage ? "Edit Coverage" : "Add Coverage"}
                </h2>
                <p className="text-sm text-gray-500 mt-1">Configure coverage details</p>
              </div>
              <button onClick={() => setShowCoverageModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Coverage Name *</label>
                <input
                  type="text"
                  value={coverageForm.coverage_name}
                  onChange={(e) => setCoverageForm({...coverageForm, coverage_name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Basic, Standard, Premium"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Coverage Amount (₹) *</label>
                <input
                  type="number"
                  value={coverageForm.coverage_amount}
                  onChange={(e) => setCoverageForm({...coverageForm, coverage_amount: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 500000"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">1 Year Price (₹) *</label>
                  <input
                    type="number"
                    value={coverageForm.one_year_price}
                    onChange={(e) => setCoverageForm({...coverageForm, one_year_price: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">2 Year Price (₹)</label>
                  <input
                    type="number"
                    value={coverageForm.two_year_price}
                    onChange={(e) => setCoverageForm({...coverageForm, two_year_price: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">3 Year Price (₹)</label>
                  <input
                    type="number"
                    value={coverageForm.three_year_price}
                    onChange={(e) => setCoverageForm({...coverageForm, three_year_price: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={coverageForm.is_recommended}
                  onChange={(e) => setCoverageForm({...coverageForm, is_recommended: e.target.checked})}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Mark as Recommended</span>
              </label>
              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowCoverageModal(false)} className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50">Cancel</button>
                <button onClick={saveCoverage} disabled={modalLoading} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">
                  {modalLoading ? <Loader className="w-4 h-4 animate-spin mx-auto" /> : (editingCoverage ? "Update" : "Add")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feature Modal */}
      {showFeatureModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">{editingFeature ? "Edit Feature" : "Add Feature"}</h2>
              <button onClick={() => setShowFeatureModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Feature *</label>
                <input
                  type="text"
                  value={featureForm.feature}
                  onChange={(e) => setFeatureForm({...featureForm, feature: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 24/7 Customer Support"
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setShowFeatureModal(false)} className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50">Cancel</button>
                <button onClick={saveFeature} disabled={modalLoading} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">
                  {modalLoading ? <Loader className="w-4 h-4 animate-spin mx-auto" /> : (editingFeature ? "Update" : "Add")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rider Modal */}
      {showRiderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">{editingRider ? "Edit Rider" : "Add Rider"}</h2>
              <button onClick={() => setShowRiderModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <input
                  type="text"
                  value={riderForm.title}
                  onChange={(e) => setRiderForm({...riderForm, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Critical Illness Cover"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={riderForm.description}
                  onChange={(e) => setRiderForm({...riderForm, description: e.target.value})}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Detailed description of the rider"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹) *</label>
                <input
                  type="number"
                  value={riderForm.price}
                  onChange={(e) => setRiderForm({...riderForm, price: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 5000"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowRiderModal(false)} className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50">Cancel</button>
                <button onClick={saveRider} disabled={modalLoading} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">
                  {modalLoading ? <Loader className="w-4 h-4 animate-spin mx-auto" /> : (editingRider ? "Update" : "Add")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}