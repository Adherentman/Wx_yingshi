<template>
  <div class="weekSwiper">

    <div class="detailTop">
      <div style="border-radius: 50%; border: 10rpx solid #7986CB;background: #C5CAE9">
        <image class="TopImage" :src="otherImage" :mode="aspectFit" />
      </div>
      <div class="TopLine">
        <div style="color: #ff9e80; text-align: center">本周运势</div>
        <div v-if="date" style="margin-top: 70rpx; color: #c96f53; font-size:30rpx;">{{date}}</div>
        <div v-else></div>
      </div>   
    </div>

    <div class="HealthBlock" v-if="health">
      <div class="weekiconfont icon-jiankang" style="color: #FF8A80">{{health}}</div>
    </div>
    <div v-else></div>

    <div class="JobBlock" v-if="job">
      <div class="weekiconfont icon-work" style="color: #1976D2">{{job}}</div>
    </div>
    <div v-else></div>

    <div class="LoveBlock" v-if="love">
      <div class="weekiconfont icon-aixin" style="color: #F44336">{{love}}</div>
    </div>
    <div v-else></div>

    <div class="MoneyBlock" v-if="money">
      <div class="weekiconfont icon-qian" style="color: #F57C00">{{money}}</div>
    </div>
    <div v-else></div>

    <div class="WorkBlock" v-if="work">
      <div class="weekiconfont icon-work" style="color: #3F51B5">{{work}}</div>
    </div>
    <div v-else></div>

  </div>
</template>

<script>
export default {
  props: ["date", "health", "job", "love", "money", "work", "otherImage"]
}
</script>

<style>
.weekSwiper {
  display: flex;
  flex-direction: column;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-top: 20rpx;
}

.HealthBlock {
  margin-top: 35rpx;
  margin-left: 70rpx;
  margin-right: 70rpx;
  border-right: 5rpx solid #607d8b;
}

.JobBlock {
  margin-top: 30rpx;
  margin-left: 70rpx;
  margin-right: 70rpx;
  border-left: 5rpx solid #607d8b;
}

.LoveBlock {
  margin-top: 30rpx;
  margin-left: 70rpx;
  margin-right: 70rpx;
  border-right: 5rpx solid #607d8b;
}

.MoneyBlock {
  margin-top: 30rpx;
  margin-left: 70rpx;
  margin-right: 70rpx;
  border-left: 5rpx solid #607d8b;
}

.WorkBlock {
  margin-top: 30rpx;
  margin-left: 70rpx;
  margin-right: 70rpx;
  border-right: 5rpx solid #607d8b;
}

.WeekLine {
  width: 200rpx;
  margin-top: 10rpx;
  margin-left: 70rpx;
  margin-right: 70rpx;
  border-top: 5rpx solid #607d8b;
}

.weekiconfont {
  font-family:"iconfont" !important;
  font-size:30rpx;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
