<template>
    <van-swipe :autoplay="3000" lazy-render class="dm-swipe">
        <van-swipe-item v-for="image in images" :key="image">
            <img :src="image" />
        </van-swipe-item>
    </van-swipe>   
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
      const images = [
          '/img/1.jpg',
          '/img/1.jpg',
          '/img/1.jpg',
          '/img/1.jpg'
      ]
    return {images};
  },
})
</script>

<style lang="scss">
.dm-swipe {
    img {
        width: 100%;
    }
}
</style>
