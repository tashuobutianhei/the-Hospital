<template>
  <div>
  <el-dialog title="登陆" :visible.sync="$store.state.loginClick" width="500px">
    <el-form :model="form" status-icon :rules="ruleLog" ref="loginForm">
      <el-form-item label="用户名" prop="user">
        <el-input v-model="form.user" autocomplete="off" ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass" >
        <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$store.commit('ChangeloginClick')">取 消</el-button>
      <el-button type="primary" @click=login>登陆</el-button>
    </div>
  </el-dialog>

  <el-dialog title="注册" :visible.sync="$store.state.RegClick" width="500px">
    <el-form :model="formReg" status-icon :rules="ruleReg" ref="formReg">
      <el-form-item label="用户名" prop="user">
        <el-input v-model="formReg.user" autocomplete="off" ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass" >
        <el-input type="password" v-model="formReg.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="再次输入密码密码" prop="checkpass" >
        <el-input type="password" v-model="formReg.checkpass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="绑定电话" prop="tel" >
        <el-input type="tel" v-model="formReg.tel" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$store.commit('ChangeloginClick')">取 消</el-button>
      <el-button type="primary" @click=reg>注册</el-button>
    </div>
  </el-dialog>

    <alert></alert>
  </div>
</template>

<script>
    import axios from 'axios'
    import Alert from "./alert";

    export default {
      components: {Alert},
      name: "login-reg",
      data(){
          //登陆的验证
        var checkpassword = (rule, value, callback) => {
          if(/^\w{6,14}$/.test(value)){
            callback();
          }else{
            callback(new Error("请输入正确格式的密码"));
          }
        }
        var checkuser= (rule, value, callback) => {
            if(/^\w{6,20}$/.test(value)){
              callback();
            }else{
              callback(new Error("请输入正确格式的用户名"));
            }
        }
          //注册的验证
        var checkuserReg=(rule, value, callback) => {
          if(/^\w{6,20}$/.test(value)){
            //在此向数据库发请求，判断是否被注册了
            callback();
          }else{
            callback(new Error("请输入正确格式的用户名,字母和数字"));
          }
        }

        var checkpass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if(/^(\w){6,14}$/.test(value)){
              if(/^(([A-Za-z]){6,14})|(\d{6,14})$/.test(value)){
                callback(new Error('密码太简单'));
              }else{
                this.$refs.formReg.validateField('checkpass');
                callback()
              }
            }else{
              callback(new Error('密码长度在6-14位'));
            }
          }
        };
        var checkpassAgine = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.formReg.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        var checktel=(rule, value, callback) => {
          if(/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test(value)){
            //在此向数据库发请求，判断手机号是否被注册了
            callback();
          }else{
            callback(new Error("请输入正确的手机号"));
          }
        }
        return{
            form:{
              user:'',
              pass:''
            },
            formReg:{
              user:'',
              pass:'',
              checkpass:'',
              tel:''
            },
            ruleLog:{
              user: [
                { validator: checkuser, trigger: 'blur' }
              ],
              pass: [
                { validator: checkpassword, trigger: 'blur' }
              ]
            },ruleReg:{
              user:[
                {validator:checkuserReg,trigger:'blur'}
              ],
              pass:[
                { validator: checkpass, trigger: 'blur' }
              ],
              checkpass:[
                { validator: checkpassAgine, trigger: 'blur' }
              ],
              tel:[
                { validator: checktel, trigger: 'blur' }
              ],
          }
          }
      },
      methods:{
          login(){
              axios.get('', {
                params: {
                  username:this.form.user,
                  password:this.form.pass
                }
              })
              .then(response=> {
                if(response.data.res===1){
                  if(response.data.identity=='docter'){
                    this.$store.commit('loginSucceful',{username:response.data.username,loginIf:true});
                  }else if(response.data.identity=='manger'){
                    this.$store.commit('loginSucceful',{username:'manger',loginIf:true});
                  }else{
                    this.$store.commit('loginSucceful',{username:response.data.username,loginIf:true});
                  }
                }else{
                  this.$store.commit('alert',{
                    visible:true,
                    value:'登录失败'
                  })
                }
              })
              .catch( (error) =>{
                  console.log(error);
                  this.$store.commit('alert',{
                    visible:true,
                    value:'登录失败,检查网络'
                  })
              });

              this.$refs['loginForm'].resetFields();
              this.$store.commit('ChangeloginClick');
          },
          reg(){
            axios.get('', {
              params: {
                username:this.formReg.user,
                password:this.formReg.pass,
                tel:this.formReg.tel
              }
            })
              .then(response=> {
                if(response.data.res===1){
                  this.$store.commit('alert',{
                    visible:true,
                    value:'注册成功，快去登录吧'
                  })
                }else{
                  this.$store.commit('alert',{
                    visible:true,
                    value:'注册失败'
                  })
                }
              })
              .catch( (error) =>{
                console.log(error);
                this.$store.commit('alert',{
                  visible:true,
                  value:'注册失败,检查网络'
                })
              });

            this.$refs['formReg'].resetFields();
            this.$store.commit('ChangeRegClick');
          }
      }
    }
</script>

<style scoped>

</style>
