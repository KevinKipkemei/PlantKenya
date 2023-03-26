import { ScrollView, Modal } from "react-native"
import { View, TextInput, Text, TouchableOpacity , SafeAreaView} from "react-native"
import styles from '../components/styles/modal.style'
import MapView, { Callout } from 'react-native-maps';
import { useState, useEffect } from "react";
import * as Current from 'expo-location'
import { Marker } from "react-native-maps";



const ModalForm = () => {
  
    const [location, setLocation] = useState();
    const [isFetching, setisFetching] = useState(true)
    const [polygonLocation, setPolygon] = useState({});

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

    // console.log(location)
    // console.log(isFetching)


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
                            showsUserLocation = {true}
                            initialRegion = {{latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.00000006, longitudeDelta: 0.08 }}
                        >
                            <Marker coordinate={{latitude:location.coords.latitude, longitude: location.coords.longitude}} draggable = {true} pinColor = 'green'>
                                <Callout><Text>Add Location coordinate</Text></Callout>
                            </Marker>
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