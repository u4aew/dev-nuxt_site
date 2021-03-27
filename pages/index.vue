<template>
  <article class="topic">
    <SocialHead title="TM - Интернет журнал, новости, технологии, здоровье, кино"/>
    <div class="topic__side">
      <div class="topic-header">
        <div class="topic-header__wrapper">
          <div class="topic-header__main">
            <h1 class="topic-header__title">
              Лента
            </h1>
          </div>
          <div class="topic-header__side">
            <div class="topic-header__actions">
              <div class="topic-header__actions-item is-active">Все</div>
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
    <div class="topic__pagination">
      <Pagination :value="current" :page-count="total"/>
    </div>
  </article>
</template>

<script>
import paginationSettings from "@/const/pagination";
import ArticlePreview from "@/components/articles/ArticlePreview";
import SocialHead from "@/components/social/SocialHead";
import Pagination from "@/components/pagination/Pagination";

export default {
  loading: true,
  watchQuery: true,
  data() {
    return {posts: []}
  },
  async asyncData({store, $axios, env, route}) {
    const current = route.query.page || 1
    const response = await $axios.get(`${env.apiUrl}/posts`, {
      params: {
        per_page: paginationSettings.perPage,
        page: current
      }
    });

    const total = response.headers['x-wp-totalpages']
    const posts = response.data

    return {posts, total, current}
  },
  mounted() {
    this.loading = false
  },
  head() {
    return {
      title: 'TM - Интернет журнал, новости, технологии, здоровье, кино'
    }
  },
  components: {
    ArticlePreview,
    SocialHead,
    Pagination
  }
}
</script>
