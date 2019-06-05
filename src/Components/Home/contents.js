import React from 'react'
import '../../commons/CSS/contents.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import {games,RouteWithSubRoute} from '../../router'

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        console.log(games)
        return (<Router>
            <div className='games'>
                <div className='contentTop'>
                    <img src='http://oimageb2.ydstatic.com/image?id=1455857670757131373&product=adpublish&w=640&h=100&sc=0&rm=2&gsb=0&gsbd=60'/>
                </div>
                <div className='contentGames'>
                    <ul>
                        {games.map((item,index)=>{
                            return (<li key={item.name}>
                                <Link to={item.path}>
                                    <img src={item.url} className='gameImg'/>
                                    <div className='gameContent'>
                                        <span style={{fontSize:'20px',color:'#000'}}>{item.name}</span>
                                        <span style={{fontSize:'14px',color:'gray'}}>{item.intro}</span>
                                    </div>
                                </Link>
                            </li>)
                        })}
                    </ul>
                </div>
                <div className='contentBtm'>
                    <p className='category'>
                        <span>触屏版</span>
                        <span style={{color:'cyan'}}>电脑版</span>
                        <span style={{color:'cyan'}}>客户端</span>
                    </p>
                    <p className='copy'>网易旗下乐得公司版权所有 ©2011-2019</p>
                </div>
            </div>
        </Router>)
    }
}

export default Content;