<template>
  <nuxt-link to="/dasda" class="article">
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
        {{content.title.rendered}}
      </h2>
      <div class="article__info">
        <div class="article__info-item">Евгения Севастьянова</div>
        <div class="article__info-item">21:30 Сегодня</div>
      </div>
      <div class="article__desc" v-html="content.excerpt.rendered"/>
      <div class="article__img">
        <img src="https://placehold.it/650x300" alt="">
      </div>
      <div class="article__additions">
        <div class="article__additions-item">
          Поделиться
        </div>
        <div class="article__additions-item">
          Избранное
        </div>
        <div class="article__additions-item">
          368
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    content: {
      title: {
        rendered: {
          type: String
        }
      },
      excerpt: {
        rendered: {
          type: String
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
