<template>
  <div class="topic">
    <div class="topic__side">
      <div class="topic-header">
        <div class="topic-header__wrapper">
          <div class="topic-header__main">
            <h1 class="topic-header__title">
              Поиск
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="topic__main">
      <template v-if="posts && posts.length > 0">
        <ArticlePreview v-for="(item, key) in posts" :content="item" :key="key"/>
      </template>
      <template v-else>
        Ничего не найдено, попробуйте поменять запрос
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
    const search = route.query.q
    const posts = await $axios.$get(`${env.apiUrl}/posts`, {
      params: {
        search: search
      }
    });
    return {posts}
  },
  head() {
    return {
      title: 'Поиск'
    }
  },
  mounted() {
    this.loading = false
  }
}
</script>
