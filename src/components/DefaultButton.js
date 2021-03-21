import React from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {blueColor, orangeColor} from '../../asset/styles/defaultStyle';
const DefaultButton = ({text}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => console.log('yo')}>
        <Text style={{color: orangeColor}}> {text} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DefaultButton;
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: orangeColor,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    margin: 20,
  },
});
