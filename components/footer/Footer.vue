<template>
  <div class="footer block">
    <div class="footer__wrapper block-wrapper">
      <div class="footer__major">
        <div class="footer__cols">
          <div class="footer__cols-list">
            <div class="footer__cols-item footer__cols-item_nav">
              <div class="footer__nav">
                <div class="footer__nav-list">
                  <div v-for="(page, key) in pages" class="footer__nav-item" :key="key">
                    <nuxt-link :to="page.slug" class="footer__nav-link">{{ page.name }}</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer__cols-item footer__cols-item_nav">
              <div class="footer__nav">
                <div class="footer__nav-list">
                  <div class="footer__nav-item">
                    <a href="#" class="footer__nav-link">Facebook</a>
                  </div>
                  <div class="footer__nav-item">
                    <a href="#" class="footer__nav-link">YouTube</a>
                  </div>
                  <div class="footer__nav-item">
                    <a href="#" class="footer__nav-link">Telegram</a>
                  </div>
                  <div class="footer__nav-item">
                    <a href="#" class="footer__nav-link">RSS</a>
                  </div>
                  <div class="footer__nav-item">
                    <a href="#" class="footer__nav-link">Вконтакте</a>
                  </div>
                  <div class="footer__nav-item">
                    <a href="#" class="footer__nav-link">Viber</a>
                  </div>
                  <div class="footer__nav-item">
                    <a href="#" class="footer__nav-link">Twitter</a>
                  </div>
                  <div class="footer__nav-item">
                    <a href="#" class="footer__nav-link">Push</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer__cols-item footer__cols-item_rules">
              <div class="footer__nav">
                <div class="footer__nav-list">
                  <div class="footer__nav-item">
                    <a href="#" class="footer__nav-link">Пользовательское соглашение</a>
                  </div>
                  <div class="footer__nav-item">
                    <a href="#" class="footer__nav-link">Персональных данные</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__minor">
        <div class="footer__minor-wrapper">
          <div class="footer__minor-main">
            <div class="footer__copyright">
              © 2021 The-magazine 18+
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pages from "@/const/pages";

export default {
  name: 'Footer',
  data() {
    return {
      pages
    }
  }
}
</script>



