/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  sum: 0,
  studentName: '张三',
};

const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

// key 一般小写
const actions = {
  // context = { dispatch commit getters state rootGetters rootState }
  addWhenOdd(context, num) {
    if (context.state.sum % 2 === 1) {
      context.commit('ADD', num);
    }
  },
  addAfterWait(context, num) {
    setTimeout(() => {
      context.commit('ADD', num);
    }, 1000);
  },
};

// key 一般大写
const mutations = {
  ADD(state, num) {
    state.sum += num;
  },
  SUBTRACT(state, num) {
    state.sum -= num;
  },
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});

export default store;
