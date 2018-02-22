import {
  fetchUsers,
  fetchStay,
  fetchStayAvg,
  fetchUser,
  fetchUserCareer,
  fetchUserClub,
  fetchUserProp,
  fetchUserCostList,
  fetchUserCostTotal,
  fetchPumpList,
  fetchPumpTotal,
  fetchRechargeList,
  login,
  fetchMatchList,
  fetchRechargeData,
  fetchMatchHistory,
  fetchClub,
  fetchClubCount,
  fetchCurrencyList,
} from '../api/getData';
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/*
 * 异步获取数据
 */
export default {
  USER_LOGIN: ({ commit }, data) => login(data),
  FETCH_USERS: ({ commit, dispatch, state }) => {
    fetchUsers(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_USER_LIST', resp.data.data);
      }
    });
  },
  FETCH_STAYS: ({ commit, dispatch, state }) => {
    fetchStay(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_STAY_LIST', resp.data.data);
      }
    });
  },

  FETCH_AVG_STAYS: ({ commit, dispatch, state }) => {
    fetchStayAvg(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_STAY_AVG', resp.data.data);
      }
    });
  },
  // 用户画像相关数据 , 一共四组数据
  FETCH_USER_DETAIL: ({ commit, dispatch, state }, id) => {
    Promise.all([
      fetchUser(id),
      fetchUserCareer(id),
      fetchUserClub(id),
      fetchUserProp(id),
    ]).then((resp) => {
      if (resp.length === 4) {
        const newval = resp.map((item) => {
          if (item.status === 200) return item.data.data;
        });
        commit('SET_USER_DETAIL', newval);
      }
    }).catch(() => {
      console.log('请求数据出错！');
    });
  },
  // 获取用户消费记录
  FETCH_USER_COST: ({ commit, dispatch, state }) => {
    fetchUserCostList(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_COST_LIST', resp.data.data);
      }
    });
  },

  FETCH_COST_TOTAL: ({ commit, dispatch, state }) => {
    fetchUserCostTotal(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_COST_DATA', resp.data.data);
      }
    });
  },

  FETCH_BOARD_FEE: ({ commit, dispatch, state }) => {
    fetchPumpList(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_BOARDFEE_LIST', resp.data.data);
      }
    });
  },

  FETCH_BOARD_COUNT: ({ commit, dispatch, state }) => {
    fetchPumpTotal(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_BOARD_DATA', resp.data.data);
      }
    });
  },

  FETCH_RECHARGE_LIST: ({ commit, dispatch, state }) => {
    fetchRechargeList(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_RECHARGE_LIST', resp.data.data);
      }
    });
  },

  FETCH_MATCH_LIST: ({ commit, dispatch, state }) => {
    fetchMatchList(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_MATCH_LIST', resp.data.data);
      }
    });
  },

  FETCH_RECHARGE_DATA: ({ commit, dispatch, state }) => {
    fetchRechargeData(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_RECHARGE_DATA', resp.data.data);
      }
    });
  },

  FETCH_MATCH_HISTORY: ({ commit, dispatch, state }) => {
    fetchMatchHistory(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_MATCH_HISTORY', resp.data.data);
      }
    });
  },


  FETCH_MATCH_CLUB: ({ commit, dispatch, state }) => {
    fetchClub(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_CLUB_DATA', resp.data.data);
      }
    });
  },

  FETCH_CLUB_COUNT: ({ commit, dispatch, state }) => {
    fetchClubCount(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_CLUB_COUNT', resp.data.data);
      }
    });
  },

  FETCH_CURRENCY_LIST: ({ commit, dispatch, state }) => {
    fetchCurrencyList(state.queryParam).then((resp) => {
      if (resp.status === 200 && resp.data) {
        commit('SET_CURRENCY_LIST', resp.data.data);
      }
    });
  },
};
