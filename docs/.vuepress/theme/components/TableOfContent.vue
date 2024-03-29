<template>
  <div class="toc" v-show="visible">
      <div class="toc__head">本章目录</div>
      <div class="toc__body">
        <a
          v-for="(item) in allHeaders"
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
export default {
  name: 'TableOfContent',
  mounted() {
    this.resetToc();

    this.listener = this.handleScroll;

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
      activeId: null,
      allHeaders: [
        // {
        //   level:2
        //   slug:"_1-loader"
        //   title:"1. loader"
        // }
      ],
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
    $route: {
      handler() {
        this.$nextTick(() => {
          this.resetToc();
        });
      },
    }
  },
  methods: {
    handleScroll(event) {
      const firstHeaderId = this.getFirstHeaderId();

      if (!firstHeaderId) {
        return;
      }

      const tocLink = this.getTocLinkByHeaderId(firstHeaderId);

      this.scrollToCenterOfParent(tocLink);

      this.activeId = firstHeaderId;
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

      // 父元素的高度
      const parentHeight = parent.clientHeight;

      // 滚动条在 y 轴移动的距离
      const parentScrollTop = parent.scrollTop;
      
      // 元素 与 父元素顶部 的距离
      const targetOffsetTop = target.offsetTop;
  
      // console.log(`parentHeight = ${parentHeight}; parentScrollTop = ${parentScrollTop}; targetOffsetTop = ${targetOffsetTop}`)

      if (targetOffsetTop - parentScrollTop < parentHeight) {
        return;
      }

      // tocItem 垂直居中需要 toc 滚动的高度
      const parentScrollY = targetOffsetTop - parentHeight / 2;

      parent.scrollTo(0, parentScrollY);
    },

    getFirstHeaderInViewport() {
      const headerElements = this.getHeaderElements();
      let topHeaderElement = null;

      for (let i = 0, len = headerElements.length; i < len; i++) {
        const headerElement = headerElements[i];

        const topInViewport = headerElement.getBoundingClientRect().top;

        if (topInViewport > 0 && topInViewport < 40) {
          topHeaderElement = headerElement;
          break;
        }
      }

      return topHeaderElement;
    },

    getHeaderElements() {
      if (!this.headerElements) {
        this.headerElements = document.querySelectorAll(
            '.theme-default-content > h2' +
            ', .theme-default-content > h3' +
            ', .theme-default-content > h4' +
            ', .theme-default-content > h5' +
            ''
          );
      }
      return this.headerElements;
    },

    resetToc() {
      this.headerElements = null;

      const headerElements = this.getHeaderElements();

      /*
        allHeaders: [
          // {
          //   level:2
          //   slug:"_1-loader"
          //   title:"1. loader"
          // }
        ],
       */
      let allHeaders = [];

      for (let i = 0; i < headerElements.length; i++) {
        const header = headerElements[i];
        const { tagName, id, textContent} = header;

        const level = parseInt(tagName.toLocaleLowerCase().replace('h', ''));
        const slug = id;
        const title = textContent.replace(/^#\s*/, '');

        allHeaders.push({  level, slug, title });
      }

      this.allHeaders = allHeaders;
    },
  },
}

</script>
<style lang="stylus">
.toc
  position fixed
  top ($navbarHeight + 0.25rem)
  right 0.25rem
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
    // display none
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

@media screen and (min-width: 1366px)
  .table-of-contents
    display none
  .toc
    display block
  .page
    padding-right $tocWidth
</style>
