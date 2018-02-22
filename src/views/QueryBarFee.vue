<template>
  <el-form :inline="true" :model="formData" size="mini">
  <el-form-item label="选择时段">
     <el-date-picker
      v-model="formData.timeSpan"
      value-format="yyyy-MM-dd"
      type="daterange"
      range-separator="至"
      @change="setDateRange"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </el-form-item>
  <el-form-item label="用户ID/昵称">
      <el-input v-model="formData.nick"  clearable></el-input>
  </el-form-item>
    <el-form-item label="俱乐部ID/名字">
      <el-input v-model="formData.clubName"  clearable></el-input>
    </el-form-item>
    <el-form-item label="底注">
      <el-input-number v-model="formData.bottomScore"></el-input-number>
    </el-form-item>
    <el-form-item label="抽水大于">
       <el-input-number v-model="formData.pump"></el-input-number>
    </el-form-item>
     <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
   </el-form>
</template>
<script>
  export default {
    name: 'queryBar',
    data() {
      return {
        formData: {
          timeSpan: [],
          bottomScore: 1,
        },
      };
    },
    methods: {
      setDateRange(a) {
        this.formData.startTime = a[0];
        this.formData.endTime = a[1];
      },
      onSubmit() {
        const query = {
          pageNum: 1,
          pageSize: 14,
          startTime: this.formData.startTime,
          endTime: this.formData.endTime,
          nick: this.formData.nick,
          clubName: this.formData.clubName,
          bottomScore: this.formData.bottomScore,
          pump: this.formData.pump,
        };


         // 保存Query 参数
        this.$store.commit('SET_QUERY_PARAM', query);

        // 取留存列表
        this.$store.dispatch('FETCH_BOARD_FEE');

        // 取时间段内的留存数据
        this.$store.dispatch('FETCH_BOARD_COUNT');
      },

    },
  };
</script>
