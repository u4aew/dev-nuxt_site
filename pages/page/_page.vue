<template>
  <div class="article article_page">
    <div class="article__main">
      <h1 class="article__title">
        {{ page.title.rendered }}
      </h1>
      <div v-html="page.content.rendered" class="article__content"/>
    </div>
  </div>
</template>

<script>

export default {
  loading: true,
  async asyncData({$axios, env, route, error}) {
    const slug = route.params.page
    const pages = await $axios.$get(`${env.apiUrl}/pages`, {
      params: {
        slug
      }
    });
    let page = null
    if (pages && pages.length) {
      page = pages[0]
    } else {
      error({statusCode: 404})
    }

    return {page}
  },
  head() {
    return {
      title: this.page.title.rendered
    }
  },
  computed: {},
  mounted() {
    this.loading = false
  }
}
</script>
