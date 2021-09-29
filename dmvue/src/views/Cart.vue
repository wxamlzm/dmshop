<template>
    <dm-nav :title="`购物车`"></dm-nav>
    <dm-tabbar></dm-tabbar>
</template>

<script>
import { defineComponent } from 'vue'
import DmNav from "@/components/DmNav.vue"
import DmTabbar from "@/components/DmTabbar.vue"

export default defineComponent({
    name: 'cart',

    components:{
        DmNav,
        DmTabbar
    },
    
    setup() {
        
    },
})
</script>
