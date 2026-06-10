// pages/admin/Leads.jsx
import { useState, useEffect } from "react";
import { useGet } from "../../hooks/useGet";
import { usePut } from "../../hooks/usePut";
import { useDelete } from "../../hooks/useDelete";
import { 
  Search, 
  Filter, 
  Eye, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Car,
  Briefcase,
  Trash2,
  Edit2,
  X,
  CheckCircle,
  Clock,
  UserCheck,
  UserX,
  AlertCircle
} from "lucide-react";
// Missing imports
import { Users, TrendingUp } from "lucide-react";
export default function Leads() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLead, setSelectedLead] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [editFormData, setEditFormData] = useState({});

  // Fetch leads with filters
  const { data, loading, refetch } = useGet(
    `/insurance-leads?page=${currentPage}&category=${categoryFilter !== "all" ? categoryFilter : ""}&status=${statusFilter !== "all" ? statusFilter : ""}`
  );
  
  const { executePut } = usePut();
  const { executeDelete } = useDelete();

  const leads = data?.leads?.data || [];
  const pagination = data?.leads || {};
  const totalPages = pagination?.last_page || 1;
  const total = pagination?.total || 0;
  const currentPageNum = pagination?.current_page || 1;

  const categories = ["all", "health", "car", "life", "travel", "bike", "home", "business", "investment"];
  const statuses = [
    { value: "all", label: "All Status", icon: null },
    { value: "new", label: "New", icon: AlertCircle, color: "text-blue-600", bgColor: "bg-blue-100" },
    { value: "contacted", label: "Contacted", icon: Phone, color: "text-yellow-600", bgColor: "bg-yellow-100" },
    { value: "converted", label: "Converted", icon: CheckCircle, color: "text-green-600", bgColor: "bg-green-100" },
    { value: "rejected", label: "Rejected", icon: UserX, color: "text-red-600", bgColor: "bg-red-100" }
  ];

  // Filter leads based on search term
  const filteredLeads = leads.filter(lead =>
    lead.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.mobile?.includes(searchTerm)
  );

  // Update lead status
  const updateLeadStatus = async (leadId, status) => {
    setUpdating(true);
    try {
      await executePut(`admin/lead/${leadId}/status`, { status });
      refetch();
      setShowStatusModal(false);
      setSelectedLead(null);
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  // Update lead details
  const updateLeadDetails = async (e) => {
    e.preventDefault();
    setUpdating(true);
    try {
      await executePut(`admin/lead/${selectedLead.id}`, editFormData);
      refetch();
      setShowEditModal(false);
      setSelectedLead(null);
    } catch (error) {
      console.error("Error updating lead:", error);
      alert("Failed to update lead. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  // Delete lead
  const deleteLead = async (id) => {
    if (window.confirm("Are you sure you want to delete this lead? This action cannot be undone.")) {
      setUpdating(true);
      try {
        await executeDelete(`admin/lead/${id}`);
        refetch();
      } catch (error) {
        console.error("Error deleting lead:", error);
        alert("Failed to delete lead. Please try again.");
      } finally {
        setUpdating(false);
      }
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    const headers = ["ID", "Name", "Email", "Mobile", "Category", "Status", "Date of Birth", "Vehicle Number", "Destination", "Travel Start", "Travel End", "Extra Details", "Created At"];
    const csvData = leads.map(lead => [
      lead.id,
      lead.full_name || "",
      lead.email || "",
      lead.mobile,
      lead.category,
      lead.status || "new",
      lead.date_of_birth || "",
      lead.vehicle_number || "",
      lead.destination || "",
      lead.travel_start_date || "",
      lead.travel_end_date || "",
      lead.extra_details || "",
      new Date(lead.created_at).toLocaleString()
    ]);
    
    const csvContent = [headers, ...csvData].map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Get status badge component
  const getStatusBadge = (status) => {
    const statusConfig = {
      new: { label: "New", icon: AlertCircle, color: "text-blue-700", bgColor: "bg-blue-100" },
      contacted: { label: "Contacted", icon: Phone, color: "text-yellow-700", bgColor: "bg-yellow-100" },
      converted: { label: "Converted", icon: CheckCircle, color: "text-green-700", bgColor: "bg-green-100" },
      rejected: { label: "Rejected", icon: UserX, color: "text-red-700", bgColor: "bg-red-100" }
    };
    const config = statusConfig[status] || statusConfig.new;
    
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${config.bgColor} ${config.color}`}>
        <config.icon className="w-3 h-3" />
        {config.label}
      </span>
    );
  };

  // Open edit modal with lead data
  const openEditModal = (lead) => {
    setSelectedLead(lead);
    setEditFormData({
      full_name: lead.full_name || "",
      email: lead.email || "",
      mobile: lead.mobile || "",
      category: lead.category || "health"
    });
    setShowEditModal(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading leads...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Insurance Leads</h1>
          <p className="text-gray-500 mt-1">Manage and track all incoming insurance leads</p>
        </div>
        <button
          onClick={exportToCSV}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-sm"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Leads</p>
              <p className="text-2xl font-bold text-gray-800">{total}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">New Leads</p>
              <p className="text-2xl font-bold text-blue-600">{leads.filter(l => l.status === "new").length}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Converted</p>
              <p className="text-2xl font-bold text-green-600">{leads.filter(l => l.status === "converted").length}</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Conversion Rate</p>
              <p className="text-2xl font-bold text-purple-600">
                {total ? Math.round((leads.filter(l => l.status === "converted").length / total) * 100) : 0}%
              </p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, email or mobile..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {statuses.map(status => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead Info</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                      <AlertCircle className="w-12 h-12 text-gray-300" />
                      <p>No leads found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-800">{lead.full_name || "N/A"}</div>
                      <div className="text-sm text-gray-500">{lead.email || "No email"}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">{lead.mobile}</div>
                      {lead.date_of_birth && (
                        <div className="text-xs text-gray-400 mt-1">DOB: {lead.date_of_birth}</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        {lead.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(lead.status)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedLead(lead);
                            setShowStatusModal(true);
                          }}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Update Status"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => openEditModal(lead)}
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Edit Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t flex justify-between items-center bg-gray-50">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPageNum === 1}
              className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                Page {currentPageNum} of {totalPages}
              </span>
              <span className="text-xs text-gray-400">
                ({total} total leads)
              </span>
            </div>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPageNum === totalPages}
              className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Status Update Modal */}
      {showStatusModal && selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowStatusModal(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full mx-4 shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="px-6 py-4 border-b bg-gradient-to-r from-blue-50 to-white rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Update Lead Status</h2>
                  <p className="text-sm text-gray-500 mt-1">Lead: {selectedLead.full_name}</p>
                </div>
                <button 
                  onClick={() => setShowStatusModal(false)} 
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-3">
              {statuses.filter(s => s.value !== "all").map(status => (
                <button
                  key={status.value}
                  onClick={() => updateLeadStatus(selectedLead.id, status.value)}
                  disabled={updating}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                    selectedLead.status === status.value
                      ? "border-blue-500 bg-blue-50 shadow-md"
                      : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${status.bgColor}`}>
                      <status.icon className={`w-5 h-5 ${status.color}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{status.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {status.value === "new" && "Newly received lead awaiting contact"}
                        {status.value === "contacted" && "Successfully contacted by team"}
                        {status.value === "converted" && "Lead converted to policy"}
                        {status.value === "rejected" && "Lead rejected or not interested"}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Edit Lead Modal */}
      {showEditModal && selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowEditModal(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full mx-4 shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="px-6 py-4 border-b bg-gradient-to-r from-blue-50 to-white rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Edit Lead Details</h2>
                  <p className="text-sm text-gray-500 mt-1">Update lead information</p>
                </div>
                <button 
                  onClick={() => setShowEditModal(false)} 
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <form onSubmit={updateLeadDetails} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={editFormData.full_name}
                  onChange={(e) => setEditFormData({...editFormData, full_name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={editFormData.email}
                  onChange={(e) => setEditFormData({...editFormData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                <input
                  type="text"
                  value={editFormData.mobile}
                  onChange={(e) => setEditFormData({...editFormData, mobile: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={editFormData.category}
                  onChange={(e) => setEditFormData({...editFormData, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.filter(c => c !== "all").map(cat => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={updating}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {updating ? "Updating..." : "Update Lead"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

