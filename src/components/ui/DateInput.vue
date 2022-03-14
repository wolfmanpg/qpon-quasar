<template>
  <q-input
    filled
    :modelValue="couponsDate"
    @update:modelValue="updateDate"
    mask="##-##-####"
    :label="label !== '' ? label : ''"
  >
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            :modelValue="couponsDate"
            @update:modelValue="updateDate"
            :options="dateOptions"
            mask="DD-MM-YYYY"
            minimal
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
import { date } from "quasar";
import { ref } from 'vue';

export default {
  props: ["couponsDate", "label"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    //today - date Object
    const todayArrayFrmt = date.formatDate(new Date(), "DD-MM-YYYY").split("-");
    const todayObject = ref(
      new Date(todayArrayFrmt[2], parseInt(todayArrayFrmt[1]) - 1, todayArrayFrmt[0])
    );

    return {
      updateDate($event) {
        emit('update:modelValue',$event);
      },
      dateOptions(dateValue) {
        let dateArray = dateValue.split("/");

        //date object of the current date that we're checking
        const dateObj = new Date(dateArray[0], parseInt(dateArray[1]) - 1, dateArray[2]);
        const day = date.getDayOfWeek(dateObj);

        //find if it's weekend day
        const isWeekendDay = day === 6 || day === 7;

        if (isWeekendDay){
          return false;
        }

        //find the diff
        const diffWithToday = date.getDateDiff(todayObject.value, dateObj, "days");

        //day should not be longer than 7 days ago, also not greater than today
        if (diffWithToday > 8 || diffWithToday < 0){
          return false;
        }

        return true;

      },
    };
  },
};
</script>
