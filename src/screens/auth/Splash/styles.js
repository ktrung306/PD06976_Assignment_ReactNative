import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        padding: 24,
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#ADD8E6',
        borderWidth: 1,
    },
    img: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    innerTitle: {
        color: '#828282',
        fontSize: 25,
        textDecorationLine: 'underline',
    },
    titleContainer: {
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#FFA500',
    },
    footerText: {
        color: '#4F63AC',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
    }
});