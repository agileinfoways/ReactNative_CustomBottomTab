/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,

} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from 'react-native'
import { StackNavigator } from 'react-navigation';
import styles from './js/components/tabs/style';
const deviceW = Dimensions.get('window').width
const basePx = 375
const titleHome = 'Tab One'
const titleListing = 'Tab Two'
const titleNotification = 'Tab Three'
const titleSettings = 'Tab Four'

function px2dp(px) {
  return px * deviceW / basePx
}

class TabOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Tab One
        </Text>
      </View>
    )
  }
}

class TabTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Tab Two
        </Text>
      </View>
    )
  }
}


class TabThree extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
        Tab Three
        </Text>
      </View>
    )
  }
}

class TabFour extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Tab Four
        </Text>
      </View>
    )
  }
}

export default class TabMain extends Component {
  state = {
    selectedTab: 'Tab One',
    isScreenHome: false
  };

  _clickMe() {
    Alert.alert('You tapped the add button!')
  }
  render() {
    return (
      <View style={styles.container2}>

        <TabNavigator
          style={styles.container}
          tabBarStyle={styles.tabBarCustomStyle}
        >

          <TabNavigator.Item
            tabStyle={styles.tabCustomStyle}
            selected={this.state.selectedTab === titleHome}
            title="Tab One"
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.deSelectedTextStyle}
            renderIcon={() => <Image style={styles.tabIconStyle} source={require('./js/img/home.png')} size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <Image style={styles.tabIconStyle} source={require('./js/img/homehover.png')} size={px2dp(22)} color="#2021C2" />}
            onPress={() => this.setState({ selectedTab: titleHome })}>
            <TabOne
            />
          </TabNavigator.Item>

          <TabNavigator.Item
            tabStyle={styles.tabCustomStyle}
            selected={this.state.selectedTab === titleListing}
            title="Tab Two"
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.deSelectedTextStyle}
            renderIcon={() => <Image style={styles.tabIconStyle} source={require('./js/img/home.png')} size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <Image style={styles.tabIconStyle} source={require('./js/img/homehover.png')} size={px2dp(22)} color="#2021C2" />}
             onPress={() => this.setState({ selectedTab: titleListing })}>
            <TabTwo />
          </TabNavigator.Item>

          <TabNavigator.Item
            tabStyle={styles.tabCustomStyle}
            renderIcon={() => <View style={styles.addProductIconStyle}></View>}
            renderSelectedIcon={() => <View style={styles.addProductIconStyle}></View>} >
          </TabNavigator.Item>

          <TabNavigator.Item
            tabStyle={styles.tabCustomStyle}
            selected={this.state.selectedTab === titleNotification}
            title="Tab Three"
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.deSelectedTextStyle}
            renderIcon={() => <Image style={styles.tabIconStyle} source={require('./js/img/home.png')} size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <Image style={styles.tabIconStyle} source={require('./js/img/homehover.png')} size={px2dp(22)} color="#2021C2" />}
            onPress={() => this.setState({ selectedTab: titleNotification })}>
            <TabThree />
          </TabNavigator.Item>

          <TabNavigator.Item
            tabStyle={styles.tabCustomStyle}
            selected={this.state.selectedTab === titleSettings}
            title="Tab Four"
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.deSelectedTextStyle}
            renderIcon={() => <Image style={styles.tabIconStyle} source={require('./js/img/home.png')} size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <Image style={styles.tabIconStyle} source={require('./js/img/homehover.png')} size={px2dp(22)} color="#2021C2" />}
            onPress={() => this.setState({ selectedTab: titleSettings })}>
            <TabFour settingsNavigation={this.props.navigation} />
          </TabNavigator.Item>

        </TabNavigator>

        <View style={styles.purpleTabView2}>
          <TouchableWithoutFeedback
            onPress={() => this._clickMe()}>
            <Image style={styles.purpleTabImage2} source={require('./js/img/addproduct.png')} />
          </TouchableWithoutFeedback >
        </View>
      </View>
    );
  }
}

