<template>
  <div class="categories" :class="{'categories_mobile': mobile}">
    <div class="categories__main">
      <div class="categories__list">
        <div class="categories__list-item">
          <nuxt-link class="categories__link" :to="`/`">Лента</nuxt-link>
        </div>
        <div v-if="$store.state.categories" v-for="(item, index) in $store.state.categories" :key="index"
             class="categories__list-item">
          <nuxt-link class="categories__link" :to="`/topics/${item.slug}`">{{ item.name }}</nuxt-link>
        </div>
      </div>
    </div>
    <div class="categories__side">
      <div class="categories__links">
        <div v-for="(item, key) in pages" class="categories__links-item" :key="key">
          <nuxt-link class="categories__link categories__link_simple" :to="item.slug">{{ item.name }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pages from '@/const/pages'

export default {
  name: 'Categories',
  data() {
    return {
      pages
    }
  },
  props: {
    mobile: {
      type: Boolean
    }
  },
  methods: {
    closeMenu() {
      this.$store.dispatch('SET_MENU_OPEN', false)
    }
  }
}
</script>
