<template>
  <div class="center">
    <div class="center_a">
      <!-- 商品 -->
      <div class="goods">
        <!-- 轮播 -->
        <div class="goods_a">
          <div class="gleft">
            <div class="glimg" v-for="(item,index) in list" :key="index">
              <img :src="item" alt width="75px" />
            </div>
          </div>
          <div class="gright">
            <img :src="item.picUrl" alt width="300px" />
          </div>
        </div>
        <!-- 操作 -->
        <div class="stuff">
          <div class="stuff_1">
            <div class="stuff_a">{{item.productName}}</div>
            <div class="stuff_d">
              <span class="stuff_b">{{item.subTitle}}</span>
              <span class="stuff_c">￥{{item.salePrice}}.00</span>
            </div>
          </div>
          <div class="stuff_2">
            数量
            <div class="stuff_e">加减数量</div>
          </div>
          <div class="stuff_3">
            <Button type="primary" :size="buttonSize">加入购物车</Button>
            <Button :size="buttonSize">现在购买</Button>
          </div>
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="detail">
        <div class="hot_b">产品信息</div>
        <div v-html="arr.detail"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {},
  components: {},
  data() {
    return {
      arr: {},
      list: []
    };
  },
  methods: {},
  mounted() {
    let afterUrl = window.location.search;
    this.productId = afterUrl
      .substring(afterUrl.indexOf("=") + 1)
      .toUpperCase();
    this.$api
      .goodsDetail(this.productId)
      .then(res => {
        if (res.code === 200) {
          this.arr = res.data.result;
          this.list = res.data.result.productImageSmall;
          console.log(this.arr);
          console.log(this.list);
        }
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