import useServerCall from '../../utils/general/serverCall';
import notifier from '../../utils/general/notify';

let { axiosCall } = useServerCall();

export default {
    async saveCouponEntries(context, couponData) {
        const data = {
            couponsDate: couponData.date,
            coupons: couponData.coupons
        };

        const onSuccess = (responseMsg) => {
          notifier.successNotify(responseMsg);
        }

        await axiosCall('post', '/api/coupons/store', data, onSuccess);

        context.commit('setShouldUpdateCouponEntries', true);
    },
    //load current saved coupon entries
    async loadCouponEntries(context) {
        if (!context.getters.shouldUpdateCoupons) {
            return;
        }

        const onSuccess = (data) => {
            //modify results and call mutation to save couponEntries
            let couponEntries = data.map(entry => {
                return {
                    date: entry.date,
                    coupons: entry.coupons.split(',').map(el => parseInt(el))
                }
            });

            context.commit('setCouponEntries', couponEntries);
        }

        await axiosCall('get', '/api/coupons', {}, onSuccess);
    },
    //load available coupon numbers
    async loadAvailableCouponNumbers(context) {
        if (!context.getters.shouldUpdateAvailableCouponNumbers) {
            return;
        }

        const onSuccess = (data) => {
            context.commit('setAvailableCouponNumbers', data);
        }

        await axiosCall('get', '/api/coupons/available', {}, onSuccess);
    },
    //update/delete coupons by date
    async deleteCouponEntries(context, payload) {
      const date = payload.date;

      const data = {
          date,
          coupons: payload.removedCouponNumbers.join(',')
      };

      await axiosCall('post', '/api/coupons/destroy', data);

      //find index to update coupons for that date
      const indexByDate = context.getters.getCouponEntries().findIndex(entries => entries.date === date);

      context.commit('updateCouponsByDate', {
        indexByDate,
        coupons: payload.newCoupons
      });
  },
};
