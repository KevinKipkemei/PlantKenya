import { useRouter } from "expo-router"
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import { COLORS, SIZES, icons } from "../../constants"
import styles from "./recent.style"
import useFetch from '../../hook/useFetch'
import { Image } from "react-native"

const Recent = () => {
  const router = useRouter();

  const {result, isLoading, error} = useFetch()

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
                    {/* <TouchableOpacity style = {styles.updateBtn} onPress = { () => {router.push('/update')}} ><Text style = {styles.cardBtn}>Update</Text></TouchableOpacity> */}
                  </View>
                </View>
                ))
              }
            </View>
        )}
      </View>
    </View>
  )
}

export default Recent