// pages/admin/Renewals.jsx
import { useState } from "react"; 
import { useGet } from "../../hooks/useGet";
import { usePut } from "../../hooks/usePut";

import { 
  Search, 
  Eye, 
  RefreshCw, 
  Calendar, 
  DollarSign, 
  User, 
  Phone, 
  Mail, 
  X, 
  Loader, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

export default function Renewals() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRenewal, setSelectedRenewal] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);

  // Use the correct admin endpoint
  const { data, loading, refetch } = useGet(
    `/admin/renewals?page=${currentPage}&search=${searchTerm}&status=${statusFilter}`
  );
  const { executePut } = usePut();

  const renewals = data?.renewals?.data || [];
  const pagination = data?.pagination || {};
  const totalPages = pagination?.last_page || 1;
  const total = pagination?.total || 0;

  const getStatusBadge = (status) => {
    const badges = {
      active: { icon: CheckCircle, text: "Active", color: "bg-green-100 text-green-700" },
      expired: { icon: AlertCircle, text: "Expired", color: "bg-red-100 text-red-700" },
      renewed: { icon: RefreshCw, text: "Renewed", color: "bg-blue-100 text-blue-700" },
      pending: { icon: Clock, text: "Pending", color: "bg-yellow-100 text-yellow-700" }
    };
    const config = badges[status] || badges.pending;
    const Icon = config.icon;
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full ${config.color}`}>
        <Icon className="w-3 h-3" />
        {config.text}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader className="w-12 h-12 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Policy Renewals</h1>
        <p className="text-gray-500 mt-1">Manage policy renewals and expiring policies</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border shadow-sm">
          <p className="text-sm text-gray-500">Total Policies</p>
          <p className="text-2xl font-bold text-gray-800">{total}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm">
          <p className="text-sm text-gray-500">Active Policies</p>
          <p className="text-2xl font-bold text-green-600">{renewals.filter(r => r.policy_status === 'active').length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm">
          <p className="text-sm text-gray-500">Expired</p>
          <p className="text-2xl font-bold text-red-600">{renewals.filter(r => r.policy_status === 'expired').length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm">
          <p className="text-sm text-gray-500">Expiring Soon (≤30 days)</p>
          <p className="text-2xl font-bold text-orange-600">{renewals.filter(r => r.days_left <= 30 && r.days_left > 0).length}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by policy number, application number, customer name or mobile..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="expired">Expired</option>
            <option value="renewed">Renewed</option>
          </select>
        </div>
      </div>

      {/* Renewals Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Policy No.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Premium</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expiry Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Days Left</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {renewals.length === 0 ? (
                <tr>
                  <td colSpan="8" className="px-6 py-12 text-center text-gray-500">
                    No renewal records found
                  </td>
                </tr>
              ) : (
                renewals.map((renewal) => (
                  <tr key={renewal.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-mono text-sm font-medium">{renewal.policy_number || 'N/A'}</div>
                      <div className="text-xs text-gray-500 mt-1">{renewal.application_number}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-800">{renewal.customer_name}</div>
                      <div className="text-sm text-gray-500">{renewal.mobile}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium">{renewal.plan_name || 'N/A'}</div>
                      <div className="text-xs text-gray-500 capitalize">{renewal.category}</div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-blue-600">
                      ₹{parseInt(renewal.premium_amount).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {renewal.policy_end_date ? new Date(renewal.policy_end_date).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-6 py-4">
                      {renewal.days_left > 0 ? (
                        <span className={`text-sm font-medium ${renewal.days_left <= 30 ? 'text-red-600' : 'text-green-600'}`}>
                          {renewal.days_left} days
                        </span>
                      ) : renewal.days_left === 0 ? (
                        <span className="text-sm text-orange-600">Expires today</span>
                      ) : (
                        <span className="text-sm text-red-600">Expired</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(renewal.policy_status)}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          setSelectedRenewal(renewal);
                          setShowViewModal(true);
                        }}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
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
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* View Renewal Modal */}
      {showViewModal && selectedRenewal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowViewModal(false)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-white px-6 py-4 border-b flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Policy Details</h2>
                <p className="text-sm text-gray-500 mt-1">Application: {selectedRenewal.application_number}</p>
              </div>
              <button onClick={() => setShowViewModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Customer Information
                  </h3>
                  <div className="space-y-2">
                    <p><span className="text-sm text-gray-500">Name:</span> <span className="font-medium">{selectedRenewal.customer_name}</span></p>
                    <p><span className="text-sm text-gray-500">Email:</span> {selectedRenewal.email || 'N/A'}</p>
                    <p><span className="text-sm text-gray-500">Mobile:</span> {selectedRenewal.mobile}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Policy Information
                  </h3>
                  <div className="space-y-2">
                    <p><span className="text-sm text-gray-500">Policy Number:</span> <span className="font-mono">{selectedRenewal.policy_number}</span></p>
                    <p><span className="text-sm text-gray-500">Plan:</span> {selectedRenewal.plan_name}</p>
                    <p><span className="text-sm text-gray-500">Category:</span> <span className="capitalize">{selectedRenewal.category}</span></p>
                    <p><span className="text-sm text-gray-500">Premium:</span> <span className="font-bold text-blue-600">₹{parseInt(selectedRenewal.premium_amount).toLocaleString()}</span></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Policy Dates
                  </h3>
                  <div className="space-y-2">
                    <p><span className="text-sm text-gray-500">Start Date:</span> {selectedRenewal.policy_start_date ? new Date(selectedRenewal.policy_start_date).toLocaleDateString() : 'N/A'}</p>
                    <p><span className="text-sm text-gray-500">End Date:</span> {selectedRenewal.policy_end_date ? new Date(selectedRenewal.policy_end_date).toLocaleDateString() : 'N/A'}</p>
                    <p><span className="text-sm text-gray-500">Status:</span> {getStatusBadge(selectedRenewal.policy_status)}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Renewal Info
                  </h3>
                  <div className="space-y-2">
                    <p><span className="text-sm text-gray-500">Days Left:</span> 
                      <span className={`font-medium ml-2 ${selectedRenewal.days_left <= 30 ? 'text-red-600' : 'text-green-600'}`}>
                        {selectedRenewal.days_left > 0 ? `${selectedRenewal.days_left} days` : 'Expired'}
                      </span>
                    </p>
                    {selectedRenewal.coverage && (
                      <p><span className="text-sm text-gray-500">Coverage:</span> {selectedRenewal.coverage.coverage_name}</p>
                    )}
                  </div>
                </div>
              </div>

              {selectedRenewal.selected_riders && selectedRenewal.selected_riders.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">Selected Riders</h3>
                  <div className="space-y-2">
                    {selectedRenewal.selected_riders.map((rider, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{rider.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}