import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  mapContainer: {
    width: '100%',
    height: 350,
    marginTop: 10,
    marginBottom: 30
  },

  picTC : {
    height: 35,
    width: 35,
    marginLeft: 5,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  uploadButtons : {
    flexDirection : 'row',
    justifyContent: 'flex-end'
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
