<template>
    <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
        <div class="card-box">
            <div class="card-item">
                <van-card
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    lazy-load
                    v-for="i in list"
                    :key="i"
                />
            </div>
            <div class="card-item">
                <van-card
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    lazy-load
                    v-for="i in list"
                    :key="i"
                />
            </div>

        </div>

    </van-list>
 
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    name: 'DmList',
    setup() {
        let list = ref(new Array()); // 此处用[]简写的话，会导致push函数不被ts支持；但如果[1]不为空的话，push函数同样支持
        const loading = ref(false);
        const finished = ref(false);

        const onLoad = () => {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        // setTimeout(() => {
        //     for (let i = 0; i < 10; i++) {
        //         list.value.push(list.value.length + 1);
        //     }

        //     // 加载状态结束
        //     loading.value = false;

        //     // 数据全部加载完成
        //     if (list.value.length >= 40) {
        //         finished.value = true;
        //     }
        // }, 3000);
        };

        onMounted(()=>{
            console.log(list.value);
        });

        return {
            list, loading, finished
        }
        
    }
})
</script>


<style lang="scss">
.card-box {
    display: flex;
    flex-wrap: wrap;
    .card-item {
        display: flex;
        flex-direction: column;
    }
}
</style>