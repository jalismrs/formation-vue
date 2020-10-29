import { default as Vue } from "vue";
import { default as MainEntry } from "./main.entry.vue";

const id = "app";
const element = window.document.getElementById(id);
if (element === null) {
  throw new Error(`Element '${id}' does not exist`);
}

new Vue({
  el: element,
  render: (createElement) => {
    return createElement(MainEntry);
  },
  template: "<MainEntry />"
});
