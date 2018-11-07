<template>
  <div ref="div">
    <img :src=src>
    <span>{{data.value}}</span>
    <el-button  round ref="button">点击进入</el-button>
  </div>
</template>

<script>
    export default {
        name: "entercompont",
        props:["message"],
        data(){
          return{
            data:'',
            src:'/src/assets/员工信息.png'
          }
        },
      mounted(){
          this.data = JSON.parse(JSON.stringify(this.message))
          this.$refs.div.style.backgroundColor=this.data.color;

          //this.src ='http://localhost:8080/src/assets/'+ this.data.img;
         // this.$refs.button.style.opacity= 0.45;
      }
    }
</script>

<style scoped>
  div{
    width: 270px;
    height: 270px;
    display: flex;
    flex-direction: column;
    border: white 1px solid;
    justify-content:space-around;
    border-radius: 10%;
  }
  img{
    width: 40%;
    align-self: center;
  }
  .el-button{
    width: 50%;
    align-self: center;
  }
  span{

  }
</style>
