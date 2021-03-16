<template>
  <div class="block">
    <div class="block-wrapper"></div>
  </div>
</template>

<script>
export default {
  loading: true,
  async asyncData({store, $axios, env, redirect}) {
    redirect('/')
  },
  mounted() {
    this.loading = false
  }
}
</script>
