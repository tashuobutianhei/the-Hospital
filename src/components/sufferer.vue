<template>
  <div>
      <titleTop></titleTop>
      <el-carousel indicator-position="outside" height="800px">
        <el-carousel-item v-for="item in list" :key="item.img" style="height: 800px">
          <h3><img :src="item.img" style="width: 120%;"></h3>
        </el-carousel-item>]
      </el-carousel>


      <div class="contian">
        <div v-for="item in list_ka" class="kuang" :style="item.sty" :key="item.value">
          <div>
            <i :class="item.icon"></i>
            <span>{{item.value}}</span>
          </div>
        </div>
      </div>


      <div class="xingxi">
        <div class="gonggao">
          <img src="../../static/img/gonggao.jpg">
          <div>
            <h3>医院公告</h3>
            <p class='gonggaoList' v-for="item in gonggaoList">{{item.value}}</p>
          </div>
        </div>

        <div class="xinxi">
          <img src="../../static/img/gonggao.jpg"/>
          <div>
            <h3>医院介绍</h3>
            <p>{{jieshao}}</p>
          </div>
        </div>
      </div>

      <div>
       <el-container class="keshi">
           <el-aside width="40%">
              <el-carousel >
                <el-carousel-item v-for="item in lun " :key="item">
                    <h1><img :src="item" style="width:100% "></h1>
                </el-carousel-item>
              </el-carousel>
           </el-aside>
            <el-main>
                <div >
                  <el-button  v-for="item in list_keshi" type="primary" icon="el-icon-back">{{item.name}}</el-button>
                </div>
            </el-main>
       </el-container>
    </div>

    <footers></footers>

  </div>
</template>

<script>
  import titleTop from './titleTop'
  import ElContainer from "element-ui/packages/container/src/main";
  import ElAside from "element-ui/packages/aside/src/main";
  import ElMain from "element-ui/packages/main/src/main";
  import ElCarousel from "element-ui/packages/carousel/src/main";
  import ElCarouselItem from "element-ui/packages/carousel/src/item";
  import ElButton from "element-ui/packages/button/src/button";
  import footers from './footers'
  export default {
        name:'sufferer',
        components:{
          ElButton,
          ElCarouselItem,
          ElCarousel,
          ElMain,
          ElAside,
          ElContainer,
          titleTop,
          footers},
        data(){
          return{
            jieshao:'这是一段介绍',
            list_ka:[
              {
                icon:'el-icon-document',
                sty:"background-image:url('../../../static/img/bg1.jpg')",
                value:'出诊查询'
              },{
                icon:'el-icon-view',
                sty:"background-image:url('../../../static/img/bg2.jpg')",
                value:'就医须知'
              },{
                icon:'el-icon-search',
                sty:"background-image:url('../../../static/img/bg3.jpg');",
                value:'专科转病'
              },{
                icon:'el-icon-edit-outline',
                sty:"background-color:green",
                value:'温情留言'
              }
            ],
            list:[
              {
                img:'../../../static/img/hushi.jpg'
              },{
                img:'../../../static/img/hushi2.jpg'
              },{
                img:'../../../static/img/yisheng.jpeg'
              }
            ],
            lun:['../../../static/img/lun1.jpg','../../../static/img/lun2.jpg','../../../static/img/lun3.jpg','../../../static/img/lun4.jpg'],
            list_keshi:[
              {
                name:'内科'
              },{
                name:'外科'
              },{
                name:'儿科'
              },{
                name:'妇科'
              },{
                name:'眼科'
              },{
                name:'耳鼻喉科'
              },{
                name:'口腔科'
              },{
                name:'皮肤科'
              },{
                name:'中医科'
              },{
                name:'针灸推拿科'
              },{
                name:'心理咨询室'
              }
            ],
            gonggaoList:[
              {
                value:'医院公告1'
              },{
                value:'医院公告1'
              },{
                value:'医院公告1'
              }
            ]
          }
        }
  }
</script>

<style>

  .el-main div{
    width: 80%;
  }
  .el-main .el-button{
    margin-top: 30px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .keshi{
    width:1400px;
    margin: 50px auto;
    padding-left: 120px;
    padding-top: 50px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .kuang{
      height:200px;
      width: 300px;
      border: 0px solid black;
      float: left;
      margin-left: 45px;
      box-shadow: 0px 0px 15px gray inset ;
  }
  .kuang>div{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 20% auto;
    font-size: 25px;
    color: white;
  }
  .kuang:nth-of-type(3)>div{
    color: black;
  }
  .contian{
      overflow: hidden;
      width: 1400px;
      height: 230px;
      margin:0 auto;
  }

  .xingxi>div{
    height:500px;
    width: 500px;
    border: 0px solid black;
    float: left;
    margin-left: 120px;
    box-shadow: 0px 0px 15px gray inset ;
  }
  .xingxi{
    width: 1400px;
    height: 230px;
    margin:0 auto;
  }
  .xingxi img{
    width: 500px;
    height: 300px;
  }

  .gonggaoList{
    text-align: left;
    margin-top: 15px;
    font-size: 20px;
    cursor: pointer;
  }
  @media screen and (max-width: 1400px) {
    .kuang{
      height:150px;
      width: 200px;
      border: 0px solid black;
      float: left;
      margin-left: 15px;
    }
    .contian{
      width: 900px;
      height: 200px;
      margin:0 auto;
    }
    .el-container{
      width:900px;
      margin: 50px auto;
      padding-left: 35px;

    }
    .xingxi>div{
      height:400px;
      width: 400px;
      border: 0px solid black;
      float: left;
      margin-left: 30px;
      box-shadow: 0px 0px 15px gray inset ;
    }
    .xingxi{
      width: 900px;
      height: 250px;
      margin:0 auto;
    }
    .xingxi img{
      width: 400px;
      height: 250px;
    }
    .gonggaoList{
      margin-top: 5px;
    }

  }

  @media screen and (max-width: 600px) {
    .kuang{
      height:50%;
      width: 49.5%;
      border: 0px solid black;
      float: left;
      margin-left: 0;
    }
    .contian{
      width: 95%;
      height: 400px;
      margin:0 auto;
    }
    .el-container{
      width:95%;
      margin: 50px auto;
      padding-left: 30px;
    }
    .xingxi>div{
      height:400px;
      width: 100%;
      border: 0px solid black;
      float: left;
      margin-left: 0px;
      box-shadow: 0px 0px 15px gray inset ;
    }
    .xingxi{
      width: 95%;
      height: 250px;
      margin:0 auto;
    }
    .xingxi img{
      width: 100%;

    }
  }

</style>
