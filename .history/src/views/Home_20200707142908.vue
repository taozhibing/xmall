<template>
  <div>
  <div></div>
  </div>
</template>

<script>
import Rotation from '../components/home/Rotation'
export default {
  name: "Home",
  props: {},
  components: {
    Rotation,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$api
      .homeGoods()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>