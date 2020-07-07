<template>
  <div>
    <div class="container">
      <div class="cart">
        <Card>
          <div class="box1">注册 XMall 账号</div>
          <div>
            <div class="ipt">
              <Input v-model="username" placeholder="账号" clearable style="width: 300px" />
            </div>
            <div class="ipt">
              <Input
                v-model="password"
                type="password"
                placeholder="密码"
                clearable
                style="width: 300px"
              />
            </div>
            <div class="ipt">
              <Input
                v-model="rePassword"
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
              <Checkbox v-model="single">
                我已阅读并同意遵守
                <a href>法律声明</a>
                <span class="span">和</span>
                <a href>隐私条款</a>
              </Checkbox>
            </div>
            <div
              class="btn"
              v-if="this.username === '' || this.password === '' || this.rePassword === ''"
            >
              <Button type="primary" disabled long>注册</Button>
            </div>
            <div @click="register" class="btn" v-else>
              <Button type="primary" long>注册</Button>
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
  props: {
    type: {
      type: String,
      default: "click"
    },
    scene: {
      type: [String, Number],
      default: 0
    },
    vpStyle: {
      type: String,
      default: "dark"
    },
    color: {
      type: String,
      color: "#3C8AFF"
    },
    lang: {
      type: String,
      default: "auto"
    }
  },
  components: {},
  data() {
    return {
      username: "",
      password: "",
      rePassword: "",
      single: false
    };
  },
  methods: {
    register() {
      this.$api
        .register({ username: this.username, password: this.password })
        .then(res => {
          if(this.password === this.rePassword) {
            this.$Message.success(res.msg);
          }
          else if(this.username) {
             this.$Message.error(res.msg)
          }
          else {
            this.$Message.error('两次密码不一致，请重新输入');
          }
          console.log(res);
          this.$router.push({path:'/login',query:{username:this.username,password:this.password}})
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadV2Script() {
      if (typeof window.vaptcha === "function") {
        //如果已经加载就直接放回
        return Promise.resolve();
      } else {
        return new Promise(resolve => {
          var script = document.createElement("script");
          script.src = "https://v.vaptcha.com/v3.js";
          script.async = true;
          script.onload = script.onreadystatechange = function() {
            if (
              !this.readyState ||
              this.readyState == "loaded" ||
              this.readyState == "complete"
            ) {
              resolve();
              script.onload = script.onreadystatechange = null;
            }
          };
          document.getElementsByTagName("head")[0].appendChild(script);
        });
      }
    }
  },
  mounted() {
    var config = extend(
      {
        vid: "5efc030de988dd2fc1b8e91b",
        container: this.$refs.vaptcha,
        style: this.vpStyle
      },
      this.$props
    );
    this.loadV2Script().then(() => {
      window.vaptcha(config).then(obj => {
        this.$emit("input", obj);
        obj.render();
      });
    });
  },
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
.box1 {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ipt {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 50px;
}
.vaptcha-init-main {
  display: table;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}

.vaptcha-init-loading {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.vaptcha-init-loading > a {
  display: inline-block;
  width: 18px;
  height: 18px;
}

.vaptcha-init-loading > a img {
  vertical-align: middle;
}

.vaptcha-init-loading .vaptcha-text {
  font-family: sans-serif;
  font-size: 12px;
  color: #cccccc;
  vertical-align: middle;
}
.box2 {
  height: 60px;
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 12px;
  color: rgb(172, 170, 170);
}
.span {
  margin: 3px;
}
.box3 {
  width: 1px;
  height: 10px;
  border: solid 1px #999;
  margin-left: 10px;
  margin-right: 10px;
}
.btn {
  width: 300px;
}
.box4 {
  width: 300px;
  height: 30px;
  border-bottom: 1px solid rgb(189, 188, 188);
}
.box5 {
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: 12px;
}
</style>