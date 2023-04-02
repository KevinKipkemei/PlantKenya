import { View, SafeAreaView, ScrollView, RefreshControl} from "react-native";
import { Stack, useRouter } from "expo-router";
import {icons, COLORS, SIZES} from '../constants'
import {ScreenHeaderBtn, Recent, Hello} from '../components'
import { useState, useCallback } from "react";

const Home = () => {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
      <ScrollView showsVerticalScrollIndicator = {false} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style = {{flex: 1, padding: SIZES.medium}} >
          <Hello/>
          <Recent/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;