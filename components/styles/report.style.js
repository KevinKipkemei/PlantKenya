import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({

    container: {
        padding: 10,
        height: '100%'
    },

    notes_container: {
        backgroundColor: COLORS.lightWhite,
        width: '100%',
        padding: 7,
        marginBottom: 10
    },

    projectTitle:  {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        marginBottom: 4
    },

    topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },

    topViewText : {
        fontFamily: FONT.bold,
        fontSize: SIZES.small,
    },

    notesTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.small
    },

    notesText : {
        fontFamily: FONT.regular,
        fontSize:SIZES.small
    },
})

export default styles;
