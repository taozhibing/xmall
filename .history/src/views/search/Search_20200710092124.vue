<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="title">
          <a class="dv" @click="reset" :class="{active:sortType===1}">综合排序</a>
          <a :class="{active:sortType===2}" @click="sortByPrice(1)">价格从低到高</a>
          <a :class="{active:sortType===3}" @click="sortByPrice(-1)">价格从高到低</a>
          <div class="price-interval">
            <input type="number" class="input" placeholder="价格" v-model="min" />
            <span style="margin: 0 5px">-</span>
            <input type="number" placeholder="价格" class="input" v-model="max" />
            <Button type="primary" style="margin-left: 10px;" @click="search">确定</Button>
          </div>
        </div>
        <div class="huanh">
          <div v-for="(item,index) in defaulted" :key="index" class="item">
            <div class="img">
              <div class="box">
                <img :src="item.productImageBig" alt width="305px" height="353px" />
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
            :page-size-opts="[8, 20, 40, 80]"
            :page-size="size"
            :current-page="page"
            show-sizer
            show-elevator
            show-total
            @on-change="change"
            @on-page-size-change="changepage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
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
    change(val) {
      this.page = val;
      this.getData();
    },
    changepage(val) {
      this.size = val;
      this.getData();
    },
     // 默认排序
    reset() {
      this.sortType = 1;
      this.getData();
    },
    // 价格排序
    sortByPrice(v) {
      v === 1 ? (this.sortType = 2) : (this.sortType = 3);
      this.sort = v;
      this.$api
        .allGoodSort({ page: this.page, size: this.size, sort: this.sort })
        .then(res => {
          this.defaulted = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getData() {
      this.$api
        .searchGoods(this.keyword)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    this.keyword = this.$route.query.keyword;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>