import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.darkGrey,
        borderRadius: 14,
        width: '40%',
        alignSelf: 'center',
        justifyContent:'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 50
    },
    image: {
        width: 29,
        height: 29
    }
})