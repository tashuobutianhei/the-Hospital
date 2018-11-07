<template>

  <el-dialog
    title="提示"
    :visible.sync="$store.state.alert.visible"
    width="30%"
    center>
    <span>{{$store.state.alert.value}}</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="$store.commit('alert',{visible:false,value:''})">取 消</el-button>
    <el-button type="primary" @click="$store.commit('alert',{visible:false,value:''})">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
    export default {
        name: "alert"
    }
</script>

<style scoped>

</style>
