<template>
  <div class="article">
    <div class="article__main">
      <div class="article__informer">
        <div class="article-informer">
          <div class="article-informer__list">
            <div class="article-informer__list-item article-informer__list-item_tags">
              <div class="article-tags">
                <div class="article-tags__item">Новости</div>
                <div class="article-tags__item">Продуктивность</div>
              </div>
            </div>
            <div class="article-informer__list-item article-informer__list-item_date">17 марта 2021 | 19:58</div>
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
        20 минут зарядки на неделю работы: раскрыты характеристики смарт-часов OnePlus Watch
      </h1>
      <div class="article__img">
        <img src="https://api.the-magazine.ru/wp-content/uploads/2021/03/Изображение-1.png">
      </div>
      <div class="article__info">
        <div class="article__info-item article__info-item_view">358</div>
        <div class="article__info-item">2 мин</div>
      </div>
      <div class="article__content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam debitis doloribus, dolorum
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam debitis doloribus, dolorum
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam debitis doloribus, dolorum
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam debitis doloribus, dolorum
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam debitis doloribus, dolorum
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam debitis doloribus, dolorum
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam debitis doloribus, dolorum
        </p>

        <p>
          eaque excepturi expedita illo impedit inventore iste magnam reiciendis repudiandae rerum tenetur totam, unde ut.
          eaque excepturi expedita illo impedit inventore iste magnam reiciendis repudiandae rerum tenetur totam, unde ut.
          eaque excepturi expedita illo impedit inventore iste magnam reiciendis repudiandae rerum tenetur totam, unde ut.
          eaque excepturi expedita illo impedit inventore iste magnam reiciendis repudiandae rerum tenetur totam, unde ut.
          eaque excepturi expedita illo impedit inventore iste magnam reiciendis repudiandae rerum tenetur totam, unde ut.
          eaque excepturi expedita illo impedit inventore iste magnam reiciendis repudiandae rerum tenetur totam, unde ut.
          eaque excepturi expedita illo impedit inventore iste magnam reiciendis repudiandae rerum tenetur totam, unde ut.
        </p>


        <img src="https://placehold.it/600x420">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  loading: true,
  layout: 'blog',
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
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  mounted() {
    this.loading = false
  }
}
</script>
