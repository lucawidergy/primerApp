/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Imagen from './src/Image/imagenG.jpg';
import wololo from './src/Image/wololo.jpg';
import MyButton from './src/Button';

class App extends Component {
  state = {
    isVisible: false,
  };

  handleOnPress = () => this.setState(prevState => ({ isVisible: !prevState.isVisible }));

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1,  justifyContent: 'center'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 20,textAlign: ''}}> 'wololoo' </Text>
            <Image style={{width: 300, height: 200, alignSelf: 'center' }} source={wololo} />
         </View>
         <View
            style={{
              flex:2,
              backgroundColor: 'white',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MyButton onPress={this.handleOnPress}>s </MyButton>
         </View>
         <View style={{flex: 3}}>
         {this.state.isVisible && (<Image style={{width: 300, height: 300, alignSelf: 'center' }} source={Imagen} />)}
         </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
