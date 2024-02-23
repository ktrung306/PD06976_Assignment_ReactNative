import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";
import GoogleLogin from "../../../components/GoogleLogin";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignUp = () => {
        navigation.navigate('SignUp');
    };

    const onBack = () => {
        navigation.goBack();
    };

    const validateInputs = () => {
        if (email === "" || password === "") {
            Alert.alert("Lỗi", "Chưa nhập đầy đủ thông tin");
            return false;
        }
        return true;
    };

    const handleSignIn = () => {
        if (validateInputs()) {
            navigation.navigate('Tabs');
        }
    };

    return (
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign In"/>
            <View style={styles.input}>
                <Input label="Email" placeholder="example@gmail.com" email={email} onChangeText={setEmail}/>
                <Input isPassword label="Password" placeholder="*******" password={password} onChangeText={setPassword}/>
            </View>
            <Button
                onPress={handleSignIn}
                style={styles.button} 
                title="Sign In"
            />
            <Seperator text="Chào mừng bạn đến SignIn"></Seperator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>
                Bạn chưa có tài khoản?
                <Text onPress={onSignUp} style={styles.footerLink}>
                    {' '}
                    Sign Up
                </Text>
            </Text>
        </View>
    );
};

export default SignIn;
