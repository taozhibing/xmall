<template>
  <div>
    <div>
      <rotation></rotation>
    </div>
  </div>
</template>

<script>
import Rotation from "../components/home/Rotation";
export default {
  name: "Home",
  props: {},
  components: {
    Rotation
  },
  data() {
    return {
      data: [],
      rotation: [], // 轮播图
      section: [], // 活动版块
      hotGoods: [], // 热门商品
      selection: [], // 官方精选
      brand: [], // 品牌周边
      brandSelection : [] // 品牌精选
    };
  },
  methods: {},
  mounted() {
    this.$api
      .homeGoods()
      .then(res => {
        this.data = res.data;
        this.rotation = res.data[0].panelContents;
        this.section = res.data[1].panelContents;
        this.hotGoods = res.data[2].panelContents;
        this.selection = res.data[3].panelContents;
        this.brand = res.data[4].panelContents;
        console.log(this.data);
        console.log(this.rotation);
        console.log(this.section);
        console.log(this.hotGoods);
        console.log(this.selection);
        console.log(this.brand);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>