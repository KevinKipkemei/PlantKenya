import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  pictureOpacity: {
    width: '50%',
    height: '100%',
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.small / 1.25
  },
  picture : {
    width: '100%',
    height: '100%',
    borderRadius: SIZES.small / 1.25,
  },
  map: {
    width: '100%',
    height: '70%'
  },

  cardsContainer : {
    height: '30%'
  },
  
  card: {
    backgroundColor: COLORS.white,
    width: 400,
    marginTop: 10,
    marginLeft:10,
    flexDirection: "row",
    justifyContent : 'space-between',
    padding: 10,
    borderRadius: SIZES.small / 1.25,
  },

  cardTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    color: COLORS.secondary,
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
