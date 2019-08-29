import React, {Component} from 'react';
import {Alert, Button, Modal, StyleSheet, TextInput, Text, View} from 'react-native';
import ModalInput from './ModalInput.js'
import AsyncStorage from '@react-native-community/async-storage'

//import ind from '../node_modules/fs/index.js'
//import firebase from 'react-native-firebase';

var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();


class ModalExample extends Component {
  constructor(){
    super();
    this.state = {
      modalVisible: false

    }
  }

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
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <ModalInput
            updateNutValues={this.props.updateNutValues}
            setModalVisible={this.setModalVisible.bind(this)}
          />
          
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
  constructor(){
    super();
    this.state = {
      Calories: 0,
      Protein: 0,
      Fat: 0,
      Carbs: 0,
    }
  }

  componentDidMount(){
    await AsyncStorage.getItem(
      'NutritionApp:Calories'
    ).then(Calories => {
      this.setState({Calories})
    })

    await AsyncStorage.getItem(
      'NutritionApp:Protein'
    ).then(Protein => {
      this.setState({Protein})
    })

    await AsyncStorage.getItem(
      'NutritionApp:Fat'
    ).then(Fat => {
      this.setState({Fat})
    })

    await AsyncStorage.getItem(
      'NutritionApp:Carbs'
    ).then(Carbs => {
      this.setState({Carbs})
    })

    this.resetNutValues();
  }

  updateNutValues(cals, proteins, fats, carbs){
    if(cals != 0){
      this.setState({
        Calories: this.state.Calories + parseInt(cals)
      })
    }
    if(proteins != 0){
      this.setState({
        Protein: this.state.Protein + parseInt(proteins),
      })
    }
    if(fats != 0){
      this.setState({
        Fat: this.state.Fat + parseInt(fats),
      })
    }
    if(carbs != 0){
      this.setState({
        Carbs: this.state.Carbs + parseInt(carbs)
      })
    }
    
    AsyncStorage.setItem(
      '@NutritionApp:Calories',
      JSON.stringify(this.state.Calories)
    )

    AsyncStorage.setItem(
      '@NutritionApp:Protein',
      this.state.Protein
    )

    AsyncStorage.setItem(
      '@NutritionApp:Fat',
      this.state.Fat
    )

    AsyncStorage.setItem(
      '@NutritionApp:Carbs',
      this.state.Carbs
    )

  }

  resetNutValues(){
    var day = new Date();
    var newDay = day.getHours();
    if(newDay == 0){
      this.setState({
        Calories: 0,
        Protein: 0,
        Fat: 0,
        Carbs: 0
      })
    }
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
          updateNutValues={this.updateNutValues.bind(this)}
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
