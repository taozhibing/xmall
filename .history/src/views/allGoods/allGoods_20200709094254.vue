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
            size="small"
            show-sizer
            show-total
            show-elevator
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
  name: "AllGoods",
  props: {},
  components: {},
  data() {
    return {
      min: "",
      max: "",
      page: 1,
      size: 8,
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
    getData() {
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
    search() {
      if (this.min !== "") {
        this.min = Math.floor(this.min);
      }
      if (this.max !== "") {
        this.max = Math.floor(this.max);
      }
      this.$api
        .allGoods({
          page: this.page,
          size: this.size,
          sort: this.sort,
          priceGt: this.min,
          priceLte: this.max
        })
        .then(res => {
          if (res.success === true) {
            this.total = res.total
            this.defaulted = res.data
          }else {
            this.$Message.error('请求出错');
          }
        })
        .catch(err => {});
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
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.container {
  width: 1220px;
  line-height: 60px;
}
.title {
  display: flex;
  align-items: center;
}
a {
  font-size: 12px;
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
.huanh {
  width: 1220px;
  display: flex;
  flex-wrap: wrap;
}
.item {
  background: white;
  text-align: center;
}
.img {
  width: 305px;
}
.img:hover {
  cursor: pointer;
  transform: translateY(-3px);
  box-shadow: 2px 2px 10px;
  transition: all 1s;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
h6 {
  font-size: 15px;
  height: 60px;
  color: #424242;
  font-weight: 500;
}
.subTitle {
  color: #d0d0d0;
  font-weight: 500;
  height: 60px;
  padding: 10px;
}
p {
  font-size: 18px;
  color: #d44d44;
  margin-top: 10px;
}
.but {
  font-size: 12px;
}
.btn {
  margin-right: 10px;
  font-size: 12px;
}
.btn1 {
  display: none;
}
.item:hover .btn1 {
  display: block;
}
.item:hover .price {
  display: none;
}
.active {
  color: #7969d9;
}
.Page {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>