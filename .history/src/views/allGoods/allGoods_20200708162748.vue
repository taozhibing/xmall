<template>
  <div>
    <div class="container">
      <div class="title">
        <div class="dv">综合排序</div>
        <div>价格从低到高</div>
        <div>价格从高到低</div>
        <div class="price-interval">
          <input type="number" class="input" placeholder="价格" v-model="min" />
          <span style="margin: 0 5px">-</span>
          <input type="number" placeholder="价格" class="input" v-model="max" />
          <Button type="primary" style="margin-left: 10px;">确定</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllGoods",
  props: {},
  components: {},
  data() {
    return {
      goods: [],
      min: "", // this.min = this.priceGt 价格区间 从多少开始
      max: "",// this.max = this.priceLte 价格区间 到哪结束
       currentPage: 1,
     
        pageSize: 20
    };
  },
  methods: {
    getAllGoods() {
      if (this.min !== "") {
        this.min = Math.floor(this.min);
      }
      if (this.max !== "") {
        this.max = Math.floor(this.max);
      }
      this.$api
        .allGoods({
          page: this.currentPage, // 请求页数
          size: this.pageSize // 请求条数
        })
        .then(res => {
          this.goods = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getAllGoods();
  },
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
.title {
  width: 77%;
  line-height: 60px;
  display: flex;
  align-items: center;
}
div {
  padding: 0 15px;
  height: 100%;
  color: #999;
  cursor: pointer;
  &:hover {
    color: #5683ea;
  }
}
.dv {
  color: #5683ea;
}
.input {
  width: 80px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.price-interval {
  padding: 0 15px;
}
</style>