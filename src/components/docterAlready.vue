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
    export default {
        name: "docter-already",
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
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
              sex:'男',
              tel:'18312345678',
              age:'18',
              value:'腿疼，下雨天更疼'
            }],
          }
        }
    }
</script>

<style scoped>

</style>
