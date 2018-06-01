import React, { Component } from 'react';
import {Picker} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { ImageBackground } from 'react-native';
import { Field, reduxForm } from "redux-form";
import ReactFontFace from 'react-font-face';
import { ScrollView, View, Platform } from "react-native";
import {
  Body, 
  Container, 
  Content, 
  Header, 
  Left,
  Button, 
  Icon,
  H2, 
  Item, 
  Input, 
  Label, 
  List,
  ListItem,
  CheckBox } from "native-base";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,

} from 'react-native'

 const InputField =function(props){
  //these are used in the form below to validate the input in a synchronous manner
  const {
     input, label, type, meta: {touched, error, warning}
  }= props;
 }
   
class Register extends Component{
  constructor(props){
    super(props);
    //no need for state
    this.state={
    SelectedCard: '',
     PMethods:[
       {Type: 'SEPA', detail: 'AB12CD34EF56GH78'},
       {Type: 'CreditCard',detail: '5847965856324521'},
       {Type: 'Paypal',detail: 'test@TEST.com'},
     ],
     isAddingSEPA:false,
     isAddingPAYPAL: false,
     isAddingCCard: false,
    } //close state 
  }//close constructor

 OnPressDo(data){
   this.setState({SelectedCard : data})
   return
   (
     <View>
       {this.setPaymentState()}
     </View>
   )
 }
  //Set the selected Payment type and return what to render
  setPaymentState(value){
    if(this.state.SelectedCard === 'SEPA'){
      this.state.isAddingSEPA = true;
      return(<View style={styles.container}>
              <form>
                <label> IBAN
                  <input name="iban"
                    component={InputField}
                    type="text"
                    //label={<Text>IBAN</Text>}
                    >
                  </input>
                </label>
                <label> Bank Holder
                  <input name="bankholder"
                    component={InputField}
                    type="text"
                    //label={<Text>Bank</Text>}
                    >
                  </input>
                </label>
  
                <button>
                  <Text  style={styles.submit}> UPDATE </Text>
                </button>
              </form>
              <Text>SEPA CHOSEN</Text>
            </View>)
    } 
    else if(this.state.SelectedCard === 'CreditCard'){
      this.state.isAddingCCard = true;
        return(<View style={styles.container}>
              <form>
                <label> CARD NUMBER
                  <input name="ccnumber"
                    component={InputField}
                    type="text"
                    //label={<Text>IBAN</Text>}
                    >
                  </input>
                </label>
                <label> Bank Holder
                  <input name="bankholder"
                    component={InputField}
                    type="text"
                    //label={<Text>Bank</Text>}
                    >
                  </input>
                </label>
                <label> CVV Digits
                  <input name="cvv"
                    component={InputField}
                    type="text"
                    maxLength={3} 
                    //label={<Text>Bank</Text>}
                    >
                  </input>
                </label>
                <Picker
                  selectedValue={this.state.Selected_CC_Type}
                  onValueChange={(itemValue, itemIndex) => 
                      this.setState({Selected_CC_Type: itemValue})}>
                    {this.loadCCTypes()}
                  // Dynamically loads Picker.Values from this.state.userTypes
                </Picker>
  
                <button>
                  <Text  style={styles.submit}> UPDATE </Text>
                </button>
              </form>
              <Text>Credit Card CHOSEN</Text>
            </View>)
    }
    else if(this.state.SelectedCard === 'Paypal'){
      this.state.isAddingPAYPAL = true;
      return(<View style={styles.container}>
              <form>
                <label> EMAIL
                  <input name="EMAIL"
                    component={InputField}
                    type="text"
                    //label={<Text>IBAN</Text>}
                    >
                  </input>
                </label>
                <label> Password
                  <input name="PaypalPassword"
                    component={InputField}
                    type="password"
                    //label={<Text>Bank</Text>}
                    >
                  </input>
                </label>
                <button>
                  <Text  style={styles.submit}> UPDATE </Text>
                </button>
            </form>
              <Text>PAYPAL CHOSEN</Text>
            </View>)
    }
    else{
      return(<Text>Nothing to Render</Text>)
    }
  }
  
   MyPaymentMethods(){
     return this.state.PMethods.map((Payment) => {
       return(
       <button 
         onPress={() => onPressDo(Payment.Type)}>
           <Text>{Payment.Type} {"\n"}</Text>
           <Text>{Payment.detail} {"\n"}</Text>
          
       </button>   
        
      )
     }// close arrow
    )//Close Payment
   }//close function


  
  render(){
    const resizeMode = 'cover';
    return (
      <View>
        <list>
            {this.MyPaymentMethods()}
            
        </list>
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
  container: {
      padding: 10,
      marginTop: 3,
      alignItems: 'center',
   },
  
  submit: {
    textAlign: 'center',
    paddingLeft: 60,
    paddingRight: 60,
    fontSize: 18,
    
  },
});
AppRegistry.registerComponent('App', () => Register)
//https://kylewbanks.com/blog/how-to-conditionally-render-a-component-in-react-native
//https://www.robinwieruch.de/conditional-rendering-react/
