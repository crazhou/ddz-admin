<template>
  <el-table
      :data="tableData"
      :height="tableHei"
      style="width: 100%">
      <el-table-column v-for="(item, index) in columns" v-bind:key="index"
        :prop="item.prop"
        :label="item.name"
        :width="item.width">
        <template slot-scope="scope">
          <span v-if="item.prop == 'createTime'">{{ scope.row[item.prop] | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
          <span v-else-if="item.prop == 'time' && type=='rechargeData'">{{ scope.row[item.prop] | parseTime('{y}-{m}-{d}') }}</span>
          <span v-else-if="item.prop == 'status'">{{ scope.row[item.prop] | parseStatus }}</span>
          <span v-else >{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="type=='userList'" label="操作" :width="160">
        <template slot-scope="scope">
            <router-link :to="{name: 'user', params: {userId:scope.row.userId}}">查看</router-link>
            <el-switch
              v-model="scope.row.status"
              v-on:change="toggleDis"
              active-color="#31EA2E"
              inactive-color="#B2B2B2">
            </el-switch>
        </template>
      </el-table-column>
    </el-table>
</template>
<script>
   export default {
     props: {
       columns: Array,
       tableData: Array,
       type: String,
     },
     methods: {
       toggleDis() {


       },
     },
     created() {
       this.tableHei = window.innerHeight - 200;
       const path = this.$route.path;
       if (path === '/stayUsers') {
         this.tableHei = this.tableHei - 45;
       }
     },
     data() {
       return {
         tableHei: 0,
       };
     },
   };
</script>
