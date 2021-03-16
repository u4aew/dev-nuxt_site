<template>
  <div class="header block">
    <div class="header__wrapper block-wrapper">
      <div class="header__content">
        <div class="header__content-main">
          <div class="header__info">
            <div class="header__info-side">
              <nuxt-link to="/" class="header__logo">
                LOGO
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="header__content-side">
          <div class="header__actions">
            <div class="header__actions-list">
              <div class="header__actions-item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
  @import "~assets/style/components/header.styl"
</style>
<script>
    export default {
        name: 'Header'
    }
</script>
