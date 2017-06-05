import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from 'react-native';

import Tabs from 'react-native-tabs';

export default class MyJob extends Component {
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
          <Text style={styles.headerText}> 我的工作 </Text>
        </View>

        <Tabs
          selected={tpage}
          style={tabbarStyles}
          selectedStyle={{color:'white'}} onSelect={el=>this.setState({tpage:el.props.name})}
        >
            <Text style={styles.TabText}name="first">臨時工作</Text>
            <Text style={styles.TabText}name="second">兼職長工</Text>
            <Text style={styles.TabText}name="third">工作歷史</Text>
        </Tabs>

        <Text style={styles.main}></Text>
        <Func state={this.state.tpage}/>
          </View>
    )
  }
}


class Func extends Component {
  render() {
    switch (this.props.state) {
      case "first":
          return (<Text>JOB</Text>);
      case "second":
          return (<Text>PARTTIME</Text>);
      default:
          return (<Text>HISTORY</Text>);
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


AppRegistry.registerComponent('MyJob', () => MyJob);
