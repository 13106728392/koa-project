<template>
  <div class="ChangeTable">
    <el-dialog title="修改" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form ref="certificateForm" :rules="certificateRule" :model="certificateForm">
        <el-form-item label="名称" prop="product_name">
          <el-input v-model="certificateForm.product_name" type="text" size="small"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="product_price">
          <el-input v-model="certificateForm.product_price" type="text" size="small"></el-input>
        </el-form-item>
        <el-form-item label="销量" prop="product_stock">
          <el-input v-model="certificateForm.product_stock" type="text" size="small" v></el-input>
        </el-form-item>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="handleClose">取消</el-button>
          <el-button type="primary" size="mini" @click="confirm('certificateForm')">提交</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { updateProduct } from "../api/admin";
@Component
export default class ChangeTable extends Vue {
  @Prop() private dialogVisible: boolean;

  @Prop() private changeObj: any;

  certificateForm = {
    product_name: "",
    product_stock: "",
    product_price: "",
    product_id: ""
  };
  certificateRule = {
    product_name: [
      {
        required: true,
        message: "名称是必填的",
        trigger: "blur"
      }
    ],
    product_stock: [
      {
        required: true,
        message: "个人手机号码是必填的",
        trigger: "blur"
      }
    ],
    product_price: [
      {
        required: true,
        message: "请输入正确的价格",
        trigger: "blur"
      }
    ]
  };

  confirm(formName: any) {
    let el: any = this.$refs[formName];
    el.validate((valid: any) => {
      if (valid) {
        updateProduct(this.certificateForm).then((res: any) => {
          if (res["success"]) {
            this.handleClose();
            this.$message.success("更新成功");
            this.$emit("getTableList");
          } else {
            this.$message.error(res["message"] || "注册失败");
          }
       
        });
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }

  mounted() {
    [
      this.certificateForm["product_name"],
      this.certificateForm["product_stock"],
      this.certificateForm["product_price"],
      this.certificateForm["product_id"]
    ] = [
      this.changeObj["product_name"],
      this.changeObj["product_stock"],
      this.changeObj["product_price"],
      this.changeObj["product_id"]
    ];
  }

  handleClose() {
    this.$emit("closeChange");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="ChangeTable">
</style>
