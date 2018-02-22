<template>
      <el-main>
        <query-bar></query-bar>
        <div class="summary-bar">
          <span>新增俱乐部：<span class="em-data">{{countData.newClubNum}}</span></span>
          <span>俱乐部流动：<span class="em-data">{{countData.addClubPlayerNum}}</span></span>
          <span>牌局：<span class="em-data">{{countData.matchNum}}</span></span>
          <span>房费：<span class="em-data">{{countData.fees}}</span></span>
        </div>
        <data-table :table-data="clubList" :columns="columns" :type="listType"></data-table>
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

 import QueryBar from './QueryBarClub';
 import DataTable from './DataTable';

 export default {
   name: 'clubList',
   data() {
     return {
       listType: 'clubList',
       columns: [
            { prop: 'userId', name: '用户ID', width: 120 },
            { prop: 'nick', name: '昵称', width: 200 },
            { prop: 'clubName', name: '俱乐部', width: 200 },
            { prop: 'type', name: '类型', width: 120 },
            { prop: 'remarks', name: '附加信息', width: 400 },
            { prop: 'createTime', name: '时间', width: 200 },
            { prop: 'channel', name: '渠道', width: 200 },
            { prop: 'terminal', name: '终端', width: null }
       ],
     };
   },
    // 把userList 和 state.userList 绑定
   computed: mapState({
     clubList: state => state.clubList,
     query: state => state.queryParam,
     total: state => state.total,
     countData: state => state.clubCount,
   }),
   components: {
     queryBar: QueryBar,
     dataTable: DataTable,
   },
   created() {
     this.$store.commit('CLEAR_LIST_ALL');
   },
   methods: {

     handleCurrentChange(page) {
       //修改页码
       this.$store.commit('CHANGE_PAGE', page);
      //去俱乐部列表数据
       this.$store.dispatch('FETCH_MATCH_CLUB');
      //取俱乐部统计数据
      this.$store.dispatch('FETCH_CLUB_COUNT');
     },
   },
 };
</script>
