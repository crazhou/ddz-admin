<template>
      <el-main>
      <query-bar></query-bar>
      <data-table :table-data="reChargeList" :columns="columns"></data-table>
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

 import QueryBar from './QueryBarFlow';
 import DataTable from './DataTable';

export default {
   name: 'rechargeFlow',
   components: {
     queryBar: QueryBar,
     dataTable: DataTable,
   },
   created() {
     this.$store.commit('CLEAR_LIST_ALL');
   },
   computed: mapState({
     reChargeList: state => state.reChargeList,
     query: state => state.queryParam,
     total: state => state.total,
   }),

   methods: {
     handleCurrentChange(page) {
       this.$store.commit('CHANGE_PAGE', page);

        // 取用户列表
       this.$store.dispatch('FETCH_RECHARGE_LIST');
     },
   },
   data() {
     return {
       columns: [
            { prop: 'userId', name: '用户ID', width: 100 },
            { prop: 'nick', name: '昵称', width: 120 },
            { prop: 'goodsName', name: '购买商品', width: 120 },

            { prop: 'price', name: '金额', width: 80 },
            { prop: 'rechargeMethod', name: '充值方式 ', width: 100 },
            { prop: 'rechargeIncome', name: '充值收益', width: 100 },

            { prop: 'activityIncome', name: '活动收益', width: 100 },
            { prop: 'orderNo', name: '订单号', width: 200 },
            { prop: 'terminalName', name: '终端', width: 100 },

            { prop: 'channelName', name: '渠道', width: 100 },
            { prop: 'operatorTime', name: '时间', width: 200 },
            { prop: 'rechargeResults', name: '充值结果', width: null },
       ],
     };
   },
};
</script>
