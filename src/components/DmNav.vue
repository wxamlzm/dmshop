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

</style>