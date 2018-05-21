<template>
 <div class="container">
  <div>
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" class="swiper">
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="swiper-image" :mode="widthFix"/>
        </swiper-item>
      </block>
    </swiper>
  </div>
  <div class="cards">
    <card :text="test" :imageUrl="imageUri"/>
    <card :text="test"/>
    <card :text="test"/>
  </div>
 </div>
</template>

<script>
import card from '@/components/card';

export default {
  data () {
    return {
      imgUrls: [
      '../../../static/images/swiper/1.jpg',
      '../../../static/images/swiper/2.jpg',
      '../../../static/images/swiper/3.jpg',
      'http://img2.imgtn.bdimg.com/it/u=4000104790,3741910670&fm=27&gp=0.jpg'
      ],
      test: 'im a card component',
      imageUri: 'http://img2.imgtn.bdimg.com/it/u=4000104790,3741910670&fm=27&gp=0.jpg',
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500
    }
  },
  methods: {
  },
  components:{
    card
  }
}
</script>

<style>
.swiper {
  height: 500rpx;
}
.swiper-image {
  width: 100%;
}
.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>