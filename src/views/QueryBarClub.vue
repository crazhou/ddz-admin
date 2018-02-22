<template>
     <el-form :inline="true" :model="formData" size="mini">
      <el-form-item label="选择时段">
        <el-date-picker
          v-model="formData.timeSpan"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="至"
          v-on:change="setDateRange"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
    <el-form-item label="ID/昵称">
      <el-input v-model="formData.nickId"  clearable></el-input>
    </el-form-item>
     <el-form-item label="俱乐部/牌局">
        <el-input size="mini" v-model="formData.clubName" clearable></el-input>
    </el-form-item>
    <el-form-item label="操作类型">
      <el-select v-model="formData.choseType" placeholder="请选择操作类型">
         <el-option
            v-for="item in typeList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
         </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
   </el-form>
</template>
<script>
export default {
  name: 'querybarClub',
  data() {
    return {
      formData: {
        timeSpan: []
      },
      typeList: [
        { value: '1', label: '离开俱乐部' },
        { value: '2', label: '创建俱乐部' },
        { value: '3', label: '加入俱乐部' },
        { value: '4', label: '被任命为管理员' },
        { value: '5', label: '被撤销管理员' },
        { value: '6', label: '被移除' },
        { value: '7', label: '被修改俱乐部' },
        { value: '8', label: '修改俱乐部标签' },
        { value: '9', label: '新增牌局' },
        { value: '10', label: '牌局续时' }
      ],
    };
  },
  methods: {
    setDateRange(a) {
      if(a.length > 1) {
        this.formData.startTime = a[0];
        this.formData.endTime = a[1];
      }
    },
    onSubmit() {
      const query = {
        page: 1,
        pageSize: 14,
        startTime: this.formData.startTime,
        endTime: this.formData.endTime,
        nickId: this.formData.nickId,
        clubName: this.formData.clubName,
        type: this.formData.choseType
      };

      // 保存Query 参数
      this.$store.commit('SET_QUERY_PARAM', query);
      // 取俱乐部数据
      this.$store.dispatch('FETCH_MATCH_CLUB');
      //取俱乐部统计数据
      this.$store.dispatch('FETCH_CLUB_COUNT');
    },
  },
};
</script>

