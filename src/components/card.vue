<template>
    <div class="card">
      <image :src="imageUrl" class="card-media" :mode="widthFix"/>
      <div class="card-content">
        <h1 class="card-title">{{cardTitle}}</h1>
        <p class="card-p">{{text}}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: ['text', 'cardTitle', 'imageUrl']
}
</script>
<style>
  .card {
    display: flex;
    flex-direction: column;
    border: 1rpx solid gray;
    border-radius: 0 0 4% 4%;
    /* box-shadow: 20rpx 10rpx 10rpx #A0A0A0; */
    margin: 10rpx;
    width: 300rpx;
    height: 250rpx;
  }
  .card-media {
    width: 300rpx;
    height: 250rpx;
  }
  .card-content {
    position: absolute;
    top: 160rpx;
    width: 300rpx;
    height: 90rpx;
    background-color: rgba(238, 238, 238, 0.3);
  }
  .card-title {
    font-weight: 900;
  }
  .card-p {
    white-space: nowrap;
    font-size: 30rpx
  }
</style>
