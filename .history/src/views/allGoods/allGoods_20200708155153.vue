<template>
  <div>
   <div class="nav">
      <div class="w">
        <a href="javascript:;" >综合排序</a>
        <a href="javascript:;" >价格从低到高</a>
        <a href="javascript:;" >价格从高到低</a>
        <div class="price-interval">
          <input type="number" class="input" placeholder="价格" v-model="min">
          <span style="margin: 0 5px"> - </span>
          <input type="number" placeholder="价格" v-model="max">
          <Button type="primary">确定</Button>
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
      min : '',
      max : ''
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