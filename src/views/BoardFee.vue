<template>
    <el-main>
        <query-bar></query-bar>
         <div class="summary-bar">
        <span>抽水：<span class="em-data">{{boardData.pump}}</span></span>
        <span>局数：<span class="em-data">{{boardData.gameNum}}</span></span>
        <span>平均局时：<span class="em-data">{{boardData.buyingTimes}}</span></span>
        <span>平均买入次数：<span class="em-data">{{boardData.averageBuyingTimes}}</span></span>
        <span>平均买入积分：<span class="em-data">{{boardData.averageSumIntegral}}</span></span>
      </div>
        <data-table :table-data="boardList" :columns="columns" :type="listType"></data-table>
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
 import QueryBar from './QueryBarFee';
 import DataTable from './DataTable';

 export default {
    // 把userList 和 state.userList 绑定
   computed: mapState({
     boardList: state => state.boardList,
     boardData: state => state.boardData,
     query: state => state.queryParam,
     total: state => state.total,
   }),

   data() {
     return {
       listType: 'feeList',
       columns: [
            { prop: 'userId', name: '用户ID', width: 80 },
            { prop: 'nick', name: '昵称', width: 150 },
            { prop: 'clubName', name: '俱乐部', width: 150 },
            { prop: 'roomId', name: '牌局ID', width: 100 },
            { prop: 'bottomScore', name: '底注', width: 100 },
            { prop: 'sumIntegral', name: '买入积分', width: 100 },
            { prop: 'profitLoss', name: '盈亏', width: 100 },
            { prop: 'pump', name: '抽水', width: 80 },
            { prop: 'matchNum', name: '手数', width: 120 },
            { prop: 'buyingTimes', name: '买入次数', width: 100 },
            { prop: 'time', name: '局时', width: 80 },
            { prop: 'startTime', name: '时间', width: 200 },
            { prop: 'channel', name: '渠道', width: null },
            { prop: 'terminal', name: '终端', width: null },
       ],
     };
   },

   components: {
     queryBar: QueryBar,
     dataTable: DataTable,
   },
   created() {
     this.$store.commit('CLEAR_LIST_ALL');
   },
   methods: {
     handleCurrentChange(page) {
       this.$store.commit('CHANGE_PAGE', page);
        // 取留存列表
       this.$store.dispatch('FETCH_BOARD_FEE');
     },
   },

 };
</script>
