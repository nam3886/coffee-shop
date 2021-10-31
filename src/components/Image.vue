<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    src: { type: String, default: "" },

    isUrl: { type: Boolean, default: false },
  },

  setup(props) {
    const formatSrc = computed(() => {
      if (props.isUrl) return props.src;

      return validURL(props.src)
        ? props.src
        : "http://localhost:8080/" + props.src;
    });

    function validURL(str) {
      const pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      return !!pattern.test(str);
    }

    return { formatSrc };
  },
});
</script>

<template>
  <img :src="formatSrc" />
</template>
