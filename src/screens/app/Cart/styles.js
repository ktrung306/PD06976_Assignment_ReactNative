import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#B0E0E0',
        borderRadius: 4,
        padding: 16,
        margin: 10,
    },
    containerText: {
        flexDirection: 'row',
        backgroundColor: '#B0E0E0',
        borderRadius: 4,
        padding: 16,
        margin: 10,
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonNew: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginHorizontal: 4,
        backgroundColor:'blue',
        marginBottom: 12,
        marginTop: 12,
    },
    name: {
        textAlign: 'left',
        marginRight: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
    },
    birthday: {
        textAlign: 'right',
        marginRight: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 4,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
    },

    //Viet style cho model

modelContent: {
    backgroundColor: 'white',
    padding: 16,
    marginTop: 100,
    borderRadius: 8,
},
input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
},
buttonGroup:{
    flexDirection: 'row',
    justifyContent: 'center',
},
button:{
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 4,
    marginLeft: 8
},
buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    },
}); 