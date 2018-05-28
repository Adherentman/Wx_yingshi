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
      :movieStar="MovieDetailModel.star"
    >
    </movielist>
  </div>
</template>

<script>
import movielist from '@/components/movielist';
import { MaoYanRequest } from '../../utils/request.js';

export default {
  async onLoad(option) {
    this.MoiveDetails(option.id);
  },
  components: {
    movielist
  },
  data: {
    MovieDetailModel: {},
    DraPolt: ''
  },
  methods: {
    MoiveDetails(id){
      MaoYanRequest(`movie/${id}.json`).then((data) => {
        console.log(data.data)
        this.MovieDetailModel = data.data.MovieDetailModel
        let Dra = this.MovieDetailModel.dra.replace(/<[^>]+>/g,"");
        this.DraPolt = Dra;
    })
    }
  }
}
</script>

<style>

</style>
