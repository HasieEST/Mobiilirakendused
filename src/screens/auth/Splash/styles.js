import { StyleSheet } from "react-native";

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
        color: '#FCA34D',
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
        color: '#4F63AC',
        textAlign:'center',
        marginTop: 30
    }
})