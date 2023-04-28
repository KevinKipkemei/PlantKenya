import { View, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from 'react'
import { Text } from "react-native";
import styles from '../components/styles/report.style'
import { ScreenHeaderBtn } from "../components";
import { Stack, useRouter, useSearchParams } from "expo-router";
import {COLORS, SIZES} from '../constants'
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Print from 'expo-print';
import {shareAsync} from 'expo-sharing';
import { collectionGroup, query, getDocs, where, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Report = ({route}) => {

  const [selectedPrinter, setSelectedPrinter] = useState()
  const [primary, setPrimary] = useState()
  const [result, setResult] = useState([])

  // const route =  useRouter()

  const params = useSearchParams()


  const fetchData = async () => {
    // await getDocs (query(collectionGroup(db, 'Reports'), where('ID', '==', 'pD2OWpmvW3MKtvvKz3uu')))
    const records = query(collectionGroup(db, 'Reports'), where('ID', '==', params.queryId))
    await getDocs(records)
    .then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
      setResult(data)
    })
  }

  useEffect(() => {
    fetchData();
  }, [])


  // const dateStrings = result.map((item, index) => {
  //   const dateObject = item.Date;
  //   const timeInMilliseconds = dateObject.seconds * 1000 + Math.floor(dateObject.nanoseconds / 1000000);
  //   const date = new Date(timeInMilliseconds);
  //   return date.toDateString();
  // })

  const print = async () => {
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url,
    })
  }

  const printToFile = async () => {
    const {uri} = await Print.printToFileAsync({html})
    console.log('File has been saved to:', uri)
    await shareAsync(uri, {UTI: '.pdf', mimeType: 'application/pdf'});
  }

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };


  const html = `
  <html>
    <body style = 'margin: 20px; font-family: trebuchet MS , sans-serif'>
  <h1>
    Makueni Tree Planting Exercise.
  </h1>
  <div style = 'background-color: whitesmoke; height: 200px; border-radius: 5px; padding: 10px; margin-top: 10px'>
    <div style = ' display: flex; flex-direction: row; justify-content: space-between'>
    <h2 style = 'margin-top: 5px'>Date: 10.02.2023</h2>
    <h2 style = 'margin-top: 5px'>Trees Number: 1200</h2>
  </div>
    <div>
      <h2>Notes</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  </div>
  <div style = 'background-color: whitesmoke; height: 200px; border-radius: 5px; padding: 10px; margin-top: 10px'>
    <div style = ' display: flex; flex-direction: row; justify-content: space-between'>
    <h2 style = 'margin-top: 5px'>Date: 11.03.2023</h2>
    <h2 style = 'margin-top: 5px'>Trees Number: 125</h2>
  </div>
    <div>
      <h2>Notes</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
  </html>
  `

  return (
    <ScrollView>
      <SafeAreaView style ={styles.container}>
        <Stack.Screen
          options={{headerStyle: {backgroundColor: COLORS.lightWhite},
          headerTitle: 'Progress Reports',
          headerShadowVisible: false,
          headerRight : () => (
            <TouchableOpacity onPress={printToFile}>
              <Ionicons name="document-text-outline" size={21} color='black'/>
            </TouchableOpacity>
          )
        }}
        />
              {Platform.OS === 'ios' && (
          <>
            <View style={styles.spacer} />
            <Button title="Select printer" onPress={selectPrinter} />
            <View style={styles.spacer} />
            {selectedPrinter ? (
              <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text>
            ) : undefined}
          </>
        )}
        <View>
          <Text style = {styles.projectTitle}>
            Makueni Tree Planting Exercise
          </Text>
          {
            result?.map((object, i) =>(
              <View key={i}>
                  <View style = {styles.notes_container}>
                    <View style = {styles.topView}>
                      {/* <Text style = {styles.topViewText}>
                        Date: {new Date(object.Date.seconds * 1000 + Math.floor(object.Date.nanoseconds/1000000)).toDateString()}
                      </Text> */}
                      <Text style = {styles.topViewText}>Trees Number: {object.Trees_Number}</Text>
                    </View>
                    <View>
                      <Text style = {styles.notesTitle}>
                        Notes
                      </Text>
                      <Text style = {styles.notesText}>
                        {object.Notes}
                      </Text>
                    </View>
                  </View>
              </View>
            ))
          }
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Report