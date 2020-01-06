<template>
  <div class="about">
    <el-form ref="certificateForm" :rules="certificateRule" :model="certificateForm">
      <el-form-item label="名称" prop="userName">
        <el-input v-model="certificateForm.userName" type="text" size="small"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="certificateForm.password" type="password" size="small" ></el-input>
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
import {signIn} from '../api/admin'
import Cookies from 'js-cookie'

@Component
export default class about extends Vue {
  certificateForm = {
    userName: "",
    password: ""
  };
  certificateRule = {
    userName: [
      {
        required: true,
        message: "名称是必填的",
        trigger: "blur"
      }
    ],
    password: [
      {
        required: true,
        message: "密码是必填的",
        trigger: "blur"
      }
    ]
  };

  // 表单认证
  confirm(formName: any) {
    let el: any = this.$refs[formName];
    el.validate((valid: any) => {
      if (valid) {
       signIn(this.certificateForm).then((res:any)=>{
         if(!res['success']){
            this.$message.error(res['message']);
         }else{
           Cookies.remove('UserInfo')
           Cookies.set('UserInfo',res['session'])
           
            this.$message.success('登录成功,一秒后跳转');
            setTimeout(() => {
              this.$router.push('/tableList');
            }, 1000);
         }
        //  debugger
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
.about {
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
