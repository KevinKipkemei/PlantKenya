import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  pictureOpacity: {
    width: '40%',
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
    height: '80%'
  },

  modalUpper: {
    height: 150
  },
  

  cardIcon : {
    width: 10,
    height: 10
  },

  treesContainer: {
    flexDirection: 'row',
    marginLeft: 10
  },

  cardsContainer : {
    height: '20%'
  },
  
  cardText : {
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    marginLeft: 10,
    marginTop: 6
  },

  secondaryCardText : {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    marginLeft: 2
  },

  cardTextContainer: {
    justifyContent: 'space-between'
  },

  card: {
    backgroundColor: COLORS.white,
    width: 300,
    marginTop: 10,
    marginLeft:10,
    flexDirection: "row",
    justifyContent : 'flex-start',
    padding: 6,
    borderRadius: SIZES.small / 1.25,
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
