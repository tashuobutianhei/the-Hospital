<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials=true;

export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  mounted(){
      //判断是否为登录状态，
      axios.get('').then((response)=>{
        /*
        返回值为
        {
            res:1//1表示已经登录
            username://用户名
            identity://身份
        }
        */
        if(res.data.res==1){
            this.$store.commit('loginSucceful',{
              username:response.data.username,
              loginIf:true,
              identity:response.data.identity,
              });
        }else{
            //未登录状态
        }
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  *{
    margin: 0;
    padding: 0;
  }
  router-view{

  }
</style>
