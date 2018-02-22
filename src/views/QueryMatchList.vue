<template>
     <el-form :inline="true" :model="formData" size="mini">
      <el-form-item label="选择时段">
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
    <el-form-item label="ID/昵称">
      <el-input v-model="formData.nick"  clearable></el-input>
    </el-form-item>
     <el-form-item label="俱乐部/牌局">
        <el-input size="mini" v-model="formData.clubName" clearable></el-input>
    </el-form-item>
     <el-form-item label="底注">
        <el-input-number size="mini" v-model="formData.bottomScore" clearable></el-input-number>
    </el-form-item>
    <el-form-item label="盈亏大于">
        <el-input-number size="mini" v-model="formData.profitLoss" clearable></el-input-number>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
   </el-form>
</template>
<script>
export default {
  name: 'querybar',
  data() {
    return {
      formData: {
        timeSpan: [],
        bottomScore: 0,
        profitLoss: 0,
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
        page: 1,
        pageSize: 14,
        startTime: this.formData.startTime,
        endTime: this.formData.endTime,
        nick: this.formData.nick,
        clubName: this.formData.clubName,
        bottomScore: this.formData.bottomScore,
        profitLoss: this.formData.profitLoss,
      };

         // 保存Query 参数
      this.$store.commit('SET_QUERY_PARAM', query);

      this.$store.dispatch('FETCH_MATCH_LIST');
    },
  },
};
</script>

