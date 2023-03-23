import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: 10
  },
  map: {
    width: '100%',
    height: '70%'
  },
  card: {
    backgroundColor: COLORS.white,
    height: '25%',
    width: '80%',
    marginTop: 10
  },

  mapBtn: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  mapBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
});

export default styles;
