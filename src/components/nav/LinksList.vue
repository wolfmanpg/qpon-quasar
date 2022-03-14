<template>
  <q-list>
    <q-item-label header> Links </q-item-label>

    <EssentialLink
      v-for="link in essentialLinks"
      :key="link.title"
      v-bind="link"
    />
  </q-list>
</template>

<script>
import EssentialLink from "./EssentialLink.vue";

export default {
  components: {
    EssentialLink,
  },
  data() {
    return {
      essentialLinks: [
        {
          title: "All Coupons",
          caption: "View all saved coupons",
          icon: "list",
          link: "/coupons",
        },
        {
          title: "Add Coupon",
          caption: "Add entries of coupons",
          icon: "add",
          link: "/add-coupon",
        },
        {
          title: "Export Monthly Coupons",
          caption: "Export monthly coupons report",
          icon: "summarize",
          link: "/export-coupons",
        },
      ],
    };
  },
};
</script>
