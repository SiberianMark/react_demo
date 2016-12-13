/*es6模块化编程，引入各个依赖模块*/
import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';

//创建helloWorld组件类，ES6新增类特性class extends
class HelloWorld extends React.Component{
	render(){
		return (
			<div>Hello World</div>
		);
	}
}
//渲染到content盒子内
render(<HelloWorld></HelloWorld>,$('#content')[0]);
