import React from 'react'; 
import { StyleSheet, Text, View,Platform , ImageBackground ,Button } from 'react-native';  
var mybackground = require('../assets/landing.jpg'); 
 
class Landing extends React.Component {  
	render(){   
		return(  
			<View> 
			 <ImageBackground  
		        source = {mybackground}  
		        style={{width: '100%', height: '100%'}}  
		        >  
		          <View style={styles.viewStyle}>  
			            <Text 
			            style={styles.textStyle} 
			            > 
			            	Welcome to Poke Search 
			            </Text> 
			            <Button 
			            title="Start Searching"  
			            color="#841584" 
			            onPress={()=>{this.props.switchScreen("Search")}}
			            /> 
			          </View>
        	</ImageBackground>  
			</View>
			)
	}
}  

const styles ={   
  viewStyle:{  
    flex:1, 
    flexDirection:'column', 
    justifyContent:'center' 

  }, 
  textStyle:{ 
    margin:67,
    fontSize:22
  }
   
}


export default Landing;