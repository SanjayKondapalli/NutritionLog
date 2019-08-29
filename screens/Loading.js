import React, {Component} from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Auth extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#028090',
    }
  });