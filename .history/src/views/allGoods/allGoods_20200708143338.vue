<template>
  <div>
    <div class="goods">
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

      <div v-loading="loading" element-loading-text="加载中..." style="min-height: 35vw;">
        <div class="img-item" v-if="!noResult">
          <!--商品-->
          <div class="goods-box w">
            <mall-goods v-for="(item,i) in goods" :key="i" :msg="item"></mall-goods>
          </div>

          <el-pagination
            v-if="!noResult&&!error"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[8, 20, 40, 80]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
        <div class="no-info" v-if="noResult">
          <div class="no-data">
            <img src="/static/images/no-search.png" />
            <br />抱歉！暂时还没有商品
          </div>
          <section class="section">
            <y-shelf :title="recommendPanel.name">
              <div slot="content" class="recommend">
                <mall-goods :msg="item" v-for="(item,i) in recommendPanel.panelContents" :key="i"></mall-goods>
              </div>
            </y-shelf>
          </section>
        </div>
        <div class="no-info" v-if="error">
          <div class="no-data">
            <img src="/static/images/error.png" />
            <br />抱歉！出错了...
          </div>
          <section class="section">
            <y-shelf :title="recommendPanel.name">
              <div slot="content" class="recommend">
                <mall-goods :msg="item" v-for="(item,i) in recommendPanel.panelContents" :key="i"></mall-goods>
              </div>
            </y-shelf>
          </section>
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
      sortType: 1,
      sort: "",
      currentPage: 1,
      total: 0,
      pageSize: 20,
      min: "",
      max: ""
    };
  },
  methods: {
    getAllGoods() {
      this.$api
        .allGoods({
          page: this.currentPage,
          size: this.pageSize,
          sort: this.sort,
          priceGt: this.min,
          priceLte: this.max,
          cid: cid
        })
        .then(res => {
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
</style>