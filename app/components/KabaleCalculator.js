import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  Text,
  TextInput,
  ScrollView
} from 'react-native';


export default class KabaleCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uniq_char : 0,
      kabale_sum : 0,
      kabale_array: [],
    };
  }

  calculateNumber = (text) => {
    let sanitized_text = this.sanitize_text(text);
    let kabale_array = this.getCharNum(sanitized_text.toLowerCase());
    let sum = this.kabale_Seq(kabale_array);
    this.Kabale_sum_Show.setNativeProps({text:this.state.kabale_sum.toString()});
    // console.log(this.state.kabale_array);
  };

  getCharNum = (text) => {
    let num = [];
    if (text.length === 0) {
      this.setState = { kabale_array: []
      }
    }
    for (let i = 0; i < text.length; i++) {
      // console.log(text[i]);
      switch (text[i]) {
        case "a":
          num.push(1);
        break;
        case "b":
          num.push(2);
        break;
        case "c":
          num.push(3);
        break;
        case "d":
          num.push(4);
        break;
        case "e":
          num.push(5);
        break;
        case "f":
          num.push(6);
        break;
        case "g":
          num.push(7);
        break;
        case "h":
          num.push(8);
        break;
        case "i":
          num.push(9);
        break;
        case "j":
          num.push(1);
        break;
        case "k":
          num.push(2);
        break;
        case "l":
          num.push(3);
        break;
        case "m":
          num.push(4);
        break;
        case "n":
          num.push(5);
        break;
        case "o":
          num.push(6);
        break;
        case "p":
          num.push(7);
        break;
        case "q":
          num.push(8);
        break;
        case "r":
          num.push(9);
        break;
        case "s":
          num.push(1);
        break;
        case "t":
          num.push(2);
        break;
        case "u":
          num.push(3);
        break;
        case "v":
          num.push(4);
        break;
        case "w":
          num.push(5);
        break;
        case "x":
          num.push(6);
        break;
        case "y":
          num.push(7);
        break;
        case "z":
          num.push(8);
        break;
        default:
          num.push(parseFloat(text[i]));
          
        break;
      }
      this.state = { 
        kabale_array: num
      }
    }
      return num;
  };

  kabale_Seq = (text) => {
    let sum = text.reduce((a, b) => a + b, 0);
    // console.log(sum);
    while (sum >= 10) {
        sum = sum.toString().split("");
        sum = sum.reduce(function(a, b){
        return parseInt(a) + parseInt(b);
      }, 0);
    } 
    this.state = {
      kabale_sum : sum
    }
    return sum;
  }

  removeDuplicatedChar = (text) => {

  }

  saveInfo = () => {

  }

  sanitize_text = (text) => {
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    text = text.replace(/[^0-9a-z]/gi, '');
    return text;
  }

  render(){
    return (
      <View style={{ flex: 1 }}>
        <View style={{flex: 1}}>
          <TextInput style={styles.kabale_sum_container} editable={false} ref={component=> this.Kabale_sum_Show=component}
          value={this.state.kabale_sum.toString()}
          maxLength = {30}
          textAlign = {'center'}
          /> 
          <Text style={styles.kabale_text}>Kabbalah Number</Text>
        </View>
        <View style={{ color: "black", borderRadius: 30, margin: 10, borderColor: "black", borderWidth: 2, marginLeft: 14 }}>

        <TextInput style={{ color: "black", marginLeft: 12, marginRight: 12}}
        multiline = {true}
        maxLength = {100}
        placeholder = {"Type your text here"}
        placeholderTextColor = {"grey"}
        onChangeText = {text => this.calculateNumber(text)}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainter: {

  },
  kabale_sum_container: {
    margin: 0,
    marginTop: 24,
    padding: 0,
    maxHeight: 90,
    fontSize: 70,
    // color: "blue",
    color: "black",

  },
  kabale_text: {
    fontSize: 40,
    alignSelf: 'center',
    // color: 'blue',
  }
});
