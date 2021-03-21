<template>
  <div class="header">
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
          <Search/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Search from "@/components/search/Search";

export default {
  name: 'Header',
  components: {
    Search
  }
}
</script>
