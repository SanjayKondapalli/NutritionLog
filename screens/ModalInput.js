import React, {Component} from 'react';
import {Button, StyleSheet, TextInput, Text, View} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'no', value: 0 },
    {label: 'yes', value: 1 }
];

export default class NutInput extends Component {
    constructor(props) {
      super(props);
      this.state = { text: '', text2: '', text3: '', text4: '', text5: '' };
    }
  
    onChanged(text){
      let newText = '';
      let numbers = '0123456789';
  
      for (var i=0; i < text.length; i++) {
          if(numbers.indexOf(text[i]) > -1 ) {
              newText = newText + text[i];
          }
          else {
              // your call back function
              alert("please enter numbers only");
          }
      }
      this.setState({ text: newText });
    }
  
  
    render(){
      return(
        <View>
          <View>
            <Text>Calories: </Text> 
            <TextInput
              style={styles.TextInputStyle}
              keyboardType='numeric'
              onChangeText={(text) => this.onChanged(text)}
              value={this.state.text}
               
            />
          </View>
          <View>
            <Text>Protein(g): </Text>
            <TextInput
              style={styles.TextInputStyle}
              keyboardType='numeric'
              onChangeText={(text2) => this.setState({text2})}
              value={this.state.text2}
            />
          </View>
          <View>
            <Text>Fat(g): </Text>  
            <TextInput
              style={styles.TextInputStyle}
              keyboardType='number-pad'
              onChangeText={(text3) => this.setState({text3})}
              value={this.state.text3}
            />
          </View>
          <View>
            <Text>Carbohydrates(g): </Text>  
            <TextInput
              style={styles.TextInputStyle}
              keyboardType='number-pad'
              onChangeText={(text4) => this.setState({text4})}
              value={this.state.text4}
            />
          </View>
          <View><Text style={{textDecorationLine: 'underline'}}>Optional</Text></View>
          <View>
            <Text>Dish Name: </Text>
            <TextInput
              style={styles.TextInputStyle}
              onChangeText={(text5) => this.setState({text5})}
              value={this.state.text5}
            />
          </View>
          <View>
            <Text>Store Dish in Library?</Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress={(value) => {this.setState({value:value})}}
            />
          </View>
          <View style={{marginTop: 22}}>  
            <View>             
              <Button
                onPress={() => {
                  this.props.setModalVisible(false);
                  this.props.updateNutValues(this.state.text, this.state.text2, this.state.text3, this.state.text4);
                }}
                title="Confirm">
              </Button>
            </View>
          </View>
        </View>
      );
    }
}


const styles = StyleSheet.create({
    TextInputStyle: {  
      textAlign: 'center',  
      height: 40,  
      borderRadius: 10,  
      borderWidth: 2,  
      borderColor: '#009688',  
      marginBottom: 10  
  }  
  
});
  
