<template>
  <div class="block">
    <div class="block-wrapper">
      {{data.content.desc}}
      dasda hkjk asdass
      <br>
      <nuxt-link to="/">Домой</nuxt-link>
    </div>
  </div>
</template>

<script>
    export default {
        loading: true,
        async asyncData(context) {
            const data = await context.$axios.$get(`${process.env.API_URL}/content/`, {
                params: {
                    city: 'barnaul'
                }
            });
            return {data}
            // called every time before loading the component
            // as the name said, it can be async
            // Also, the returned object will be merged with your data object
        },
        mounted() {
            this.loading = false
        }
    }
</script>
