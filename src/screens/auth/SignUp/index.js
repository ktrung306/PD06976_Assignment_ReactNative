import React, { useState } from "react";
import { Text, View } from "react-native"
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";
import Button from "../../../components/Button";

const SignUp =({navigation}) => {
    const [checked, setChecked] = useState(false);
    const onSignIn = () => {
        navigation.navigate('SignIn');
    };

    const onBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign Up"/>
            <View style={styles.input}>
            <Input label="Name" placeholder="HoTen"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="*******"/>
            </View>
            <View style={styles.checkRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
            title="Sign Up"></Button>
            <Seperator text={"Chào mừng bạn đến SignUp"}></Seperator>
           

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