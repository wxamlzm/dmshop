<template>
<van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
 
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'DmList',
    setup() {
        const list = ref([]);
        const loading = ref(false);
        const finished = ref(false);

        const onLoad = () => {
            for (let i = 0; i < 10; i++){
                list.value.push
            }
        }

        return {
            list, loading, finished
        }
        
    },
})
</script>


<style lang="scss">

</style>