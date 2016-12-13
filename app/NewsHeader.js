//NewsHeader.js
//这样就一个组件了
//1. 编写组件结构
//2.具体实现
//2.1 图片资源模块化，并输出
//2.2 样式资源模块化。并输出
import React from 'react';
import imageLogo from './y18.jpg';
import './NewsHeader.css';
export default class NewsHeader extends React.Component{
	//getLogo()获取Logo并返回带logo的组件,{imageLogo}是模块化之后的资源文件，也就是图片路径，需要对应的模块化插件 url-loader
	getLogo(){//用函数细化每个部分的输出最后合并
		return (
			<div>
			 	<a href="https://news.ycombinator.com/"><img src={imageLogo} /></a>
			</div>
		);
	}
	getTitle(){//用函数细化每个部分的输出最后合并
		return (
			<div className="newHeader-title">
				<a className="newsHeader-textLink" href="https://news.ycombinator.com/">Hacker News</a>
			</div>
		);
	}
	getNav(){
	  	var navLinks=[//可为动态数据
	  		{
	  			name:'new',
	  			url:'newest'
	  		},
	  		{
	  			name:'comments',
	  			url:'newcomments'
	  		},
	  		{
	  			name:'show',
	  			url:'show'
	  		},
	  		{
	  			name:'ask',
	  			url:'ask'
	  		},
	  		{
	  			name:'jobs',
	  			url:'jobs'
	  		},
	  		{
	  			name:'submit',
	  			url:'submit'
	  		}
	  	];
	  	return (
			<div>
			{//大括号内可以写js代码
				navLinks.map(function(navLink){//循环输出每个导航项
					return (
						<a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={"https://news.ycombinator.com/"+ navLink.url}> 
						{navLink.name}</a>
					);
				})	

			}
			</div>
	  	);
    }
    getLogin() {
		return (
		     <div className="newsHeader-login">
		       <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?goto=news">login</a>
		     </div>
		);
	}
	render(){
		return (
			<div className="newsHeader">
			{this.getLogo()}
			{this.getTitle()}
			{this.getNav()}
			{this.getLogin()}
			</div>
		);
	}
}