<template>
  <div class="block">
    <div class="block-wrapper">
      <div class="page-common">
        <div class="page-common__wrapper">
          <div class="page-common__header">
            <h1 class="title-1">
              {{content.title}}
            </h1>
          </div>
          <div class="page-common__body">
            {{content.desc}}
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
        async asyncData(context) {
            const {content} = await context.$axios.$get(`${process.env.API_URL}/about/`);
            return {content}
            // called every time before loading the component
            // as the name said, it can be async
            // Also, the returned object will be merged with your data object
        },
        mounted() {
            this.loading = false
        }
    }
</script>
