<template>
  <div class="categories">
    <div class="categories__main">
      <div class="categories__list">
        <div class="categories__list-item">
          <nuxt-link class="categories__link" :to="`/`">Тренды</nuxt-link>
        </div>
        <div v-if="$store.state.categories" v-for="(item, index) in $store.state.categories" :key="index"
             class="categories__list-item">
          <nuxt-link class="categories__link" :to="`/topics/${item.slug}`">{{ item.name }}</nuxt-link>
        </div>
      </div>
    </div>
    <div class="categories__side">
      <div class="categories__links">
        <div class="categories__links-item">
          <nuxt-link class="categories__link categories__link_simple" :to="`/page/adv`">Реклама</nuxt-link>
        </div>
        <div class="categories__links-item">
          <nuxt-link class="categories__link categories__link_simple" :to="`/page/adv`">Редакция</nuxt-link>
        </div>
        <div class="categories__links-item">
          <nuxt-link class="categories__link categories__link_simple" :to="`/page/adv`">Контакты</nuxt-link>
        </div>
        <div class="categories__links-item">
          <nuxt-link class="categories__link categories__link_simple" :to="`/page/adv`">Вакансии</nuxt-link>
        </div>
        <div class="categories__links-item">
          <nuxt-link class="categories__link categories__link_simple" :to="`/page/about`">О проекте</nuxt-link>
        </div>
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
