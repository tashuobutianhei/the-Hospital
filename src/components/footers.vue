<template>
    <div class="foot">
        <p>咸鱼挂号系统：开发团队-西安邮电大学软件工程1602</p>
        <p>欢迎致电：18392120131进行相关交流</p>
        <p>
          <a><img src="../../static/img/微博.png"></a>
          <a><img src="../../static/img/github.png"></a>
          <a><img src="../../static/img/QQ.png"></a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "footers"

    }
</script>

<style scoped>
  .foot{
    width: 100%;
    height: 120px;
    background-image: url("../../static/img/bg.jpg");
    color: white;
    padding-top: 30px;


  }
  img{
    width: 30px;
  }
  a{
    cursor: pointer;
    margin-left: 30px;
  }
</style>
