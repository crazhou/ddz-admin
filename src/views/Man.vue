<template>
    <el-container>
      <el-header>
        <div class="top-header">
            <h2>斗地主管理后台</h2>
            <div class="loginState">
              <span>{{loginData.nickName}}</span>
              <el-button type="info" plain class="logout"  @click="loginOut">退出登录</el-button>
            </div>
        </div>
      </el-header>
      <el-container class="app-wrapper">
          <el-aside class="scroll-container sidebar-container">
                <aside-menu></aside-menu>
          </el-aside>
          <router-view></router-view>
      </el-container>
    </el-container>
</template>
<script>
 import { mapState } from 'vuex';
 import AsideMenu from './AsideMenu';

 export default {
   name: 'APP',
   computed: mapState({
     loginData: state => state.loginData,
   }),
   components: {
     asideMenu: AsideMenu,
   },
   methods: {
     loginOut() {
       this.$router.push({ path: '/' });
       this.$store.commit('CLEAR_LOGIN_DATA');
     },
   },
 };
</script>
<style lang="scss">
@import '../styles/index.scss'; // 全局自定义的css样式
  .top-header{
    background-color:#333;
    color:#fff;
    height: 60px;
    box-sizing: border-box;
    padding: 10px;
    h2{
      float: left;
    }
  }
  .mt10 {
    margin-top:10px;
  }
  .app-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    .scroll-container{
        -webkit-transition: width 0.28s;
        transition: width 0.28s;
        width: 180px !important;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
    }
  }
  .loginState,{
    float: left;
    margin-left: 2%;
    .logout{
      margin-left: 10px;
    }
  }
</style>
