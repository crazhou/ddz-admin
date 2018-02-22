import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const UserListView = () => import('../views/UserList');
const StayUserView = () => import('../views/StayUser');
const User = () => import('../views/User');
const UserCostlist = () => import('../views/UserCost');
const BoardFee = () => import('../views/BoardFee');
const LoginView = () => import('../views/Login');
const ManView = () => import('../views/Man.vue');
// 充值流水
const RechargeFlow = () => import('../views/RechargeFlow');

// 每日充值统计
const RechargeData = () => import('../views/RechargeData');

// 牌局记录
const MatchList = () => import('../views/MatchList');

// 牌局统计
const MatchHistory = () => import('../views/MatchHistory');

// 俱乐部
const ClubData = () => import('../views/ClubList');

/* eslint-disable import/prefer-default-export */
// 货币统计
const CurrencyList = () => import('../views/CurrencyList');

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: true,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        redirect: '/login',
      },
      {
        path: '/man',
        component: ManView,
        children: [
          { path: '', component: UserListView },
          { path: 'userList', name: 'userlist', component: UserListView },
          { path: 'stayUsers', component: StayUserView },
          { path: 'user/:userId', name: 'user', component: User },
          { path: 'credits', name: 'costlist', component: UserCostlist },
          { path: 'boardFee', name: 'boardfee', component: BoardFee },
          { path: 'rechargeList', name: 'recharge', component: RechargeFlow },
          { path: 'rechargeData', name: 'rechargedata', component: RechargeData },
          { path: 'boardRecord', name: 'boardrecord', component: MatchList },
          { path: 'boardHistory', name: 'boardhistory', component: MatchHistory },
          { path: 'clubData', name: 'clubData', component: ClubData },
          { path: 'currencyList', name: 'currencylist', component: CurrencyList },
        ],
      },
      {
        path: '/login',
        name: 'loginpage',
        component: LoginView,
        props: { menuid: 10 },
      },
    ],
  });
}
