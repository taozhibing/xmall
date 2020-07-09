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
        })
        .then(res => {
          this.goods = res.data
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