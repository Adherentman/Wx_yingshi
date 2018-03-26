<template>
  <div class="container">
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" class="swiper">
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="swiper-image" :mode="widthFix"/>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrls: [
      '../../../static/images/swiper/1.jpg',
      '../../../static/images/swiper/2.jpg',
      '../../../static/images/swiper/3.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.swiper {
  height: 500rpx;
}
.swiper-image{
  width: 100%;
}
</style>