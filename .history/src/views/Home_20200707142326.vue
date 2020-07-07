<template>
 <div>

 </div>
</template>

<script>
 export default {
   name: 'Home',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {
     this.$api.homeGoods().then(res => {console.log(res);}).catch(err => {console.log(err);})
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>