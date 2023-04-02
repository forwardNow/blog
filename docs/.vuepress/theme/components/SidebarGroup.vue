<template>
  <section
    class="sidebar-group"
    :class="[
      {
        collapsable,
        'is-sub-group': depth !== 0
      },
      `depth-${depth}`
    ]"
  >
    <RouterLink
      v-if="item.path"
      class="sidebar-heading clickable"
      :class="{
        open,
        'active': isActive($route, item.path)
      }"
      :to="item.path"
      @click.native="$emit('toggle')"
    >
      <span>{{ item.title }}</span>
      <span
        v-if="collapsable"
        class="arrow"
        :class="open ? 'down' : 'right'"
      />
    </RouterLink>

    <p
      v-else
      class="sidebar-heading"
      :class="{ open }"
      @click="$emit('toggle')"
    >
      <span
        class="sidebar-heading__arrow"
        :class="open ? 'down' : 'right'"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 1.5L9 5.5L5 9.5" stroke="#808080" stroke-width="1.3"/>
        </svg>
      </span>

      <span class="sidebar-heading__icon icon_folder">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path fill="#4f9eee" fill-opacity=".8" fill-rule="evenodd" d="M1,13 L15,13 L15,4 L7.98457,4 L6.69633,2.71149 C6.22161957,2.28559443 5.61570121,2.03457993 4.97888,2 L1.05128,2 C1.02295884,2 1,2.02295884 1,2.05128 L1,13 Z"/>
        </svg>
      </span>

      <span class="sidebar-heading__title">{{ item.title }}</span>
    </p>

    <DropdownTransition>
      <SidebarLinks
        v-if="open || !collapsable"
        class="sidebar-group-items"
        :items="item.children"
        :sidebar-depth="item.sidebarDepth"
        :initial-open-group-index="item.initialOpenGroupIndex"
        :depth="depth + 1"
      />
    </DropdownTransition>
  </section>
</template>

<script>
import { isActive } from '../util'
import DropdownTransition from './DropdownTransition.vue'

export default {
  name: 'SidebarGroup',

  components: {
    DropdownTransition
  },

  props: [
    'item',
    'open',
    'collapsable',
    'depth'
  ],

  // ref: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
  beforeCreate () {
    this.$options.components.SidebarLinks = require('./SidebarLinks.vue').default
  },

  methods: { isActive }
}
</script>

<style lang="stylus">
.sidebar-group
  .sidebar-group
    padding-left 0.5em
  &:not(.collapsable)
    .sidebar-heading:not(.clickable)
      /*cursor auto*/
      color inherit

      opacity: 1;
      font-size: 14px
      font-weight: bold;
      cursor: default;
  // refine styles of nested sidebar groups
  &.is-sub-group
    padding-left 0
    & > .sidebar-heading
      font-size 14px
      line-height 16px
      font-weight normal
      padding-left 2rem
      &:not(.clickable)
        opacity 1
    & > .sidebar-group-items
      padding-left 1rem
      & > li > .sidebar-link
        font-size: 14px
        border-left none
  &.depth-2
    & > .sidebar-heading
      border-left none

.sidebar-heading
  color $textColor
  transition color .15s ease
  /*cursor pointer*/
  /*font-size 1.1em*/
  font-size: 14px
  cursor: default;
  font-weight bold
  // text-transform uppercase
  padding 0.35rem 1.5rem 0.35rem 1.25rem
  width 100%
  box-sizing border-box
  margin 0
  border-left 0.25rem solid transparent

  &.open, &:hover
    color inherit
  .arrow
    //position relative
    //top -0.12em
    //left 0.5em
  &.clickable
    &.active
      font-weight 600
      color $accentColor
      border-left-color $accentColor
    &:hover
      color $accentColor

.sidebar-group-items
  transition height .1s ease-out
  font-size 14px
  overflow hidden
</style>
