<template>
  <form @submit="formSubmit" report-submit>
    <view>
      <view>input:</view>
      <input name="input" placeholder="please input here" focus="true"/>
    </view>
      <button form-type="submit">Submit!!</button>
  </form>
</template>

<script>
export default {
  data () {
  },
  methods: {
    formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.mp.detail.value)
  }
  },
  
}
</script>

<style>
</style>