<template>
  <div>
    <div class="container">
      <div class="card">
        <div v-for="item in activitySection" :key="item.id" class="item">
          <div class="li hover">
          <img :src="item.picUrl" alt  class="img"/>
          </div>
        </div>
      </div>
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
  margin-top: 20px;
}
.box {
  width: 77%;
  height: 500px;
}
</style>