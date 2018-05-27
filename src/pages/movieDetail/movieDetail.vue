<template>
  <div>
    {{MovieDetailModel}}
  </div>
</template>

<script>
import { MaoYanRequest } from '../../utils/request.js';

export default {
  async onLoad(option){
    this.MoiveDetails(option.id);
  },
  data: {
    MovieDetailModel: {}
  },
  methods: {
    MoiveDetails(id){
      MaoYanRequest(`movie/${id}.json`).then((data) => {
        console.log(data.data)
        this.MovieDetailModel = data.data.MovieDetailModel
    })
    }
  }
}
</script>

<style>

</style>
