<template>
  <container :isLoading="isLoading" :hasError="loadingFailed">
    <page-header>Add Coupons</page-header>

    <div class="row">
      <div class="col-xs-12 col-md-6 q-pl-md">
        <q-form @submit="saveCoupon" class="q-gutter-md">
          <!-- date field -->
          <date-input
          v-model="couponsDate"
          :errorMessage="formSchema.couponsDate.errorMessage"
          :hasError="formSchema.couponsDate.hasError"
          ></date-input>

          <!-- coupon number field -->
          <q-input
            filled
            v-model.number="couponNumber"
            label="Coupon Number"
            lazy-rules="ondemand"
            :rules="[formSchema.couponNumber.validate]"
            :error-message="formSchema.couponNumber.errorMessage"
            :error="formSchema.couponNumber.hasError"
          >
            <template v-slot:prepend>
              <q-icon name="pin" />
            </template>
          </q-input>

          <!-- save buttons -->
          <div class="row justify-center">
            <q-btn
              label="Save Coupon"
              type="submit"
              color="primary"
              class="bg-white"
              text-color="primary"
              padding="0.81rem"
            />
            <q-btn
              label="Save All"
              type="button"
              color="primary"
              @click="saveAll"
              class="q-ml-sm"
              padding="0.81rem"
              :disable="couponsArray.length <= 0"
            />
          </div>
        </q-form>
      </div>

      <div class="col-xs-12 col-md-6 q-pl-md">
        <q-card class="q-mt-lg saved-coupons-section">
          <q-card-section>
            <div class="row">
              <div class="col-xs-6 saved-coupons-date-section">
                <div class="text-h6">
                  Saved Coupons
                  <span class="saved-coupons-date"
                    >(for {{ couponsDate }})</span
                  >
                </div>
              </div>
              <div class="col-xs-6">
                <q-card-actions style="float: right">
                  <q-btn @click="resetData" outline>Reset Data</q-btn>
                </q-card-actions>
              </div>
            </div>
          </q-card-section>
          <q-separator inset />
          <q-card-section class="q-pa-md saved-coupons-main-content">
            <p>
              <span v-for="coupon in couponsArray" :key="coupon">
                <q-toggle
                  v-model="couponsArray"
                  :val="coupon"
                  color="green"
                />{{ coupon }}
              </span>
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </container>
</template>

<script>
import { date, useQuasar } from "quasar";
import { watch, ref } from "vue";
import { useStore } from "vuex";
import { onBeforeRouteLeave } from "vue-router";
import useCouponsValidator from "../../../utils/coupons/couponsValidator";
import useCouponLoader from "../../../utils/coupons/couponLoader.js";
import useActionDispatcher from "../../../utils/general/actionDispatcher.js";

export default {
  setup() {
    const $q = useQuasar();
    const $store = useStore();
    const couponNumber = ref("");
    const couponsDate = ref(date.formatDate(Date.now(), "DD-MM-YYYY"));
    const couponsArray = ref([]);
    const availableCouponNumbers = ref([]);

    //reset coupons number and current,saved coupon numbers when date changes
    watch(couponsDate, (currentValue, oldValue) => {
          couponsArray.value = [];
          couponNumber.value = '';
    });

    let { dispatchAction, formSchema } = useActionDispatcher();
    let { loadCoupons, currentCouponData, isLoading, loadingFailed } = useCouponLoader();
    let { validateNumber, validateDate } = useCouponsValidator();

    //function for loading coupons info
    const loadCouponsInfo = async () => {
      const onSuccess = () => {
        availableCouponNumbers.value =
          $store.getters["coupons/getAvailableCouponNumbers"];

        loadCoupons();
      };

      dispatchAction("coupons/loadAvailableCouponNumbers", null, onSuccess);
    };

    loadCouponsInfo();

    //set form schema
    formSchema.value = {
      couponNumber: {
        validate: function (val) {
          let result = '';

          result = loadCoupons().then( () => {
            const couponEntriesByDate = currentCouponData.value.find(
              (couponEntries) => {
                return couponEntries.date === couponsDate.value;
              }
            );

            return validateNumber(
              val,
              couponsArray.value,
              availableCouponNumbers.value,
              couponEntriesByDate
            );
          });

          return result;
        },
        hasError: false,
        errorMessage: "",
      },
      couponsDate: {
        validate: function () {
          return validateDate(couponsDate.value);
        },
        hasError: false,
        errorMessage: "",
      },
    };

    //preventing leaving page if there are unsaved coupons
    onBeforeRouteLeave((to, from, next) => {
      if (couponsArray.value.length > 0) {
        $q.dialog({
          title: "Confirm Page Leave",
          message: "You have unsaved coupons. Are you sure you want to leave?",
          persistent: true,
          cancel: {
            label: "Stay on Page",
          },
          ok: {
            label: "Leave",
          },
        })
          .onOk(() => {
            next();
          })
          .onCancel(() => {
            next(false);
          });
      } else {
        next();
      }
    });

    //resetting inputs
    const resetInputs = () => {
      couponsArray.value = [];
      couponNumber.value = "";
    };

    return {
      couponNumber,
      couponsDate,
      couponsArray,
      availableCouponNumbers,
      loadCoupons,
      currentCouponData,
      isLoading,
      loadingFailed,
      formSchema,

      saveCoupon() {
        const enteredCoupon = parseInt(couponNumber.value);

        couponsArray.value.push(enteredCoupon);
        couponNumber.value = "";
      },
      async saveAll() {
        const onSuccess = () => {
          resetInputs();
        };

        dispatchAction(
          "coupons/saveCouponEntries",
          {
            date: couponsDate.value,
            coupons: couponsArray.value.join(","),
          },
          onSuccess
        );
      },
      resetData() {
        resetInputs();
      },
    };
  }, //end setup
};
</script>

<style scoped>
.saved-coupons-section {
  height: 40vh;
  overflow-y: scroll;
}

.saved-coupons-main-content p {
  font-size: 1.1rem;
}

@media only screen and (max-width: 700px) {
  .saved-coupons-date-section * {
    font-size: 1rem !important;
  }

  .saved-coupons-date {
    display: block;
  }
}
</style>
