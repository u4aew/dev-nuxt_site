<template>
  <div class="header block">
    <div class="header__wrapper block-wrapper">
      <div class="header__content">
        <div class="header__content-main">
          <div class="header__info">
            <div class="header__info-side">
              <nuxt-link to="/" class="header__logo">
                <img src="~assets/images/vendor/logo.png" alt="">
              </nuxt-link>
            </div>
            <div class="header__info-main">
              <div class="header__nav">
                <div class="header__nav-list">
                  <div class="header__nav-item">
                    <a href="" class="header__nav-link">
                      Пункты приёма
                    </a>
                  </div>
                  <div class="header__nav-item">
                    <a href="" class="header__nav-link">
                      Вывоз лома
                    </a>
                  </div>
                  <div class="header__nav-item">
                    <nuxt-link to="/news" class="header__nav-link">
                      Новости
                    </nuxt-link>
                  </div>
                  <div class="header__nav-item">
                    <nuxt-link to="/about" class="header__nav-link">
                      О нас
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header__content-side">
          <div class="header__actions">
            <div class="header__actions-list">
              <div class="header__actions-item">
                {{$store.state.city.name}}
              </div>
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
