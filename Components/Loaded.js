import React from 'react'; 
import {ScrollView,Text ,Image,View,FlatList} from 'react-native';  
import {ListItem} from 'native-base';

class Loaded extends React.Component {   
	render(){   
		const pokemon=this.props.pokedata;
		return(   
			<ScrollView >
			<Text style={styles.header}>Rank-#{pokemon.id}</Text> 
			<Text style={styles.header}>Name-{pokemon.name}</Text>  
				<View style={styles.viewStyle}>  
					<Image source={{uri:pokemon.sprites.front_default}} style={styles.imageStyle}/>
				</View>  

				<View >  
					<ListItem itemDivider style={styles.listStyle}>   
						<Text style={{fontWeight:'bold'}}>Size</Text>
					</ListItem>  

					<ListItem >   
						<Text>Height - {pokemon.height}</Text>
					</ListItem>  

					<ListItem >   
						<Text>Weight - {pokemon.weight}</Text>
					</ListItem> 

					<ListItem itemDivider style={styles.listStyle}>   
						<Text style={{fontWeight:'bold'}}>Abilities</Text>
					</ListItem>  

					<FlatList 
						data={pokemon.abilities}  
						renderItem={ 
							({item}) =>  
							<ListItem> 
							<Text>{item.ability.name}</Text> 
							</ListItem> 
						} 
					>  
					</FlatList>
				</View>  
			</ScrollView>
			)
	}
} 

styles={  
	header:{
		color:'red', 
		fontSize:30,
		textAlign:'center'
	}, 
	viewStyle:{  
		justifyContent:'center',
		alignItems:'center',
		flex:1

	},
	imageStyle:{  
		justifyContent:'center',
		alignItems:'center', 
		height:200,
		width:200,
		flex:1
	}, 
	listStyle:{  
		width:'100%',
		flex:1
	}
} 

export default Loaded;