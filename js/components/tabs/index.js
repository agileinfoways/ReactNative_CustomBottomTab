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
import styles from './style';
import HomeScreen from '../homescreen'
import ListingScreen from '../listingscreen'
import HeaderViewTwo from '../../headerviewtwo.js';
import HeaderView from '../../headerview.js';
import Notification from './../notification';
import gstyles from './../../global_style';
import Settings from './../settingscreen';

const deviceW = Dimensions.get('window').width

const basePx = 375
const titleHome = 'Home'
const titleListing = 'Listing'
const titleNotification = 'Notification'
const titleSettings = 'Settings'

function px2dp(px) {
  return px * deviceW / basePx
}

class Home extends Component {
  render() {
    return (
      <HomeScreen />
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Home
      //   </Text>
      // </View>
    )
  }
}

class Listing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListingScreen />
        {/* <Text style={styles.welcome}>
          Listing
        </Text> */}
      </View>
    )
  }
}


class Notifications extends Component {
  
  render() {
    return (
      <View style={styles.container}>
     <Notification/>
      </View>
    )
  }
}


class CustomSettings extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Settings 
        settingsNavigation = {this.props.settingsNavigation}/>
        {/* <Text style={styles.welcome}>
          Settings
        </Text> */}
      </View>
    )
  }
}



export default class TabMain extends Component {
  state = {
    selectedTab: 'Home',
    isScreenHome: false
  };



  componentDidMount() {
    this.props.navigation.setParams({
        isHome: this.state.isScreenHome,
        tabScreenName: this.state.selectedTab
    });
}
  _goToNext(screenName) {
    Alert.alert('You tapped the add product button!')
    // this.props.navigation.navigate(screenName)

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
            title="Home"
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.selectedTextStyle}
            renderIcon={() => <Image style={styles.tabIconStyle} source={require('../../img/home.png')} size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <Image style={styles.tabIconStyle} source={require('../../img/homehover.png')} size={px2dp(22)} color="#2021C2" />}

            onPress={() => this.setState({ selectedTab: titleHome, isScreenHome: true })}>
            <Home 
            />
          </TabNavigator.Item>
          <TabNavigator.Item
            tabStyle={styles.tabCustomStyle}
            selected={this.state.selectedTab === titleListing}
            title="Listing"
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.selectedTextStyle}
            renderIcon={() => <Image style={styles.tabIconStyle} source={require('../../img/listing.png')} size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <Image style={styles.tabIconStyle} source={require('../../img/lsitinghover.png')} size={px2dp(22)} color="#2021C2" />}

            onPress={() => this.setState({ selectedTab: titleListing, isScreenHome: false })}>
            <Listing />
          </TabNavigator.Item>


          <TabNavigator.Item
            tabStyle={styles.tabCustomStyle}
            renderIcon={() => <View style={styles.addProductIconStyle}></View>}
            renderSelectedIcon={() => <View style={styles.addProductIconStyle}></View>} >
          </TabNavigator.Item>



          <TabNavigator.Item
            tabStyle={styles.tabCustomStyle}
            selected={this.state.selectedTab === titleNotification}
            title="Notifications"
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.selectedTextStyle}
            renderIcon={() => <Image style={styles.tabIconStyle} source={require('../../img/notification.png')} size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <Image style={styles.tabIconStyle} source={require('../../img/notificationhover.png')} size={px2dp(22)} color="#2021C2" />}

            onPress={() => this.setState({ selectedTab: titleNotification, isScreenHome: false })}>
            <Notifications />
          </TabNavigator.Item>

          <TabNavigator.Item
            tabStyle={styles.tabCustomStyle}
            selected={this.state.selectedTab === titleSettings}
            title="Settings"
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.selectedTextStyle}
            renderIcon={() => <Image style={styles.tabIconStyle} source={require('../../img/setting.png')} size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <Image style={styles.tabIconStyle} source={require('../../img/settinghover.png')} size={px2dp(22)} color="#2021C2" />}
            onPress={() => this.setState({ selectedTab: titleSettings, isScreenHome: false })}>
            <CustomSettings settingsNavigation = {this.props.navigation}/>
          </TabNavigator.Item>
        </TabNavigator>
        <View style={styles.purpleTabView2}>
          <TouchableWithoutFeedback
            onPress={() => this._goToNext('Login')}
          >
            <Image style={styles.purpleTabImage2} source={require('../../img/addproduct.png')} />
          </TouchableWithoutFeedback >
        </View>


      </View>

    );
  }
}
