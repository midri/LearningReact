import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

class Register extends Component{
  constructor(props){
    super(props);
    //no need for state
  }
  render(){
    return (
    //Container layout
     <View style = {{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
        <form>
          <label> Username: 
            <input type="text" name="name" />
          </label>
          <label> Password: 
            <input type="password" name="Password" />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </View>
    );
  }
}
AppRegistry.registerComponent('App', () => Register)
