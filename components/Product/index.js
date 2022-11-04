import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';

export default function Products({ title, description, price, count, imageUrl}) {
  console.log("here", title)
  return (
    <View style={styles.parent}>
      <View  style= {styles.imageView}>
        <Image style= {styles.image} source={{ uri: 'https://picsum.photos/200/300' }}/>
      </View>
      <View style= {styles.details}>
        <Text style={styles.titleText}> {title} </Text>
        <Text style={styles.text}> {description} </Text>
        <Text style={styles.itemsText}> {count}{' items'} </Text>
        <Text style={styles.priceText}> {'₹'}{price} </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>{'+ ADD'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
    marginTop: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  details: {
    flexDirection: 'column',
    padding: 10,
    marginLeft: 8,
    flex:1,
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 0.3
  },
  text: {
    color: 'black',
    fontSize: 12,
    width: '100%'
  },
  titleText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  priceText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold'
  },
  itemsText: {
    color: 'black',
    fontSize: 12,
  },
  btnText: {
    color: 'green',
    fontSize: 12,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'lightgrey',
    paddingHorizontal: 8,
    height: 35,
    backgroundColor: 'white',
  },
  btnContainer: {
    justifyContent: 'center'
  }
});
