<template>
  <div class="todaySwiper">

    <div class="detailTop">
      <div style="border-radius: 50%; border: 10rpx solid #7986CB;background: #C5CAE9">
        <image class="TopImage" :src="otherImage" :mode="aspectFit" />
      </div>
      <div class="TopLine">
        <div style="color: #ff9e80; text-align: center">今日运势</div>
        <div v-if="datetime" style="margin-top: 70rpx; color: #c96f53">{{datetime}}</div>
        <div v-else></div>
      </div>   
    </div>

    <div class="ContentBack">

      <div class="CenterLine">
        <div class="CenterLeft">
          <div v-if="all" class="Todayiconfont icon-qushi" style="color: #F06292">综合指数: {{all}}</div>
          <div v-else></div>
          <div v-if="helath" class="Todayiconfont icon-jiankang" style="color: #FF8A80">健康指数: {{helath}}</div>
          <div v-else></div>
          <div v-if="work" class="Todayiconfont icon-work" style="color: #3F51B5">工作指数: {{work}}</div>  
          <div v-else></div>
          <div v-if="QFriend" class="Todayiconfont icon-kuaisusousuo" style="color: #1976D2">速配星座: {{QFriend}}</div>
          <div v-else></div>
        </div>
        <div class="CenterRight">
          <div v-if="love" class="Todayiconfont icon-aixin" style="color: #F44336">爱情指数: {{love}}</div>
          <div v-else></div>
          <div v-if="money" class="Todayiconfont icon-qian" style="color: #F57C00">财运指数: {{money}}</div>
          <div v-else></div>
          <div v-if="color" class="Todayiconfont icon-yanliaopan" style="color: #388E3C">幸运色: {{color}}</div>    
          <div v-else></div>
          <div v-if="number" class="Todayiconfont icon-shuzishurukuang" style="color: #5E35B1">幸运数字: {{number}}</div>
          <div v-else></div>
        </div>
      </div>
      
      <div class="FooterLine">
        <div v-if="summary" class="Todayiconfont icon-zicelvemoban" style="color: #607D8B; font-size: 40rpx;">
          今日概述: 
          <br/>
          <div style="font-size: 32rpx; margin-top: 25rpx;">
          {{summary}}
          </div>
        </div>
        <div v-else></div>
      </div>

    </div>

  </div>  
</template>

<script>
export default {
  props: ["datetime", "all", "helath", "love", "money", "work", "QFriend", "number", "color", "otherImage", "summary"]
}
</script>

<style>
.todaySwiper {
  display: flex;
  flex-direction: column;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-top: 20rpx;
}

.detailTop {
  display: flex;
  height: 280rpx;
  align-items: center;
  justify-content: space-around
}

.TopImage {
  width: 300rpx;
  height: 250rpx;
}

.TopLine {
  display: flex;
  flex-direction: column;
  color: black;
  }

.CenterLine {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 35rpx;
  color: black;
  border-top: 10rpx solid #7986CB;
}

.CenterLeft {
  display: flex;
  flex-direction: column;
}

.CenterRight {
  display: flex;
  flex-direction: column;
}

.FooterLine {
  margin-top: 35rpx;
  margin-left: 70rpx;
  margin-right: 70rpx;
  margin-bottom: 50rpx;
  color: black;
  border-top: 6rpx solid #7986CB;
}

.Todayiconfont {
  font-family:"iconfont" !important;
  font-size:32rpx;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 15rpx;
}

@font-face {
  font-family: 'iconfont';  /* project id 686354 */
  src: url('//at.alicdn.com/t/font_686354_h0w1098uij6k1emi.eot');
  src: url('//at.alicdn.com/t/font_686354_h0w1098uij6k1emi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_686354_h0w1098uij6k1emi.woff') format('woff'),
  url('//at.alicdn.com/t/font_686354_h0w1098uij6k1emi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_686354_h0w1098uij6k1emi.svg#iconfont') format('svg');
}

.icon-qushifenxi:before { content: "\e60e"; }

.icon-qushi:before { content: "\e60b"; }

.icon-work:before { content: "\e6e6"; }

.icon-shuzishurukuang:before { content: "\e69c"; }

.icon-kuaisusousuo:before { content: "\e638"; }

.icon-aixin:before { content: "\e600"; }

.icon-qian:before { content: "\e609"; }

.icon-jiankang:before { content: "\e60f"; }

.icon-yanliaopan:before { content: "\e730"; }

.icon-zicelvemoban:before { content: "\e660"; }
</style>
