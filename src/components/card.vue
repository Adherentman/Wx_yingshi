<template>
  <div class="cards">
    <div class="card-media">
      <image :src="imageUrl"/>
    </div>
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
  .cards {
    width: 300px;
    height: 300px;
  }
  .card-media {
    width: 50px;
    height: 60px;
  }
</style>
