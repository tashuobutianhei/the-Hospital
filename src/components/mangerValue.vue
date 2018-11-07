<template>
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item
            v-for="(item,index) in List"
            :title=item.name
            :key=item.name
            :name='index'
          >
            <docter-table :message="item.name"></docter-table>
          </el-collapse-item>
        </el-collapse>

</template>

<script>


    import DocterTable from "./docterTable";

    export default {
      components: {DocterTable},
      name: "manger-value",
      data(){
        return{
          List:[
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
            },{
              index:'5',
              name:'眼科'
            },{
              index:'6',
              name:'耳鼻喉科'
            },{
              index:'7',
              name:'口腔科'
            },{
              index:'8',
              name:'皮肤科'
            },{
              index:'9',
              name:'中医科'
            },{
              index:'10',
              name:'针灸推拿科'
            },{
              index:'11',
              name:'心理咨询室'
            }
          ],
          activeName:'1'
        }
      }
    }
</script>

<style scoped>

</style>
