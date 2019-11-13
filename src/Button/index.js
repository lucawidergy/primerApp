import React, {Component} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

import {styles} from './styles';
/*
class ButtonHandle extends Component{

  state={value: false};
  <MyButton value= {this.state.value}/>

}*/

class MyButton extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.buttonR} onPress={this.props.onPress}>
        <Text style={styles.buttonText}> {this.props.Text}</Text>
      </TouchableOpacity>
    );
  }
}

class MyButtonReloaded extends Component {

  render() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
        <Text style={styles.buttonText}> </Text>
      </TouchableOpacity>
    );
  }
}


export default MyButton;