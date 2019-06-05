import React from 'react'
import './login.css'
import {Icon,Button} from 'antd-mobile'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import {register,RouteWithSubRoute} from '../../router'


class Login extends React.Component{
    render(){
        return (<Router>
            <div className='login'>
                <div className='loginHeader'>
                    <div className='loginText'>
                        <p>
                            <Link to='/Home'>
                                <Icon type="left"/>
                                <span>返回</span>
                            </Link>
                        </p>
                        <h2 style={{color:'white'}}>登 录</h2>
                    </div>
                    <div className='lunBoTu'>
                        <img src='http://pimg1.126.net/caipiao_info/images/headFigure/wapSeoSemAd/1537957782265_1.png'/>
                    </div>
                </div>
                <div className='loginContent'>
                    <input type='text' placeholder='邮箱/手机号'/>
                    <input type='password' placeholder='密码'/>
                    <Button type='primary'>登录</Button>
                </div>
                <div className='loginFoot'>
                    <Button style={{width:'50%',height:'100%',color:'#2167bc'}}>忘记密码?</Button>
                    {
                        register.map((item,index)=>{
                            return <Link key={index} to={item.path} style={{width:'50%'}}>
                                <Button to={item.path} style={{width:'100%',height:'100%',color:'#2167bc'}}>注册</Button>
                            </Link>
                        })
                    }
                </div>
            </div>
            {
                register.map((item,index)=>{
                    return <RouteWithSubRoute key={index} {...item}/>
                })
            }
        </Router>)
    }
}

export default Login;