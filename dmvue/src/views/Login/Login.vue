<template>
    <login-waike>
        <!-- header 部分开始 -->
        <template #header>
            <van-nav-bar>
            <template #right>
                <van-icon name="cross" />
            </template>
            </van-nav-bar>
        </template>

        <!-- header 部分结束 -->

        <!-- title部分开始 -->
        <template #title>
            <!-- <van-image :src="require('@/assets/logo.png')" alt="" /> -->
            这里是title部分
        </template>
        <!-- title部分结束 -->

        <!-- content部分开始插入 -->
            <template #content>
                <van-cell-group inset>
                    <!-- 输入手机号，调起手机号键盘 -->
                    <van-field v-model="tel" type="tel" label="手机号" />
                    <!-- 输入密码 -->
                    <van-field v-model="password" type="password" label="密码" />
                </van-cell-group>
            </template>
        <!-- content部分结束 -->

    </login-waike>
</template>

<script>
import LoginWaike from '@/views/Login/LoginWaike.vue'

export default {
    name: 'Login',
    components: {
        LoginWaike
    }    
}
</script>