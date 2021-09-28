<template>
    <van-swipe lazy-render class="dm-Grip">
        <van-swipe-item v-for="i in 2" :key="i">
            <van-grid>
                <van-grid-item icon="photo-o" text="文字" v-for="i in 8" :key="i" />
            </van-grid>
        </van-swipe-item>
    </van-swipe>   

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'DmGirp',
    setup(){
        var active = ref('');

        return {
            active
        }
    }
})
</script>

<style lang="scss">

</style>