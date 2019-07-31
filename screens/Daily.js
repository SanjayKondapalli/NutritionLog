import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import DatePicker from '@bit/lekanmedia.shared-ui.date-picker';
//<DatePicker onSelect={value => alert(value)} />

export default class Daily extends Component {

  render() {
    return (
      <View style={styles.cal}>
        
		    <Text>Hello World</Text>
	      
      </View>
      
    );
  }

}

const styles = StyleSheet.create({
    cal:{
      margin: 20,
	    display: 'flex',
	    justifyContent: 'center',
	    alignItems: 'center',
	    width: 200
    },
});


