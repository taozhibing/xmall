<template>
  <div>
    <div class="rotation">
      <div class="t-rotation">
        <div
          class="bg"
          ref="bg"
          @mouseover="bgOver($refs.bg)"
          @mousemove="bgMove($refs.bg,$event)"
          @mouseout="bgOut($refs.bg)"
        >
          <transition name="fade">
            <Carousel autoplay v-model="value" loop>
              <CarouselItem v-for="item in rotation" :key="item.id">
                <div class="demo-carousel">
                  <div class="swiper">
                    <img v-if="item.picUrl" class="img1 a" :src="item.picUrl" alt />
                    <img v-if="item.picUrl2" class="img2 b" :src="item.picUrl2" alt />
                    <img v-if="item.picUrl3" class="img3 c" :src="item.picUrl3" alt />
                  </div>
                </div>
              </CarouselItem>
            </Carousel>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    rotation: {
      type: Array,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {
      value: 0,
      bgOpt: {
        // 偏移初始赋值
        px: 0,
        py: 0,
        w: 0,
        h: 0
      }
    };
  },
  methods: {
    bgOver(e) {
      this.bgOpt.px = e.offsetLeft; // 向左偏移
      this.bgOpt.py = e.offsetTop; // 向上偏移
      this.bgOpt.w = e.offsetWidth; // 偏移宽度
      this.bgOpt.h = e.offsetHeight; // 偏移高度
    },
    bgMove(dom, eve) {
      let bgOpt = this.bgOpt;
      let X, Y;
      let mouseX = eve.pageX - bgOpt.px;
      let mouseY = eve.pageY - bgOpt.py;
      if (mouseX > bgOpt.w / 2) {
        X = mouseX - bgOpt.w / 2;
      } else {
        X = mouseX - bgOpt.w / 2;
      }
      if (mouseY > bgOpt.h / 2) {
        Y = bgOpt.h / 2 - mouseY;
      } else {
        Y = bgOpt.h / 2 - mouseY;
      }
      console.log(X);
      console.log(Y);
      dom.style["transform"] = `rotateY(${X / 45}deg) rotateX(${Y / 45}deg)`;
      dom.style.transform = `rotateY(${X / 45}deg) rotateX(${Y / 45}deg)`;
    },
    bgOut(dom) {
      dom.style["transform"] = "rotateY(0deg) rotateX(0deg)";
      dom.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.rotation {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.t-rotation {
  width: 77%;
  height: 500px;
}
.bg {
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  transform: rotateY(0deg) rotateX(0deg);
}
.swiper {
  position: relative;
  height: 500px;
  cursor: pointer;
}
.swiper img {
  position: absolute;
}
.img1 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.img2 {
  bottom: 5px;
  left: 55px;
  background-size: 95% 100%;
}
.img3 {
  display: block;
  position: absolute;
  border-radius: 10px;
}
.a {
  z-index: 20;
  transform: translateZ(40px);
}

.b {
  z-index: 20;
  transform: translateZ(30px);
}

.c {
  transform: translateZ(0px);
}
</style>