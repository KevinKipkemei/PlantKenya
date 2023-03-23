import {View, Image, Text } from 'react-native';
import MapView from 'react-native-maps';
import { Stack } from 'expo-router';
import { COLORS, FONT, icons } from '../constants';
import { TouchableOpacity } from 'react-native';
import styles from '../components/styles/map.style'

const map= () => {
  return (
      <View style =  {styles.container}>
        <Stack.Screen
          options={{headerStyle: {backgroundColor: COLORS.lightWhite},
          headerTitle: '',
          headerShadowVisible: false,
          headerRight : () => (
            <TouchableOpacity style = {styles.mapBtn}>
                  <Image source={icons.add2} resizeMode = 'cover' style = {styles.mapBtnImage}/>
            </TouchableOpacity>
          )
          }}
        />
          <MapView 
            style = {styles.map}
            initialRegion = {{latitude: 0.0236, longitude: 37.9062, latitudeDelta: 0.00000006, longitudeDelta: 8 }}
          />
            <View style = {styles.card}>
              <Text>Test Tree Planting exercise</Text>
              <Image source={icons.add2} resizeMode = 'cover'/>
            </View>
      </View>
  )
}

export default map