<template>
  <dm-nav></dm-nav>
  <dm-bottom-tab></dm-bottom-tab>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import DmBottomTab from '@/components/DmBottomTab.vue'
import DmNav from '@/components/DmNav.vue'

export default defineComponent({
  name: 'Home',
  components: {
    DmNav,
    DmBottomTab
  },
});
</script>

<style lang="scss">
// 为了防止:root属性被其他属性覆盖，需要在当前最终引用的页面设置，这样在引用时会最后引用
:root{
  --van-nav-bar-background-color:  #1989fa;
  --van-nav-bar-text-color: #FFF;
  --van-nav-bar-title-text-color: #FFF;
  --van-nav-bar-icon-color:#FFF;
}
</style>
