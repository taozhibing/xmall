<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: "AllGoods",
  props: {},
  components: {},
  data() {
    return {
      noResult: false,
      sort: 1,
      current: 1, // 当前页码
      total: '', //数据总数
      pageSize: 20, // 每页条数
      min: "",
      max: ""
    };
  },
  methods: {
    getAllGoods() {
      this.$api
        .allGoods({
          page: this.current,
          size: this.pageSize,
          sort: this.sort,
          priceGt: this.min,
          priceLte: this.max,
        })
        .then(res => {
          this.goods = res.data.data
          this.total = res.data.data.total
          console.log(res);
          console.log(this.total);
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