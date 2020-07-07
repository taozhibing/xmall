<template>
  <div>
    <div><top></top></div>
    <div><title></title></div>
    <router-view></router-view>
    <div><below></below></div>
  </div>
</template>

<script>
import top from "../../components/home/top";
import title from "../../components/home/title";
import below from "../../components/home/below";
export default {
  name: "Layout",
  props: {},
  components: {
    top,
    title,
    below
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>