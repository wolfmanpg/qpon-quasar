<template>
  <q-layout view="lHh Lpr lFf">
    <div v-if="!isLoggedIn">
      <login></login>
    </div>
    <div v-else>
      <q-header elevated>
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
                  <q-item-label>User Info</q-item-label>
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

      <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
        <links-list></links-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import LinksList from "../nav/LinksList.vue";

import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import useActionDispatcher from "../../utils/general/actionDispatcher.js";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",
  components: {
    LinksList,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const $store = useStore();
    const $router = useRouter();

    const isLoggedIn = computed(() => {
      return $store.getters["auth/getIsLoggedIn"];
    });

    let { dispatchAction } = useActionDispatcher();

    return {
      isLoggedIn,

      leftDrawerOpen,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      userInfo() {
        $router.push({ name: "user" });
      },

      logout() {
        dispatchAction("auth/logout");

        $router.push({ name: "login" });
      },
    };
  },
});
</script>
