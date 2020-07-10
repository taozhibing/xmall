<template>
  <div>
    <div class="top">
      <div class="t-nav">
        <div class="left" @click="backhome">M</div>
        <div class="right">
          <div class="r-left">
            <div class="serach">
              <div>
                <input type="text" v-model="keyword" placeholder="请输入商品信息！" style="outline:none;" />
              </div>
              <div class="icon" @click="search">
                <Icon type="md-search" size="24" />
              </div>
            </div>
            <div class="r-font">全部商品</div>
            <div class="r-font">捐赠</div>
          </div>
          <div class="r-right">
            <div class="piaoqilai" @click="login">
              <Icon type="ios-contact" size="24" />
            </div>
            <Tooltip placement="top-end" theme="light" max-width="450">
              <div class="flex-a-c padd-r hovers">
                <Icon type="ios-cart-outline" class="outline" />
                <div v-if="length===0">
                  <div class="flex-cent">{{length}}</div>
                </div>
                <div v-else>
                  <div class="flex-cent have">{{length}}</div>
                </div>
              </div>
              <div slot="content" class="tankuan f-dir-mid" v-if="length===0">
                <Icon type="ios-cart" class="carts" />
                <div class="null">你的购物车竟然是空的</div>
              </div>
              <div v-else slot="content" class="tankuan f-dir-mid">
                <div v-for="item in shopList" :key="item.id">
                  <div class="paddten">
                    <a href>
                      <div class="item-thumb">
                        <img :src="item.productImageBig" width="100%" />
                      </div>
                      <div class="item-desc">
                        <div>
                          <h4>
                            <div class="productName">{{item.productName}}</div>
                          </h4>
                          <h6>
                            <span class="price-icon">¥</span>
                            <span class="price-num">{{item.salePrice}}</span>
                            <span class="item-num">x {{item.count}}</span>
                          </h6>
                        </div>
                        <Icon
                          type="ios-close-circle-outline"
                          class="close"
                          @click="delCart(item._id)"
                        />
                      </div>
                    </a>
                  </div>
                  <div class="xian"></div>
                </div>
                <div class="total">
                  <div>
                    <p class="total-num">共{{length}}件商品</p>
                    <p>
                      合计：
                      <span class="total-price">{{total | fixed}}</span>
                    </p>
                  </div>
                  <Button type="primary" @click="goToCart">去购物车</Button>
                </div>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      keyword: "",
      shopList: [],
      length: 0
    };
  },
  methods: {
    backhome() {
      this.$router.push("/");
    },
    login() {
      this.$router.push("/login");
    },
    search() {
      this.$router.push({ path: "search", query: { keyWord: this.keyword } });
    }
  },
  mounted() {
    this.$api
      .getCarts()
      .then(res => {
        console.log(res);
        this.shopList = res.data;
        let sum = 0;
        res.data.map(item => {
          sum += item.count;
          return sum;
        });
        this.length = sum;
      })
      .catch(err => {});
  },
  watch: {},
  computed: {
    total() {
      let sum = 0;
      this.shopList.map(item => {
        sum += item.count * item.salePrice;
      });
      return sum;
    }
  },
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
  }
};
</script>

<style scoped lang='scss'>
a {
  color: rgb(150, 150, 150);
}
input {
  border: none;
  margin-left: 5px;
}
.top {
  width: 100%;
  height: 100px;
  background: black;
  display: flex;
  justify-content: center;
}

.t-nav {
  width: 1220px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left {
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 25px;
  color: black;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.number {
  width: 24px;
  height: 24px;
  background: rgb(150, 150, 150);
  border-radius: 12px;
  color: black;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.r-left {
  width: 650px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.serach {
  width: 300px;
  height: 40px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
}
.r-font {
  color: rgb(150, 150, 150);
  font-size: 16px;
}
.r-font:hover {
  color: white;
}
.r-right {
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.carts {
  display: flex;
  justify-content: center;
}
.icon {
  margin-right: 5px;
}
.piaoqilai :hover {
  color: white;
}


.hovers:hover {
  cursor: pointer;
}
.hovers:hover .outline {
  color: #fff;
}
.hovers:hover .null-cart {
  display: block;
}
.tankuan {
  width: 300px;
}
.carts {
  margin-top: 40px;
  color: rgb(200, 200, 200);
  font-size: 80px;
}
.null {
  margin-top: 20px;
  font-size: 18px;
  margin-bottom: 50px;
}
.xian {
  width: 100%;
  height: 1px;
  background: #eee;
}
.item-thumb {
  position: relative;
  float: left;
  width: 78px;
  height: 78px;
  border-radius: 3px;
  border: 1px solid #eeeeee;
  margin-left: 5px;
}
.item-desc {
  margin-left: 95px;
  display: flex;
  align-items: center;
  width: 200px;
  height: 80px;
}
.paddten:hover .close {
  display: block;
}
.close {
  font-size: 20px;
  margin-left: 5px;
  color: #000;
  display: none;
}
.productName {
  font-weight: 500;
  font-size: 14px;
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}
.price-icon {
  color: #d44d44;
  display: inline-block;
  font-weight: 700;
}
.price-num {
  margin-left: 5px;
  font-size: 14px;
  color: #d44d44;
  display: inline-block;
  font-weight: 700;
}
.item-num {
  margin-left: 10px;
  display: inline-block;
  font-weight: 700;
  color: #cacaca;
}
.total {
  padding: 10px;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.total-num {
  color: #cacaca;
  font-size: 12px;
}
.total-price {
  color: #d44d44;
  font-weight: 700;
}
.w-box {
  width: 1220px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
}
h1 {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  text-align: center;
}
.logo {
  color: #666;
}
.padd-lrew {
  color: #c8c8c8;
  font-size: 14px;
}
.padd-lrew:hover {
  color: #fff;
  cursor: pointer;
}
.nav-line {
  width: 1px;
  height: 13px;
  background: rgba($color: #ffffff, $alpha: 0.2);
}
.contact {
  font-size: 24px;
  color: #666;
  padding: 0 10px;
  margin-right: 20px;
}
.contact:hover {
  color: #fff;
  cursor: pointer;
}
.outline {
  font-size: 24px;
  color: #666;
}
.flex-cent {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #989898;
  color: #fff;
}
.have {
  background: red;
}
.nav-right {
  width: 160px;
  display: flex;
  justify-content: flex-end;
}
.nav-warpper {
  background: #f7f7f7;
  padding: 31px 0;
  display: flex;
  justify-content: center;
}
.nav-item {
  font-size: 14px;
  color: #666;
}
.Badge {
  width: 2px;
  height: 2px;
  background: #bdbdbd;
}
.warpper-box {
  width: 1220px;
  display: flex;
  align-items: center;
}
.blue:hover {
  cursor: pointer;
  color: #5079d9;
}
</style>