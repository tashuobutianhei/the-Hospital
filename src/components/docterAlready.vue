<template>
  <div >
    <el-table
      :data="tableData"
      border
      style="width: 100%;border:1px black solid;border-bottom:none ">
      <el-table-column
        prop="date"
        label="患者信息"
        width="180">
        <el-table-column
          prop="date"
          label="就诊日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="联系方式">
        </el-table-column>
      </el-table-column>
    </el-table>
    <el-table
      :data="tableData"
      border
      style="width: 100%;border:1px black solid;border-top:none ">
      <el-table-column
        prop="value"
        label="病情描述">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>


    <el-form disabled
             ref="formsufferer"
             label-width="120px"
             :model="formLabelAlign"
             style="width: 50%;margin: 50px auto">
      <el-form-item label="病情诊断描述"  prop="what">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入病人的病情详细描述"
          v-model=formLabelAlign.what>
        </el-input>
      </el-form-item>
      <el-form-item label="化验情况"  prop="huayan">
        <el-input
          v-model="formLabelAlign.huayan"

          placeholder="填写化验内容和结果，如没有化验则不填写"
        ></el-input>
      </el-form-item>
      <el-form-item label="病情诊断结果"  prop="reason">
        <el-input
          v-model="formLabelAlign.reason"

          placeholder="填写患者具体病症"
        ></el-input>
      </el-form-item>

      <el-form-item label="治疗方式" prop="type">
        <el-select
          v-model="formLabelAlign.type"
          placeholder="请选择"
          style="width: 100%">
          <!--<el-option-->
            <!--v-for="item in options"-->
            <!--:key="item.value"-->
            <!--:label="item.label"-->
            <!--:value="item.value">-->
          <!--</el-option>-->
        </el-select>
      </el-form-item>

      <el-form-item
        v-for="(domain, index) in formLabelAlign.domains"
        :label='domain.type'
        :key="domain.key"
        prop="domains"
      >
        <el-input v-model="domain.value"  style="width:60%"></el-input>
        <el-button >增加</el-button>
        <el-button >删除</el-button>
      </el-form-item>



      <el-form-item  label="是否住院治疗"  prop="room">
        <el-switch

          v-model="formLabelAlign.room"
          active-text="住院治疗"
          inactive-text="无需住院">
        </el-switch>
      </el-form-item>


      <el-form-item style="margin: 50px ">
        <el-button type="primary" @click="submitForm('formsufferer')">确诊</el-button>
        <el-button @click="resetForm('formsufferer')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>

</template>

<script>
  import axios from 'axios'
  import Alert from "./alert";

    axios.defaults.withCredentials=true;
    export default {
        name: "docter-already",
        mounted(){
          this.id=this.$route.params.id
          var self = this;
          //根据用户id获取病情
          axios.get('',{
            params:{
              id:self.id
            }
          }).then((res)=>{
             /*返回的json格式
             用户信息
              {
                    type:'ready'//表示已诊治,
                    id:'病号id'
                    name:'病号姓名'，
                    //具体就诊信息
                    info:{
                      time:''//就诊日期
                      age:''//年龄
                      sex:''//性别
                      tel:''//电话
                      value:''//病情描述
                      address:''//地址
                      //以上信息为未诊治时的应有信息，以下信息在此数组中只留字段key就可以了，就是留写成ke:''即可，得发送过来
                      docterValue:''//医生针对其的详细描述
                      huayan:''//化验情况
                      result:''//医生诊断结果
                      way:''//治疗方式
                      domains:[]//药物或者手术情况
                      room:''//true或false 是否住院
                       //住院记录数组,在列表中可以为空，但是留字段位置
                      roomValue:[
                        {
                          date:''//一次诊治记录的日期
                          value:""//患者病情
                          how:''//本次记录如何诊治
                          medicine:''//药物情况
                          out:''//是否可以出院 true或者false
                        }
                      ]
                    }
                  }
             */
            self.tableData.push({
              date:res.data.info.time,
              name:res.data.name,
              address:res.data.info.address,
              sex:res.data.info.sex,
              tel:res.data.info.tel,
              age:res.data.info.age,
              value:res.data.info.value
            })
            self.formLabelAlign.what=res.data.docterValue;
            self.formLabelAlign.huayan=res.data.huayan;
            self.formLabelAlign.reason=res.data.result;
            self.formLabelAlign.type=res.data.way;
            self.formLabelAlign.domains=res.data.domains
            self.formLabelAlign.room=res.data.room;
          })
        },
        data(){
          return{
            formLabelAlign: {
              what: '',
              reason: '',
              type: '',
              room:false,
              huayan:'',
              domains: [],
            },
            tableData: [],
          }
        }
    }
</script>

<style scoped>

</style>
