<template>
  <div class="enter">
    <el-row>
      <el-col :span="8"><el-button plain @click="enter('gua')">预约挂号</el-button></el-col>
      <el-col :span="8">
        <el-button plain @click="open('a')"><i class="el-icon-phone">咨询</i></el-button>
      </el-col>
      <el-col :span="8">
        <el-button plain @click="open('b')"><i class="el-icon-share">分享</i></el-button>
      </el-col>
    </el-row>

    <el-row >
        <el-col :span="8" :offset="6">
          <div class="enter1" ref="div" id="enter1">
            <img src="../assets/爱心捐赠.png">
            <span>患者入口</span>
            <el-button round ref="button1" @click="enter('suffer')">点击进入</el-button>
          </div>
        </el-col>

        <el-col :span="8"  :offset="0">
          <div  class="enter1"  ref="div" id="enter2">
            <img src="../assets/员工信息.png">
            <span>员工入口</span>
            <el-button round ref="button2" @click="enter('worker')" >点击进入</el-button>
        </div>
        </el-col>
    </el-row>



    <login-reg></login-reg>
  </div>
</template>

<script>
    import ElButton from "element-ui/packages/button/src/button";
    import LoginReg from "./loginReg";
   

    export default {
        name: "enter",
        components:{
          LoginReg,
          ElButton},
        data(){
          return{

          }
        },
        methods: {
          enter(it){
            if(it=='suffer'){
              this.$router.push('/sufferer')
            }else if(it==='worker'){
              if(this.$store.state.login.id!==''){
                  this.$router.push('/'+this.$store.state.login.id);
              }else{
                  this.$store.commit('ChangeloginClick')
              }
            }
          },
          open(message) {
            if(message=='a'){
              this.$alert('请选择咨询方式', '咨询选择', {
                confirmButtonText: '确定',
                callback: action => {
                  this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                  });
                }
              });
            }else{
              this.$alert('分享给好友', '分享', {
                confirmButtonText: '确定',
                callback: action => {
                  this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                  });
                }
              });
            }

          }
        }
    }
</script>

<style scoped>
  .enter{
    background-image: url("../assets/5919545ce9a94.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position:0px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .el-row:nth-of-type(1){
      width:20%;
      position: absolute;
      right: 100px;
      top: 15px;
  }
  .el-row:nth-of-type(2){
    width: 100%;
    margin: 0;
    position: absolute;
    top:30%;
  }
  .el-button{
    background-color: rgba(255,255,255,0);
    color: black;
    width: 90%;

  }
  .enter1{
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    border-radius: 5%;
  }
  #enter1 span{
    font-weight: bold;
    font-size: 30px;
    color: rgb(230,230,230);
  }
  #enter2{
    font-weight: bold;
    font-size: 30px;
    background-color: rgba(237,240,240,0.7);
  }
  #enter1{
    background-color: rgba(101,173,178,.7);
  }
  #enter1 .el-button{
    color: white;
  }
  #enter2 .el-button{
    color: black;
    background-color: rgba(255,255,255,.8);
  }

  img{
    width: 40%;
    align-self: center;
  }
  .el-row:nth-of-type(2) .el-button{
    width: 50%;
    align-self: center;
  }
</style>
