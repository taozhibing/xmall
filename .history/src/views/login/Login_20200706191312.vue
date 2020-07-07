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
            <div>
              <div><Checkbox v-model="single" class="check">记住密码</Checkbox></div>
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
  name: "Login",
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
      value1: "",
      value2: "",
      single: false
    };
  },
  methods: {
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
.check {
  font-size: 12px;
  color: rgb(214, 210, 210);
}
</style>