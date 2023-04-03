<template>
  <aside class="sidebar">

    <ActionIconGroup>
      <ActionIcon @click.native="handleClickLocate"><IconLocate /></ActionIcon>
      <ActionIcon @click.native="handleClickExpandAll"><IconExpandAll /></ActionIcon>
      <ActionIcon @click.native="handleClickCollapseAll"><IconCollapseAll /></ActionIcon>
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
import SidebarLinks from './SidebarLinks.vue';
import NavLinks from './NavLinks.vue';

import ActionIconGroup from './action-icon/ActionIconGroup.vue';
import ActionIcon from './action-icon/ActionIcon.vue';

import IconCollapseAll from './action-icon/IconCollapseAll.vue';
import IconExpandAll from './action-icon/IconExpandAll.vue';
import IconHideToolWindow from './action-icon/IconHideToolWindow.vue';
import IconLocate from './action-icon/IconLocate.vue';
import IconDivider from './action-icon/IconDivider.vue';

const KEY = 'SIDEBAR_EXPANDED_GROUP_PATHS';

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
    // window.xxVm = this;
    // window.getSidebarExpandedGroupPaths = getSidebarExpandedGroupPaths.bind(null, this);
    // window.setSidebarExpandedGroupsByPaths = setSidebarExpandedGroupsByPaths.bind(null, this);
  },

  async mounted() {
    await this.restoreSidebarExpandedGroups();

    this.makeActiveSidebarLinkScrollIntoView();

    this.addListeners();
  },

  methods: {
    handleClickCollapseAll() {
      collapseAll(this);
    },
    handleClickExpandAll() {
      expandAll(this);
    },
    handleClickLocate() {
      this.makeActiveSidebarLinkScrollIntoView();
    },
    makeActiveSidebarLinkScrollIntoView() {
      const activeSidebarLink = findActiveSidebarLink();

      if (!activeSidebarLink) {
        return;
      }

      openSidebarGroupByRoutePath(this);

      const groupElement = findGroupElementContainingActiveLink(activeSidebarLink);

      groupElement.scrollIntoView({ behavior: "smooth" });
    },

    addListeners() {
      window.addEventListener('beforeunload', (event) => {
        this.saveSidebarExpandedGroups();
      });
    },

    saveSidebarExpandedGroups() {
      const paths = getSidebarExpandedGroupPaths(this);
      const value = JSON.stringify(paths);
      localStorage.setItem(KEY, value);
    },

    restoreSidebarExpandedGroups() {
      const pathsJsonStr = localStorage.getItem(KEY) || '[]';
      const paths = JSON.parse(pathsJsonStr);
      return setSidebarExpandedGroupsByPaths(this, paths);
    }
  }
}

function findActiveSidebarLink() {
  return document.querySelector('.active.sidebar-link');
}

function openSidebarGroupByRoutePath(vm) {
  // SidebarGroup
  const routePath = vm.$route.path

  openSidebarGroupByPath(vm, routePath);
}

function openSidebarGroupByPath(vm, path) {
  let vueComponent = vm;
  let sidebarGroupVm;

  // /a/%E5%89%8D%E7%AB%AF/c.html -> ['', 'a', '前端', 'c.html'] -> [ 'a', '前端']
  const sidebarGroupTitles = path
    .split('/')
    .map((item) => {
      return decodeURIComponent(item);
    })
    .filter((item) => {
      if (item === '') {
        return false;
      }
      if (item.endsWith('.html')) {
        return false;
      }
      return true;
    });

  sidebarGroupTitles.forEach((title) => {
    sidebarGroupVm = findNearestChildSidebarGroup(vueComponent, title);
    vueComponent = sidebarGroupVm;

    if(sidebarGroupVm && sidebarGroupVm.open === false) {
      sidebarGroupVm.$emit('toggle');
    }
  });
}

function findGroupElementContainingActiveLink(activeSidebarLinkElement) {
  let count = 10;

  if (!activeSidebarLinkElement) {
    console.warn('activeSidebarLink is null');
    return;
  }

  let parentElt = activeSidebarLinkElement.parentElement;
  let target;

  while(true) {
    if (count <= 0) {
      break;
    }

    if (!parentElt) {
      break;
    }

    if (parentElt.classList.contains('sidebar-group')) {
      target = parentElt;
      break;
    }

    parentElt = parentElt.parentElement;
  }

  return target;
}

function findNearestChildSidebarGroup(vm, title) {
  // SidebarGroup item.title
  if (vm && vm.$options.name === 'SidebarGroup' && vm.item.title === title) {
    return vm;
  }

  if (vm.$children && vm.$children.length > 0) {
    for (let i = 0; i < vm.$children.length; i++) {
      const childVm = vm.$children[i];

      const target = findNearestChildSidebarGroup(childVm, title);

      if (target) {
        return target;
      }
    }
  }

  return null;
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

function getSidebarExpandedGroupPaths(vm, parentPath = '', results = []) {
  if (!vm) {
    return results;
  }

  let currentSidebarGroupPath;

  // vm.$options.name === 'SidebarGroup' && vm.item.title === title
  if (vm.$options.name === 'SidebarGroup') {
    // vm.item.title
    // vm.open
    const {
      item: { title },
      open
    } = vm;

    if (open && title) {
      currentSidebarGroupPath = `${parentPath}/${title}`;
      results.push(currentSidebarGroupPath);
    }
  }

  const childVms = vm.$children;

  if (childVms && childVms.length > 0) {
    for (let i = 0, len = childVms.length; i < len; i++) {
      const childVm = childVms[i];
      const path = currentSidebarGroupPath || parentPath;

      getSidebarExpandedGroupPaths(childVm, path, results);
    }
  }

  return results;
}

async function setSidebarExpandedGroupsByPaths(sidebarVm, expendedGroupPaths) {
  for (let i = 0; i < expendedGroupPaths.length; i++) {
    await sidebarVm.$nextTick();
    openSidebarGroupByPath(sidebarVm, expendedGroupPaths[i]);
  }
}
</script>

<style lang="stylus">
@require '../styles/vars';

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
