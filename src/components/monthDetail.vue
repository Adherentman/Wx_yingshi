<template>
  <div class="monthSwiper">

    <div class="detailTop">
      <div style="border-radius: 50%; border: 10rpx solid #7986CB;background: #C5CAE9">
        <image class="TopImage" :src="otherImage" :mode="aspectFit" />
      </div>
      <div class="TopLine">
        <div style="color: #ff9e80; text-align: center">本月运势</div>
        <div v-if="date" style="margin-top: 70rpx; color: #c96f53; font-size:30rpx;">{{date}}</div>
        <div v-else></div>
      </div>   
    </div>

    <div class="monthAllBlock" v-if="all">
      <div class="monthiconfont icon-zicelvemoban" style="color: #03A9F4">综合运势：{{all}}</div>
    </div>
    <div v-else></div>
    <div class="monthWeekLine"></div>

    <div class="monthHealthBlock" v-if="health">
      <div class="monthiconfont icon-jiankang" style="color: #FF8A80">健康：{{health}}</div>
    </div>
    <div v-else></div>
    <div class="WeekLine"></div>

    <div class="monthLoveBlock" v-if="love">
      <div class="monthiconfont icon-aixin" style="color: #F44336">爱情：{{love}}</div>
    </div>
    <div v-else></div>
    <div class="WeekLine"></div>

    <div class="monthMoneyBlock" v-if="money">
      <div class="monthiconfont icon-qian" style="color: #F57C00">财运：{{money}}</div>
    </div>
    <div v-else></div>
    <div class="WeekLine"></div>

    <div class="monthWorkBlock" v-if="work">
      <div class="monthiconfont icon-work" style="color: #3F51B5">工作：{{work}}</div>
    </div>
    <div v-else></div>

  </div>
</template>

<script>
export default {
  props: ["all", "happyMagic", "date", "health", "love", "money", "work", "otherImage"]
}
</script>

<style>
.monthSwiper {
  display: flex;
  flex-direction: column;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-top: 20rpx;
}

.monthAllBlock {
  margin-top: 35rpx;
  border-top: 5rpx solid #607d8b;
}

.monthAllBlock div {
  margin-left: 70rpx;
  margin-right: 70rpx;
}

.monthHealthBlock {
  margin-top: 35rpx;
  margin-left: 70rpx;
  margin-right: 70rpx;
}

.monthJobBlock {
  margin-top: 30rpx;
  margin-left: 70rpx;
  margin-right: 70rpx;
}

.monthLoveBlock {
  margin-top: 30rpx;
  margin-left: 70rpx;
  margin-right: 70rpx;
}

.monthMoneyBlock {
  margin-top: 30rpx;
  margin-left: 70rpx;
  margin-right: 70rpx;
}

.monthWorkBlock {
  margin-top: 30rpx;
  margin-left: 70rpx;
  margin-right: 70rpx;
}

.monthWeekLine {
  width: 200rpx;
  margin-top: 10rpx;
  margin-left: 70rpx;
  margin-right: 70rpx;
  border-top: 5rpx solid #607d8b;
}

.monthiconfont {
  font-family:"iconfont" !important;
  font-size:28rpx;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
