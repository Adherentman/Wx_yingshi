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
      <monthDetail
        :otherImage="otherImage"
        :all="monthDetails.all"
        :date="monthDetails.date"
        :health="monthDetails.health"
        :love="monthDetails.love"
        :money="monthDetails.money"
        :work="monthDetails.work"
      />
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
import monthDetail from '../../components/monthDetail';

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
    await this.getYear(option.name);
    this.isload = true;
    wx.hideLoading();
  },
  components: {
    todayDetail,
    tomorrowDetail,
    weekDetail,
    monthDetail
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
      monthDetails: {
        date:"2016年12月",
        name:"白羊座",
        all:"本月运势有两个重要的节点，一个是在上旬，水星进入事业宫，更加关注事业发展，目标性加强；而金星随之离开事业宫，原先的经验不能再为你赢得加分，反而是人脉上。。。",/*综合运势*/
        happyMagic:"",
        health:"上旬和中旬，运动能量高，适合开展锻炼计划，尤其是练习耐力的运动。下旬，水逆开启，出行要小心意外了.",
        love:"现实的比较太累，你更喜欢朋友式的轻松相处，如果和爱人之间做不到，你会更眷恋友人的陪伴。因而本月“友情已达，恋人未满”的状况，会有更大的发生几率。",
        money:"人际生财，多往人气旺的地方是有利打听到财富资讯，广开财路的。虽然人际开销也会增多，但可以当做是投资。",
        month: 12,
        work:"本月的目标性和计划性都很强，两个阶段的区别在于行动力。上旬和中旬，行动力分散，下旬，行动力足够，但受水逆影响，意外多"
      },
      yearDetails: {
        "name":"白羊座",
        "date":"2016年",
        "year":2016,
        "resultcode":"200",
        "error_code":0,
        "mima":{/*年度密码*/
          "info":"变身完成的调整之年",/*概述*/
          "text":[/*说明*/
            "2016年将会是白羊座暂时放缓节奏，开始调整个人生活作息以及细分工作内容的一年。土星来到射手座对白羊座而言实际属于利好，让你们可以更加客观地看待当下面临的问题，并根据现状调整预期，为今后相当长一段时间（可能影响未来10年）做好最合适的计划和目..."
          ]
        },
        "career":[/*事业运*/
          "土星的移位意味着你们的工作重心会有所转移，从前的忙乱筹备已经落实到目标更加明确的层面。对创业者而言，前景目标相对比较明确，只要按预期计划踏踏实实执行下去就可以。你也可以将更多精力投入于长远规划以及专业研究、发行出版、异域涉外等方面去，都会获得行业认可的业绩，在相关行业崭露头角，奠定行业地位。自由职业者则有机会产出一些惊为天人的作品，叫....."
        ],
        "love":[/*感情运*/
          "上半年，木星仍然停留在白羊座的恋爱宫，感情将继续精彩纷呈，尤其容易与旧人擦出火花，展开异地恋情，同学聚会及老友聚会都是桃花高爆区域，也要小心计划外怀孕。单身人士不乏追求对象，尤其在3月间可能出现让自己一见钟情的人，但极有可能只是昙花一现的惊心动魄，更像是一场因果牵引的缘分重聚。4月上旬到中旬则是另一个值得注意的时段，有对象的个人在这两段时间都容...."
        ],
        "finance":[/*财运*/
          "上半年木星落在投资宫，会给你们带来很好的偏财运。但年后开始的一个月，......."
        ],
      },
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
        // this.yearDetails = data;
      }).catch(err => {
        console.log(err)
      });
    }
  }
}
</script>

<style>


</style>
