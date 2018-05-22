<template>
    <div class="card">
      <image :src="imageUrl" class="card-media"/>
      <div class="card-content">
        <p>{{text}}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: ['text', 'imageUrl']
}
</script>
<style>
  .card {
    display: flex;
    flex-direction: column;
    border: 1rpx solid gray;
    box-shadow: 20rpx 10rpx 10rpx #A0A0A0;
    width: 350rpx;
    height: 350rpx;
  }
  .card-media {
    width: 350rpx;
    height: 350rpx;
  }
</style>
