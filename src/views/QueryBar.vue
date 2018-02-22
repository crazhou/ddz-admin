<template>
  <el-form :inline="true" :model="formData" size="mini">
  <el-form-item label="注册时间">
     <el-date-picker
      v-model="formData.timeSpan"
      value-format="yyyy-MM-dd"
      type="daterange"
      range-separator="至"
      v-on:change="setDateRange"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </el-form-item>
  <el-form-item label="用户ID">
    <el-input v-model="formData.userId" placeholder="请输入用户ID" clearable></el-input>
  </el-form-item>
  <el-form-item label="用户昵称">
    <el-input v-model="formData.nick" placeholder="请输入用户昵称" clearable></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        formData: {
          timeSpan: [],
          userId: '',
          nick: '',
          startTime: '',
          endTime: '',
        },
      };
    },
    methods: {
      setDateRange(a) {
        this.formData.startTime = a[0];
        this.formData.endTime = a[1];
      },
      onSubmit() {
        // 查询参数
        const query = {
          startTime: this.formData.startTime,
          endTime: this.formData.endTime,
          nick: this.formData.nick,
          userId: this.formData.userId,
          pageSize: 14,
          pageNum: 1,
        };
        // 保存Query 参数
        this.$store.commit('SET_QUERY_PARAM', query);

        // 取用户列表
        this.$store.dispatch('FETCH_USERS');
      },
    },
};
</script>
