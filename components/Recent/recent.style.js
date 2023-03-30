import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge
  },

  treecontaier: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  pencontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  card_container: {
    width: "100%",
    // // backgroundColor: COLORS.white,
    // height: 315,
    marginTop: SIZES.small,
    // borderRadius: SIZES.small,
    // // justifyContent: 'flex-end',
    // // ...SHADOWS.medium,
    // // shadowColor: COLORS.white,
    // paddingRight: 10,
    paddingBottom: 10
  },

  card_image : {
    width: '100%',
    height: 330,
    borderRadius: SIZES.xSmall,
    marginBottom: 10
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.small,
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },

  modalUpper: {
    height: 200,
  },

  updateBtn: {
    width: 30,
    height: 30,
    marginTop: -359,
    marginRight: 5,
    padding: 7,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.xSmall,
    justifyContent: "center",
    alignItems: "center",
  },

  cardBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.white,
  },

  btnImage : {
    height: '100%',
    width: '100%'
  }
});

export default styles;
