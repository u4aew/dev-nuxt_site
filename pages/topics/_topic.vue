<template>
  <div class="block">
    <div class="block-wrapper">
      <div class="page-common">
        <div class="page-common__wrapper">
          <div class="page-common__header">
            <h1 class="title-1">
              {{ category.name }}
            </h1>
          </div>
          <div class="page-common__body">
            {{ posts }}
          </div>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  loading: true,
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
