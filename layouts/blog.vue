<template>
  <div class="app-body app-body_blog">
    <div class="app-body__wrapper">
      <div class="app-body__header">
        <Header/>
      </div>
      <div class="app-body__content">
        <div class="app-content">
          <div class="app-content__sidebar">
            <Categories/>
          </div>
          <div class="app-content__main">
            <nuxt/>
          </div>
        </div>
      </div>
      <div class="app-body__footer">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
@import "../assets/style/common.styl"
</style>

<script>
import Categories from "../components/categories/Categories";
import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'

export default {
  components: {
    Header,
    Footer,
    Categories
  },
  loading: true,
  mounted() {
    this.loading = false
  }
}
</script>
