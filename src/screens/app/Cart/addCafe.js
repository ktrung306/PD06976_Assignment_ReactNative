import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { styles } from "./styles";

const AddCafe = () =>{
const [name, setName] = useState('');
const [birthday, setBirthday] = useState('');

const saveData = async() =>{
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({name, birthday}),
    });
    result = await result.json();
    if(result) {
        console.log("Add success");
    }
}
    return(
       <View style={styles.modelContent}>
        <TextInput 
            style = {styles.input}
            placeholder="Enter name"
            value={name}
            onChangeText={text => setName(text)}
        />
        <TextInput 
            style = {styles.input}
            placeholder="Enter birthday"
            value={birthday}
            onChangeText={text => setBirthday(text)}
        />
        <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button} onPress={saveData}>
                <Text style={styles.buttonText}>Thêm Loại</Text>
            </TouchableOpacity>
        </View>
       </View>
    );
};
export default AddCafe;