<template>
  <div class="blog">
    <Article :content="page"/>
  </div>
</template>

<script>
import Article from "@/components/articles/Article";

export default {
  loading: true,
  layout: 'blog',
  components: {
    Article
  },
  async asyncData({store, $axios, env, route, error}) {
    const slug = route.params.item
    const posts = await $axios.$get(`${env.apiUrl}/posts`, {
      params: {
        slug
      }
    });
    let page = null
    if (posts && posts.length) {
      page = posts[0]
    } else {
      error({statusCode: 404})
    }

    return {page}
  },
  head() {
    return {
      title: this.title,
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
