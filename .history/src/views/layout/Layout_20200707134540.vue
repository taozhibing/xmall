<template>
  <div>
    <div class="box">
      <div>
        <top></top>
      </div>
      <div>
        <title></title>
      </div>
      <div>
        <router-view></router-view>
      </div>
      <div>
        <below></below>
      </div>
    </div>
  </div>
</template>

<script>
import top from "../../components/top/top";
import title from "../../components/title/title";
import below from "../../components/below/below";
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
.box {
  width: 100%;
}
</style>