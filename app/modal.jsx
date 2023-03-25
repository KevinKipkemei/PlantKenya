import { ScrollView, Modal } from "react-native"
import { View, TextInput, Text, TouchableOpacity , SafeAreaView} from "react-native"
import styles from '../components/styles/modal.style'
import MapView from 'react-native-maps';
import { useState } from "react";



const ModalForm = () => {
  

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
                        <Text style = {styles.modalInputTitles}>Add Location</Text>
                        <MapView 
                            style = {styles.map}
                            initialRegion = {{latitude: -1.2921, longitude: 36.8219, latitudeDelta: 0.00000006, longitudeDelta: 0.02 }}
                        />
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