<template>
  <div>

    <el-table
      :data="tableData6"
      :span-method=objectSpanMethod
      border
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间段">
      </el-table-column>
      <el-table-column
        prop="docter"
        label="值班医师">
        <template slot-scope="scope">
          <div  v-if="scope.row.type=='button'">
              <el-button
                         v-if="!addChu"
                         type="primary"
                         size="mini"
                         @click="readyAdd"
              >添加医师</el-button>

              <div style="display: inline-block" v-else>
                <el-button type="mini"  @click="addDocter(scope.$index,scope.row.ban)">确认</el-button>
                <el-select size="mini" v-model="chanceDocter" placeholder="请选择">
                  <el-option v-for="item in DocterList"
                             :key="item.name"
                             :label="item.name"
                             :value="item.name">
                  </el-option>
                </el-select>
                <el-button type="mini" icon="el-icon-close" @click="unAdd"></el-button>
              </div>

              <el-button
                        type="danger"
                        size="mini"
                        @click="chuxian"
              >删除医师
              </el-button>
          </div>

          <div v-else>
            <span>{{scope.row.docter}}</span>
            <el-button v-show=chu size="mini" type="danger" plain circle icon="el-icon-close"
            @click="removeDocter(scope.$index,scope.row.docter)"></el-button>
          </div>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
    import ElButton from "element-ui/packages/button/src/button";
    import ElOption from "element-ui/packages/select/src/option";

    export default {
      components: {
        ElOption,
        ElButton},
      name: "manger-schel",

        props:['date'],
        data(){
          return{
            chanceDocter:'',
            tableData6: [
              {
                  date:this.getdate(),
                  time:'8:00~13:00',
                  docter:'李xx',
                  type:'button',
                  ban:'zao'
              },
              {
                date:this.getdate(),
                time:'13:00~18:00',
                docter:'王xx',
                type:'button',
                ban:'wu'
              },
            ],
            DocterList:[
              {
                name:'李某某'
              },{
                name:'王某某'
              },{
                name:'张某某'
              },{
                name:'赵某某'
              }
            ],
            x:0,
            y:0,
            chu:false,
            addChu:false,
            //x为上午的值班人数，y是下午的值班人数
          }
        },
        methods:{
          //寻找位置
          getdate(){

            let needDate = new Date(new Date().getTime()+86400000*this.date)
            return (needDate.getMonth()+1)+'-'+needDate.getDate()
          },
          findindex(array,it){
            let ind = -1;
            array.forEach((item,index)=>{
              if(item.name===it){
                ind=index;
              }
            })
            return ind;
          },
          readyAdd(){
            //点击添加出现添加表单
            this.addChu=true;
          },
          unAdd(){
            //放弃添加
            this.addChu=false;
          },
          addDocter(index,it){
            //根据早班晚班进行分类
            if(it==='zao'){
              this.x++;
              this.tableData6.unshift({
                date:this.getdate(),
                time:'8:00~13:00',
                docter:this.chanceDocter,
                type:'doc',
                ban:'zao'
              })
            }else if(it==='wu'){
              this.y++;
              this.tableData6.splice(index,0,{
                date:this.getdate(),
                time:'13:00~18:00',
                docter:this.chanceDocter,
                type:'doc',
                ban:'wan'
              })
            }
            //添加过的医师不应该出现在排班序列中
            this.DocterList.splice(this.findindex(this.DocterList,this.chanceDocter),1);
            //切换
            this.addChu=false;
            //恢复
            this.chanceDocter='';
          },
          removeDocter(index,name){
            this.tableData6.splice(index,1);
            //删除排班后就出现在序列中
            this.DocterList.push({
              name:name
            })
            //改变表格的结构
            if(index>this.x){
              this.y--
            }else{
              this.x--
            }
          },
          chuxian(){
            //删除标志出现
            this.chu=!this.chu;
          },
          objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
              if (rowIndex  === 0) {
                return {
                  rowspan: (this.x+this.y+2),
                  colspan: 1
                };
              }else{
                return {
                  rowspan: 0,
                  colspan: 0
                };
              }
            }else if(columnIndex===1){
              if(rowIndex===0){
                return{
                  rowspan: this.x+1,
                  colspan: 1
                }
              }else if(rowIndex===this.x+1){
                return{
                  rowspan: this.y+1,
                  colspan: 1
                }
              }else{
                return{
                  rowspan: 0,
                  colspan: 0
                }
              }
            }else{
              return{
                rowspan:1,
                colspan:1
              }
            }
          }
        }
    }
</script>

<style scoped>

</style>

