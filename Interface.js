import React, { Component } from 'react'
import {Picker} from 'react-native'
import { ImageBackground } from 'react-native'
import ReactFontFace from 'react-font-face'
import t from 'tcomb-form-native';
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
        <Item error={error && touched} rounded style={styles.inputGrp}>
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
    return this.CC_types.map(
      CCtype => (
       <Picker.Item label={CCtype.CardName} value={CCtype.CardType} />
      )
    )
  }
  
  //Set the selected Payment type and return what to render
  setPaymentState(){
    if(SelectedCard === 'SEPA'){
      this.state.isAddingSEPA = true;
      return(
        <View>
         <Field
                  name="iban"
                  //component={InputField}
                  type="text"
                  //label here
                  validate={[required]}
                />

                <Field
                  name="bankholder"
                  //component={InputField}
                  type="text"
                  //label={trans("customer.profile.payment_method_add_sepa.account_holder")}
                  validate={[required]}
                />

                <Field
                  name="agb_accepted"
                  //component={this.renderCheckbox}
                  type="checkbox"
                  //validate={[checkedRequired]}
                  label={<Text>{trans("customer.profile.payment_method_add_sepa.agb_accepted")}</Text>}
                />

                <Button
                  primary
                  block
                  large
                  //style={styles.primaryBtn}
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
        </View>
      )
    }
    else if(SelectedCard === 'CreditCard'){
      this.state.isAddingCCard= true;
      return(
        <View>
          <Field
                  name="Card Numbers"
                  //component={InputField}
                  type="text"
                  //label={trans("customer.profile.payment_method_add_sepa.iban")}
                  validate={[required]}
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
                  //component={InputField}
                  type="text"
                  //label={trans("customer.profile.payment_method_add_sepa.account_holder")}
                  validate={[required]}
                />
                <Field
                  name="CCV"
                  //component={InputField}
                  type="text"
                  //label={trans("customer.profile.payment_method_add_sepa.account_holder")}
                  validate={[required]}
                  maxLength = {3}
                />

                <Field
                  name="agb_accepted"
                  component={this.renderCheckbox}
                  type="checkbox"
                  validate={[checkedRequired]}
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
        </View>
      )
    }
    else if(SelectedCard === 'Paypal'){
      this.state.isAddingPAYPAL = true;
      return(
      <View>
           <Field
                  name="CCV"
                  //component={InputField}
                  type="text"
                  //label={trans("customer.profile.payment_method_add_sepa.account_holder")}
                  validate={[required]}
                  maxLength = {3}
                />

                <Field
                  name="agb_accepted"
                  component={this.renderCheckbox}
                  type="checkbox"
                  validate={[checkedRequired]}
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
          </View>
      )
    }
    else{
      //Do nothing
    }
  }
  render(){
    const resizeMode = 'cover';
    return (
    <View>
      <Picker
        selectedValue={this.state.SelectedCard}
        onValueChange={(itemValue, itemIndex) => 
            this.setState({SelectedCard: itemValue})}>

        // Dynamically loads Picker.Values from this.state.userTypes.
        {this.loadPaymentMethods()}
      </Picker>
      <div>
        
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
