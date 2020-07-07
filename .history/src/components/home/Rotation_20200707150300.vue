<template>
  <div>
    <div class="rotation">
      <div class="t-rotation"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    rotation: {
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
.rotation {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.t-rotation {
  width: 70%;
  height: 300px;
}
</style>