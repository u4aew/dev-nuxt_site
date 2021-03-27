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
  </article>
</template>

<script>
import ArticlePreview from "@/components/articles/ArticlePreview";
import SocialHead from "@/components/social/SocialHead";

export default {
  loading: true,
  async asyncData({store, $axios, env}) {
    const posts = await $axios.$get(`${env.apiUrl}/posts`);
    return {posts}
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
    SocialHead
  }
}
</script>
