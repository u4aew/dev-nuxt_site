<template>
  <div class="widget-new">
    <div class="widget-new__side">
      <div class="widget-new__header">
        <div class="widget-new__header-wrapper">
          <div class="widget-new__header-main">
            <div class="widget-new__title">
              Новое
            </div>
          </div>
          <div class="widget-new__header-side">
            {{ date.format('DD MMMM') }}, {{ date.format('dddd') }}
          </div>
        </div>
      </div>
    </div>
    <div class="widget-new__main">
      <div class="widget-new__list">
        <div v-for="(item, key) in news" :key="key" class="widget-new__list-item">
          <nuxt-link :to="`/${item.slug}/`" class="widget-new__item">
            <div class="widget-new__item-wrapper">
              <div class="widget-new__item-side">
                {{ getTime(item.date) }}
              </div>
              <div class="widget-new__item-main">
                {{ item.title.rendered }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetNew',
  data() {
    return {
      date: this.$moment()
    }
  },
  computed: {
    news() {
      return this.$store.state.lastNews
    }
  },
  methods: {
    getTime(value) {
      const data = this.$moment(value)
      return data.format('HH:mm')
    }
  }
}

</script>
