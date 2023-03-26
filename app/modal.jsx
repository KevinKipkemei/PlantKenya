import { ScrollView, Modal, Alert } from "react-native"
import { View, TextInput, Text, TouchableOpacity , SafeAreaView} from "react-native"
import styles from '../components/styles/modal.style'
import MapView, { Callout, Polygon } from 'react-native-maps';
import { useState, useEffect } from "react";
import * as Current from 'expo-location'
import { Marker } from "react-native-maps";



const ModalForm = () => {
  
    const [location, setLocation] = useState();
    const [isFetching, setisFetching] = useState(true)
    const [polyCoordinates, setpolyCoordinates] = useState([]);
    const [dragCoords, setdragCoords] = useState({latitude: -1.286389, longitude: 36.817223})
    const [complete, setComplete] = useState(false)

    const addCoordinates = () => {
        const newCoords = dragCoords;
        setpolyCoordinates((prevCoords) => [...prevCoords, newCoords]);
        Alert.alert('Coordinate Message', 'Select complete after adding the final coordinate', [
            {
                text: 'Complete',
                onPress: () => setComplete(true)
              },
              {
                text: 'Continue'
              }
        ])
      };

    useEffect(() => {
        const getPermissions = async () => {
            let {status} = await Current.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Please grant location permission');
                return;
            }
            let currentLocation = await Current.getCurrentPositionAsync({});
            setLocation(currentLocation);
            setisFetching(false)
        };

        getPermissions()
    }, []);

  console.log(polyCoordinates)
  console.log(complete)


  return (
    <ScrollView>
        <SafeAreaView style =  {styles.container}>
            <View>
                <View>
                        <Text style = {styles.modalTitle}>Add New Project</Text>
                        <Text style = {styles.modalInputTitles}>Project Name</Text>
                        <TextInput style = {styles.textInput}></TextInput>
                        <Text style = {styles.modalInputTitles}>Trees Planted</Text>
                        <TextInput style = {styles.textInput}></TextInput>
                        <Text style = {styles.modalInputTitles}>Description</Text>
                        <TextInput style = {styles.textInput}></TextInput>
                        <Text style = {styles.modalInputTitles}>Location</Text>
                        <TextInput style = {styles.textInput}></TextInput>
                    </View>
                    <View style = {styles.mapContainer}>
                        <Text style = {styles.modalInputTitles}>Add Coordinates</Text>
                        { !isFetching && (<MapView 
                            style = {styles.map}
                            // showsUserLocation = {true}
                            initialRegion = {{latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.00000006, longitudeDelta: 0.08 }}
                        >
                            <Marker coordinate={{latitude:location.coords.latitude, longitude: location.coords.longitude}} draggable = {true} 
                            pinColor = 'green' onDragEnd = { (e) => setdragCoords(e.nativeEvent.coordinate)} >
                                <Callout onPress={addCoordinates}><Text>Add Location coordinate</Text></Callout>
                            </Marker>
                            { complete && (<Polygon fillColor={'rgba(100, 100, 200, 0.3)'} coordinates={polyCoordinates}/>)}
                        </MapView>)}
                    </View>
                    <TouchableOpacity style = {styles.button}>
                            <Text style = {styles.btnText}>Add Project</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView> 
    </ScrollView>
  )
}

export default ModalForm