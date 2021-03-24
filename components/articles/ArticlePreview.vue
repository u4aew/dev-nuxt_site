<template>
  <nuxt-link :to="`/${content.slug}`" class="article-preview">
    <div class="article-preview__wrapper">
      <div class="article-preview__tags">
        <div v-for="(item, key) in content.categories" :key="key" class="article-preview__tags-item">
          {{ getNameCategoryById(item) }}
        </div>
      </div>
      <h2 class="article-preview__title">
        {{ content.title.rendered }}
      </h2>

      <div class="article-preview__desc" v-html="content.excerpt.rendered"/>
      <div class="article-preview__img">
        <img :src="imgCover">
      </div>
      <div class="article-preview__info">
        <div class="article-preview__info-item">Евгения Севастьянова</div>
        <div class="article-preview__info-item article-preview__info-item_view">{{ views }}</div>
        <div class="article-preview__info-item article-preview__info-item_time">{{ time }} мин.</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>

export default {
  props: {
    content: {
      slug: {},
      title: {
        rendered: {
          type: String
        }
      },
      excerpt: {
        rendered: {
          type: String
        }
      },
      acf: {
        cover: {
          url: String
        }
      },
      categories: {}
    }
  },
  computed: {
    views() {
      return getRandomIntInclusive(300, 600)
    },
    time() {
      return getRandomIntInclusive(1, 5)
    },
    imgCover() {
      if (this.content.acf && this.content.acf.cover && this.content.acf.cover.url) {
        return this.content.acf.cover.url
      } else {
        return ''
      }
    }
  },
  methods: {
    getNameCategoryById(id) {
      return this.$store.state.categories.find((item) => item.id === id).name
    }
  }
}


const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>
