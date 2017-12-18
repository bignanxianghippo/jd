
import React from 'react';
import './../scss/top.scss';

class Top extends React.Component{
	render(){
		return(
			<div className="wrap-top">
				<div className="top">
					<div>
						<span>北京</span>
						<span className="iconfont icon-dizhi"></span>	
					</div>
					<ul>
						<li>你好，请登录<span>免费注册</span></li>
						<li><a>|</a></li>
						<li>我的订单</li>
						<li><a>|</a></li>
						<li>我的京东</li>
						<li><a>|</a></li>
						<li>京东会员</li>
						<li><a>|</a></li>
						<li>企业采购</li>
						<li><a>|</a></li>
						<li>客户服务</li>
						<li><a>|</a></li>
						<li>网站导航</li>
						<li><a>|</a></li>
						<li>手机京东</li>
					</ul>
				</div>
			</div>		
		)
	}
}
export default Top;

