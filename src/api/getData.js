import axios from 'axios';
import _ from 'lodash';
import md5 from 'md5';

/* eslint-disable no-param-reassign */
function filterObj(o) {
  _.each(o, (e, i) => {
    if (e === '') { delete o[i]; }
  });
}
/*
 *登录
 */
/* eslint-disable func-names */
function login(query) {
  return axios({
    method: 'post',
    url: '/usercenter/api/v1/user/login',
    data: {
      account: query.account,
      password: md5(query.password).toUpperCase(),
      authCode: 8888,
      loginType: 1,
    },
    transformRequest: [function (data) {
        // Do whatever you want to transform the data
      const ret = [];
      for (const it in data) {
        ret.push(`${encodeURIComponent(it)}=${encodeURIComponent(data[it])}`);
      }
      return ret.join('&');
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}
/*
 * 取用户信息
 */
function fetchUsers(query) {
  return axios.get('/api/player/list', {
    params: query,
  });
}

/*
 * 取用户留存列表
 */
function fetchStay(query) {
  query.page = query.pageNum;
  filterObj(query);
  return axios.get('/api/summary/list', {
    params: query,
  });
}

/*
 * 一段时间内的用户留存平均值
 */
function fetchStayAvg(query) {
  filterObj(query);
  return axios.get('/api/summary/count', {
    params: query,
  });
}

/*
 * 取用户的详细信息
 */
function fetchUser(id) {
  return axios.get('/api/player/info', {
    params: { userId: id },
  });
}

function fetchUserCareer(id) {
  return axios.get('/api/player/career', {
    params: { userId: id },
  });
}

function fetchUserClub(id) {
  return axios.get('/api/player/club', {
    params: { userId: id },
  });
}

function fetchUserProp(id) {
  return axios.get('/api/player/prop', {
    params: { userId: id },
  });
}
/*
 * 取用户的消费记录
 */
function fetchUserCostList(query) {
  query.page = query.pageNum;
  filterObj(query);
  return axios.get('/api/consumptionLog/list', {
    params: query,
  });
}
/*
 * 取全部用户在时间段的消费汇总
 */
function fetchUserCostTotal(query) {
  filterObj(query);
  return axios.get('/api/consumptionLog/count', {
    params: query,
  });
}

function fetchPumpList(query) {
  query.page = query.pageNum;
  filterObj(query);
  return axios.get('/api/match/pumpList', {
    params: query,
  });
}

function fetchPumpTotal(query) {
  filterObj(query);
  return axios.get('/api/match/countPump', {
    params: query,
  });
}

function fetchRechargeList(query) {
  filterObj(query);
  return axios.get('/api/rechargetFlow/selectRechargeFlowInfo', {
    params: query,
  });
}

function fetchMatchList(query) {
  filterObj(query);
  query.page = query.pageNum;
  return axios.get('/api/match/list', {
    params: query,
  });
}

function fetchRechargeData(query) {
  filterObj(query);
  query.page = query.pageNum;
  return axios.get('/api/rechargeSummary/list', {
    params: query,
  });
}

function fetchMatchHistory(query) {
  filterObj(query);
  query.page = query.pageNum;
  return axios.get('/api/taskPlayCards/list', {
    params: query,
  });
}

/*
* 俱乐部日志列表
*/
function fetchClub(query) {
  filterObj(query);
  query.page = query.pageNum;
  return axios.get('/api/clubLog/list', {
    params: query,
  });
}
/*
* 俱乐部日志统计
*/
function fetchClubCount(query) {
  filterObj(query);
  return axios.get('/api/clubLog/count', {
    params: query,
  });
}

function fetchCurrencyList(query) {
  filterObj(query);
  query.page = query.pageNum;
  return axios.get('/api/currencySummary/list', {
    params: query,
  });
}

export {
  login,
  fetchUsers,
  fetchStay,
  fetchUser,
  fetchUserCareer,
  fetchUserClub,
  fetchUserProp,
  fetchStayAvg,
  fetchUserCostList,
  fetchUserCostTotal,

  fetchPumpList,
  fetchPumpTotal,

  fetchRechargeList,

  fetchMatchList,
  fetchRechargeData,

  fetchMatchHistory,

  fetchClub,
  fetchClubCount,

  fetchCurrencyList,
};
