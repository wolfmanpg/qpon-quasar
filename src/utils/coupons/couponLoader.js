import { ref } from "vue";
import { useStore } from "vuex";
import useLoadingHandler from "../general/loadingHandler";

export default function useCouponLoader() {
    const $store = useStore();

    let { isLoading, loadingFailed } = useLoadingHandler();

    const currentCouponData = ref([]);

    //loading current coupon data
    const loadCoupons = async () => {
      try {
        await $store.dispatch('coupons/loadCouponEntries');

        currentCouponData.value = $store.getters["coupons/getCouponEntries"]();
      }
      catch(error){
        loadingFailed.value = true;
      }
      finally{
        isLoading.value = false;
      }

    }

    return {
      loadCoupons,
      currentCouponData,
      isLoading,
      loadingFailed,
    };
  }
