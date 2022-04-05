<template>
  <q-card class="q-pa-md q-mt-md" :class="{'today-card-bg' : isDateToday}" v-show="coupons.length > 0">
    <q-item-section>
      <div class="row">
        <div class="col-xs-6">
          <q-item-label class="date-header">{{ dateText }}</q-item-label>
        </div>
        <div class="col-xs-6">
          <q-btn
            :icon="isEditMode ? 'visibility' : 'edit'"
            outline
            color="primary"
            padding="xs"
            size="md"
            class="float-right"
            @click="enableEditCoupons"
            title="Edit/Remove Coupons"
          />
        </div>
      </div>

      <div class="row q-ml-lg">
        <div class="col-xs-12">
          <span class="coupons-header q-mb-md"
            >{{ couponsHeaderText }}</span
          >
        </div>
        <div class="col-xs-8 col-sm-8 col-md-5 col-lg-4">
          <q-input
            label="Filter by coupon number"
            v-model.trim="filteredCoupon"
            filled
            dense
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div class="col-xs-12 q-mt-lg">
          <!-- View Mode -->
          <q-item-section v-if="!isEditMode">
            <p>{{ couponsValues }}</p>
          </q-item-section>

          <!-- Edit Mode -->
          <q-item-section v-else style="width: 100%">
            <div class="row">
              <div
                v-for="coupon in couponsArray"
                :key="coupon"
                class="col-xs-3 col-sm-2 col-lg-1"
              >
                <q-toggle
                  v-model="displayedCouponsArray"
                  :val="coupon"
                  color="green"
                  :label="coupon.toString()"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-xs-12">
                <q-btn
                  label="Save Changes"
                  type="button"
                  color="primary"
                  @click="triggerCouponsRemoval"
                />
              </div>
            </div>
          </q-item-section>
        </div>
      </div>
    </q-item-section>
  </q-card>
</template>

<script>
import { computed, ref } from "vue";
import { date } from "quasar";

export default {
  name: "CouponsEntryItem",
  props: ["date", "coupons"],

  setup(props, { emit }) {
    const isEditMode = ref(false);
    const displayedCouponsArray = ref(props.coupons);
    const filteredCoupon = ref("");
    const today = ref(date.formatDate(Date.now(), "DD-MM-YYYY"));
    const isDateToday = ref(today.value === props.date);

    //date header text
    const dateText = computed(() => {
      let date = props.date;

      if (isDateToday.value){
        return 'Today - ' + date;
      }

      return date;
    });

    //header text for the coupons along with showing their total number
    const couponsHeaderText = computed(() => {
      let couponsTotal = props.coupons.length;

      return 'Coupons ( total : ' + couponsTotal + ' )';
    });


    //gets coupons by filter
    const getFilteredCoupons = () => {
      let coupons = props.coupons;

      let couponNo = parseInt(filteredCoupon.value);

      if (couponNo !== '' && couponNo > 0){
        return coupons.filter(c => c === couponNo);
      }

      return coupons;
    }

    //get the coupons array for this date
    const couponsArray = computed(() => {
      return getFilteredCoupons();
    });

    //get the string computed by the coupons array for this date
    const couponsValues = computed(() => {
      let coupons = getFilteredCoupons();

      if (coupons.length > 0) {
        return coupons.join(" , ");
      }

      return "No Coupons found";
    });

    const enableEditCoupons = () => {
      isEditMode.value = !isEditMode.value;
    };

    const triggerCouponsRemoval = () => {
      let removedCouponNumbers = props.coupons.filter( (number) => {
        return ! displayedCouponsArray.value.includes(number);
      });

      emit("removeCoupons", {
        remainingCoupons: displayedCouponsArray.value,
        removedCouponNumbers,
        date: props.date,
      });

      isEditMode.value = false;
      filteredCoupon.value = '';
    };

    return {
      dateText,
      couponsHeaderText,
      filteredCoupon,
      couponsValues,
      displayedCouponsArray,
      couponsArray,
      isEditMode,
      enableEditCoupons,
      triggerCouponsRemoval,
      isDateToday
    };
  },
};
</script>

<style scoped>
.date-header {
  font-size: 1.3rem;
  font-weight: bold;
}

.coupons-header {
  display: block;
  font-weight: bold;
  font-size: 1.12rem;
}

.today-card-bg{
  background: var(--q-secondary) !important;
}

@media only screen and (max-width: 768px){
  .today-card-bg .date-header{
    font-size: 1.15rem;
    padding-bottom: 0.45rem;
  }
}
</style>
