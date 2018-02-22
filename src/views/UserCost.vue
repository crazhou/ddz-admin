<template>
  <el-main>
    <query-bar v-on:changecurtype="changeCols"></query-bar>
      <div class="summary-bar" v-if="curType == 1">
        <span>玩牌赢：<span class="em-data">{{costData.win}}</span></span>
        <span>玩牌输：<span class="em-data">{{costData.lose}}</span></span>
        <span>免费产出：<span class="em-data">{{costData.free}}</span></span>
        <span>购买积分：<span class="em-data">{{costData.buy}}</span></span>
        <span>牌局消耗：<span class="em-data">{{costData.consume}}</span></span>
      </div>
      <div class="summary-bar" v-if="curType == 2">
        <span>免费产出：<span class="em-data">{{costData.free}}</span></span>
        <span>购买钻石：<span class="em-data">{{costData.buy}}</span></span>
        <span>钻石消耗：<span class="em-data">{{costData.consume}}</span></span>
      </div>
     <data-table :table-data="costList" :columns="columns" :type="listType"></data-table>
        <el-pagination class="mt10"
        background
        @current-change="handleCurrentChange"
        :page-size="query.pageSize"
        layout="total, prev, pager, next"
        :current-page="query.page"
        :total="total">
        </el-pagination>
  </el-main>
</template>
<script>
 import { mapState } from 'vuex';

 import QueryBar from './QueryBarCost';
 import DataTable from './DataTable';


 export default {
   name: 'UserCost',
   props: ['menuid'],
   components: {
     queryBar: QueryBar,
     dataTable: DataTable,
   },
   data() {
     return {
       listType: 'userCost',
       curType: 1,
       columns: [
            { prop: 'userId', name: '用户ID', width: 80 },
            { prop: 'nick', name: '昵称', width: 200 },
            { prop: 'type', name: '分类', width: 200 },
            { prop: 'amount', name: '积分', width: 150 },
            { prop: 'current', name: '剩余积分', width: 100 },
            { prop: 'additive', name: '附加信息', width: 200 },
            { prop: 'remark', name: '备注', width: 200 },
            { prop: 'createTime', name: '时间', width: 180 },
            { prop: 'channel', name: '渠道', width: null },
            { prop: 'terminal', name: '终端', width: null },
       ],
     };
   },
   computed: mapState({
     costList: state => state.costList,
     query: state => state.queryParam,
     total: state => state.total,
     costData: state => state.costData,
   }),

   created() {
     this.$store.commit('CLEAR_LIST_ALL');
   },

   methods: {
     changeCols(val) {
       const val3 = this.columns[3];
       const val4 = this.columns[4];
       if (val) {
         val3.name = '钻石';
         val4.name = '剩余钻石';
         this.curType = 2;
       } else {
         val3.name = '积分';
         val4.name = '剩余积分';
         this.curType = 1;
       }
     },

     handleCurrentChange(page) {
       this.$store.commit('CHANGE_PAGE', page);

        // 取用户列表
       this.$store.dispatch('FETCH_USER_COST');
     },
   },
 };
</script>
<style lang="scss">

</style>

