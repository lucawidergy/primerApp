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
  ImageBackground,
  KeyboardAvoidingView,
  Picker,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import imagenBackground from './src/Image/background.jpg';
import imageBanner from './src/Image/fon2.jpg';
import MyButton from './src/Button';
import Imagen from './src/Image/imagenG.jpg';
import buttonR from './src/Button/styles'
class App extends Component {
  state = {
    isVisible: false,
    contador: 0,
  };

  handleOnPress = () => this.setState(prevState => ({isVisible: !prevState.isVisible}));
  handleOnPressContSuma = () => this.setState(prevState => ({contador: prevState.contador+1}));
  handleOnPressContResta = () => this.setState(prevState => ({contador: prevState.contador-1}));
  render() {
    let colorNumber= this.state.contador<0 ? 'red' : 'green';
    return (

      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
          <ImageBackground
            source={imagenBackground}
            style={{width: '100%', height: '100%'}}>
            <ImageBackground
              source={imageBanner}
              style={{height:100,flexDirection:'row',alignItems:'center', justifyContent:'center',backgroundColor:'blue'}}
              >
              <Text style={{color: 'white', fontSize: 25}}>
                Contador pedorro
              </Text>
            </ImageBackground>
            <View style={{flex:1,width: '100%', height: '100%', backgroundColor:'yellow',flexDirection:'row-reverse',justifyContent:'space-around',alignItems:'center'}}>
                  <MyButton onPress={this.handleOnPressContSuma} Text={'+1'}/>
                  <MyButton onPress={this.handleOnPressContResta} Text={'-1'}/>
            </View>
            <View style={{flex:1,width: '100%', height: '100%', backgroundColor: colorNumber,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color: 'white', fontSize: 100}}>{this.state.contador}</Text>
            </View>
          </ImageBackground>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default App;