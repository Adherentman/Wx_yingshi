<template>
  <div class="weekSwiper">
    <div class="detailTop">
      <div style="border-radius: 50%; border: 10rpx solid #7986CB;background: #C5CAE9">
        <image class="TopImage" :src="otherImage" :mode="aspectFit" />
      </div>
      <div class="TopLine">
        <div style="color: #ff9e80">今日运势</div>
        <div v-if="datetime" style="margin-top: 70rpx; color: #c96f53">{{datetime}}</div>
        <div v-else></div>
      </div>   
    </div>

    <div>{{name}}</div>
    <div>{{date}}</div>
    <div>{{health}}</div>
    <div>{{job}}</div>
    <div>{{love}}</div>
    <div>{{money}}</div>
    <div>{{work}}</div>
  </div>
</template>

<script>
export default {
  props: ["name", "date", "health", "job", "love", "money", "work", "otherImage"]
}
</script>

<style>
.weekSwiper {
  display: flex;
  flex-direction: column;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-top: 20rpx;
}
</style>
