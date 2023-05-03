import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, FlatList, Image, Button } from "react-native"
import styles from '../components/styles/update.style'
import { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker'
import {Camera} from 'expo-camera'
import { COLORS } from "../constants";
import {Ionicons} from '@expo/vector-icons'
import {collection, doc, setDoc} from 'firebase/firestore'
import {db} from '../firebaseConfig'
import { storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {Buffer} from 'buffer'



const Update = (name) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [imageData, setImageData] = useState([])
  const [showCamera, setShowCamera] = useState(false)
  const [selected, setSelected] = useState(name)
  const [notes, setNotes] = useState()
  const [trees, setTrees] = useState()
  const [imageUrl, setimageUrl] = useState('')


  const dateObject = new Date();
  let date = new Date().toUTCString().slice(0, 16);

  const addCollection = async () => {
    if (!imageData) {
      alert("Please take pictures of site progress")
    }

    for (let i = 0; i < imageData.length; i++){
      const storageRef = ref(storage, `${selected.name}/Progress Pictures/${imageData[i].uri.slice(134)}`);

      const img = await fetch(imageData[i].uri)
      const blob = await img.blob()

      try {
              uploadBytesResumable(storageRef, blob).then(async (snapshot) => {
              console.log('Uploaded files')
              const url = await getDownloadURL(snapshot.ref);
              
              const docRef = doc(collection(db, 'Progress', selected.name, 'Reports'))
              setDoc(docRef,
                {
                  Number_Trees : trees,
                  Notes: notes,
                  Date: date,
                  ID: selected.name,
                  Url: url
                })
              .then(docRef => {
                alert('Progress has been updated')
               })
              .catch(error => {
                 console.log(error)
               })
            })
          }
      catch (e){
       console.log(e)
      }
    }

    setImageData([])
  }



  useEffect(() => {
    const cameraPermissions = async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      }
      catch (e){
        console.log(e)
      }
    };
    cameraPermissions()
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
        try{
            const options = { quality: 0.09, base64: true };
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
      <SafeAreaView style = {styles.container}>
        <View style = {{height: 700}}> 
                <Text style = {styles.modalTitle}>Update Project Details</Text>
                <Text style = {styles.modalInputTitles}>Add Site Picures</Text>
                            <View style = {styles.uploadButtons}>
                                {/* <TouchableOpacity style = {styles.picTC}
                                    onPress={async () => {
                                        const result = await ImagePicker.launchImageLibraryAsync();
                                        if (!result.canceled) {
                                        setImageData([...imageData, result]);
                                        }
                                    }}>
                                    <Ionicons name="folder-outline" size={22} color="grey" />
                                </TouchableOpacity> */}
                                <TouchableOpacity style = {styles.picTC} onPress = {() => setShowCamera(true)}>
                                  <Ionicons name="camera-outline" size={22} color="grey" />
                                </TouchableOpacity>
                            </View>
                            { showCamera? (
                                    <View style = {{flex: 1}}>
                                        <Camera
                                            style = {{flex: 1, marginTop: 10, marginBottom: 10, flexDirection: 'column', justifyContent: 'flex-end'}}
                                            type = {Camera.Constants.Type.back} 
                                            ref = {(ref) => {
                                                cameraRef = ref;
                                            }}
                                        >
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
                                            <TouchableOpacity style = {styles.picTC} onPress={takePicture}>
                                              <Ionicons name="image-outline" size={22} color="grey" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style = {styles.picTC} onPress={() => setShowCamera(false)}>
                                              <Ionicons name="close-outline" size={22} color="grey" />
                                            </TouchableOpacity>
                                        </View>
                                        </Camera>
                                    </View>
                                )
                                :(<View style ={{height: 335, backgroundColor: COLORS.white, marginTop: 10, borderRadius: 10, marginBottom: 10}}>
                                  <FlatList 
                                    data = {imageData}
                                    numColumns = {3}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <Image
                                            source={{ uri: item.uri }}
                                            style={{ width: '30%', height: 60, margin: 5, borderRadius: 10 }}
                                        />
                                    )}
                                />
                                </View>
                                )
                            }
                <Text style = {styles.modalInputTitles}>Notes</Text>
                <TextInput multiline = {true} onChangeText = {text => setNotes(text)} style = {styles.textInput2}></TextInput>
                <Text style = {styles.modalInputTitles}>Update Tree Count</Text>
                <TextInput keyboardType = 'numeric' onChangeText = {number => setTrees(number)} style = {styles.textInput}></TextInput>
                <TouchableOpacity style = {styles.button} onPress = {addCollection}>
                      <Text style = {styles.btnText}>Update Details</Text>
                </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Update