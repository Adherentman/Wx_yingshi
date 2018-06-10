<template>
  <swiper :indicator-dots="true"  style="height: 1000rpx;">
    <swiper-item>
      <div class="detailSwiper">
        <div class="detailTop">
          <image class="TopImage" :src="otherImage" :mode="aspectFit" />
          <div class="TopLine">
            <div>今日运势</div>
            <div>{{detail.datetime}}</div>
          </div>   
        </div>
        <div class="ContentBack">
          <div class="CenterLine">
            <div>综合指数: {{detail.all}}</div>
            <div>健康指数: {{detail.helath}}</div>
            <div>爱情指数: {{detail.love}}</div>
            <div>财运指数: {{detail.money}}</div>
            <div>工作指数: {{detail.work}}</div>
            <div>速配星座: {{detail.QFriend}}</div>
            <div>幸运数字: {{detail.number}}</div>
            <div>幸运色: {{detail.color}}</div>
          </div>
          
          <div class="FooterLine">
            <div>今日概述: {{detail.summary}}</div>            
          </div>
      </div>
    </div>
    </swiper-item>
  </swiper>
</template>

<script>
import { constellationRequest } from '../../utils/request.js';

export default {
  async onLoad(option) {
    wx.setNavigationBarTitle({
      title: "星座详情"
    });
    
    console.log(option.name, option.type, option.image)
    this.otherImage = option.image;
    // this.getToday(option.name, option.type);
  },
  data() {
    return {
      otherImage: '',
      detail: {
        QFriend: "射手座",
        all: "20%",
        color: "黄色",
        datetime: "2018年06月09日",
        helath: "60%",
        love: "20%",
        money: "20%",
        name: "摩羯座",
        number: 0,
        summary: "有些思考的小漩涡，可能让你忽然的放空，生活中许多的细节让你感触良多，五味杂陈，常常有时候就慢动作定格，想法在某处冻结停留，陷入一阵自我对话的沉思之中，这个时候你不喜欢被打扰或询问，也不想让某些想法曝光，个性变得有些隐晦",
        work: "20%"
      }
    }
  },
  methods: {
    getToday(name, type){
      console.log(name. type, '名字，类型')
      constellationRequest(`&consName=${name}&type=${type}`).then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      });
    },
  }
}
</script>

<style>
.detailSwiper {
  display: flex;
  flex-direction: column;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background: #757575;
}

.detailTop {
  display: flex;
  height: 350rpx;
  align-items: center;
  justify-content: space-around
}

.TopImage {
  width: 450rpx;
  height: 350rpx;
}

.TopLine {
  display: flex;
  flex-direction: column;
  width: 300rpx;
  }

.CenterLine {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30rpx;
  color: white;
}
.ContentBack {
  background: #757575;
}
.FooterLine {
  color: white
}
</style>
