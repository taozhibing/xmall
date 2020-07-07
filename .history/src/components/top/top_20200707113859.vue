<template>
  <div>
    <div class="top">
      <div class="t-nav">
        <div class="left" @click="backhome">M</div>
        <div class="right">
          <div class="r-left">
            <div class="serach">
              <div>
                <input type="text" placeholder="请输入商品信息！" />
              </div>
              <div class="icon">
                <Icon type="md-search" size="24" />
              </div>
            </div>
            <div class="r-font">全部商品</div>
            <div class="r-font">捐赠</div>
          </div>
          <div class="r-right">
            <div class="piaoqilai" @click="login">
              <Icon type="ios-contact" size="24" />
            </div>
            <div class="dfl">
              <a class="top_c">
                <Icon type="md-cart" size="18" />
                <div class="top_d">
                  <div class="top_e">
                    <div class="tooltip-triangle"></div>
                    <div class="top_f">123</div>
                  </div>
                </div>
              </a>
              <div class="rrrr">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
     backhome() {
      this.$router.push("/");
    },
    login() {
      this.$router.push("/login");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>