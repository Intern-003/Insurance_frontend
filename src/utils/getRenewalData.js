const getRenewalData = (location) => {

  const renewal =
    location?.state?.renewal || false;

  const renewalData =
    location?.state?.renewalData || null;

  if (!renewal || !renewalData) {
    return null;
  }

  return {

    id:
      renewalData?.id,

    fullName:
      renewalData?.customer_name,

    mobile:
      renewalData?.mobile,

    email:
      renewalData?.email,

    dateOfBirth:
      renewalData?.date_of_birth,

    category:
      renewalData?.category,

    tenure:
      renewalData?.tenure,

    premiumAmount:
      renewalData?.premium_amount,

    policy_number:
      renewalData?.policy_number,

    policy_end_date:
      renewalData?.policy_end_date,

    insurancePlanId:
      renewalData?.insurance_plan_id,

    insuranceCoverageId:
      renewalData?.insurance_coverage_id,

    customerDetails:
      renewalData?.customer_details || {},

    nomineeDetails:
      renewalData?.nominee_details || {},

    vehicleDetails:
      renewalData?.vehicle_details || {},
  };
};

export default getRenewalData;