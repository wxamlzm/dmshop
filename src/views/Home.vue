<template>
  <dm-nav></dm-nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import DmNav from '@/components/DmNav.vue'

export default defineComponent({
  name: 'Home',
  components: {
    DmNav
  },
});
</script>
