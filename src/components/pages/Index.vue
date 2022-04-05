<template>
  <container>
    <q-page class="flex flex-center">
      <div class="column text-center">
        <h4>Welcome to Qpon App</h4>

        <h5>{{ today }}<br><br>{{ todayDay }}</h5>
      </div>
    </q-page>
  </container>
</template>

<script>
import { date } from "quasar";
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Index',
  setup(){
    const today = ref(date.formatDate(Date.now(), "DD, MMMM, YYYY"));
    const todayDay = ref(date.formatDate(Date.now(), "dddd"));

    return {
        today,
        todayDay
    }
  }
})
</script>
