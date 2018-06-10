<template>
  <div class="tomorrowSwiper">
    <div class="detailTop">
      <image class="TopImage" :src="otherImage" :mode="aspectFit" />
      <div class="TopLine">
        <div>明日运势</div>
        <div>{{datetime}}</div>
      </div>   
    </div>

    <div class="ContentBack">
      <div class="CenterLine">
        <div>综合指数: {{all}}</div>
        <div>健康指数: {{helath}}</div>
        <div>爱情指数: {{love}}</div>
        <div>财运指数: {{money}}</div>
        <div>工作指数: {{work}}</div>
        <div>速配星座: {{QFriend}}</div>
        <div>幸运数字: {{number}}</div>
        <div>幸运色: {{color}}</div>
      </div>
      
      <div class="FooterLine">
        <div>今日概述: </div>            
        <div>{{summary}}</div>
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
  background: url(https://pic3.zhimg.com/80/cd699c0cf5f43ddfc5f1044cf549111a_hd.jpg) no-repeat;
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
