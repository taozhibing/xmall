<template>
  <div>
    <div class="container">
      <div class="cart">
        <Card>
          <div class="box">
            <div class="icon">M</div>
          </div>
          <div class="box1">使用 XMall 账号 登录官网</div>
          <div>
            <div class="ipt">
              <Input v-model="value1" placeholder="账号" clearable style="width: 250px" />
            </div>
            <div class="ipt">
              <Input v-model="value2" type="password" placeholder="密码" clearable style="width: 250px" />
            </div>
            <div class="code"></div>
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
  background: rgb(253, 251, 251);
}
.cart {
  width: 400px;
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
.ipt {
  height: 50px;
}
.code {
  width: 250px;
  height: 100px;
  background: red;
}
</style>