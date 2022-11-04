import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function SubCategory({ text, onClickHandler, isSelected }) {
  console.log("selected ",text, isSelected);
  return (
    <TouchableOpacity style={[styles.container, isSelected ? styles.selected: {}]} onPress={onClickHandler}>
      <Text style={styles.btnText }>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'lightgrey',
    paddingHorizontal: 8,
    height: 35,
    backgroundColor: 'white',
    margin: 5
  },

  btnText: {
    color: 'green',
    fontSize: 12,
  },
  selected: {
    backgroundColor: 'lightgreen',
  }
});
