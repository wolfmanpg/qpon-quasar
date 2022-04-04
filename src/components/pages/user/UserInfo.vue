<template>
  <container :isLoading="isLoading" :hasError="loadingFailed">
    <page-header>User Info</page-header>

    <div class="q-mb-lg user-info-section" v-show="userInfo !== null">
      <div class="row justify-center">
        <div class="col-xs-12 col-md-6 col-lg-5">
          <q-card>
            <q-card-section>
                <p><strong>Name: </strong> {{ userInfo.fullName }}</p>
                <p><strong>School: </strong> {{ userInfo.school }}</p>
                <p><strong>Roles: </strong> {{ userInfo.roles }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

  </container>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import useActionDispatcher from "../../../utils/general/actionDispatcher.js";
import useLoadingHandler from "../../../utils/general/loadingHandler";

export default {
  setup() {
    const $store = useStore();

    const { dispatchAction } = useActionDispatcher();
    const { isLoading, loadingFailed } = useLoadingHandler();
    const userInfo = ref(null);

    const loadUserInfo = async () => {

        const onSuccess = () => {
          isLoading.value = false;
          userInfo.value = $store.getters["auth/getUserInfo"];
        }

        const onError = () => {
          loadingFailed.value = true;
        }

        dispatchAction('auth/loadUserInfo', {}, onSuccess, onError);
    }

    loadUserInfo();

    return {
        dispatchAction,
        loadUserInfo,
        userInfo,
        isLoading,
        loadingFailed
    };
  },
};
</script>

<style scoped>
  .user-info-section{
    font-size: 1.2rem;
    text-align: center;
  }
</style>
