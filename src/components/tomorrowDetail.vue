<template>
  <div class="tomorrowSwiper">
    
    <div class="detailTop">
      <div style="border-radius: 50%; border: 10rpx solid #7986CB;background: #C5CAE9">
        <image class="TopImage" :src="otherImage" :mode="aspectFit" />
      </div>
      <div class="TopLine">
        <div style="color: #ff9e80">明日运势</div>
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
.tomorrowSwiper {
  display: flex;
  flex-direction: column;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
