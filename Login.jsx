import React, { Component } from 'react'
import { ImageBackground } from 'react-native'
import ReactFontFace from 'react-font-face'
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
    const resizeMode = 'cover';
    return (
    //Container layout
      <ImageBackground
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }}
            imageStyle={{
              resizeMode:'stretch',
            }}
        >

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
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  submit: {
    color: 'red',
  },
});
AppRegistry.registerComponent('App', () => Register)
