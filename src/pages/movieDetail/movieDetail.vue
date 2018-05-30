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
    <div class="plotPanels">
      <div v-for="(item, index) in MovieStar" :key="index">
        <ul>
          <li>{{item}}</li>
        </ul>
      </div>
    </div>
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
.plotPanels {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-top: 20rpx;
  background-color: #EEEEEE;
  color: #4d4d4d;
  text-align: justify;
  padding: 30rpx;
}
</style>
