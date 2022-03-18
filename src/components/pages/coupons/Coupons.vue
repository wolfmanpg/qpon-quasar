<template>
  <container :isLoading="isLoading" :hasError="loadingFailed">
    <page-header>All Coupons</page-header>

    <div class="q-mb-lg">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <date-input v-model="couponsDate" label="Filter By Date"></date-input>
        </div>
      </div>
    </div>

    <div v-if="currentCouponEntries.length > 0">
      <q-item-section>
        <q-list :bordered="false" separator>
          <CouponsEntryItem
            v-for="entry in currentCouponEntries"
            :key="entry.date"
            :date="entry.date"
            :coupons="entry.coupons"
            @remove-coupons="removeCoupons"
          />
        </q-list>
      </q-item-section>
    </div>
    <div v-else>
      <q-item-section>
        <p v-if="couponsDate === null || couponsDate === ''">
          No Coupon Entries found for the past 7 days
        </p>
        <p v-else>No Coupon Entries found for this date</p>
      </q-item-section>
    </div>
  </container>
</template>

<script>
import { date } from "quasar";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import CouponsEntryItem from "../../coupons/CouponsEntryItem";
import notifier from "../../../utils/general/notify";
import useCouponLoader from "../../../utils/coupons/couponLoader.js";
import useActionDispatcher from "../../../utils/general/actionDispatcher.js";

export default {
  components: {
    CouponsEntryItem,
  },
  setup() {
    const $store = useStore();
    const couponsDate = ref("");

    let { loadCoupons, currentCouponData, isLoading, loadingFailed } =
      useCouponLoader();

    let { dispatchAction } = useActionDispatcher();

    loadCoupons();

    //current coupon enties with filter , if exists
    const currentCouponEntries = computed(() => {
      const dateFilter = couponsDate.value;

      if (dateFilter !== "" && dateFilter !== null) {
        return currentCouponData.value.filter((couponEntries) => {
          return dateFilter === couponEntries.date;
        });
      } else {
        return currentCouponData.value;
      }
    });

    const removeCoupons = async (payload) => {
      //try {
      let couponsByDate = currentCouponData.value.find((e) => {
        return e.date === payload.date;
      });

      let newCouponsByDate = couponsByDate.coupons.filter((c) => {
        return payload.remainingCoupons.includes(c);
      });

      const actionData = {
        date: payload.date,
        newCoupons: newCouponsByDate,
        removedCouponNumbers: payload.removedCouponNumbers,
      };

      const onSuccess = () => {
          notifier.successNotify(
            "Coupons for " + payload.date + " have been updated"
          );
      }

      //calling dispatch action
      dispatchAction("coupons/deleteCouponEntries", actionData, onSuccess);
    };

    return {
      currentCouponEntries,
      couponsDate,
      removeCoupons,
      loadCoupons,
      currentCouponData,
      isLoading,
      loadingFailed,
    };
  },
};
</script>
