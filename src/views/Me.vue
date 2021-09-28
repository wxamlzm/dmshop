<template>
    <dm-nav :title="`我的`"></dm-nav>
    <dm-tabbar></dm-tabbar>
</template>

<script>
import { defineComponent } from 'vue'
import DmNav from "@/components/DmNav.vue"
import DmTabbar from "@/components/DmTabbar.vue"

export default defineComponent({
    name: 'me',

    components:{
        DmNav,
        DmTabbar
    },
    
    setup() {
        
    },
})
</script>
