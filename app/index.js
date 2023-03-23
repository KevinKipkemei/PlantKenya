import { View, SafeAreaView, ScrollView, Text} from "react-native";
import { Stack, useRouter } from "expo-router";
import {icons, COLORS, SIZES} from '../constants'
import {ScreenHeaderBtn, Recent, Hello} from '../components'

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style = {{flex : 1, backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen
        options={{headerStyle: {backgroundColor: COLORS.lightWhite},
        headerTitle: '',
        headerShadowVisible: false,
        headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.map}  dimension= "90%" onPress = { () => {router.push('/map')}}/>
        )
        }}
      />
      <ScrollView showsVerticalScrollIndicator = {false}>
        <View style = {{flex: 1, padding: SIZES.medium}} >
          <Hello/>
          <Recent/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;