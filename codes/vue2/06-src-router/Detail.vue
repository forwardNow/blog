<template>
  <div class="detail">
    <p>id: {{ id }}</p>

    <p>$route.query: {{ $route.query }}</p>

    <p>$route.params: {{ $route.params }}</p>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
    }
  },
}
</script>
