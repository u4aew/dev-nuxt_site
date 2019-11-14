<template>
  <div class="block">
    <div class="block-wrapper">
      <div class="page-common">
        <div class="page-common__wrapper">
          <div class="page-common__header">
            <h1 class="title-1">
              {{article.title}}
            </h1>
          </div>
          <div class="page-common__body">
            {{article.desc}}
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
        async asyncData({$axios, route}) {
            const article = await $axios.$get(`${process.env.API_URL}/article/`, {
                params: {
                    slug: route.params.slug
                }
            });
            return {article:JSON.parse(article)}
        },
        mounted() {
            this.loading = false
        }
    }
</script>
