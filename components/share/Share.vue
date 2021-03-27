<template>
  <div class="ya-share2" data-curtain data-shape="round" data-limit="3"
       data-services="vkontakte,facebook,telegram,twitter"></div>
</template>

<script>
export default {
  mounted() {
    setShare()
  }
}

const setShare = () => {
  (function () { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://yastatic.net/share2/share.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
}

</script>
