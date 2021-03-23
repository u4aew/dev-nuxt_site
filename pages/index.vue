<template>
  <div class="topic">
    <div class="topic__side">
      <div class="topic-header">
        <div class="topic-header__wrapper">
          <div class="topic-header__main">
            <h1 class="topic-header__title">
                Тренды
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
  async asyncData({store, $axios, env}) {
    const posts = await $axios.$get(`${env.apiUrl}/posts`);
    return {posts}
  },
  mounted() {
    this.loading = false
  },
  head() {
    return {
      title: 'the-magazine.ru',
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
  components: {
    ArticlePreview
  }
}
</script>
