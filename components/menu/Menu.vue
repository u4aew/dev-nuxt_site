<template>
  <div @click="closeMenu" v-if="menuOpen" class="app-menu">
    <div class="app-menu__body">
      <Categories mobile/>
    </div>
    <div @click="closeMenu" class="app-menu__overlay"></div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Categories from "@/components/categories/Categories";

export default {
  name: 'Menu',
  components: {
    Categories
  },
  computed: {
    ...mapState({
      menuOpen: state => state.menuOpen
    }),
  },
  methods: {
    closeMenu() {
      this.$store.dispatch('SET_MENU_OPEN', false)
    }
  }
}
</script>
