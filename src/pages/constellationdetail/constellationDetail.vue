<template>
  <swiper :indicator-dots="true"  style="height: 1200rpx;">
    <!-- 今日 -->
    <swiper-item>
      <todayDetail
        :otherImage="otherImage"
        :datetime="todayDetail.datetime"
        :all="todayDetail.all"
        :helath="todayDetail.helath"
        :love="todayDetail.love"
        :money="todayDetail.money"
        :work="todayDetail.work"
        :QFriend="todayDetail.QFriend"
        :number="todayDetail.number"
        :color="todayDetail.color"
        :summary="todayDetail.summary"
      />
    </swiper-item>

    <!-- 明天 -->
    <swiper-item>
      <div class="tomorrowSwiper">
        <div class="detailTop">
          <image class="TopImage" :src="otherImage" :mode="aspectFit" />
          <div class="TopLine">
            <div>明日运势</div>
            <div>{{tomorrowDetail.datetime}}</div>
          </div>   
        </div>

        <div class="ContentBack">
          <div class="CenterLine">
            <div>综合指数: {{tomorrowDetail.all}}</div>
            <div>健康指数: {{tomorrowDetail.helath}}</div>
            <div>爱情指数: {{tomorrowDetail.love}}</div>
            <div>财运指数: {{tomorrowDetail.money}}</div>
            <div>工作指数: {{tomorrowDetail.work}}</div>
            <div>速配星座: {{tomorrowDetail.QFriend}}</div>
            <div>幸运数字: {{tomorrowDetail.number}}</div>
            <div>幸运色: {{tomorrowDetail.color}}</div>
          </div>
          
          <div class="FooterLine">
            <div>今日概述: </div>            
            <div>{{tomorrowDetail.summary}}</div>
          </div>

        </div>
      </div>
    </swiper-item>

    <!-- 本周 -->
    <swiper-item>
      <div class="weekSwiper">
        <div class="detailTop">
          <image class="TopImage" :src="otherImage" :mode="aspectFit" />
          <div class="TopLine">
            <div>本周运势</div>
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
            <div>今日概述: </div>            
            <div>{{detail.summary}}</div>
          </div>

        </div>
      </div>
    </swiper-item>

    <!-- 本月 -->
    <swiper-item>
      <div class="monthSwiper">
        <div class="detailTop">
          <image class="TopImage" :src="otherImage" :mode="aspectFit" />
          <div class="TopLine">
            <div>本月运势</div>
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
            <div>今日概述: </div>            
            <div>{{detail.summary}}</div>
          </div>

        </div>
      </div>
    </swiper-item>

    <!-- 今年 -->
    <swiper-item>
      <div class="yearSwiper">
        <div class="detailTop">
          <image class="TopImage" :src="otherImage" :mode="aspectFit" />
          <div class="TopLine">
            <div>今年运势</div>
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
            <div>今日概述: </div>            
            <div>{{detail.summary}}</div>
          </div>

        </div>
      </div>
    </swiper-item>
  </swiper>
</template>

<script>
import { constellationRequest } from '../../utils/request.js';
import todayDetail from '../../components/todayDetail';

export default {
  async onLoad(option) {
    wx.setNavigationBarTitle({
      title: "星座详情"
    });
    
    console.log(option.name, option.type, option.image)
    this.otherImage = option.image;
    await this.getToday(option.name, option.type);
    await this.getTomorrow(option.name);
    await this.getWeek(option.name);
    await this.getMonth(option.name);
    await this.getYear(option.name);
  },
  components: {
    todayDetail
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
      },
      todayDetail: {},
      tomorrowDetail: {},
      weekDetail: {},
      monthDetail: {},
      yearDetail: {}
    }
  },
  methods: {
    getToday(name, type) {
      console.log(name. type, '名字，类型')
      constellationRequest(`&consName=${name}&type=${type}`).then(data => {
        console.log(data, 'today')
        this.todayDetail = data;
      }).catch(err => {
        console.log(err)
      });
    },
    getTomorrow(name) {
      constellationRequest(`&consName=${name}&type=tomorrow`).then(data => {
        console.log(data, 'tomorrow')
        this.tomorrowDetail = data;
      }).catch(err => {
        console.log(err)
      });
    },
    getWeek(name) {
      constellationRequest(`&consName=${name}&type=week`).then(data => {
        console.log(data, 'week')
        this.weekDetail = data;
      }).catch(err => {
        console.log(err)
      });
    },
    getMonth(name) {
      constellationRequest(`&consName=${name}&type=month`).then(data => {
        console.log(data, 'month')
        this.monthDetail = data;
      }).catch(err => {
        console.log(err)
      });
    },
    getYear(name) {
      constellationRequest(`&consName=${name}&type=year`).then(data => {
        console.log(data, 'year')
        this.yearDetail = data;
      }).catch(err => {
        console.log(err)
      });
    }
  }
}
</script>

<style>
.todaySwiper {
  display: flex;
  flex-direction: column;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background: url(https://pic3.zhimg.com/80/cd699c0cf5f43ddfc5f1044cf549111a_hd.jpg) no-repeat;
  background-size: 100% 100%;
}

.tomorrowSwiper {
  display: flex;
  flex-direction: column;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background: url(https://pic2.zhimg.com/80/00030ba3d076c8833ed749e23f87a109_hd.jpg) no-repeat;
  background-size: 100% 100%;
}

.weekSwiper {
  display: flex;
  flex-direction: column;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background: url(https://pic1.zhimg.com/80/c9eda3e7989e584290e8de7f04f2a33c_hd.jpg) no-repeat;
  background-size: 100% 100%;
}

.monthSwiper {
  display: flex;
  flex-direction: column;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background: url(https://pic2.zhimg.com/80/90789f97d5f7079e019ae2bd4c4ad321_hd.jpg) no-repeat;
  background-size: 100% 100%;
}

.yearSwiper {
  display: flex;
  flex-direction: column;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background: url(https://pic1.zhimg.com/80/f02441a52bca0c96df4a51015d98b8fc_hd.jpg) no-repeat;
  background-size: 100% 100%;
}

.detailTop {
  display: flex;
  height: 350rpx;
  align-items: center;
  justify-content: space-around
}

.TopImage {
  width: 300rpx;
  height: 230rpx;
}

.TopLine {
  display: flex;
  flex-direction: column;
  color: #F5F5F5;
  }

.CenterLine {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 35rpx;
  color: #F5F5F5;
}

.FooterLine {
  margin: 35rpx;
  color: #F5F5F5;
}
</style>
