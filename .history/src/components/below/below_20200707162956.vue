<template>
  <div>
    <div class="content">
      <div class="center">
        <div class="bot">
          <div class="bot_a">
            <div class="bot_b">
              <div class="bot_c">订单服务</div>
              <a href="http://xmall.exrick.cn/#/thanks" target="_blank">购买指南</a>
              <a href="http://xmall.exrick.cn/#/thanks" target="_blank">支付方式</a>
              <a href="http://xmall.exrick.cn/#/thanks" target="_blank">送货政策</a>
            </div>
            <div class="bot_b">
              <div class="bot_c">服务支持</div>
              <a href="https://github.com/Exrick" target="_blank">官方开源</a>
              <a href="http://xmall.exrick.cn/#/thanks" target="_blank">项目前端</a>
              <a href="http://xmall.exrick.cn/#/thanks" target="_blank">项目后端</a>
            </div>
            <div class="bot_b">
              <div class="bot_c">自助服务</div>
              <a href="http://blog.exrick.cn" target="_blank">个人博客</a>
              <a href="http://blog.exrick.cn/intro/" target="_blank">个人简介</a>
              <a href="http://www.bilibili.com/video/av15860053/" target="_blank">个人视频</a>
            </div>
            <div class="bot_b">
              <div class="bot_c">其他项目</div>
              <a href="http://xpay.exrick.cn" target="_blank">XPay支付系统</a>
              <a href="http://shouji.baidu.com/software/11783429.html" target="_blank">数据共享</a>
              <a href="https://github.com/Exrick" target="_blank">待开发...</a>
            </div>
            <div class="bot_b">
              <div class="bot_c">友情链接</div>
              <a href="http://yucccc.com/" target="_blank">宇cccc</a>
              <a href="http://www.smartisan.com" target="_blank">Smartisan</a>
              <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
            </div>
            <div class="bot_b">
              <div class="bot_c">关注我吧</div>
              <a
                href="http://wpa.qq.com/msgrd?v=3&uin=1012139570&site=qq&menu=yes"
                target="_blank"
              >腾讯QQ</a>
              <a href="http://weibo.com/2255094222/profile" target="_blank">新浪微博</a>
              <a href="mailto:1012139570@qq.com" target="_blank">官方邮箱</a>
            </div>
          </div>
          <div class="bot_c">
            <div>
              <a
                class="bot_d"
                href="http://wpa.qq.com/msgrd?v=3&uin=1012139570&site=qq&menu=yes"
                target="_blank"
              >1012139570</a>
            </div>
            <div class="bot_e">周一至周日 10:00-23:00（限Starrer或捐赠人联系）</div>
            <div>
              <Button type="primary" ghost>在线帮助</Button>
            </div>
          </div>
        </div>
        <div class="bot_f">
          <div class="bot_g">
            Copyright ©2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属锤子科技
            <a
              @click="info(false)"
            >法律声明</a>
            <a @click="warning(false)">隐私条款</a>
            <a target="_blank" href="https://github.com/Exrick">开发者中心</a>
          </div>
          <div class="bot_h">
            <a target="_blank" href="http://www.miibeian.gov.cn/">蜀ICP备16030308号-1</a>
            <a target="_blank" href="http://www.miibeian.gov.cn/">蜀ICP证16030308号</a>
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
    info(nodesc) {
      this.$Notice.info({
        title: "法律声明",
        desc: nodesc
          ? ""
          : "此仅为个人练习开源模仿项目，仅供学习参考，承担不起任何法律问题"
      });
    },
    warning(nodesc) {
      this.$Notice.warning({
        title: "隐私条款",
        desc: nodesc
          ? ""
          : "本网站将不会严格遵守有关法律法规和本隐私政策所载明的内容收集、使用您的信息 "
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.content {
  display: flex;
  justify-content: center;
  height: 390px;
  align-items: center;
  background-color: #fafafa;
  border-top: 1px solid #e6e6e6;
}
.center {
  width: 76%;
  height: 350px;
}
.bot {
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 50px 0;
}
.bot_a {
  display: flex;
  justify-content: space-between;
  width: 68%;
}
.bot_c {
  color: #646464;
  padding: 0 0 14px;
}
.bot_b a {
  color: #969696;
  display: block;
  padding: 6px 0;
}
.bot_d {
  font-size: 30px;
  color: #646464;
}
.bot_e {
  padding: 20px 0;
  color: #c3c3c3;
}
.bot_f {
  padding-top: 40px;
}
.bot_g a {
  padding: 0 10px;
}
.bot_h {
  padding-top: 15px;
}
.bot_h a {
  color: #bdbdbd;
  margin-right: 20px;
}
</style>