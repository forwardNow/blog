<template>
  <div class="breadcrumb">
    <div
      v-for="(title, index) in titles"
      :key="index"
      class="breadcrumb__item"
    >
      <span class="breadcrumb-item__title">{{ title }}</span>
      <span class="breadcrumb-item__separator">/</span>
    </div>
    <div class="breadcrumb__item">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  props: ['titles'],

}
</script>
<style lang="css">
.breadcrumb {
  display: flex;
  align-items: center;
  color: #888;
}
.breadcrumb__item {
  display: flex;
  align-items: center;
}
.breadcrumb-item__title {

}
.breadcrumb-item__separator {
  margin: 0 4px;
}
</style>
