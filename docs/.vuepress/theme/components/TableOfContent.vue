<template>
  <div class="toc">
      <div class="toc__head">本章目录</div>
      <div class="toc__body">
        <a
          v-for="(item, index) in $page.headers"
          class="toc__item"
          :class="{ 'toc__item_active': index === activeIndex }"
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
    this.listener = throttle(this.handleScroll, 500);
    document.addEventListener('scroll', this.listener);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.listener);
  },
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    handleScroll() {

    },
  },
}
</script>
<style lang="stylus">
.toc
  position fixed
  top $navbarHeight
  right 0
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
  border-bottom: solid 1px $borderColor;

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

</style>
