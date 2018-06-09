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
      <div class="plotDetail">
        <div @click="clickShow">
          剧情：{{movieScm}}
            <div class="Listiconfont icon-xiajiantou" v-if="isShowing"></div>
            <div v-else></div>
            <div :animation="animationData">
              <div v-if="isShowing"></div>
              <div v-else>
                {{movieDra}}
              </div>
            </div>
        </div>
      </div>
    </div>
    {{children}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      isShowing: true,
      animationData: {}
    }
  },
  props: [
    'movieUrl',
    'movieName',
    'movieTime',
    'movieSrc',
    'movieDur',
    'movieRt',
    'movieDir',
    'movieVer',
    'movieScm',
    'movieDra',
    ],
  methods: {
    clickShow(){
      this.isShowing = !this.isShowing;
      // let animation = wx.createAnimation({
      //   duration: 2000,
      //   timingFunction: "ease",
      //   delay: 0,
      //   transformOrigin: "50% 50%"
      // });
      //   this.animation = animation;
      //   animation.translateY(5).step()
      //   animation.translateY(-1).step()
      //   this.animationData = animation.export()
    },
  }
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
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-top: 35rpx;
  background-color: #EEEEEE;
  color: #4d4d4d;
  text-align: justify;
  padding: 30rpx;
}

@font-face {
  font-family: 'iconfont';  /* project id 686354 */
  src: url('//at.alicdn.com/t/font_686354_kbwb262tbuik9.eot');
  src: url('//at.alicdn.com/t/font_686354_kbwb262tbuik9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_686354_kbwb262tbuik9.woff') format('woff'),
  url('//at.alicdn.com/t/font_686354_kbwb262tbuik9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_686354_kbwb262tbuik9.svg#iconfont') format('svg');
}

.Listiconfont {
  font-family: "iconfont" !important;
  font-size: 22px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  margin-top: 10rpx;
  color: #26A69A;
}

.icon-xiajiantou:before { content: "\e62c"; }

.icon-shangjiantou:before { content: "\e62d"; }

.icon-huifu:before { content: "\e60d"; }

.icon-star:before { content: "\e60c"; }

.icon-dianzan:before { content: "\e613"; }
</style>

