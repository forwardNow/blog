<template>
  <p><input type="text" v-model="keyword"></p>
  <p>{{ keyword }}</p>
</template>
<script>
import { customRef } from 'vue';

export default {
  setup() {
    function myRef(initValue, delay) {
      const myCustomRef = customRef((track, trigger) => {
        let value = initValue;
        let timer;

        return {
          get() {
            track(); // 告诉 vue 进行追踪
            return value;
          },

          set(newValue) {
            if (timer) {
              clearTimeout(timer);
            }

            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 告诉 vue 去更新界面
            }, delay);
          }
        }
      });

      return myCustomRef;
    }

    const keyword = myRef('hello', 500);

    return { keyword };
  }
}
</script>