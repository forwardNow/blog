/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    school: {
      namespaced: true,
      state: {
        name: '家里蹲',
      },
      getters: {
        fullName(state) {
          return `湖北${state.name}大学`;
        },
      },
      mutations: {
        UPDATE_NAME(state, value) {
          state.name = value;
        },
      },
      actions: {
        update(context, value) {
          if (value.trim()) {
            context.commit('UPDATE_NAME', value);
          }
        },
      },
    },

    person: {
      namespaced: true,
      state: {
        name: '张三',
      },
      getters: {
        fullName(state) {
          return `法外狂徒${state.name}`;
        },
      },
      mutations: {
        UPDATE_NAME(state, value) {
          state.name = value;
        },
      },
      actions: {
        update(context, value) {
          if (value.trim()) {
            context.commit('UPDATE_NAME', value);
          }
        },
      },
    },
  },
});

export default store;
