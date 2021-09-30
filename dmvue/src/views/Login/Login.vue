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
                <van-field v-model="uname" label="账号" placeholder="请输入账号" />
                <!-- 输入密码 -->
                <van-field v-model="upwd" type="password" label="密码" placeholder="请输入登录密码" />
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
import { defineComponent, ref } from 'vue'
import axios from 'axios'

import LoginWaike from '@/views/Login/LoginWaike.vue'


export default defineComponent({
    name: 'Login',

    components: {
        LoginWaike
    },

    setup(){
        let uname = ref('');
        let upwd = ref('');

        var goLogin = () => {
            console.log(uname.value, upwd.value);

            axios.post('/api/users/login', `uname=${uname.value}&upwd=${upwd.value}`)
                 .then(res => {
                     console.log(res);
                     console.log('触发响应');
                 });
        }

        return {
            uname,
            upwd,
            goLogin
        }
    }
})
</script>

<style lang="scss">

</style>