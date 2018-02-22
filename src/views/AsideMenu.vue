<template>
    <el-menu background-color="#304156" text-color="#fff" active-text-color="#409EFF" >
      <el-submenu index="1" >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>斗地主</span>
        </template>
        <el-menu-item   v-for="(item, index) in MenuList" :key="item.path"  :class="{active:index==menuId}" :index="item.path">
          <router-link :to="{path:'/man' + item.path}">{{item.text}}</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
</template>
<script>
export default {
  name: 'AsideMenu',
  props: ['menuId'],
  data() {
    return { MenuList: [
      { text: '用户查询', path: '/userList' },
      { text: '积分钻石', path: '/credits' },
      { text: '货币统计', path: '/currencyList' },
      { text: '充值流水', path: '/rechargeList' },
      { text: '充值统计', path: '/rechargeData' },
      { text: '牌局记录', path: '/boardRecord' },
      { text: '牌局统计', path: '/boardHistory' },
      { text: '抽水', path: '/boardFee' },
      { text: '留存', path: '/stayUsers' },
      { text: '俱乐部',path: '/clubData'}
    ],
    };
  },
};
</script>
<style lang="scss">
.el-aside {
  height: 100%;
  background-color: #304156;
}
.el-menu .is-active a {
  color:inherit;
}
.el-aside li {
  a {
    color:#fff;
    display: block;
    &.active{
      background:#001528
    }
  }

}

</style>
