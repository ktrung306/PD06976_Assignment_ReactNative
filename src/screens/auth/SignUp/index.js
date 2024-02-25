import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";
import Button from "../../../components/Button";
//khởi tạo SignUp
//navigation, dùng để điều hướng
const SignUp = ({ navigation }) => {
    //email và password để lưu trữ giá trị của ô nhập liệu
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);

    //Chuyển hướng sang màn hình đăng ký
    const onSignIn = () => {
        navigation.navigate('SignIn');
    };

    //Quay lại màn hình trước đó
    const onBack = () => {
        navigation.goBack();
    };
    //Kiểm tra xem các ô nhập liệu đã được điền đầy đủ thông tin chưa
    const validateInputs = () => {
        if (name === "" || email === "" || password === "") {
            Alert.alert("Lỗi", "Chưa nhập đầy đủ thông tin");
            return false;
        }
        return true;
    };
    //Xử lý đăng kí sau khi kiểm tra và xác nhận các ô nhập liệu
    const handleSignUp = () => {
        if (validateInputs()) {
            navigation.navigate('SignIn');
        }
    };

    return (
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign Up"/>
            <View style={styles.input}>
                <Input label="Name" placeholder="HoTen" text={name} onChangeText={setName}/>
                <Input label="Email" placeholder="example@gmail.com" email={email} onChangeText={setEmail}/>
                <Input isPassword label="Password" placeholder="*******" password={password} onChangeText={setPassword}/>
            </View>
            <View style={styles.checkRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button
                style={styles.button}
                onPress={handleSignUp}
                title="Sign Up"
            ></Button>
            <Seperator text={"Chào mừng bạn đến SignUp"}></Seperator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>
                Bạn đã có tài khoản rồi? 
                <Text onPress={onSignIn} style={styles.footerLink}>
                    {' '}
                    Sign In
                </Text>
            </Text>
        </View>
    );
};

export default SignUp;
