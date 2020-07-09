<template>
  <div></div>
</template>

<script>
export default {
  name: "Detail",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let afterUrl = window.location.search;
    this.productId = afterUrl
      .substring(afterUrl.indexOf("=") + 1)
      .toUpperCase();
      console.log(this.productId);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>