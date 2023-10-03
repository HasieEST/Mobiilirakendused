import { StyleSheet } from "react-native";
import {colors} from '../../../utils/colors'

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    titleContainer: {
        marginVertical: 54
    },
    title: {
        textAlign: "center",
        fontSize: 40,
        fontWeight: 'bold'
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: 'underline'
    },
    container: {
       padding: 24,
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       height: '100%',
       borderWidth: 1
    },
    footerText: {
        font: 16,
        fontWeight: 'bold',
        color: colors.blue,
        textAlign:'center',
        marginTop: 30
    }
})