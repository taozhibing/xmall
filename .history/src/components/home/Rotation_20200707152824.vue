<template>
  <div>
    <div class="rotation">
      <div class="t-rotation">
        <Carousel autoplay v-model="value" loop>
          <CarouselItem v-for="item in rotation" :key="item.id">
            <div class="demo-carousel">
              <div class="swiper">
                <img class="img1" :src="item.picUrl" alt />
                <img class="img2" :src="item.picUrl2" alt />
                <img class="img3" :src="item.picUrl3" alt />
              </div>
            </div>
          </CarouselItem>
        </Carousel>
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
      value : 0
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
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>