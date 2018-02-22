<template>
  <el-main>
    <query-bar></query-bar>
      <data-table :table-data="rechargeData" :columns="columns" :type="listType"></data-table>
      <el-pagination class="mt10"
        background
        @current-change="handleCurrentChange"
        :page-size="query.pageSize"
        layout="total, prev, pager, next"
        :current-page="query.pageNum"
        :total="total">
      </el-pagination>
  </el-main>
</template>
<script>
 import { mapState } from 'vuex';
 import QueryBar from './QueryBarRechargeData';
 import DataTable from './DataTable';

export default {
   name: 'rechargeData',
   components: {
     queryBar: QueryBar,
     dataTable: DataTable,
   },
   computed: mapState({
     rechargeData: state => state.rechargeData,
     query: state => state.queryParam,
     total: state => state.total,
   }),
   data() {
     return {
       listType: 'rechargeData',
       columns: [
          { prop: 'time', name: '日期', width: 100 },
          { prop: 'totalRecharge', name: '日充值额', width: 100 },
          { prop: 'payUserNum', name: '日付费用户', width: 100 },
          { prop: 'newPayUser', name: '新增付费用户', width: 150 },
          { prop: 'appru', name: '日ARPPU', width: 100 },
          { prop: 'payPenetration', name: '付费渗透率', width: 150 },
          { prop: 'integralSale', name: '积分销售', width: 100 },
          { prop: 'masonrySale', name: '钻石销售', width: 100 },
          { prop: 'monthCard', name: '月卡', width: 100 },
          { prop: 'seasonCard', name: '季卡', width: 100 },
          { prop: 'yearCard', name: '年卡', width: 100 },
          { prop: 'channel', name: '渠道', width: null },
          { prop: 'terminal', name: '终端', width: null },
       ],
     };
   },
   methods: {
     handleCurrentChange(page) {
       this.$store.commit('CHANGE_PAGE', page);

        // 取用户列表
       this.$store.dispatch('FETCH_RECHARGE_DATA');
     },
   },

};
</script>

