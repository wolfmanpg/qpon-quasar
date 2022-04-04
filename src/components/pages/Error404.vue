<template>
  <div class="fullscreen bg-secondary text-black text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 15vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        This page does not exist
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        label="Go To Home Page"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>
