<template>
    <el-container ref="all" style="height: 1000px">
      <login-reg></login-reg>
      <el-header style="background-color:white">
          <title-top></title-top>
      </el-header>
      <el-container>
        <el-aside >
          <el-menu
            class="el-menu-demo"
            active-text-color="green"
            text-color="black"
            background-color="rgba(101,173,178,0.2)"
            >
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-menu"></i>预约方式</template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="changeRoute('A')">在线预约</el-menu-item>
                <el-menu-item index="1-2" @click="changeRoute('B')">自助机预约</el-menu-item>
                <el-menu-item index="1-3" @click="changeRoute('C')">电话预约</el-menu-item>
                <el-menu-item index="1-4" @click="changeRoute('D')">银行卡预约</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4"  @click="changeRoute('E')"><i class=" el-icon-search"></i>出诊信息查询</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
                <el-row >
                  <el-col :xs="10" :md="4"  :sm="10"  >您现在所在的位置 ：</el-col>
                  <el-col :xs="10" :md="6"  :sm="10" style="margin-top: 5px">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                      <el-breadcrumb-item :to="{ path: '/gua'   }">预约挂号</el-breadcrumb-item>
                    </el-breadcrumb>
                  </el-col>
              </el-row>

              <el-container style="border: 1px black solid;height: 650px;margin-top: 30px">
                  <el-header
                    style="text-align:left;line-height: 60px;font-size: 20px"
                  >{{title}}</el-header>
                  <el-main>
                          <div v-show="route=='A'" style="width:80%; margin: 0px auto" >

                            <el-steps :active="0" align-center>
                              <el-step title="第一步" description="填写挂号信息"></el-step>
                              <el-step title="第二步" description="这是一段很长很长很长的描述性文字"></el-step>
                              <el-step title="第三步" description="这是一段很长很长很长的描述性文字"></el-step>
                              <el-step title="第四步" description="这是一段很长很长很长的描述性文字"></el-step>
                            </el-steps>

                            <h2>挂号须知</h2>
                            <div v-for="item in list" style="text-align: left;margin-bottom: 20px;margin-top: 20px">

                              <span >{{item.title}}</span>
                              <span style="">{{item.value}}</span>
                            </div>

                            <el-form style="width:50%;margin-left: 15%" ref="formA" label-width="80px"  :model="form" status-icon :rules="rulesA">
                              <el-form-item label="疾病名称" prop="name">
                                <el-input v-model="form.name"></el-input>
                              </el-form-item>

                              <el-form-item label="科室名称" prop="room">
                                <el-select v-model="form.room" placeholder="请选择" style="width: 100%">
                                  <el-option
                                    v-for="item in option1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                              </el-form-item>

                              <el-form-item label="指定医师" prop="docter">
                                <el-input v-model="form.docter"></el-input>
                              </el-form-item>

                              <el-form-item label="就医时间" prop="datatime">
                                <div class="block">
                                  <el-date-picker
                                    v-model="form.datatime"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                  </el-date-picker>
                                  <span class="demonstration">工作时间范围为每天8:00-18:00</span>
                                </div>
                              </el-form-item>

                              <el-form-item>
                                <el-button type="primary" >立即挂号</el-button>
                                <el-button @click="resetForm('formA')">重置</el-button>
                              </el-form-item>
                            </el-form>
                          </div>

                          <div v-show="route=='B'" style="font-size: 18px">
                              <img src="../assets/u5a28d5547cefb.png">
                              <div v-for="item in list_zi" style="width: 80%;margin: 15px auto">
                                <h3 style="text-align: left">{{item.title}}</h3>
                                <p style="text-align: left;text-indent: 50px">{{item.value}}</p>
                              </div>
                          </div>

                           <div v-show="route=='C'" style="font-size: 18px">
                              <div v-for="item in list_tel" style="width: 80%;margin: 15px auto">
                                <h3 style="text-align: left">{{item.title}}</h3>
                                <p style="text-align: left;text-indent: 50px">{{item.value}}</p>
                              </div>
                           </div>

                          <div v-show="route=='D'" style="font-size: 18px">
                            <div v-for="item in list_ka" style="width: 80%;margin: 15px auto">
                              <h3 style="text-align: left">{{item.title}}</h3>
                              <p style="text-align: left;text-indent: 50px">{{item.value}}</p>
                            </div>
                          </div>

                          <div v-show="route=='E'" style="width:80%; margin: 0px auto" >
                            <el-form style="width:50%;margin-left: 15%" ref="formB" label-width="80px"  :model="formB" status-icon :rules="rulesA">
                              <el-form-item label="疾病名称" prop="name">
                                <el-input v-model="form.name"></el-input>
                              </el-form-item>

                              <el-form-item label="科室名称" prop="room">
                                <el-select v-model="form.room" placeholder="请选择" style="width: 100%">
                                  <el-option
                                    v-for="item in option1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                              </el-form-item>

                              <el-form-item label="指定医师" prop="docter">
                                <el-input v-model="form.docter"></el-input>
                              </el-form-item>

                              <el-form-item>
                                <el-button type="primary" >选好了，去查询</el-button>
                                <el-button @click="resetForm('formA')">重置</el-button>
                              </el-form-item>
                            </el-form>
                          </div>
                  </el-main>
              </el-container>

        </el-main>
      </el-container>
      <footers></footers>
    </el-container>


</template>

<script>
    import titleTop from './titleTop'
    import ElFooter from "element-ui/packages/footer/src/main";
    import ElContainer from "element-ui/packages/container/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    import LoginReg from "./loginReg";
    import Footers from "./footers";

    export default {
        name: "gua",
        components:{
          Footers,
          LoginReg,
          ElMain,
          ElHeader,
          ElContainer,
          ElFooter,
          titleTop},
        data(){
          var checkdoctor = (rule, value, callback) => {
            if( /^[\u4e00-\u9fa5]+$/.test(value))
              callback();
          };
          var checktime = (rule, value, callback)=>{

            if(new Date(value).getTime()+3600000<new Date().getTime()||new Date(value).getTime()>new Date().getTime()+259200000){
              callback(new Error("只能预约1小时后到3天内的"));
            }else if(new Date(value).getHours()>=18||new Date(value).getHours()<=8){
              callback(new Error("请预约工作时间内的"));
            }else{
              callback()
            }
          }
          return{
            route:'',
            title:'XXX挂号攻略：网络挂号更快捷！',
            list:[
              {
                title:'放号时间：',
                value:'通过电话预约挂号可挂3日内的号源，下午14:00停止预约次日号源（周末及节假日除外）'
              },
              {
                title:'就诊当日：',
                value:'初次来院就诊患者需持患者本人预约时的有效证件先办理就诊卡，二代身份证患者可在院内自助机办理就诊卡'
              },{
                title:'取号时间：',
                value:'上午号必须在就诊日上午9:00前取号，下午号必须在就诊日下午14:00前取号。取号成功后需先在院内自助机上报到，再到诊区候诊。'
              }
            ],
            list_ka:[{
              title:'预约挂号',
              value:'中国工商银行、中国建设银行、交通银行、中国银行四大银行的营业网点ATM机、个人网银、手机银行三种方式均可预约挂号，需用患者本人的银行卡或银行卡信息进行预约。'
            },{
              title:'放号时间',
              value:'医院每天下午16:00投放第7日新号源，各银行可挂号时间请参阅各银行ATM机开放时间和个人网银的开放时间'
            },{
              title:'就诊当日：',
              value:' 挂号成功后，如无我院就诊卡患者，需在就诊前在院内自助机上持二代身份证建卡，北京医保患者初次来院建就诊卡后，需在院内自助机与患者本人医保卡进行关联，所有北京医保患者在银行挂号成功后需在院内自助机换取医保号。'
            },{
                title: '退号规则：',
                value: '本号过期（超过预约就诊日期的工作开始时间）作废，一律不退号；'
              }],
            list_zi:[{
              title:'建就诊卡',
              value:'患者可以持身份证进行自助建卡及补卡操作，本地医保患者建卡时需要插入医保卡。特殊身份如商业保险的患者，请到收费窗口建卡，没有身份证的患者如儿童及外宾请到收费窗口建卡。 建卡需要交纳5元押金，支持现金、微信及支付宝方式支付'
            },{
              title:'当日挂号',
              value:'患者可持就诊卡、医保卡或身份证挂当天的号源。北京医保患者需要插入医保卡方可进行挂号。医事服务费支付支持使用支付宝、微信及任意银联卡。当日挂号放号时间：每天下午17:00开放挂次日剩余号源。'
            }, {
              title:'预约挂号',
              value:'患者可持就诊卡、医保卡或身份证预约一周之内的号源。本地医保患者需要插入医保卡方可进行挂号。医事服务费支付支持使用支付宝、微信及任意银联卡。预约挂号放号时间：每日下午17:00投放第7天新号源，如本周一下午17:00投放下周一全天号源。'
            },{
              title:'自助缴费',
              value:'患者可持就诊卡、医保卡或身份证进行检验、检查、药品等就诊医嘱费用缴纳，部分特殊身份的患者，如工伤、离休、公疗请去窗口缴费。自助缴费功能支持支付宝、微信及任意银联卡。缴费成功后，系统会自动打印缴费凭条、导诊及费用明细清单，需要发票的患者，请前往收费窗口打印。'
            },{
              title:'报到',
              value:'就诊前，患者需在自助机上进行自助报到，患者可持就诊卡、医保卡或身份证进行报到操作'
            },{
              title:'自助查询',
              value:'患者可自助查询以下内容：『药品信息查询』、『非药品查询』、『医保政策查询』、『出诊信息查询』、『门诊流程查询』、『医生特长查询』。'
            }],
            list_tel:[{
              title:'预约挂号：',
              value:'电话预约拨打114或116114（外地010-114），全天24小时可预约。'
            },{
              title:'放号时间：',
              value:'通过电话预约挂号可挂7日内的号源，周一至周五上午8:30投放出第7日新号源，下午14:00停止预约次日号源（周末及节假日除外）。'
            },{
              title:'就诊当日：',
              value:'初次来院就诊患者需持患者本人预约时的有效证件先办理就诊卡，二代身份证患者可在院内自助机办理就诊卡，北京医保患者办理就诊卡后需在院内自助机进行医保卡关联。'
            },{
              title:'自助机取号：',
              value:'持患者本人就诊卡或身份证或北京医保卡在指定时间内到医院院内自助机缴费取号，可使用任意银联标识的银行卡、微信和支付宝支付挂号费；'
            },{
              title:'手机取号：',
              value:'已在我院建立了就诊卡的患者，可下载我院官方手机APP，注册后绑定患者信息，通过【预约取号】功能进行取号，北京医保患者在手机APP缴费取号后需持医保卡到院内自助机换医保卡，否则本次就诊为自费。'
            },{
              title:'取号时间：',
              value:'上午号必须在就诊日上午9:00前取号，下午号必须在就诊日下午14:00前取号。取号成功后需先在院内自助机上报到，再到诊区候诊。'
            }],
            form:{
              name:'',
              docter:'',
              room:'',
              datatime:''
            },
            formB:{
              name:'',
              docter:'',
              room:'',
            },
            option1: [
              {
              value: '内科',
              label: '内科'
            }, {
              value: '外科',
              label: '外科'
            }, {
              value: '儿科',
              label: '儿科'
            }, {
              value: '妇科',
              label: '妇科'
            }, {
              value: '眼科',
              label: '眼科'
            },{
              value: '耳鼻喉科',
              label: '耳鼻喉科'
            },{
              value: '口腔科',
              label: '口腔科'
            },{
              value: '皮肤科',
              label: '皮肤科'
            },{
              value: '中医科',
              label: '中医科'
            },{
              value: '针灸推拿科',
              label: '针灸推拿科'
            },{
              value: '心理咨询室',
              label: '心理咨询室'
            }],
            rulesA: {
              name: [
                { validator: checkdoctor, trigger: 'blur' }
              ],
              docter: [
                { validator: checkdoctor, trigger: 'blur' }
              ],
              datatime:[
                { validator: checktime, trigger: 'blur' }
              ]
            }
          }
        },
        methods:{
          resetForm(formName){
            this.$refs[formName].resetFields();
          },
          changeRoute(it){
            this.route=it;
            switch (it){
              case "A":this.title="请填写挂号信息";break;
              case "B":this.title="院内自助机功能简介";break;
              case "C":this.title="电话预约挂号及取号流程";break;
              case "D":this.title="银行预约挂号及取号流程";break;
              case "E":this.title="请填入您想查询的医师和相关科室的坐诊信息";break;
            }
          }
        },
        mounted(){
          //console.log(this.$refs.all.style)
          //this.$refs.all.style.height=this.height+"px"
        }
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color:rgba(101,173,178,1);
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 60px;*/
  }


  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/

  }
  .el-footer{
    background-color: #rgba(101,173,178,1);
    color: #333;
  }

</style>
