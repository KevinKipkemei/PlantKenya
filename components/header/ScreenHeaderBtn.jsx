import { Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import styles from "./headerbutton.style";

const ScreenHeaderBtn = ({ iconUrl, dimension }) => {
  const router = useRouter()
  return (
    <TouchableOpacity style={styles.btnContainer} onPress = { () => {router.push('/map')}}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
