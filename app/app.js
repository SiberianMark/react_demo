import React from 'react'
import { render } from 'react-dom';
import $ from 'jquery';
import NewsList from './NewsList.js';
import './app.css';

function get(url){
	return Promise.resolve($.ajax(url));
}
get('https://hacker-news.firebaseio.com/v0/topstories.json').then(function(){
	return Promise.all(stories.slice(0,30).map(itemId=>get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
}).then(function(items){
	render(<NewsList Items={items} />, $('#content')[0]);
}).catch(function(err){
	console.log('error occur',err);
});

render(<NewsList  />, $('#content')[0]);