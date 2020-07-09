<template>
  <div>
    <div class="container">
      <div class="title">
        <div class="dv" @click="reset" :class="{active:sortType===1}">综合排序</div>
        <div :class="{active:sortType===2}" @click="sortByPrice(1)">价格从低到高</div>
        <div :class="{active:sortType===3}" @click="sortByPrice(-1)">价格从高到低</div>
        <div class="price-interval">
          <input type="number" class="input" placeholder="价格" v-model="min" />
          <span style="margin: 0 5px">-</span>
          <input type="number" placeholder="价格" class="input" v-model="max" />
          <Button type="primary" style="margin-left: 10px;">确定</Button>
        </div>
      </div>
      <div class="box">
        <div v-for="item in goods" :key="item.id">
          <Page
            :total="32"
            @on-page-size-change="handleSizeChange"
            @on-change="handleCurrentChange"
            :current="currentPage"
            :page-sizes="[8, 20, 40, 80]"
            :page-size="pageSize"
            size="small"
            show-total
            show-elevator
            show-sizer
          />
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
      min: "",
      max: "",
      currentPage: 1,
      pageSize: 20,
      sortType: 1,
      sort: ""
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
          size: this.pageSize, // 请求条数
          sort: this.sort, //排序方式 1为升序 -1为降序
          priceGt: this.min, //价格区间 从多少开始
          priceLte: this.max //价格区间 到哪结束
        })
        .then(res => {
          this.goods = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 默认排序
    reset() {
      this.sortType = 1;
      this.sort = "";
      this.currentPage = 1;
      this.getAllGoods();
    },
    // 价格排序
    sortByPrice(v) {
      v === 1 ? (this.sortType = 2) : (this.sortType = 3);
      this.sort = v;
      this.currentPage = 1;
      this.getAllGoods();
    }
  },
  mounted() {
    this.$api
      .getAllGoods({ page: this.currentPage, size: this.pageSize })
      .then(res => {
        
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
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