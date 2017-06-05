
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  DrawerLayoutAndroid,
  TouchableOpacity,
} from 'react-native';
import Tabs from 'react-native-tabs';
//import Drawer from 'react-native-drawer-menu';


import FindingJob from './app/FindingJob'
import MyJob from './app/MyJob'
import Connect from './app/Connect'
import MyDetail from './app/MyDetail'

export default class goGenie extends Component {

    clickMe() {
    alert('Have not created this page');}

  constructor(props) {
    super(props);

    this.state = {
      bpage: 'first',

    };
  }
  render() {
    const { bpage } = this.state;
    const tabStyles = [styles.tabbar];
    if (Platform.OS === 'android') tabStyles.push(styles.BottomTabbar);

    var sample = {
     uri: 'http://images.all-free-download.com/images/graphiclarge/harry_potter_icon_6825007.jpg',
     email: 'crystalbaba@hotmail.com',
     };

    var navigationView = (

      <View style={styles.drawer}>
      <View style={styles.indraw}>

      <View>
      <Image source={sample} style={{margin:20,borderRadius:35, width: 70,height: 70,}}/>
      <Text style={{fontSize:13,color:'white',textAlign: 'left'}}>{sample.email}{'\n'}{'\n'}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={el=>this.setState({bpage:'first'})}>
      <Image style={{width:25,height: 25}} source={require('./app/img/search.png')}/>
      <Text style={styles.drawerText}>搜索工作</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={el=>this.setState({bpage:'second'})}>
      <Image style={{width:25,height: 25}} source={require('./app/img/job.png')}/>
      <Text style={styles.drawerText}>我的工作</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={el=>this.setState({bpage:'fourth'})}>
      <Image style={{width:25,height: 25}} source={require('./app/img/user.png')}/>
      <Text style={styles.drawerText}>用戶資料</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={el=>this.setState({bpage:'third'})}>
      <Image style={{width:25,height: 25}} source={require('./app/img/talk.png')}/>
      <Text style={styles.drawerText} >即時對話</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={this.clickMe.bind(this)}>
      <Image style={{width:25,height: 25}} source={require('./app/img/system.png')}/>
      <Text style={styles.drawerText}>系統設定</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={this.clickMe.bind(this)}>
      <Image style={{width:25,height: 25}} source={require('./app/img/help.png')}/>
      <Text style={styles.drawerText}>客戶服務</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={this.clickMe.bind(this)}>
      <Image style={{width:25,height: 25}} source={require('./app/img/ok.png')}/>
      <Text style={styles.drawerText}>登出</Text>
      </TouchableOpacity>

      </View>
      </View>
    );

    return (

        <View style={styles.container}>

        <DrawerLayoutAndroid
          drawerWidth={250}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>

        <Tabs
          selected={bpage}
          style={tabStyles}
          selectedStyle={{color:'#6be0dc'}} onSelect={el=>this.setState({bpage:el.props.name})}
        >
        <Text style={styles.TabText}name="first">搜索工作</Text>
          <Text style={styles.TabText}name="second">我的工作</Text>
          <Text style={styles.TabText}name="third">即時對話</Text>
          <Text style={styles.TabText}name="forth">用戶資料</Text>
        </Tabs>

        <Func state={this.state.bpage}/>
        </DrawerLayoutAndroid>
        </View>
    )
  }
}

class Func extends Component {
  render() {
    switch (this.props.state) {
      case "first":
          return (<FindingJob/>);
      case "second":
          return(<MyJob/>);
      case "third":
          return(<Connect/>);
      default:
          return(<MyDetail/>);
  }
}
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawer:{
      flex: 1,
      backgroundColor:'#1d1047',
    },
    indraw:{
      margin: 10,
    },
    button:{
      flexDirection: 'row',
    },
    drawerText:{
      margin: 10,
      fontSize: 15,
      color: 'white',
      textAlign: 'left',
    },
    TabText:{
      color:'#8c8c8c',
    },
    BottomTabbar: {
      bottom: 0,
      backgroundColor:'#1d1047',
      borderTopColor: '#cdcdcd',
      borderTopWidth: 2,
    },

  });

AppRegistry.registerComponent('goGenie', () => goGenie);
