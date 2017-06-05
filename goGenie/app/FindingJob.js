import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView
} from 'react-native';

import Tabs from 'react-native-tabs';

import Printdata from './Printdata'
import Printptdata from './Printptdata'

export default class FindingJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tpage: 'first',
    };
  }

  render() {

    const { tpage } = this.state;
    const tabbarStyles = [styles.tabbar];
    if (Platform.OS === 'android') tabbarStyles.push(styles.TopTabbar);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> 搜索工作 </Text>
          </View>

        <Tabs
          selected={tpage}
          style={tabbarStyles}
          selectedStyle={{color:'white'}} onSelect={el=>this.setState({tpage:el.props.name})}
        >
            <Text style={styles.TabText}name="first">臨時工作</Text>
            <Text style={styles.TabText}name="second">兼職長工</Text>
        </Tabs>

        <Text style={styles.main}></Text>

        <ScrollView style={{marginBottom: 50}}>
        <Func state={this.state.tpage}/>
        <Func state={this.state.tpage}/>
        <Func state={this.state.tpage}/>
        <Func state={this.state.tpage}/>
        </ScrollView>

        </View>
    )
  }
}


class Func extends Component {
  render() {
    switch (this.props.state) {
      case "first":
          return (<Printdata/>);
      default:
          return (<Printptdata/>);
  }
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


AppRegistry.registerComponent('FindingJob', () => FindingJob);
