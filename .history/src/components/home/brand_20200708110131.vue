<template>
  <div class="container">
    <div class="card">
    <div class="name">品牌周边</div>
      <div class="huanh">
        <div v-for="(item,index) in brand" :key="index" class="item">
          <div v-if="index===0" class="items hover">
            <img :src="item.picUrl" alt width="610px" height="353px"/>
          </div>
          <div v-else class="img">
            <div class="flex-cent">
              <img :src="item.picUrl" alt width="206px" />
            </div>
            <h6>{{item.productName}}</h6>
            <h5 class="subTitle">{{item.subTitle}}</h5>
            <p class="price">￥{{item.salePrice}}.00</p>
            <p class="btn1">
              <Button size="small" class="btn">查看详情</Button>
              <Button type="primary" size="small" class="but">加入购物车</Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    brand: {
      type: Array,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
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
  margin-top: 20px;
}
.card {
  width: 77%;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}
</style>