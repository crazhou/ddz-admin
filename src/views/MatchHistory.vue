<template>
<el-main>
    <query-bar></query-bar>
      <data-table :table-data="matchHistory" :columns="columns" :type="listType"></data-table>
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
 import QueryBar from './QueryMatchHistory';
 import DataTable from './DataTable';

export default {
  name: 'matchhitory',
  computed: mapState({
    matchHistory: state => state.matchHistory,
    query: state => state.queryParam,
    total: state => state.total,
  }),
  data() {
    return {
      listType: 'rechargeData',
      columns: [
          { prop: 'time', name: '日期', width: 100 },
          { prop: 'pump', name: '抽水', width: 60 },
          { prop: 'playerNum', name: '玩牌人数', width: 80 },
          { prop: 'bottomScore10', name: '底注10以下', width: 100 },
          { prop: 'bottomScore10_50', name: '底注10-50', width: 100 },
          { prop: 'bottomScore50', name: '底注50以上', width: 100 },
          { prop: 'matchNum', name: '玩牌手数', width: 100 },
          { prop: 'gameNum', name: '牌局数', width: 80 },
          { prop: 'notPlayerNum', name: '没玩牌人数', width: 100 },
          { prop: 'onlineMean', name: '在线均值', width: 80 },
          { prop: 'playMean', name: '在玩均值', width: 80 },
          { prop: 'onlinePeak', name: '在线峰值', width: 80 },
          { prop: 'playPeak', name: '在玩峰值', width: 80 },
          { prop: 'bankruptUser', name: '破产用户', width: 80 },
          { prop: 'roomRate', name: '房费', width: 60 },
          { prop: 'newClub', name: '新增俱乐部', width: null },
          { prop: 'diamondsConsume', name: '创建钻石消耗', width: null },
          { prop: 'terminal', name: '终端', width: null },
          { prop: 'channel', name: '渠道', width: null },
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
      this.$store.dispatch('FETCH_MATCH_HISTORY');
    },
  },
};
</script>
