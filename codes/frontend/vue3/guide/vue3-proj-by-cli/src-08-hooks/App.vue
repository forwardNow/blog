<template>
  <h1>鼠标点击位置：{{ `(${point.x}, ${point.y})` }}</h1>
</template>

<script>
import usePoint from './hooks/usePoint';

export default {
  setup() {
    const point = usePoint();
    
    return { point };
  }
}
</script>