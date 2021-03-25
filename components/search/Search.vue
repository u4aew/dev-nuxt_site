<template>
  <form action="/search" method="get" class="search">
    <div class="search__wrapper">
      <input name="q" class="search__input" placeholder="Поиск" type="text">
    </div>
  </form>
</template>

<script>
export default {
  name: 'Search',
}
</script>
