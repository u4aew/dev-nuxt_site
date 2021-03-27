<template>
  <article class="topic">
    <SocialHead :title="category.name"/>
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
    <div v-if="total > 1" class="topic__pagination">
      <Pagination :url="`/topics/${slug}`" :value="current" :pageCount="total"/>
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
  components: {
    ArticlePreview,
    SocialHead,
    Pagination
  },
  data() {
    return {posts: []}
  },
  watchQuery: true,
  async asyncData({$axios, env, route, $nuxt}) {
    const slug = route.params.topic
    const current = route.query.page || 1
    const categories = await $axios.$get(`${env.apiUrl}/categories`, {
      params: {
        slug
      }
    });
    const category = categories[0]
    const response = await $axios.get(`${env.apiUrl}/posts`, {
      params: {
        categories: category.id,
        per_page: paginationSettings.perPage,
        page: current
      }
    });
    const total = response.headers['x-wp-totalpages']
    const posts = response.data
    return {category, posts, total, current, slug}
  },
  head() {
    return {
      title: this.category.name,
      meta: []
    }
  },
  mounted() {
    this.loading = false
  }
}
</script>
