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

    <video :src="MovieDetailModel.vd" autoplay style="width: 100%; height: 400rpx; margin-top: 35rpx;" />

    <div style="background-color: #EEEEEE;">
      <div class="plotStar">
        <div>
          演员：
        </div>
        <div class="plotStyle">
          <div v-for="(item, index) in MovieStar" :key="index" style="padding-left: 30rpx">
            {{item}}
          </div>
        </div>
      </div>
    </div>
    
    <div style="margin-top: 35rpx;">
      <div style="border-bottom: 5rpx solid #26A69A;">
        <div style="margin-bottom: 25rpx; font-size: 45rpx;">短评</div>
      </div>
    </div>
    
    <div v-if="CommentResModel.length !== 0">
      <div v-for="(item, index) in CommentResModel" :key="index">
        <div class="comment-card">

          <div class="comment-header">
            <image class="comment-avatar" :mode="aspectFit" :src="[CommentResModel[index].avatarurl ? CommentResModel[index].avatarurl : defautAvatar]"/>
            <div class="comment-nameAndScore">
              <p class="comment-nickname">{{CommentResModel[index].nickName}}</p>
              <div class="commentScoreIconfont icon-star">
                <p style="font-size: 30rpx; magrin-left: 30rpx; color: black">{{CommentResModel[index].score * 2}}</p>
              </div>
            </div>
          </div>

          <div class="comment-main">
            <div class="comment-content">{{CommentResModel[index].content}}</div>
          </div>

          <div class="comment-footer">
            <div class="comment-time">{{CommentResModel[index].time}}</div>
            <div class="comment-content2">
              <div class="comment-approve commentApproveIconfont icon-dianzan">{{CommentResModel[index].approve}}</div>
              <div class="comment-reply commentReplyIconfont icon-huifu">{{CommentResModel[index].reply}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>暂无评论！</div>
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
    // this.MoiveDetails(option.id);
  },
  components: {
    movielist
  },
  data() {
    return {
      MovieDetailModel: {},
      DraPolt: "",
      MovieStar: [],
      CommentResModel: {},
      defautAvatar:
        "https://blogaaaaxzh.oss-cn-hangzhou.aliyuncs.com/defAvatar.jpg"
    }
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
  margin-top: 35rpx;
  padding: 30rpx;
  color: #4d4d4d;
  display: flex;
  flex-direction: column;
}

.plotStyle {
  display: flex;
  flex-wrap: wrap;
}

.comment-card {
  display: flex;
  flex-direction: column;
  margin-top: 35rpx;
  height: 100%;
}

.comment-header {
  display: flex;
}

.comment-main {
  display: flex;
}

.comment-footer {
  display: flex;
  justify-content: space-between;
}

.comment-avatar {
  width: 90rpx;
  height: 90rpx;
  border-radius: 50%;
}

.comment-nameAndScore {
  display: flex;
  flex-direction: column;
}

.comment-nickname {
  font-size: 30rpx;
  margin-left: 20rpx;
}

.commentScoreIconfont {
  display: flex;
  flex-direction: row;
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 20rpx;
  color: #FFC107;
}

.commentApproveIconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #EF5350;
}
.commentReplyIconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 20rpx;
  color: #2196F3

}
.comment-content {
  margin-left: 110rpx;
  font-size: 28rpx;
}

.comment-time {
  font-size: 25rpx;
  margin-top: 30rpx;
  margin-left: 110rpx;
  border-bottom: 5rpx solid #26A69A;
}

.comment-content2{
  display: flex;
  margin-top: 20rpx;
  font-size: 30rpx;
}
</style>
