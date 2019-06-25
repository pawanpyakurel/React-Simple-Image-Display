import React,{Component} from 'react';
import './avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist'

	class Avatar extends Component{
		
		constructor(){
			super();
			this.state = {
				name: "Welcome To React World"
			}
		}
		namechange(){
			this.setState({
				name: "React is amazing!!! "
			})
		}

		render(){

			const avatarlistarray = [
		{
			id : "1",
			name :"Pawan",
			work : "Java Developer"
		},

		{
			id : "2", 
			name : "Prabhat", 
			work : "Python Developer",
		},

		{
			id :  "3", 
			name : "Bikrant",
			work : "UI Developer",
		},

		{
			id :  "4",
			name : "Sriraj", 
			work : "Floater Developer",
		}
	]

    const arrayavatarcard = avatarlistarray.map( (avatarcard, i) => {
		return <Avatarlist key ={i} id = {avatarlistarray[i].id}
 				    name ={avatarlistarray[i].name} 
 				    work ={avatarlistarray[i].work}/>
	} )

			return(<div className = "mainpage">
			<h1> {this.state.name} </h1>
 			{arrayavatarcard}
			<button onClick = {() => this.namechange() }> Subscribe </button>
		</div>
		)
	}
}

export default Avatar;