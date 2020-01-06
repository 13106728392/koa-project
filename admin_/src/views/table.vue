<template>
  <div class="tableList">
    <el-table :data="tableData" style="width: 100%" height="800px" c>
      <el-table-column prop="product_id" label="id"></el-table-column>
      <el-table-column prop="create_time" label="创建时间"></el-table-column>
      <el-table-column prop="product_name" label="名称"></el-table-column>
      <el-table-column prop="product_price" label="价格"></el-table-column>
      <el-table-column prop="product_stock" label="销量"></el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img img v-lazy="scope.row.product_icon" width="50" height="50" />
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click="del(scope.row)">删除</el-button>
          <el-button type="warning" size="mini" @click="change(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { work, delProduct } from "../api/admin";

@Component
export default class tableList extends Vue {
  public tableData: Array<object> = [];

  mounted(): void {
    this.getTableList();
  }
  getTableList() {
    work({}).then((res: any) => {
      if (res["success"]) {
        this.tableData = res["data"];
      }
    });
  }

  del(val: any) {
    delProduct({
      id: val.product_id
    }).then((res: any) => {
      if (res["success"]) {
        this.$message.success("删除成功");
        this.getTableList();
      } else {
        this.$message.error(res["message"]);
      }
    });

    // debugger
  }
  change(val: object) {}
  pageInit() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tableList {
  width: 1200px;
  margin: 0 auto;
}
</style>
