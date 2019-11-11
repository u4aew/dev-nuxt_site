<template>
  <div class="block">
    <div class="block-wrapper">
      <div class="page-common">
        <div class="page-common__wrapper">
          <div class="page-common__header">
            <h1 class="title-1">
              Статьи
            </h1>
          </div>
          <div class="page-common__body">
            {{articles}}
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
        async asyncData({store, $axios,}) {

            console.log(process.env.API_URL)
            const articles = await $axios.$get(`${process.env.API_URL}/articles/`, {
                params: {
                    city: store.state.city.code
                }
            });
            return {articles}
        },
        mounted() {
            this.loading = false
        }
    }
</script>
