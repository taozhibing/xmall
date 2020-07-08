<template>
  <div>
    <div class="box">
      <div>
        <top></top>
      </div>
      <div>
        <titled></titled>
      </div>
      <div class="container">
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
import titled from "../../components/titled/titled";
import below from "../../components/below/below";
export default {
  name: "Layout",
  props: {},
  components: {
    top,
    titled,
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
.container {
  width: 100%;
  height: 100%;
  background: rgb(236, 236, 236);
} 
</style>