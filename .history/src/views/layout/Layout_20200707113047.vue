<template>
  <div>
    <top></top>
    <title></title>
    <router-view></router-view>
    <below></below>
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