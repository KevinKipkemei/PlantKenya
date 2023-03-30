import { useRouter } from "expo-router"
import { View, Text, TouchableOpacity, ActivityIndicator, Modal } from "react-native"
import { COLORS, SIZES, icons } from "../../constants"
import styles from "./recent.style"
import useFetch from '../../hook/useFetch'
import { Image } from "react-native"
import Update from "../../app/update"
import { useState } from "react"

const Recent = () => {
  const router = useRouter();

  const {result, isLoading, error} = useFetch();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState()

  const hide = () => setVisible(false);
  const show = () => {setVisible(true)};



  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style =  {styles.headerTitle}>Recent Projects</Text>
        <TouchableOpacity>
          <Text style = {styles.headerBtn}>Show all projects</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator size = 'large' color={COLORS.primary}/>
        ): error ? (<Text>Something went wrong, please check that you have an active internet connection</Text>)
        : (
            <View>
              {
                result?.map((item,i) => (
                <View key={i} style = {styles.card_container}>
                  <Image style = {styles.card_image} source={icons.planting2} resizeMode = {'cover'}/>
                  <Text style = {styles.headerTitle}> {item.Project_Name} </Text>
                  <View style = {styles.treecontaier}>
                    <Text style = {styles.headerBtn}> {item.Number_Trees} Trees</Text>
                    <Text style = {styles.headerBtn}> {item.Location}</Text>
                  </View>
                  <View style = {styles.pencontainer}>
                    <TouchableOpacity style = {styles.updateBtn} onPress = {() => {setVisible(true); setSelected(item.id) }}>
                      <Image style = {styles.btnImage} source={icons.edit}/>
                    </TouchableOpacity>
                  </View>
                </View>
                ))
              }
            </View>
        )}
        <Modal animationType="slide" visible = {visible} transparent>
          <View style = {{height: '100%'}}>
            <TouchableOpacity style = {styles.modalUpper} onPress = {hide}></TouchableOpacity>
            <Update name = {selected}/>
          </View>
        </Modal>
      </View>
    </View>
  )
}

export default Recent