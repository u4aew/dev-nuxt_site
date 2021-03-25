<template>
  <div class="article">
    <div class="article__main">
      <div class="article__informer">
        <div class="article-informer">
          <div class="article-informer__list">
            <div class="article-informer__list-item article-informer__list-item_tags">
              <div class="article-tags">
                <nuxt-link :to="`topics/${getSlugCategoryById(id)}`" v-for="(id, key) in page.categories" :key="key"
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
      <h1 class="article__title">
        {{ page.title.rendered }}
      </h1>
      <div class="article__img">
        <img :src="imgCover">
      </div>
      <div class="article__info">
        <div class="article__info-item article__info-item_share">
          <div class="ya-share2" data-curtain data-shape="round" data-limit="3" data-services="vkontakte,facebook,telegram,twitter"></div>
        </div>
        <div class="article__info-item article__info-item_view">{{ views }}</div>
        <div class="article__info-item">{{ time }} мин</div>
      </div>
      <div v-html="page.content.rendered" class="article__content"/>
      <div class="article__comments">
        <div id="disqus_thread"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  loading: true,
  async asyncData({store, $axios, env, route, error}) {
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
      title: this.page.title.rendered,
      script: [
        {
          src: "https://yastatic.net/share2/share.js",
          async: true
        },
      ]
    }
  },
  methods: {
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
        return ''
      }
    }
  },
  mounted() {
    this.loading = false
    setComment()
  }
}

const setComment = () => {
  (function () { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://the-magazine-ru.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>
