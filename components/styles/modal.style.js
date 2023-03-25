import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: 30,
  },

  mapContainer: {
    width: '100%',
    height: 350,
    marginTop: 10,
    marginBottom: 20
  },

  modalContent: {
    width: '100%',
    height: '100%'
  },

   map: {
      width: '100%',
      height: '100%'
    },
  
  modalTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    marginBottom: SIZES.xSmall
  },

  modalInputTitles: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    marginBottom: 7,
    color: COLORS.gray
  },

  button : {
    backgroundColor: COLORS.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    marginTop: 10
  },

  textInput : {
    backgroundColor: COLORS.white,
    marginBottom: 5,
    height: 40,
    borderRadius: 10 
  },

  btnText : {
    color: COLORS.lightWhite,
    fontFamily: FONT.bold
  }
});

export default styles;
