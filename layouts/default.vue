<template>
  <div class="app-body">
    <div class="app-body__wrapper">
      <div class="app-body__header">
        <Header/>
      </div>
      <div class="app-body__content">
        <aside class="app-content">
          <div class="app-content__sidebar">
            <Categories/>
          </div>
          <main class="app-content__main">
            <nuxt/>
          </main>
          <aside class="app-content__additional">
            <WidgetNew/>
          </aside>
        </aside>
      </div>
      <div class="app-body__footer">
        <Footer/>
      </div>
    </div>
    <Menu/>
  </div>
</template>

<style lang="stylus">
@import "../assets/style/common.styl"
</style>

<script>
import Categories from "../components/categories/Categories";
import WidgetNew from "@/components/widgets/WidgetNew";
import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'
import Menu from "@/components/menu/Menu";

export default {
  components: {
    Header,
    Footer,
    Categories,
    WidgetNew,
    Menu
  },
  loading: true,

  mounted() {
    this.loading = false
  }
}
</script>
