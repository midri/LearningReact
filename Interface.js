import React, { Component } from 'react'
import {Picker} from 'react-native'
import { ImageBackground } from 'react-native'
import { Field, reduxForm } from "redux-form"
import ReactFontFace from 'react-font-face'
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
  CheckBox } from "native-base";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image
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
     Payment_types:  [{CardType: 'None', CardName: 'Select a card...'},{CardType: 'SEPA', CardName: 'SEPA'}, {CardType: 'Paypal', CardName: 'PAYPAL'}, {CardType: 'CreditCard', CardName: 'Credit Card'}],
     CC_types: [{CardType: 'VISA', CardName: 'VISA'},{CardType: 'MASTERCARD', CardName: 'MASTER CARD'}],
     SelectedCard:'',
     Selected_CC_Type:'',
     isAddingSEPA:false,
     isAddingPAYPAL: false,
     isAddingCCard: false
    } //close state 
  }//close constructor



    
 renderCheckbox({
    input, label, type, meta: { touched, error, warning }
  }) {
    return (
      <View>
        <Item rounded style={styles.inputGrp}>
          <CheckBox
            ref={c => (this.checkBox = c)}
            color={commonColors.brandPrimary}
            {...input}
            checked={!!input.value}
            onPress={() => input.onChange(!input.value)}
          />
          <Text onPress={() => { input.onChange(!input.value); }} style={styles.checkboxText}>{label}</Text>
        </Item>
        {(input.value === true || input.value === false)  && error
          ? <Text style={styles.formErrorText1}>
            {error}
          </Text>
          : <Text style={styles.formErrorText2}>error here</Text>}
      </View>
    );
  }

  loadPaymentMethods(){
    return this.state.Payment_types.map(
      PaymentT => (
       <Picker.Item label={PaymentT.CardName} value={PaymentT.CardType} />
      )
    )
  }
  //load credit card type
  loadCCTypes(){
    return this.state.CC_types.map(
      CCtype => (
       <Picker.Item label={CCtype.CardName} value={CCtype.CardType} />
      )
    )
  }
  
  //Set the selected Payment type and return what to render
  setPaymentState(){
    if(this.state.SelectedCard === 'SEPA'){
      this.state.isAddingSEPA = true;
      return(
        <div>
         <Field
                  name="iban"
                  component={InputField}
                  type="text"
                  label={<Text>IBAN</Text>}
                  //validate={[required]}
                />

                <Field
                  name="bankholder"
                  component={InputField}
                  type="text"
                  label={<Text>Bank holder name</Text>}
                  //validate={[required]}
                />

                <Field
                  name="agb_accepted"
                  component={this.renderCheckbox}
                  type="checkbox"
                  //validate={[checkedRequired]}
                  label={<Text>("agb_accepted")</Text>}
                />

                <Button
                  primary
                  block
                  large
                  style={styles.primaryBtn}
                  type="submit"
                  disabled={this.props.invalid || this.state.isAddingSEPA}
                  //onPress={() => this.props.addSEPA(this.state.formRef ? this.state.formRef.values : {}, navigation, this.state.firstname, this.state.lastname)}
                >
                  <Text
                    style={
                      Platform.OS === "android"
                        ? { fontSize: 16, textAlign: "center" }
                        : { fontSize: 16, fontWeight: "900" }
                    }
                  >
                    save
                  </Text>
                </Button>
        </div>
      )
    }
    else if(this.state.SelectedCard === 'CreditCard'){
      this.state.isAddingCCard = true;
      return(
        <div>
          <Field
                  name="Card Numbers"
                  component={InputField}
                  type="text"
                  label={<Text>Card Number</Text>}
                  //validate={[required]}
                  maxLength = {12}
                />
                <Picker
                  selectedValue={this.state.Selected_CC_Type}
                  onValueChange={(itemValue, itemIndex) => 
                  this.setState({Selected_CC_Type: itemValue})}>

                  // Dynamically loads Picker.Values from this.state.CCtypes.
                  {this.loadCCTypes()}
                </Picker>
                <Field
                  name="Card holder"
                  component={InputField}
                  type="text"
                  label={<Text>Bank holder name</Text>}
                  //validate={[required]}
                />
                <Field
                  name="CCV"
                  component={InputField}
                  type="text"
                  label={<Text>CVV</Text>}
                  //validate={[required]}
                  maxLength = {3}
                />

                <Field
                  name="agb_accepted"
                  component={this.renderCheckbox}
                  type="checkbox"
                  //validate={[checkedRequired]}
                  label={<Text>"I hereby Accept the terms and agree to perform necessary payments"</Text>}
                />

                <Button
                  primary
                  block
                  large
                  style={styles.primaryBtn}
                  type="submit"
                  disabled={this.props.invalid || this.state.isAddingSEPA}
                  //onPress={() => this.props.addSEPA(this.state.formRef ? this.state.formRef.values : {}, navigation, this.state.firstname, this.state.lastname)}
                >
                  <Text
                    style={
                      Platform.OS === "android"
                        ? { fontSize: 16, textAlign: "center" }
                        : { fontSize: 16, fontWeight: "900" }
                    }
                  >
                    save
                  </Text>
                </Button>
        </div>
      )
    }
    else if(this.state.SelectedCard === 'Paypal'){
      this.state.isAddingPAYPAL = true;
      return(
      <div>
           <Field
                  name="email"
                  component={InputField}
                  type="text"
                  label={<Text>Email</Text>}
                  //validate={[required]}
                  maxLength = {3}
                />
           <Field
                  name="password"
                  component={InputField}
                  type="text"
                  label={<Text>Email</Text>}
                  //validate={[required]}
                  maxLength = {3}
                />
                <Field
                  name="agb_accepted"
                  component={this.renderCheckbox}
                  type="checkbox"
                  //validate={[checkedRequired]}
                  label={<Text>"I hereby Accept the terms and agree to perform necessary payments"</Text>}
                />

                <Button
                  primary
                  block
                  large
                  style={styles.primaryBtn}
                  type="submit"
                  disabled={this.props.invalid || this.state.isAddingSEPA}
                  //onPress={() => this.props.addSEPA(this.state.formRef ? this.state.formRef.values : {}, navigation, this.state.firstname, this.state.lastname)}
                >
                  <Text
                    style={
                      Platform.OS === "android"
                        ? { fontSize: 16, textAlign: "center" }
                        : { fontSize: 16, fontWeight: "900" }
                    }
                  >
                    Save
                  </Text>
                </Button>
          </div>
          )
         }
    else{
      return(<Text>Nothing to Render</Text>)
    }
  }
  render(){
    const resizeMode = 'cover';
    return (
    <View style={{ 
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <Picker
          selectedValue={this.state.SelectedCard}
          onValueChange={(itemValue, itemIndex) => 
              this.setState({SelectedCard: itemValue})}>
            {this.loadPaymentMethods()}
          // Dynamically loads Picker.Values from this.state.userTypes
        </Picker>
        <div>
          DEBUG: {this.state.SelectedCard} 
         {this.setPaymentState()}
        </div>
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
//https://kylewbanks.com/blog/how-to-conditionally-render-a-component-in-react-native
//https://www.robinwieruch.de/conditional-rendering-react/
