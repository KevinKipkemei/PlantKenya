import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const map= () => {
  return (
    <View style =  {styles.container}>
      <MapView 
        style = {styles.map}
        initialRegion = {{latitude: 0.0236, longitude: 37.9062, latitudeDelta: 0.00000006, longitudeDelta: 8 }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map : {
    width: "100%",
    height: '100%',
  },
})

export default map