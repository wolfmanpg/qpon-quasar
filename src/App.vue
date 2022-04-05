<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated v-if="isLoggedIn">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Qpon App </q-toolbar-title>

        <q-btn-dropdown
          color="primary"
          dropdown-icon="person"
          :no-icon-animation="true"
          size="lg"
          unelevated
        >
          <q-list>
            <q-item clickable v-close-popup @click="userInfo">
              <q-item-section avatar>
                <q-icon color="primary" name="feed" />
              </q-item-section>
              <q-item-section>
                <q-item-label>My Profile</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="logout">
              <q-item-section avatar>
                <q-icon color="primary" name="logout" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered v-if="isLoggedIn">
      <links-list></links-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LinksList from "./components/nav/LinksList.vue";

import { defineComponent, ref, computed, watch } from "vue";
import { useStore } from "vuex";
import useActionDispatcher from "./utils/general/actionDispatcher.js";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  components: {
    LinksList,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const $store = useStore();
    const $route = useRoute();
    const $router = useRouter();
    const checkAuth = ref($store.getters["auth/getIsLoggedIn"]);

    watch($route, (from, to) => {
      if (to.path === '/' || to.path === '/login'){
        checkAuth.value = $store.getters["auth/getIsLoggedIn"];
      }
    });

    const isLoggedIn = computed(() => {
      return checkAuth.value;
    });

    let { dispatchAction } = useActionDispatcher();

    return {
      leftDrawerOpen,
      isLoggedIn,
      checkAuth,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      userInfo() {
        $router.replace({ name: "user" });
      },

      logout() {
        const onSuccess = () => {
          $router.replace("/login");
          checkAuth.value = $store.getters["auth/getIsLoggedIn"];
        };

        dispatchAction("auth/logout", {}, onSuccess);
      },
    };
  },
});
</script>
