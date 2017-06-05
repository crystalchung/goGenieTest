import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Printptdata extends Component {

  clickMe() {
  alert('Have not created this page');}

  render() {
    var sample = {
     uri: 'http://images.all-free-download.com/images/graphiclarge/harry_potter_icon_6825007.jpg',
     jtitle: '兼職店務員',
     company: 'HeyCompany',
     date: '06月05日（星期一）',
     mohr: '月薪',
     salary: '$20,000-23,000',
     location: '九龍城區',
     apply: '接受申請',
     };
    return (



        <View>

          <TouchableOpacity style={styles.button} onPress={this.clickMe.bind(this)}>
          <Text style={{color: '#6ddb6d',fontSize: 10, textAlign: 'right'}}>{sample.apply}</Text>

          <View style={{flexDirection: 'row'}}>
          <Image source={sample} style={{width: 50,height: 50,}}/>
          <Text style={{fontSize: 15, color:'#1d1047',fontWeight: 'bold'}}>{sample.jtitle} {'\n'}
          <Text style={{fontSize: 10,fontWeight: 'normal'}}>{sample.company}</Text></Text>
          </View>

          <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 25, color:'#595959'}}>{sample.salary}</Text>
          <Text style={{marginTop:5,fontSize: 10, color:'#595959'}}> {sample.mohr}</Text>
          </View>

          <View style={{flexDirection: 'row', borderBottomColor: '#bbb', borderBottomWidth: StyleSheet.hairlineWidth }}>
          <Text style={{fontSize: 10}}>工作薪金{'\n'}</Text>
          </View>

           <Text style={{fontSize: 5}}>{'\n'}</Text>
           <View style={{flexDirection: 'row'}}>
           <Image style={{width: 10,height: 10}} source={require('./img/location.png')}/>
           <Text style={{fontSize: 10}}>  {sample.location}</Text>
           </View>

           </TouchableOpacity>
           </View>
         )
  }
}


const styles = StyleSheet.create({

  button:{
    backgroundColor:'white',
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: '#cdcdcd',
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
  }

});

AppRegistry.registerComponent('Printptdata', () => Printptdata);
