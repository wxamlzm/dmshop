<template>
    <van-nav-bar
        title="首页"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    />
</template>

<script lang="ts">

export default({
  name: 'DmNav',
  props: {

  },
});
</script>

<style lang="scss">

</style>