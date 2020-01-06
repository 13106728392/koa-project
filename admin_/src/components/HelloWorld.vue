<template>
  <div class="hello">
    <el-form ref="certificateForm" :rules="certificateRule" :model="certificateForm">
      <el-form-item label="名称" prop="userName">
        <el-input v-model="certificateForm.userName" type="text" size="small"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="certificateForm.email" type="text" size="small"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="certificateForm.password" type="password" size="small" v></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input v-model="certificateForm.confirmPassword" type="password" size="small" v></el-input>
      </el-form-item>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="certificate = false">取消</el-button>
        <el-button type="primary" size="mini" @click="confirm('certificateForm')">提交</el-button>
      </div>
    
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {signUp} from '../api/admin'
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public banlance: string;
  public certificatePopver: boolean = false;
  public certificateStatus: boolean = false; //认证状态
  public flag = 0;
  certificateForm = {
    userName: "",
    password: "",
    email: "",
    confirmPassword: ""
  };
  certificateRule = {
    userName: [
      {
        required: true,
        message: "名称是必填的",
        trigger: "blur"
      },
      {
        min: 2,
        max: 20,
        message: "长度为2到20个字符",
        trigger: "blur"
      }
    ],
    password: [
      {
        required: true,
        message: "个人手机号码是必填的",
        trigger: "blur"
      },
      {
        validator: this.checkPhone,
        trigger: "blur"
      }
    ],
    confirmPassword: [
      { required: true, message: "两次密码要一致", trigger: "blur" },
      {
        validator: this.confirmPassword,
        trigger: "blur"
      }
    ],
    email: [
      {
        type: "email",
        message: "请输入正确的邮箱地址,否则置空",
        trigger: "blur"
      },
      {
        required: false
      }
    ]
  };

  // 验证手机
  checkPhone(rule: any, value: any, callback: any) {
    let isTel: boolean = false;
    if (value.length < 3) {
      isTel = false;
      callback(new Error("密码至少3位"));
    } else {
      isTel = true;
    }
    callback();
  }

  //密码确认
  confirmPassword(rule: any, value: any, callback: any) {
    let isTel: boolean = false;

    if (value != this.certificateForm["password"] || !value) {
      isTel = false;
      callback(new Error("两次密码要一致"));
    } else {
      isTel = true;
    }
    callback();
  }

  // 表单认证
  confirm(formName: any) {
    let el: any = this.$refs[formName];
    el.validate((valid: any) => {
      if (valid) {
      signUp(this.certificateForm).then((res:any)=>{
      if(!res['success']){
            this.$message.error(res['message'] || '注册失败');
         }else{
            this.$message.success('注册成功');
         }
      })
      } else {
        console.log("失败");
      }
    });
  }
  mounted(): void {}
  pageInit() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  width: 400px;
  margin: 0 auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
