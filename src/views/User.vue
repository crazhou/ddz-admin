<template>
    <el-main>
      <query-bar></query-bar>
      <el-row :gutter="20" class="user-detail">
        <h3>基本信息<el-button type="primary" @click="goback" class="goBack" size="mini" icon="el-icon-d-arrow-left">返回</el-button></h3>
      <el-col :span="12">
          <table>
            <tr>
              <td>用户名：</td>
              <td>{{uinfo.nick}}</td>
            </tr>
            <tr>
              <td>用户ID：</td>
              <td>{{uinfo.userId}}</td>
            </tr>
            <tr>
              <td>平台ID：</td>
              <td>未定义</td>
            </tr>
            <tr>
              <td>站点ID：</td>
              <td>未定义</td>
            </tr>
            <tr>
              <td>渠道来源：</td>
              <td>{{uinfo.channel}}</td>
            </tr>
            <tr>
              <td>注册时间：</td>
              <td>{{uinfo.createTime}}</td>
            </tr>
            <tr>
              <td>注册IP：</td>
              <td>{{uinfo.registerIp}}</td>
            </tr>
            <tr>
              <td>最后登录IP：</td>
              <td>{{uinfo.loginIp}}</td>
            </tr>
            <tr>
              <td>最后登录时间：</td>
              <td>{{uinfo.lastLoginTime}}</td>
            </tr>
            <tr>
              <td>总登录次数：</td>
              <td>{{uinfo.loginCount}}</td>
            </tr>
            <tr>
              <td>连续登录天数：</td>
              <td>大菠萝</td>
            </tr>
            <tr>
              <td>绑定手机：</td>
              <td>大菠萝</td>
            </tr>
            <tr>
              <td>联合登录：</td>
              <td>{{uinfo.unlogin}}</td>
            </tr>
            <tr>
              <td>状态：</td>
              <td>{{uinfo.status|parseStatus}}</td>
            </tr>
          </table>
      </el-col>
      <el-col :span="12">
                 <table>
            <tr>
              <td>用户头像：</td>
              <td><img :src="uinfo.url"/></td>
            </tr>
            <tr>
              <td>充值金额：</td>
              <td>{{uinfo.price}}</td>
            </tr>
            <tr>
              <td>消费金额：</td>
              <td>(积分：{{uinfo.conIntegral}}, 钻石：{{uinfo.conMasonry}})</td>
            </tr>
            <tr>
              <td>积分数：</td>
              <td>免费积分：{{uinfo.freeIntegral}}</td>
            </tr>
            <tr>
              <td>钻石数：</td>
              <td>免费钻石：{{uinfo.freeMasonry}}</td>
            </tr>
            <tr>
              <td>玩牌手数：</td>
              <td>{{uinfo.totalHandNum}} （地主胜率：{{uinfo.landloadRate}}%，农民胜率：{{uinfo.farmerRate}}%）</td>
            </tr>
            <tr>
              <td>贡献抽水：</td>
              <td>{{uinfo.pump}}</td>
            </tr>
            <tr>
              <td>VIP：</td>
              <td>{{uinfo.vip}}天</td>
            </tr>
            <tr>
              <td>在线信息：</td>
              <td>{{uinfo.onlineStatus==null?'离线':uinfo.onlineStatus}}</td>
            </tr>
          </table>
       </el-col>
    </el-row>
    <el-row  :gutter="20" class="user-detail">
      <h3>生涯数据</h3>
      <el-col :span="12">
        <table>
          <tr>
            <td>称号：</td>
            <td>{{career.achievementName}}</td>
          </tr>
          <tr>
            <td>胜率：</td>
            <td>{{career.winRate}}%（总手数：{{career.totalHandNum}}，获胜：{{career.victoryNum}}，总局数：{{career.totalGames}}）</td>
          </tr>
          <tr>
            <td>最高连胜：</td>
            <td>{{career.maxWinStreak}}</td>
          </tr>
          <tr>
            <td>地主胜率：</td>
            <td>{{career.landlordWinRate}}%（农民胜率{{career.farmerWinRate}}）</td>
          </tr>
          <tr>
            <td>平均买入：</td>
            <td>{{career.avgBuy}}</td>
          </tr>
          <tr>
            <td>抢庄率：</td>
            <td>{{career.robbingRate}}</td>
          </tr>
          <tr>
            <td>加倍率：</td>
            <td>{{career.doublingRate}}</td>
          </tr>
          <tr>
            <td>总盈亏：</td>
            <td>{{career.totalBunkoNum}}</td>
          </tr>
          <tr>
            <td>压制次数：</td>
            <td>不可用</td>
          </tr>
        </table>
      </el-col>
      <el-col :span="12">
        <table>
          <tr>
            <td>连对：</td>
            <td>{{career.pairFlush}}</td>
          </tr>
          <tr>
            <td>顺子：</td>
            <td>{{career.flush}}</td>
          </tr>
          <tr>
            <td>三带：</td>
            <td>{{career.triple}}</td>
          </tr>
          <tr>
            <td>飞机：</td>
            <td>{{career.plane}}</td>
          </tr>
          <tr>
            <td>炸弹：</td>
            <td>{{career.bomb}}</td>
          </tr>
          <tr>
            <td>王炸：</td>
            <td>{{career.bk}}</td>
          </tr>
        </table>
      </el-col>
    </el-row>
        <el-row  :gutter="20" class="user-detail">
      <h3>俱乐部</h3>
      <el-col :span="12">
        <table>
          <tr>
            <td>加入俱乐部数：</td>
            <td>{{club.joinClubNum}}</td>
          </tr>
          <tr>
            <td>创建俱乐部数：</td>
            <td>{{club.createClubNum}}</td>
          </tr>
          <tr>
            <td>管理员：</td>
            <td>{{club.adminNum}}</td>
          </tr>
          <tr>
            <td>贡献抽水最多俱乐部：</td>
            <td>{{club.maxCommissionClub}}</td>
          </tr>
          <tr>
            <td>首次加入俱乐部时间：</td>
            <td>{{club.firstJoinClubTime}}</td>
          </tr>
          <tr>
            <td>最近加入俱乐部时间：</td>
            <td>{{club.recentJoinClubTime}}</td>
          </tr>
        </table>
      </el-col>

    </el-row>
        <el-row  :gutter="20" class="user-detail">
      <h3>道具及特权</h3>
      <el-col :span="12">
        <table>
          <tr>
            <td>VIP：</td>
            <td>{{uprop.vipDays}}</td>
          </tr>
          <tr>
            <td>记牌器：</td>
            <td>{{uprop.noAdDays}}</td>
          </tr>
          <tr>
            <td>特权信息：</td>
            <td>未知</td>
          </tr>
        </table>
      </el-col>
    </el-row>
    </el-main>
</template>
<script>
  import { mapState } from 'vuex';
  import QueryBar from './QueryBar';

  export default {
    name: 'UserDetail',
    components: {
      queryBar: QueryBar,
    },
    computed: mapState({
      uinfo: state => state.userDetail,
      career: state => state.userCareer,
      club: state => state.userClub,
      uprop: state => state.userProp,
    }),
    created() {
      const id = this.$route.params.userId;
      this.$store.dispatch('FETCH_USER_DETAIL', id);
    },
    methods: {
      goback() {
        // console.log('DD', this.$router);
        this.$router.push({ name: 'userlist' });
      },
    },
  };
</script>
<style lang="scss">
.user-detail {
  background-color:#f1f1f1;
  padding: 20px 0;
  h3 {
    padding: 10px 15px;
  }
  .goBack{
    margin-left: 50%;
  }
  table{
    width:80%;
    border-collapse: collapse;
    td{
      border:1px solid #e0e0e0;
      padding: 5px 10px;
      font-size: 14px;
      background-color:#fff;
    }
  }
}
</style>

