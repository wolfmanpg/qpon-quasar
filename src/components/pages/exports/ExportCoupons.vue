<template>
  <container>
    <page-header>Export Monthly Coupons</page-header>

    <div class="column">

      <div class="col-xs-12">
        <div class="flex justify-center q-mt-lg">
          <p>
            Selected Month : <b>{{ currentMonthInfoText }}</b>
          </p>
        </div>
        <div class="flex justify-center q-mt-lg">
          <month-picker
            :default-month="defaultMonth"
            :show-year="false"
            :max-date="maxDate"
            @input="setSelectedMonth"
            @change="setDefaultMonth"
          >
          </month-picker>
        </div>
      </div>

      <div class="col-xs-12">
        <div class="flex justify-center q-mt-lg">
          <q-btn
            label="Export"
            type="button"
            color="primary"
            padding="0.81rem"
            size="md"
            @click="downloadExport"
          />
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { MonthPicker } from "vue-month-picker";
import useServerCall from "../../../utils/general/serverCall";
import useServerErrorHandler from "../../../utils/general/actionDispatcher";
import { api } from "boot/axios";

export default {
  components: {
    MonthPicker,
  },
  setup() {
    const $store = useStore();
    let { axiosCall } = useServerCall();
    let { handleServerError } = useServerErrorHandler();

    const defaultMonth = ref(new Date().getMonth() + 1);
    const maxDate = ref(new Date());

    const selectedMonthIndex = ref(defaultMonth.value);
    const selectedMonthText = ref("");

    const currentMonthInfoText = computed(() => {
      return selectedMonthText.value + " - " + new Date().getFullYear();
    });

    return {
      maxDate,
      defaultMonth,
      selectedMonthText,
      selectedMonthIndex,
      currentMonthInfoText,
      axiosCall,

      async downloadExport() {
        await api
          .get("/api/exports/monthly-coupons", {
            params: { month: parseInt(selectedMonthIndex.value) },
            responseType: "blob",
          })
          .then((response) => {
            // Let's create a link in the document that we'll
            // programmatically 'click'.
            const link = document.createElement("a");

            // Tell the browser to associate the response data to
            // the URL of the link we created above.
            link.href = window.URL.createObjectURL(new Blob([response.data]));

            //report name
            const reportName =
              selectedMonthText.value + "_" + new Date().getFullYear();

            // Tell the browser to download, not render, the file.
            link.setAttribute("download", reportName + ".xlsx");

            // Place the link in the DOM.
            document.body.appendChild(link);

            // Make the magic happen!
            link.click();

            document.body.removeChild(link);
          })
          .catch((error) => {
            handleServerError(error);
          });
      },

      setDefaultMonth(dateObject) {
        selectedMonthText.value = dateObject.month;
      },

      setSelectedMonth(dateObject) {
        selectedMonthText.value = dateObject.month;
        selectedMonthIndex.value = dateObject.monthIndex;
      },
    };
  },
};
</script>

<style>
.month-picker__container {
  width: 90vh !important;
}

.month-picker__month.selected,
.month-picker__month.selected-range-first,
.month-picker__month.selected-range-second {
  background-color: var(--q-secondary) !important;
  color: black !important;
  text-shadow: none !important;
}
</style>
