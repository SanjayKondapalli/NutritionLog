import React, {Component} from 'react';
import {Alert, Button, Modal, StyleSheet, TextInput, Text, View} from 'react-native';
import ModalInput from './ModalInput.js'
//import ind from '../node_modules/fs/index.js'
//import firebase from 'react-native-firebase';

var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();

var tempCal = 0;
var tempProt = 0;
var tempFat = 0;
var tempCarbs = 0;

//ind.heyo;

class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  updateNutValues(){

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
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <ModalInput />
          <View style={{marginTop: 22}}>
            
            <View>             
              <Button
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.updateNutValues();
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
            title="Add Nutrients"
          />
          
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
  state = {
    Calories: 0,
    Protein: 0,
    Fat: 0,
    Carbs: 0
  }
  render(){
    return(
      <View>
        <View style={{backgroundColor: '#F0F3BD'}}>
          <Text style={{textAlign: 'left', color:'#FFFFFF',fontSize:40}}>Calories</Text>
          <Text style={{textAlign: 'right',color:'#FFFFFF',fontSize:40}}>{this.state.Calories} cal</Text>
        </View>
        <View style={{backgroundColor: '#02C39A'}}>
          <Text style={{color:'#FFFFFF',fontSize:40}}>Protein</Text>
          <Text style={{textAlign: 'right',color:'#FFFFFF',fontSize:40}}>{this.state.Protein} g</Text>
        </View>
        <View style={{backgroundColor: '#00A896'}}>
          <Text style={{color:'#FFFFFF',fontSize:40}}>Fat</Text>
          <Text style={{textAlign: 'right',color:'#FFFFFF',fontSize:40}}>{this.state.Fat} g</Text>
        </View>
        <View style={{backgroundColor: '#028090'}}>
          <Text style={{color:'#FFFFFF',fontSize:40}}>Carbohydrates</Text>
          <Text style={{textAlign: 'right',color:'#FFFFFF',fontSize:40}}>{this.state.Carbs} g</Text>
        </View>
        <View>
        <ModalExample 
          Calories={this.state.Calories}
          Protein={this.state.Protein}
          Fat={this.state.Fat}
          Carbs={this.state.Carbs}
        />
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
