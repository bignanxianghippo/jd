

import React from 'react';
import "../scss/at.scss"
class Asidetop extends React.Component{
	render(){
		return(
			<div className="at">
				<h1><img src="https://misc.360buyimg.com/mtd/pc/index/home/images/logo.v3.jpg"/></h1>
				<div className="search_wrap">
					<div className="search">
					   <div className="search_box">
						 <input type="text" placeholder="福临门大米"/>
						 <span className="iconfont icon-xiangji"></span>
						 <button className="iconfont icon-sousuo"></button>
					    </div>
					</div>
				</div>
				<div className="cart_wrap">
					<div className="cart">
						<i className="iconfont icon-gouwuche"></i>
						<span>我的购物车</span>
						<div className="zero">0</div>
					</div>
				</div>
				<ul className="list">
					<li style={{color:"#f10215"}}>春节抢票</li>
					<li>智能数码</li>
					<li>农资绿植</li>
					<li>施华洛</li>
					<li>巅峰盛典</li>
					<li>移动书架</li>
					<li>保湿护手霜</li>
					<li>圣诞礼物</li>
					<li>欧式壁灯</li>
				</ul>
				<div className="nav">
					<ul className="navs">
						<li>秒杀</li>
						<li>优惠券</li>
						<li>闪购</li>
						<li className="lis">拍买
							<img src="https://m.360buyimg.com/babel/jfs/t12241/316/1209254779/4015/865bbc0f/5a1bf723Ncf2de886.png" />
						</li>
						<li>京东服饰</li>
						<li>京东超市</li>
						<li>生鲜</li>
						<li>全球购</li>
						<li>京东金融</li>
						
					</ul>
				</div>
				<div className="sh">
					<a></a>
				</div>
				<div className="er">
					<div></div>
				</div>
			</div>
		)
	}
}
export default Asidetop;
