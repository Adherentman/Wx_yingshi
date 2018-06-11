<template>
  <swiper :indicator-dots="true"  style="height: 1200rpx;" v-if="isload">
    <!-- 今日 -->
    <swiper-item>
      <todayDetail
        :otherImage="otherImage"
        :datetime="detail.datetime"
        :all="detail.all"
        :helath="detail.helath"
        :love="detail.love"
        :money="detail.money"
        :work="detail.work"
        :QFriend="detail.QFriend"
        :number="detail.number"
        :color="detail.color"
        :summary="detail.summary"
      />
    </swiper-item>

    <!-- 明天 -->
    <swiper-item>
      <tomorrowDetail
        :otherImage="otherImage"
        :datetime="tomorrowDetails.datetime"
        :all="tomorrowDetails.all"
        :helath="tomorrowDetails.helath"
        :love="tomorrowDetails.love"
        :money="tomorrowDetails.money"
        :work="tomorrowDetails.work"
        :QFriend="tomorrowDetails.QFriend"
        :number="tomorrowDetails.number"
        :color="tomorrowDetails.color"
        :summary="tomorrowDetails.summary"
      />
    </swiper-item>

    <!-- 本周 -->
    <swiper-item>
      <div class="weekSwiper">
        <weekDetail
          :otherImage="otherImage"
          :name="weekDetails.name"
          :date="weekDetails.date"
          :health="weekDetails.health"
          :job="weekDetails.job"
          :love="weekDetails.love"
          :money="weekDetails.money"
          :work="weekDetails.work"
        />
      </div>
    </swiper-item>

    <!-- 本月 -->
    <swiper-item>
      <div class="monthSwiper">
        
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
  <div v-else></div>
</template>

<script>
import { constellationRequest } from '../../utils/request.js';
import todayDetail from '../../components/todayDetail';
import tomorrowDetail from '../../components/tomorrowDetail';
import weekDetail from '../../components/weekDetail';

export default {
  async onLoad(option) {
    wx.setNavigationBarTitle({
      title: "星座详情"
    });

    wx.showLoading({
      title: '数据加载中',
    });

    console.log(option.name, option.type, option.image)
    this.otherImage = option.image;
    // await this.getToday(option.name, option.type);
    // await this.getTomorrow(option.name);
    // await this.getWeek(option.name);
    // await this.getMonth(option.name);
    // await this.getYear(option.name);
    this.isload = true;
    wx.hideLoading();
  },
  components: {
    todayDetail,
    tomorrowDetail,
    weekDetail
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
        number: 2,
        summary: "有些思考的小漩涡，可能让你忽然的放空，生活中许多的细节让你感触良多，五味杂陈，常常有时候就慢动作定格，想法在某处冻结停留，陷入一阵自我对话的沉思之中，这个时候你不喜欢被打扰或询问，也不想让某些想法曝光，个性变得有些隐晦",
        work: "20%",
      },
      isload: false,
      todayDetails: {},
      tomorrowDetails: {},
      weekDetails: {
        name: "白羊座",
        date: "2014年06月29日-2014年07月05日",
        weekth: 27,
        health: "健康：内心有焦躁，但身体拒绝过劳求舒适。容易有胃部不适。",
        job: "求职：虽有新想法，但心态求稳当，容易低就。但较有可能从家人处获得的机会。",
        love: "恋情：之前积累的想法和感受，本周选择说出来。沟通机会增多，亦有可能以争吵的方式出现。单身的，在聚会闲谈中可望获得更多缘分。",
        money: "财运：虽有自己的理财想法，但总体受控于家人或家族的财务计划。受木星支撑，有机会得到家人的支援。但是土逆仍然显示你有债务加大的风险。置业房产出现时机，较大可能是家人出首期，你来月供。",
        work: "工作：水逆在本周结束，之前耽误、错过的出现弥补机会。职场进入休整状态，有调部门或岗位的可能。",
      },
      monthDetails: {},
      yearDetails: {},
    }
  },
  methods: {
    getToday(name, type) {
      console.log(name. type, '名字，类型')
      constellationRequest(`&consName=${name}&type=${type}`).then(data => {
        console.log(data, 'today')
        this.todayDetails = data;
      }).catch(err => {
        console.log(err)
      });
    },
    getTomorrow(name) {
      constellationRequest(`&consName=${name}&type=tomorrow`).then(data => {
        console.log(data, 'tomorrow')
        this.tomorrowDetails = data;
      }).catch(err => {
        console.log(err)
      });
    },
    getWeek(name) {
      constellationRequest(`&consName=${name}&type=week`).then(data => {
        console.log(data, 'week')
        this.weekDetails = data;
      }).catch(err => {
        console.log(err)
      });
    },
    getMonth(name) {
      constellationRequest(`&consName=${name}&type=month`).then(data => {
        console.log(data, 'month')
        this.monthDetails = data;
      }).catch(err => {
        console.log(err)
      });
    },
    getYear(name) {
      constellationRequest(`&consName=${name}&type=year`).then(data => {
        console.log(data, 'year')
        this.yearDetails = data;
      }).catch(err => {
        console.log(err)
      });
    }
  }
}
</script>

<style>


</style>
