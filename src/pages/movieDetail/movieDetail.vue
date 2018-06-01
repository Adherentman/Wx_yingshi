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
          <div class="plotStyle">{{item}}</div>
        </div>
      </div>
    </scroll-view>

    <div v-for="(item, index) in CommentResModel" :key="index">
      <div class="comment-card">
        <div class="comment-header">
          <image class="comment-avatar" :mode="aspectFit" :src="[CommentResModel[index].avatarurl ? CommentResModel[index].avatarurl : defautAvatar]"/>
          <p>{{CommentResModel[index].nickName}}</p>
        </div>
        <div class="comment-main">
        </div>
        <div class="comment-footer">
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import movielist from "@/components/movielist";
import { MaoYanRequest } from "../../utils/request.js";

export default {
  async onLoad(option) {
    wx.setNavigationBarTitle({
      title: "影片详情"
    });
    this.MoiveDetails(option.id);
  },
  components: {
    movielist
  },
  data: {
    MovieDetailModel: {},
    DraPolt: "",
    MovieStar: [],
    CommentResModel: {},
    defautAvatar:
      "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/defAvatar.jpg"
  },
  methods: {
    MoiveDetails(id) {
      wx.showLoading({
        title: "数据加载中"
      });
      MaoYanRequest(`movie/${id}.json`).then(data => {
        console.log(data.data);
        this.MovieDetailModel = data.data.MovieDetailModel;
        this.CommentResModel = data.data.CommentResponseModel.hcmts;
        let Dra = this.MovieDetailModel.dra.replace(/<[^>]+>/g, "");
        this.DraPolt = Dra;
        let MovieStarArray = this.MovieDetailModel.star
          .replace(/\s+/g, "\n")
          .split("\n");
        this.MovieStar = MovieStarArray;
        wx.hideLoading();
      });
    }
  }
};
</script>

<style>
.plotStar {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-top: 20rpx;
  padding: 30rpx;
  color: #4d4d4d;
  width: 100%;
  display: flex;
}
.plotStyle {
  padding-right: 20rpx;
}
.comment-card {
  display: flex;
  flex-direction: column;
  margin-top: 10rpx;
  border: 1px solid black;
  height: 250rpx;
}
.comment-header {
  display: flex;
  flex: 1;
}
.comment-main {
  display: flex;
  flex: 2;
}
.comment-footer {
  display: flex;
  flex: 1;
}
.comment-avatar {
  width: 90rpx;
  height: 90rpx;
  border-radius: 50%;
}
</style>
