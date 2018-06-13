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

  <div>
    <div class="card-header">
      <div class="card-header-line-left">——————</div>
      <h1 class="card-header-h1">正 在 热 映</h1>
      <div class="card-header-line-right">——————</div>
    </div>
    <scroll-view scroll-x class="card-paper">
      <div class="cards">
        <div v-for="(item, index) in movieInfo" :key="index">
          <div @click="getMoiveDetails(item.id)">
            <card :score="item.sc" :cardTitle="item.nm" :imageUrl="item.img"/>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
 </div>
</template>

<script>
import card from '@/components/card';
import { MaoYanRequest } from '../../utils/request.js';

export default {
  async onLoad(){
    this.getMovieList();
  },
  data () {
    return {
      imgUrls: [
        'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/1.jpg',
        'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/2.jpg',
        'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/3.jpeg',
        'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/4.jpg'
      ],
      movieInfo: [],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500
    }
  },
  methods: {
    getMovieList(){
      wx.showLoading({
        title: '数据加载中',
      })
      MaoYanRequest('movie/list.json', {type: 'hot', offset: '0', limit: '1000'}).then((data) => {
        this.movieInfo = data.data.movies;
        wx.hideLoading()
      })
    },
    getMoiveDetails(id){
      wx.navigateTo({
        url: `../movieDetail/main?id=${id}`,
      })
    }
  },
  components: {
    card,
  }
}
</script>

<style>
.swiper {
  height: 450rpx;
}

.swiper-image {
  width: 100%;
}

.card-header {
  display: flex;
  justify-content: center;
  padding: 20rpx
}

.card-header-h1 {
  font-weight: 600;
}

.card-header-line-left {
  display: flex;
  margin-right: 30rpx;
  color: rgb(184, 181, 181);
}

.card-header-line-right {
  display: flex;
  margin-left: 30rpx;
  color: rgb(184, 181, 181);
}

.cards {
  display: flex;
}

.card-paper {
  width: 100%;
}
</style>