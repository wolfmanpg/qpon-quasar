import dateValidations from "../helpers/dateValidations.js";

export default function useCouponsValidator() {

  const validateNumber = (
    val,
    couponsArray,
    availableCouponNumbers,
    couponEntriesByDate
  ) => {
    //check if empty
    if (val === "" || val === null) {
      return "You have not entered a coupon";
    }
    val = parseInt(val);

    //check if Coupon No exists/is valid
    if (!availableCouponNumbers.includes(val) || val <= 0) {
      return "The coupon you entered is invalid or does not exist";
    }

    //check if already entered
    //TODO:: check if it's for the same date (should be ok for different dates)
    if (couponsArray.includes(val)) {
      return "You cannot enter the same coupon twice";
    }

    //check by date, if coupon number was already entered
    if (
      typeof couponEntriesByDate !== "undefined" &&
      Object.keys(couponEntriesByDate).length !== 0 &&
      couponEntriesByDate.coupons.includes(val)
    ) {
      return "You have already entered this coupon for this date";
    }

    return true;
  };

  const validateDate = (val) => {
    if (dateValidations.isDateGreaterThanToday(val)) {
      return "Date is invalid or greater than today";
    }
  };

  return {
    validateNumber,
    validateDate,
  };

}


