<template>
  <div>
    <top></top>
    <router-view></router-view>
  </div>
</template>

<script>
import Top from "../../components/home/top";
export default {
  name: "Layout",
  props: {},
  components: {
    Top,
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