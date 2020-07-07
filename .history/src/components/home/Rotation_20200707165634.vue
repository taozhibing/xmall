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
            <CarouselItem
              v-for="item in rotation"
              :key="item.id"
              @click="linkTo(item)"
              @mouseover="stopTimer"
              @mouseout="startTimer"
            >
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
        },
    };
  },
  methods: {},
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