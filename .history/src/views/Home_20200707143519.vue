<template>
  <div>
    <div>
      <rotation></rotation>
    </div>
  </div>
</template>

<script>
import Rotation from "../components/home/Rotation";
export default {
  name: "Home",
  props: {},
  components: {
    Rotation
  },
  data() {
    return {
      data : []
    };
  },
  methods: {},
  mounted() {
    this.$api
      .homeGoods()
      .then(res => {
        this.data = res.data
        this.rotation = res.data[0].panelContents
        console.log(this.data)
        console.log(this.rotation);
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