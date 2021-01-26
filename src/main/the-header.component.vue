<template lang="html">
    <header>
        <nav>
            <TheBrandComponent class="yellow-box" />
        </nav>
    </header>
</template>

<script>
import { default as Vue } from "vue";
import { TheBrandComponent } from "./the-header";

export default Vue.extend({
  components: {
    TheBrandComponent,
  },
});
</script>

<style scoped>
header {
  background-color: dimgray;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 5px;
}
.yellow-box {
  border: 10px solid yellow;
}
</style>
