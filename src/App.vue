<template>
    <div id="app">
     <router-view></router-view>
    </div>
</template>
<script>
  export default {
    name: 'app',
  };
</script>
<style lang="scss">
@import './styles/index.scss'; // 全局自定义的css样式
  .top-header{
    background-color:#333;
    color:#fff;
    height: 60px;
    box-sizing: border-box;
    padding: 10px;
  }
  .mt10 {
    margin-top:10px;
  }
.summary-bar {
  padding: 10px;
  border: 1px solid #f0faf0;
  color:#a0a0a0;
  &> span {
    margin-left:20px;
  }
}
.summary-bar .em-data{
  color:#E5BC1C
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
  .scroll-wrapper{
    position: absolute;
    width: 100% !important;
    top: 0;
  }
    .el-menu{
    border-right:none;
  }
  .el-main{
    margin-left: 180px;
  }
}
</style>
