<template>
    <van-search 
        v-model="value" 
        placeholder="请输入搜索关键词"
        clearable 
                
    />
    <dm-bottom-tab></dm-bottom-tab>
</template>

<script>
import { defineComponent } from 'vue'
import DmBottomTab from '@/components/DmBottomTab.vue'

export default defineComponent({
    name: 'Search',
    components: {
        DmBottomTab
    },
    setup() {
        
    },
})
</script>
