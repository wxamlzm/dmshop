<template>
    <div class="Login">

        <van-button 
            type="primary"
            block
            round
        >
            主要按钮
        </van-button>
    </div>

</template>

<script>
import { defineComponent, ref} from 'vue'

export default defineComponent({
  setup() {
    const value = ref('123');
    const showKeyboard = ref(true);

    return {
      value,
      showKeyboard,
    };
  },
})
</script>
