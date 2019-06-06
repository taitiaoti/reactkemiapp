import React from 'react'
import {Icon,Button} from 'antd-mobile'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import './register.css'
import apis from '../../apis/api'
import axios from 'axios' 

const url = 'http://localhost:3000'
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            email:'',
            phone:''
        }
    }
    usernameChange=(ev)=>{
        let username = ev.target.value;
        this.setState({
            username:username
        })
    }
    pwdChange=(ev)=>{
        let password = ev.target.value;
        this.setState({
            password:password
        })
    }
    emailChange=(ev)=>{
        let email = ev.target.value;
        this.setState({
            email:email
        })
    }
    phoneChange=(ev)=>{
        let phone = ev.target.value;
        this.setState({
            phone:phone
        })
    }
    registerBtn=()=>{
        // console.log(this.state)
        // console.log(apis)
        // console.log(axios())
        axios.post(url+apis.register,this.state).then((resp)=>{
            // console.log(resp)
            if(resp.data.success){
                alert(resp.data.message)
                this.out();
            }else{
                alert(resp.data.message)
            }
        })
    }
    out=()=>{
        // console.log(this.props)
        this.props.history.push('/login')
    }
    render(){
        return(<div className='register'>
            <div className='registerHeader'>
                <div className='registerText'>
                    <p onClick={this.out}>
                        <Icon type="left"/>
                        <span>返回</span>
                    </p>
                    <h2 style={{color:'white'}}>注 册</h2>
                </div>
                <div className='lunBoTu'>
                    <img src='http://pimg1.126.net/caipiao_info/images/headFigure/wapSeoSemAd/1537957782265_1.png'/>
                </div>
            </div>
            <div className='registerContent'>
                <span>用户名:</span>
                 <input type='text' placeholder='username' onChange={this.usernameChange}/>
                 <span>密码:</span>
                 <input type='password' placeholder='password' onChange={this.pwdChange}/>
                 <span>邮箱:</span>
                 <input type='text' placeholder='email' onChange={this.emailChange}/>
                 <span>手机号:</span>
                 <input type='number' placeholder='phone' onChange={this.phoneChange}/>
                 <Button type='primary' style={{marginTop:'20px'}} onClick={this.registerBtn}>注册</Button>
            </div>
        </div>)
    }
}

export default Register;