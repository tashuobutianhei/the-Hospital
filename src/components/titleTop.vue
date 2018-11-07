<template>
  <div>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    active-text-color="rgba(101,173,178,1)"
    text-color="black" background-color="white"
    router
    >
    <!--background-color="rgba(101,173,178,1)"-->
    <login-reg></login-reg>
    <el-menu-item index="/index" >XX系统</el-menu-item>
    <el-menu-item index="/gua">挂号预约</el-menu-item>
    <el-submenu index="2">
      <template slot="title">就医指南</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" >科室介绍</el-menu-item>
    <el-menu-item index="4" >医生介绍</el-menu-item>
    <el-menu-item index="5">特色诊疗</el-menu-item>

    <el-row class="RegLog" v-if="!$store.state.login.loginIf">
      <el-col :span='12' index="login" class="login"><span  @click="$store.commit('ChangeloginClick')">登录</span></el-col>
      <el-col :span='12' index="reg" class="reg" ><span @click="$store.commit('ChangeRegClick')">注册</span></el-col>
    </el-row>

    <el-row class="RegLog" v-else="$store.state.login.loginIf">
      <el-col :span='12' index="login" class="login"><span>{{$store.state.login.username}}</span></el-col>
      <el-col :span='12' index="reg" class="reg" ><span @click="out">退出登录</span></el-col>
    </el-row>

  </el-menu>


  </div>
</template>
<script>
  import LoginReg from "./loginReg";


  export default {
    components: {LoginReg},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        dialogFormVisible: false,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      out(){
        console.log(this.$route)
        if(this.$route.path!='index'){
            this.$router.replace('/index');
        }
        this.$store.commit('loginSucceful',{username:'',loginIf:false});
        this.$store.commit('alert',{visible:true,value:'您已经成功退出登录，拜拜'})
      }
    }
  }
</script>
<style>
  .el-menu{
    position: relative;
  }

  .RegLog{
    position: absolute;
    right: 15px;
    width: 200px;
    height: 60px;
    line-height: 60px;
    outline:none;
  }
  .RegLog .el-col:hover{
    color: green;
    background-color: silver;
    cursor: pointer;
  }

</style>
