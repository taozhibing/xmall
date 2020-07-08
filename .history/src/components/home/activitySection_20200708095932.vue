<template>
  <div>
    <div class="container">
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    activitySection: {
      type: Array,
      default: () => {}
    }
  },
  components: {},
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
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 77%;
}
</style>