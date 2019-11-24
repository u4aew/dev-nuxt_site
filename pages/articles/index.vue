<template>
  <div class="block">
    <div class="block-wrapper">
      <div class="page-common">
        <div class="page-common__wrapper">
          <div class="page-common__header">
            <h1 class="title-1">
              Статьи sdasd
              <br>
              {{ test }}
              <br>
            </h1>
          </div>
          <div v-if="articlePreviewList.length" class="page-common__body">
            <div class="ui-list">
              <div class="ui-list__list">
                <div  v-for="(article, key) in articlePreviewList" class="ui-list__list-item" :key="`article-preview-${key}`">
                  <ArticlePreview :model="article" />
                </div>
              </div>
            </div>s
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
        data () {
            return {
                test2: null
            }
        },
        loading: true,
        async asyncData({$axios,app}) {
            const articlePreviewList = await $axios.$get(`${process.env.API_URL}/articles/`);
            return { articlePreviewList: JSON.parse(articlePreviewList), test: app.$i18n }
        },
        beforeMount () {
            this.loading = false;
            console.log(this.test);
            this.test2 = this.test;
            console.log(this.test2)
        }
    }
</script>
