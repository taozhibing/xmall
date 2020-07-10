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
                    <p>合计：
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
      shopList : [],
      length: 0,
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