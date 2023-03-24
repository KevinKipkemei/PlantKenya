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

  updateBtn: {
    width: 75,
    height: 30,
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.xSmall,
    justifyContent: "center",
    alignItems: "center",
  },

  cardBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.white,
  },
});

export default styles;
