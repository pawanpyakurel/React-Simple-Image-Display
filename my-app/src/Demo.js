import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = (props) => {
	return <div className ="maindiv_style">
		<h1> Hello {props.name} </h1>
		<h2> First demo of react </h2>
    </div>
}
export default Demo;
