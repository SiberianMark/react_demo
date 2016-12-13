//NewsList.js组件化开发,组件树顶端组件
//这样就一个组件了
//1. 编写组件结构,引入子组件
//2.具体实现

import React from 'react';
import NewsHeader from './NewsHeader.js';
import NewsItem from './NewsItem.js';

export default class NewsList extends React.Component {
  render() {
    return (
        <div className="newsList">
          <NewsHeader />
          <div className="newsList-newsItem">
            {
              (this.props.items).map(function(item, index) {
                return (
                    <NewsItem key={item.id} item={item} rank={index+1} />
                    );
              })
            }
          </div>
        </div>
    );
  }
}