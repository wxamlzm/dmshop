<template>
    <van-nav-bar
        title="首页"
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DmNav',
  props: {

  },
  setup(){

    var onClickLeft = () => {};
    var onClickRight = () => {};

    return {
      onClickLeft, onClickRight
    }
  }
});
</script>

<style lang="scss">
// 为了防止:root属性被其他属性覆盖，需要在当前最终引用的页面设置，这样在引用时会最后引用
:root{
  --van-nav-bar-background-color:  #1989fa !important;
  --van-nav-bar-text-color: #FFF !important;
  --van-nav-bar-title-text-color: #FFF !important;
  --van-nav-bar-icon-color:#FFF !important;
}
</style>
