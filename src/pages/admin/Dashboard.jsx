// pages/admin/Dashboard.jsx
import { useGet } from "../../hooks/useGet";
import { 
  Users, 
  Shield, 
  FileText, 
  CheckCircle, 
  Clock,
  TrendingUp,
  DollarSign,
  Activity,
  ArrowUp,
  ArrowDown
} from "lucide-react";

export default function Dashboard() {
  const { data, loading, error } = useGet("admin/dashboard");

  const stats = data || {};

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
        <p className="font-medium">Error loading dashboard</p>
        <p className="text-sm mt-1">{error}</p>
      </div>
    );
  }

  const statCards = [
    {
      title: "Total Leads",
      value: stats.total_leads || 0,
      icon: Users,
      trend: "+12%",
      trendUp: true,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Plans",
      value: stats.total_plans || 0,
      icon: Shield,
      trend: "+5%",
      trendUp: true,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Total Policies",
      value: stats.total_policies || 0,
      icon: FileText,
      trend: "+8%",
      trendUp: true,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: "Active Policies",
      value: stats.active_policies || 0,
      icon: CheckCircle,
      trend: "+15%",
      trendUp: true,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Paid Policies",
      value: stats.paid_policies || 0,
      icon: DollarSign,
      trend: "+10%",
      trendUp: true,
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      title: "Pending Policies",
      value: (stats.total_policies || 0) - (stats.paid_policies || 0),
      icon: Clock,
      trend: "-3%",
      trendUp: false,
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
  ];

  // Sample data for the chart (replace with actual data from API later)
  const monthlyData = [
    { month: "Jan", revenue: 45000, policies: 45 },
    { month: "Feb", revenue: 52000, policies: 52 },
    { month: "Mar", revenue: 48000, policies: 48 },
    { month: "Apr", revenue: 61000, policies: 61 },
    { month: "May", revenue: 58000, policies: 58 },
    { month: "Jun", revenue: 72000, policies: 72 },
  ];

  const categoryData = [
    { name: "Health", percentage: 35, color: "bg-blue-500", count: 245 },
    { name: "Car", percentage: 28, color: "bg-green-500", count: 196 },
    { name: "Life", percentage: 20, color: "bg-orange-500", count: 140 },
    { name: "Travel", percentage: 12, color: "bg-purple-500", count: 84 },
    { name: "Bike", percentage: 5, color: "bg-pink-500", count: 35 },
  ];

  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <p className="text-blue-100 mt-1">Real-time insurance platform analytics</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              <span className="text-sm font-medium">Live Updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value.toLocaleString()}</p>
                <div className="flex items-center gap-1 mt-2">
                  {stat.trendUp ? (
                    <ArrowUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-sm font-medium ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trend}
                  </span>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-xl`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Chart - Custom Bar Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <h3 className="text-lg font-semibold text-gray-800">Revenue Overview</h3>
          <p className="text-sm text-gray-500 mt-1">Monthly revenue trends (in ₹)</p>
        </div>
        <div className="p-6">
          <div className="flex items-end gap-4 h-64">
            {monthlyData.map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-blue-500 rounded-t-lg transition-all duration-500 hover:bg-blue-600 cursor-pointer relative group"
                  style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ₹{item.revenue.toLocaleString()}
                  </div>
                </div>
                <span className="text-sm text-gray-600">{item.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Jan - Jun 2024</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>Revenue (₹)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Distribution with Progress Bars */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <h3 className="text-lg font-semibold text-gray-800">Plan Distribution</h3>
          <p className="text-sm text-gray-500 mt-1">Insurance plans by category</p>
        </div>
        <div className="p-6 space-y-4">
          {categoryData.map((category, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{category.count} policies</span>
                  <span className="text-sm font-semibold text-gray-800">{category.percentage}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className={`${category.color} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity Section */}
      {stats.recent_leads && stats.recent_leads.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
            <p className="text-sm text-gray-500 mt-1">Latest leads and proposals</p>
          </div>
          <div className="divide-y divide-gray-100">
            {stats.recent_leads?.slice(0, 5).map((lead, index) => (
              <div key={index} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{lead.full_name}</p>
                    <p className="text-sm text-gray-500">{lead.category} insurance • {lead.mobile}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{new Date(lead.created_at).toLocaleDateString()}</p>
                  <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 mt-1">
                    New Lead
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}