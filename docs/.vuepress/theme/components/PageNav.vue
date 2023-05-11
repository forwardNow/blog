<template>
  <div
    v-if="prev || next"
    class="page-nav"
  >
    <p class="inner">
      <span
        v-if="prev"
        class="page-nav-item prev"
      >
        <span>上一篇:</span>
        <Breadcrumb
          :titles="getTitles(this.prev)"
        >
          <RouterLink
            class="prev"
            :to="prev.path"
          >
            {{ this.prev.title }}
          </RouterLink>
        </Breadcrumb>
      </span>

      <span
        v-if="next"
        class="page-nav-item next"
      >
        <span>下一篇:</span>
        <Breadcrumb
          :titles="getTitles(this.next)"
        >
          <RouterLink
            :to="next.path"
          >
            {{ this.next.title }}
          </RouterLink>
        </Breadcrumb>
      </span>
    </p>
  </div>
</template>

<script>
import { resolvePage } from '../util'
import isString from 'lodash/isString'
import isNil from 'lodash/isNil'
import Breadcrumb from "./Breadcrumb.vue";

export default {
  name: 'PageNav',

  props: ['sidebarItems'],

  components: { Breadcrumb },

  computed: {
    prev () {
      return resolvePageLink(LINK_TYPES.PREV, this)
    },

    next () {
      return resolvePageLink(LINK_TYPES.NEXT, this)
    },
  },

  methods: {
    getTitles(item) {
      return item.relativePath.split('/').slice(0, -1)
    }
  }
}

function getTitle(path) {
  const index = path.lastIndexOf('.md');
  if (index === -1) {
    return path;
  }

  return path.substring(0, index);
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

const LINK_TYPES = {
  NEXT: {
    resolveLink: resolveNext,
    getThemeLinkConfig: ({ nextLinks }) => nextLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.next
  },
  PREV: {
    resolveLink: resolvePrev,
    getThemeLinkConfig: ({ prevLinks }) => prevLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.prev
  }
}

function resolvePageLink (
  linkType,
  { $themeConfig, $page, $route, $site, sidebarItems }
) {
  const { resolveLink, getThemeLinkConfig, getPageLinkConfig } = linkType

  // Get link config from theme
  const themeLinkConfig = getThemeLinkConfig($themeConfig)

  // Get link config from current page
  const pageLinkConfig = getPageLinkConfig($page)

  // Page link config will overwrite global theme link config if defined
  const link = isNil(pageLinkConfig) ? themeLinkConfig : pageLinkConfig

  if (link === false) {
    return
  } else if (isString(link)) {
    return resolvePage($site.pages, link, $route.path)
  } else {
    return resolveLink($page, sidebarItems)
  }
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page-nav
  @extend $wrapper
  padding-top 32px
  padding-bottom 180px
  font-size 14px
  .inner
    padding-top 16px
    border-top 1px solid $borderColor
  .page-nav-item
    display flex
    //align-items center
    line-height 2
    > span
      flex: 0 0 auto;
      margin-right 8px
      color: #888
    a
      &:hover
        color lighten($accentColor, 30%)
        text-decoration underline
</style>
