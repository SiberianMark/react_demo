//NewsItem.js
//这样就一个组件了
//1. 编写组件结构
//2.具体实现
import React from 'react';
import './NewsItem.css';
import URL from 'url';

export default class NewsItem extends React.Component {
  getDomain() {
	 return URL.parse(this.props.item.url).hostname;
  }
  getTitle(){
  	return (
  		<div>
  			<a className="newsItem-titleLink" href={this.props.item.url}>{this.props.title}</a>
  			 {
		         this.props.item.url && <span className="newsItem-domain"><a href={'https://news.ycombinator.com/from?site=' + this.getDomain()}>({this.getDomain()})</a></span>
		     }
  		</div>
  	);
  }
  getCommentLink(){//评论链接
  	var commentText="discuss";
  	if(this.props.item.kids && this.props.item.kids.length){
  		commentText=this.props.item.kids.length+'comment';
  	}
  	return (
		<a href={'https://news.ycombinator.com/item?id='+ this.props.item.id}>{commentText}</a>
  	);
  }
  getSubtext(){//分数，作者，时间，评论数
	return (
		<div className="newsItem-subtext">
			{this.props.item.score}points by <a href={'https://news.ycombinator.com/user?id='+this.props.item.by}>{this.props.item.by}</a>{Moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
		</div>
	);
  }
  render() {
    return (
        <div className="newsItem">
          this.getTitle();
          getCommentLink()
        </div>
        );
  }
}
