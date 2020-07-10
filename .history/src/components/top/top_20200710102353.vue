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
            <div class="dfl">
              <a class="top_c">
                <Icon type="md-cart" size="18" />
                <div class="top_d">
                  <div class="top_e">
                    <div class="tooltip-triangle"></div>
                    <div class="top_f" v-show="totalNum">
                      <div v-for="(item,index) in cartList" :key="index">
                        <div class="cart-item">
                          <div class="cart-item-inner">
                            <a @click="goDetail(item.productId)">
                              <div class="item-thumb">
                                <img :src="item.productImg" />
                              </div>
                              <div class="item-desc">
                                <div class="cart-cell">
                                  <h4>
                                    <a href v-text="item.productName"></a>
                                  </h4>
                                  <!-- <p class="attrs"><span>白色</span></p> -->
                                  <h6>
                                    <span class="price-icon">¥</span>
                                    <span class="price-num">{{item.salePrice}}</span>
                                    <span class="item-num">x {{item.productNum}}</span>
                                  </h6>
                                </div>
                              </div>
                            </a>
                            <div class="del-btn del" @click="delGoods(item.productId)">
                              <Icon type="ios-close-circle-outline" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--总件数-->
                      <div class="nav-cart-total">
                        <p>
                          共
                          <strong>{{totalNum}}</strong> 件商品
                        </p>
                        <h5>
                          合计：
                          <span class="price-icon">¥</span>
                          <span class="price-num">{{totalPrice}}</span>
                        </h5>
                        <h6>
                          <y-button
                            classStyle="main-btn"
                            style="height: 40px;width: 100%;margin: 0;color: #fff;font-size: 14px;line-height: 38px"
                            text="去购物车"
                            @btnClick="toCart"
                          ></y-button>
                        </h6>
                      </div>
                    </div>
                    <div
                      v-show="!totalNum"
                      style="height: 313px;text-align: center"
                      class="cart-con"
                    >
                      <p>您的购物车竟然是空的!</p>
                    </div>
                  </div>
                </div>
              </a>
              <div
                class="carNumber"
                :class="{no:totalNum <= 0,move_in_cart:receiveInCart}"
              >{{totalNum}}</div>
            </div>
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
      keyword: ""
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
    },
    goDetail(productId) {
      window.open("/detail?productId=" + productId);
    },
    toCart() {
      this.$router.push({ path: "/shopCart" });
    },
    // 删除商品 
    delGoods (productId) {
      this.$api.delCart(this.productId).then(res =>{
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.$api
      .getCarts()
      .then(res => {
        this.cartList = res.data;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
    // 计算价格
    totalPrice() {
      var totalPrice = 0;
      this.cartList &&
        this.cartList.forEach(item => {
          totalPrice += item.productNum * item.salePrice;
        });
      return totalPrice;
    },
    // 计算数量
    totalNum() {
      var totalNum = 0;
      this.cartList &&
        this.cartList.forEach(item => {
          totalNum += item.productNum;
        });
      return totalNum;
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
.top_c {
  position: relative;
}
.top_c:hover .top_d {
  visibility: visible;
}
.top_d {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  width: 360px;
  min-height: 333px;
  visibility: hidden;
}
.top_e {
  margin-top: 46px;
  position: relative;
  min-height: 300px;
}
.tooltip-triangle {
  width: 0;
  height: 0;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: 10px solid white;
  position: absolute;
  top: -20px;
  right: 20px;
  z-index: 1;
  width: 20px;
  height: 20px;
}
.top_f {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  border-radius: 12px;
  min-height: 280px;
  padding: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  color: red;
}
.carNumber {
  width: 24px;
  height: 24px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(150, 150, 150);
  color: #fff;
}
.dfl {
  display: flex;
  align-items: center;
}
</style>