export default {
    setShouldUpdateCouponEntries(state, value) {
        state.shouldUpdateCoupons = value;
    },
    setCouponEntries(state, couponEntries){
        state.couponEntries = couponEntries;
        state.shouldUpdateCoupons = false;
    },
    setAvailableCouponNumbers(state, availableCouponNumbers){
        state.availableCouponNumbers = availableCouponNumbers;
        state.shouldUpdateAvailableCouponNumbers = false;
    },
    updateCouponsByDate(state, payload) {
        state.couponEntries[payload.indexByDate].coupons = payload.coupons;
    },
};
