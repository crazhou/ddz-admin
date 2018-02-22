<template>
 <el-main>
        <query-bar></query-bar>
        <data-table :table-data="currencyList" :columns="columns" :type="listType"></data-table>
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
 import QueryBar from './QueryBarCurrencyList';
 import DataTable from './DataTable';

export default {
  name: 'currencylist',
  computed: mapState({
    currencyList: state => state.currencyList,
    query: state => state.queryParam,
    total: state => state.total,
  }),
  data() {
    return {
      listType: 'currencylist',
      columns: [
          { prop: 'time', name: '日期', width: 120 },
          { prop: 'freeIntegral', name: '免费积分发放', width: 150 },
          { prop: 'freeIntegralRev', name: '免费积分领取', width: 150 },
          { prop: 'sendIntegral', name: '积分发放', width: 100 },
          { prop: 'consumeIntegral', name: '积分消耗', width: 100 },
          { prop: 'integralBalance', name: '积分流水结余', width: 150 },
          { prop: 'residualIntegral', name: '积分用户结余', width: 150 },
          { prop: 'freeDiamonds', name: '免费钻石发放', width: 150 },
          { prop: 'freeDiamondsRev', name: '免费钻石领取', width: 150 },
          { prop: 'sendDiamonds', name: '钻石发放', width: 100 },
          { prop: 'consumeDiamonds', name: '钻石消耗', width: 100 },
          { prop: 'diamoundsBalance', name: '钻石流水结余', width: 120 },
          { prop: 'residualDiamonds', name: '钻石用户结余', width: null },
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
      this.$store.dispatch('FETCH_CURRENCY_LIST');
    },
  },
};
</script>
