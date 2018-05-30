<template>
  <div>
    <movielist
      :movieUrl="MovieDetailModel.img"
      :movieName="MovieDetailModel.nm"
      :movieTime="MovieDetailModel.cat"
      :movieSrc="MovieDetailModel.src"
      :movieDur="MovieDetailModel.dur"
      :movieRt="MovieDetailModel.rt"
      :movieDir="MovieDetailModel.dir"
      :movieVer="MovieDetailModel.ver"
      :movieScm="MovieDetailModel.scm"
      :movieDra="DraPolt"
    >
    </movielist>

    <scroll-view scroll-x style="background-color: #EEEEEE;margin-top: 30rpx;">
    <div class="plotStar">
      演员：
      <div v-for="(item, index) in MovieStar" :key="index">
        <!-- <ul> -->
          <div class="plotStyle">{{item}}</div>
        <!-- </ul> -->
      </div>
    </div>
      </scroll-view>
  </div>
</template>

<script>
import movielist from '@/components/movielist';
import { MaoYanRequest } from '../../utils/request.js';

export default {
  async onLoad(option) {
    wx.setNavigationBarTitle({
      title: '影片详情'
    })
    this.MoiveDetails(option.id);
  },
  components: {
    movielist
  },
  data: {
    MovieDetailModel: {},
    DraPolt: '',
    MovieStar: []
  },
  methods: {
    MoiveDetails(id){
      wx.showLoading({
        title: '数据加载中',
      });
      MaoYanRequest(`movie/${id}.json`).then((data) => {
        console.log(data.data)
        this.MovieDetailModel = data.data.MovieDetailModel
        let Dra = this.MovieDetailModel.dra.replace(/<[^>]+>/g,"");
        this.DraPolt = Dra;
        let MovieStarArray = this.MovieDetailModel.star.replace(/\s+/g, '\n').split('\n');
        this.MovieStar = MovieStarArray;
        wx.hideLoading()
    })
    }
  }
}
</script>

<style>
.plotStar {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-top: 20rpx;
  padding: 30rpx;
  color: #4d4d4d;
  width: 100%;  
  display: flex;
}
.plotStyle {
  padding-right: 20rpx 
}
</style>
