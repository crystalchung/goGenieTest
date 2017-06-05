import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class MyDetail extends Component {
  clickMe() {
  alert('Have not created this page');}

  render() {
      var sample = {
       uri: 'http://images.all-free-download.com/images/graphiclarge/harry_potter_icon_6825007.jpg',
      };
    return (

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}> 用戶資料 </Text>
          </View>

          <View style={{alignItems: 'center'}}>
          <Image source={sample} style={{borderRadius:75, width: 150,height: 150,}}/>
          </View>

          <View style={styles.jobhead}>
          <Text style={{marginLeft: 8}}>個人資料強度</Text>
          </View>

          <View style={styles.button}>
          <Text>State some information here.</Text>
          </View>
           </View>
         )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  jobhead:{
    margin: 1,
    borderBottomWidth:1,
    borderBottomColor: '#cdcdcd',
    borderTopWidth:1,
    borderTopColor: '#cdcdcd',
    justifyContent: 'center',
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

  button:{
    backgroundColor:'white',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
  },

  button:{
    backgroundColor:'white',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
  }

});

AppRegistry.registerComponent('MyDetail', () => MyDetail);
