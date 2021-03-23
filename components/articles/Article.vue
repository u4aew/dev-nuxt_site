<template>
  <div class="article">
    <div class="article__wrapper">
      <div class="article__tags">
        <div class="article__tags-item">
          Новости
        </div>
        <div class="article__tags-item">
          Бизнес
        </div>
      </div>
      <h2 class="article__title">
        {{ content.title.rendered }}
      </h2>

      <div class="article__desc" v-html="content.excerpt.rendered"/>
      <div class="article__img">
        <img :src="content.acf.cover.url">
      </div>
      <div class="article__info">
        <div class="article__info-item">Евгения Севастьянова | 21:30 Сегодня</div>
        <div class="article__info-item">888</div>
      </div>
    </div>
  </div>
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
      }
    }
  }
}
</script>

<style scoped>

</style>
