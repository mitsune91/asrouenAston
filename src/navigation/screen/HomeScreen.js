import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DefaultButton from '../../components/DefaultButton';
const HomeScreen = () => {
  return (
    <View>
      <DefaultButton text="monbutton"></DefaultButton>
      <DefaultButton text="coucou 2"></DefaultButton>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
