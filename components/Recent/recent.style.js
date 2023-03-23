import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },

  treecontaier: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  card_container: {
    width: "100%",
    backgroundColor: COLORS.white,
    height: 300,
    marginTop: SIZES.small,
    borderRadius: SIZES.small,
    justifyContent: 'flex-end',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    paddingRight: 10,
    paddingBottom: 10
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },

  updateBtn: {
    width: 75,
    height: 40,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
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
