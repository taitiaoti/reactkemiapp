import React from 'react'
import {Route} from 'react-router-dom'

import ssqImg from './commons/caipiao/ssq@1x.png' //双色球图片
import zstImg from './commons/caipiao/9cee1329f19f731b.png' //走势图图片
import dltImg from './commons/caipiao/icon_dlt_2a95e43.png' //大乐透图片
import flImg from './commons/caipiao/2017011115TT63252724.png' //冬日福利图片
import tyzxImg from './commons/caipiao/icon_sport_info_6550b59.png' //体育资讯图片
import jczqImg from './commons/caipiao/icon_jczq_34229e3.png' //竞猜足球图片
import kuaisanImg from './commons/caipiao/kuai3@2x.png' //快三系列图片
import jzdgImg from './commons/caipiao/icon_jczq_spf_s_2541562.png' //竟足单关图片
import zqdcImg from './commons/caipiao/icon_dczq_17b1211.png' //足球单场图片
import yctImg from './commons/caipiao/icon_cp_pre_8072f60.png' //彩票预测图片

import Ssq from './Components/games/ssq'        //双色球组件
import Zst from './Components/games/zst'        //走势图组件

import Login from './Components/Login/Login'    //登录组件
import Register from './Components/Login/register'  //注册组件
// 登录
export const login = [
    {
        path:'/login',
        component:Login
    }
]

// 注册
export const register = [
    {
        path:'/register',
        component:Register
    }
]

// 玩法
export const games = [
    {
        path:'/ssq',
        component:Ssq,
        name:'双色球',
        intro:'2元中1000万',
        url:ssqImg
    },
    {
        path:'/zst',
        component:Zst,
        name:'走势图',
        intro:'中奖走势研究',
        url:zstImg
    },
    {
        path:'/dlt',
        // component:Zst,
        name:'大乐透',
        intro:'奖池超72亿',
        url:dltImg
    },
    {
        path:'/fl',
        // component:Zst,
        name:'冬日福利',
        intro:'试试手气',
        url:flImg
    },
    {
        path:'/tyzx',
        // component:Zst,
        name:'体育资讯',
        intro:'球迷乐园',
        url:tyzxImg
    },
    {
        path:'/jczq',
        // component:Zst,
        name:'竞猜足球',
        intro:'暂停销售',
        url:jczqImg
    },
    {
        path:'/kuaisan',
        // component:Zst,
        name:'快3系列',
        intro:'暂停销售',
        url:kuaisanImg
    },
    {
        path:'/jzdg',
        // component:Zst,
        name:'竟足单关',
        intro:'猜一场就中奖',
        url:jzdgImg
    },
    {
        path:'/zqdc',
        // component:Zst,
        name:'足球单场',
        intro:'猜中一场就中奖',
        url:zqdcImg
    },
    {
        path:'/cpyc',
        // component:Zst,
        name:'彩票预测',
        intro:'中奖必看',
        url:yctImg
    }
]

export const RouteWithSubRoute = (route) =>{
    return (<Route
        path={route.path}
        render={(props)=>{
            return (<route.component {...props}/>)
        }}
    ></Route>)
}