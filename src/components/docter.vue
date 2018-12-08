<template>
  <el-container>

    <login-reg></login-reg>
    <el-header style="background-color:white">
        <title-top></title-top>
      </el-header>
    <el-container>
      <el-aside>
        <el-menu
          class="el-menu-demo"
          active-text-color="green"
          text-color="black"
          background-color="rgba(101,173,178,0.2)"
          router
        >
          <el-submenu index="0">
            <template slot="title"><i class="el-icon-menu"></i>今日诊断（未诊断）</template>
            <el-menu-item-group>
              <el-menu-item
                v-for="item in unList"
                :index=item.route
                @click="chance(item.type)"
              >{{item.id+'--'+item.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>今日诊断（已诊断）</template>
            <el-menu-item-group>
              <el-menu-item
                v-for="item in readyList"
                :index=item.route
                @click="chance(item.type)"
                >{{item.id+item.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>住院部信息</template>
            <el-menu-item-group>
              <el-menu-item
                v-for="item in roomList"
                :index=item.route
                @click="chance(item.type)"
              >{{item.id+item.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>


        <el-main>
          <router-view></router-view>
          <!--<docter-wei v-if="$store.state.docterWhich==='un'"></docter-wei>-->
          <!--<docter-already v-else-if="$store.state.docterWhich==='ready'"></docter-already>-->
          <!--<docter-room v-else-if="$store.state.docterWhich==='room'"></docter-room>-->
       </el-main>


    </el-container>

   <footers></footers>
  </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import loginReg from './loginReg';
    import titleTop from './titleTop';
    import footers from './footers'
    import ElHeader from "element-ui/packages/header/src/main";
    import ElForm from "element-ui/packages/form/src/form";
    import ElButton from "element-ui/packages/button/src/button";
    import docterWei from './docterWer';
    import docterRoom from './docterRoom';
    import docterAlready from './docterAlready';
    import axios from 'axios'
    import Alert from "./alert";

    axios.defaults.withCredentials=true;
    export default {
      components: {
        ElButton,
        ElForm,
        ElHeader,
        ElContainer,
        loginReg,
        titleTop,
        footers,
        docterAlready,
        docterRoom,
        docterWei},
      name: "docter",
      mounted(){
          var self = this;
          //该接口，根据医生的用户名去获取他所诊治病人的情况。
          axios.get('',{
            params:{
              username:self.$store.state.login.username
            }
          }).then((res)=>{
            /*
            返回一个json，格式如下：
            该json，表示一个医生手下获取到的病人的信息。
             {
               unList:[ //为诊治列表
                {
                  route:'/docter/wei/001',  //作为前端路由使用，将/docter/wei/ 和 id进行拼接
                  type:'un',  //类型，就按我的来吧
                  id:'001',  //病人id
                  name:'xxx', //病人用户名
                }
              ]，
               readyList:[ //已诊治列表
                {
                  route:'/docter/ready/001', //作为前端路由使用，将/docter/ready/ 和 id进行拼接
                  type:'ready',
                  id:'001',
                  name:'xxx',
                }
              ]，
               roomList:[  //住院列表
                {
                  route:'/docter/room/001', //作为前端路由使用，将/docter/room/ 和 id进行拼接
                  type:'room',
                  id:'001',
                  name:'xxx',
                }
              ]，
             }*/
            this.unList=res.data.unList;
            this.readyList=res.data.readyList;
            this.roomList=res.data.roomList;
           

          })
      },
      data(){
        return{
          unList:[
           {
            route:'/docter/wei/001',
            type:'un',
            id:'001',
            name:'xxx',
          },{
              route:'/docter/wei/002',
              type:'un',
              id:'002',
              name:'xxx',
          },{
              route:'/docter/wei/003',
              type:'un',
              id:'003',
              name:'xxx',
          },{
              route:'/docter/wei/004',
              type:'un',
              id:'004',
              name:'xxx',
          },{
              route:'/docter/wei/005',
              id:'005',
              name:'xxx',
          },{
              route:'/docter/wei/006',
              type:'un',
              id:'006',
              name:'xxx',
          },{
              route:'/docter/wei/007',
              type:'un',
              id:'007',
              name:'xxx',
          },{
              route:'/docter/wei/008',
              type:'un',
              id:'008',
              name:'xxx',
          },{
              route:'/docter/wei/009',
              type:'un',
              id:'009',
              name:'xxx',
          },{
              route:'/docter/wei/010',
              type:'un',
              id:'010',
              name:'xxx',
          }
          ],
          readyList:[
            {
              route:'/docter/ready/001',
              type:'ready',
              id:'001',
              name:'xxx',
            },{
              route:'/docter/ready/002',
              type:'ready',
              id:'002',
              name:'xxx',
            },{
              route:'/docter/ready/003',
              type:'ready',
              id:'003',
              name:'xxx',
            },{
              route:'/docter/ready/004',
              type:'ready',
              id:'004',
              name:'xxx',
            },{
              route:'/docter/ready/005',
              type:'ready',
              id:'005',
              name:'xxx',
            },{
              route:'/docter/ready/006',
              type:'ready',
              id:'006',
              name:'xxx',
            },{
              route:'/docter/ready/007',
              type:'ready',
              id:'007',
              name:'xxx',
            },{
              route:'/docter/ready/008',
              type:'ready',
              id:'008',
              name:'xxx',
            },{
              route:'/docter/ready/009',
              type:'ready',
              id:'009',
              name:'xxx',
            },{
              route:'/docter/ready/010',
              type:'ready',
              id:'010',
              name:'xxx',
            }
            ],
          roomList:[
            {
              route:'/docter/room/001',
              type:'room',
              id:'001',
              name:'xxx',
            },{
              route:'/docter/room/002',
              type:'room',
              id:'002',
              name:'xxx',
            },{
              route:'/docter/room/003',
              type:'room',
              id:'003',
              name:'xxx',
            },{
              route:'/docter/room/004',
              type:'room',
              id:'004',
              name:'xxx',
            },{
              route:'/docter/room/005',
              type:'room',
              id:'005',
              name:'xxx',
            },{
              route:'/docter/room/006',
              type:'room',
              id:'006',
              name:'xxx',
            },{
              route:'/docter/room/007',
              type:'room',
              id:'007',
              name:'xxx',
            },{
              route:'/docter/room/008',
              type:'room',
              id:'008',
              name:'xxx',
            },{
              route:'/docter/room/009',
              type:'room',
              id:'009',
              name:'xxx',
            },{
              route:'/docter/room/010',
              type:'room',
              id:'010',
              name:'xxx',
            }
            ],
        }
      },
      methods:{
          chance(it){
            this.$store.commit('ChangedocterWhich',it)
          }
      }
    }
</script>

<style scoped>
.el-aside{
  height: 900px;
  overflow-y:scroll ;
}
</style>
