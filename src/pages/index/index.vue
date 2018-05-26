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
    <h1 class="card-header-h1">风 格 展 示</h1>
    <div class="card-header-line-right">——————</div>
    </div>
    <scroll-view scroll-x class="card-paper">
      <div class="cards">
        <card :text="text" :cardTitle="cardTitle" :imageUrl="imageUrl1"/>
        <card :text="text" :cardTitle="cardTitle" :imageUrl="imageUrl2"/>
        <card :text="text" :cardTitle="cardTitle" :imageUrl="imageUrl3"/>
        <card :text="text" :imageUrl="imageUri"/>
      </div>
    </scroll-view>
  </div>
 </div>
</template>

<script>
import card from '@/components/card';

export default {
  data () {
    return {
      imgUrls: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527093817815&di=e072692acb088b0fd5f909bee1049ea1&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170622%2F7be767f5d0704db0bfef500f5e14188a_th.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527688561&di=b90b2acd20ba442ce131893ebf66862c&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1409%2F29%2Fc0%2F39107107_1411954214699_mthumb.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527093872525&di=67f47d5fc9dd3c3ce7fafb2ac7bb166d&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F12%2F39%2F15%2F10958PICYjb.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527688604&di=0cc0b74a3790bd45ff42e972c268f668&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F5440b3b2ef0f5.jpg'
      ],
      text: 'im a card component',
      imageUrl1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527688604&di=0cc0b74a3790bd45ff42e972c268f668&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F5440b3b2ef0f5.jpg',
      imageUrl2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527688561&di=b90b2acd20ba442ce131893ebf66862c&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1409%2F29%2Fc0%2F39107107_1411954214699_mthumb.jpg',
      imageUrl3: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527093817815&di=e072692acb088b0fd5f909bee1049ea1&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170622%2F7be767f5d0704db0bfef500f5e14188a_th.png',
      cardTitle: 'Title',
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500
    }
  },
  created: function(){
    // wx.request({
    //   url: 'http://web.juhe.cn:8080/constellation/getAll',
    //   data: {
    //     consName: '摩羯座',
    //     type: 'today',
    //     key: '3a5ff573b32b8e645e5692181f06313f'
    //   },
    //   success: function(res){
    //     console.log(res.data)
    //   }
    // })
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
  height: 350rpx;
}
.swiper-image {
  width: 100%;
}
.card-header {
  display: flex;
  justify-content: center;
  padding: 30rpx
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