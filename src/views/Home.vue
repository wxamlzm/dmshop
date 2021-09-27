<template>
  <dm-nav></dm-nav>
  <dm-bottom-tab></dm-bottom-tab>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import DmNav from '@/components/DmNav.vue'
import DmBottomTab from '@/components/DmBottomTab.vue'

export default defineComponent({
  name: 'Home',
  components: {
    DmNav,
    DmBottomTab
  },
});
</script>
