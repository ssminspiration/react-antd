import React, { Component } from 'react';
import {Row,Col} from 'antd';
import Util from '../../utils/utils.js';
import axios from '../../axios/index.js';

import './index.less';
import { fn } from 'moment';

import jsonp from 'jsonp';

// 百度天气API： http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=3p49MVra6urFRGOT9s8UBWr2
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillMount(){
        this.setState({
            userName:"苏黎世"
        })

        setInterval(()=>{
            // new Date()
            let sysTime = Util.formateDate(new Date().getTime())

            this.setState({
                sysTime
            })
        },1000)

        this.getWeatherAPIData()

        console.log('%c生命周期','font-size:38px;color:red')


        // jsonp('http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=3p49MVra6urFRGOT9s8UBWr2',{
           
        // },function(res){
        //     console.log('请求结果',res)
        // })
    }
    render() { 
        return ( <div className="header">
            <Row className="header-top">
                <Col span="24">
                    <span>欢迎，{this.state.userName}</span>
                    <a href="#">退出</a>
                </Col>
            </Row>
            <Row className="breadcrumb">
                <Col span="4" className="breadcrumb-title">
                    首页
                </Col>
                <Col span="20" className="weather">
                    <span className="date">{this.state.sysTime}</span>
                    <span  className="weather-img">
                        <img src={this.state.dayPic}/>
                    </span>

                    <span  className="weather-detail">
                    {this.state.weather}
                    </span>
                </Col>
            </Row>
        </div> );
    }

    getWeatherAPIData(){
        let city = '北京';
        axios.jsonp({
            url:"http://api.map.baidu.com/telematics/v3/weather?location="+encodeURI(city)+"&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
        }).then((res)=>{
            console.log('%c结果','font-size:46px;color:green',res)
            let data = res.results[0].weather_data[0];
            this.setState({
                date:data.date,
                dayPic: data.dayPictureUrl,
                nightPic: data.nightPictureUrl,
                weather:data.weather,
            })
        })
    }
}
 
export default Header;