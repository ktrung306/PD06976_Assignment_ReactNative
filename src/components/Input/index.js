import React, {useState} from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

const Input = ({label, placeholder, isPassword, value, onChangeText}) => {
    //email và password để lưu trữ giá trị của ô nhập liệu
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    //thay đổi giá trị của isPasswordVisible từ false sang true
    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    value={value} onChange={onChangeText}
                    secureTextEntry={isPassword && !isPasswordVisible}
                    placeholder={placeholder} 
                    style={styles.input} 
                    />
                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image
                            style={styles.eye}
                            source={ 
                                isPasswordVisible
                                 ? require('../../assets/eye.png')
                                 : require('../../assets/eye_closed.png')
                            }
                        />
                    </Pressable>
                ) : null}
            </View>
        </View>
    );
};
export default Input;