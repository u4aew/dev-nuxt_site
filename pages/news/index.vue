<template>
  <div class="page-common">
    <div class="page-common__wrapper">
      <div class="page-common__header">
        <h1 class="title-1">
          Новости
        </h1>
      </div>
      <div class="page-common__body">
        {{ JSON.stringify(res) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  loading: true,
  async asyncData({store, $axios, env}) {
    const res = await $axios.$get(`${env.apiUrl}/posts`);
    return {res}
  },
  mounted() {
    this.loading = false
  }
}
</script>
