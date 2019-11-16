<template>
  <div class="intro">
    <div class="intro__wrapper">
      <div class="intro__title">
        <h1 class="title-h1">
          Title
        </h1>
      </div>
      <div class="intro__desc">
        Ваш ip {{$store.state.session.ipInfo}}
        <br>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Intro',
        methods: {
            test () {
                this.$store.dispatch('todos/ADD', 'sdasad')
            }
        }
    }
</script>

<style lang="stylus">
  @import "~assets/style/components/intro.styl";
</style>
