// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from 'vue-router'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'

Vue.use(element);
Vue.use(router);
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    loginClick:false,
    RegClick:false,
    //记录医生信息
    doctoer:{
      type:'none',
      id:'',
      name:''
    },
    docterWhich:'',
    //记录
    mangerWhich:{
      name:'',
      type:''
    },
    //弹出框的信息
    alert:{
      visible:false,
      value:''
    },
    //记录用户的登录信息
    login:{
      username:'emmmm',
      id:'',
      loginIf:false
    }
  },
  mutations:{
    ChangeloginClick(state){
      state.loginClick=!state.loginClick;
    },
    ChangeRegClick(state){
      state.RegClick=!state.RegClick;
    },
    ChangeDocter(state,it){
      state.doctoer = it
    },
    ChangedocterWhich(state,it){
      state.docterWhich = it
    },
    ChangeMangerWhich(state,it){
      state.mangerWhich = it
    },
    alert(state,it){
      state.alert = it
    },
    loginSucceful(state,it){
      state.login.username = it.username
      state.login.id = it.identity
      state.login.loginIf = true
    }
  }
})
const Routers =[
  {
    path:'*',
    redirect:'/index'
  },
  {
    path:'/index',
    component:(resolve)=> require(['./components/enter1.vue'],resolve)
  },
  {
    path:'/docter',
    component:(resolve)=> require(['./components/docter.vue'],resolve),
    beforeEnter:(to, from, next) => {
      if(store.state.login.id!=='docter'){
        next({path:'/index'});
      }else{
        next()
      }
    },
    children:[
      {
        path:'wei/:id',
        component:(resolve)=> require(['./components/docterWer.vue'],resolve)
      }, {
        path:'ready/:id',
        component:(resolve)=> require(['./components/docterAlready.vue'],resolve)
      },{
        path:'room/:id',
        component:(resolve)=> require(['./components/docterRoom.vue'],resolve)
      }
    ]
  },
  {
    path:'/sufferer',
    component:(resolve)=> require(['./components/sufferer.vue'],resolve)
  },
  {
    path:'/manger',
    component:(resolve)=> require(['./components/manger.vue'],resolve),
    beforeEnter:(to, from, next) => {
      if(store.state.login.id!=='manger'){
        next({path:'/index'});
      }else{
        next()
      }
    },
    children:[
      {
        path:'schel/:keshi',
        component:(resolve)=> require(['./components/mangerSchels.vue'],resolve)
      },{
        path:'docter',
        component:(resolve)=> require(['./components/mangerValue.vue'],resolve)
      }
    ]
  },
  {
    path:'/gua',
    component:(resolve)=> require(['./components/gua.vue'],resolve)
  }
]


const  RouterConfig ={
  mode:'history',
  routes:Routers
}

const Router = new router(RouterConfig)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:Router,
  store:store,
  components: { App },
  template: '<App/>'
})

