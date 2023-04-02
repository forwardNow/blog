<template>
  <aside class="sidebar">

    <ActionIconGroup>
      <ActionIcon @click.native="handleClickLocate"><IconLocate /></ActionIcon>
      <ActionIcon @click.native="handleClickCollapseAll"><IconCollapseAll /></ActionIcon>
      <ActionIcon @click.native="handleClickExpandAll"><IconExpandAll /></ActionIcon>
    </ActionIconGroup>

    <NavLinks />

    <slot name="top" />

    <SidebarLinks
      :depth="0"
      :items="items"
    />
    <slot name="bottom" />
  </aside>
</template>

<script>
import SidebarLinks from './SidebarLinks.vue'
import NavLinks from './NavLinks.vue'

import ActionIconGroup from './action-icon/ActionIconGroup.vue';
import ActionIcon from './action-icon/ActionIcon.vue';

import IconCollapseAll from './action-icon/IconCollapseAll.vue';
import IconExpandAll from './action-icon/IconExpandAll.vue';
import IconHideToolWindow from './action-icon/IconHideToolWindow.vue';
import IconLocate from './action-icon/IconLocate.vue';
import IconDivider from './action-icon/IconDivider.vue';

export default {
  name: 'Sidebar',

  components: {
    SidebarLinks,
    NavLinks,

    ActionIconGroup,
    ActionIcon,

    IconLocate,
    IconCollapseAll,
    IconExpandAll,
    IconDivider,
    IconHideToolWindow,
  },

  props: ['items'],

  created() {
    window.xxVm = this;
  },

  methods: {
    handleClickCollapseAll() {
      collapseAll(this);
    },
    handleClickExpandAll() {
      expandAll(this);
    },
    handleClickLocate() {
      console.log(this);

      const activeSidebarLink = findActiveSidebarLink();
      const nearestSidebarGroup = findNearestSidebarGroup(activeSidebarLink);

      nearestSidebarGroup.scrollIntoView({ behavior: "smooth" });
    },
  }
}

function findActiveSidebarLink() {
  let activeSidebarLink = document.querySelector('.active.sidebar-link');

  if (!activeSidebarLink) {
  }

  return activeSidebarLink;
}

function findNearestSidebarGroup(activeSidebarLink) {
  let count = 10;

  let parentElt = activeSidebarLink.parentElement;
  let target;

  while(true) {
    if (count <= 0) {
      break;
    }

    if (parentElt && parentElt.classList.contains('sidebar-group')) {
      target = parentElt;
      break;
    }

    parentElt = parentElt.parentElement;
  }

  return target;
}

function collapseAll(vueComponent) {
  const $children = vueComponent.$children;

  if ($children && $children.length > 0) {
    $children.forEach((childVueComponent) => {
      collapseAll(childVueComponent);
    });
  }

  if (vueComponent.$options.name === 'SidebarLinks') {
    const { openedItems } = vueComponent;

    vueComponent.openedItems = new Array(openedItems.length).fill(false);
  }
}

function expandAll(vueComponent) {
  const $children = vueComponent.$children;

  if (vueComponent.$options.name === 'SidebarLinks') {
    const { openedItems } = vueComponent;

    vueComponent.openedItems = new Array(openedItems.length).fill(true);
  }

  if ($children && $children.length > 0) {
    $children.forEach((childVueComponent) => {
      expandAll(childVueComponent);
    });
  }
}
</script>

<style lang="stylus">
.sidebar
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 16px 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
    & > li:not(:first-child)
      margin-top 0

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
