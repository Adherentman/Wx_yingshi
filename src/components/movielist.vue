<template>
  <div class="mvdcontent">
    <div class="topDeatils">
      <div class="deatilsLeft">
        <image :src="movieUrl" :mode="aspectFit" class="deatilImg"/>
      </div>
      <div class="detailsRight">
        <div style="color: white">{{movieName}}</div>
        <div>{{movieTime}}</div>
        <div>{{movieSrc}} | {{movieDur}} 分钟</div>
        <div>{{movieRt}}</div>
        <div>导演:  {{movieDir}}</div>
        <div>影厅:  {{movieVer}}</div>
      </div>
    </div>
    <div class="plotPanels">
      <div class="plotScm">
        剧情：
        <br/>
        {{movieScm}}
      </div>
    </div>
    <div class="plotPanels">
      <div class="plotScm">
        演员：
        <br/>
        {{movieStar}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movieUrl', 'movieName', 'movieTime', 'movieSrc', 'movieDur', 'movieRt', 'movieDir', 'movieVer', 'movieScm', 'movieStar'],
}
</script>

<style>
.mvdcontent {
  display: flex;
  flex-direction: column;
}
.topDeatils {
  display: flex;
  flex-direction: row;
  background-color: #212121;
  width: 100%;
  height: 400rpx;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.deatilImg {
  width: 250rpx;
  height: 350rpx;
  justify-content: center;
}
.deatilsLeft {
  width: 280rpx;
  padding-top: 30rpx;
  padding-left: 30rpx;
  padding-right: 20rpx;
}
.detailsRight {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 20rpx;
  font-size: 35rpx;
  color: #757575;
}
.plotPanels {
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-top: 20rpx;
  background-color: #EEEEEE;
  color: #4d4d4d;
  text-align: justify;
  padding: 30rpx;
}
.plotScm {
}
</style>

