<template>
  <section class="row q-pa-md">
    <div class="col-xs-12">
      <div class="container-section" v-if="!isLoading && !hasError">
        <slot></slot>
      </div>
      <div class="flex justify-center q-pa-lg" v-else-if="!isLoading && hasError">
        <h3>An error occured while loading this page</h3>
      </div>
      <div class="flex justify-center q-pa-xl q-mt-xl" v-else>
        <base-spinner></base-spinner>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
    hasError: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
