import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Printdata extends Component {
  clickMe() {
  alert('Have not created this page');}

  render() {
    var sample = {
     uri: 'http://images.all-free-download.com/images/graphiclarge/harry_potter_icon_6825007.jpg',
     jtitle: '兼職店務員',
     company: 'HeyCompany',
     date: '06月05日（星期一）',
     stime: '12:00',
     sampm: 'AM',
     ftime: '09:00',
     fampm: 'PM',
     salary: '$70',
     location: '九龍城區',
     appNo:'0',
     totalNo:'10',
     apply: '接受申請',//if appNo>=totalNo apply='已滿'
     };
    return (


        <View>
          <View style={styles.jobhead}>
          <Text style={{marginLeft: 8}}>{sample.date}</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.clickMe.bind(this)}>
          <Text style={{color: '#6ddb6d',fontSize: 10, textAlign: 'right'}}>{sample.apply}</Text>
          <View style={{flexDirection: 'row'}}>
          <Image source={sample} style={{width: 50,height: 50,}}/>
          <Text style={{fontSize: 15, color:'#1d1047',fontWeight: 'bold'}}>{sample.jtitle} {'\n'}
          <Text style={{fontSize: 10,fontWeight: 'normal'}}>{sample.company}</Text></Text>
          </View>

          <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 25, color:'#595959'}}>{sample.stime}</Text>
          <Text style={{marginTop:5,fontSize: 10, color:'#595959'}}> {sample.sampm}</Text>

          <Text style={{marginLeft:34,fontSize: 25, color:'#595959'}}>{sample.ftime}</Text>
          <Text style={{marginTop:5,fontSize: 10, color:'#595959'}}> {sample.fampm}</Text>

          <Text style={{marginLeft:43,fontSize: 25, color:'#595959'}}>{sample.salary}</Text>
          </View>

          <View style={{flexDirection: 'row', borderBottomColor: '#bbb', borderBottomWidth: StyleSheet.hairlineWidth }}>
          <Text style={{fontSize: 10}}>開始時間</Text>
          <Text style={{marginLeft:75,fontSize: 10}}>完結時間</Text>
          <Text style={{marginLeft:85,fontSize: 10}}>工作時薪 {'\n'}</Text>
          </View>

           <Text style={{fontSize: 5}}>{'\n'}</Text>
           <View style={{flexDirection: 'row'}}>
           <Image style={{width: 10,height: 10}} source={require('./img/location.png')}/>
           <Text style={{fontSize: 10}}>  {sample.location}</Text>
           </View>

           <View style={{flexDirection: 'row'}}>
           <Image style={{width: 10,height: 10}} source={require('./img/person.png')}/>
           <Text style={{fontSize: 10}}>  {sample.appNo} / {sample.totalNo}</Text>
           </View>

           </TouchableOpacity>
           </View>
         )
  }
}


const styles = StyleSheet.create({
  jobhead:{
    borderBottomWidth:1,
    borderBottomColor: '#cdcdcd',
  },
  button:{
    backgroundColor:'white',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
  }

});

AppRegistry.registerComponent('Printdata', () => Printdata);
