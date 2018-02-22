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
      <el-input v-model="formData.nickId"  clearable></el-input>
    </el-form-item>
    <el-form-item label="分类">
      <el-select v-model="formData.type" placeholder="请选择">
        <el-option
          v-for="item in types"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="积分/钻石大于">
        <el-input-number size="mini" v-model="formData.amount"></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-switch
        v-model="formData.currencyType"
        active-color="#409EFF"
        inactive-color="#13CE66"
        active-text="按钻石"
        @change="changeCur"
        inactive-text="按积分">
      </el-switch>
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
        types: [
          { value: '0', label: '充值' },
          { value: '1', label: '修改昵称' },
          { value: '2', label: '牌局' },
          { value: '3', label: '购买VIP' },
          { value: '4', label: '赠送' },
          { value: '5', label: '创建俱乐部' },
          { value: '6', label: '创建牌局服务费' },
          { value: '7', label: '房间逾期退还' },
          { value: '8', label: '积分买入' },
          { value: '9', label: '积分返还' },
          { value: '10', label: '房间结算' },
          { value: '11', label: '领取成就' },
          { value: '12', label: '房间续时' },
          { value: '13', label: '创建私密牌局服务费' },
          { value: '14', label: '私密房间续时' },
          { value: '15', label: '抽水' },
        ],
      };
    },
    methods: {
      setDateRange(a) {
        this.formData.startTime = a[0];
        this.formData.endTime = a[1];
      },
      changeCur(b) {
        this.$store.commit('MODIFY_PARAM', {
          currencyType: b ? 2 : 1,
        });
        this.$store.dispatch('FETCH_USER_COST');

        this.$emit('changecurtype', b);
      },
      onSubmit() {
        const query = {
          page: 1,
          pageSize: 14,
          startTime: this.formData.startTime,
          endTime: this.formData.endTime,
          nickId: this.formData.nickId,
          type: this.formData.type,
          currencyType: this.formData.currencyType ? 2 : 1,
          amount: this.formData.amount,
        };

       // 保存Query 参数
        this.$store.commit('SET_QUERY_PARAM', query);

      // 取留存列表
        this.$store.dispatch('FETCH_USER_COST');

      // 取时间段内的留存数据
        this.$store.dispatch('FETCH_COST_TOTAL');
      },
    },
  };
</script>
