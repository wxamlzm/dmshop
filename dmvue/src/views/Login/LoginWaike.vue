<template>
    <div class="LoginWaike">
      <div class="dialog">
		<!-- 头部开始 -->
		<div class="header">
			<slot name="header"></slot>
		</div>
		<!-- 头部结束 -->
		
        <!-- 标题部分开始 -->
        <div class="title">
          <slot name="title"></slot>
        </div>
        <!-- 标题部分结束 -->
        
        <!-- 正文部分开始 -->
        <div class="content">
          <slot name="content"></slot>
        </div>
        <!-- 正文部分结束 -->

        <!-- 按钮部分开始 -->
        <div class="btn">
          btn
        </div>
        <!-- 按钮部分结束 -->

        <!-- 其他部分开始 -->
        <div class="other">
          other
        </div>
        <!-- 其他部分结束 -->
      </div>
    </div>

</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {


    return {

    };
  },
})
</script>
