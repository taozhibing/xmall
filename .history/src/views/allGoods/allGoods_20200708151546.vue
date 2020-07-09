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
      goods : [],
    };
  },
  methods: {
    getAllGoods() {
      this.$api
        .allGoods({
          page: 1, //请求页数
          size: 10,
        
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