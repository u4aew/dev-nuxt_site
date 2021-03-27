<template>
  <div id="disqus_thread"/>
</template>

<script>
export default {
  name: 'Comments',
  mounted() {
    setComment()
  }
}


const setComment = () => {
  (function () { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://the-magazine-ru.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
}
</script>
