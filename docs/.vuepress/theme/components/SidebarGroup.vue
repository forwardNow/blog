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
        <IconMenuArrow />
      </span>

      <span class="sidebar-heading__icon icon_folder">
        <IconFolder />
      </span>

      <span class="sidebar-heading__title">{{ item.title }}</span>
    </p>

    <DropdownTransition>
      <SidebarLinks
        v-show="open || !collapsable"
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
import IconFolder from './IconFolder.vue';
import IconMenuArrow from './IconMenuArrow.vue';

export default {
  name: 'SidebarGroup',

  components: {
    DropdownTransition,
    IconFolder,
    IconMenuArrow
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
      color $accentColor
      border-left-color $accentColor
    &:hover
      color $accentColor

.sidebar-group-items
  transition height .1s ease-out
  font-size 14px
  //overflow hidden
</style>
