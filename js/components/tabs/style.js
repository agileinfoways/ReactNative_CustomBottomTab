import { Platform, StyleSheet, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: 'space-between'
  },
  tabIconStyle: {
    width: 20,
    height: 20,
  },
  addProductIconStyle: {
    width: 1,
    height: 1,
    padding: 2,
    display: 'none',
  },
  selectedTextStyle: {
    color: '#2120C3',
    textAlign: 'center',
    fontSize: 11,
  },
  deSelectedTextStyle: {
    color: '#717171',
    textAlign: 'center',
    fontSize: 11,
  },
  greenCurvImageStyle: {
    width: width,
    height: 20,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#e2e2e2'
  },
  tabBarCustomStyle: {
    height: 60, backgroundColor: '#fff', borderTopWidth: 2, borderTopColor: '#00FE00'
  },
  tabCustomStyle: {
    marginBottom: 5, marginTop: 5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  purpleTabView: {
    width: width,
    height: 90,
    position: 'absolute',
    top: 50,
    left: 0, right: 0,
    bottom: 0,
    backgroundColor: '#ccc',
    justifyContent: 'flex-end'
  },
  purpleTabImage: {
    width: 80,
    height: 80
  },
  purpleTabView2: {
    width: width,
    position: 'absolute',
    left: 0, right: 0,
    bottom: 2,
    justifyContent: 'flex-end',
    paddingTop: 30,
  },
  purpleTabImage2: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignSelf: 'center'
  }

});
