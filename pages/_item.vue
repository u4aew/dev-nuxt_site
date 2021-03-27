<template>
  <div class="article">
    <SocialHead :title="page.title.rendered" :description="page.acf.seo_desc" :image="imgCover"/>
    <div class="article__main">
      <div class="article__informer">
        <div class="article-informer">
          <div class="article-informer__list">
            <div class="article-informer__list-item article-informer__list-item_tags">
              <div class="article-tags">
                <nuxt-link :to="`/topics/${getSlugCategoryById(id)}/`" v-for="(id, key) in page.categories" :key="key"
                           class="article-tags__item">
                  {{ getNameCategoryById(id) }}
                </nuxt-link>
              </div>
            </div>
            <div class="article-informer__list-item article-informer__list-item_date">{{ getDate(page.date) }}
            </div>
            <div class="article-informer__list-item article-informer__list-item_author">
              <div class="article-author">
                <div class="article-author__side">
                  <div class="article-author__avatar"></div>
                </div>
                <div class="article-author__main">
                  Евгения Севастьянова
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 class="article__title" v-html="page.title.rendered"/>
      <div v-if="imgCover" class="article__img">
        <img :src="imgCover">
      </div>
      <div class="article__info">
        <div class="article__info-item article__info-item_share">
          <Share v-if="showShares"/>
          <div v-else @click="showShare" class="article__share"></div>
        </div>
        <div class="article__info-item article__info-item_view">{{ views }}</div>
        <div class="article__info-item">{{ time }} мин</div>
      </div>
      <article v-html="page.content.rendered" class="article-content article__content"/>
      <div v-if="page.acf.source" class="article__source">
        <div class="article__source-item">
          Источник
        </div>
        <div class="article__source-item">
          <noindex>
            <a rel=”nofollow” :href="page.acf.source" target="_blank" class="article__source-link">{{
                page.acf.source
              }}</a>
          </noindex>
        </div>
      </div>
      <div class="article__comments">
        <Comments v-if="showComments"/>
        <div v-else @click="showComment" class="article__comments-action">
          Показать комментарии
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SocialHead from "@/components/social/SocialHead";
import Comments from "@/components/comments/Comments";
import Share from "@/components/share/Share";

export default {
  loading: true,
  components: {
    SocialHead,
    Comments,
    Share
  },
  data() {
    return {
      showComments: false,
      showShares: false
    }
  },
  async asyncData({store, $axios, env, route, error, ctx}) {
    const slug = route.params.item
    const posts = await $axios.$get(`${env.apiUrl}/posts`, {
      params: {
        slug
      }
    });
    let page = null
    if (posts && posts.length) {
      page = posts[0]
    } else {
      error({statusCode: 404})
    }
    return {page}
  },
  head() {
    return {
      title: this.page.title.rendered
    }
  },
  methods: {
    showComment() {
      this.showComments = true
    },
    showShare() {
      this.showShares = true
    },
    getNameCategoryById(id) {
      return this.$store.state.categories.find((item) => item.id === id).name
    },
    getSlugCategoryById(id) {
      return this.$store.state.categories.find((item) => item.id === id).slug
    },
    getDate(value) {
      return this.$moment(value).format('DD MMMM YYYY | HH:mm')
    },
  },
  computed: {
    views() {
      return getRandomIntInclusive(300, 600)
    },
    time() {
      return getRandomIntInclusive(1, 5)
    },
    imgCover() {
      if (this.page.acf && this.page.acf.cover && this.page.acf.cover.url) {
        return this.page.acf.cover.url
      } else {
        return false
      }
    }
  },
  mounted() {
    this.loading = false

  }
}


const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>
