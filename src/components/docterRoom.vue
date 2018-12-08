<template>
  <div>

    <el-dialog title="住院病情记录" :visible.sync="dialogFormVisible" width="700px">
      <el-form  :rules="rules" :model="formZhuyuanSub" >
        <el-form-item label="记录时间" :label-width="formLabelWidth" >
          <el-input v-model="date" autocomplete="off" disabled></el-input>
        </el-form-item>

        <el-form-item label="患者病情" :label-width="formLabelWidth" prop="bingqing">
          <el-input v-model="formZhuyuanSub.bingqing" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="治疗手段" :label-width="formLabelWidth" prop="zhiliao">
          <el-input v-model="formZhuyuanSub.zhiliao" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="药物名称" :label-width="formLabelWidth" prop="yaowu">
          <el-input v-model="formZhuyuanSub.yaowu" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="能否出院" :label-width="formLabelWidth" prop="chuyuan">
          <el-select v-model="formZhuyuanSub.chuyuan" placeholder="请选择" style="width: 100%;">
            <el-option label="达到出院标准" value="达到出院标准"></el-option>
            <el-option label="未到出院标准" value="未到出院标准"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="subRoom">确 定</el-button>
      </div>
    </el-dialog>




    <el-table
      :data="tableDataRoom"
      border
      style="width: 100%;border:1px black solid;border-bottom:none ">
      <el-table-column
        prop="date"
        label="患者信息"
        width="180">
        <el-table-column
          prop="roomid"
          label="住院房间号"
          width="180">
        </el-table-column>

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
      :data="tableDataRoom"
      border
      style="width: 100%;border:1px black solid;border-top:none ">
      <el-table-column
        prop="value"
        label="病情诊断结果">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

    <el-table
      :data="tableRoom"
      border
      style="width: 90%;margin: 80px auto;">
      <el-table-column
        prop="data"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="zhiliao"
        label="治疗情况">
      </el-table-column>
      <el-table-column
        prop="bingqing"
        label="病情情况">
      </el-table-column>
      <el-table-column
        prop="yaowu"
        label="使用药物">
      </el-table-column>
      <el-table-column
        prop="chuyuan"
        label="是否可以出院">
      </el-table-column>
    </el-table>

    <el-button type="primary" @click="tanchu">添加记录</el-button>



  </div>
</template>

<script>
    import axios from 'axios'
    import Alert from "./alert";

    axios.defaults.withCredentials=true;
    export default {
        name: "docter-room",
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
                    type:'room'//表示未诊治,
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
            self.valueList=res.data;
            self.tableData.push({
              date:res.data.info.time,
              name:res.data.name,
              address:res.data.info.address,
              sex:res.data.info.sex,
              tel:res.data.info.tel,
              age:res.data.info.age,
              value:res.data.info.value
            })
            res.data.info.roomValue.forEach(element => {
              self.tableRoom.push[{
                data:element.date,
                bingqing:element.value,
                zhiliao:element.how,
                chuyuan:element.out,
                yaowu:element.medicine
              }]
            });
          })
        },
        data(){
          return{
            valueList:'',
            tableDataRoom: [],
            tableRoom:[
              {
                data:'2018-9-20',
                bingqing:'骨质较为疏松',
                zhiliao:'打吊针',
                chuyuan:'未达到出院标准',
                yaowu:'xxx颗粒,xxx试剂'
              },{
                data:'2018-9-20',
                bingqing:'骨质较为疏松',
                zhiliao:'打吊针',
                chuyuan:'未达到出院标准',
                yaowu:'xxx颗粒,xxx试剂'
              },{
                data:'2018-9-20',
                bingqing:'骨质较为疏松',
                zhiliao:'打吊针',
                chuyuan:'未达到出院标准',
                yaowu:'xxx颗粒,xxx试剂'
              },{
                data:'2018-9-20',
                bingqing:'骨质较为疏松',
                zhiliao:'打吊针',
                chuyuan:'未达到出院标准',
                yaowu:'xxx颗粒,xxx试剂'
              }],
            dialogFormVisible: false,
            formZhuyuanSub: {
              data:this.date,
              bingqing:'',
              zhiliao:'',
              chuyuan:'',
              yaowu:''
            },
            formLabelWidth: '100px',
            date:new Date().getFullYear()+'-'+ (new Date().getMonth()+1)+'-'+new Date().getDay(),
            rules: {
              bingqing: [
                { required: true, message: '请输入病人病情', trigger: 'blur' },
              ],
              zhiliao: [
                { required: true, message: '请输入治疗手段', trigger: 'blur' }
              ],
              yaowu: [
                {required: true, message: '请输入药物使用情况', trigger: 'blur' }
              ],
              chuyuan: [
                {required: true, message: '请判断是否能够出院', trigger: 'blur' }
              ]
            }
          }
        },
      methods:{
        tanchu(){
          this.dialogFormVisible = !this.dialogFormVisible
        },
        subRoom(){
          var self = this;
          //进行住院记录的增加，返回res===1表示增加成功
          axios.get('',{
            params:{
              date:self.formZhuyuanSub.data,
              value:self.formZhuyuanSub.bingqing,
              how:self.formZhuyuanSub.zhiliao,
              out:self.formZhuyuanSub.chuyuan,
              medicine:self.formZhuyuanSub.yaowu
            }
          }).then((res)=>{
            if(res.data.res===1){
              alert('添加成功')
              self.tanchu();
            }
          })
        }
      },

    }
</script>

<style scoped>

</style>
