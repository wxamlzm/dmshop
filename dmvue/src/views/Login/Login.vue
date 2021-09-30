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

        <template #btn>
                <van-button 
                    type="primary"
                    block
                    round
                    @click = "goLogin"
                >
                    立刻登陆
                </van-button>  
        </template>
    </login-waike>
</template>

<script>
import LoginWaike from '@/views/Login/LoginWaike.vue'
import axios from 'axios'

export default {
    name: 'Login',
    components: {
        LoginWaike
    },
    setup(){
        var goLogin = () => {
            console.log('触发发送')
            axios.get('/api/login')
                 .then(res => {
                     console.log(res);
                     console.log('触发响应');
                 });
        }

        return {
            goLogin
        }
    }
}
</script>

<style lang="scss">

</style>