import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";
import GoogleLogin from "../../../components/GoogleLogin";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
//khởi giao diện màn hình SigIn
//navigation dùng để điều hướng
const SignIn = ({ navigation }) => {
    //email và password để lưu trữ giá trị của ô nhập liệu
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Chuyển hướng sang màn hình đăng ký
    const onSignUp = () => {
        navigation.navigate('SignUp');
    };
    //Quay lại màn hình trước đó
    const onBack = () => {
        navigation.goBack();
    };
    //Kiểm tra xem các ô nhập liệu đã được điền đầy đủ thông tin chưa
    const validateInputs = () => {
        if (email === "" || password === "") {
            Alert.alert("Lỗi", "Chưa nhập đầy đủ thông tin");
            return false;
        }
        return true;
    };
    //Xử lý đăng nhập sau khi kiểm tra và xác nhận các ô nhập liệu
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
