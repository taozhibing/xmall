<template>
  <div>
    <div class="container">
      <div class="card">
        <div class="box">
          <div v-for="(item,index) in activitySections" :key="index" class="imgs hover">
            <div v-if="index>0">
              <img :src="item.picUrl" alt height="200px" class="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="zhanwei"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    activitySections: {
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
  margin-top: 30px;
}
.card {
  width: 77%;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}
.box {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.img {
  margin-right: 100px;
}
.imgs:hover:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 1px 1px 10px;
  transition: all 1s;
  -webkit-box-shadow: 0 0 30px #ccc inset;
  -moz-box-shadow: 0 0 30px #ccc inset;
  -o-box-shadow: 0 0 30px #ccc inset;
}
.imgs {
  display: inline-block;
  *display: inline;
  position: relative;
}
.zhanwei {
  width: 100%;
  height: 60px;
}
</style>