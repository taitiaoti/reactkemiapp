import React from 'react'
import {Route} from 'react-router-dom'
import ssqImg from './commons/caipiao/ssq@1x.png'
import Ssq from './Components/games/ssq'        //双色球组件
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