<template>
    <dm-nav :title="`搜索`"></dm-nav>
    <van-search 
        v-model="value" 
        placeholder="请输入搜索关键词"
        clearable 
        autofocus
    />
    <dm-tabbar></dm-tabbar>
</template>

<script>
import { defineComponent } from 'vue'
import DmNav from '@/components/DmNav.vue'
import DmTabbar from '@/components/DmTabbar.vue'

export default defineComponent({
    name: 'Search',
    components: {
        DmTabbar,
        DmNav
    },
    setup() {
        
    },
})
</script>
