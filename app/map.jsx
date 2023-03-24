import {View, Image, Text } from 'react-native';
import MapView from 'react-native-maps';
import { Stack } from 'expo-router';
import { COLORS, FONT, icons } from '../constants';
import { TouchableOpacity } from 'react-native';
import styles from '../components/styles/map.style'
import useFetch from '../hook/useFetch'
import { ScrollView } from 'react-native';
import { Marker, Callout } from 'react-native-maps';


const map= () => {
  const {result} = useFetch()

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
          >
            {
              result?.map((item, i) => (
                <Marker key = {i} coordinate={{latitude: item.Coordinates.latitude, longitude: item.Coordinates.longitude}} pinColor = 'green'>
                  <Callout><Text>{item.Project_Name}</Text></Callout>
                </Marker>
              ))
            }
          </MapView>
          <View style = {styles.cardsContainer}>
           <ScrollView horizontal>
              {
                result?.map((item,i) => (
                  <View key={i} style = {styles.card}>
                    <TouchableOpacity style = {styles.pictureOpacity}>
                      <Image style = {styles.picture} source = {icons.planting2} resizeMode = 'cover'/>
                    </TouchableOpacity>
                      <View style = {styles.cardTextContainer}>
                        <Text style = {styles.cardText}> {item.Project_Name} </Text>
                        <View>
                          <View style = {styles.treesContainer}>
                            <Image style = {styles.cardIcon} source = {icons.tree}/>
                            <Text style = {styles.secondaryCardText}> {item.Number_Trees} Trees</Text>
                          </View>
                          <View style = {styles.treesContainer}>
                            <Image style = {styles.cardIcon} source = {icons.location}/>
                            <Text style = {styles.secondaryCardText}> {item.Location} </Text>
                          </View>
                        </View>
                      </View>
                  </View>
                      ))
                }
            </ScrollView>
          </View>
      </View>
  )
}

export default map