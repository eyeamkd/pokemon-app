import React from 'react';
import { StyleSheet, Text, View,Platform , ImageBackground ,Button } from 'react-native';  
import Landing from './Components/Landing.js';
import Search from './Components/Search.js';

var mybackground = require('./assets/landing.jpg'); 
export default class App extends React.Component { 
  state={  
      currentScreen:"Landing"
    }   

    switchScreen=(currentScreen)=>{  
      this.setState({currentScreen});

    } 

    renderScreen=()=>{  
      if(this.state.currentScreen ==='Landing'){  
        return (  
          <Landing switchScreen={this.switchScreen} />
          )
      } 
      else if(this.state.currentScreen==='Search'){  
        return(  
          <Search/>
          )
      }
    }
  render() { 
    
    return ( 
      <View style={styles.container}> 
      {this.renderScreen()}
      </View> 

    );
  }
}

const styles ={  
  container : {  
    flex:1, 
    marginTop:Platform.OS === "android" ? 24 : 0

  },  
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
