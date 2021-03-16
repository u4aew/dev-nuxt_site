<template>
  <div class="block">
    <div class="block-wrapper">
      23423
    </div>
  </div>
</template>

<script>

export default {
  loading: true,
  async asyncData({store, $axios, env}) {
    const posts = await $axios.$get(`${env.apiUrl}/posts`);
    return {posts}
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
