import React from 'react'; 
import {View,Text} from 'react-native';  
import { Container, Header, Left, Body, Right, Button, Icon, Title,Item, Input } from 'native-base';
import Loding from './Loding.js'; 
import Loaded from './Loaded.js'; 
import axios from 'axios';
class Search extends React.Component { 

	state={  
		search:"", 
		onCall:true,
		data:{}
	}   
	
	searchPoke=()=>{  
			var self=this; 
		this.setState({onCall:true})
	axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.search.toLowerCase())
	.then((res)=>{   
		self.setState({data:res.data}); 
		self.setState({onCall:false});  
		console.log("In the Search Poke function")

	}) 
	.catch(err=>{console.log(err)});
	}
	renderBody=()=>{   
		if(this.state.onCall){  
			return(  
				<Loding/>
				)
		} 
		else {  
			return(  
				<Loaded pokedata={this.state.data}/>
				)
		}

	} 


	render(){  
		return(  
			<View>  
			        <Header 
			        searchBar 
			        rounded
			        >  
				        <Item> 
				         	<Icon name="ios-search" 
				         	onPress={this.searchPoke} 
				         	/> 
				         	<Input 
				         	value ={this.state.search} 
				         	placeholder="Search Pokemon"
				         	onChangeText={(pokename)=>{this.setState({search:pokename})}} 
				         	/>
				        </Item> 

			        </Header> 
			        {this.renderBody()}
			        
			</View>

			)
	}

} 

export default Search; 