<template>
  <div class="intro">
    <div class="intro__wrapper">
      <div class="intro__title">
        <h1 class="title-h1">
          Title еее
        </h1>
      </div>
      <div class="intro__desc"> dsfds
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ваш ip {{$store.state.ip}}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Intro'
    }
</script>

<style lang="stylus">
  @import "~assets/style/components/intro.styl";
</style>
