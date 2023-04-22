<template>
  <div class="toc" v-show="visible">
      <div class="toc__head">本章目录</div>
      <div class="toc__body">
        <a
          v-for="(item) in headers"
          :key="item.slug"
          class="toc__item"
          :class="{ 'toc__item_active': item.slug === activeId }"
          :href="`#${item.slug}`"
          :style="{
            'margin-left': `${(item.level - 2) * 1.2}em`
          }"
        >
          {{ item.title }}
        </a>
    </div>
  </div>
</template>
<script>
import throttle from 'lodash.throttle';

export default {
  name: 'TableOfContent',
  mounted() {
    this.listener = throttle(this.handleScroll, 16);

    document.addEventListener('scroll', this.listener);

    const tocLink = document.querySelector(`[href="${decodeURI(location.hash)}"]`)

    if (tocLink) {
      tocLink.click();
    }
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.listener);
  },

  data() {
    return {
      activeId: null
    };
  },
  computed: {
    headers() {
      return this.$page.headers || [];
    },
    visible() {
      return this.headers.length > 0;
    }
  },
  watch: {
    $route() {
      this.headerElements = null;
    },
  },
  methods: {
    handleScroll() {
      const id = this.getFirstHeaderId();

      if (!id) {
        return;
      }

      const tocLink = this.getTocLinkByHeaderId(id);

      this.scrollToCenterOfParent(tocLink);

      this.activeId = id;
    },

    getFirstHeaderId() {
      const firstHeaderElement = this.getFirstHeaderInViewport();

      if (!firstHeaderElement) {
        return;
      }

      const firstHeaderId = firstHeaderElement.id;

      const tocLinkElement = this.getTocLinkByHeaderId(firstHeaderId);

      if (!tocLinkElement) {
        return;
      }

      return firstHeaderId;
    },

    getTocLinkByHeaderId(id) {
      return document.querySelector(`.toc [href="#${id}"]`)
    },

    scrollToCenterOfParent(target) {
      const parent = target.parentElement;

      // 元素的高度
      const parentHeight = parent.clientHeight;

      // 滚动条在 y 轴移动的距离
      const parentScrollTop = parent.scrollTop;

      // 元素 与 父元素顶部 的距离
      const targetOffsetTop = target.offsetTop;

      // tocItem 垂直居中需要 toc 滚动的高度
      const parentScrollY = targetOffsetTop - parentHeight / 2;

      parent.scrollTo(0, parentScrollY);
    },

    getFirstHeaderInViewport() {
      const titleElements = this.getHeaderElements();
      let topTitleElt = null;

      for (let i = 0, len = titleElements.length; i < len; i++) {
        const elt = titleElements[i];

        const topInViewport = elt.getBoundingClientRect().top;

        if (topInViewport > 0 && topInViewport < 40) {
          topTitleElt = elt;
          break;
        }
      }

      return topTitleElt;
    },

    getHeaderElements() {
      if (!this.headerElements) {
        this.headerElements = document
          .querySelectorAll('.theme-default-content > h2, .theme-default-content > h3')
      }
      return this.headerElements;
    }
  },
}

</script>
<style lang="stylus">
.toc
  position fixed
  top ($navbarHeight + 0.5rem)
  right 0.5rem
  bottom 0
  width $tocWidth
  line-height 1.6
  color #888
  font-size 14px

  * {
    box-sizing border-box
  }

.toc__head
  padding: 0 16px
  height 40px;
  line-height 40px
  border-left: solid 1px $borderColor;
  //border-bottom: solid 1px $borderColor;

.toc__body
  padding: 8px 16px
  max-height calc(100% - 40px)
  border-left: solid 1px $borderColor;
  overflow-y auto

  &::-webkit-scrollbar {
    display none
  }

.toc__item
  display block
  word-break break-all
  color: inherit
  &:hover
    color $badgeTipColor
    text-decoration underline

.toc__item_active
  color $badgeTipColor




.table-of-contents
  display block
.toc
  display none

@media screen and (min-width: 1440px)
  .table-of-contents
    display none
  .toc
    display block
  .page
    padding-right $tocWidth
</style>
