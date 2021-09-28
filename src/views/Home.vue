<template>
  <dm-nav></dm-nav>
  <dm-swipe></dm-swipe>
  <dm-grip></dm-grip>
  <dm-list></dm-list>
  <dm-bottom-tab></dm-bottom-tab>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import DmBottomTab from '@/components/DmBottomTab.vue'
import DmNav from '@/components/DmNav.vue'
import DmSwipe from '@/components/DmSwipe.vue'
import DmGrip from '@/components/DmGrip.vue'
import DmList from '@/components/DmList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    DmNav,
    DmBottomTab,
    DmSwipe,
    DmGrip,
    DmList
  },
});
</script>

