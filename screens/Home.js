import React, {Component} from 'react';
import {Alert, Button, Modal, StyleSheet, TextInput, Text, View} from 'react-native';


var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();

var tempCal = 0;
var tempProt = 0;
var tempFat = 0;
var tempCarbs = 0;

class NutInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', text2: '', text3: '' };
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
          <Text>Protein: </Text>
          <TextInput
            style={styles.TextInputStyle}
            keyboardType='numeric'
            onChangeText={(text2) => this.onChanged({text2})}
            value={this.state.text2}
          />
        </View>
        <View>
          <Text>Fat: </Text>  
          <TextInput
            style={styles.TextInputStyle}
            keyboardType='numeric'
            onChangeText={(text3) => this.setState({text3})}
            value={this.state.text3}
          />
        </View>
      </View>
    );
  }
}

class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="none"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <NutInput />
          <View style={{marginTop: 22}}>
            
            <View>
              
              <Button
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                title="Confirm">
              </Button>
            </View>
          </View>
        </Modal>
        
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              this.setModalVisible(true);
            }}
            title="Add Nutrients">
          </Button>
        </View>
      </View>
    );
  }
}

class Greeting extends Component {
  render(){
    return(
      <View>
        <Text style={styles.title}>{this.props.name}'s Stats for {month}/{date}/{year}</Text> 
      </View>
    );
  }
}

class Nutrients extends Component {
  render(){
    return(
      <View>
        <View style={{backgroundColor: '#F0F3BD'}}>
          <Text style={{textAlign: 'left', color:'#FFFFFF',fontSize:40}}>Calories</Text>
          <Text style={{textAlign: 'right',color:'#FFFFFF',fontSize:40}}>{tempCal} cal</Text>
        </View>
        <View style={{backgroundColor: '#02C39A'}}>
          <Text style={{color:'#FFFFFF',fontSize:40}}>Protein</Text>
          <Text style={{textAlign: 'right',color:'#FFFFFF',fontSize:40}}>{tempProt} g</Text>
        </View>
        <View style={{backgroundColor: '#00A896'}}>
          <Text style={{color:'#FFFFFF',fontSize:40}}>Fat</Text>
          <Text style={{textAlign: 'right',color:'#FFFFFF',fontSize:40}}>{tempFat} g</Text>
        </View>
        <View style={{backgroundColor: '#028090'}}>
          <Text style={{color:'#FFFFFF',fontSize:40}}>Carbohydrates</Text>
          <Text style={{textAlign: 'right',color:'#FFFFFF',fontSize:40}}>{tempCarbs} g</Text>
        </View>
        
      </View>
     
    );
  }
}

export default class Home extends Component {
  onPress=()=> {
    console.log("Hello There");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Greeting name='Sanjay'/>
        </View>
        <View>
          <Nutrients />
        </View>
        <View>
          <ModalExample />
        </View>
        
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#2F4F4F',
  },
  title: {
    height: 90, 
    textAlignVertical: 'center',
    backgroundColor: '#05668D',
    color: '#FFFFFF',
    alignItems: 'center',
    fontSize: 25,
    top: 0,
  },
  nutrients:{ 
    height: 100,
    textAlignVertical: 'center',
  },
  buttonContainer:{
    backgroundColor: '#05668D',
    margin: 20,
  },
  TextInputStyle: {  
    textAlign: 'center',  
    height: 40,  
    borderRadius: 10,  
    borderWidth: 2,  
    borderColor: '#009688',  
    marginBottom: 10  
}  

});
