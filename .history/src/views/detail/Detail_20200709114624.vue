<template>
 <div>

 </div>
</template>

<script>
 export default {
   name: 'Detail',
   props: {
   },
   components: {

   },
   data () {
     return {
      obj : {}
     }
   },
   methods: {

   },
   mounted() {
     this.productId = this.$route.query.productId
     console.log(this.obj);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>