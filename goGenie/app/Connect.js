import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Connect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> 即時對話 </Text>
        </View>
          <Text style={styles.main}></Text>
      </View>
    )
  }
}



  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    TabText:{
      color:'#8c8c8c',
    },
    TopTabbar: {
      top: 40,
      backgroundColor:'#1d1047',
      borderBottomColor: '#cdcdcd',
      borderBottomWidth: 2,
    },
    header:{
    backgroundColor: '#1d1047',
    alignItems: 'center',
    justifyContent: 'center',
    },

    headerText: {
      color: 'white',
      fontSize: 18,
      padding: 15,
    },
    main: {
      fontSize: 0,
      margin: 25,
      marginBottom: 5,
    },

  });


AppRegistry.registerComponent('Connect', () => Connect);
