<template>
  <div>
    <div class="nav">
      <div class="w">
        <a href="javascript:;" :class="{active:sortType===1}" @click="reset()">综合排序</a>
        <a href="javascript:;" @click="sortByPrice(1)" :class="{active:sortType===2}">价格从低到高</a>
        <a href="javascript:;" @click="sortByPrice(-1)" :class="{active:sortType===3}">价格从高到低</a>
        <div class="price-interval">
          <input type="number" class="input" placeholder="价格" v-model="min" />
          <span style="margin: 0 5px">-</span>
          <input type="number" placeholder="价格" v-model="max" />
          <y-button text="确定" classStyle="main-btn" @btnClick="reset" style="margin-left: 10px;"></y-button>
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
      sortType: 1,
    };
  },
  methods: {
    getAllGoods() {
      this.$api
        .allGoods({
          page: 1, // 请求页数
          size: 10 // 请求条数
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
      this.loading = true;
      this._getAllGoods();
    },

    // 价格排序
    sortByPrice(v) {
      v === 1 ? (this.sortType = 2) : (this.sortType = 3);
      this.sort = v;
      this.currentPage = 1;
      this.loading = true;
      this._getAllGoods();
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
</style>