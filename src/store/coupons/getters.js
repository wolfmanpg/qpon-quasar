export default {
    shouldUpdateCoupons(state){
        return state.shouldUpdateCoupons;
    },
    shouldUpdateAvailableCouponNumbers(state){
        return state.shouldUpdateAvailableCouponNumbers;
    },
    getAvailableCouponNumbers(state){
        return state.availableCouponNumbers;
    },
    getCouponEntries: (state) => (couponsDate = null) => {
        return state.couponEntries;
  }
}
