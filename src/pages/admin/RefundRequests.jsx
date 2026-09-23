import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
    AlertCircle,
    ArrowLeft,
    ArrowRight,
    Banknote,
    Calendar,
    Check,
    CheckCircle2,
    ChevronDown,
    Clock3,
    CreditCard,
    Eye,
    FileText,
    Filter,
    History,
    Loader2,
    Mail,
    MessageSquare,
    Phone,
    RefreshCw,
    Search,
    ShieldCheck,
    User,
    X,
    XCircle,
    IndianRupee,
    Save,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| API CONFIGURATION
|--------------------------------------------------------------------------
|
| Expected backend routes:
|
| GET    /admin/refund-requests
| GET    /admin/refund-requests/{id}
| PATCH  /admin/refund-requests/{id}/charges
| PATCH  /admin/refund-requests/{id}/status
| POST   /admin/refund-requests/{id}/complete-refund
| POST   /admin/refund-requests/{id}/note
|
| If your Laravel routes use different URLs, ONLY change these constants.
|--------------------------------------------------------------------------
*/
/*
|--------------------------------------------------------------------------
| API CONFIGURATION
|--------------------------------------------------------------------------
|
| Laravel routes:
|
| GET    /api/admin/refunds
| GET    /api/admin/refunds/{id}
| PUT    /api/admin/refunds/{id}/charges
| PUT    /api/admin/refunds/{id}/status
| POST   /api/admin/refunds/{id}/complete
| POST   /api/admin/refunds/{id}/notes
|
|--------------------------------------------------------------------------
*/

const API_BASE = (
    import.meta.env.VITE_API_URL || ""
).replace(/\/+$/, "");

const REFUND_API = `${API_BASE}/admin/refunds`;

const ENDPOINTS = {
    list: REFUND_API,

    show: (id) =>
        `${REFUND_API}/${id}`,

    charges: (id) =>
        `${REFUND_API}/${id}/charges`,

    status: (id) =>
        `${REFUND_API}/${id}/status`,

    completeRefund: (id) =>
        `${REFUND_API}/${id}/complete`,

    note: (id) =>
        `${REFUND_API}/${id}/notes`,
};
/*
|--------------------------------------------------------------------------
| STATUS CONFIGURATION
|--------------------------------------------------------------------------
*/

const STATUS_CONFIG = {
    initiated: {
        label: "Initiated",
        className:
            "bg-blue-50 text-blue-700 border-blue-200",
        dot: "bg-blue-500",
    },

    under_review: {
        label: "Under Review",
        className:
            "bg-amber-50 text-amber-700 border-amber-200",
        dot: "bg-amber-500",
    },

    approved: {
        label: "Approved",
        className:
            "bg-indigo-50 text-indigo-700 border-indigo-200",
        dot: "bg-indigo-500",
    },

    processing: {
        label: "Processing",
        className:
            "bg-purple-50 text-purple-700 border-purple-200",
        dot: "bg-purple-500",
    },

    refunded: {
        label: "Refunded",
        className:
            "bg-emerald-50 text-emerald-700 border-emerald-200",
        dot: "bg-emerald-500",
    },

    rejected: {
        label: "Rejected",
        className:
            "bg-red-50 text-red-700 border-red-200",
        dot: "bg-red-500",
    },

    cancelled: {
        label: "Cancelled",
        className:
            "bg-gray-100 text-gray-700 border-gray-200",
        dot: "bg-gray-500",
    },
};

const STATUS_OPTIONS = [
    "initiated",
    "under_review",
    "approved",
    "processing",
    "refunded",
    "rejected",
    "cancelled",
];

/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/

const getToken = () => {
    return (
        localStorage.getItem("token") ||
        localStorage.getItem("access_token") ||
        localStorage.getItem("admin_token") ||
        ""
    );
};

const apiHeaders = () => {
    const token = getToken();

    return {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(token
            ? {
                  Authorization: `Bearer ${token}`,
              }
            : {}),
    };
};

const money = (value) => {
    const amount = Number(value || 0);

    return `₹${amount.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
};

const numberValue = (value) => {
    if (value === null || value === undefined || value === "") {
        return 0;
    }

    const parsed = Number(value);

    return Number.isFinite(parsed) ? parsed : 0;
};

const formatDate = (value) => {
    if (!value) return "—";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return value;
    }

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

const formatDateTime = (value) => {
    if (!value) return "—";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return value;
    }

    return date.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};

const getErrorMessage = (error) => {
    return (
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "Something went wrong."
    );
};

/*
|--------------------------------------------------------------------------
| STATUS BADGE
|--------------------------------------------------------------------------
*/

function StatusBadge({ status }) {
    const config =
        STATUS_CONFIG[status] ||
        STATUS_CONFIG.initiated;

    return (
        <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${config.className}`}
        >
            <span
                className={`h-1.5 w-1.5 rounded-full ${config.dot}`}
            />

            {config.label}
        </span>
    );
}

/*
|--------------------------------------------------------------------------
| STAT CARD
|--------------------------------------------------------------------------
*/

function StatCard({
    title,
    value,
    icon: Icon,
    loading,
}) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">
                        {title}
                    </p>

                    {loading ? (
                        <div className="mt-3 h-8 w-14 animate-pulse rounded bg-gray-100" />
                    ) : (
                        <p className="mt-2 text-2xl font-bold text-gray-900">
                            {value}
                        </p>
                    )}
                </div>

                <div className="rounded-xl bg-gray-100 p-3">
                    <Icon className="h-5 w-5 text-gray-700" />
                </div>
            </div>
        </div>
    );
}

/*
|--------------------------------------------------------------------------
| DETAIL ROW
|--------------------------------------------------------------------------
*/

function DetailRow({
    label,
    value,
    mono = false,
    valueClassName = "",
}) {
    return (
        <div className="flex items-start justify-between gap-5 border-b border-gray-100 py-3 last:border-0">
            <span className="text-sm text-gray-500">
                {label}
            </span>

            <span
                className={`max-w-[65%] text-right text-sm font-medium text-gray-900 ${
                    mono ? "font-mono" : ""
                } ${valueClassName}`}
            >
                {value ?? "—"}
            </span>
        </div>
    );
}

/*
|--------------------------------------------------------------------------
| SECTION
|--------------------------------------------------------------------------
*/

function DetailSection({
    title,
    icon: Icon,
    children,
}) {
    return (
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-50 px-5 py-4">
                {Icon && (
                    <Icon className="h-5 w-5 text-gray-700" />
                )}

                <h3 className="font-semibold text-gray-900">
                    {title}
                </h3>
            </div>

            <div className="px-5">{children}</div>
        </section>
    );
}

/*
|--------------------------------------------------------------------------
| MAIN COMPONENT
|--------------------------------------------------------------------------
*/

export default function RefundRequests() {
    const [requests, setRequests] = useState([]);

    const [loading, setLoading] = useState(true);

    const [detailLoading, setDetailLoading] =
        useState(false);

    const [actionLoading, setActionLoading] =
        useState(false);

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    /*
    |--------------------------------------------------------------------------
    | FILTERS
    |--------------------------------------------------------------------------
    */

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("");

    const [requestType, setRequestType] =
        useState("");

    const [fromDate, setFromDate] = useState("");

    const [toDate, setToDate] = useState("");

    const [page, setPage] = useState(1);

    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        total: 0,
        per_page: 20,
    });

    /*
    |--------------------------------------------------------------------------
    | SELECTED REQUEST
    |--------------------------------------------------------------------------
    */

    const [selectedRequest, setSelectedRequest] =
        useState(null);

    const [selectedPolicy, setSelectedPolicy] =
        useState(null);

    const [statusHistory, setStatusHistory] =
        useState([]);

    /*
    |--------------------------------------------------------------------------
    | MODALS
    |--------------------------------------------------------------------------
    */

    const [showDetails, setShowDetails] =
        useState(false);

    const [showCharges, setShowCharges] =
        useState(false);

    const [showStatus, setShowStatus] =
        useState(false);

    const [showSettlement, setShowSettlement] =
        useState(false);

    const [showNote, setShowNote] =
        useState(false);

    /*
    |--------------------------------------------------------------------------
    | FORMS
    |--------------------------------------------------------------------------
    */

    const [chargeForm, setChargeForm] =
        useState({
            gst_percentage: "18",
            cancellation_charge: "500",
            other_charges: "0",
            other_charges_description: "",
        });

    const [statusForm, setStatusForm] =
        useState({
            status: "",
            notes: "",
        });

    const [settlementForm, setSettlementForm] =
        useState({
            settlement_utr: "",
            settlement_method: "bank_transfer",
            settled_amount: "",
            settled_at: "",
            settlement_notes: "",
        });

    const [noteForm, setNoteForm] =
        useState({
            notes: "",
        });

    /*
    |--------------------------------------------------------------------------
    | CLEAR MESSAGES
    |--------------------------------------------------------------------------
    */

    const clearMessages = () => {
        setError("");
        setSuccess("");
    };

    /*
    |--------------------------------------------------------------------------
    | FETCH REQUESTS
    |--------------------------------------------------------------------------
    */

    const fetchRequests = useCallback(
        async (requestedPage = page) => {
            setLoading(true);
            setError("");

            try {
                const params = {
                    page: requestedPage,
                    per_page: 20,
                };

                if (search.trim()) {
                    params.search = search.trim();
                }

                if (status) {
                    params.status = status;
                }

                if (requestType) {
                    params.request_type =
                        requestType;
                }

                if (fromDate) {
                    params.from_date = fromDate;
                }

                if (toDate) {
                    params.to_date = toDate;
                }

                const response =
                    await axios.get(
                        ENDPOINTS.list,
                        {
                            params,
                            headers: apiHeaders(),
                        }
                    );

                const payload =
                    response?.data?.data;

                setRequests(
                    payload?.data || []
                );

                setPagination({
                    current_page:
                        payload?.current_page || 1,

                    last_page:
                        payload?.last_page || 1,

                    total:
                        payload?.total || 0,

                    per_page:
                        payload?.per_page || 20,
                });
            } catch (err) {
                setError(
                    getErrorMessage(err)
                );
            } finally {
                setLoading(false);
            }
        },
        [
            page,
            search,
            status,
            requestType,
            fromDate,
            toDate,
        ]
    );

    /*
    |--------------------------------------------------------------------------
    | FETCH SINGLE REQUEST
    |--------------------------------------------------------------------------
    */

    const fetchRequestDetails = async (id) => {
        setDetailLoading(true);
        setError("");

        try {
            const response =
                await axios.get(
                    ENDPOINTS.show(id),
                    {
                        headers: apiHeaders(),
                    }
                );

            const data =
                response?.data?.data;

            const request =
                data?.refund_request;

            setSelectedRequest(request);

            setSelectedPolicy(
                data?.policy || request?.proposal || null
            );

            setStatusHistory(
                data?.status_history || []
            );

            /*
            |--------------------------------------------------------------------------
            | SYNC CHARGE FORM
            |--------------------------------------------------------------------------
            */

            setChargeForm({
                gst_percentage:
                    request?.gst_percentage ??
                    "18",

                cancellation_charge:
                    request?.cancellation_charge ??
                    "500",

                other_charges:
                    request?.other_charges ??
                    "0",

                other_charges_description:
                    request?.other_charges_description ||
                    "",
            });

            setStatusForm({
                status:
                    request?.status || "",
                notes: "",
            });

            setSettlementForm({
                settlement_utr:
                    request?.settlement_utr || "",

                settlement_method:
                    request?.settlement_method ||
                    "bank_transfer",

                settled_amount:
                    request?.refund_amount ||
                    "",

                settled_at:
                    request?.settled_at
                        ? formatForDateTimeLocal(
                              request.settled_at
                          )
                        : "",

                settlement_notes:
                    request?.settlement_notes ||
                    "",
            });

            setNoteForm({
                notes: "",
            });

            setShowDetails(true);
        } catch (err) {
            setError(
                getErrorMessage(err)
            );
        } finally {
            setDetailLoading(false);
        }
    };

    /*
    |--------------------------------------------------------------------------
    | INITIAL LOAD
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        fetchRequests(page);
    }, [page]);

    /*
    |--------------------------------------------------------------------------
    | SEARCH DEBOUNCE
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const timer = setTimeout(() => {
            if (page !== 1) {
                setPage(1);
                return;
            }

            fetchRequests(1);
        }, 400);

        return () => clearTimeout(timer);
    }, [
        search,
        status,
        requestType,
        fromDate,
        toDate,
    ]);

    /*
    |--------------------------------------------------------------------------
    | CALCULATE STATISTICS
    |--------------------------------------------------------------------------
    */

    const statistics = useMemo(() => {
        const result = {
            total: pagination.total || 0,
            initiated: 0,
            under_review: 0,
            approved: 0,
            processing: 0,
            refunded: 0,
            rejected: 0,
            cancelled: 0,
        };

        /*
         * Current page data is used for status cards.
         * For exact global status totals, add a dedicated
         * statistics endpoint later.
         */

        requests.forEach((item) => {
            if (
                Object.prototype.hasOwnProperty.call(
                    result,
                    item.status
                )
            ) {
                result[item.status]++;
            }
        });

        return result;
    }, [requests, pagination.total]);

    /*
    |--------------------------------------------------------------------------
    | REFRESH
    |--------------------------------------------------------------------------
    */

    const handleRefresh = async () => {
        clearMessages();

        await fetchRequests(page);

        setSuccess(
            "Refund requests refreshed successfully."
        );

        setTimeout(
            () => setSuccess(""),
            2500
        );
    };

    /*
    |--------------------------------------------------------------------------
    | RESET FILTERS
    |--------------------------------------------------------------------------
    */

    const resetFilters = () => {
        setSearch("");
        setStatus("");
        setRequestType("");
        setFromDate("");
        setToDate("");
        setPage(1);
    };

    /*
    |--------------------------------------------------------------------------
    | UPDATE CHARGES
    |--------------------------------------------------------------------------
    */

    const handleUpdateCharges = async (event) => {
        event.preventDefault();

        if (!selectedRequest) return;

        clearMessages();

        setActionLoading(true);

        try {
            const response =
            await axios.put(
    ENDPOINTS.charges(
        selectedRequest.id
    ),
                    {
                        gst_percentage:
                            Number(
                                chargeForm.gst_percentage
                            ),

                        cancellation_charge:
                            Number(
                                chargeForm.cancellation_charge
                            ),

                        other_charges:
                            Number(
                                chargeForm.other_charges
                            ),

                        other_charges_description:
                            chargeForm.other_charges_description ||
                            null,
                    },
                    {
                        headers: apiHeaders(),
                    }
                );

            const updated =
                response?.data?.calculation;

            setSelectedRequest((prev) => ({
                ...prev,

                gst_percentage:
                    updated?.gst_percentage ??
                    prev.gst_percentage,

                gst_amount:
                    updated?.gst_amount ??
                    prev.gst_amount,

                total_paid_amount:
                    updated?.total_paid_amount ??
                    prev.total_paid_amount,

                cancellation_charge:
                    updated?.cancellation_charge ??
                    prev.cancellation_charge,

                other_charges:
                    updated?.other_charges ??
                    prev.other_charges,

                total_deductions:
                    updated?.total_deductions ??
                    prev.total_deductions,

                refund_amount:
                    updated?.refund_amount ??
                    prev.refund_amount,
            }));

            setSettlementForm((prev) => ({
                ...prev,
                settled_amount:
                    updated?.refund_amount ??
                    prev.settled_amount,
            }));

            setShowCharges(false);

            setSuccess(
                response?.data?.message ||
                    "Refund calculation updated successfully."
            );

            await fetchRequestDetails(
                selectedRequest.id
            );
        } catch (err) {
            setError(
                getErrorMessage(err)
            );
        } finally {
            setActionLoading(false);
        }
    };

    /*
    |--------------------------------------------------------------------------
    | UPDATE STATUS
    |--------------------------------------------------------------------------
    */

    const handleUpdateStatus = async (event) => {
        event.preventDefault();

        if (!selectedRequest) return;

        clearMessages();

        setActionLoading(true);

        try {
            const response =
               await axios.patch(
    ENDPOINTS.status(
        selectedRequest.id
    ),
                    {
                        status:
                            statusForm.status,

                        notes:
                            statusForm.notes ||
                            null,
                    },
                    {
                        headers: apiHeaders(),
                    }
                );

            setShowStatus(false);

            setSuccess(
                response?.data?.message ||
                    "Refund status updated successfully."
            );

            await fetchRequestDetails(
                selectedRequest.id
            );

            await fetchRequests(page);
        } catch (err) {
            setError(
                getErrorMessage(err)
            );
        } finally {
            setActionLoading(false);
        }
    };

    /*
    |--------------------------------------------------------------------------
    | COMPLETE REFUND
    |--------------------------------------------------------------------------
    */

    const handleCompleteRefund = async (
        event
    ) => {
        event.preventDefault();

        if (!selectedRequest) return;

        clearMessages();

        const expectedAmount =
            numberValue(
                selectedRequest.refund_amount
            );

        const enteredAmount =
            numberValue(
                settlementForm.settled_amount
            );

        if (
            Math.abs(
                expectedAmount -
                    enteredAmount
            ) > 0.009
        ) {
            setError(
                `Settlement amount must exactly match ${money(
                    expectedAmount
                )}.`
            );

            return;
        }

        if (
            !window.confirm(
                `Confirm refund settlement of ${money(
                    expectedAmount
                )}? This will permanently mark the request as REFUNDED.`
            )
        ) {
            return;
        }

        setActionLoading(true);

        try {
            const response =
                await axios.post(
                    ENDPOINTS.completeRefund(
                        selectedRequest.id
                    ),
                    {
                        settlement_utr:
                            settlementForm.settlement_utr.trim(),

                        settlement_method:
                            settlementForm.settlement_method,

                        settled_amount:
                            enteredAmount,

                        settled_at:
                            settlementForm.settled_at,

                        settlement_notes:
                            settlementForm.settlement_notes ||
                            null,
                    },
                    {
                        headers: apiHeaders(),
                    }
                );

            setShowSettlement(false);

            setSuccess(
                response?.data?.message ||
                    "Refund settlement recorded successfully."
            );

            await fetchRequestDetails(
                selectedRequest.id
            );

            await fetchRequests(page);
        } catch (err) {
            setError(
                getErrorMessage(err)
            );
        } finally {
            setActionLoading(false);
        }
    };

    /*
    |--------------------------------------------------------------------------
    | ADD ADMIN NOTE
    |--------------------------------------------------------------------------
    */

    const handleAddNote = async (event) => {
        event.preventDefault();

        if (!selectedRequest) return;

        if (!noteForm.notes.trim()) {
            setError(
                "Please enter an admin note."
            );

            return;
        }

        clearMessages();

        setActionLoading(true);

        try {
            const response =
                await axios.post(
                    ENDPOINTS.note(
                        selectedRequest.id
                    ),
                    {
                        notes:
                            noteForm.notes.trim(),
                    },
                    {
                        headers: apiHeaders(),
                    }
                );

            setShowNote(false);

            setNoteForm({
                notes: "",
            });

            setSelectedRequest((prev) => ({
                ...prev,
                admin_notes:
                    response?.data?.admin_notes ??
                    prev.admin_notes,
            }));

            setSuccess(
                response?.data?.message ||
                    "Admin note added successfully."
            );
        } catch (err) {
            setError(
                getErrorMessage(err)
            );
        } finally {
            setActionLoading(false);
        }
    };

    /*
    |--------------------------------------------------------------------------
    | FINAL REQUEST CHECK
    |--------------------------------------------------------------------------
    */

    const isFinal =
        selectedRequest &&
        [
            "refunded",
            "rejected",
            "cancelled",
        ].includes(
            selectedRequest.status
        );

    const canProcess =
        selectedRequest &&
        [
            "initiated",
            "under_review",
            "approved",
            "processing",
        ].includes(
            selectedRequest.status
        );

    /*
    |--------------------------------------------------------------------------
    | RENDER
    |--------------------------------------------------------------------------
    */

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
            <div className="mx-auto max-w-[1800px]">
                {/* =========================================================
                    HEADER
                ========================================================= */}

                <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-gray-900 p-3">
                                <RefreshCw className="h-6 w-6 text-white" />
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                    Refund Requests
                                </h1>

                                <p className="mt-1 text-sm text-gray-500">
                                    Manage insurance cancellation,
                                    refund calculations and
                                    settlements.
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleRefresh}
                        disabled={loading}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        <RefreshCw
                            className={`h-4 w-4 ${
                                loading
                                    ? "animate-spin"
                                    : ""
                            }`}
                        />

                        Refresh
                    </button>
                </div>

                {/* =========================================================
                    ALERTS
                ========================================================= */}

                {error && (
                    <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

                        <div className="flex-1 text-sm font-medium">
                            {error}
                        </div>

                        <button
                            type="button"
                            onClick={() => setError("")}
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                )}

                {success && (
                    <div className="mb-5 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

                        <div className="flex-1 text-sm font-medium">
                            {success}
                        </div>

                        <button
                            type="button"
                            onClick={() => setSuccess("")}
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                )}

                {/* =========================================================
                    STATISTICS
                ========================================================= */}

                <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-8">
                    <StatCard
                        title="Total"
                        value={statistics.total}
                        icon={FileText}
                        loading={loading}
                    />

                    <StatCard
                        title="Initiated"
                        value={
                            statistics.initiated
                        }
                        icon={Clock3}
                        loading={loading}
                    />

                    <StatCard
                        title="Under Review"
                        value={
                            statistics.under_review
                        }
                        icon={Eye}
                        loading={loading}
                    />

                    <StatCard
                        title="Approved"
                        value={
                            statistics.approved
                        }
                        icon={Check}
                        loading={loading}
                    />

                    <StatCard
                        title="Processing"
                        value={
                            statistics.processing
                        }
                        icon={RefreshCw}
                        loading={loading}
                    />

                    <StatCard
                        title="Refunded"
                        value={
                            statistics.refunded
                        }
                        icon={CheckCircle2}
                        loading={loading}
                    />

                    <StatCard
                        title="Rejected"
                        value={
                            statistics.rejected
                        }
                        icon={XCircle}
                        loading={loading}
                    />

                    <StatCard
                        title="Cancelled"
                        value={
                            statistics.cancelled
                        }
                        icon={X}
                        loading={loading}
                    />
                </div>

                {/* =========================================================
                    FILTERS
                ========================================================= */}

                <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="mb-4 flex items-center gap-2">
                        <Filter className="h-5 w-5 text-gray-700" />

                        <h2 className="font-semibold text-gray-900">
                            Filters
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                        {/* SEARCH */}

                        <div className="xl:col-span-2">
                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Search
                            </label>

                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Application, policy, customer, phone, UTR..."
                                    className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                                />
                            </div>
                        </div>

                        {/* STATUS */}

                        <div>
                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Status
                            </label>

                            <select
                                value={status}
                                onChange={(e) => {
                                    setStatus(
                                        e.target.value
                                    );
                                    setPage(1);
                                }}
                                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-900"
                            >
                                <option value="">
                                    All Statuses
                                </option>

                                {STATUS_OPTIONS.map(
                                    (item) => (
                                        <option
                                            key={item}
                                            value={item}
                                        >
                                            {
                                                STATUS_CONFIG[
                                                    item
                                                ].label
                                            }
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        {/* REQUEST TYPE */}

                        <div>
                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Request Type
                            </label>

                            <select
                                value={requestType}
                                onChange={(e) => {
                                    setRequestType(
                                        e.target.value
                                    );
                                    setPage(1);
                                }}
                                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-900"
                            >
                                <option value="">
                                    All Types
                                </option>

                                <option value="cancellation_refund">
                                    Cancellation & Refund
                                </option>
                            </select>
                        </div>

                        {/* FROM DATE */}

                        <div>
                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                                From Date
                            </label>

                            <input
                                type="date"
                                value={fromDate}
                                onChange={(e) => {
                                    setFromDate(
                                        e.target.value
                                    );
                                    setPage(1);
                                }}
                                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-900"
                            />
                        </div>

                        {/* TO DATE */}

                        <div>
                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                                To Date
                            </label>

                            <input
                                type="date"
                                value={toDate}
                                onChange={(e) => {
                                    setToDate(
                                        e.target.value
                                    );
                                    setPage(1);
                                }}
                                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-900"
                            />
                        </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <button
                            type="button"
                            onClick={resetFilters}
                            className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                        >
                            Reset Filters
                        </button>
                    </div>
                </div>

                {/* =========================================================
                    TABLE
                ========================================================= */}

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex flex-col gap-3 border-b border-gray-200 px-5 py-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="font-semibold text-gray-900">
                                Refund Requests
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Showing{" "}
                                {requests.length} of{" "}
                                {pagination.total} requests
                            </p>
                        </div>

                        {loading && (
                            <Loader2 className="h-5 w-5 animate-spin text-gray-500" />
                        )}
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-[1300px] w-full">
                            <thead className="bg-gray-50">
                                <tr className="border-b border-gray-200">
                                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                                        Request
                                    </th>

                                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                                        Customer
                                    </th>

                                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                                        Policy
                                    </th>

                                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-gray-500">
                                        Premium
                                    </th>

                                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-gray-500">
                                        Deductions
                                    </th>

                                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-gray-500">
                                        Refund
                                    </th>

                                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                                        Status
                                    </th>

                                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                                        Date
                                    </th>

                                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-gray-500">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100">
                                {loading ? (
                                    Array.from({
                                        length: 6,
                                    }).map(
                                        (_, index) => (
                                            <tr
                                                key={
                                                    index
                                                }
                                            >
                                                {Array.from(
                                                    {
                                                        length: 9,
                                                    }
                                                ).map(
                                                    (
                                                        __,
                                                        cell
                                                    ) => (
                                                        <td
                                                            key={
                                                                cell
                                                            }
                                                            className="px-5 py-5"
                                                        >
                                                            <div className="h-4 animate-pulse rounded bg-gray-100" />
                                                        </td>
                                                    )
                                                )}
                                            </tr>
                                        )
                                    )
                                ) : requests.length ===
                                  0 ? (
                                    <tr>
                                        <td
                                            colSpan={
                                                9
                                            }
                                            className="px-5 py-16 text-center"
                                        >
                                            <div className="mx-auto flex max-w-sm flex-col items-center">
                                                <div className="mb-4 rounded-full bg-gray-100 p-4">
                                                    <FileText className="h-7 w-7 text-gray-400" />
                                                </div>

                                                <h3 className="font-semibold text-gray-900">
                                                    No refund requests
                                                </h3>

                                                <p className="mt-1 text-sm text-gray-500">
                                                    No requests match
                                                    your current
                                                    filters.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    requests.map(
                                        (item) => (
                                            <tr
                                                key={
                                                    item.id
                                                }
                                                className="transition hover:bg-gray-50"
                                            >
                                                {/* REQUEST */}

                                                <td className="px-5 py-4">
                                                    <div className="font-semibold text-gray-900">
                                                        #
                                                        {
                                                            item.id
                                                        }
                                                    </div>

                                                    <div className="mt-1 font-mono text-xs text-gray-500">
                                                        REF
                                                        {formatRequestId(
                                                            item
                                                        )}
                                                    </div>
                                                </td>

                                                {/* CUSTOMER */}

                                                <td className="px-5 py-4">
                                                    <div className="font-medium text-gray-900">
                                                        {
                                                            item.customer_name
                                                        }
                                                    </div>

                                                    <a
                                                        href={`tel:${item.phone}`}
                                                        className="mt-1 flex items-center gap-1 text-xs text-blue-600 hover:underline"
                                                    >
                                                        <Phone className="h-3 w-3" />

                                                        {
                                                            item.phone
                                                        }
                                                    </a>
                                                </td>

                                                {/* POLICY */}

                                                <td className="px-5 py-4">
                                                    <div className="font-mono text-sm font-semibold text-gray-900">
                                                        {
                                                            item.policy_number ||
                                                            "—"
                                                        }
                                                    </div>

                                                    <div className="mt-1 text-xs text-gray-500">
                                                        {
                                                            item.application_number ||
                                                            "No application"
                                                        }
                                                    </div>
                                                </td>

                                                {/* PREMIUM */}

                                                <td className="px-5 py-4 text-right">
                                                    <span className="font-semibold text-gray-900">
                                                        {money(
                                                            item.total_paid_amount ||
                                                                item.premium_amount
                                                        )}
                                                    </span>
                                                </td>

                                                {/* DEDUCTIONS */}

                                                <td className="px-5 py-4 text-right">
                                                    <span className="font-medium text-red-600">
                                                        -
                                                        {money(
                                                            item.total_deductions
                                                        )}
                                                    </span>
                                                </td>

                                                {/* REFUND */}

                                                <td className="px-5 py-4 text-right">
                                                    <span className="font-bold text-emerald-600">
                                                        {money(
                                                            item.refund_amount
                                                        )}
                                                    </span>
                                                </td>

                                                {/* STATUS */}

                                                <td className="px-5 py-4">
                                                    <StatusBadge
                                                        status={
                                                            item.status
                                                        }
                                                    />
                                                </td>

                                                {/* DATE */}

                                                <td className="px-5 py-4">
                                                    <div className="text-sm text-gray-700">
                                                        {formatDate(
                                                            item.created_at
                                                        )}
                                                    </div>

                                                    <div className="mt-1 text-xs text-gray-400">
                                                        {formatDateTime(
                                                            item.created_at
                                                        ).split(
                                                            ","
                                                        )[1]}
                                                    </div>
                                                </td>

                                                {/* ACTION */}

                                                <td className="px-5 py-4 text-right">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            fetchRequestDetails(
                                                                item.id
                                                            )
                                                        }
                                                        className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-gray-800"
                                                    >
                                                        <Eye className="h-4 w-4" />

                                                        View
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* =====================================================
                        PAGINATION
                    ===================================================== */}

                    {!loading &&
                        requests.length > 0 && (
                            <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
                                <p className="text-sm text-gray-500">
                                    Page{" "}
                                    <strong className="text-gray-900">
                                        {
                                            pagination.current_page
                                        }
                                    </strong>{" "}
                                    of{" "}
                                    <strong className="text-gray-900">
                                        {
                                            pagination.last_page
                                        }
                                    </strong>
                                </p>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        disabled={
                                            pagination.current_page <=
                                                1 ||
                                            loading
                                        }
                                        onClick={() =>
                                            setPage(
                                                (prev) =>
                                                    Math.max(
                                                        1,
                                                        prev -
                                                            1
                                                    )
                                            )
                                        }
                                        className="rounded-xl border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                    </button>

                                    <button
                                        type="button"
                                        disabled={
                                            pagination.current_page >=
                                                pagination.last_page ||
                                            loading
                                        }
                                        onClick={() =>
                                            setPage(
                                                (prev) =>
                                                    Math.min(
                                                        pagination.last_page,
                                                        prev +
                                                            1
                                                    )
                                            )
                                        }
                                        className="rounded-xl border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        )}
                </div>
            </div>

            {/* =============================================================
                DETAIL DRAWER / MODAL
            ============================================================= */}

            {showDetails && selectedRequest && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm md:p-6">
                    <div className="flex max-h-[95vh] w-full max-w-7xl flex-col overflow-hidden rounded-3xl bg-gray-50 shadow-2xl">
                        {/* HEADER */}

                        <div className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4 md:px-7">
                            <div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Refund Request #
                                        {
                                            selectedRequest.id
                                        }
                                    </h2>

                                    <StatusBadge
                                        status={
                                            selectedRequest.status
                                        }
                                    />
                                </div>

                                <p className="mt-1 font-mono text-xs text-gray-500">
                                    REF
                                    {formatRequestId(
                                        selectedRequest
                                    )}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setShowDetails(
                                        false
                                    )
                                }
                                className="rounded-xl p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* CONTENT */}

                        <div className="overflow-y-auto p-4 md:p-6">
                            {/* TOP ACTION BAR */}

                            <div className="mb-6 flex flex-wrap gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                                {!isFinal && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowStatus(
                                                    true
                                                )
                                            }
                                            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
                                        >
                                            <ShieldCheck className="h-4 w-4" />

                                            Change Status
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowCharges(
                                                    true
                                                )
                                            }
                                            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                                        >
                                            <IndianRupee className="h-4 w-4" />

                                            Edit Calculation
                                        </button>
                                    </>
                                )}

                                {canProcess && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowSettlement(
                                                true
                                            )
                                        }
                                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
                                    >
                                        <Banknote className="h-4 w-4" />

                                        Complete Refund
                                    </button>
                                )}

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowNote(true)
                                    }
                                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                                >
                                    <MessageSquare className="h-4 w-4" />

                                    Add Note
                                </button>

                                {selectedRequest.phone && (
                                    <a
                                        href={`tel:${selectedRequest.phone}`}
                                        className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                                    >
                                        <Phone className="h-4 w-4" />

                                        Call Customer
                                    </a>
                                )}

                                {selectedRequest.email && (
                                    <a
                                        href={`mailto:${selectedRequest.email}`}
                                        className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                                    >
                                        <Mail className="h-4 w-4" />

                                        Email
                                    </a>
                                )}
                            </div>

                            {/* FINAL WARNING */}

                            {isFinal && (
                                <div className="mb-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
                                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

                                    <div>
                                        <p className="font-semibold">
                                            This request is finalized.
                                        </p>

                                        <p className="mt-1 text-sm">
                                            Calculation and
                                            status changes are
                                            locked by the backend
                                            for finalized
                                            requests.
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                                {/* CUSTOMER */}

                                <DetailSection
                                    title="Customer Information"
                                    icon={User}
                                >
                                    <DetailRow
                                        label="Name"
                                        value={
                                            selectedRequest.customer_name
                                        }
                                    />

                                    <DetailRow
                                        label="Phone"
                                        value={
                                            selectedRequest.phone
                                        }
                                    />

                                    <DetailRow
                                        label="Email"
                                        value={
                                            selectedRequest.email
                                        }
                                    />
                                </DetailSection>

                                {/* POLICY */}

                                <DetailSection
                                    title="Policy Information"
                                    icon={FileText}
                                >
                                    <DetailRow
                                        label="Application Number"
                                        value={
                                            selectedRequest.application_number
                                        }
                                        mono
                                    />

                                    <DetailRow
                                        label="Policy Number"
                                        value={
                                            selectedRequest.policy_number
                                        }
                                        mono
                                    />

                                    <DetailRow
                                        label="Request Type"
                                        value={
                                            selectedRequest.request_type
                                        }
                                    />

                                    <DetailRow
                                        label="Proposal ID"
                                        value={
                                            selectedRequest.insurance_proposal_id
                                        }
                                    />

                                    <DetailRow
                                        label="Policy Status"
                                        value={
                                            selectedPolicy?.policy_status ||
                                            "cancelled"
                                        }
                                    />
                                </DetailSection>

                                {/* PAYMENT */}

                                <DetailSection
                                    title="Payment Information"
                                    icon={CreditCard}
                                >
                                    <DetailRow
                                        label="Transaction ID"
                                        value={
                                            selectedRequest.transaction_id
                                        }
                                        mono
                                    />

                                    <DetailRow
                                        label="Original Payment UTR"
                                        value={
                                            selectedRequest.payment_utr
                                        }
                                        mono
                                    />

                                    <DetailRow
                                        label="Premium"
                                        value={money(
                                            selectedRequest.premium_amount
                                        )}
                                    />

                                    <DetailRow
                                        label="GST"
                                        value={`${money(
                                            selectedRequest.gst_amount
                                        )} (${selectedRequest.gst_percentage || 0}%)`}
                                    />

                                    <DetailRow
                                        label="Total Paid"
                                        value={money(
                                            selectedRequest.total_paid_amount
                                        )}
                                        valueClassName="text-blue-700"
                                    />
                                </DetailSection>

                                {/* POLICY DURATION */}

                                <DetailSection
                                    title="Policy Duration"
                                    icon={Calendar}
                                >
                                    <DetailRow
                                        label="Start Date"
                                        value={formatDate(
                                            selectedRequest.policy_start_date
                                        )}
                                    />

                                    <DetailRow
                                        label="End Date"
                                        value={formatDate(
                                            selectedRequest.policy_end_date
                                        )}
                                    />

                                    <DetailRow
                                        label="Cancellation Date"
                                        value={formatDate(
                                            selectedRequest.cancellation_date
                                        )}
                                    />

                                    <DetailRow
                                        label="Total Days"
                                        value={
                                            selectedRequest.policy_total_days
                                        }
                                    />

                                    <DetailRow
                                        label="Used Days"
                                        value={
                                            selectedRequest.policy_used_days
                                        }
                                    />

                                    <DetailRow
                                        label="Remaining Days"
                                        value={
                                            selectedRequest.policy_remaining_days
                                        }
                                    />

                                    <DetailRow
                                        label="Daily Premium"
                                        value={money(
                                            selectedRequest.daily_premium
                                        )}
                                    />
                                </DetailSection>

                                {/* CALCULATION */}

                                <div className="xl:col-span-2">
                                    <DetailSection
                                        title="Refund Calculation"
                                        icon={IndianRupee}
                                    >
                                        <div className="grid grid-cols-1 gap-4 py-5 md:grid-cols-2 lg:grid-cols-4">
                                            <CalculationCard
                                                title="Premium"
                                                value={money(
                                                    selectedRequest.premium_amount
                                                )}
                                            />

                                            <CalculationCard
                                                title="Used Amount"
                                                value={`-${money(
                                                    selectedRequest.used_amount
                                                )}`}
                                                negative
                                            />

                                            <CalculationCard
                                                title="Cancellation Charge"
                                                value={`-${money(
                                                    selectedRequest.cancellation_charge
                                                )}`}
                                                negative
                                            />

                                            <CalculationCard
                                                title="Other Charges"
                                                value={`-${money(
                                                    selectedRequest.other_charges
                                                )}`}
                                                negative
                                            />

                                            <CalculationCard
                                                title="GST"
                                                value={money(
                                                    selectedRequest.gst_amount
                                                )}
                                            />

                                            <CalculationCard
                                                title="Total Deductions"
                                                value={`-${money(
                                                    selectedRequest.total_deductions
                                                )}`}
                                                negative
                                            />

                                            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 md:col-span-2">
                                                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                                                    Final Refund Amount
                                                </p>

                                                <p className="mt-2 text-3xl font-bold text-emerald-700">
                                                    {money(
                                                        selectedRequest.refund_amount
                                                    )}
                                                </p>
                                            </div>
                                        </div>

                                        {selectedRequest.other_charges_description && (
                                            <div className="mb-5 rounded-xl bg-gray-50 p-4">
                                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                                    Other Charges
                                                    Description
                                                </p>

                                                <p className="mt-2 text-sm text-gray-800">
                                                    {
                                                        selectedRequest.other_charges_description
                                                    }
                                                </p>
                                            </div>
                                        )}
                                    </DetailSection>
                                </div>

                                {/* CUSTOMER REASON */}

                                <DetailSection
                                    title="Cancellation Request"
                                    icon={MessageSquare}
                                >
                                    <DetailRow
                                        label="Reason"
                                        value={
                                            selectedRequest.cancellation_reason
                                        }
                                    />

                                    <DetailRow
                                        label="Customer Notes"
                                        value={
                                            selectedRequest.customer_notes
                                        }
                                    />

                                    <DetailRow
                                        label="Requested On"
                                        value={formatDateTime(
                                            selectedRequest.created_at
                                        )}
                                    />
                                </DetailSection>

                                {/* ADMIN */}

                                <DetailSection
                                    title="Admin Information"
                                    icon={ShieldCheck}
                                >
                                    <DetailRow
                                        label="Reviewed By"
                                        value={
                                            selectedRequest.reviewed_by
                                                ? `Admin #${selectedRequest.reviewed_by}`
                                                : "Not reviewed"
                                        }
                                    />

                                    <DetailRow
                                        label="Reviewed At"
                                        value={formatDateTime(
                                            selectedRequest.reviewed_at
                                        )}
                                    />

                                    <DetailRow
                                        label="Admin Notes"
                                        value={
                                            selectedRequest.admin_notes ||
                                            "No notes"
                                        }
                                    />

                                    {selectedRequest.rejection_reason && (
                                        <DetailRow
                                            label="Rejection Reason"
                                            value={
                                                selectedRequest.rejection_reason
                                            }
                                            valueClassName="text-red-600"
                                        />
                                    )}
                                </DetailSection>

                                {/* SETTLEMENT */}

                                <div className="xl:col-span-2">
                                    <DetailSection
                                        title="Refund Settlement"
                                        icon={Banknote}
                                    >
                                        <div className="grid grid-cols-1 gap-5 py-4 md:grid-cols-2 lg:grid-cols-4">
                                            <DetailRow
                                                label="Settlement Method"
                                                value={
                                                    selectedRequest.settlement_method ||
                                                    "Not settled"
                                                }
                                            />

                                            <DetailRow
                                                label="Settlement UTR"
                                                value={
                                                    selectedRequest.settlement_utr ||
                                                    "Not settled"
                                                }
                                                mono
                                            />

                                            <DetailRow
                                                label="Settled Amount"
                                                value={
                                                    selectedRequest.settled_amount !==
                                                    null
                                                        ? money(
                                                              selectedRequest.settled_amount
                                                          )
                                                        : "Not settled"
                                                }
                                            />

                                            <DetailRow
                                                label="Settled At"
                                                value={formatDateTime(
                                                    selectedRequest.settled_at
                                                )}
                                            />
                                        </div>

                                        {selectedRequest.settlement_notes && (
                                            <div className="mb-5 rounded-xl bg-gray-50 p-4">
                                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                                    Settlement Notes
                                                </p>

                                                <p className="mt-2 text-sm text-gray-800">
                                                    {
                                                        selectedRequest.settlement_notes
                                                    }
                                                </p>
                                            </div>
                                        )}
                                    </DetailSection>
                                </div>

                                {/* STATUS HISTORY */}

                                <div className="xl:col-span-2">
                                    <DetailSection
                                        title="Status History"
                                        icon={History}
                                    >
                                        {statusHistory.length ===
                                        0 ? (
                                            <div className="py-8 text-center text-sm text-gray-500">
                                                No status history
                                                available.
                                            </div>
                                        ) : (
                                            <div className="relative py-5">
                                                <div className="absolute bottom-5 left-[9px] top-5 w-px bg-gray-200" />

                                                <div className="space-y-5">
                                                    {statusHistory.map(
                                                        (
                                                            history,
                                                            index
                                                        ) => (
                                                            <div
                                                                key={
                                                                    history.id ||
                                                                    index
                                                                }
                                                                className="relative flex gap-4"
                                                            >
                                                                <div className="relative z-10 mt-1 h-5 w-5 shrink-0 rounded-full border-4 border-white bg-gray-900 shadow" />

                                                                <div className="flex-1 rounded-xl border border-gray-200 bg-gray-50 p-4">
                                                                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                                                                        <div className="flex flex-wrap items-center gap-2">
                                                                            {history.from_status && (
                                                                                <StatusBadge
                                                                                    status={
                                                                                        history.from_status
                                                                                    }
                                                                                />
                                                                            )}

                                                                            <ArrowRight className="h-4 w-4 text-gray-400" />

                                                                            <StatusBadge
                                                                                status={
                                                                                    history.to_status
                                                                                }
                                                                            />
                                                                        </div>

                                                                        <span className="text-xs text-gray-500">
                                                                            {formatDateTime(
                                                                                history.created_at
                                                                            )}
                                                                        </span>
                                                                    </div>

                                                                    {history.notes && (
                                                                        <p className="mt-3 text-sm text-gray-700">
                                                                            {
                                                                                history.notes
                                                                            }
                                                                        </p>
                                                                    )}

                                                                    {history.changed_by && (
                                                                        <p className="mt-2 text-xs text-gray-400">
                                                                            Changed
                                                                            by
                                                                            Admin
                                                                            #
                                                                            {
                                                                                history.changed_by
                                                                            }
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </DetailSection>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* =============================================================
                EDIT CHARGES MODAL
            ============================================================= */}

            {showCharges && selectedRequest && (
                <Modal
                    title="Edit Refund Calculation"
                    onClose={() =>
                        setShowCharges(false)
                    }
                >
                    <form
                        onSubmit={
                            handleUpdateCharges
                        }
                    >
                        <div className="space-y-5">
                            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                                <p className="text-sm font-semibold text-blue-900">
                                    Current Refund
                                </p>

                                <p className="mt-1 text-2xl font-bold text-blue-700">
                                    {money(
                                        selectedRequest.refund_amount
                                    )}
                                </p>
                            </div>

                            <FormInput
                                label="GST Percentage"
                                type="number"
                                step="0.01"
                                min="0"
                                max="100"
                                value={
                                    chargeForm.gst_percentage
                                }
                                onChange={(value) =>
                                    setChargeForm(
                                        (prev) => ({
                                            ...prev,
                                            gst_percentage:
                                                value,
                                        })
                                    )
                                }
                                suffix="%"
                            />

                            <FormInput
                                label="Cancellation Charge"
                                type="number"
                                step="0.01"
                                min="0"
                                value={
                                    chargeForm.cancellation_charge
                                }
                                onChange={(value) =>
                                    setChargeForm(
                                        (prev) => ({
                                            ...prev,
                                            cancellation_charge:
                                                value,
                                        })
                                    )
                                }
                                prefix="₹"
                                help="Default cancellation charge is ₹500."
                            />

                            <FormInput
                                label="Other Charges"
                                type="number"
                                step="0.01"
                                min="0"
                                value={
                                    chargeForm.other_charges
                                }
                                onChange={(value) =>
                                    setChargeForm(
                                        (prev) => ({
                                            ...prev,
                                            other_charges:
                                                value,
                                        })
                                    )
                                }
                                prefix="₹"
                            />

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Other Charges Description
                                </label>

                                <textarea
                                    rows={4}
                                    value={
                                        chargeForm.other_charges_description
                                    }
                                    onChange={(e) =>
                                        setChargeForm(
                                            (prev) => ({
                                                ...prev,
                                                other_charges_description:
                                                    e.target
                                                        .value,
                                            })
                                        )
                                    }
                                    placeholder="Explain any additional charges..."
                                    className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                                />
                            </div>
                        </div>

                        <ModalActions
                            onCancel={() =>
                                setShowCharges(
                                    false
                                )
                            }
                            loading={
                                actionLoading
                            }
                            submitText="Save Calculation"
                            icon={Save}
                        />
                    </form>
                </Modal>
            )}

            {/* =============================================================
                STATUS MODAL
            ============================================================= */}

            {showStatus && selectedRequest && (
                <Modal
                    title="Change Refund Status"
                    onClose={() =>
                        setShowStatus(false)
                    }
                >
                    <form
                        onSubmit={
                            handleUpdateStatus
                        }
                    >
                        <div className="space-y-5">
                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    New Status
                                </label>

                                <select
                                    required
                                    value={
                                        statusForm.status
                                    }
                                    onChange={(e) =>
                                        setStatusForm(
                                            (prev) => ({
                                                ...prev,
                                                status:
                                                    e.target
                                                        .value,
                                            })
                                        )
                                    }
                                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-sm outline-none focus:border-gray-900"
                                >
                                    <option value="">
                                        Select status
                                    </option>

                                    {STATUS_OPTIONS.map(
                                        (item) => (
                                            <option
                                                key={
                                                    item
                                                }
                                                value={
                                                    item
                                                }
                                            >
                                                {
                                                    STATUS_CONFIG[
                                                        item
                                                    ].label
                                                }
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Admin Notes
                                </label>

                                <textarea
                                    rows={5}
                                    value={
                                        statusForm.notes
                                    }
                                    onChange={(e) =>
                                        setStatusForm(
                                            (prev) => ({
                                                ...prev,
                                                notes:
                                                    e.target
                                                        .value,
                                            })
                                        )
                                    }
                                    placeholder="Reason / internal note for this status change..."
                                    className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-gray-900"
                                />
                            </div>

                            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                                Final statuses such as
                                Refunded, Rejected and
                                Cancelled cannot be changed
                                again by the backend.
                            </div>
                        </div>

                        <ModalActions
                            onCancel={() =>
                                setShowStatus(
                                    false
                                )
                            }
                            loading={
                                actionLoading
                            }
                            submitText="Update Status"
                        />
                    </form>
                </Modal>
            )}

            {/* =============================================================
                SETTLEMENT MODAL
            ============================================================= */}

            {showSettlement && selectedRequest && (
                <Modal
                    title="Complete Refund Settlement"
                    onClose={() =>
                        setShowSettlement(
                            false
                        )
                    }
                >
                    <form
                        onSubmit={
                            handleCompleteRefund
                        }
                    >
                        <div className="space-y-5">
                            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                                    Amount To Refund
                                </p>

                                <p className="mt-2 text-3xl font-bold text-emerald-700">
                                    {money(
                                        selectedRequest.refund_amount
                                    )}
                                </p>

                                <p className="mt-2 text-xs text-emerald-700">
                                    The settled amount must
                                    exactly match the calculated
                                    refund amount.
                                </p>
                            </div>

                            <FormInput
                                label="Settlement UTR"
                                required
                                value={
                                    settlementForm.settlement_utr
                                }
                                onChange={(value) =>
                                    setSettlementForm(
                                        (prev) => ({
                                            ...prev,
                                            settlement_utr:
                                                value,
                                        })
                                    )
                                }
                                placeholder="Enter bank/UPI settlement UTR"
                            />

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Settlement Method
                                </label>

                                <select
                                    required
                                    value={
                                        settlementForm.settlement_method
                                    }
                                    onChange={(e) =>
                                        setSettlementForm(
                                            (prev) => ({
                                                ...prev,
                                                settlement_method:
                                                    e.target
                                                        .value,
                                            })
                                        )
                                    }
                                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-sm outline-none focus:border-gray-900"
                                >
                                    <option value="bank_transfer">
                                        Bank Transfer
                                    </option>

                                    <option value="upi">
                                        UPI
                                    </option>

                                    <option value="neft">
                                        NEFT
                                    </option>

                                    <option value="rtgs">
                                        RTGS
                                    </option>

                                    <option value="imps">
                                        IMPS
                                    </option>

                                    <option value="cash">
                                        Cash
                                    </option>

                                    <option value="other">
                                        Other
                                    </option>
                                </select>
                            </div>

                            <FormInput
                                label="Settled Amount"
                                required
                                type="number"
                                step="0.01"
                                min="0"
                                value={
                                    settlementForm.settled_amount
                                }
                                onChange={(value) =>
                                    setSettlementForm(
                                        (prev) => ({
                                            ...prev,
                                            settled_amount:
                                                value,
                                        })
                                    )
                                }
                                prefix="₹"
                            />

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Settlement Date & Time
                                </label>

                                <input
                                    required
                                    type="datetime-local"
                                    value={
                                        settlementForm.settled_at
                                    }
                                    onChange={(e) =>
                                        setSettlementForm(
                                            (prev) => ({
                                                ...prev,
                                                settled_at:
                                                    e.target
                                                        .value,
                                            })
                                        )
                                    }
                                    className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-gray-900"
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Settlement Notes
                                </label>

                                <textarea
                                    rows={4}
                                    value={
                                        settlementForm.settlement_notes
                                    }
                                    onChange={(e) =>
                                        setSettlementForm(
                                            (prev) => ({
                                                ...prev,
                                                settlement_notes:
                                                    e.target
                                                        .value,
                                            })
                                        )
                                    }
                                    placeholder="Enter settlement details..."
                                    className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-gray-900"
                                />
                            </div>

                            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                                <strong>
                                    Important:
                                </strong>{" "}
                                Completing this form will mark
                                the refund as{" "}
                                <strong>
                                    REFUNDED
                                </strong>
                                .
                            </div>
                        </div>

                        <ModalActions
                            onCancel={() =>
                                setShowSettlement(
                                    false
                                )
                            }
                            loading={
                                actionLoading
                            }
                            submitText="Confirm Refund Settlement"
                            icon={CheckCircle2}
                        />
                    </form>
                </Modal>
            )}

            {/* =============================================================
                ADMIN NOTE MODAL
            ============================================================= */}

            {showNote && selectedRequest && (
                <Modal
                    title="Add Admin Note"
                    onClose={() =>
                        setShowNote(false)
                    }
                >
                    <form
                        onSubmit={
                            handleAddNote
                        }
                    >
                        <div>
                            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                Note
                            </label>

                            <textarea
                                required
                                rows={7}
                                value={
                                    noteForm.notes
                                }
                                onChange={(e) =>
                                    setNoteForm({
                                        notes:
                                            e.target
                                                .value,
                                    })
                                }
                                placeholder="Enter internal admin note..."
                                className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-gray-900"
                            />
                        </div>

                        <ModalActions
                            onCancel={() =>
                                setShowNote(false)
                            }
                            loading={
                                actionLoading
                            }
                            submitText="Add Note"
                            icon={MessageSquare}
                        />
                    </form>
                </Modal>
            )}
        </div>
    );
}

/*
|--------------------------------------------------------------------------
| CALCULATION CARD
|--------------------------------------------------------------------------
*/

function CalculationCard({
    title,
    value,
    negative = false,
}) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {title}
            </p>

            <p
                className={`mt-2 text-xl font-bold ${
                    negative
                        ? "text-red-600"
                        : "text-gray-900"
                }`}
            >
                {value}
            </p>
        </div>
    );
}

/*
|--------------------------------------------------------------------------
| MODAL
|--------------------------------------------------------------------------
*/

function Modal({
    title,
    onClose,
    children,
}) {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
                    <h2 className="text-lg font-bold text-gray-900">
                        {title}
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-xl p-2 text-gray-500 hover:bg-gray-100"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="max-h-[75vh] overflow-y-auto px-6 py-5">
                    {children}
                </div>
            </div>
        </div>
    );
}

/*
|--------------------------------------------------------------------------
| MODAL ACTIONS
|--------------------------------------------------------------------------
*/

function ModalActions({
    onCancel,
    loading,
    submitText,
    icon: Icon = Save,
}) {
    return (
        <div className="mt-7 flex justify-end gap-3 border-t border-gray-200 pt-5">
            <button
                type="button"
                onClick={onCancel}
                disabled={loading}
                className="rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
                Cancel
            </button>

            <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    <Icon className="h-4 w-4" />
                )}

                {loading
                    ? "Processing..."
                    : submitText}
            </button>
        </div>
    );
}

/*
|--------------------------------------------------------------------------
| FORM INPUT
|--------------------------------------------------------------------------
*/

function FormInput({
    label,
    value,
    onChange,
    type = "text",
    required = false,
    min,
    max,
    step,
    placeholder,
    prefix,
    suffix,
    help,
}) {
    return (
        <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                {label}
                {required && (
                    <span className="ml-1 text-red-500">
                        *
                    </span>
                )}
            </label>

            <div className="relative">
                {prefix && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">
                        {prefix}
                    </span>
                )}

                <input
                    required={required}
                    type={type}
                    min={min}
                    max={max}
                    step={step}
                    value={value ?? ""}
                    onChange={(e) =>
                        onChange(
                            e.target.value
                        )
                    }
                    placeholder={placeholder}
                    className={`w-full rounded-xl border border-gray-300 py-2.5 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 ${
                        prefix
                            ? "pl-8"
                            : "pl-3"
                    } ${
                        suffix
                            ? "pr-10"
                            : "pr-3"
                    }`}
                />

                {suffix && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">
                        {suffix}
                    </span>
                )}
            </div>

            {help && (
                <p className="mt-1.5 text-xs text-gray-500">
                    {help}
                </p>
            )}
        </div>
    );
}

/*
|--------------------------------------------------------------------------
| DATE TIME LOCAL FORMAT
|--------------------------------------------------------------------------
*/

function formatForDateTimeLocal(value) {
    if (!value) return "";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "";
    }

    const pad = (number) =>
        String(number).padStart(2, "0");

    return `${date.getFullYear()}-${pad(
        date.getMonth() + 1
    )}-${pad(
        date.getDate()
    )}T${pad(
        date.getHours()
    )}:${pad(
        date.getMinutes()
    )}`;
}

/*
|--------------------------------------------------------------------------
| REQUEST NUMBER
|--------------------------------------------------------------------------
|
| Backend currently generates:
|
| REF + YYYYMMDD + six digit ID
|
| Example:
| REF20260910000001
|
*/

function formatRequestId(item) {
    if (!item?.id) {
        return "";
    }

    const date =
        item.created_at
            ? new Date(item.created_at)
            : new Date();

    const datePart =
        !Number.isNaN(date.getTime())
            ? `${date.getFullYear()}${String(
                  date.getMonth() + 1
              ).padStart(
                  2,
                  "0"
              )}${String(
                  date.getDate()
              ).padStart(2, "0")}`
            : "";

    return `${datePart}${String(
        item.id
    ).padStart(6, "0")}`;
}


