<template>
  <van-config-provider :theme-vars="themeVars">
    <van-nav-bar
        :title="title"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="ellipsis" size="20" />
      </template>
      
    </van-nav-bar>
  </van-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'DmNav',
  props: {
    title: String,
  },
  setup(){
    // 初始化路由
    const router = useRouter();

    const themeVars = {
      navBarBackgroundColor: '#1989fa',
      navBarTextColor: '#FFF',
      navBarTitleTextColor: '#FFF',
      navBarIconColor:'#FFF',
    };

    var onClickLeft = () => {
      router.push({
        path: '/'
      });
    };
    var onClickRight = () => {};

    return {
      onClickLeft, onClickRight, themeVars
    }
  }
});
</script>

<style lang="scss">
// :root{
//   --van-nav-bar-background-color:  #1989fa !important;
//   --van-nav-bar-text-color: #FFF !important;
//   --van-nav-bar-title-text-color: #FFF !important;
//   --van-nav-bar-icon-color:#FFF !important;
// }
</style>
