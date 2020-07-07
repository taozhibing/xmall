<template>
  <div>
    <div class="container">
      <div class="cart">
        <Card style="width:320px;background:#fff">
          <div style="text-align:center">
            <img src="../../assets/m (1).png" />
            <h3>A high quality UI Toolkit based on Vue.js</h3>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(rgb(253, 251, 251), green, blue);
}
.cart {
  width: 500px;
  height: 1000px;
  margin-top: 80px;
}
</style>