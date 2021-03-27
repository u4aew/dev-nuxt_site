<template>
  <div class="pagination">
    <div class="pagination__list">
      <nuxt-link :to="`${url}?page=${selected - 1}`" v-if="!(firstPageSelected() && hidePrevNext)"
                 :class="[prevLinkClass, firstPageSelected() ? disabledClass : '', 'pagination__nav pagination__nav_prev']"
                 tabindex="0"></nuxt-link>
      <template v-for="(page, key) in pages">
        <div v-if="page.breakView" :key="key"
             :class="[pageLinkClass, breakViewLinkClass, page.disabled ? disabledClass : '', 'pagination__item pagination__item_empty']"
             tabindex="0">
          <slot name="breakViewContent">{{ breakViewText }}</slot>
        </div>
        <nuxt-link :to="`${url}?page=${page.content}`" :key="key" v-else-if="page.disabled"
                   :class="[pageLinkClass, page.selected ? activeClass : '', disabledClass]"
                   tabindex="0">{{ page.content }}
        </nuxt-link>
        <nuxt-link :to="`${url}?page=${page.content}`" :key="key" v-else
                   @click="handlePageSelected(page.index + 1)" @keyup.enter="handlePageSelected(page.index + 1)"
                   :class="[pageLinkClass, page.selected ? activeClass : '', 'pagination__item']" tabindex="0">
          {{ page.content }}
        </nuxt-link>
      </template>
      <nuxt-link :to="`${url}?page=${parseInt(selected) + 1}`" v-if="!(lastPageSelected() && hidePrevNext)" @click="nextPage()" @keyup.enter="nextPage()"
         :class="[nextLinkClass, lastPageSelected() ? disabledClass : '', 'pagination__nav pagination__nav_next']"
         tabindex="0"></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    url: {
      default: '/'
    },
    value: {},
    pageCount: {
      required: true
    },
    forcePage: {},
    clickHandler: {
      type: Function,
      default: () => {
      }
    },
    pageRange: {
      default: 3
    },
    marginPages: {
      default: 1
    },
    prevText: {
      default: 'Prev'
    },
    nextText: {
      type: String,
      default: 'Next'
    },
    breakViewText: {
      type: String,
      default: '…'
    },
    containerClass: {
      type: String
    },
    pageClass: {
      type: String
    },
    pageLinkClass: {
      type: String
    },
    prevClass: {
      type: String
    },
    prevLinkClass: {
      type: String
    },
    nextClass: {
      type: String
    },
    nextLinkClass: {
      type: String
    },
    breakViewClass: {
      type: String
    },
    breakViewLinkClass: {
      type: String
    },
    activeClass: {
      type: String,
      default: 'active'
    },
    disabledClass: {
      type: String,
      default: 'disabled'
    },
    noLiSurround: {
      type: Boolean,
      default: false
    },
    firstLastButton: {
      type: Boolean,
      default: false
    },
    firstButtonText: {
      type: String,
      default: 'First'
    },
    lastButtonText: {
      type: String,
      default: 'Last'
    },
    hidePrevNext: {
      type: Boolean,
      default: false
    }
  },
  beforeUpdate() {
    if (this.forcePage === undefined) return
    if (this.forcePage !== this.selected) {
      this.selected = this.forcePage
    }
  },
  computed: {
    selected: {
      get: function () {
        return this.value || this.innerValue
      },
      set: function (newValue) {
        this.innerValue = newValue
      }
    },
    pages: function () {
      let items = {}
      if (this.pageCount <= this.pageRange) {
        for (let index = 0; index < this.pageCount; index++) {
          let page = {
            index: index,
            content: index + 1,
            selected: index === (this.selected - 1)
          }
          items[index] = page
        }
      } else {
        const halfPageRange = Math.floor(this.pageRange / 2)
        let setPageItem = index => {
          let page = {
            index: index,
            content: index + 1,
            selected: index === (this.selected - 1)
          }
          items[index] = page
        }
        let setBreakView = index => {
          let breakView = {
            disabled: true,
            breakView: true
          }
          items[index] = breakView
        }
        // 1st - loop thru low end of margin pages
        for (let i = 0; i < this.marginPages; i++) {
          setPageItem(i);
        }
        // 2nd - loop thru selected range
        let selectedRangeLow = 0;
        if (this.selected - halfPageRange > 0) {
          selectedRangeLow = this.selected - 1 - halfPageRange;
        }
        let selectedRangeHigh = selectedRangeLow + this.pageRange - 1;
        if (selectedRangeHigh >= this.pageCount) {
          selectedRangeHigh = this.pageCount - 1;
          selectedRangeLow = selectedRangeHigh - this.pageRange + 1;
        }
        for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= this.pageCount - 1; i++) {
          setPageItem(i);
        }
        // Check if there is breakView in the left of selected range
        if (selectedRangeLow > this.marginPages) {
          setBreakView(selectedRangeLow - 1)
        }
        // Check if there is breakView in the right of selected range
        if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
          setBreakView(selectedRangeHigh + 1)
        }
        // 3rd - loop thru high end of margin pages
        for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--) {
          setPageItem(i);
        }
      }
      return items
    }
  },
  data() {
    return {
      innerValue: 1,
    }
  },
  methods: {
    handlePageSelected(selected) {
      if (this.selected === selected) return
      this.innerValue = selected
      this.$emit('input', selected)
      this.clickHandler(selected)
    },
    prevPage() {
      if (this.selected <= 1) return
      this.handlePageSelected(this.selected - 1)
    },
    nextPage() {
      if (this.selected >= this.pageCount) return
      this.handlePageSelected(this.selected + 1)
    },
    firstPageSelected() {
      return this.selected == 1
    },
    lastPageSelected() {
      return (this.selected === this.pageCount) || (this.pageCount === 0)
    },
    selectFirstPage() {
      if (this.selected <= 1) return
      this.handlePageSelected(1)
    },
    selectLastPage() {
      if (this.selected >= this.pageCount) return
      this.handlePageSelected(this.pageCount)
    }
  }
}
</script>

<style lang="css" scoped>
a {
  cursor: pointer;
}
</style>
