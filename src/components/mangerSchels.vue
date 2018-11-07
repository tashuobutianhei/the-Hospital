<template>
    <div>
      <h3>{{this.$route.params.keshi}}科室排班表</h3>
      <manger-schel date='0'></manger-schel>
      <manger-schel date='2'></manger-schel>
      <manger-schel date='3'></manger-schel>
      <manger-schel date='4'></manger-schel>
    </div>
</template>

<script>
    import mangerSchel from './mangerSchel'

    export default {
        name: "manger-schels",
        components:{mangerSchel},
        data() {
          return {

          }
        }
    }
</script>

<style scoped>

</style>
