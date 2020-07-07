<template>
  <div>
    <div class="container">
      <div class="cart">
        <Card>
          <div class="box1">注册 XMall 账号</div>
          <div>
            <div class="ipt">
              <Input v-model="value1" placeholder="账号" clearable style="width: 300px" />
            </div>
            <div class="ipt">
              <Input
                v-model="value2"
                type="password"
                placeholder="密码"
                clearable
                style="width: 300px"
              />
            </div>
             <div class="ipt">
              <Input
                v-model="value3"
                type="password"
                placeholder="重复密码"
                clearable
                style="width: 300px"
              />
            </div>
            <div ref="vaptcha" style="width:300px;height:36px">
              <div class="vaptcha-init-main">
                <div class="vaptcha-init-loading">
                  <a href="https://www.vaptcha.com/" target="_blank">
                    <img src="https://cdn.vaptcha.com/vaptcha-loading.gif" />
                  </a>
                  <span class="vaptcha-text">VAPTCHA启动中...</span>
                </div>
              </div>
            </div>
            <div class="box2">
              <div class="left">
                <Checkbox v-model="single">记住密码</Checkbox>
              </div>
              <div class="right">
                <a href class="register">注册 XMall 账号</a>
                <div class="box3"></div>
                <a href style="font-size:12px">忘记密码 ?</a>
              </div>
            </div>
            <div class="btn" v-if="this.value1 === '' || this.value2 === ''">
              <Button type="primary" disabled long>登录</Button>
            </div>
            <div class="btn" v-else>
              <Button type="primary" long>登录</Button>
            </div>
            <div class="back">
              <Button long>返回</Button>
            </div>
            <div class="box4"></div>
            <div class="box5">
              如果您已拥有 XMall 账号，则可在此
              <a href>登录</a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
const extend = function(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
};
export default {
  name: "Register",
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
</style>