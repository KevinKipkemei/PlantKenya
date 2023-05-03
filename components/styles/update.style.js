import { COLORS, SIZES, FONT } from "../../constants";
import { StyleSheet } from "react-native";

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
      uploadButtons : {
        flexDirection : 'row',
        justifyContent: 'flex-end'
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

      picTC2 :{
        height: 35,
        width: 35,
        marginLeft: 5,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 5
      },
    

      modalTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        marginBottom: SIZES.xSmall
      },

      textInput : {
        backgroundColor: COLORS.white,
        marginBottom: 5,
        height: 40,
        borderRadius: 10 
      },
      
      textInput2 : {
        backgroundColor: COLORS.white,
        marginBottom: 5,
        height: 40,
        borderRadius: 10, 
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
      btnText : {
        color: COLORS.lightWhite,
        fontFamily: FONT.bold
      }
    
});

export default styles;