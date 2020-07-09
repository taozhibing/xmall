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
      <div class="huanh">
        <div v-for="(item,index) in dataList" :key="index" class="item">
          <div class="img">
            <div class="flex-cent">
              <img :src="item.productImageBig" alt width="206px" />
            </div>
            <h6>{{item.productName}}</h6>
            <h5 class="subTitle wh-text-over">{{item.subTitle}}</h5>
            <p class="price">￥{{item.salePrice}}</p>
            <p class="btn1">
              <Button size="small" class="btn">查看详情</Button>
              <Button type="primary" size="small" class="but">加入购物车</Button>
            </p>
          </div>
        </div>
      </div>
       <div class="Page">
        <Page
          :total="Number(total)"
          size="small"
          show-sizer
          show-total
          @on-change="change"
          @on-page-size-change="changepage"
        />
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
      min: "",
      max: "",
      page: 1,
      size: 20,
      sortType: 1,
      total: "",
      defaulted: []
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.getAllGoods();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getAllGoods();
    },
    getData() {
      if (this.min !== "") {
        this.min = Math.floor(this.min);
      }
      if (this.max !== "") {
        this.max = Math.floor(this.max);
      }
      this.$api
        .allGood({
          page: this.page,
          size: this.size
        })
        .then(res => {
          this.defaulted = res.data;
          this.total = res.total;
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
      this.getData();
    },
    // 价格排序
    sortByPrice(v) {
      v === 1 ? (this.sortType = 2) : (this.sortType = 3);
      this.sort = v;
      this.currentPage = 1;
      this.getData();
    }
  },
  mounted() {
    this.getData();
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