<template>
 <div>

 </div>
</template>

<script>
 export default {
   name: 'AllGoods',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
     getAllGoods() {
       this.$api.allGoods({page: this.currentPage,
            size: this.pageSize,
            sort: this.sort,
            priceGt: this.min,
            priceLte: this.max,
            cid: cid}).then(res => {
         console.log(res);
       }).catch(err => {
         console.log(err);
       })
     }

   },
   mounted() {
    this.getAllGoods()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>