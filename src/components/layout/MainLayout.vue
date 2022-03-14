<template>
  <q-layout view="lHh Lpr lFf">
    <div v-if="! isLoggedIn">
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

          <q-toolbar-title>
            Coupon App
          </q-toolbar-title>

        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
      >
      <links-list></links-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </div>

  </q-layout>
</template>

<script>

import LinksList from '../nav/LinksList.vue';

import { defineComponent, ref, computed } from 'vue'
import { useStore } from "vuex";

export default defineComponent({
  name: 'MainLayout',
  components: {
    LinksList
  },
  setup () {
    const leftDrawerOpen = ref(false);
    const $store = useStore();

    const isLoggedIn = computed( () => {
        return $store.getters['auth/getIsLoggedIn'];
    });

    return {
      isLoggedIn,

      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
