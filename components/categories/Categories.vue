<template>
  <div class="categories">
    <div class="categories__list">
      <div v-if="$store.state.categories" v-for="(item, index) in $store.state.categories" :key="index"
           class="categories__list-item">
        <nuxt-link class="categories__link" :to="`/topics/${item.slug}`">{{ item.name }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  props: {
    item: {
      type: Array
    }
  }
}
</script>
