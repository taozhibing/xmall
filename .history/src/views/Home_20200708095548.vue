<template>
  <div>
    <div>
      <rotation :rotation="rotation"></rotation>
    </div>
    <div>
      <activitySection :activitySection="activitySection"></activitySection>
    </div>
    <div>
      <hotGoods :hotGoods="hotGoods"></hotGoods>
    </div>
    <div>
      <officialSelection :officialSelection="officialSelection"></officialSelection>
    </div>
    <div><brand :brand="brand"></brand></div>
  </div>
</template>

<script>
import Rotation from "../components/home/Rotation";
import activitySection from "../components/home/activitySection";
import hotGoods from "../components/home/hotGoods";
import officialSelection from "../components/home/officialSelection";
import brand from "../components/home/brand";
import brandSelection from "../components/home/brandSelection";
import activitySections from "../components/home/activitySections";
export default {
  name: "Home",
  props: {},
  components: {
    Rotation,
    activitySection,
    hotGoods,
    officialSelection,
    brand,
    brandSelection,
    activitySections
  },
  data() {
    return {
      data: [], // 首页所有数据
      rotation: [], // 轮播图
      activitySection: [], // 活动版块
      hotGoods: [], // 热门商品
      officialSelection: [], // 官方精选
      brand: [], // 品牌周边
      brandSelection: [], // 品牌精选
      activitySections: [] //活动版块2
    };
  },
  methods: {},
  mounted() {
    this.$api
      .homeGoods()
      .then(res => {
        this.data = res.data;
        this.rotation = res.data[0].panelContents;
        this.activitySection = res.data[1].panelContents;
        this.hotGoods = res.data[2].panelContents;
        this.officialSelection = res.data[3].panelContents;
        this.brand = res.data[4].panelContents;
        this.brandSelection = res.data[5].panelContents;
        this.activitySections = res.data[6].panelContents;
        // console.log(this.data);
        console.log(this.rotation);
        console.log(this.activitySection);
        console.log(this.hotGoods);
        console.log(this.officialSelection);
        console.log(this.brand);
        console.log(this.brandSelection);
        console.log(this.activitySections);
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