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
                    <a href="#" class="header__nav-link">
                      Цветной металлолом
                    </a>
                  </div>
                  <div class="header__nav-item">
                    <a href="#" class="header__nav-link">
                      Черный металлолом
                    </a>
                  </div>
                  <div class="header__nav-item">
                    <a href="#" class="header__nav-link">
                      Цены
                    </a>
                  </div>
                  <div class="header__nav-item">
                    <nuxt-link to="/articles" class="header__nav-link">
                      Статьи
                    </nuxt-link>
                  </div>
                  <div class="header__nav-item">
                    <a href="#" class="header__nav-link">
                      Калькулятор цен
                    </a>
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
<!--                {{$store.state.city.name}}-->
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
