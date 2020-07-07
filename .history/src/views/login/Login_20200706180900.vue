<template>
  <div>
      <div class="cart">
        <Card>
          <div class="box">
            <div class="icon">M</div>
          </div>
          <div class="box1">使用 XMall 账号 登录官网</div>
          <div>
            <div>
              <Input
                v-model="value1"
                placeholder="账号"
                clearable
                style="width: 250px"
              />
            </div>
          </div>
        </Card>
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
.cart {
width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(253, 251, 251);
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 90px;
  height: 90px;
  background: red;
  border-radius: 45px;
  color: white;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box1 {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>