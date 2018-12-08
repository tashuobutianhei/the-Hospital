<template>
  <div>
      <el-table
      :data="tableDataDocter"
      border
      style="width: 100%; margin-top: 20px;margin-bottom: 20px">
      <el-table-column
        prop="DocId"
        label="医生编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="医生姓名">
      </el-table-column>
      <el-table-column
        prop="IdCard"
        label="身份证号">
      </el-table-column>

      <el-table-column
        prop="address"
        label="住址">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="联系方式">
      </el-table-column>

      <el-table-column
        prop="which"
        label="医治方向">
      </el-table-column>

      <el-table-column
        prop="user"
        label="账号">
      </el-table-column>

      <el-table-column
        prop="password"
        label="密码">
      </el-table-column>

      <el-table-column
        prop="remove"
        label="删除">
        <template slot-scope="scope">
          <el-button size="mini" icon="el-icon-close" @click="removeDoc(scope.row.DocId)" circle plain type="danger"></el-button>
        </template>
      </el-table-column>
    </el-table>
      <el-button type="primary" @click="addDoc">添加医生信息</el-button>
      <el-button  type="primary">修改医生信息</el-button>

    <el-dialog title="填写新的医生信息" :visible.sync="dialogFormVisible"  width="700px">
      <el-form :model="form" label-position="left" ref="form"  :rules="rules">
        <el-form-item label="医生编号" :label-width="formLabelWidth" prop="DocId">
          <el-input v-model="form.DocId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="医生姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off" placeholder="填入医生姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="formLabelWidth" prop="tel">
          <el-input v-model="form.tel" autocomplete="off" placeholder="填入手机号"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" :label-width="formLabelWidth" prop="IdCard">
          <el-input v-model="form.IdCard" autocomplete="off" placeholder="正确输入身份证号码"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="form.address" autocomplete="off" placeholder="填写现在家庭住址" ></el-input>
        </el-form-item>
        <el-form-item label="诊治方向" :label-width="formLabelWidth" prop="which">
          <el-select v-model="form.which" style="width: 100%">
            <el-option
              v-for="item in options"
              :key="item.name"
              :value="item.name"
              :label="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账号" :label-width="formLabelWidth" prop="user">
          <el-input v-model="form.user" autocomplete="off" placeholder='给予账号'></el-input>
        </el-form-item>
        <el-form-item label="原始密码" :label-width="formLabelWidth" prop="password">
          <el-input v-model="form.password" autocomplete="off" placeholder="给予原始密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')" >确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
   import axios from 'axios'
    import Alert from "./alert";

    axios.defaults.withCredentials=true;
    export default {
      components: {

      },
      name: "docter-table",
        props:['message'],
        mounted(){
            //console.log(this.message);
            var self = this;
            axios.get('',{
              params:{
                type:this.message
              }
            }).then((res)=>{
              /*返回一个数组，数组为该类型的医生信息
              docterList=[
                {
                    DocId:'', /医生id/
                    name:'',  
                    address:'',
                    tel:'',
                    which:'',  //治疗方向，具体方向
                    user:'',  //账号
                    IdCard:'',  //身份证
                    password:'',  //密码
                    suffers:[],//数组内容为患者的id，由此来为每个医生进行挂号后的患者分配
                }
              ]
              */
              self.tableDataDocter=res.data.docterList
            })
        },
        data(){
            var checkUser=(rule, value, callback) => {
              if(/^\w{6,20}$/.test(value)){
                //在此向数据库发请求，判断是否被注册了
                callback();
              }else{
                callback(new Error("请输入正确格式的用户名,字母和数字"));
              }
            }

            var checkTel=(rule, value, callback) => {
              if(/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test(value)){
                //在此向数据库发请求，判断手机号是否被注册了
                callback();
              }else{
                callback(new Error("请输入正确的手机号"));
              }
            }

            var checkPass = (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入密码'));
              } else {
                if(/^(\w){6,14}$/.test(value)){
                  if(/^(([A-Za-z]){6,14})|(\d{6,14})$/.test(value)){
                    callback(new Error('密码太简单'));
                  }else{
                    callback()
                  }
                }else{
                  callback(new Error('密码长度在6-14位'));
                }
              }
            };
            return{
              dialogFormVisible:false,
              tableDataDocter:[
            
              ],
              form:  {
                DocId:'',
                name:'',
                address:'',
                tel:'',
                which:'',
                user:'',
                IdCard:'',
                password:'',
              },
              formLabelWidth:'120px',
              options:[
                {
                  index:'2',
                  name:'内科'
                },{
                  index:'3',
                  name:'外科'
                },{
                  index:'12',
                  name:'儿科'
                },{
                  index:'4',
                  name:'妇科'
                },{index:'5',
                  name:'眼科'
                },{index:'6',
                  name:'耳鼻喉科'
                },{index:'7',
                  name:'口腔科'
                },{index:'8',
                  name:'皮肤科'
                },{index:'9',
                  name:'中医科'
                },{index:'10',
                  name:'针灸推拿科'
                },{index:'11',
                  name:'心理咨询室'
                }
              ],
              rules:{
                name: [
                  { required: true, message: '请输入医生姓名', trigger: 'blur' },
                ],
                DocId: [
                  { required: true, message: '请输入编号', trigger: 'blur' }
                ],
                address: [
                  {required: true, message: '请填写地址', trigger: 'blur' }
                ],
                tel: [
                  { required: true, trigger: 'blur',validator: checkTel },
                ],
                which: [
                  { required: true, message: '请选择治疗方向', trigger: 'change', }
                ],
                user: [
                  {required: true,  trigger: 'blur',validator: checkUser }
                ],
                IdCard: [
                  { required: true, message: '填写身份证号码', trigger: 'blur' },
                ],
                password: [
                  { required: true, trigger: 'blur',validator: checkPass }
                ],
              }
            }
        },
        methods:{
          addDoc(){
            this.dialogFormVisible=true;
          },
          submitForm(formName) {
            var self = this;
            this.$refs[formName].validate((valid) => {
              if (valid) {
                //进行对医生信息的增加功能，暂时没有写修改医生信息的功能
                axios.get('',{
                  params:{
                        DocId:self.form.DocId,
                        name:self.form.name,
                        address:self.form.address,
                        tel:self.form.tel,
                        which:self.form.which,
                        user:self.form.user,
                        IdCard:self.form.IdCard,
                        password:self.form.password,
                        remove:self.form.remove
                  }
                }).then((res)=>{
                  if(res.data.res===1){
                     alert('submit!');
                      //提交操作
                      this.tableDataDocter.push(
                        {
                          DocId:self.form.DocId,
                          name:self.form.name,
                          address:self.form.address,
                          tel:self.form.tel,
                          which:self.form.which,
                          user:self.form.user,
                          IdCard:self.form.IdCard,
                          password:self.form.password,
                          remove:self.form.remove
                        })
                      this.resetForm(formName)
                  }else{
                       alert('error submit!');
                  }
                   this.dialogFormVisible=false;
                })
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          },
          removeDoc(id){
            let ind=-1;
            let self = this;
            this.tableDataDocter.forEach((item,index)=>{
              if(item.DocId==id)
                ind=index;
            })
            //删除医生接口，返回res=1表示成功
            axios.get('',{
              params:{
                DocId:ind
              }
            }).then((res)=>{
              if(res.data.res===1){
                self.tableDataDocter.splice(ind,1);
                alert('删除成功');
              }else{
                alert('删除失败')
              }
            })
          }
        }
    }
</script>

<style scoped>

</style>
