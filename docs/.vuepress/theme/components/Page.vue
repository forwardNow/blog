<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />

    <PageEdit v-if="false" />

    <PageNav v-bind="{ sidebarItems }" />

    <TableOfContent />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from './PageEdit.vue'
import PageNav from './PageNav.vue'
import TableOfContent from './TableOfContent.vue'

export default {
  components: { PageEdit, PageNav, TableOfContent },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
