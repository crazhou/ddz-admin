<template>
      <el-main>
        <query-bar></query-bar>
        <data-table :table-data="userList" :columns="columns" :type="listType"></data-table>
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

 import QueryBar from './QueryBar';
 import DataTable from './DataTable';

 export default {
   name: 'UserList',
   data() {
     return {
       listType: 'userList',
       columns: [
            { prop: 'userId', name: '用户ID', width: 80 },
            { prop: 'nick', name: '昵称', width: 150 },
            { prop: 'createTime', name: '注册时间', width: 150 },
            { prop: 'status', name: '状态', width: 100 },
            { prop: 'channel', name: '渠道', width: 100 },
            { prop: 'price', name: '充值金额', width: 100 },
            { prop: 'vip', name: 'VIP天数', width: 100 },
            { prop: 'vipGrade', name: 'VIP等级', width: 80 },
            { prop: 'title', name: '称号', width: 120 },
            { prop: 'totalHandNum', name: '总手数', width: 100 },
            { prop: 'pump', name: '贡献抽水', width: 100 },
            { prop: 'avgBuy', name: '平均买入', width: 100 },
            { prop: 'totaLoss', name: '总盈亏', width: 100 },
            { prop: 'online', name: '在线状态', width: 80 },
       ],
     };
   },
    // 把userList 和 state.userList 绑定
   computed: mapState({
     userList: state => state.userList,
     query: state => state.queryParam,
     total: state => state.total,
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
       this.$store.commit('CHANGE_PAGE', page);

        // 取用户列表
       this.$store.dispatch('FETCH_USERS');
     },
   },
 };
</script>
