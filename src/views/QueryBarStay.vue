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

    <el-form-item label="终端">
      <el-select v-model="formData.terminal" placeholder="请选择">
        <el-option
          v-for="item in terminals"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>

   <el-form-item label="渠道">
     <el-select v-model="formData.channel" placeholder="请选择">
        <el-option
          v-for="item in channels"
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
    data() {
      return {
        terminals: [
          { value: '0', label: '全部' },
          { value: '1', label: '安卓' },
          { value: '2', label: 'IOS' },
          { value: '3', label: 'H5' },
        ],
        channels: [
            { value: '0', label: '全部渠道' },
            { value: '1', label: '渠道01' },
            { value: '2', label: '渠道02' },
        ],
        formData: {
          timeSpan: [],
          terminal: '',
          channel: '',
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
          terminal: this.formData.terminal,
          channel: this.formData.channel,
          pageSize: 14,
          pageNum: 1,
        };

        // 保存Query 参数
        this.$store.commit('SET_QUERY_PARAM', query);

        // 取留存列表
        this.$store.dispatch('FETCH_STAYS');

        // 取留存平均数据
        this.$store.dispatch('FETCH_AVG_STAYS');
      },
    },
  };
</script>
