import React, { Component } from 'react'
import {Picker} from 'react-native'
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
    this.state={
     Payment_types:  [{CardType: 'SEPA', CardName: 'SEPA'}, {CardType: 'Paypal', CardName: 'PAYPAL'}, {CardType: 'CreditCard', CardName: 'Credit Card'}],
    }
  }
  loadPaymentMethods(){
    return this.state.Payment_types.map(
      PaymentT => (
       <Picker.Item label={PaymentT.CardName} value={PaymentT.CardType} />
      )
    )
  }
  render(){
    const resizeMode = 'cover';
    return (
      <View>
    <Picker
      selectedValue={this.state.selectedUserType}
      onValueChange={(itemValue, itemIndex) => 
          this.setState({selectedUserType: itemValue})}>

      // Dynamically loads Picker.Values from this.state.userTypes.

      {this.loadPaymentMethods()}
    </Picker>
  </View>
      )
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
