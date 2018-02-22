<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">
      <h3 class="title">斗地主管理后台</h3>
      <el-form-item prop="account">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="account" type="text" v-model="loginForm.account" autoComplete="on" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on"
          placeholder="请输入密码">
          </el-input>
      </el-form-item>
        <el-form-item prop="authCode">
        <span class="svg-container">
          <svg-icon icon-class="authCode" />
        </span>
        <el-input name="authCode" @keyup.enter.native="handleLogin" v-model="loginForm.authCode"  style="width:60%;" placeholder="请输入验证码"></el-input>
        <img :src="imgSrc" alt="验证码" @click="changeImg" class="imgCode">
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        authCode: '',
      },
      imgSrc: 'http://192.168.1.203:7777/usercenter/api/v1/user/getAuthCode',
      loading: false,
      pwdType: 'password',
    };
  },
  methods: {
    handleLogin() {
      const pro = this.$store.dispatch('USER_LOGIN', this.loginForm);
      const that = this;
      pro.then((resp) => {
        if (resp.status === 200 && resp.data.number === '0') {
          that.$store.commit('SET_LOGIN_DATA', resp.data.data);

          that.$router.push({ path: '/man/userList' });
        }
      }).catch((err) => {
        console.log('登录失败---', err);
      });
    },
    changeImg() {
      const index = this.imgSrc.indexOf('?');
      const pUrl = index > 0 ? this.imgSrc.slice(0, index) : this.imgSrc;
      this.imgSrc = `${pUrl}?${Date.now()}`;
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "src/styles/mixin.scss";
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  body{
    margin: 0;
    padding: 0;
  }
  .login-container {
    @include relative;
    height: 100vh;
    background-color: $bg;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select:none;
    }
    .thirdparty-button{
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
    .imgCode{
      vertical-align: middle;
    }
  }
</style>
