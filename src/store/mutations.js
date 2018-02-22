import _ from 'lodash';

export default {

  SET_USER_LIST: (state, { list, total }) => {
    state.userList = list;
    state.total = total;
  },
  SET_QUERY_PARAM: (state, q) => {
    state.queryParam = q;
  },
  CHANGE_PAGE: (state, page) => {
    state.queryParam.pageNum = page;
  },
  MODIFY_PARAM: (state, data) => {
    _.extend(state.queryParam, data);
  },
  SET_STAY_LIST: (state, { list, total }) => {
    state.stayList = list;
    state.total = total;
  },
  CLEAR_LIST_ALL: (state) => {
    state.stayList = [];
    state.userList = [];
    state.total = 0;
    state.queryParam = {};
    state.stayAvgData = {};

    state.costList = [];
    state.costData = {};

    state.boardList = [];
    state.boardData = {};

    state.reChargeList = [];
    state.matchList = [];

    state.rechargeData = [];

    state.clubList = [];
    state.clubCount = {};
  },
  SET_STAY_AVG: (state, data) => {
    state.stayAvgData = data;
  },

  SET_USER_DETAIL: (state, data) => {
    state.userDetail = data[0];
    state.userCareer = data[1];
    state.userClub = data[2];
    state.userProp = data[3];
  },

  SET_COST_LIST: (state, { list, total }) => {
    state.costList = list;
    state.total = total;
  },

  SET_COST_DATA: (state, data) => {
    state.costData = data || {};
  },

  SET_BOARDFEE_LIST: (state, { list, total }) => {
    state.boardList = list;
    state.total = total;
  },

  SET_BOARD_DATA: (state, data) => {
    state.boardData = data || {};
  },

  SET_RECHARGE_LIST: (state, { list, total }) => {
    state.total = total;
    state.reChargeList = list;
  },
  SET_LOGIN_DATA: (state, data) => {
    state.loginData = data;
  },
  CLEAR_LOGIN_DATA: (state) => {
    state.loginData = {};
  },
  SET_MATCH_LIST: (state, { list, total }) => {
    state.total = total;
    state.matchList = list;
  },

  SET_RECHARGE_DATA: (state, { list, total }) => {
    state.total = total;
    state.rechargeData = list;
  },

  SET_MATCH_HISTORY: (state, { list, total }) => {
    state.total = total;
    state.matchHistory = list;
  },

  SET_CLUB_DATA: (state, { list, total }) => {
    state.total = total;
    state.clubList = list;
  },

  SET_CLUB_COUNT: (state, data) => {
    state.clubCount = data;
  },

  SET_CURRENCY_LIST: (state, { list, total }) => {
    state.total = total;
    state.currencyList = list;
  },
};
