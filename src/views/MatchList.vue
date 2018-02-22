<template>
  <el-main>
        <query-bar></query-bar>
         <data-table :table-data="matchList" :columns="columns" :type="listType"></data-table>
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
 import QueryBar from './QueryMatchList';
 import DataTable from './DataTable';

export default {
   name: 'matchlist',
  // 把userList 和 state.userList 绑定
   computed: mapState({
     matchList: state => state.matchList,
     query: state => state.queryParam,
     total: state => state.total,
   }),
   data() {
     return {
       listType: 'matchList',
       columns: [
            { prop: 'userId', name: '用户ID', width: 80 },
            { prop: 'nick', name: '昵称', width: 150 },
            { prop: 'club', name: '俱乐部(局ID/桌子ID/牌局ID)', width: 250 },
            { prop: 'bottomScore', name: '底注', width: 100 },
            { prop: 'currentIntegral', name: '开局积分', width: 100 },
            { prop: 'addScore', name: '盈亏', width: 100 },
            { prop: 'role', name: '角色', width: 100 },
            { prop: 'robMultiple', name: '抢庄', width: 80 },
            { prop: 'redouble', name: '加倍', width: 80 },
            { prop: 'bomb', name: '炸弹/王炸', width: 100 },
            { prop: 'createTime', name: '时间', width: 150 },
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

        // 取用户列表
       this.$store.dispatch('FETCH_MATCH_LIST');
     },
   },

};
</script>
