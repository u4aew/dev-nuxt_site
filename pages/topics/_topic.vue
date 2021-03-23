<template>
  <div class="topic">
    <div class="topic__side">
      <div class="topic-header">
        <div class="topic-header__wrapper">
          <div class="topic-header__main">
            <h1 class="topic-header__title">
              {{ category.name }}
            </h1>
          </div>
          <div class="topic-header__side">
            <div class="topic-header__actions">
              <div class="topic-header__actions-item is-active">Все</div>
<!--              <div class="topic-header__actions-item">Лучшее за неделю</div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="topic__main">
      <template v-if="posts && posts.length > 0">
        <ArticlePreview v-for="(item, key) in posts" :content="item" :key="key"/>
      </template>
      <template v-else>
        Данные отсутствуют
      </template>
    </div>
  </div>
</template>

<script>

import ArticlePreview from "@/components/articles/ArticlePreview";

export default {
  loading: true,
  components: {
    ArticlePreview
  },
  async asyncData({store, $axios, env, route}) {
    const slug = route.params.topic
    const categories = await $axios.$get(`${env.apiUrl}/categories`, {
      params: {
        slug
      }
    });
    const category = categories[0]
    const posts = await $axios.$get(`${env.apiUrl}/posts`, {
      params: {
        categories: category.id
      }
    });
    return {category, posts}
  },
  head() {
    return {
      title: this.category.name,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  mounted() {
    this.loading = false
  }
}
</script>
