<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__content">
        <div class="header__content-main">
          <div class="header__info">
            <div class="header__info-side">
              <nuxt-link to="/" class="header__logo">
                <img src="../../assets/images/vendor/logo.svg" alt="">
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="header__content-side">
          <div class="header__item header__item_search">
            <Search/>
          </div>
          <div class="header__item header__item_menu">
            <div @click="openMenu" class="header__menu"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

import Search from "@/components/search/Search";

export default {
  name: 'Header',
  components: {
    Search
  },
  methods: {
    openMenu() {
      this.$store.dispatch('SET_MENU_OPEN', true)
    }
  }
}
</script>
