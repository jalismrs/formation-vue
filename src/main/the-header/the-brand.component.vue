<template
    lang="html"
>
    <a
        href="/"
        target="_self"
    >
        Formation Vue <span class="blink">YOUHOU !</span>
    </a>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';

export default Vue.extend();
</script>

<style scoped lang="scss">
a {
  span {
    color: blue;
  }
  .blink {
    animation: blink 2s infinite;
  }
}

@keyframes blink {
  0% {
    color: initial;
  }
  50% {
    color: transparent;
  }
  100% {
    color: initial;
  }
}
</style>
