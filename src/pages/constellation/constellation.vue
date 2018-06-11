<template>
  <div class="constellationContent" v-if="isLoad">
    <div v-for="(item, index) in TwelveConstellations" :key="index">
      <div @click="getTodayConstellation(item.name, item.type, item.image2)">
        <constellationcard
          :imageUrl="item.image"
          :date="item.date"
        />
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<script>
import constellationcard from '../../components/constellationcard';

export default {
  async onLoad(){
    wx.showLoading({
      title: '数据加载中',
    });
    this.isLoad = true;
    wx.hideLoading();
  },
  components: {
    constellationcard,
  },
  data() {
    return {
      TwelveConstellations: [
        { name: '白羊座', image: 'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/baiyang.jpg', date: '3.21 —— 4.19', type: 'today', image2: "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/baiyang.png" },
        { name: '金牛座', image: 'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/jinniu.jpg', date: '4.20 —— 5.20', type: 'today', image2: "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/jinniu.png" },
        { name: '双子座', image: 'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/shuangzi.jpg', date: '5.21 —— 6.21', type: 'today', image2: "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/shuangzi.png" },
        { name: '巨蟹座', image: 'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/juxie.jpg', date: '6.22 —— 7.22', type: 'today', image2: "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/juxie.png" },
        { name: '狮子座', image: 'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/shizi.jpg', date: '7.23 —— 8.22', type: 'today', image2: "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/shizi.png" },
        { name: '处女座', image: 'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/chunv.jpg', date: '8.23 —— 9.22', type: 'today', image2: "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/chunv.png" },
        { name: '天秤座', image: 'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/tiancheng.jpg', date: '9.23 —— 10.23', type: 'today', image2: "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/tiancheng.png" },
        { name: '天蝎座', image: 'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/tianxie.jpg', date: '10.24 —— 11.22', type: 'today', image2: "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/tianxie.png" },
        { name: '射手座', image: 'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/sheshou.jpg', date: '11.23 —— 12.21', type: 'today', image2: "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/sheshou.png" },
        { name: '摩羯座', image: 'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/mojie.jpg', date: '12.22 —— 1.19', type: 'today', image2: "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/mojie.png" },
        { name: '水瓶座', image: 'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/shuiping.jpg', date: '1.20 —— 2.18', type: 'today', image2: "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/shuiping.png" },
        { name: '双鱼座', image: 'https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/shuangyu.jpg', date: '2.19 —— 3.20', type: 'today', image2: "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/wechat/shuangyu.png" },
      ],
      isLoad: false
    }
  },
  methods: {
    getTodayConstellation(name, type, image2){
      wx.navigateTo({
        url: `../constellationdetail/main?name=${name}&type=${type}&image=${image2}`,
      })
    }
  },
}
</script>

<style>
.constellationContent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>