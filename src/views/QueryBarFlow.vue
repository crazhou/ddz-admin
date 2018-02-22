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
      <el-input v-model="formData.keyWords"  clearable></el-input>
    </el-form-item>
    <el-form-item label="状态">
      <el-select v-model="formData.payStatue" placeholder="请选择">
        <el-option
          v-for="item in statusList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="充值方式">
      <el-select v-model="formData.rechargeMethod" placeholder="请选择">
        <el-option
          v-for="item in payChannelList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
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
        },
        statusList: [
          { value: '0', label: '成功' },
          { value: '1', label: '失败' },
          { value: '2', label: '等待支付' },
          { value: '3', label: '关闭' },
        ],
        payChannelList: [
          { value: '0', label: '全部' },
          { value: '1', label: '微信' },
          { value: '2', label: '支付宝' },
          { value: '3', label: 'IOS内购' },
        ],
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
          keyWords: this.formData.keyWords,
          payStatue: this.formData.payStatue,
          rechargeMethod: this.formData.rechargeMethod,
        };

         // 保存Query 参数
        this.$store.commit('SET_QUERY_PARAM', query);


        this.$store.dispatch('FETCH_RECHARGE_LIST');
      },
    },
  };
</script>
