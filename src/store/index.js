import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';    // 异步方式取数据并 commit mutation
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);
/* eslint-disable import/prefer-default-export */
export function createStore() {
  return new Vuex.Store({
    state: {
      userList: [],
      queryParam: {},
      total: 0,

      stayList: [],
      stayAvgData: {},

      userDetail: {},
      userCareer: {},
      userClub: {},
      userProp: {},

      costList: [],
      costData: {},

      // 牌座抽水
      boardList: [],
      boardData: {},

      reChargeList: [],

      // 牌局记录
      matchList: [],

      // 充值统计
      rechargeData: [],
      // 登录态
      loginData: {},

      // 牌局历史
      matchHistory: [],

      // 俱乐部
      clubList: [],
      // 俱乐部统计
      clubCount: {},

      // 货币汇总
      currencyList: [],

    },
    actions,
    mutations,
    getters,
  });
}
