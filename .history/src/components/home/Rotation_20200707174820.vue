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
          <Carousel autoplay v-model="value" loop>
            <CarouselItem v-for="item in rotation" :key="item.id">
              <div class="demo-carousel">
                <div class="swiper">
                  <img v-if="item.picUrl" class="img1" :src="item.picUrl" alt />
                  <img v-if="item.picUrl2" class="img2" :src="item.picUrl2" alt />
                  <img v-if="item.picUrl3" class="img3" :src="item.picUrl3" alt />
                </div>
              </div>
            </CarouselItem>
          </Carousel>
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
        px: 0,
        py: 0,
        w: 0,
        h: 0
      }
    };
  },
  methods: {
    bgOver(e) {
      const refl = this.$refs.refl;
      refl.style.opacity = 1;
      // this.bgOpt.px = e.offsetLeft;
      // this.bgOpt.py = e.offsetTop;
      // this.bgOpt.w = e.offsetWidth;
      // this.bgOpt.h = e.offsetHeight;
    },
    bgMove(dom, eve) {
      const card = this.$refs.card;
      const refl = this.$refs.refl;

      const relX = (event.offsetX + 1) / card.offsetWidth;
      const relY = (event.offsetY + 1) / card.offsetHeight;
      const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
      const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
      card.style.transform = `perspective(500px) scale(2) ${rotY} ${rotX}`;

      const lightX = this.scale(relX, 0, 1, 150, -50);
      const lightY = this.scale(relY, 0, 1, 30, -100);
      const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
      const lightOpacity = this.scale(lightConstrain, 0.3, 1, 1, 0) * 255;
      const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
      const lightShadeBlack = `rgba(0, 0, 0, 1)`;
      refl.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`;
      // let bgOpt = this.bgOpt;
      // let X, Y;
      // let mouseX = eve.pageX - bgOpt.px;
      // let mouseY = eve.pageY - bgOpt.py;
      // if (mouseX > bgOpt.w / 2) {
      //   X = mouseX - bgOpt.w / 2;
      // } else {
      //   X = mouseX - bgOpt.w / 2;
      // }
      // if (mouseY > bgOpt.h / 2) {
      //   Y = bgOpt.h / 2 - mouseY;
      // } else {
      //   Y = bgOpt.h / 2 - mouseY;
      // }
      // dom.style["transform"] = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`;
      // dom.style.transform = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`;
    },
    bgOut(dom) {
      const card = this.$refs.card;
      const refl = this.$refs.refl;
      card.style.transform = `perspective(500px) scale(1)`;
      refl.style.opacity = 0;
      // dom.style["transform"] = "rotateY(0deg) rotateX(0deg)";
      // dom.style.transform = "rotateY(0deg) rotateX(0deg)";
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
</style>