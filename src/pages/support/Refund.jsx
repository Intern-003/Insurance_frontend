import React, { useMemo, useState } from "react";
import axios from "axios";
import {
    AlertCircle,
    ArrowLeft,
    CheckCircle2,
    Clock3,
    FileCheck2,
    IndianRupee,
    Loader2,
    LockKeyhole,
    Phone,
    RefreshCw,
    Search,
    ShieldCheck,
    UserRound,
    XCircle,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| API CONFIGURATION
|--------------------------------------------------------------------------
|
| Change this if your VITE_API_URL already points directly to /api.
|
| Example:
|
| VITE_API_URL=https://insurance.spay.live/api
|
|--------------------------------------------------------------------------
*/

const API_BASE_URL =
    import.meta.env.VITE_API_URL ;


/*
|--------------------------------------------------------------------------
| API ENDPOINTS
|--------------------------------------------------------------------------
|
| These should match the routes we create/use in Laravel.
|
|--------------------------------------------------------------------------
*/

const ENDPOINTS = {
    verify: `${API_BASE_URL}refund/verify`,
    create: `${API_BASE_URL}refund`,
    status: `${API_BASE_URL}refund/status`,
};


/*
|--------------------------------------------------------------------------
| AXIOS INSTANCE
|--------------------------------------------------------------------------
*/

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    timeout: 30000,
});


/*
|--------------------------------------------------------------------------
| STATUS CONFIG
|--------------------------------------------------------------------------
*/

const STATUS_CONFIG = {
    initiated: {
        label: "Request Initiated",
        description:
            "Your cancellation and refund request has been successfully submitted.",
        icon: Clock3,
    },

    under_review: {
        label: "Under Review",
        description:
            "Our team is reviewing your cancellation and refund request.",
        icon: Search,
    },

    approved: {
        label: "Refund Approved",
        description:
            "Your refund has been approved and is ready for processing.",
        icon: CheckCircle2,
    },

    processing: {
        label: "Refund Processing",
        description:
            "Your refund is currently being processed by our team.",
        icon: RefreshCw,
    },

    refunded: {
        label: "Refund Completed",
        description:
            "Your refund has been settled successfully.",
        icon: CheckCircle2,
    },

    rejected: {
        label: "Request Rejected",
        description:
            "Your cancellation/refund request has been rejected.",
        icon: XCircle,
    },

    cancelled: {
        label: "Request Cancelled",
        description:
            "Your cancellation/refund request has been cancelled.",
        icon: XCircle,
    },
};


/*
|--------------------------------------------------------------------------
| STATUS ORDER
|--------------------------------------------------------------------------
*/

const STATUS_STEPS = [
    "initiated",
    "under_review",
    "approved",
    "processing",
    "refunded",
];


/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/

const formatCurrency = (value) => {
    const number = Number(value || 0);

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(number);
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


const maskPhone = (phone) => {
    if (!phone) return "";

    const value = String(phone);

    if (value.length < 5) {
        return value;
    }

    return (
        value.substring(0, 2) +
        "******" +
        value.substring(value.length - 2)
    );
};


const getApiError = (error) => {
    if (error?.response?.data?.message) {
        return error.response.data.message;
    }

    if (error?.response?.data?.errors) {
        const errors = error.response.data.errors;

        const firstKey = Object.keys(errors)[0];

        if (firstKey && errors[firstKey]?.length) {
            return errors[firstKey][0];
        }
    }

    if (error?.code === "ECONNABORTED") {
        return "The request timed out. Please try again.";
    }

    if (!error?.response) {
        return "Unable to connect to the server. Please check your internet connection.";
    }

    return "Something went wrong. Please try again.";
};


/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function RefundPage() {

    /*
    |--------------------------------------------------------------------------
    | PAGE
    |--------------------------------------------------------------------------
    */

    const [step, setStep] = useState("verify");

    /*
    |--------------------------------------------------------------------------
    | VERIFICATION FORM
    |--------------------------------------------------------------------------
    */

    const [identifierType, setIdentifierType] =
        useState("application");

    const [form, setForm] = useState({
        application_number: "",
        policy_number: "",
        phone: "",
        payment_utr: "",
        cancellation_reason: "",
        customer_notes: "",
    });


    /*
    |--------------------------------------------------------------------------
    | POLICY
    |--------------------------------------------------------------------------
    */

    const [policy, setPolicy] = useState(null);

    /*
    |--------------------------------------------------------------------------
    | CALCULATION
    |--------------------------------------------------------------------------
    */

    const [calculation, setCalculation] =
        useState(null);

    /*
    |--------------------------------------------------------------------------
    | REQUEST
    |--------------------------------------------------------------------------
    */

    const [refundRequest, setRefundRequest] =
        useState(null);

    /*
    |--------------------------------------------------------------------------
    | STATUS
    |--------------------------------------------------------------------------
    */

    const [statusData, setStatusData] =
        useState(null);

    /*
    |--------------------------------------------------------------------------
    | LOADING
    |--------------------------------------------------------------------------
    */

    const [loading, setLoading] =
        useState(false);

    /*
    |--------------------------------------------------------------------------
    | ERROR
    |--------------------------------------------------------------------------
    */

    const [error, setError] =
        useState("");

    /*
    |--------------------------------------------------------------------------
    | SUCCESS
    |--------------------------------------------------------------------------
    */

    const [successMessage, setSuccessMessage] =
        useState("");


    /*
    |--------------------------------------------------------------------------
    | FIELD UPDATE
    |--------------------------------------------------------------------------
    */

    const updateField = (field, value) => {

        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));

        setError("");
    };


    /*
    |--------------------------------------------------------------------------
    | IDENTIFIER CHANGE
    |--------------------------------------------------------------------------
    */

    const handleIdentifierTypeChange = (type) => {

        setIdentifierType(type);

        setForm((previous) => ({
            ...previous,

            application_number:
                type === "application"
                    ? previous.application_number
                    : "",

            policy_number:
                type === "policy"
                    ? previous.policy_number
                    : "",
        }));

        setError("");
    };


    /*
    |--------------------------------------------------------------------------
    | VERIFY POLICY
    |--------------------------------------------------------------------------
    */

    const handleVerify = async (event) => {

        event.preventDefault();

        setError("");
        setSuccessMessage("");
        setLoading(true);


        try {

            const payload = {
                phone: form.phone.trim(),
                payment_utr: form.payment_utr.trim(),
            };


            if (identifierType === "application") {

                payload.application_number =
                    form.application_number.trim();

            } else {

                payload.policy_number =
                    form.policy_number.trim();
            }


            const response =
                await api.post(
                    ENDPOINTS.verify,
                    payload
                );


            if (!response.data?.status) {

                throw new Error(
                    response.data?.message ||
                    "Unable to verify policy."
                );
            }


            const verifiedPolicy =
                response.data?.data ||
                response.data?.policy ||
                null;


            setPolicy(verifiedPolicy);


            /*
            |--------------------------------------------------------------------------
            | CALCULATION
            |--------------------------------------------------------------------------
            |
            | Your verify API may return calculation data
            | depending on the current backend implementation.
            |
            |--------------------------------------------------------------------------
            */

            if (response.data?.calculation) {

                setCalculation(
                    response.data.calculation
                );

            } else if (verifiedPolicy?.calculation) {

                setCalculation(
                    verifiedPolicy.calculation
                );

            } else {

                setCalculation(null);
            }


            setStep("request");


        } catch (err) {

            setError(
                err?.message &&
                !err?.response
                    ? err.message
                    : getApiError(err)
            );

        } finally {

            setLoading(false);
        }
    };


    /*
    |--------------------------------------------------------------------------
    | SUBMIT REFUND REQUEST
    |--------------------------------------------------------------------------
    */

    const handleSubmitRequest = async (event) => {

        event.preventDefault();

        setError("");
        setSuccessMessage("");
        setLoading(true);


        try {

            const payload = {

                application_number:
                    form.application_number.trim()
                    || undefined,

                policy_number:
                    form.policy_number.trim()
                    || undefined,

                phone:
                    form.phone.trim(),

                payment_utr:
                    form.payment_utr.trim(),

                cancellation_reason:
                    form.cancellation_reason.trim(),

                customer_notes:
                    form.customer_notes.trim()
                    || undefined,
            };


            const response =
                await api.post(
                    ENDPOINTS.create,
                    payload
                );


            if (!response.data?.status) {

                throw new Error(
                    response.data?.message ||
                    "Unable to submit request."
                );
            }


            const requestData =
                response.data?.request ||
                response.data?.data ||
                null;


            setRefundRequest(requestData);


            setSuccessMessage(
                response.data?.message ||
                "Your cancellation/refund request has been initiated successfully."
            );


            setStep("success");


        } catch (err) {

            /*
            |--------------------------------------------------------------------------
            | DUPLICATE REQUEST
            |--------------------------------------------------------------------------
            */

            if (err?.response?.status === 409) {

                const existingRequest =
                    err.response.data?.request ||
                    err.response.data?.data ||
                    null;


                setRefundRequest(
                    existingRequest
                );


                setError(
                    err.response.data?.message ||
                    "A request already exists for this policy."
                );

            } else {

                setError(
                    getApiError(err)
                );
            }

        } finally {

            setLoading(false);
        }
    };


    /*
    |--------------------------------------------------------------------------
    | CHECK REQUEST STATUS
    |--------------------------------------------------------------------------
    */

    const handleCheckStatus = async () => {

        setError("");
        setSuccessMessage("");
        setLoading(true);


        try {

            const payload = {

                application_number:
                    form.application_number.trim()
                    || undefined,

                policy_number:
                    form.policy_number.trim()
                    || undefined,

                phone:
                    form.phone.trim(),
            };


            const response =
                await api.post(
                    ENDPOINTS.status,
                    payload
                );


            if (!response.data?.status) {

                throw new Error(
                    response.data?.message ||
                    "Refund request not found."
                );
            }


            const data =
                response.data?.data ||
                response.data?.request ||
                null;


            setStatusData(data);

            setStep("status");


        } catch (err) {

            setError(
                err?.message &&
                !err?.response
                    ? err.message
                    : getApiError(err)
            );

        } finally {

            setLoading(false);
        }
    };


    /*
    |--------------------------------------------------------------------------
    | RESET
    |--------------------------------------------------------------------------
    */

    const resetPage = () => {

        setStep("verify");

        setPolicy(null);

        setCalculation(null);

        setRefundRequest(null);

        setStatusData(null);

        setError("");

        setSuccessMessage("");

        setForm({
            application_number: "",
            policy_number: "",
            phone: "",
            payment_utr: "",
            cancellation_reason: "",
            customer_notes: "",
        });
    };


    /*
    |--------------------------------------------------------------------------
    | STATUS
    |--------------------------------------------------------------------------
    */

    const activeStatus =
        refundRequest?.status ||
        statusData?.status ||
        "initiated";


    /*
    |--------------------------------------------------------------------------
    | STATUS CONFIG
    |--------------------------------------------------------------------------
    */

    const currentStatusConfig =
        STATUS_CONFIG[activeStatus] ||
        STATUS_CONFIG.initiated;


    /*
    |--------------------------------------------------------------------------
    | STATUS INDEX
    |--------------------------------------------------------------------------
    */

    const currentStatusIndex =
        STATUS_STEPS.indexOf(activeStatus);


    /*
    |--------------------------------------------------------------------------
    | POLICY DATA
    |--------------------------------------------------------------------------
    */

    const policyName =
        policy?.customer_name ||
        policy?.full_name ||
        policy?.name ||
        "Policy Holder";


    /*
    |--------------------------------------------------------------------------
    | PREMIUM
    |--------------------------------------------------------------------------
    */

    const premium =
        calculation?.premium_amount ??
        policy?.premium_amount ??
        refundRequest?.premium_amount ??
        0;


    /*
    |--------------------------------------------------------------------------
    | DISPLAY CALCULATION
    |--------------------------------------------------------------------------
    */

    const displayCalculation =
        useMemo(() => {

            if (!calculation) {
                return null;
            }

            return {

                premium:
                    calculation.premium_amount,

                gst:
                    calculation.gst_amount,

                totalPaid:
                    calculation.total_paid_amount,

                totalDays:
                    calculation.policy_total_days,

                usedDays:
                    calculation.policy_used_days,

                remainingDays:
                    calculation.policy_remaining_days,

                dailyPremium:
                    calculation.daily_premium,

                usedAmount:
                    calculation.used_amount,

                cancellationCharge:
                    calculation.cancellation_charge,

                otherCharges:
                    calculation.other_charges,

                deductions:
                    calculation.total_deductions,

                refund:
                    calculation.refund_amount,
            };

        }, [calculation]);


    return (
        <div className="min-h-screen bg-slate-50">




            {/* ================================================================
                MAIN
            ================================================================ */}

            <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

                {/* ============================================================
                    PAGE TITLE
                ============================================================ */}

                <div className="mb-8 text-center">

                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">

                        <RefreshCw
                            className="h-4 w-4"
                        />

                        Policy Cancellation & Refund

                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">

                        Request Policy Cancellation

                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">

                        Submit your cancellation and refund request securely.
                        Our team will review your request and contact you on
                        your registered phone number.

                    </p>

                </div>


                {/* ============================================================
                    PROGRESS
                ============================================================ */}

                {step !== "success" && step !== "status" && (

                    <div className="mx-auto mb-8 max-w-3xl">

                        <div className="flex items-center justify-center">

                            {[
                                {
                                    key: "verify",
                                    label: "Verify Policy",
                                },
                                {
                                    key: "request",
                                    label: "Request Refund",
                                },
                            ].map((item, index) => {

                                const active =
                                    step === item.key ||
                                    (
                                        step === "request" &&
                                        index === 0
                                    );

                                const completed =
                                    step === "request" &&
                                    index === 0;

                                return (
                                    <React.Fragment
                                        key={item.key}
                                    >

                                        <div className="flex items-center gap-2">

                                            <div
                                                className={[
                                                    "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold",
                                                    completed
                                                        ? "border-blue-600 bg-blue-600 text-white"
                                                        : active
                                                            ? "border-blue-600 bg-blue-50 text-blue-700"
                                                            : "border-slate-300 bg-white text-slate-400",
                                                ].join(" ")}
                                            >

                                                {completed ? (
                                                    <CheckCircle2
                                                        className="h-5 w-5"
                                                    />
                                                ) : (
                                                    index + 1
                                                )}

                                            </div>

                                            <span
                                                className={[
                                                    "hidden text-sm font-medium sm:block",
                                                    active ||
                                                    completed
                                                        ? "text-slate-900"
                                                        : "text-slate-400",
                                                ].join(" ")}
                                            >
                                                {item.label}
                                            </span>

                                        </div>

                                        {index === 0 && (

                                            <div className="mx-3 h-px w-16 bg-slate-200 sm:w-28" />

                                        )}

                                    </React.Fragment>
                                );
                            })}

                        </div>

                    </div>

                )}


                {/* ============================================================
                    GLOBAL ERROR
                ============================================================ */}

                {error && (

                    <div className="mx-auto mb-6 max-w-3xl">

                        <div className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800">

                            <AlertCircle
                                className="mt-0.5 h-5 w-5 shrink-0"
                            />

                            <div className="flex-1">

                                <p className="text-sm font-semibold">
                                    Unable to continue
                                </p>

                                <p className="mt-1 text-sm">
                                    {error}
                                </p>

                                {refundRequest && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setError("");
                                            setStep("status");
                                        }}
                                        className="mt-3 text-sm font-semibold underline"
                                    >
                                        View existing request
                                    </button>
                                )}

                            </div>

                        </div>

                    </div>

                )}


                {/* ============================================================
                    VERIFY
                ============================================================ */}

                {step === "verify" && (

                    <div className="mx-auto max-w-3xl">

                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                            <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 sm:px-8">

                                <div className="flex items-start gap-4">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">

                                        <FileCheck2
                                            className="h-5 w-5"
                                        />

                                    </div>

                                    <div>

                                        <h3 className="font-semibold text-slate-900">
                                            Verify Your Policy
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Enter your policy details to continue.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            <form
                                onSubmit={handleVerify}
                                className="space-y-6 p-6 sm:p-8"
                            >

                                {/* ==================================================
                                    IDENTIFIER
                                ================================================== */}

                                <div>

                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Search Using
                                    </label>

                                    <div className="grid grid-cols-2 gap-3">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleIdentifierTypeChange(
                                                    "application"
                                                )
                                            }
                                            className={[
                                                "rounded-xl border px-4 py-3 text-sm font-medium transition",
                                                identifierType === "application"
                                                    ? "border-blue-600 bg-blue-50 text-blue-700"
                                                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                                            ].join(" ")}
                                        >
                                            Application Number
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleIdentifierTypeChange(
                                                    "policy"
                                                )
                                            }
                                            className={[
                                                "rounded-xl border px-4 py-3 text-sm font-medium transition",
                                                identifierType === "policy"
                                                    ? "border-blue-600 bg-blue-50 text-blue-700"
                                                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                                            ].join(" ")}
                                        >
                                            Policy Number
                                        </button>

                                    </div>

                                </div>


                                {/* ==================================================
                                    APPLICATION / POLICY
                                ================================================== */}

                                {identifierType === "application" ? (

                                    <div>

                                        <label
                                            htmlFor="application_number"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Application Number
                                        </label>

                                        <input
                                            id="application_number"
                                            type="text"
                                            value={
                                                form.application_number
                                            }
                                            onChange={(event) =>
                                                updateField(
                                                    "application_number",
                                                    event.target.value
                                                )
                                            }
                                            placeholder="Enter application number"
                                            autoComplete="off"
                                            required
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                        />

                                    </div>

                                ) : (

                                    <div>

                                        <label
                                            htmlFor="policy_number"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Policy Number
                                        </label>

                                        <input
                                            id="policy_number"
                                            type="text"
                                            value={
                                                form.policy_number
                                            }
                                            onChange={(event) =>
                                                updateField(
                                                    "policy_number",
                                                    event.target.value
                                                )
                                            }
                                            placeholder="Enter policy number"
                                            autoComplete="off"
                                            required
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                        />

                                    </div>

                                )}


                                {/* ==================================================
                                    PHONE
                                ================================================== */}

                                <div>

                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Registered Phone Number
                                    </label>

                                    <div className="relative">

                                        <Phone
                                            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                                        />

                                        <input
                                            id="phone"
                                            type="tel"
                                            inputMode="numeric"
                                            maxLength={15}
                                            value={form.phone}
                                            onChange={(event) =>
                                                updateField(
                                                    "phone",
                                                    event.target.value.replace(
                                                        /[^\d+]/g,
                                                        ""
                                                    )
                                                )
                                            }
                                            placeholder="Enter registered phone number"
                                            autoComplete="tel"
                                            required
                                            className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                        />

                                    </div>

                                </div>


                                {/* ==================================================
                                    UTR
                                ================================================== */}

                                <div>

                                    <label
                                        htmlFor="payment_utr"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Original Payment UTR
                                    </label>

                                    <input
                                        id="payment_utr"
                                        type="text"
                                        value={form.payment_utr}
                                        onChange={(event) =>
                                            updateField(
                                                "payment_utr",
                                                event.target.value
                                            )
                                        }
                                        placeholder="Enter payment UTR / transaction reference"
                                        autoComplete="off"
                                        required
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                    />

                                    <p className="mt-2 text-xs leading-5 text-slate-500">
                                        Enter the UTR/reference number from
                                        the payment used to purchase this policy.
                                    </p>

                                </div>


                                {/* ==================================================
                                    SECURITY NOTICE
                                ================================================== */}

                                <div className="flex gap-3 rounded-2xl bg-slate-50 p-4">

                                    <LockKeyhole
                                        className="mt-0.5 h-5 w-5 shrink-0 text-slate-500"
                                    />

                                    <p className="text-xs leading-5 text-slate-600">

                                        Your policy information is verified
                                        using the registered phone number and
                                        payment details. We do not ask for
                                        your banking password, PIN or OTP.

                                    </p>

                                </div>


                                {/* ==================================================
                                    SUBMIT
                                ================================================== */}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                                >

                                    {loading ? (
                                        <>
                                            <Loader2
                                                className="h-5 w-5 animate-spin"
                                            />

                                            Verifying Policy...
                                        </>
                                    ) : (
                                        <>
                                            <ShieldCheck
                                                className="h-5 w-5"
                                            />

                                            Verify Policy
                                        </>
                                    )}

                                </button>

                            </form>

                        </div>


                        {/* ========================================================
                            EXISTING REQUEST LOOKUP
                        ======================================================== */}

           

                    </div>
                )}


                {/* ============================================================
                    REQUEST
                ============================================================ */}

                {step === "request" && (

                    <div className="mx-auto max-w-5xl">

                        <div className="grid gap-6 lg:grid-cols-5">

                            {/* ==================================================
                                POLICY SUMMARY
                            ================================================== */}

                            <div className="lg:col-span-2">

                                <div className="sticky top-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                                    <div className="mb-5 flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">

                                            <UserRound
                                                className="h-5 w-5"
                                            />

                                        </div>

                                        <div>

                                            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                                Policy Holder
                                            </p>

                                            <p className="font-semibold text-slate-900">
                                                {policyName}
                                            </p>

                                        </div>

                                    </div>


                                    <div className="space-y-4">

                                        <InfoRow
                                            label="Application Number"
                                            value={
                                                policy?.application_number ||
                                                form.application_number ||
                                                "—"
                                            }
                                        />

                                        <InfoRow
                                            label="Policy Number"
                                            value={
                                                policy?.policy_number ||
                                                form.policy_number ||
                                                "—"
                                            }
                                        />

                                        <InfoRow
                                            label="Phone"
                                            value={maskPhone(
                                                policy?.phone ||
                                                policy?.mobile ||
                                                form.phone
                                            )}
                                        />

                                        <InfoRow
                                            label="Policy Start"
                                            value={formatDate(
                                                policy?.policy_start_date
                                            )}
                                        />

                                        <InfoRow
                                            label="Policy End"
                                            value={formatDate(
                                                policy?.policy_end_date
                                            )}
                                        />

                                        <InfoRow
                                            label="Premium"
                                            value={formatCurrency(
                                                premium
                                            )}
                                            strong
                                        />

                                    </div>


                                    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">

                                        <p className="text-sm font-semibold text-amber-900">
                                            Important
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-amber-800">

                                            Submitting this request does not
                                            immediately complete your refund.
                                            Our team will review your request
                                            and contact you.

                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* ==================================================
                                REQUEST FORM
                            ================================================== */}

                            <div className="lg:col-span-3">

                                <form
                                    onSubmit={handleSubmitRequest}
                                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                                >

                                    <div className="border-b border-slate-200 px-6 py-5 sm:px-8">

                                        <h3 className="text-lg font-bold text-slate-900">
                                            Cancellation & Refund Request
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Tell us why you want to cancel your policy.
                                        </p>

                                    </div>


                                    <div className="space-y-6 p-6 sm:p-8">

                                        {/* ======================================
                                            CALCULATION
                                        ====================================== */}

                                        {displayCalculation && (

                                            <div>

                                                <div className="mb-3 flex items-center justify-between">

                                                    <h4 className="text-sm font-semibold text-slate-900">
                                                        Estimated Refund
                                                    </h4>

                                                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                                        Calculated
                                                    </span>

                                                </div>


                                                <div className="overflow-hidden rounded-2xl border border-slate-200">

                                                    <div className="divide-y divide-slate-100">

                                                        <MoneyRow
                                                            label="Premium"
                                                            value={
                                                                displayCalculation.premium
                                                            }
                                                        />

                                                        <MoneyRow
                                                            label={`GST (${calculation?.gst_percentage || 18}%)`}
                                                            value={
                                                                displayCalculation.gst
                                                            }
                                                        />

                                                        <MoneyRow
                                                            label="Total Paid"
                                                            value={
                                                                displayCalculation.totalPaid
                                                            }
                                                            strong
                                                        />

                                                        <div className="grid grid-cols-3 gap-2 bg-slate-50 p-4 text-center">

                                                            <DayStat
                                                                label="Total Days"
                                                                value={
                                                                    displayCalculation.totalDays
                                                                }
                                                            />

                                                            <DayStat
                                                                label="Used Days"
                                                                value={
                                                                    displayCalculation.usedDays
                                                                }
                                                            />

                                                            <DayStat
                                                                label="Remaining"
                                                                value={
                                                                    displayCalculation.remainingDays
                                                                }
                                                            />

                                                        </div>


                                                        <MoneyRow
                                                            label="Used Insurance Amount"
                                                            value={
                                                                displayCalculation.usedAmount
                                                            }
                                                        />

                                                        <MoneyRow
                                                            label="Cancellation Charge"
                                                            value={
                                                                displayCalculation.cancellationCharge
                                                            }
                                                        />

                                                        <MoneyRow
                                                            label="Other Charges"
                                                            value={
                                                                displayCalculation.otherCharges
                                                            }
                                                        />

                                                        <MoneyRow
                                                            label="Total Deductions"
                                                            value={
                                                                displayCalculation.deductions
                                                            }
                                                            strong
                                                        />

                                                        <div className="flex items-center justify-between bg-emerald-50 px-4 py-4">

                                                            <span className="text-sm font-bold text-emerald-900">
                                                                Estimated Refund
                                                            </span>

                                                            <span className="text-xl font-bold text-emerald-700">
                                                                {formatCurrency(
                                                                    displayCalculation.refund
                                                                )}
                                                            </span>

                                                        </div>

                                                    </div>

                                                </div>


                                                <p className="mt-2 text-xs leading-5 text-slate-500">
                                                    This is an estimated refund
                                                    based on the current
                                                    calculation. The final
                                                    settlement amount may be
                                                    confirmed by the admin team
                                                    after review.
                                                </p>

                                            </div>

                                        )}


                                        {/* ======================================
                                            REASON
                                        ====================================== */}

                                        <div>

                                            <label
                                                htmlFor="cancellation_reason"
                                                className="mb-2 block text-sm font-semibold text-slate-700"
                                            >
                                                Reason for Cancellation
                                            </label>

                                            <textarea
                                                id="cancellation_reason"
                                                rows={4}
                                                maxLength={1000}
                                                value={
                                                    form.cancellation_reason
                                                }
                                                onChange={(event) =>
                                                    updateField(
                                                        "cancellation_reason",
                                                        event.target.value
                                                    )
                                                }
                                                placeholder="Please explain why you want to cancel this policy..."
                                                required
                                                className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                            />

                                            <div className="mt-1 text-right text-xs text-slate-400">
                                                {form.cancellation_reason.length}
                                                /1000
                                            </div>

                                        </div>


                                        {/* ======================================
                                            NOTES
                                        ====================================== */}

                                        <div>

                                            <label
                                                htmlFor="customer_notes"
                                                className="mb-2 block text-sm font-semibold text-slate-700"
                                            >
                                                Additional Notes
                                                <span className="ml-1 font-normal text-slate-400">
                                                    (Optional)
                                                </span>
                                            </label>

                                            <textarea
                                                id="customer_notes"
                                                rows={3}
                                                maxLength={3000}
                                                value={
                                                    form.customer_notes
                                                }
                                                onChange={(event) =>
                                                    updateField(
                                                        "customer_notes",
                                                        event.target.value
                                                    )
                                                }
                                                placeholder="Anything else you would like our team to know?"
                                                className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                            />

                                        </div>


                                        {/* ======================================
                                            CONTACT
                                        ====================================== */}

                                        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">

                                            <div className="flex gap-3">

                                                <Phone
                                                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                                                />

                                                <div>

                                                    <p className="text-sm font-semibold text-blue-900">
                                                        We'll contact you
                                                    </p>

                                                    <p className="mt-1 text-xs leading-5 text-blue-800">

                                                        Our team may contact you
                                                        on your registered phone
                                                        number to verify and
                                                        process the cancellation.

                                                    </p>

                                                </div>

                                            </div>

                                        </div>


                                        {/* ======================================
                                            TERMS
                                        ====================================== */}

                                        <label className="flex cursor-pointer gap-3">

                                            <input
                                                type="checkbox"
                                                required
                                                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                            />

                                            <span className="text-xs leading-5 text-slate-600">

                                                I confirm that the information
                                                provided is accurate and I
                                                understand that cancellation
                                                and refund are subject to
                                                policy terms and administrative
                                                review.

                                            </span>

                                        </label>


                                        {/* ======================================
                                            ACTIONS
                                        ====================================== */}

                                        <div className="flex flex-col gap-3 sm:flex-row">

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setStep("verify");
                                                    setError("");
                                                }}
                                                disabled={loading}
                                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
                                            >

                                                <ArrowLeft
                                                    className="h-4 w-4"
                                                />

                                                Back

                                            </button>


                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                                            >

                                                {loading ? (
                                                    <>
                                                        <Loader2
                                                            className="h-5 w-5 animate-spin"
                                                        />

                                                        Submitting...
                                                    </>
                                                ) : (
                                                    <>
                                                        <RefreshCw
                                                            className="h-5 w-5"
                                                        />

                                                        Submit Cancellation
                                                    </>
                                                )}

                                            </button>

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                )}


                {/* ============================================================
                    SUCCESS
                ============================================================ */}

                {step === "success" && (

                    <div className="mx-auto max-w-3xl">

                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                            <div className="px-6 py-10 text-center sm:px-10">

                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">

                                    <CheckCircle2
                                        className="h-10 w-10"
                                    />

                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                    Request Submitted Successfully
                                </h3>

                                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">

                                    {successMessage ||
                                        "Your cancellation and refund request has been initiated successfully."}

                                </p>


                                {refundRequest && (

                                    <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left">

                                        <div className="grid gap-4 sm:grid-cols-2">

                                            <InfoRow
                                                label="Request Number"
                                                value={
                                                    refundRequest.request_number ||
                                                    `REF${String(
                                                        refundRequest.id || ""
                                                    ).padStart(
                                                        6,
                                                        "0"
                                                    )}`
                                                }
                                            />

                                            <InfoRow
                                                label="Status"
                                                value={
                                                    currentStatusConfig.label
                                                }
                                            />

                                            <InfoRow
                                                label="Application"
                                                value={
                                                    refundRequest.application_number ||
                                                    form.application_number ||
                                                    "—"
                                                }
                                            />

                                            <InfoRow
                                                label="Policy Number"
                                                value={
                                                    refundRequest.policy_number ||
                                                    form.policy_number ||
                                                    "—"
                                                }
                                            />

                                            <InfoRow
                                                label="Cancellation Charge"
                                                value={formatCurrency(
                                                    refundRequest.cancellation_charge
                                                )}
                                            />

                                            <InfoRow
                                                label="Estimated Refund"
                                                value={formatCurrency(
                                                    refundRequest.refund_amount
                                                )}
                                                strong
                                            />

                                        </div>

                                    </div>

                                )}


                                <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-left">

                                    <div className="flex gap-3">

                                        <Phone
                                            className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                                        />

                                        <div>

                                            <p className="text-sm font-semibold text-blue-900">
                                                What happens next?
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-blue-800">

                                                Our team will review your
                                                request and may contact you
                                                on your registered phone number.
                                                You can use your application or
                                                policy number to check the
                                                request status later.

                                            </p>

                                        </div>

                                    </div>

                                </div>


                                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

    


                                    <button
                                        type="button"
                                        onClick={resetPage}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                                    >

                                        Done

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                )}


                {/* ============================================================
                    STATUS
                ============================================================ */}

                {step === "status" && statusData && (

                    <div className="mx-auto max-w-4xl">

                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                            <div className="border-b border-slate-200 bg-slate-50 px-6 py-6 sm:px-8">

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                    <div>

                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                            Refund Request
                                        </p>

                                        <h3 className="mt-1 text-xl font-bold text-slate-900">

                                            {statusData.request_number ||
                                                `REF${String(
                                                    statusData.request_id ||
                                                    statusData.id ||
                                                    ""
                                                ).padStart(
                                                    6,
                                                    "0"
                                                )}`}

                                        </h3>

                                    </div>


                                    <StatusBadge
                                        status={
                                            statusData.status
                                        }
                                    />

                                </div>

                            </div>


                            <div className="p-6 sm:p-8">

                                {/* ==========================================
                                    STATUS MESSAGE
                                ========================================== */}

                                <div className="rounded-2xl border border-slate-200 p-5">

                                    <div className="flex items-start gap-4">

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">

                                            {React.createElement(
                                                currentStatusConfig.icon,
                                                {
                                                    className:
                                                        "h-6 w-6",
                                                }
                                            )}

                                        </div>

                                        <div>

                                            <h4 className="font-semibold text-slate-900">
                                                {currentStatusConfig.label}
                                            </h4>

                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                {currentStatusConfig.description}
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                {/* ==========================================
                                    PROGRESS
                                ========================================== */}

                                {![
                                    "rejected",
                                    "cancelled",
                                ].includes(statusData.status) && (

                                    <div className="mt-8">

                                        <div className="flex items-center justify-between">

                                            <h4 className="text-sm font-semibold text-slate-900">
                                                Refund Progress
                                            </h4>

                                            <span className="text-xs text-slate-500">
                                                {Math.max(
                                                    0,
                                                    currentStatusIndex + 1
                                                )}
                                                /
                                                {STATUS_STEPS.length}
                                            </span>

                                        </div>


                                        <div className="mt-5">

                                            <div className="relative">

                                                <div className="absolute left-0 right-0 top-4 h-1 rounded-full bg-slate-100" />

                                                <div
                                                    className="absolute left-0 top-4 h-1 rounded-full bg-blue-600 transition-all"
                                                    style={{
                                                        width:
                                                            currentStatusIndex <= 0
                                                                ? "0%"
                                                                : `${Math.min(
                                                                    100,
                                                                    (
                                                                        currentStatusIndex /
                                                                        (
                                                                            STATUS_STEPS.length -
                                                                            1
                                                                        )
                                                                    ) *
                                                                    100
                                                                )}%`,
                                                    }}
                                                />


                                                <div className="relative flex justify-between">

                                                    {STATUS_STEPS.map(
                                                        (
                                                            status,
                                                            index
                                                        ) => {

                                                            const completed =
                                                                index <=
                                                                currentStatusIndex;

                                                            const config =
                                                                STATUS_CONFIG[
                                                                    status
                                                                ];

                                                            return (

                                                                <div
                                                                    key={
                                                                        status
                                                                    }
                                                                    className="flex w-20 flex-col items-center text-center"
                                                                >

                                                                    <div
                                                                        className={[
                                                                            "flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white",
                                                                            completed
                                                                                ? "border-blue-600 bg-blue-600 text-white"
                                                                                : "border-slate-200 text-slate-300",
                                                                        ].join(
                                                                            " "
                                                                        )}
                                                                    >

                                                                        {completed ? (
                                                                            <CheckCircle2
                                                                                className="h-4 w-4"
                                                                            />
                                                                        ) : (
                                                                            <span className="h-2 w-2 rounded-full bg-current" />
                                                                        )}

                                                                    </div>

                                                                    <span
                                                                        className={[
                                                                            "mt-2 text-[10px] font-medium leading-4 sm:text-xs",
                                                                            completed
                                                                                ? "text-slate-700"
                                                                                : "text-slate-400",
                                                                        ].join(
                                                                            " "
                                                                        )}
                                                                    >
                                                                        {
                                                                            config.label
                                                                        }
                                                                    </span>

                                                                </div>

                                                            );
                                                        }
                                                    )}

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                )}


                                {/* ==========================================
                                    REQUEST DETAILS
                                ========================================== */}

                                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                                    <InfoCard
                                        label="Application Number"
                                        value={
                                            statusData.application_number ||
                                            "—"
                                        }
                                    />

                                    <InfoCard
                                        label="Policy Number"
                                        value={
                                            statusData.policy_number ||
                                            "—"
                                        }
                                    />

                                    <InfoCard
                                        label="Request Type"
                                        value={
                                            statusData.request_type ||
                                            "Cancellation & Refund"
                                        }
                                    />

                                    <InfoCard
                                        label="Refund Amount"
                                        value={formatCurrency(
                                            statusData.refund_amount
                                        )}
                                    />

                                    <InfoCard
                                        label="Settlement Amount"
                                        value={formatCurrency(
                                            statusData.settled_amount
                                        )}
                                    />

                                    <InfoCard
                                        label="Settlement UTR"
                                        value={
                                            statusData.settlement_utr ||
                                            "Pending"
                                        }
                                    />

                                    <InfoCard
                                        label="Request Date"
                                        value={formatDate(
                                            statusData.created_at
                                        )}
                                    />

                                    <InfoCard
                                        label="Settlement Date"
                                        value={
                                            statusData.settled_at
                                                ? formatDate(
                                                    statusData.settled_at
                                                )
                                                : "Pending"
                                        }
                                    />

                                </div>


                                {/* ==========================================
                                    REFUNDED
                                ========================================== */}

                                {statusData.status === "refunded" && (

                                    <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

                                        <div className="flex gap-3">

                                            <CheckCircle2
                                                className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                                            />

                                            <div>

                                                <p className="text-sm font-semibold text-emerald-900">
                                                    Refund Completed
                                                </p>

                                                <p className="mt-1 text-sm leading-6 text-emerald-800">

                                                    Your refund has been
                                                    settled. If you need any
                                                    clarification, please
                                                    contact our support team.

                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                )}


                                {/* ==========================================
                                    REJECTED
                                ========================================== */}

                                {statusData.status === "rejected" && (

                                    <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">

                                        <div className="flex gap-3">

                                            <XCircle
                                                className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
                                            />

                                            <div>

                                                <p className="text-sm font-semibold text-red-900">
                                                    Request Rejected
                                                </p>

                                                <p className="mt-1 text-sm leading-6 text-red-800">

                                                    Your request was not
                                                    approved. Please contact
                                                    our support team if you
                                                    need further clarification.

                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                )}


                                {/* ==========================================
                                    ACTIONS
                                ========================================== */}

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                                    <button
                                        type="button"
                                        onClick={handleCheckStatus}
                                        disabled={loading}
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60"
                                    >

                                        {loading ? (
                                            <Loader2
                                                className="h-4 w-4 animate-spin"
                                            />
                                        ) : (
                                            <RefreshCw
                                                className="h-4 w-4"
                                            />
                                        )}

                                        Refresh Status

                                    </button>


                                    <button
                                        type="button"
                                        onClick={resetPage}
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                                    >

                                        <ArrowLeft
                                            className="h-4 w-4"
                                        />

                                        New Search

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                )}

            </main>


            {/* ================================================================
                FOOTER
            ================================================================ */}

            <footer className="border-t border-slate-200 bg-white">

                <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-slate-500 sm:px-6 lg:px-8">

                    Your information is handled securely. We will never ask
                    for your banking PIN, password or OTP.

                </div>

            </footer>

        </div>
    );
}


/*
|--------------------------------------------------------------------------
| INFO ROW
|--------------------------------------------------------------------------
*/

function InfoRow({
    label,
    value,
    strong = false,
}) {

    return (
        <div className="flex items-start justify-between gap-4">

            <span className="text-xs text-slate-500">
                {label}
            </span>

            <span
                className={[
                    "max-w-[60%] break-all text-right text-sm",
                    strong
                        ? "font-bold text-slate-900"
                        : "font-medium text-slate-700",
                ].join(" ")}
            >
                {value}
            </span>

        </div>
    );
}


/*
|--------------------------------------------------------------------------
| MONEY ROW
|--------------------------------------------------------------------------
*/

function MoneyRow({
    label,
    value,
    strong = false,
}) {

    return (
        <div className="flex items-center justify-between gap-4 px-4 py-3">

            <span
                className={[
                    "text-sm",
                    strong
                        ? "font-semibold text-slate-900"
                        : "text-slate-600",
                ].join(" ")}
            >
                {label}
            </span>

            <span
                className={[
                    "text-sm",
                    strong
                        ? "font-bold text-slate-900"
                        : "font-medium text-slate-700",
                ].join(" ")}
            >
                {formatCurrency(value)}
            </span>

        </div>
    );
}


/*
|--------------------------------------------------------------------------
| DAY STAT
|--------------------------------------------------------------------------
*/

function DayStat({
    label,
    value,
}) {

    return (
        <div>

            <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                {label}
            </p>

            <p className="mt-1 text-lg font-bold text-slate-900">
                {value ?? "—"}
            </p>

        </div>
    );
}


/*
|--------------------------------------------------------------------------
| INFO CARD
|--------------------------------------------------------------------------
*/

function InfoCard({
    label,
    value,
}) {

    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

            <p className="text-xs font-medium text-slate-400">
                {label}
            </p>

            <p className="mt-1 break-all text-sm font-semibold text-slate-900">
                {value}
            </p>

        </div>
    );
}


/*
|--------------------------------------------------------------------------
| STATUS BADGE
|--------------------------------------------------------------------------
*/

function StatusBadge({
    status,
}) {

    const config =
        STATUS_CONFIG[status] ||
        STATUS_CONFIG.initiated;


    const classes = {

        initiated:
            "bg-blue-50 text-blue-700 border-blue-200",

        under_review:
            "bg-amber-50 text-amber-700 border-amber-200",

        approved:
            "bg-indigo-50 text-indigo-700 border-indigo-200",

        processing:
            "bg-purple-50 text-purple-700 border-purple-200",

        refunded:
            "bg-emerald-50 text-emerald-700 border-emerald-200",

        rejected:
            "bg-red-50 text-red-700 border-red-200",

        cancelled:
            "bg-slate-100 text-slate-700 border-slate-200",
    };


    return (
        <span
            className={[
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold",
                classes[status] ||
                classes.initiated,
            ].join(" ")}
        >

            <span className="h-1.5 w-1.5 rounded-full bg-current" />

            {config.label}

        </span>
    );
}