import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'

const {width} = Dimensions.get('screen')

const Slider = ({result}) => {

  const renderItem = ({item}) => (
    <Image source= {{uri: item}} style={styles.card_image}/>
  );
  

  return (
    <View>
      <FlatList 
        data={result}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        snapToAlignment= 'center'
      />
    </View>
  )
}

export default Slider


const styles = StyleSheet.create({
  container : {
    // padding: 10
  },

  card_container: {
    height: 300,
    width,
  },

  card_image: {
    width,
    height: 300
  }
})