import {Stack} from 'expo-router';
import {useFonts} from 'expo-font'
import * as Splashscreen from 'expo-splash-screen'

Splashscreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack/>
}

export default Layout;