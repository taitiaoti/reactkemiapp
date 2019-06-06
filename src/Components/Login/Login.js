import React from 'react'
import './login.css'
import {Icon,Button} from 'antd-mobile'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import {register,RouteWithSubRoute} from '../../router'
import axios from 'axios'
import api from '../../apis/api'

const url = 'http://localhost:3000'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loginType:'username',
            loginValue:'',
            password:''
        }
    }
    changeSelect=(ev)=>{
        let loginType = ev.target.value;
        this.setState({
            loginType:loginType
        })
    }
    out=()=>{
        this.props.history.push('/Home')
    }
    login=()=>{
        // console.log(this.state)
        let ID = JSON.parse(localStorage.getItem('_id'))
        if(ID){
            alert('您已经登录了')
        }else{
            axios.post(url+api.login,this.state).then((resp)=>{
                // console.log(resp.data)
                var resp = resp.data;
                if(resp.success){
                    this.out();
                    localStorage.setItem('_id',JSON.stringify(resp.data._id));
                    alert(resp.message);
                }else{
                    alert(resp.message)
                }
            })
        }
    }   
    changeLoginValue=(ev)=>{
        this.setState({
            loginValue:ev.target.value
        })
    }
    changePwd=(ev)=>{
        this.setState({
            password:ev.target.value
        })
    }
    render(){
        return (<Router>
            <div className='login'>
                <div className='loginHeader'>
                    <div className='loginText'>
                        <p onClick={this.out}>
                            <Icon type="left"/>
                            <span>返回</span>
                        </p>
                        <h2 style={{color:'white'}}>登 录</h2>
                    </div>
                    <div className='lunBoTu'>
                        <img src='http://pimg1.126.net/caipiao_info/images/headFigure/wapSeoSemAd/1537957782265_1.png'/>
                    </div>
                </div>
                <div className='loginContent'>
                    <select onChange={this.changeSelect}>
                        <option>username</option>
                        <option>email</option>
                        <option>phone</option>
                    </select>
                    <input type='text' placeholder={this.state.loginType} onChange={this.changeLoginValue}/>
                    <input type='password' placeholder='密码' onChange={this.changePwd}/>
                    <Button type='primary' onClick={this.login}>登录</Button>
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