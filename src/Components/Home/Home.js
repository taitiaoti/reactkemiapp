import React from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import '../../commons/iconfonts/iconfont.css'
import Content from './contents'
import {login,register,RouteWithSubRoute} from '../../router'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // console.log(login)
        return (<Router>
            <div className='home'>
                <div className='header'>
                    <h2 style={{color:'white'}}>可米彩票</h2>
                    <div>
                        <i className='iconfont' style={{fontSize:'30px',color:'white',marginRight:'10px'}}>&#xe663;</i>        

                        {login.map((item,index)=>{
                            return <Link to={item.path} key={index}>
                                <i className='iconfont' style={{fontSize:'30px',color:'white'}}>&#xe60b;</i>
                            </Link>
                        })}
                    </div>
                </div>
                <div className='content'>
                    <p style={{margin:'0 10px'}}>
                        <span style={{color:'gray'}}>可米彩票已累计中奖 : </span>
                        <span style={{fontSize:'20px',color:'red'}}>亿万</span>
                    </p>
                    <ul>
                        <li style={{color:'#1D99D9'}}>
                            <i className='iconfont' style={{fontSize:'60px'}}>&#xe63d;</i>
                            <span>领红包</span>
                        </li>
                        <li style={{color:'#FC9721'}}>
                            <i className='iconfont' style={{fontSize:'60px'}}>&#xe603;</i>
                            <span>开奖</span>
                        </li>
                        <li style={{color:'#E71F3B'}}>
                            <i className='iconfont' style={{fontSize:'60px'}}>&#xe663;</i>
                            <span>下载</span>
                        </li>
                        <li style={{color:'#5BC41A'}}>
                            <i className='iconfont' style={{fontSize:'60px'}}>&#xe630;</i>
                            <span>资讯</span>
                        </li>
                    </ul>
                </div>
                <div className='footer'>
                    <Content/>
                </div>
            </div>
            {
                login.map((item,index)=>{
                    // console.log(item)
                    return <RouteWithSubRoute key={item.path} {...item}/>
                })
            }
        </Router>)
    }
}

export default Home;