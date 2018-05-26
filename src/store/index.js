import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    a: '11'
  },
  mutations: {
    
  }
})

Vue.prototype.$store = store

export default store