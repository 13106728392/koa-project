<template>
  <div class="tableList">
    <el-button type="text" @click="loginOut">退出登录</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { cancall } from "../api/admin";

@Component
export default class tableList extends Vue {
  loginOut() {
    cancall({}).then((res: any) => {
      if (res["success"]) {
        this.$message.success("退出成功");
        this.$router.push("/tableList");
      } else {
        this.$message.error(res["message"]);
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tableList {
  width: 1200px;
  margin: 0 auto;
}
</style>
