import { ScrollView, Modal, Alert, FlatList, Image, Button } from "react-native"
import { View, TextInput, Text, TouchableOpacity , SafeAreaView} from "react-native"
import styles from '../components/styles/modal.style'
import MapView, { Callout, Polygon } from 'react-native-maps';
import { useState, useEffect } from "react";
import * as Current from 'expo-location'
import { Marker } from "react-native-maps";
import * as ImagePicker from 'expo-image-picker'
import { Camera } from "expo-camera";
import { COLORS } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import {db} from '../firebaseConfig'
import {doc, addDoc, collection} from 'firebase/firestore'



const ModalForm = () => {
  
    const [location, setLocation] = useState();
    const [isFetching, setisFetching] = useState(true)
    const [polyCoordinates, setpolyCoordinates] = useState([]);
    const [dragCoords, setdragCoords] = useState({latitude: -1.286389, longitude: 36.817223})
    const [complete, setComplete] = useState(false)
    const [hasPermission, setHasPermission] = useState(null) //cammera permissions state
    const [imageData, setImageData] = useState([])
    const [showCamera, setShowCamera] = useState(false)
    const [project, setProject] = useState()
    const [trees, setTrees] = useState()
    const [description, setDescription] = useState()
    const [species, setSpecies] = useState([])
    const [county, setCounty] = useState()

    data = {
        Description: description,
        Species:species,
        Project_Name: project,
        Coordinates: dragCoords,
        Number_Trees: trees,
        Polygon : polyCoordinates,
        Location: county

    }

    const addRecord = () => {
        docRef = addDoc(collection(db, 'Projects'),
        data)
        .then(docRef => {
            console.log('New document added')
            alert('Project added successfully.')
          })
          .catch(error => {
            console.log(error)
            alert('The project could not be added. Try again.')
          })

    }

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
            let currentLocation = await Current.getCurrentPositionAsync({accuracy: Current.Accuracy.Highest});
            setLocation(currentLocation);
            setisFetching(false)

        };

        getPermissions()
    }, []);

    useEffect(() => {
        const cameraPermissions = async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        };
        cameraPermissions()
      }, []);

      const takePicture = async () => {
        if (cameraRef) {
            try{
                const options = { quality: 1, base64: true };
                const data = await cameraRef.takePictureAsync(options);
                setImageData([...imageData, data]);
                setShowCamera(false);
            } catch(e){
                console.log(e)
            }
        }
      };

      let cameraRef = null;

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



  return (
    <ScrollView>
        <SafeAreaView style =  {styles.container}>
            <View>
                <View>
                        <Text style = {styles.modalTitle}>Add New Project</Text>
                        <Text style = {styles.modalInputTitles}>Project Name</Text>
                        <TextInput onChangeText = {value => setProject(value)} style = {styles.textInput}></TextInput>
                        <Text style = {styles.modalInputTitles}>Trees Planted</Text>
                        <TextInput keyboardType="numeric"  onChangeText={value => setTrees(value)} style = {styles.textInput}></TextInput>
                        <Text style = {styles.modalInputTitles}>Description</Text>
                        <TextInput  multiline = {true} onChangeText={value =>setDescription(value)} style = {styles.textInput}></TextInput>
                        <Text style = {styles.modalInputTitles}>Species</Text>
                        <View style = {styles.uploadButtons}>
                            <TouchableOpacity style = {styles.picTC}>
                                <Ionicons name="add-outline"/>
                            </TouchableOpacity>
                        </View>
                        <TextInput onChangeText = {value => setSpecies(value)} style = {styles.textInput}></TextInput>
                        <Text style = {styles.modalInputTitles}>Location</Text>
                        <TextInput onChangeText={value => setCounty(value)} style = {styles.textInput}></TextInput>
                        <Text style = {styles.modalInputTitles}>Add Site Picures</Text>
                        <View style = {{height: 600}}>
                            <View style = {styles.uploadButtons}>
                                <TouchableOpacity style = {styles.picTC}
                                    onPress={async () => {
                                        const result = await ImagePicker.launchImageLibraryAsync();
                                        if (!result.canceled) {
                                        setImageData([...imageData, result]);
                                        }
                                    }}>
                                    <Ionicons name="folder-outline" size={22} color="grey" />
                                </TouchableOpacity>
                                <TouchableOpacity style = {styles.picTC} onPress = {() => setShowCamera(true)}>
                                    <Ionicons name="camera-outline" size={22} color="grey" />
                                </TouchableOpacity>
                            </View>
                            { showCamera? (
                                    <View style = {{flex: 1}}>
                                        <Camera
                                            style = {{flex: 1, marginTop : 10, backgroundColor: COLORS.white}}
                                            type = {Camera.Constants.Type.back} 
                                            ref = {(ref) => {
                                                cameraRef = ref;
                                            }}
                                        >
                                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                            <Button title="Take Picture" onPress={takePicture} />
                                            <Button
                                                title="Cancel"
                                                onPress={() => {
                                                    setShowCamera(false);
                                                }}
                                            />
                                        </View>
                                        </Camera>
                                    </View>
                                )
                                :(<View style ={{height: 500, backgroundColor: COLORS.white, marginTop: 10, borderRadius: 10, marginBottom: 10}}>
                                <FlatList 
                                    data = {imageData}
                                    numColumns = {3}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <Image
                                            source={{ uri: item.uri }}
                                            style={{ width: '30%', height: 100, margin: 5, borderRadius: 10 }}
                                        />
                                    )}
                                />
                                </View>
                                )
                            }
                        </View>
                    </View>
                    <View style = {styles.mapContainer}>
                        <Text style = {styles.modalInputTitles}>Add Coordinates</Text>
                        { !isFetching && (<MapView 
                            style = {styles.map}
                            // showsUserLocation = {true}
                            initialRegion = {{latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.00000006, longitudeDelta: 0.0006 }}
                        >
                            <Marker coordinate={{latitude:location.coords.latitude, longitude: location.coords.longitude}} draggable = {true} 
                            pinColor = 'green' onDragEnd = { (e) => setdragCoords(e.nativeEvent.coordinate)} >
                                <Callout onPress={addCoordinates}><Text>Add Location coordinate</Text></Callout>
                            </Marker>
                            { complete && (<Polygon fillColor={'rgba(100, 100, 200, 0.3)'} coordinates={polyCoordinates}/>)}
                        </MapView>)}
                    </View>
                    <TouchableOpacity style = {styles.button} onPress = {addRecord}>
                            <Text style = {styles.btnText}>Add Project</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView> 
    </ScrollView>
  )
}

export default ModalForm