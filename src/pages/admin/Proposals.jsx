// pages/admin/Proposals.jsx
import { useState } from "react";
import { useGet } from "../../hooks/useGet";
import { usePut } from "../../hooks/usePut";
import { useDelete } from "../../hooks/useDelete";
import { 
  Search, 
  Eye, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  Mail,
  Phone,
  Calendar,
  Shield,
  DollarSign,
  FileText,
  Trash2,
  Edit2,
  X,
  CheckCircle,
  Clock,
  AlertCircle,
  RefreshCw,
  Users,
  TrendingUp
} from "lucide-react";

export default function Proposals() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentFilter, setPaymentFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [proposalToDelete, setProposalToDelete] = useState(null);
  const [updating, setUpdating] = useState(false);

  const { data, loading, refetch } = useGet(`/insurance-proposals?page=${currentPage}`);
  const { executePut } = usePut();
  const { executeDelete } = useDelete();

  const proposals = data?.proposals?.data || [];
  const pagination = data?.proposals || {};
  const totalPages = pagination?.last_page || 1;
  const total = pagination?.total || 0;
  const currentPageNum = pagination?.current_page || 1;

  const statuses = [
    { value: "all", label: "All Status" },
    { value: "pending", label: "Pending", color: "text-yellow-600", bgColor: "bg-yellow-100" },
    { value: "active", label: "Active", color: "text-green-600", bgColor: "bg-green-100" },
    { value: "expired", label: "Expired", color: "text-red-600", bgColor: "bg-red-100" },
    { value: "renewed", label: "Renewed", color: "text-blue-600", bgColor: "bg-blue-100" }
  ];

  const paymentStatuses = [
    { value: "all", label: "All Payment" },
    { value: "pending", label: "Pending", color: "text-red-600", bgColor: "bg-red-100" },
    { value: "paid", label: "Paid", color: "text-green-600", bgColor: "bg-green-100" }
  ];

  // Filter proposals based on search term and filters
  const filteredProposals = proposals.filter(proposal => {
    const matchesSearch = 
      proposal.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal.application_number?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal.mobile?.includes(searchTerm) ||
      proposal.policy_number?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || proposal.policy_status === statusFilter;
    const matchesPayment = paymentFilter === "all" || proposal.payment_status === paymentFilter;
    
    return matchesSearch && matchesStatus && matchesPayment;
  });

  // Update proposal status
  const updateProposalStatus = async (proposalId, status) => {
    setUpdating(true);
    try {
      await executePut(`admin/proposal/${proposalId}/status`, { policy_status: status });
      refetch();
      setShowStatusModal(false);
      setSelectedProposal(null);
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  // Delete proposal
  const deleteProposal = async () => {
    if (proposalToDelete) {
      setUpdating(true);
      try {
        await executeDelete(`admin/proposal/${proposalToDelete}`);
        refetch();
        setShowDeleteConfirm(false);
        setProposalToDelete(null);
      } catch (error) {
        console.error("Error deleting proposal:", error);
        alert("Failed to delete proposal. Please try again.");
      } finally {
        setUpdating(false);
      }
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    const headers = ["ID", "Application No", "Policy No", "Customer Name", "Email", "Mobile", "Category", "Plan", "Premium", "Payment Status", "Policy Status", "Start Date", "End Date", "Created At"];
    const csvData = proposals.map(proposal => [
      proposal.id,
      proposal.application_number || "",
      proposal.policy_number || "",
      proposal.full_name || "",
      proposal.email || "",
      proposal.mobile,
      proposal.category,
      proposal.plan?.plan_name || "",
      proposal.premium_amount,
      proposal.payment_status,
      proposal.policy_status,
      proposal.policy_start_date || "",
      proposal.policy_end_date || "",
      new Date(proposal.created_at).toLocaleString()
    ]);
    
    const csvContent = [headers, ...csvData].map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `proposals_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusBadge = (status) => {
    const config = statuses.find(s => s.value === status) || statuses[0];
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${config.bgColor} ${config.color}`}>
        {status === "active" && <CheckCircle className="w-3 h-3" />}
        {status === "pending" && <Clock className="w-3 h-3" />}
        {status === "expired" && <AlertCircle className="w-3 h-3" />}
        {status === "renewed" && <RefreshCw className="w-3 h-3" />}
        {config.label}
      </span>
    );
  };

  const getPaymentBadge = (status) => {
    const config = paymentStatuses.find(s => s.value === status) || paymentStatuses[0];
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${config.bgColor} ${config.color}`}>
        {status === "paid" ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
        {status === "paid" ? "Paid" : "Pending"}
      </span>
    );
  };

  // Calculate stats
  const stats = {
    total: total,
    active: proposals.filter(p => p.policy_status === "active").length,
    pending: proposals.filter(p => p.payment_status === "pending").length,
    paid: proposals.filter(p => p.payment_status === "paid").length
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading proposals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Insurance Proposals</h1>
          <p className="text-gray-500 mt-1">Manage and track all insurance proposals and policies</p>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Proposals</p>
              <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Policies</p>
              <p className="text-2xl font-bold text-green-600">{stats.active}</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Payment</p>
              <p className="text-2xl font-bold text-red-600">{stats.pending}</p>
            </div>
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-red-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Premium</p>
              <p className="text-2xl font-bold text-purple-600">
                ₹{proposals.reduce((sum, p) => sum + (parseFloat(p.premium_amount) || 0), 0).toLocaleString()}
              </p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-purple-600" />
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
              placeholder="Search by name, application number, policy number or mobile..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {statuses.map(status => (
              <option key={status.value} value={status.value}>{status.label}</option>
            ))}
          </select>
          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {paymentStatuses.map(status => (
              <option key={status.value} value={status.value}>{status.label}</option>
            ))}
          </select>
          <button
            onClick={() => {
              setSearchTerm("");
              setStatusFilter("all");
              setPaymentFilter("all");
            }}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Proposals Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">App No.</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Premium</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProposals.length === 0 ? (
                <tr>
                  <td colSpan="8" className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                      <AlertCircle className="w-12 h-12 text-gray-300" />
                      <p>No proposals found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredProposals.map((proposal) => (
                  <tr key={proposal.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-mono text-sm font-medium text-blue-600">{proposal.application_number}</div>
                      {proposal.policy_number && (
                        <div className="text-xs text-gray-500 mt-1">POL: {proposal.policy_number}</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-800">{proposal.full_name}</div>
                      <div className="text-sm text-gray-500">{proposal.mobile}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-800">{proposal.plan?.plan_name || "-"}</div>
                      <div className="text-xs text-gray-500 capitalize">{proposal.category}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-gray-800">₹{parseInt(proposal.premium_amount).toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      {getPaymentBadge(proposal.payment_status)}
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(proposal.policy_status)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(proposal.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedProposal(proposal);
                            setShowViewModal(true);
                          }}
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedProposal(proposal);
                            setShowStatusModal(true);
                          }}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Update Status"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setProposalToDelete(proposal.id);
                            setShowDeleteConfirm(true);
                          }}
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
                ({total} total proposals)
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

      {/* View Proposal Modal */}
      {showViewModal && selectedProposal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowViewModal(false)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-white px-6 py-4 border-b flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Proposal Details</h2>
                <p className="text-sm text-gray-500 mt-1">Application: {selectedProposal.application_number}</p>
              </div>
              <button onClick={() => setShowViewModal(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Customer Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Customer Information
                  </h3>
                  <div className="space-y-2">
                    <p><span className="text-sm text-gray-500">Name:</span> <span className="font-medium">{selectedProposal.full_name}</span></p>
                    <p><span className="text-sm text-gray-500">Email:</span> {selectedProposal.email || "N/A"}</p>
                    <p><span className="text-sm text-gray-500">Mobile:</span> {selectedProposal.mobile}</p>
                    <p><span className="text-sm text-gray-500">Date of Birth:</span> {selectedProposal.date_of_birth}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Policy Information
                  </h3>
                  <div className="space-y-2">
                    <p><span className="text-sm text-gray-500">Plan:</span> {selectedProposal.plan?.plan_name || "N/A"}</p>
                    <p><span className="text-sm text-gray-500">Category:</span> <span className="capitalize">{selectedProposal.category}</span></p>
                    <p><span className="text-sm text-gray-500">Coverage:</span> {selectedProposal.coverage?.coverage_name || "N/A"}</p>
                    <p><span className="text-sm text-gray-500">Tenure:</span> {selectedProposal.tenure} {selectedProposal.tenure === 1 ? "Year" : "Years"}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Payment Information
                  </h3>
                  <div className="space-y-2">
                    <p><span className="text-sm text-gray-500">Premium Amount:</span> <span className="font-bold text-blue-600">₹{parseInt(selectedProposal.premium_amount).toLocaleString()}</span></p>
                    <p><span className="text-sm text-gray-500">Payment Status:</span> {getPaymentBadge(selectedProposal.payment_status)}</p>
                    {selectedProposal.transaction_id && (
                      <p><span className="text-sm text-gray-500">Transaction ID:</span> <span className="font-mono text-xs">{selectedProposal.transaction_id}</span></p>
                    )}
                    {selectedProposal.payment_date && (
                      <p><span className="text-sm text-gray-500">Payment Date:</span> {new Date(selectedProposal.payment_date).toLocaleDateString()}</p>
                    )}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Policy Dates
                  </h3>
                  <div className="space-y-2">
                    <p><span className="text-sm text-gray-500">Policy Status:</span> {getStatusBadge(selectedProposal.policy_status)}</p>
                    {selectedProposal.policy_start_date && (
                      <p><span className="text-sm text-gray-500">Start Date:</span> {new Date(selectedProposal.policy_start_date).toLocaleDateString()}</p>
                    )}
                    {selectedProposal.policy_end_date && (
                      <p><span className="text-sm text-gray-500">End Date:</span> {new Date(selectedProposal.policy_end_date).toLocaleDateString()}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Riders */}
              {selectedProposal.selected_riders && selectedProposal.selected_riders.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">Selected Riders</h3>
                  <div className="space-y-2">
                    {selectedProposal.selected_riders.map((rider, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{rider.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Vehicle Details (for car/bike insurance) */}
              {selectedProposal.vehicle_details && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">Vehicle Details</h3>
                  <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(selectedProposal.vehicle_details, null, 2)}</pre>
                </div>
              )}

              {/* Nominee Details (for life insurance) */}
              {selectedProposal.nominee_details && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">Nominee Details</h3>
                  <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(selectedProposal.nominee_details, null, 2)}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Status Update Modal */}
      {showStatusModal && selectedProposal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowStatusModal(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full mx-4 shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="px-6 py-4 border-b bg-gradient-to-r from-blue-50 to-white rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Update Policy Status</h2>
                  <p className="text-sm text-gray-500 mt-1">Proposal: {selectedProposal.application_number}</p>
                </div>
                <button onClick={() => setShowStatusModal(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-3">
              {statuses.filter(s => s.value !== "all").map(status => (
                <button
                  key={status.value}
                  onClick={() => updateProposalStatus(selectedProposal.id, status.value)}
                  disabled={updating}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                    selectedProposal.policy_status === status.value
                      ? "border-blue-500 bg-blue-50 shadow-md"
                      : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${status.bgColor}`}>
                      {status.value === "active" && <CheckCircle className={`w-5 h-5 ${status.color}`} />}
                      {status.value === "pending" && <Clock className={`w-5 h-5 ${status.color}`} />}
                      {status.value === "expired" && <AlertCircle className={`w-5 h-5 ${status.color}`} />}
                      {status.value === "renewed" && <RefreshCw className={`w-5 h-5 ${status.color}`} />}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{status.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {status.value === "pending" && "Policy awaiting activation"}
                        {status.value === "active" && "Policy is active and valid"}
                        {status.value === "expired" && "Policy has expired"}
                        {status.value === "renewed" && "Policy has been renewed"}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowDeleteConfirm(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-4">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">Delete Proposal</h3>
              <p className="text-gray-500 text-center mb-6">
                Are you sure you want to delete this proposal? This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={deleteProposal}
                  disabled={updating}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  {updating ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}