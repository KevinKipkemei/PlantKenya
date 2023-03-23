import {View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import styles from './hello.style'
import { icons, SIZES } from '../../constants'

const Hello = () => {

  const router = useRouter() ;

  const [searchText, setsearchText] = useState()

  return (
    <View>
        <View style = {styles.container}>
            <Text style = {styles.userName}>Hello!</Text>
            <Text style = {styles.welcomeMessage}>Search for a project</Text>
        </View>
        <View style = {styles.searchContainer}>
            <View style = {styles.searchWrapper}>
                <TextInput 
                    style = {styles.searchInput}
                    value = {searchText}
                    onChangeText={(text) => setsearchText(text)}
                    placeholder = 'Enter the name of the project'
                />
            </View>
            <TouchableOpacity style = {styles.searchBtn}>
                <Image source={icons.search} resizeMode = 'contain' style = {styles.searchBtnImage}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Hello