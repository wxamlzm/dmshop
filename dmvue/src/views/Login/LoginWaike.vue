<template>
    <div class="login-waike">
        <!-- 头部部分开始 -->
        <van-nav-bar
            :left-arrow = "hasArrow"
        >
            <template #right>
                <van-icon name="cross" size="18" v-show="hasCross" />
            </template>
        </van-nav-bar>
        <!-- 头部部分结束 -->

        <!-- 交互部分开始 -->
        <div class="dialog">
            <!-- title部分开始 -->
            <div class="title">
                <img src="@/assets/logo.png" alt="" v-if="hasLogo">
                <div class="txt" v-if="hasTxt">
                    <h4>{{txtTitle}}</h4>
                    <div>{{txtInfo}}</div>
                </div>
            </div>
            <!-- title部分结束 -->

            <!-- input部分开始 -->
            <div class="input">
                <slot name="input"></slot>
            </div>
            <!-- input部分结束 -->

            <!-- 登录方式链接插槽插槽 -->
            <div class="login-type">
                <router-link to="javascript:;">手机快捷登录</router-link>
                <!-- <slot name = "login-type"></slot> -->
            </div>
            <!-- 登录方式插槽结束 -->

            <!-- btn部分开始 -->
            <div class="btn">
                <slot name = "btn"></slot>
            </div>
            <!-- btn部分结束 -->

            <!-- 注册及密码找回链接插槽 -->
            <div class="other">
                <router-link to="javascript:;">忘记密码</router-link>
                <router-link to="javascript:;">注册账号</router-link>
            </div>
            <!-- 注册及密码找回插槽结束 -->

            <!-- 底部外链插槽 -->
            <div class="link">
                <slot name="link"></slot>
            </div>
            <!-- 外链插槽结束 -->
        </div>
        <!-- 交互部分结束 -->
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props:{
        hasCross:Boolean,
        hasArrow:Boolean,
        hasLogo:Boolean,
        hasTxt:Boolean
    },

    setup() {
        let txtTitle = ref('欢迎进入XXX商城');
        let txtInfo = ref('输入手机号快捷登录');

        return {
 
            txtTitle,
            txtInfo
        };
    },
})
</script>

<style lang="scss">
.login-waike {
    .dialog {
        box-sizing: border-box;
        margin: 30px 10% 0;
        .title {
            display: flex;
            justify-content: center;
            img {
                width: 56px;
                display: block;
            }
            .txt {
                h4 {
                    font-size: 20px;
                }
                div {
                    font-size: 12px;
                    color: #a6a6a6;
                }
            }
            & > :nth-child(2){
                margin-left: 10px;
            }
        }

        // input部分开始
        .input {
            margin-top: 60px;
        }
        // login-type 插槽样式
        .login-type {
            overflow: hidden;
            & > a{
                float: right;
                font-size: 12px;
                color: #a6a6a6;
                margin-top: 10px;
            }
        }

        // btn部分
        .btn {
            margin-top: 35px
        }
        // 其他部分
        .other {
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            margin-top: 20px;
            padding: 0 10px;
            a {
                font-size: 12px;
                color: #a6a6a6;
            }
        }
    }
}
</style>