<template>
  <container>
    <page-header>User Info</page-header>

    <div class="q-mb-lg">
      <div class="row">
        <div class="col-xs-12 col-md-6">

        </div>
      </div>
    </div>

  </container>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import useActionDispatcher from "../../../utils/general/actionDispatcher.js";

export default {
  setup() {
    const $store = useStore();

    const { dispatchAction } = useActionDispatcher();

    return {
        dispatchAction
    };
  },
};
</script>
