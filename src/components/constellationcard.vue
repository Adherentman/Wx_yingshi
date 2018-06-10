<template>
    <div class="constellationCard">
      <image class="constellationImage" :src="imageUrl" :mode="aspectFit"/>
      <p class="constellationDate">{{date}}</p>
    </div>
</template>

<script>
export default {
  props: ["imageUrl", "date"]
}
</script>

<style>

.constellationCard {
  display: flex;
  flex-direction: column;
  width: 350rpx;
  height: 320rpx;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  border-radius: 5%;
  box-shadow: 0px 9px 0px rgb(161, 151, 150), 0px 9px 25px rgba(46, 45, 45, 0.7);
}
.constellationImage {
  border-radius: 5% 5% 0 0;
  width: 350rpx;
  height: 300rpx;
}
.constellationDate {
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
}
</style>
