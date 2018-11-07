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

              <el-menu-item index='/manger/docter' @click="$store.commit('ChangeMangerWhich',{
                      name:'value',
                      type:''
                    })">医师信息管理</el-menu-item>

              <el-submenu index='22'>
                <template slot="title"><i class="el-icon-menu"></i>排班计划管理</template>
                <el-menu-item-group>
                  <el-menu-item
                    v-for="item in scheduleList"
                    :index=item.route
                    @click="$store.commit('ChangeMangerWhich',{
                      name:'schel',
                      type:item.name
                    })"
                  >{{item.name}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-aside>

          <el-main>
            <router-view></router-view>
            <!--<div v-if="$store.state.mangerWhich.name==='schel'">-->
              <!--&lt;!&ndash;<h3>{{$store.state.mangerWhich.type}}科室排班表</h3>&ndash;&gt;-->
              <!--&lt;!&ndash;<manger-schel date='0'></manger-schel>&ndash;&gt;-->
              <!--&lt;!&ndash;<manger-schel date='2'></manger-schel>&ndash;&gt;-->
              <!--&lt;!&ndash;<manger-schel date='3'></manger-schel>&ndash;&gt;-->
              <!--&lt;!&ndash;<manger-schel date='4'></manger-schel>&ndash;&gt;-->
            <!--</div>-->
            <!--<div v-else-if="$store.state.mangerWhich.name==='value'">-->
              <!--<manger-value></manger-value>-->
            <!--</div>-->
          </el-main>
        </el-container>

      </el-container>

</template>

<script>
    import TitleTop from "./titleTop";
    import ElMain from "element-ui/packages/main/src/main";
    import ElContainer from "element-ui/packages/container/src/main";
    import ElAside from "element-ui/packages/aside/src/main";
    import MangerSchel from "./mangerSchel";
    import MangerValue from "./mangerValue";

    export default {
      components: {
        MangerValue,
        MangerSchel,
        ElAside,
        ElContainer,
        ElMain,
        TitleTop},
      name: "manger",
      data(){
        return{
          userList:[
            {
              index:'0',
              name:'注册账号',
              type:'user'
            },{
              index:'1',
              name:'拉黑账号',
              type:'black'
            }
          ],
          scheduleList:[
            {
              route:'/manger/schel/内科',
              index:'2',
              name:'内科'
            },{
              route:'/manger/schel/外科',
              index:'3',
              name:'外科'
            },{
              route:'/manger/schel/儿科',
              index:'12',
              name:'儿科'
            },{
              route:'/manger/schel/妇科',
              index:'4',
              name:'妇科'
            },{
              route:'/manger/schel/眼科',
              index:'5',
              name:'眼科'
            },{
              route:'/manger/schel/耳鼻喉科',
              index:'6',
              name:'耳鼻喉科'
            },{
              route:'/manger/schel/口腔科',
              index:'7',
              name:'口腔科'
            },{
              route:'/manger/schel/皮肤科',
              index:'8',
              name:'皮肤科'
            },{
              route:'/manger/schel/中医科',
              index:'9',
              name:'中医科'
            },{
              route:'/manger/schel/针灸推拿科',
              index:'10',
              name:'针灸推拿科'
            },{
              route:'/manger/schel/心理咨询室',
              index:'11',
              name:'心理咨询室'
            }
          ],
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
