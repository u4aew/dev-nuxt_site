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
          <div v-if="articlePreviewList.length" class="page-common__body">
            <div class="ui-list">
              <div class="ui-list__list">
                <div  v-for="(article, key) in articlePreviewList" class="ui-list__list-item" :key="`article-preview-${key}`">
                  <ArticlePreview :model="article" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
    import ArticlePreview from '@/components/articles/article-preview/ArticlePreview'

    export default {
        name: 'Articles',
        components: {
            ArticlePreview
        },
        loading: true,
        async asyncData({$axios,}) {
            const articlePreviewList = await $axios.$get(`${process.env.API_URL}/articles/`);
            return { articlePreviewList: JSON.parse(articlePreviewList) }
        },
        mounted() {
            this.loading = false
        }
    }
</script>
