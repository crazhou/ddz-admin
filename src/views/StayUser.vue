 <template>

    <el-main>
      <query-bar></query-bar>
      <div class="summary-bar">
        <span>日均新增：<span class="em-data">{{avgData.avgAdd}}</span></span>
        <span>次日留存：<span class="em-data">{{avgData.avgDayReturn}}</span></span>
        <span>3日留存：<span class="em-data">{{avgData.avgThreeReturn}}</span></span>
        <span>7日留存：<span class="em-data">{{avgData.avgSevenReturn}}</span></span>
        <span>14日留存：<span class="em-data">{{avgData.avgFourteenReturn}}</span></span>
        <span>30日留存：<span class="em-data">{{avgData.avgThirtyReturn}}</span></span>
      </div>
      <data-table :table-data="stayList" :columns="columns"></data-table>
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
 import QueryBar from './QueryBarStay';
 import DataTable from './DataTable';

 export default {
   name: 'UserList',
    // 把userList 和 state.userList 绑定
   computed: mapState({
     stayList: state => state.stayList,
     query: state => state.queryParam,
     total: state => state.total,
     avgData: state => state.stayAvgData,
   }),
   created() {
     this.$store.commit('CLEAR_LIST_ALL');
   },
   data() {
     return {
       columns: [
            { prop: 'time', name: '日期', width: 100 },
            { prop: 'activeUsers', name: '日活跃用户', width: 200 },
            { prop: 'newUsers', name: '日新增用户', width: 200 },
            { prop: 'dayReturn', name: '次日回头率', width: 200 },
            { prop: 'threeReturn', name: '3日回头率', width: 200 },
            { prop: 'sevenReturn', name: '7日回头率', width: 200 },
            { prop: 'fourteenReturn', name: '14日回头率', width: 200 },
            { prop: 'thirtyReturn', name: '30日回头率', width: null },
       ],
     };
   },
   components: {
     queryBar: QueryBar,
     dataTable: DataTable,
   },
   methods: {
     handleCurrentChange(page) {
       this.$store.commit('CHANGE_PAGE', page);

        // 取用户列表
       this.$store.dispatch('FETCH_STAYS');
     },
   },
 };
</script>
