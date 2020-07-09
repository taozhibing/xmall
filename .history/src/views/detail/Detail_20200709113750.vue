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
     window.location.href = item.fullUrl
     let obj = this.$route.query.item
     console.log(obj);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>