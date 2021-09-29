<template>
    <login-waike 
        :hasCross="true"
        :hasArrow="false"
        :hasLogo="true"
        :hasTxt="false"
    >
        <template #input>
            <van-cell-group inset>
                <!-- 输入任意文本 -->
                <van-field v-model="text" label="账号" placeholder="请输入账号" />
                <!-- 输入密码 -->
                <van-field v-model="password" type="password" label="密码" placeholder="请输入登录密码" />
            </van-cell-group>
        </template>
    </login-waike>
</template>

<script>
import LoginWaike from '@/views/Login/LoginWaike.vue'

export default {
    name: 'Login',
    components: {
        LoginWaike
    },
    setup(){

    }
}
</script>

<style lang="scss">

</style>