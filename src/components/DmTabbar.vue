<template>
    <van-tabbar v-model="active" route @change="checkLogin">
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
        <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/me" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    name: 'DmBottomTab',
    setup(){
        var active = ref();

        var checkLogin = () => {
            console.log(active.value);
        };
        
        return {
            active, checkLogin
        }
    }
})
</script>