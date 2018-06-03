<template>
    <div class="card">
      <image :src="imageUrl" class="card-media" :mode="aspectFit"/>
      <div class="card-content">
        <p class="card-title">{{cardTitle}}</p>
        <p class="movie-score">评分: {{score}}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: ['score', 'cardTitle', 'imageUrl']
}
</script>

<style>
  .card {
    display: flex;
    flex-direction: column;
    margin: 10rpx;
    width: 300rpx;
  }

  .card-media {
    width: 300rpx;
    height: 390rpx;
  }

  .card-content {
    position: absolute;
    text-align: center;
    top: 260rpx;
    width: 300rpx;
    height: 140rpx;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #F5F5F5;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .card-title {
    font-weight: 500;
    font-size: 30rpx;
  }
  
  .movie-score {
    font-size: 30rpx;
  }
</style>
